<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <section class="text-content">
          <div class="container">
            <div class="blog-hero"></div>

            <h1 class="primary--text">Our Mission</h1>
            <br>
            <h3>Our Project</h3>

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

            <h3>Our Principles</h3>

            <p>
              <b>(1) Privacy: </b>Tracking is a sensitive issue, especially in a
              project like ours that necessitates some degree of data sharing to
              be effective. This is why we&#39;re absolutely committed to
              building an app that goes out of its way to respect and preserve
              your privacy.<br />
              In fact, that&#39;s a big part of why we&#39;re building this app
              in the first place. Superficially similar (but far more invasive)
              projects are already being trialled around the world - we decided
              that it would be a good idea to have a transparent, not-for-profit
              alternative that has privacy baked into it from the very
              beginning.
            </p>

            <p>
              <b>(2) Efficacy: </b>With such high stakes, we want to be
              absolutely sure that we&#39;re using our time and energy wisely.
              We aren&#39;t aiming to take focus away from more directly
              impactful work like vaccine development or front-line healthcare,
              and we recommend that you only help our project if it doesn&#39;t
              detract from more important work elsewhere. Additionally,
              we&#39;re on the lookout for overlapping work by groups with
              similar values, to avoid reinventing the wheel.
            </p>

            <p>
              <b>(3) Altruism: </b>This project has its roots in
              <b
                ><a href="https://www.effectivealtruism.org/"
                  >effective altruism</a
                ></b
              >: doing the most good that we can with what we have. We&#39;re
              not here to make a profit, get famous, or push an ideology.
              We&#39;re a group of volunteers doing this out of a desire to make
              the world a better place - for us, and for you.
            </p>

            <h3>Our Timeline</h3>

            <p>
              We&#39;ve recruited a strong team, successfully developed an
              internal proof of concept, and formalised a strong theoretical
              basis for what we want to do. Our next steps are tentatively
              planned as follows, contingent on no insurmountable obstacles
              appearing:
            </p>

            <p>
              <strong>One Week (by 17-MAR-2020): </strong>Have a beta app
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

            <h3>Our People</h3>
            <br>
            <p>
              An overview of many members of our team, including our advisors, can be found
              <b><a href="/article#contributors">here</a></b>.
            </p>

            <p></p>

            <p></p>

            <p>
              If you&#39;re interested in joining us or helping out, have a look
              at our
              <b><nuxt-link to="/collaborate">collaborations </nuxt-link></b>
              page for more information.
            </p>
          </div>
        </section>

        <a id="comparison"></a>
        <ProjectComparison> </ProjectComparison>


      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  import ProjectComparison from '../components/ProjectComparison.vue'

  export default {
    components: {
      ProjectComparison
    }
  }
</script>
