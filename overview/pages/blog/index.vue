<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="9">
        <section class="text-content">
          <div class="container">
            <h1>Blog</h1>
            <br>
            <div class="blog-hero">

              <div class="blog-item">
                <div class="blog-item-content">
                  <span class="subtitle">April 18 2020</span>
                  <h2>The Covid Watch app can now estimate duration and proximity of events, even when it is in the background!</h2>
                  <p>
                      The Covid Watch pilot app hit several major milestones in the past 24 hours:
                      background Temporary Contact Number (<a href="https://github.com/TCNCoalition/TCN#the-tcn-protocol">TCN</a>)
                      exchange and estimating contact duration and proximity. We are on track to release a
                      beta version of our app before the end of April.
                  </p>
                  <p>
                      <nuxt-link class="read-more" to="/blog/progressbackground"
                      >Read More...</nuxt-link
                      >
                  </p>
                </div>
              </div>

              <div class="blog-item">
                <div class="blog-item-content">
                  <span class="subtitle">March 29 2020</span>
                  <h2>Closed beta testing and other progress</h2>

                  <p>
                    Firstly, progress so far:
                    We have an app! It’s in closed beta testing at the moment, but it exists and it (so far) works
                    on both iOS and Android. Additionally, we have our first $1000 (USD) in funding, courtesy of
                    the <a href="https://www.1517fund.com/">1517 Fund</a>, as well as AWS credits. We’ve had our first
                    <nuxt-link to="/medialist">media coverage</nuxt-link>, and we’re in talks
                    with multiple health agencies and other groups across the world about implementing our Bluetooth
                    contact tracing system.
                  </p>

                  <p>
                    Secondly, as our team has grown and we’ve reached out to connections across the tech world,
                    we’ve encountered several other teams working on similar efforts...
                  <p>
                    <nuxt-link class="read-more" to="/blog/progress3"
                    >Read More...</nuxt-link
                    >
                  </p>
                </div>
              </div>

              <div class="blog-item">
                <div class="blog-item-content">
                  <span class="subtitle">March 20 2020</span>
                  <h2>White Paper: Slowing the spread of infectious diseases using crowdsourced data</h2>

                  <p>
                    Rather than an ordinary blog post, this is what much of our
                    team have been working on for most of the past week. This is
                    a comprehensive summary of our project, now named COVID
                    Watch.
                  </p>
                  <p>
                    It covers the what, why, how, when, and where of this
                    project in detail, as well as discusses our progress so far.
                    The aim of doing so is to assist interested parties and
                    organisations in becoming familiar with the project in its
                    entirety. If that sounds like you, this is the place to
                    start.
                  </p>

                  <p>
                    <nuxt-link class="read-more" to="/article"
                      >Read More...</nuxt-link
                    >
                  </p>
                </div>
              </div>

              <div class="blog-item">
                <div class="blog-item-content">
                  <span class="subtitle">March 7 2020</span>
                  <h2>Why we're integrating Bluetooth data into our app</h2>

                  <p>
                    This project is now roughly two and a half weeks old, and in
                    that time we&#39;ve made significant progress - not just
                    into solving the problems we&#39;d begun with, but in
                    understanding which problems we should be trying to solve in
                    the first place. We have a far deeper understanding of the
                    technologies and challenges.
                  </p>

                  <p>
                    At the same time, with the number of confirmed COVID-19
                    cases now over 100 000...<br />
                    <nuxt-link class="read-more" to="/blog/bluetooth"
                      >Read More...</nuxt-link
                    >
                  </p>
                </div>
              </div>

              <div class="blog-item">
                <div class="blog-item-content">
                  <span class="subtitle">March 6 2020</span>
                  <h2>Insights from Co-Founder Tina White</h2>

                  <p>Welcome to our second insight post!</p>

                  <p>
                    Today&#39;s post comes from Tina White, a PhD candidate from
                    Stanford University specialising in applied machine learning
                    research. She&#39;s the main organiser here at the COVID-19
                    Risk App: the below post is a lightly edited version of an
                    internal document. Much of the technical content mentioned
                    has been covered in other blog posts: instead, the insight
                    here is how our project organises and plans...<br />
                    <nuxt-link class="read-more" to="/blog/insight2"
                      >Read More...</nuxt-link
                    >
                  </p>
                </div>
              </div>

              <div class="blog-item">
                <div class="blog-item-content">
                  <span class="subtitle">March 4 2020</span>
                  <h2>GPS-based proof-of-concept and other progress</h2>

                  <p>
                    The big news first: we have a proof of concept!<br />
                    It takes multiple GPS trajectories and runs multiple
                    epidemiological simulations on them based on an assumption
                    of proximity-based transmission and our latest information
                    about COVID-19. It uses these simulations to generate a risk
                    heatmap...<br />
                    <nuxt-link class="read-more" to="/blog/progress2"
                      >Read More...</nuxt-link
                    >
                  </p>
                </div>
              </div>

              <div class="blog-item">
                <div class="blog-item-content">
                  <span class="subtitle">February 28 2020</span>
                  <h2>Insights from Co-Founder James Petrie</h2>

                  <p>
                    Welcome to our first insight post!<br />
                    In this series, our researchers will share what they&#39;re
                    currently working on and the challenges they&#39;re facing.
                    They will be more technical than our progress posts, but as
                    the name suggests they will hopefully provide some insight
                    into the state of the project.<br />
                    Today&#39;s post comes from James Petrie...<br />
                    <nuxt-link class="read-more" to="/blog/insight1"
                      >Read More...</nuxt-link
                    >
                  </p>
                </div>
              </div>

              <div class="blog-item">
                <div class="blog-item-content">
                  <span class="subtitle">February 27 2020</span>
                  <h2>Progress during our first week</h2>

                  <p>
                    Phew! What a week.<br>
                    We&rsquo;ve gone from two researchers and a
                    
                    <a href="https://forum.effectivealtruism.org/posts/8chk6DHZXctGHtNoz/covid-19-risk-assessment-app-idea-for-vetting-and-discussion">
                      forum post
                    </a>
                    
                    to a team of over a dozen, with expert academic advice and
                    support rolling in. As you may expect, much of our effort has gone into keeping on top of the organisational aspects of the project: onboarding new members...
                  </p>
                  <nuxt-link class="read-more" to="/blog/progress1">
                    Read More...
                  </nuxt-link>
                  
                </div>
              </div>

            </div>
          </div>
        </section>
      </v-col></v-row
    ></v-container
  >
</template>
