<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="8">
        <h2>Donations</h2>
        <p>
          We're still in the process of setting up a donations system. Check
          back here in a few days!
        </p>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
            <v-row align="center">
              <v-col cols="1" class="dolla-sign" justify="end">
                $
              </v-col>
              <v-col cols="11" md="3" style="padding-left:0"
                ><v-text-field
                  v-model="donationAmount"
                  :rules="donationAmountRules"
                  label="Amount"
                  required
                ></v-text-field
              ></v-col>
            </v-row>
          </v-container>

          <v-btn :disabled="!valid" color="info" class="mr-4" @click="checkout">
            Donate
          </v-btn>
        </v-form>
        <br />
        <p>
          We have been approved as a not-for-profit organization in the state of
          Arizona. We have submitted the required application with the IRS, and
          are awaiting their response and our 501(c)(3) letter. Per the IRS
          regulations, while this application is pending, we are allowed to
          operate as a 501(c)(3) charitable organization and are eligible to
          receive tax deductible, charitable contributions.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      valid: true,
      donationAmount: "",
      donationAmountRules: [
        v => this.inputToValidDollarAmount(v) != null || "Invalid dollar amount"
      ],
      session_id: ""
    };
  },
  mounted() {
    let stripeScript = document.createElement("script");
    stripeScript.setAttribute("src", "https://js.stripe.com/v3/");
    document.head.appendChild(stripeScript);
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
    async checkout() {
      if (!this.$refs.form.validate()) {
        return;
      }
      fetch("http://127.0.0.1:5000/?amount=" + this.donationAmount).then(
        resp => {
          resp.json().then(data => {
            console.log(data.session_id);
            var stripe = Stripe("pk_test_6ypP8JjNOpTbNSTOIi00o8ot00B1IWWkjr");
            stripe
              .redirectToCheckout({
                sessionId: data.session_id
              })
              .then(function(result) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer
                // using `result.error.message`.
              });
          });
        }
      );
    }
  }
};
</script>

<style>
.dolla-sign {
  font-size: 35px;
  padding-right: 0;
  padding-left: 0;
  text-align: center;
  color: #779f98;
}
.monthly-checkbox {
  margin-top: 0;
  padding-top: 0;
}
</style>