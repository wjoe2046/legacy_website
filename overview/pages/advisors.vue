<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <v-row align="center">
         <v-col cols="12" sm="5" style="display:flex;flex-direction:column;align-items:center;">
            <img
              width="100%"
              style="margin-right: 20px;border:1px solid gray;border-radius:2px;"
              alt="COVID Watch"
              src="~/assets/images/map2.png"
            />
            <p style="color:gray;">Hotspots of COVID-19 risk in our map demo (fake data)</p>
          </v-col>
        </v-row>
        <br />
        <h1 style="color:#bf3f4a">Our Advisors</h1>

        <p>Given how ambitious and potentially impactful our project is, we want to make sure we do it correctly. A poorly-executed app could easily do more harm than good: warning our users away from areas with no need to while directing them towards high-risk ones, causing unnecessary panic, or lulling people into a dangerously false sense of security.<br />
          <br />
          To avoid that, we&#39;ve sought out expert advice from subject-matter experts from the very inception of the project. The following academics have gone above and beyond in assisting us, providing advice and support that has helped get COVID Watch this far.</p>

        <h2>Professor Julie Parsonnet</h2>

        <p><img
          alt="Julie Parsonnet"
          src="~/assets/images/team/JParsonnet.jpg"
        /></p>

        <h3>About</h3>

        <p>Dr. Parsonnet is an Infectious Diseases Specialist and Epidemiologist at Stanford
          (Depts. of Medicine and Epidemiology and Population Health).
          She has a particular interest in gastrointestinal infections, including
          <em>H. pylori</em> infection and diarrheal diseases, tuberculosis and illnesses
          with prolonged fever. Dr. Parsonnet also has an active research enterprise in which
          she studies the way infections contribute to the development of chronic diseases
          including cancer, allergy and obesity. She has had continuous funding from the
          National Institutes of Health for over 25 years and has served as a member of
          numerous advisory boards, professional societies, and scientific review committees.</p>

        <p></p>

        <h2>Professor Plinio Morita</h2>

        <p><img
          alt="Plinio Morita"
          src="~/assets/images/team/PMorita.jpg"
        /></p>

        <h3>About</h3>

        <p>Dr. Morita is a Director of the Ubiquitous Health Technology Lab (UbiLab).
          His research focuses on population level surveillance, remote patient monitoring
          (RPM), and personalized medicine&nbsp;technologies to be used to prevent unnecessary
          visits to hospitals and drive our healthcare system toward&nbsp;community care and telehealth.
          The current state of the technology limits how clinicians can use data collected
          from RPM and IoT systems as the quality, frequency, and reliability of the data
          is normally lower than clinical standards.</p>

        <p></p>
        If you think you would like to join our team, see our
        <b><nuxt-link to="/collaborate">collaborate</nuxt-link> </b>
        page.

        <p></p>

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
        
        <v-row>
          <v-col>
            <section class="text-content">
              <div class="container">
                <div class="blog-hero">
                  <h1 style="color:#BF3F4A">Subscribe to our newsletter</h1>
                  <p>
                    We're glad you're interested! To stay in the loop, sign up for
                    notifications using the form below.
                  </p>
                  <!-- Begin Mailchimp Signup Form -->

                  <div id="mc_embed_signup">
                    <form
                      action="https://covid19risk.us19.list-manage.com/subscribe/post?u=2edaa31c7afb7799ee770eb46&amp;id=362b89c2c0"
                      class="validate"
                      id="mc-embedded-subscribe-form"
                      method="post"
                      name="mc-embedded-subscribe-form"
                      novalidate=""
                      target="_blank"
                    >
                      <div id="mc_embed_signup_scroll">
                        

                        <div class="indicates-required">
                          <span class="asterisk">* indicates required</span> 
                        </div>

                        <div class="mc-field-group">
                          <label for="mce-EMAIL"
                            >Email Address: <span class="asterisk">*</span>
                          </label>
                          <input
                            class="required email"
                            id="mce-EMAIL"
                            name="EMAIL"
                            type="email"
                            value=""
                          />
                        </div>

                        <div class="mc-field-group">
                          <label for="mce-FNAME">First Name: </label>
                          <input id="mce-FNAME" name="FNAME" type="text" value="" />
                        </div>

                        <div class="mc-field-group">
                          <label for="mce-LNAME">Last Name: </label>
                          <input id="mce-LNAME" name="LNAME" type="text" value="" />
                        </div>

                        <div
                          class="response"
                          id="mce-error-response"
                          style="display:none"
                        ></div>

                        <div
                          class="response"
                          id="mce-success-response"
                          style="display:none"
                        ></div>
                      </div>
                      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->

                      <div
                        aria-hidden="true"
                        style="position: absolute; left: -5000px;"
                      >
                        <input
                          name="b_2edaa31c7afb7799ee770eb46_362b89c2c0"
                          tabindex="-1"
                          type="text"
                          value=""
                        />
                      </div>

                      <v-btn color="#BF3F4A" id="subscribe-btn">
                        <input
                          class="button"
                          id="mc-embedded-subscribe"
                          name="subscribe"
                          type="submit"
                          value="SUBSCRIBE"
                        />
                      </v-btn>
                    </form>
                  </div>
                  <!--End mc_embed_signup-->
                </div>
              </div>
            </section>
          </v-col>
        </v-row>



      </v-col>
    </v-row>
  </v-container>
</template>
