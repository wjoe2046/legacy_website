<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">


        <h1 style="color:#bf3f4a">Media Coverage</h1>
        <br>

        
        <div>
          <div>April 3, 2020</div>
          <i><a target="_blank" href="https://drive.google.com/file/d/1VH9uwJJliheVy5unCXtAHQbEdsuJdYD7/view?usp=sharing">
            US and Europe race to develop ‘contact tracing’ apps
          </a></i> by Financial Times.
          <i><a target="_blank" href="https://www.ft.com/content/d42acff2-b0b5-400b-b38f-ec621d4efd95">
            Link to paywalled article.
          </a></i>
        </div>
         <br>

        <div>

          <div>April 2, 2020</div>
          <i><a target="_blank" href="https://venturebeat.com/2020/04/02/surveillance-ai-and-saving-lives-top-agenda-at-coronavirus-conference/">
            Surveillance, AI, and saving lives top agenda at coronavirus conference

          </a></i> by <a href="https://twitter.com/kharijohnson">Khari Johnson</a>, VentureBeat.
        </div>
         <br>


        <div>
          <div>March 31, 2020</div>

          <i><a target="_blank" href="https://www.krellinst.org/csgf/about-doe-csgf/news-events/white-covid-watch">
            Fellow Working to Devise COVID-19 Contact Tracking Tool

          </a></i> by the Department of Energy Computational Science Graduate Fellowship.
        </div>
         <br>

        <div>
          <div>March 28, 2020</div>
          <i><a target="_blank" href="https://news.yahoo.com/privacy-rights-may-become-next-victim-killer-pandemic-014627271.html">
            Privacy rights may become next victim of killer pandemic
          </a></i> by <a target="_blank" href="https://twitter.com/rleverafp">Rob Lever</a>, AFP.
        </div>
         <br>

        <div>
          <div>March 13, 2020</div>
          <i><a target="_blank" href="https://youtu.be/7N0jC6UGzGY?t=8129">
            Radio interview
          </a></i> with the <a target="_blank" href="https://twitter.com/FaultLinesRadio">Fault Lines</a> team, Radio Sputnik.
        </div>
         <br>
          <br>

        <div>
          For all media-related inquiries, please contact us at
          <b
          ><a target="_blank" href="mailto: contact@covid-watch.org"
          >contact@covid-watch.org</a
          ></b
          >.
        </div>
         <br>

        <div>
          Lastly, if you just want to stay in the loop, you can sign up to our
          newsletter for updates:
        </div>

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

