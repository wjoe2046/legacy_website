<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <v-row align="center" justify="center">
            <nuxt-link  to="/press_releases/google_apple_press_release">
              <v-hover v-slot:default="{ hover }" > 
                <v-alert 
                  outlined 
                  dense 
                  dismissable 
                  color="info" 
                  type="info"
                  :elevation="hover ? 2 : 0"
                  :class="{ 'on-hover': hover }"
                  class="d-flex pa-2 mx-10"
                  >
                    Read our press release: "Covid Watch Celebrates Apple and Google’s COVID-19 Contact Tracing Announcement"
                  </v-alert>
              </v-hover>
            </nuxt-link>
        </v-row>
        <v-row align="center">
          <v-col cols="12" sm="5" class="hand_image">
            <img
              alt="Covid Watch"
              src="~/assets/images/mobile/hand_with_app_covid_watch.png"
            />
            <div class="fade"></div>
          </v-col>

          <v-col cols="12" sm="7">
            <h2 class="primary--text">Reduce the spread of COVID-19 without increasing the spread of surveillance.</h2>
            <br />
            <p>
              Covid Watch aims to empower people to protect their communities from COVID-19
              without sacrificing their personal privacy.
            </p>
            <p>
              Our app uses Bluetooth signals to detect when users are in proximity to each other
              and alerts them anonymously if they were in contact with someone later confirmed to
              have COVID-19, without anyone (including the government) being able to track who
              exposed whom.
            </p>
            <p>
              We were among the first groups to release an <a href="https://github.com/Co-Epi/CEN/">
              open-source protocol</a> for privacy-preserving, decentralized Bluetooth contact
              tracing, and have been collaborating with MIT’s <a href="http://safepaths.mit.edu/">SafePaths</a>
              and <a href="https://www.coepi.org/">CoEpi</a> to make this protocol a standard
              across apps and jurisdictions. We are aiming to release the full app by mid-April.
            </p>
            <br>
          </v-col>
        </v-row>
        <br/>
        <v-row>
          <template v-for="(section, i) in sections">
            <v-col
              :key="i"
              cols="12"
              md="6"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :elevation="hover ? 2 : 0"
                  :class="{ 'on-hover': hover }"
                  flat
                  nuxt
                  :to="section.link"
                >
                  <v-card-title class="primary--text headline mb-1">
                    {{ section.title }}
                  </v-card-title>
                  <v-card-subtitle>{{ section.subtitle }}</v-card-subtitle>
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
        <br/>
        <h2 class="primary--text">We're pursuing a collaborative approach</h2>
        <v-row justify="center">
          <v-col cols="12" sm="12" class="text-justify">
            <p>
              We know that COVID watch is just one of a constellation of other apps in this
              space. We're collaborating with teams around the world, exchanging code and ensuring
              system and data interoperability. <nuxt-link to="/about#comparison">Read more on how
              we relate to other projects in the space</nuxt-link>.
            </p>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" sm="9" class="text-center">
           <h3>Some of our collaborators include:</h3>
          </v-col>
        </v-row>
        <v-row justify="center">
          <template v-for="(partner, i) in partners">
              <v-hover v-slot:default="{ hover }">
                <v-col
                  :key="i"
                  cols="12"
                  sm="3"
                  class="text-center"
                >
                  <v-card
                    :elevation="hover ? 2 : 0"
                    :class="{ 'on-hover': hover }"
                    class="pa-2"
                  >
                    <a :href="partner.link">
                      <v-img
                        :src="partner.img"
                        aspect-ratio="1"
                        max-height="150px"
                        contain
                      ></v-img>
                      <p>{{ partner.name }}</p>
                    </a>
                  </v-card>
                </v-col>
              </v-hover>
            </template>
        </v-row>
        <br/>
        <v-alert
          style="display:flex;justify-content:center;"
          outlined
          icon="mdi-email"
          dense
        >
          Want to collaborate? Have any questions? Please reach out to us at
          <b><a href="mailto: contact@covid-watch.org">contact@covid-watch.org</a></b>.
        </v-alert>
        <SubscribeForm></SubscribeForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
  .hand_image {
    position: relative;
    // height: 80vh;
  }

  .hand_image img {
    display: block;
    position: relative;
    z-index: 1;
    width: 80%;
    height: auto;
    max-width: 80%;
  }

  .hand_image .fade {
    position: absolute;
    bottom: 0;
    width: 80%;
    height: 15vh;
    z-index: 2;
    background: rgba(255, 255, 255, 0) linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 80%) repeat scroll 0 0;
  }

  .ourPeople {
    display: flex;
    justify-content: space-between;
  }

  .peopleProfile {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      border-radius: 4px;
      box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
    }

    p {
      font-size: 12px;
    }

    strong {
      font-size: 18px;
    }
  }

</style>

<script>
  import SubscribeForm from '../components/SubscribeForm.vue'

  export default {
    components: {
      SubscribeForm,
    },
    data: () => ({
      sections: [
        {
          title: "About Us",
          link: "/about",
          subtitle: "Meet our team, read our mission statement, follow our project timeline, " +
          "and learn where we fit in among the many apps in this space.",
        },
        {
          title: "FAQ",
          link: "/faq",
          subtitle: "Get answers to questions such as: There is already a lockdown, so what's " +
          "the point?, Will this app tell me where or when I was exposed? and What data are you " +
          "collecting?.",
        },
        {
          title: "White Paper",
          link: "/article",
          subtitle: "Read our March 20 white paper, “Slowing the spread of infectious diseases " +
          "like COVID-19 with crowdsourced data”. Our modelling shows that a system like COVID " + 
          "Watch can significantly impact transmission and detection.",
        },
        {
          title: "Get Involved",
          link: "/collaborate",
          subtitle: "If you're working on a similar project, or if you're interested in " +
          "contributing to Covid Watch, we'd love to hear from you. Find out how to volunteer, " +
          "and what skills we currently need the most.",
        }
      ],
      partners: [
        {
          name: "Stanford University",
          link: "https://stanford.edu",
          img: require('~/assets/images/logo/stanford_logo_square.png'),
        },
        {
          name: "TCN Coalition",
          link: "https://tcn-coalition.org/",
          img: require('~/assets/images/logo/tcn_coalition.png'),
        },
        {
          name: "Community Epidemiology in Action",
          link: "https://www.coepi.org/",
          img: require('~/assets/images/logo/coepi_logo.png'),
        },
        {
          name: "PrivateKit: SafePaths",
          link: "http://safepaths.mit.edu/",
          img: require('~/assets/images/logo/private_kit_logo.png'),
        },
      ],
    }),
  }
</script>
