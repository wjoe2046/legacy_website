<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">

        <div class="container">
          <div class="blog-hero"></div>

          <h1 style="color:#BF3F4A">About Us</h1>
          <h2>Our Mission</h2>

          <p>
            Covid Watch aims to empower people to protect their communities from COVID-19
            without sacrificing their personal privacy.
          </p>
          <p>
            COVID-19 has a relatively long infectious incubation period,
            averaging five days but potentially up to two weeks, during which
            there may be asymptomatic transmission. In other words, there may
            be a period of time in which people who carry COVID-19 don&#39;t
            necessarily show symptoms and may not even realise they are
            infected, but are still capable of infecting others. This makes it
            harder for health professionals and epidemiologists to trace who
            has come into contact with infected persons (&#39;contact
            tracing&#39;), which in turn makes the virus more difficult to
            effectively contain.
          </p>

          <p>
            Many people, however, now carry smartphones, and Bluetooth-enabled phones can see which other
            phones they're in proximity to. This could be used to rapidly and automatically implement a
            notification system similar to contact tracing, but anonymous. This would help to limit the
            spread of COVID-19 and other infectious diseases. We can use Bluetooth connections between users
            to enact cryptographically secure contact tracing and alerting them if we learn that they have
            been exposed to COVID-19, without collecting the identities, exposure, or infection status of
            any users.
          </p>

          <h2 id="principles">Our Principles</h2>
          <v-row>
            <template v-for="(principle, i) in principles">
              <v-col
                :key="i"
                cols="12"
                sm="4"
              >
                <v-card
                  outlined
                  height="100%"
                >
                  <v-card-title class="text-uppercase primary--text">{{ principle.name }}</v-card-title>
                  <v-card-text class="body-1" v-html="principle.description"></v-card-text>
                </v-card>
              </v-col>
            </template>
          </v-row>


          <h2 id="team">Our Team</h2>

          <v-alert
            class="d-flex justify-center" 
            outlined
            icon="mdi-account-multiple-plus"
            dense
          >
            If you're interested in joining us or helping out, have a look at our
            <nuxt-link to="/collaborate">collaborate</nuxt-link> page.
          </v-alert>

          <p>
            We've grown from a pair of concerned researchers into a group of over 100 academics,
            public health experts, and technologists. Our team is spread over multiple continents,
            and we have new volunteers joining every day, so team membership is very fluid. You
            can find an overview of many members of our team, including our advisors,
            <nuxt-link to="/article#contributors">on our Whitepaper page</nuxt-link>. 
          </p>

          <p>
          </p>

          <h3>Co-Founders</h3>

          <v-row justify="center">
            <template v-for="(founder, i) in founders">
              <v-col
                :key="i"
                cols="12"
                md="3"
                sm="6"
                class="text-center founder-profile"
              >
                <v-img
                  :src="founder.img"
                  aspect-ratio="1"
                  :alt="founder.name"
                ></v-img>
                <p class="title mb-0">{{ founder.name }}</p>
                <p class="text-uppercase">{{ founder.role }}</p>
                <v-divider></v-divider>
                <p class="mt-2 font-italic font-weight-light">{{ founder.roleCaption }}</p>
                <p class="text-justify caption">{{ founder.bio }}</p>
              </v-col>
            </template>
          </v-row>

          <h2 id="timeline">Timeline</h2>

          <p>
            We&#39;ve recruited a strong team, successfully developed an
            internal proof of concept, and formalised a strong theoretical
            basis for what we want to do. Our next steps are tentatively
            planned as follows, contingent on no insurmountable obstacles
            appearing:
          </p>

          <p>
            <strong>One Week (by mid-March 2020): </strong>Have a beta app
            completed, available for external audiences. This will have at
            least Bluetooth contact tracing functionality. Approach public
            health agencies regarding collaboration and authenticating
            infection data.
          </p>

          <p>
            <strong>One to Two Weeks (by mid-April 2020): </strong>Further refine
            our beta app. Liaise with public health agencies to implement systems
            to validate diagnoses. Finalize inter-app standards.
          </p>

          <p>
            <strong>Two to Four Weeks (by May 2020): </strong>Roll out
            the app in impacted communities as a pilot program in conjunction
            with public health agencies, refining and adding functionality as
            needed. Assess efficacy and make adjustments as needed.
          </p>
        </div>

        <a id="comparison"></a>
        <ProjectComparison> </ProjectComparison>


      </v-col>
    </v-row>
  </v-container>
</template>

<style type="scss" scoped>

h2 {
  margin: 2rem 0rem 1rem;
}

#principles .v-card--outlined {
  border-color: var(--v-secondary-base);
}

.founder-profile .v-image { 
    border-radius: 4px;
}
</style>

<script>

  import ProjectComparison from '../components/ProjectComparison.vue'

  export default {
    components: {
      ProjectComparison
    },
    data: () => ({
      principles: [
        {
          name: "Privacy",
          description: "Tracking is a sensitive issue, especially in a " +
              "project like ours that necessitates some degree of data sharing to " +
              "be effective. This is why we&#39;re absolutely committed to " +
              "building an app that goes out of its way to respect and preserve " +
              "your privacy. In fact, that's a big part of why we're building this app " +
              "in the first place. Superficially similar (but far more invasive) " +
              "projects are already being trialled around the world - we decided " +
              "that it would be a good idea to have a transparent, not-for-profit " +
              "alternative that has privacy built into it from the very " +
              "beginning."
        },
        {
          name: "Efficacy",
          description: "With such high stakes, we want to be absolutely sure that we're using " +
            "our time and energy wisely. We aren&#39;t aiming to take focus away from more " +
            "directly impactful work like vaccine development or front-line healthcare, and we " +
            "recommend that you only help our project if it doesn't detract from more " +
            "important work elsewhere. Additionally, we're on the lookout for overlapping work " +
            "by groups with similar values, to avoid reinventing the wheel."
        },
        {
          name: "Altruism",
          description: "This project has its roots in " +
            "<a href='https://www.effectivealtruism.org/'>effective altruism</a>: doing the " +
            "most good that we can with what we have. We're not here to make a profit, get " +
            "famous, or push an ideology. We're a group of volunteers doing this out of a " +
            "desire to make the world a better place - for us, and for you."
        }
      ],
      founders: [
        {
          name: "Tina White",
          role: "Executive Director",
          roleCaption: "Tina is involved in leadership, outreach, research guidance and " +
            "communication.",
          bio: "Tina is currently enrolled at Stanford University as a PhD candidate. For her " + 
            "dissertation, she has designed several neural network architectures that are " +
            "biased to break problems into parts while learning to make aerodynamics " + 
            "predictions from very few examples. She has developed two novel machine learning " +
            "methods for faster and more accurate reduced order models. She has also invented " +
            "and patented a method for eliminating transonic flutter in turbomachinery at Honeywell.",
          img: require("~/assets/images/team/TWhite.png"),
        },
        {
          name: "James Petrie",
          role: "Head of Research",
          roleCaption: "James is involved in the numerical modelling and research aspects of " +
            "the project.",
          bio: "James is currently a PhD candidate in the field of Applied Mathematics at the " +
            "University of Waterloo. His research has focused on applications of numerical " +
            "modelling, machine learning, and optimization to fracture mechanics and autonomous " + 
            "robotics. James has a master's degree in Computational Mathematics from the " + 
            "University of Waterloo and a bachelor's degree in Engineering Physics from the " +
            "University of British Columbia.",
          img: require("~/assets/images/team/JPetrie.jpg"),
        },
        {
          name: "Rhys Fenwick",
          role: "Head of Communications",
          roleCaption: "Rhys is involved in communication, outreach, web design, and project " +
            "management.",
          bio: "Rhys is a science communicator from the University of Wollongong, Australia " +
            "with a background in medical biotechnology and software development. He currently " +
            "works at Science Space, Wollongong as well as doing freelance science communication.",
          img: require("~/assets/images/team/RFenwick.jpg"),
        },
        {
          name: "Zsombor Szabo",
          role: "Head of Engineering",
          roleCaption: "Zsombor is involved in the mobile app and bluetooth library development.",
          bio: "Zsombor is a mobile app developer with 10+ years of experience. He " +
            "founded IZE Ltd, which has released apps such as Berkanan Messenger, an offline " +
            "messaging service powered by Bluetooth mesh networks. He holds a master's degree " +
            "in next-generation networks from Budapest University of Technology and Economics.",
          img: require("~/assets/images/team/ZSzabo.jpg"),
        },
      ],
    })
  }
</script>
