<template>
  <v-container class="mediaList">
    <v-row >
      <v-col class="d-flex justify-end" cols="12" lg="10">
        <span class="title"><nuxt-link to="/press_releases">Press Releases</nuxt-link></span>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <h1>Media Coverage</h1>
        <br>

        <template
          v-for="(media, i) in mediaList"
        >
          <div :key="i" class="mb-4">
            <span class="font-italic font-weight-light">{{ media.date }}</span>
            <br />
            <span class="title"><a target="_blank" :href="media.href">{{ media.title }}</a></span>
            <br />
            <span class="credit" v-html="media.credit"></span>.
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
          "date": "April 16, 2020",
          "title": "ACLU WHITE PAPER — PRINCIPLES FOR TECHNOLOGY-ASSISTED CONTACT-TRACING",
          "href": "https://www.aclu.org/report/aclu-white-paper-principles-technology-assisted-contact-tracing#content",
          "credit": "<a href=\"https://www.aclu.org/news/by/daniel-kahn-gillmor/\">Daniel Kahn Gillmor</a> for <i><a target=\"_blank\" " +
          "href=\"https://www.aclu.org/\">American Civil Liberties Union (ACLU)</a></i>"
        },
        {
          "date": "April 17, 2020",
          "title": "Does Covid-19 Contact Tracing Pose a Privacy Risk? Your Questions, Answered",
          "href": "https://www.wired.com/story/apple-google-contact-tracing-strengths-weaknesses/",
          "credit": "<a href=\"https://www.wired.com/author/andy-greenberg/\">Andy Greenberg</a> for <i><a target=\"_blank\" " +
          "href=\"https://www.wired.com/\">Wired</a></i>"
        },
        {
          "date": "April 15, 2020",
          "title": "Tracking the virus by smartphone: an app to contain the Covid-19 pandemic?",
          "href": "https://www.france24.com/en/20200415-tracking-the-virus-by-smartphone-an-app-to-contain-the-covid-19-pandemic",
          "credit": "from <i><a target=\"_blank\"" + 
          "href=\"https://www.france24.com/en/\">France 24</a></i>"
        },
        {
          "date": "April 14, 2020",
          "title": "Meet the Stanford researchers mobilizing to understand, fight COVID-19",
          "href": "https://news.stanford.edu/2020/04/14/covid-19-research-roundup/",
          "credit": "from <i><a target=\"_blank\"" + 
          "href=\"https.news.stanford.edu/\">Stanford News</a></i>"
        },
        {
          "date": "April 13, 2020",
          "title": "What privacy-preserving coronavirus tracing apps need to succeed",
          "href": "https://venturebeat.com/2020/04/13/what-privacy-preserving-coronavirus-tracing-apps-need-to-succeed/",
          "credit": "<a href=\"https://twitter.com/kharijohnson\">Khari Johnson</a> for <i><a target=\"_blank\" " +
          "href=\"https://venturebeat.com/\">VentureBeat</a></i>"
        },
        {
          "date": "April 13, 2020",
          "title": "The importance of Apple and Google’s rare collaboration on contact tracing",
          "href": "https://www.engadget.com/apple-google-contact-tracing-explainer-170056298.html",
          "credit": "<a href=\"https://twitter.com/chrisiptw\">Chris Ip</a> for <i><a target=\"_blank\" " +
          "href=\"https://www.engadget.com/\">Engadget</a></i>"
        },
        {
          "date": "April 10, 2020",
          "title": "How Apple and Google Are Enabling Covid-19 Contact-Tracing",
          "href": "https://www.wired.com/story/apple-google-bluetooth-contact-tracing-covid-19/",
          "credit": "<a href=\"https://www.wired.com/author/andy-greenberg/\">Andy Greenberg</a> for <i><a target=\"_blank\" " +
          "href=\"https://www.wired.com/\">Wired</a></i>"
        },
        {
          "date": "April 9, 2020",
          "title": "Stanford researchers help develop privacy-focused coronavirus alert app",
          "href": "https://news.stanford.edu/2020/04/09/stanford-researchers-help-develop-privacy-focused-coronavirus-alert-app/",
          "credit": "for <i><a target=\"_blank\" " +
          "href=\"https://news.stanford.edu/\">Stanford News</a></i>"
        },
        {
          "date": "April 8, 2020",
          "title": "Clever Cryptography Could Protect Privacy in Covid-19 Contact-Tracing Apps",
          "href": "https://www.wired.com/story/covid-19-contact-tracing-apps-cryptography/",
          "credit": "<a href=\"https://www.wired.com/author/andy-greenberg/\">Andy Greenberg</a> for <i><a target=\"_blank\" " +
          "href=\"https://www.wired.com/\">Wired</a></i>"
        },
        {
          "date": "April 7, 2020",
          "title": "Behind the global efforts to make a privacy-first coronavirus tracking app",
          "href": "https://www.nbcnews.com/tech/tech-news/behind-global-efforts-make-privacy-first-coronavirus-tracking-app-n1177871",
          "credit": "<a href=\"https://twitter.com/David_Ingram\">David Ingram</a> and <a href=\"https://twitter.com/byjacobward\">Jacob Ward</a> for <i><a target=\"_blank\" " +
          "href=\"https://www.nbcnews.com/\">NBC News</a></i>"
        },
        {
          "date": "April 6, 2020",
          "title": "Contact Tracing and the Fight Against Covid-19: How Digital Tools Can Help",
          "href": "https://institute.global/policy/contact-tracing-and-fight-against-covid-19-how-digital-tools-can-help",
          "credit": "<a href=\"https://twitter.com/BJMCooney\">Benedict Macon-Cooney</a> for <i><a target=\"_blank\" " +
          "href=\"https://institute.global/\">Institute for Global Change</a></i>"
        },
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
          "credit": "<a href=\"https://twitter.com/kharijohnson\">Khari Johnson</a> for <i><a target=\"_blank\" " +
          "href=\"https://venturebeat.com/\">VentureBeat</a></i>"
        },
        {
          "date": "April 1, 2020",
          "title": "A Mobile App Intervention to Slow COVID-19 Using Crowdsourced Data",
          "href": "https://www.youtube.com/watch?v=l5q8HuH82WE&list=PLYLBSCrrqNXxhUFJJtKauxr5HItq4a3gu&index=16&t=0s",
          "credit": "presentation by Executive Director Tina White at Stanford's " +
            "<a href=\"https://hai.stanford.edu/events/covid-19-and-ai-virtual-conference/overview\">" +
            "COVID-19 and AI: A Virtual Conference</a>"
        },
        {
          "date": "March 31, 2020",
          "title": "Fellow Working to Devise COVID-19 Alert Application",
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
          "href": "https://www.youtube.com/watch?v=7N0jC6UGzGY&feature=youtu.be&t=8129",
          "credit": "with the <a href=\"https://twitter.com/FaultLinesRadio\">Fault Lines</a> team, Radio Sputnik"
        }
      ],
    }),
  }

</script>

