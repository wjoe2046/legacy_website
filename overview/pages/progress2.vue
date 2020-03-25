<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="8">
        <div class="blog-hero">
          <!--- <img src="images/blog-image.jpg" alt="Full width blog image" />-->
          <h1>Progress Post: 4th of March 2020</h1>
        </div>

        <h3>Proof and Challenges</h3>

        <p>
          The big news first: we have a proof of concept!&nbsp; It takes
          multiple GPS trajectories and runs multiple epidemiological
          simulations on them based on an assumption of proximity-based
          transmission and our latest information about COVID-19. It uses these
          simulations to generate a risk heatmap, showing the areas most likely
          to contain a high risk of infection. Unfortunately it uses a private
          Google Maps API key, and we&#39;re still working on making it publicly
          available.<br />
          <br />
          It&#39;s far from perfect, and we&#39;re actively working on improving
          it- our current challenge is to add background demographic and
          infection data into the simulation, to compensate for low adoption
          rates. Even if you&#39;re the only person in your city with the app,
          we still want to provide something of value to you: a strong default
          model should do just that, by delivering you the latest information
          and risk profile, tailored for your area.
        </p>

        <h3><strong>Legal Questions</strong></h3>

        <p>
          One tricky question that&#39;s come up in our development so far is
          &#39;what about
          <a href="https://www.hhs.gov/hipaa/index.html">HIPAA</a
          >?&#39;&nbsp;<br />
          <br />
          <span
            >The Health Insurance Portability and Accountability Act of 1996, or
            HIPAA, sets the basis for how organisations in America handle
            sensitive health information. These laws are strict, which as
            enthusiastic privacy supporters we&#39;re very grateful for, but it
            does make our job more difficult. In particular, the institutional
            links of many of our members and academic advisors to universities
            means that handling information like self-reported symptoms or
            infection status is a potential legal minefield, no matter how pure
            our intentions.&nbsp;<br />
            <br />
            As such, we&#39;re exploring ways to satisfy both the wording and
            the spirit of the law, while still providing the service we&#39;re
            aiming for: a privacy-focused way to slow the spread of COVID-19. We
            have several options: internal restructuring to create a firewall
            between institutions and data, for instance, or changing what
            information we gather - but more on that below.</span
          >
        </p>

        <h3>Reaching Out</h3>
        We&#39;re far from the only team working on ways to slow the spread of
        COVID-19. There are a range of approaches being explored: we&#39;ve been
        keeping a close eye on them to see if we can work together with any of
        them.<br />
        <br />
        In particular, we&#39;re a big fan of the
        <a href="http://www.coepi.org/">CoEpi</a> project. They share a similar
        open-source and pro-privacy philosophy, and their team is making good
        progress. We got in contact with them, and while our approaches are
        different enough that we&#39;ll be continuing our parallel projects,
        we&#39;ll be collaborating closely and expect to share expertise and
        code in the future.<br />
        <br />
        One big difference between our projects is that they&#39;re focusing on
        Bluetooth data, rather than GPS as we have been. We were impressed by
        their work, and Bluetooth provides a range of interesting benefits. For
        one- Bluetooth signals, like people and viruses, have a hard time going
        through walls. As such, for two people in close proximity, a Bluetooth
        connection gives a stronger indication of functional proximity than GPS
        does: it can distinguish between two people on the same bus versus two
        people in adjacent cars. It doesn&#39;t get as easily confused by
        altitude as GPS: people passing over each other in a skyscraper, even a
        hundred metres apart, are shown by GPS as being next to each other in a
        way that Bluetooth doesn&#39;t get confused by. Finally, there are ways
        to anonymise Bluetooth connections that aren&#39;t available with GPS
        data, helping us sidestep the HIPAA issues listed above. This last point
        is particularly important- HIPAA is complex, and we don&#39;t know how
        long it will take to navigate: cutting that particular Gordian knot
        could make a real difference to how quickly we can roll out a useful
        product.<br />
        <br />
        After discussing it with the CoEpi team and amongst ourselves, we&#39;re
        therefore going to be working towards a combined GPS/Bluetooth
        functionality. We have slightly different aims: they&#39;re focusing
        more on a bottom-up community approach to epidemiology, while we&#39;re
        aiming for a broad way to help individual people; along with regular
        communication, we can be sure that we won&#39;t be reinventing the
        wheel. The specific balance between GPS and Bluetooth is something
        we&#39;re still working on, but we&#39;re confident we&#39;re heading in
        the right direction.
        <p>
          All up, we&#39;re in a better place than we were a week ago: we know
          what direction we want to head in, and we&#39;ve made good steps
          towards it.<br />
          If you think you might be able to help us out, check out our
          <b><nuxt-link to="/collaborate">collaborations</nuxt-link></b>
          page, or reach out to us at
          <b
            ><a href="mailto: contact@covid-watch.org"
              >contact@covid-watch.org</a
            ></b
          >; and if you just want more updates, sign up to the newsletter on our
          homepage.<br />
          <br />
          Thanks for reading, and don&rsquo;t forget to wash your hands!<br />
          - The COVID-19 Risk App team
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
