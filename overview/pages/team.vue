<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        
        <h1 class="text--primary">Our Team</h1>
        <br />
        <p>We&#39;ve grown from a pair of concerned researchers into a rapidly growing group of
          over fifty volunteers from a range of backgrounds, spread over multiple continents.
          Here are just some of our key members: this list is far from exhaustive, and we&#39;re
          getting new offers of help every day, so check back here regularly for more.</p>

        <h2>Founders</h2>

        <p>Tina and James both independently developed the original concept behind COVID Watch;
          they joined forces, and Rhys joined soon after.</p>

        <p>          <img
          alt="Tina White"
          src="~/assets/images/team/TWhite.png"
        />
        </p>

        <div><strong>Tina White - Co-Founder</strong></div>

        <p>Tina is a co-founder of COVID Watch. She is involved in leadership,
          outreach, and research guidance and communication.</p>

        <p>Tina is currently enrolled at the Stanford University as a PhD candidate.
          For her dissertation, she has designed several neural network architectures
          that are biased to break problems into parts while learning to make aerodynamics
          predictions from very few examples. She has developed two novel machine learning
          methods for faster and more accurate reduced order models. She has also invented
          and patented a method for eliminating transonic flutter in turbomachinery at Honeywell.</p>

        <p></p>

        <p><img
          alt="James Petrie"
          src="~/assets/images/team/JPetrie.jpg"
        /></p>

        <p><strong>James Petrie - Co-Founder</strong></p>

        <p>James is a co-founder of COVID Watch. He is involved in the numerical modelling
          and research aspects of the project.</p>

        <p>James is currently a PhD candidate in the field of Applied Mathematics
          at the University of Waterloo. His research has focused on applications
          of numerical modelling, machine learning, and optimization to fracture mechanics
          and autonomous robotics. James has a master&rsquo;s degree in Computational Mathematics
          from the University of Waterloo and a bachelor&rsquo;s degree in Engineering Physics
          from the University of British Columbia.</p>

        <p></p>

        <p><img
          alt="Rhys Fenwick"
          src="~/assets/images/team/RFenwick.jpg"
        /></p>

        <p><strong>Rhys Fenwick - Co-Founder</strong></p>

        <p>Rhys Fenwick is a co-founder of COVID Watch. He is involved in communication
          and web design, as well as the administrative and programming aspects of the project.</p>

        <p>Rhys is a science communicator from the University of Wollongong, Australia
          with a background in medical biotechnology and software development.
          He currently works at Science Space, Wollongong as well as doing freelance science communication.</p>

        <h2>Key Members</h2>

        <p>These are some of the members who have been with us the longest,
          and who have made significant contributions to the project.
          They aren&#39;t the only ones, but we couldn&#39;t have made it this far without them.</p>

        <p></p>

        <p><img
          alt="Daniel Blank"
          src="~/assets/images/team/DBlank.jpg"
        /></p>

        <p><strong>Daniel Blank - Research and Programming</strong></p>

        <p>Daniel earned a bachelor&rsquo;s degree in software engineering
          from University of California, Berkeley. He is skilled
          in Amazon Web Services, C, Jasmine, Java, Javascript, NodeJS,
          Python, and SQL<strong>.</strong> He has passed the Triplebyte
          process for generalist software engineers.</p>

        <p></p>

        <p><img
          alt="Mikhail Voloshin"
          src="~/assets/images/team/MVoloshin.jpeg"
        /></p>

        <p><strong>Mikhail Voloshin - Research and Programming</strong></p>

        <p>Mikhail is a senior software engineer and team leader with roots
          in artificial intelligence and machine learning. He is currently the CEO of Mighty Data Inc.,
          a freelance consulting firm with a focus on machine learning and AI.</p>

        <p></p>

        <p><img
          alt="Tessa Alexanian"
          src="~/assets/images/team/TAlexanian.png"
        /></p>

        <p><strong>Tessa Alexanian - Research and Programming</strong></p>

        <p>Tessa is an automation and software engineer at Zymergen in Emeryville, CA,
          a member of several iGEM committees, and an organizer of the East Bay Biosecurity Group.</p>

        <p></p>

        <p><img
          alt="Mathias Kirk Bonde"
          src="~/assets/images/team/MBonde.jpg"
        /></p>

        <p><strong>Mathias Kirk Bonde &ndash; Software Development</strong></p>

        <p>Mathias is a Computer Science student and Consultant for IBM
          where he specializes in prototyping emerging technologies.
          He has previously played Starcraft competitively and co-authored
          a machine learning paper on Starcraft. Mathias speaks Danish and English.</p>

        <p></p>
        If you think you would like to join the team, see our
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
