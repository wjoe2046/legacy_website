<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="8">
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
  </v-container>
</template>

<style lang="scss">


#mc_embed_signup_scroll  {
  .mc-field-group {
    margin-top: .5em;
  }
  
  input { 
    border:1px solid gray;
    margin-top: .5em;
    border-radius: 2px;
    width: 14em;
  }

  .indicates-required {
    font-size: 14px;
  }
}

#mc-embedded-subscribe {
  color: white;
}

#subscribe-btn {
  margin-top: 20px;
}

// ALTERNATE: center subscribe form on page
.blog-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.indicates-required {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.validate {
   display: flex;
  flex-direction: column;
  align-items: center;
}

</style>