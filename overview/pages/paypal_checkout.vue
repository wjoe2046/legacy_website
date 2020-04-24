<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <h1>Donations</h1>
        <br>

        <PaypalCheckout></PaypalCheckout>
        <br>
        <br>

        <h2>Covid Watch's legal status</h2>
        <br>
        <p>
          We have been approved as a not-for-profit organization in the state of
          Arizona. We have submitted the required application with the IRS, and
          are awaiting their response and our 501(c)(3) letter. Per the IRS
          regulations, while this application is pending, we are allowed to
          operate as a 501(c)(3) charitable organization and are eligible to
          receive tax deductible, charitable contributions.
        </p>

        <br>
        <h2>How we use donations</h2>
        <br>
        <p>Funding for this project will be used primarily for app development and marketing. In terms of product development, funds will be used to support team members who are experiencing financial hardship and who require support to be able to continue working on app development, beta testing, and technical support; this would ensure more dedicated hours spent by developers on this project, resulting in higher-quality work being produced as soon as possible.</p> 


    </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import PaypalCheckout from '../components/PaypalCheckout'

    export default {
        components: {
            PaypalCheckout,
        }
    }
</script>



