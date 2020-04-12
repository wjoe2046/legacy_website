<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">


        <h1 class="primary--text">404: Page Not Found</h1>

        <p>Oops! It looks like you've wandered onto a non-existent page.</p>
        <br>
        <nuxt-link to="/"><v-btn color="primary">Back to Home Page</v-btn></nuxt-link>
        <br>
        <br>
        <p>Or don't. I'm an error page, not your boss.</p>


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
