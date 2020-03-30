<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">


        <h1 style="color:#bf3f4a">Media Coverage</h1>

        <p>
          As our project has grown, we've begun to gain some media coverage, listed here:
        </p>

        <p>
          <i><a href="https://news.yahoo.com/privacy-rights-may-become-next-victim-killer-pandemic-014627271.html">
            Privacy rights may become next victim of killer pandemic
          </a></i> by <a href="https://twitter.com/rleverafp">Rob Lever</a>, AFP.
        </p>

        <p>
          <i><a href="https://youtu.be/7N0jC6UGzGY?t=8129">
            Radio interview
          </a></i> with the <a href="https://twitter.com/FaultLinesRadio">Fault Lines</a> team, Radio Sputnik.
        </p>

        <p>
          For all media-related inquiries, please contact us at
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
