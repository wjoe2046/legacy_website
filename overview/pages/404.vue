<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">


        <h1 style="color:#bf3f4a">404: Page Not Found</h1>

        <p>Oops! It looks like you've wandered onto a non-existent page.
         Check the URL that sent you here and try again.</p>
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
