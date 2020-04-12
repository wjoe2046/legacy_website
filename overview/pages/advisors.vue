<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">
        

        <h1>Our Advisors</h1>

        <p>Given how ambitious and potentially impactful our project is, we want to make sure we do it correctly. A poorly-executed app could easily do more harm than good: warning our users away from areas with no need to while directing them towards high-risk ones, causing unnecessary panic, or lulling people into a dangerously false sense of security.<br />
          <br />
          To avoid that, we&#39;ve sought out expert advice from subject-matter experts from the very inception of the project. The following academics have gone above and beyond in assisting us, providing advice and support that has helped get Covid Watch this far.</p>

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
