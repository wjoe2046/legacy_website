<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <section class="text-content">
          <div class="container">
            <div class="blog-hero"></div>

            <h1>Join Our Team</h1>
            <br>

            <p>
              We&#39;ve grown from a pair of researchers from Stanford
              University and the University of Waterloo into an
              interdisciplinary team of researchers, software engineers, public
              health and security experts. But we still need more help. We are
              looking for more volunteers to join us and help us build an app
              that uses crowdsourced data to inform individuals of their risk
              and slow the spread of COVID-19.
            </p>

            <h2>Most Wanted Positions!</h2>
            <p>(1) Communications Manager - own aspects of marketing, outreach for media, fundraising, etc.  </p>
            <p>(2) Strategic Partnerships - outreach and relationship management with healthcare organizations, similar projects, etc.</p>
            <p>(3) Experienced (2+ yrs) mobile app developers</p>


            <h3>Wanted Positions</h3>

            <p>
              (1) Project Manager - coordinate the tasks and workflow for group
              of software engineers
            </p>

            <p>
              (2) Personal Assistant - assist Executive Director with various
              admin tasks
            </p>

            <p>
              (3) System Administrator - help manage our website and backend.
               Familiarity with AWS (specifically S3 and Cloudfront) ideal.
            </p>

            <p>
              (4) Marketing Manager - assist with mailing campaigns,
               branding, and media outreach.
            </p>

            <br>

            <h3>Support Roles</h3>

            <p>
              Even if you don&#39;t have a skillset directly related to the
              project&#39;s design or development, there are still ways to help.
              We&#39;re a rapidly expanding group, and we&#39;re also interested
              if you have experience in:
            </p>

            <p>
              (1) Fundraising and grant applications for not-for-profit
              organisations
            </p>

            <p>(2) PR and Outreach</p>

            <p>(3) Blogging, particularly with a scientific background</p>

            <p>(4) Onboarding and orientation into organisations</p>

            <h3>Research Roles</h3>

            <p>
              We&#39;re currently looking for people with one (or more!) of the
              following skills or backgrounds:
            </p>

            <p>(1) General mobile app UI design (iOS and/or Android)</p>

            <p>
              (2) Advanced web development skills, particularly in interactive
              visualisations
            </p>

            <p>(3) Mobile app development skills</p>

            <p>(4) Software project management</p>

            <p>
              (6) Legal expertise around the handling of personal health
              information
            </p>

            <p>
              (7) Experience in the fields of data re-identification or privacy
              research and implementation.
            </p>

            <p>(7) Crypto / security experience</p>

            <p>(8) Experience with Bluetooth on Android and iOS</p>

            <p>(9) Electrical Engineers</p>

            <h3>Applying</h3>

            <p>
              If you know of anyone who could fill these roles, get them to
              email us at
              <b
                ><a href="mailto: contact@covid-watch.org"
                  >contact@covid-watch.org
                </a></b
              >.
            </p>

            <p>
              We recommend you read the
              <b
                ><a
                  href="https://forum.effectivealtruism.org/posts/8chk6DHZXctGHtNoz/covid-19-risk-assessment-app-idea-for-vetting-and-discussion"
                  >forum post
                </a></b
              >
              to have the context to understand what you&#39;d be working on and
              the motivations behind the project. The post was optimistic about
              what could be accomplished in a short time period, and we are no
              longer sure about providing scores and recommendations, but we
              think we may be able to build the heat map referenced in the post
              with help from other researchers.
            </p>

            <p>
              If you&#39;re interested in collaborating and have one of the
              skillsets listed above, please contact us at
              <b
                ><a href="mailto: contact@covid-watch.org"
                  >contact@covid-watch.org
                </a></b
              >
              with the role you would like to fill and a brief (~300 words)
              introduction with your skills and links to previous work.
            </p>

            <p>
              We're also interested if you have information that you think could
              be relevant to this project. In particular, we are interested in
              any other teams that are currently, or were previously, engaged in
              similar efforts.
            </p>

            <h2>Other Ways to Share</h2>

            <h3>Awareness</h3>

            <p>
              Even if you don&#39;t have the ability to directly support us
              right now, consider sharing our project over social media (<a href="https://twitter.com/COVIDWatchApp">Twitter</a> or <a href="https://www.facebook.com/CovidWatch2020">Facebook</a>) or by
              word of mouth. To keep up to date with our progress, or to see if
              a role that suits you becomes available, you can sign up to our
              newsletter:
            </p>
          </div>
        </section>

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
