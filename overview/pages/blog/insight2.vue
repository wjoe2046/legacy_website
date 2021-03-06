<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <div class="blog-hero">
          <h1>Insights from Co-Founder Tina White</h1>
        </div>

        <h3>March 7 2020</h3>

        <p>
          Welcome to our first insight post!<br />
          <br />
          In this series, our researchers will share what they&#39;re currently
          working on and the challenges they&#39;re facing. They will be more
          technical than our progress posts, but as the name suggests they will
          hopefully provide some insight into the state of the project.
        </p>

        <p>
          Today&#39;s post comes from Tina White, a PhD candidate from Stanford
          University specialising in applied machine learning research.
          She&#39;s the main organiser here at the COVID-19 Risk App: the below
          post is a lightly edited version of an internal document. Much of the
          technical content mentioned has been covered in other blog posts:
          instead, the insight here is how our project organises and plans, as
          well as how you can help.
        </p>

        <blockquote>
          <p>
            We are looking for software engineers to volunteer to complete our
            second Bluetooth Communication Programming Challenge, described
            below.
          </p>

          <p>
            Also, congratulations to Daniel Blank for completing our first Epi
            Model Programming Challenge! He had help from our multi-talented
            science communicator, Rhys Fenwick, who overlayed his GPS heat map
            results on a nice Google map. First runner-up was Mikhail Voloshin.
            I&rsquo;ll share more at the end of this post about the challenge
            they completed.
          </p>

          <p>
            Thanks to their efforts, and those of our team, our proof of concept
            and epidemiological model are coming along well. We&#39;ve added age
            functionality, which is important, given how heavily COVID-19
            symptoms seem to vary by age. We&#39;re also adding a temporal
            function (displaying change over time) and background demographic
            information.
          </p>

          <p>
            We have about 30 volunteers right now, ranging from full-time to
            giving occasional advice. But we still need more software engineers
            willing to volunteer in this effort.
          </p>

          <p>
            We&#39;re also looking at how to most quickly achieve HIPAA
            compliance. And we have a plan. But I&rsquo;d love to talk with more
            experts in this area. With the right help, we could have useful
            functionality ready within days or weeks.
          </p>

          <h3>About Our Plan, For App Users</h3>

          <p>
            Our app users would see an improved heat map of their local area.
            And if they are exposed to someone with COVID-19, they would be
            informed and receive instructions for what to do next. They would
            also be instructed to keep their GPS and Bluetooth on at all times
            for the foreseeable future. The data we collect from via GPS and
            Bluetooth will be strongly cryptographically secure, with details in
            the next section for how we will accomplish this. None of your GPS
            data will be uploaded directly to our database either - only handled
            locally on your phone.
          </p>

          <p>
            Also, we know keeping GPS and Bluetooth on can often drain phone
            battery, but it&rsquo;s a small price to pay. We recommend carrying
            an extra phone charger around.
          </p>

          <p>
            If diagnosed with COVID-19, we would request that our users agree to
            put their CDC (or equivalent) code into the app. Our system has been
            designed to be fully anonymous. No one could ever find out via the
            app that you were sick. Even if someone hacked into our system, all
            they could see is a list of random numbers. This app has been
            designed with very strict privacy measures in mind to keep our users
            medical information completely private and safe.
          </p>

          <h3>About Our Plan: Understanding the Technology</h3>

          <p>
            Our ideas have been evolving as we have come to understand how to
            comply with HIPAA, respect everyone&rsquo;s privacy, and take full
            advantage of the relevant mobile app technology.
          </p>

          <p>
            One thing that we&#39;ve found is that while GPS data is incredibly
            useful, it does have limitations - in particular, our associations
            with Stanford put us at risk of breaching HIPAA laws depending on
            how we handle the information we work with GPS-alone. We&#39;re
            working on ways to navigate that, but it may take some time and we
            all want to move forward as quickly as possible.
          </p>

          <p>
            Based on feedback from experts in HIPAA and epidemiology, we are
            going to pursue building an app that uses both Bluetooth and GPS to
          </p>

          <p>(1) show an improved map to users and</p>

          <p>(2) help the CDC with participatory contact tracing.</p>

          <h3>Motivation for integrating GPS with Bluetooth technology:</h3>

          <p>
            We expect that HIPAA compliance using GPS-alone could take months to
            navigate, while I&#39;m confident that we can have at least some
            useful and HIPAA-compliant GPS-Bluetooth functionality within days
            or weeks. Given how fast-moving the COVID-19 situation is, this
            boost in speed is a massive benefit.
          </p>

          <p>
            Also, bluetooth proximity warnings will more accurately reflect
            infection risk than GPS does: Bluetooth doesn&#39;t travel well
            through walls, which is good - it can distinguish people sitting on
            the same bus versus neighbouring cars. It doesn&#39;t get confused
            by altitude differences, so it won&#39;t give everyone in a building
            a past proximity alert- just those on the same floor. It&#39;s also
            more privacy-preserving than GPS data, and groups like the CoEpi
            team led by Scott Leibrand have already put a lot of thought into
            how it could work in ways that are cryptographically secure.
          </p>

          <h3>This is how the Bluetooth system works:</h3>

          <p>
            When two app users&rsquo; phones are nearby they communicate and
            collectively generate and store a random number. If one of the phone
            owners is diagnosed, they are given a code by the CDC. This code can
            be easily put into the app, which then posts a message to our
            database: a log file of every random number they have generated.
            Other phones periodically download these log files from the database
            and compare the numbers against their own history. If there is a
            match, that means they were near a potentially infectious person.
            The app instructs them on how to contact the CDC to inquire about
            next steps.
          </p>

          <p>
            This system is completely decentralized. No private data ever leaves
            the phone and even if someone could hack into the database, all they
            would see is a long list of random numbers.
          </p>

          <h3>This is how the GPS system works:</h3>

          <p>
            When a Bluetooth contact event is logged, the location can be logged
            locally on the phone as well, but its exact GPS coordinates do not
            need to be stored in our database, which would compromise privacy.
            Instead, in our database, only the center of a large
            &quot;square&quot; would be stored, telling us that this interaction
            occurred somewhere inside the square. We would be able to visualize
            these squares on a map with the square size being a function of
            population density.
          </p>

          <p>
            If each square has ~1000 or ~10,000 people living in it, the
            database is still effectively anonymous, but would allow us to
            reveal a map to our app users that is much finer-grained than the
            county-level maps that we currently have in the United States.
          </p>

          <p>
            Finally, in our database, this is what we would have collected and
            stored: randomized contact event numbers and square location
            centers. If someone says they are sick with COVID-19 using a code
            from the CDC, we can update the map within that square AND we can
            contact the person interacted with with a message instructing them
            to contact the CDC (or equivalent), without anyone being able to
            find out exactly where their interactions took place (fully
            private!).
          </p>

          <p>
            Our open source code is available
            <a href="https://github.com/covid19risk/proof">here.</a>
          </p>

          <h3>Bluetooth Communication Programming Challenge</h3>

          <p>
            Now that we have a plan, we need to think about our next steps
            quickly. To that effect, we need researchers and software engineers
            to work on this challenge now starting today, March 5th, or
            tomorrow.
          </p>

          <p>
            If you are reading this on Facebook or on our blog, please check out
            the
            <nuxt-link to="/collaborate">collaborations</nuxt-link>
            page on our website to get familiar with what we are doing and then
            email contact@covid-watch.org and ask to join our slack channels to
            work on the challenge.
          </p>

          <p>We are building a beta app in this challenge.</p>

          <p>
            A beta app doesn&rsquo;t have to be pretty. It doesn&rsquo;t even
            have to have a user login system. Each Bluetooth device will have a
            unique randomized ID in the database so we can ignore user login for
            now. This vastly simplifies the first iteration of the Bluetooth
            side of the app into a relatively simple challenge that I believe
            could be completed in a few days by motivated software engineers and
            researchers.
          </p>

          <p>
            The pieces that would come together for the Bluetooth beta app:<br />
            (1) one person to make a simple app with a question &quot;are you
            sick?,&quot; Bluetooth data collection, and a popup that says under
            the right conditions &ldquo;you have been exposed.&rdquo;<br />
            (2) a database person, who sets us up with something simple. I
            believe we&rsquo;d qualify for&nbsp; Amazon free tier services for
            this iteration since we&#39;d be starting so small at first to
            collect the Bluetooth and question answers together. This person
            would help person 1 upload/download the necessary information from
            the database.<br />
            (3) a handful of people within our team willing to join the beta app
            and be our beta testers knowing we may not have the privacy settings
            quite right yet and who promise we don&rsquo;t sue ourselves later
            over the beta app
          </p>

          <p>
            To compete the challenge, build an app so that if a few of us are
            signed up as beta testers, and one of us changes their answer to the
            &ldquo;are you sick?&rdquo; question in the app to &quot;yes,&quot;
            the other people they have interacted with would be pinged &quot;you
            have been exposed&quot; and the others with no interactions would
            receive no ping.
          </p>

          <p>
            Even people who don&#39;t have much experience with app development
            or databases, if they are into the challenge and motivated - I&#39;m
            sure someone could figure one of the two pieces in a few days.
          </p>

          <p>
            I&#39;ve done something similar to the database side myself and
            it&#39;s awful getting that kind of thing to work, but it&#39;s
            doable in a few days for a good software engineer, even one
            relatively inexperienced in databases and networking specifically.
          </p>

          <p>
            We might also get someone from the CoEpi group, even if they
            can&#39;t work on it, to advise the people working on the challenge.
            We&rsquo;re reaching out to them for help as well.
          </p>

          <h3>
            The Epi Model Programming Challenge (COMPLETED BY DANIEL BLANK)
          </h3>

          <p>
            I never posted the original challenge publicly, only in our research
            channels. I&rsquo;m posting it here so people understand the
            challenge that Daniel Blank and others accepted and completed:
          </p>

          <p><em>&ldquo;For our current research group:</em></p>

          <p>
            <em
              >I&rsquo;ve now had a chance to take stock of the resources we
              have available, and get a more informed overview of the
              project.</em
            >
          </p>

          <p>
            <em
              >This should be the highest priority for everyone in the research
              group: Someone who can look at the Geolife dataset (download in
              the link doc), think about what are the common sense factors that
              influence spread of disease, even if you have no background in
              epi, look at posts like
              <a
                href="https://towardsdatascience.com/simulating-epidemics-using-go-and-python-101557991b20"
                >this</a
              >
              and think to themselves &quot;hmm I could build something like
              this, but with GPS data.&rdquo; And who then puts together the
              simplest prototype they can do.</em
            >
          </p>

          <p>
            <em
              >Multiple people can do this in tandem, and it&rsquo;s probably
              better to have multiple people with a basic understanding of the
              model who then collaborate. Mikhail Voloshin is one person doing
              this right now. People who can do this sort of thing well are
              magic and we need you. Just make sure you post here to tell people
              &quot;this is me, working on it.&quot;</em
            >
          </p>

          <p>
            <em
              >In short: If you&#39;re here, and you can maybe do this, this is
              your task now.</em
            >
          </p>

          <p>
            <em
              >For the person doing this work: they should be only thinking
              about one thing: computational epidemiology using GPS data for
              babies.</em
            >
          </p>

          <p><em>The people doing this are the VIPs right now.</em></p>

          <p>
            <em
              >They don&#39;t need to think about legal issues around collecting
              GPS data (we have a free public dataset for them). They don&#39;t
              need to care yet about web development or building a web demo
              (others will think about that). It doesn&#39;t matter what
              language you&#39;re using or like best (collaborate about this if
              you can, but it&#39;s not important yet). Just computational
              epidemiology for babies. This is creative research work that is
              very hard to do even without having to think of the other
              issues.&quot;</em
            >
          </p>

          <p></p>
        </blockquote>
        <SubscribeForm></SubscribeForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import SubscribeForm from '../../components/SubscribeForm.vue'

  export default {
    components: {
      SubscribeForm
    }
  }

</script>