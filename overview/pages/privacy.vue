<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        
        <h1 style="color:#bf3f4a">Privacy</h1>

        <p>We put a high priority on your privacy.<br />
          Firstly, we&#39;re not commercial. Your data will never be sold to third parties,
          anonymised or otherwise.
          <br />
          Secondly, your identifiable data will never leave your phone.
          All data that we collect will be anonymous or anonymised, to the best of our ability.</p>

        <h2>GPS</h2>

        <p>To help you manage your COVID-19 risk levels, we&rsquo;d like to access your phone&rsquo;s location data.
          This allows us to give you personalised information on your local health services,
          as well as alert you if you are traveling into high-risk areas.
          <br />
          If, at a later date, you receive a diagnosis of COVID-19 and choose to let us know,
          this functionality will help generate a risk heatmap to keep other members
          of your community safe. This will not tell them who you are and we work
          hard to ensure that this information cannot be traced back to you.</p>

        <h2>Bluetooth</h2>

        <p>To help you manage your COVID-19 risk levels, we&rsquo;d like to access your phone&rsquo;s Bluetooth.
          This allows us to send you alerts if you have been in close proximity to a
          confirmed case of COVID-19, allowing you to take appropriate action.
          <br />
          If, at a later date, you receive a diagnosis of COVID-19 and choose to let us know,
          this functionality will alert other users in your community who may have been exposed.
          This will not tell them who you are.
          <br />
          Turning on this function will not result in the collection of any personal
          or identifiable information, although it may allow other phone users to see
          that you have installed the COVID Watch app.</p>

        <h2>Health Information</h2>

        <p>We will never share your personal health information and infection status with anybody.</p>

        <p></p>
        If you think you would like to join our team, see our
        <b><nuxt-link to="/collaborate">collaborate</nuxt-link> </b>
        page.

        <p></p>

        <p>
          For all inquiries, please contact us at
          <b
          ><a href="mailto: contact@covid-watch.org"
          >contact@covid-watch.org</a
          ></b
          >.
        </p>

        <p>
          Lastly, if you just want to stay in the loop, you can sign up to our
          newsletter for updates:
        </p>

          <SubscribeForm></SubscribeForm>


      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import SubscribeForm from '../components/SubscribeForm.vue'

  export default {
    components: {
      SubscribeForm
    }
  }

</script>