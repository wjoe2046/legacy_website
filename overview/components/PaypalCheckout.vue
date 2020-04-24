<template>
  <div>
    <div v-if="!paidFor">
      <h2>Enter the amount to donate:</h2>

        <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
                <v-row align="center">
                <v-col cols="1" class="dolla-sign" justify="end">
                    USD $
                </v-col>
                <v-col cols="10" md="3" class="pl-0"
                    ><v-text-field
                    v-model="donationAmount"
                    :rules="donationAmountRules"
                    label="Amount"
                    required
                    ></v-text-field
                ></v-col>
                </v-row>
            </v-container>

            <!-- this copied from Isaiah's original donate.vue file.  at some point we may want to have Paypal buttons appear only AFTER a user inputs a valid dollar amount  -->


          <!-- <v-btn :disabled="!valid" color="info" class="mr-4" @click="checkout">
            Set me up!
          </v-btn> -->
        </v-form>


    </div>

    <div v-if="paidFor">
      <h1>Thank you for contributing to Covid Watch.</h1>
    </div>

    <div ref="paypal"></div>
  </div>
</template>

<script>
    export default {
        name: "PaypalCheckout",
        data: function() {
            return {
                valid: true,
                loaded: false,
                paidFor: false,
                donationAmount: "",
                donationAmountRules: [
                v => this.inputToValidDollarAmount(v) != null || "Invalid dollar amount - Paypal won't accept"
            ]
            };
        },
        mounted: function() {
            const script = document.createElement("script");
            script.src =
            "https://www.paypal.com/sdk/js?client-id=Afprg8FnVcpPiC_cm4BmOL-BzsI6_yZbDvFI3pRLIMqd6HIMueS2qcIvLCIwnURBaFlM--utWD5e3mAg";
            script.addEventListener("load", this.setLoaded);
            document.body.appendChild(script);
        },
        methods: {
            inputToValidDollarAmount(value) {
                // Returns a string that's a valid dollar amount or null
                var regex = /^[0-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
                if (regex.test(value)) {
                    //Input is valid, check the number of decimal places
                    var twoDecimalPlaces = /\.\d{2}$/g;
                    var oneDecimalPlace = /\.\d{1}$/g;
                    var noDecimalPlacesWithDecimal = /\.\d{0}$/g;

                    if (value.match(twoDecimalPlaces)) {
                    //all good, return as is
                    return value;
                    }
                    if (value.match(noDecimalPlacesWithDecimal)) {
                    // wrong
                    return null;
                    }
                    if (value.match(oneDecimalPlace)) {
                    // wrong
                    return null;
                    }
                    //else there is no decimal places and no decimal
                    return value + ".00";
                }
                return null;
            },
            setLoaded: function() {
            this.loaded = true;
            window.paypal
                .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                    purchase_units: [
                        {
                        amount: {
                            currency_code: "USD",
                            value: this.donationAmount
                        }
                        }
                    ]
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    this.paidFor = true;
                    console.log(order);
                },
                onError: err => {
                    console.log(err);
                }
                })
                .render(this.$refs.paypal);
            }
        }
    };
</script>

<style>
.dolla-sign {
  font-size: 25px;
  padding-right: 0;
  padding-left: 0;
  text-align: center;
  color: #779f98;
}
.monthly-checkbox {
  margin-top: 0;
  padding-top: 0;
}


.show {
  display: block;
}

.hide {
  display: none;
}

#stripe-error-message p {
  color: #BF3F4A;
}

#stripe-error-message a {
  text-decoration: underline;
}
</style>