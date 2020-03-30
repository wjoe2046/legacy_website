<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="8">
        <div class="blog-hero">
          <!--- <img src="images/blog-image.jpg" alt="Full width blog image" />-->
          <h1>Progress Post: 29th of March 2020</h1>
          <br>
        </div>

        <h3>Collaboration and Contrast</h3>
        <br>
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
          we’ve encountered several other teams working on similar efforts. You may be familiar with some
          of these efforts: <a href="https://www.coepi.org">CoEpi</a>, MIT’s
          <a href = "https://www.media.mit.edu/projects/safepaths/overview/">Safe Paths</a>, Singapore’s
          <a href="https://www.tracetogether.gov.sg/">TraceTogether</a>. Some of the smaller, nascent efforts
          joined our team, while many of the more advanced ones, such as those three, continue to work in near-parallel.
        </p>

        <p>
          This is, overall, a good thing for several reasons. Firstly, having several parallel efforts exploring
          different paths to roughly the same destination means that even if one of our efforts hits an insurmountable
          obstacle, it’s likely that at least one other project will succeed. For example, CoEpi is looking at using
          symptom self-reporting while we’re aiming for a system of healthcare-validated diagnoses; the chances that
          both systems will fail is far lower than if we pinned all of our hopes on just one.
        </p>

        <p>
          It’s also a good thing in that it allows us to share solutions to different problems. At the moment, for
          example, our Bluetooth work seems to be the most advanced of the many different efforts: we’re sharing our
          code with everybody who wants it, and we’re actively working on converting it into an easy-to-use module that
          can be easily plugged in to other apps. On the other hand, CoEpi has a team of particularly dedicated and
          innovative backend developers, who have been generously sharing their expertise with us; it seems likely at
          this stage that we will follow their lead when it comes to backend code, saving our developers precious time.
        </p>

        <p>
          One downside, however, is that from the outside it looks very similar to simply duplicated, wasted effort.
          This is a reasonable assumption: the differences between top-down and bottom-up approaches to diagnosis, or
          between GPS and Bluetooth-based systems, can seem like splitting hairs. The following sections will
          explain the difference between our efforts and those of several other teams:
        </p>

        <h3>CoEpi</h3>
        <br>
        <p>
          The biggest difference between CoEpi and COVID Watch is how diagnosis is done. In the case of CoEpi,
          diagnosis is based on self-reported user symptoms; in COVID Watch, diagnosis comes from testing confirmed
          by the healthcare system.
        </p>

        <p>
          <i>Pros:</i> The CoEpi system is faster, easier to implement in new areas, and in areas with low testing
          rates it could capture a wider segment of the population.
        </p>

        <p>
          <i>Cons:</i> Vulnerable to false positives (people self-diagnosing with COVID-19 who don’t actually have it).
          It is worth noting that CoEpi are acutely aware of this possibility, and are working hard to mitigate it.
        </p>

        <h3>Safe Paths</h3>
        <br>
        <p>
          MIT’s offering (already available for both iOS and Android) primarily uses pseudo-anonymized GPS trajectories
          to inform users of geographic areas where they may be at risk. Like COVID Watch, this will be used in
          conjunction with health authorities, rather than relying on self-diagnosis. They are also integrating
          Bluetooth functionality, with assistance from CoEpi and COVID Watch.
        </p>

        <p>
          <i>Pros:</i> GPS data better captures fomite risk and provides a pre-emptive method of avoiding contagion
          rather than simply responding to it.
        </p>

        <p>
          <i>Cons:</i> Safe Paths redacts the identities attached to the GPS trails and provides some degree of
          anonymization, but does not necessarily provide cryptographically guaranteed anonymity. For many users,
          this is good enough; it is at minimum a stronger level of privacy than the data used by many mapping and
          social media services.
        </p>

        <h3>TraceTogether</h3>
        <br>
        <p>
          Currently the brightest star in the constellation of similar projects, TraceTogether implements the
          familiar-sounding <a href = "https://bluetrace.io/">BlueTrace protocol</a> for mostly-anonymous Bluetooth-based contact tracing. Operating on a
          system extremely similar to that developed by COVID Watch, TraceTogether allows users, combined with
          Singapore’s Ministry of Health, to perform the exact type of contact tracing outlined elsewhere on this website.
        </p>

        <p>
          The key difference between TraceTogether and COVID Watch is the centralized nature of the app. In the case
          of TraceTogether, user phone numbers are uploaded to a central MoH server along with user IDs, which are then
          used to contact potentially infected users. A key plank of COVID Watch’s design is that phone numbers or
          similarly identifying information doesn’t leave the phone. <b>To be clear, there is no indication that
          TraceTogether’s database has been compromised or misused:</b> their team takes their work extremely seriously and
          this information is highly protected. The information they collect and release is extremely limited compared
          to comparable efforts in China and South Korea, for which we commend them. Despite this, the TraceTogether
          model is not one that fits entirely comfortably with the COVID Watch ethos.
        </p>

        <p>
          <i>Pros:</i> Well-implemented system, government support, secure server, high density of users.
        </p>

        <p>
          <i>Cons:</i> Less private: captures phone numbers, which are shared with select government ministries.
        </p>

        <br>

        <p>
          A more technical overview of these comparisons can be found <b><nuxt-link to="/about#comparison">here</nuxt-link></b>.
        </p>

        <p>
          If you think you might be able to help us out, check out our
          <b><nuxt-link to="/collaborate">collaborations</nuxt-link></b>
          page, or reach out to us at
          <b
          ><a href="mailto: contact@covid-watch.org"
          >contact@covid-watch.org</a
          ></b
          >; and if you just want more updates, sign up to the newsletter below.
          <br/>
          <br />
          Thanks for reading, and don't forget to wash your hands!
          <br />
          - The COVID-19 Risk App team
        </p>

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
