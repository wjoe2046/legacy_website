<template>
  <v-container id="stripeCheckout">
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <h1>Donations</h1>
        <br>

        <p>
          NOTE: All donations are denominated in USD. The checkout page may take several seconds to load. 
        </p>
        <p>
          If the donate button is not taking you to our checkout page, it may be an unintended consequence of browser extension(s) (ad blockers, Grammarly, etc). Please open up an <a href="https://www.computerworld.com/article/3356840/how-to-go-incognito-in-chrome-firefox-safari-and-edge.html">incognito window in your browser</a> (this pauses all extensions) or temporarily disable your browser extensions and try again.
        </p>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
            <v-row align="center">
              <v-col cols="1" class="dolla-sign" justify="end">
                $
              </v-col>
              <v-col cols="11" md="3" class="pl-0"
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
        <div id="stripe-error-message" class="hide">
          <p>It is likely that a browser extension is causing errors with our checkout process.</p>

          <p>
            Please open up an incognito window in your browser (this pauses all extensions) or temporarily disable your browser extensions and try again. 
          </p> 

          <p>
            <a href="https://www.computerworld.com/article/3356840/how-to-go-incognito-in-chrome-firefox-safari-and-edge.html">Here is a link showing how to open an incognito browser</a>   if you are not sure how.
          </p>
        </div>

        <p>
          We have been approved as a not-for-profit organization in the state of
          Arizona. We have submitted the required application with the IRS, and
          are awaiting their response and our 501(c)(3) letter. Per the IRS
          regulations, while this application is pending, we are allowed to
          operate as a 501(c)(3) charitable organization and are eligible to
          receive tax deductible, charitable contributions.
        </p>

        <br>
        <h2>Where does your money go?</h2>
        <br>
        <p>Funding for this project will be used primarily for app development and marketing. In terms of product development, funds will be used to support team members who are experiencing financial hardship and who require support to be able to continue working on app development, beta testing, and technical support; this would ensure more dedicated hours spent by developers on this project, resulting in higher-quality work being produced as soon as possible.</p> 
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
      fetch(
        "https://covidwatch-stripe-integration.herokuapp.com/?amount=" +
          this.donationAmount
      ).then(resp => {
        resp.json().then(data => {
          console.log(data.session_id);
          var stripe = Stripe("pk_live_HrLwKzzj7L3KHj5QOPUATfus00HUh7F1NY");
          stripe
            .redirectToCheckout({
              sessionId: data.session_id
            })
            .then(function(result) {
              // If `redirectToCheckout` fails due to a browser or network
              // error, display the localized error message to your customer
              // using `result.error.message`.
              console.log(result.error.message);
              var errorMessage = document.getElementById("stripe-error-message");
              errorMessage.setAttribute("class", "show");
            });
        });
      });
    }
  }
};
</script>

<style>
/* 
#stripeCheckout {
  padding: 0px;

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
} */
</style>
