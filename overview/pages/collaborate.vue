<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="8">
        <section class="text-content">
          <div class="container">
            <h1>Collaborate with Covid Watch</h1>
            <v-alert 
              class="d-flex justify-center"
              outlined
              dense
              dismissable 
              v-model="alert"
              color="info"
              >
                Help us finalize our app design- take <a href="https://covidapp.typeform.com/to/FnlXep">a quick survey</a>!
              </v-alert>
            <h2>Volunteering with Covid Watch</h2>
            <br/>
            <p>
              We've grown from a pair of researchers from Stanford University and the University
              of Waterloo into an interdisciplinary team of more than 100 researchers, software
              engineers, public health and security experts. In addition to
              <a href="/about#team">our founders</a>, a number of our volunteers are working
              full-time on the project. However, there is plenty of room to contribute as a
              volunteer or advisor even if you can only put in a few hours a week.
            </p>

            <v-alert
              class="d-flex justify-center" 
              outlined
              icon="mdi-email"
              dense
            >
              Know someone who could fill one of the roles below? Please reach out to us at
              <b><a href="mailto: contact@covid-watch.org">contact@covid-watch.org</a></b>.
            </v-alert>

            <h3 class="headline">Most Wanted Volunteers</h3>

            <ul
              :class="{'subtitle-1': $vuetify.breakpoint.smAndDown, 'title': $vuetify.breakpoint.mdAndUp}"
              class="font-weight-regular"
            >
              <li>
                <strong>Web developers</strong> to build an organization-facing web app (counties, businesses, health authorities, etc)
              </li>
              <li>
                <strong>Executive or Personal Assistants</strong> with consistent full-time or part-time availability 
              </li>
              <li>
                <strong>Marketing and Communications managers</strong> to lead aspects of marketing, media outreach, and fundraising.
              </li>
            </ul>

            <h3 class="headline">Developers</h3>
            <p>
              Developers who want to join our growing effort should feel free to jump in directly
              by looking at open issues in the <b><a href="https://github.com/covid19risk">Covid
              Watch</a></b> and <b><a href="https://github.com/TCNCoalition">TCN Coalition</a></b>
              Github repos. If you'd like an invitation to the Slack that we're using to
              coordinate, just send a message to
              <a href="mailto: contact@covid-watch.org">contact@covid-watch.org</a>.
            </p>
            <p>
              Some of the skillsets we need:
            </p>
            <ul>
              <li>UI / UX Design</li>
              <li>iOS and Android native app development</li>
              <li>Web development, including in interactive visualizations</li>
              <li>Animation Experience</li>
              <li>Software project management</li>
              <li>Experience with mobile Bluetooth APIs</li>
            </ul>

            <h3 class="headline">Other Roles</h3>

            <p>
              We have a need for volunteers with a variety of non-developer skills, including:
            </p>
            <ul>
              <li>PR and Outreach</li>
              <li>Social Media Manager</li>
              <li>Fundraising and grant applications for not-for-profit organisations</li>
              <li>Blogging, particularly with a scientific background</li>
              <li>Legal expertise around the handling of personal health information</li>
              <li>Data re-identification or privacy research and implementation</li>
              <li>Cryptography and information security</li>
              <li>Electrical engineering</li>
            </ul>

            <h2>Other Ways to Get Involved</h2>

            <p>
              You don't need to join our team to help out the project! It would also help us out
              if you'd consider:</p>
            <ul>
              <li>Taking <a href="https://covidapp.typeform.com/to/FnlXep">a quick survey</a> to
                help us finalize our app design</li>
              <li>Spreading the word about our project over
                <a href="https://twitter.com/COVIDWatchApp">Twitter</a> or
                <a href="https://www.facebook.com/CovidWatch2020">Facebook</a></li>
              <li>Making a <a href="">donation to our non-profit</a> to help us support our volunteers</li>
            </ul>

            <p>
              We're also interested if you have information that you think could
              be relevant to this project. In particular, we are interested in
              any other teams that are currently, or were previously, engaged in
              similar efforts.
            </p>
            <p>
              To keep up to date with our progress, or to see if
              a role that suits you becomes available, you can also sign up to our
              newsletter:
            </p>
          </div>
        </section>

        <SubscribeForm></SubscribeForm>


      </v-col>
    </v-row>
  </v-container>
</template>

<style type="scss" scoped>

h2 {
  border-bottom: 1px solid var(--v-secondary-base);
  padding: 0.3rem 0rem;
}

h3 {
  color: var(--v-secondary-base);
  padding: 0.3rem 0rem;
  margin-top: 1rem;
}

ul {
  padding-bottom: 1rem;
}

</style>

<script>
  import SubscribeForm from '../components/SubscribeForm.vue'

  export default {
    components: {
      SubscribeForm
    },
    data: () => ({
      alert: true,
    })
  }

</script>
