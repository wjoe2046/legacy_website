<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <v-row align="center">
          <v-col cols="12" sm="5" class="hand_image">
            <img
              alt="COVID Watch"
              src="~/assets/images/mobile/hand_with_app_covid_watch.png"
            />
            <div class="fade"></div>
            <!-- <img
              width="100%"
              style="margin-right: 20px;border:1px solid gray;border-radius:2px;"
              alt="COVID Watch"
              src="~/assets/images/mobile/iphone_empty.png"
            />
            <p style="color:gray;font-size:1em">Current app homepage</p> -->
          </v-col>

          <v-col cols="12" sm="7">
            <h1 style="color:#BF3F4A">Our Mission</h1>
            <br>
            <h2>
              Slow the spread of infectious diseases like COVID-19 with
              crowdsourced data.
            </h2>
            <br>
            <p>
              COVID Watch aims to empower people to protect their communities from COVID-19,
              without sacrificing their personal privacy. We are building a decentralized,
              privacy-preserving smartphone app that will alert users if they have been exposed to COVID-19. Our open source code can be found <a href="https://github.com/covid19risk">here</a>.
            </p>
            <br>
          </v-col>
        </v-row>
            <h2>Our Project</h2>
            <br>

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

            

            <h2>Our Timeline</h2>
            <br>

            <p>
              We&#39;ve recruited a strong team, successfully developed an
              internal proof of concept, and formalised a strong theoretical
              basis for what we want to do. Our next steps are tentatively
              planned as follows, contingent on no insurmountable obstacles
              appearing:
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

            <h2>Our People</h2>
            <br>

            <p>
              Our team is comprised of a collection of academics, volunteers, and professional technologists. An overview of many members of our team, including our advisors, can be found
              <b><nuxt-link to="/article#contributors">on our Whitepaper page</nuxt-link></b>.

              We have new volunteers joining our effort every day and contributing meaningfully so our team is very fluid.
            </p>

            <p>
              If you&#39;re interested in joining us or helping out, have a look
              at our
              <b><nuxt-link to="/collaborate">collaborations </nuxt-link></b>
              page for more information.
            </p>

            <p> <strong>Our three co-founders are:</strong> </p>

            <div class="ourPeople">
                <div class="peopleProfile">
                     <img
                      alt="Tina White"
                      src="~/assets/images/team/TWhite.png"
                    />

                    <p><strong>Tina White - Co-Founder</strong></p>

                    <p>Tina is involved in leadership,
                      outreach, and research guidance and communication.</p>

                    <p>Tina is currently enrolled at the Stanford   University as a PhD candidate.
                      For her dissertation, she has designed several neural network architectures
                      that are biased to break problems into parts while learning to make aerodynamics
                      predictions from very few examples. She has developed two novel machine learning
                      methods for faster and more accurate reduced order models. She has also invented
                      and patented a method for eliminating transonic flutter in turbomachinery at Honeywell.</p>
                </div>

                <div class="peopleProfile">
                  <img
                    alt="Rhys Fenwick"
                    src="~/assets/images/team/RFenwick.jpg"
                  />

                  <p style="margin-top:11px;"><strong >Rhys Fenwick - Co-Founder</strong></p>

                  <p>Rhys is involved in communication
                    and web design, as well as the administrative and programming aspects of the project.</p>

                  <p>Rhys is a science communicator from the University of Wollongong, Australia
                    with a background in medical biotechnology and software development.
                    He currently works at Science Space, Wollongong as well as doing freelance science communication.</p>
                </div>

                <div class="peopleProfile">
                    <img
                      alt="James Petrie"
                      src="~/assets/images/team/JPetrie.jpg"
                    />

                    <p><strong>James Petrie - Co-Founder</strong></p>

                    <p>James is involved in the numerical modelling
                      and research aspects of the project.</p>

                    <p>James is currently a PhD candidate in the field of Applied Mathematics
                      at the University of Waterloo. His research has focused on applications
                      of numerical modelling, machine learning, and optimization to fracture mechanics
                      and autonomous robotics. James has a master&rsquo;s degree in Computational Mathematics
                      from the University of Waterloo and a bachelor&rsquo;s degree in Engineering Physics
                      from the University of British Columbia.</p>
                </div>
            </div>



            <a id="comparison"></a>
            <ProjectComparison> </ProjectComparison>

            <h2>Our Principles</h2>
            <br>

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
              <b>(2) Efficacy: </b>With such high stakes, we want to be sure that everyone's time and energy is used wisely. We recommended when we started that our volunteers only spend their time on mobile app development efforts if it didn't detract from urgent vaccine development or other front-line work in which they may have expertise. Additionally, we've been on the lookout for overlapping work by groups with similar values to avoid reinventing the wheel. We've found many such groups and have been collaborating and sharing resources.
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
            <p>
          For all inquiries, please contact us at
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
  import ProjectComparison from '../components/ProjectComparison.vue'

  export default {
    components: {
      SubscribeForm,
      ProjectComparison
    }
  }

</script>




