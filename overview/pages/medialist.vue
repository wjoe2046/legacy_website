<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">


        <h1 style="color:#bf3f4a">Media Coverage</h1>
        <br>

        <template
          v-for="(media, i) in mediaList"
        >
          <div :key="i" class="mb-4">
            <span class="font-italic font-weight-light">{{ media.date }}</span>
            <br />
            <span class="title"><a target="_blank" :href="media.href">{{ media.title }}</a></span>
            <br />
            <span v-html="media.credit"></span>.
          </div>
        </template>

        <v-divider></v-divider>
        <br />
        <br />

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
    },
    data: () => ({
      mediaList: [
        {
          "date": "April 3, 2020",
          "title": "US and Europe race to develop ‘contact tracing’ apps",
          "href": "https://drive.google.com/file/d/1VH9uwJJliheVy5unCXtAHQbEdsuJdYD7/view?usp=sharing",
          "credit": "<a href=\"https://twitter.com/MsHannahMurphy\">Hannah Murphy</a> for <i><a target=\"_blank\" " +
            "href=\"https://www.ft.com/content/d42acff2-b0b5-400b-b38f-ec621d4efd95\">Financial Times</a></i>"
        },
        {
          "date": "April 2, 2020",
          "title": "Surveillance, AI, and saving lives top agenda at coronavirus conference",
          "href": "https://venturebeat.com/2020/04/02/surveillance-ai-and-saving-lives-top-agenda-at-coronavirus-conference/",
          "credit": "<a href=\"https://twitter.com/kharijohnson\">Khari Johnson</a> for VentureBeat"
        },
        {
          "date": "April 1, 2020",
          "title": "A Mobile App Intervention to Slow COVID-19 Using Crowdsourced Data",
          "href": "https://www.youtube.com/watch?v=z4105Exe23Q&t=3h36m45s",
          "credit": "presentation by Executive Director Tina White at Stanford's " +
            "<a href=\"https://hai.stanford.edu/events/covid-19-and-ai-virtual-conference/overview\">" +
            "COVID-19 and AI: A Virtual Conference</a>"
        },
        {
          "date": "March 31, 2020",
          "title": "Fellow Working to Devise COVID-19 Contact Tracking Tool",
          "href": "https://www.krellinst.org/csgf/about-doe-csgf/news-events/white-covid-watch",
          "credit": "news release from Department of Energy Computational Science Graduate Fellowship"
        },
        {
          "date": "March 28, 2020",
          "title": "Privacy Preserving Contact Tracing for COVID-19",
          "href": "https://www.youtube.com/watch?v=AWkXrL3Y09s",
          "credit": "Foresight Institute led by Peter Eckersley, one of our security advisors. " +
            "Executive Director Tina White also makes an appearance"
        },
        {
          "date": "March 28, 2020",
          "title": "Privacy rights may become next victim of killer pandemic",
          "href": "https://news.yahoo.com/privacy-rights-may-become-next-victim-killer-pandemic-014627271.html",
          "credit": "<a  href=\"https://twitter.com/rleverafp\">Rob Lever</a> for AFP"
        },
        {
          "date": "March 13, 2020",
          "title": "Radio Interview",
          "href": "https://www.youtube.com/watch?v=AWkXrL3Y09s",
          "credit": "with the <a href=\"https://twitter.com/FaultLinesRadio\">Fault Lines</a> team, Radio Sputnik"
        }
      ],
    }),
  }

</script>

