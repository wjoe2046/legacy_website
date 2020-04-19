<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <div class="blog-hero">
          <h1>Insights from Co-Founder James Petrie</h1>
        </div>
        <h3>February 28 2020</h3>
        <p>
          Welcome to our first insight post!<br /><br />
          In this series, our researchers will share what they're currently
          working on and the challenges they're facing. They will be more
          technical than our progress posts, but as the name suggests they will
          hopefully provide some insight into the state of the project.
        </p>
        <p>
          Today's post comes from James Petrie, from the University of
          Waterloo's Department of Applied Mathematics:
        </p>
        <blockquote>
          My main focus is quantifying potential impacts of interventions
          informed by cellphone-based technology. A few days ago I built a SEIR
          model for dynamic contact networks (like
          <b><a href="https://www.nature.com/articles/srep31456">this one</a></b
          >) and ran it on
          <b
            ><a
              href="http://www.sociopatterns.org/publications/data-on-face-to-face-contacts-in-an-office-building-suggest-a-low-cost-vaccination-strategy-based-on-community-linkers/"
              >this</a
            ></b
          >
          data. I was planning to test interventions like targeted
          self-quarantine as a function of adoption rate and contact measurement
          error.<br /><br />
          My current challenge is adapting this approach to work with coarse GPS
          data instead of logged face-to-face interactions. The first problem is
          test data- the office dataset I was using before won’t work here. The
          BBC dataset may be useful, but it still won’t be ‘complete’. For now,
          I’m looking into the possibility of agent-based spatial simulation to
          artificially generate dynamic contact networks.<br /><br />
          The second problem is estimating transmission probability from coarse
          spatial distance. I’m working on some basic probabilistic arguments
          for this, but there is a lot of room for refinement and the eventual
          estimate will likely be fairly low accuracy.<br /><br />
          More broadly, I’m trying to think of general use cases. The primary
          one is a municipality with no initial local infections. They would
          like to avoid significant disruptions to the economy, so preferably
          limited travel restrictions and general quarantine. However, other
          regions have a non-zero infection rate so there will be a steady-state
          influx of infected individuals. They would like to supplement their
          existing methods with cellphone-based information. So what can we
          offer them that will reduce local transmission sufficiently?<br />
          There seem to be a few things that would improve outcomes:<br />
          - increased caution for at-risk individuals<br />
          - early detection of new local outbreaks<br />
          - accurate and immediate contact tracing (especially between
          strangers)<br />
          Most of this is still in progress, and I’m hoping to have a
          quantitative model for GPS based interventions built in the next 2-3
          days.
        </blockquote>
        <p>
          If you think you might be able to help James out, check out our
          <b><nuxt-link to="/collaborate">collaborations</nuxt-link></b>
          page, or reach out at
          <b
            ><a href="mailto: contact@covid-watch.org"
              >contact@covid-watch.org</a
            ></b
          >; and if you just want more updates, sign up to the newsletter on our
          homepage.<br /><br />
          Thanks for reading, and don’t forget to wash your hands!<br />
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
  
