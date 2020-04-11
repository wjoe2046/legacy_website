<template>
    <v-container>
        <v-row>
            <!-- this inline padding:0px is to override VGrid CSS reset of 12px.  Probably a better way to do this - Jesse -->
          <v-col style="padding:0px;">
            <h2 style="color:#BF3F4A">Similar Projects</h2>
            <br>

            <p>Our project is one of a constellation of efforts exploring apps for community contact tracing. We are actively collaborating with other teams around the world, exchanging code and ensuring system and data interoperability. Our hope is that any progress made by Covid Watch will benefit many projects.</p>

            <div style="display:flex;align-items:center;">
                <img style="width:140px;margin-right:20px;max-height:150px;" src="../assets/images/logo/new_logo_march_29.png" alt="">
                <div>
                    <h4>Covid Watch</h4>
                    <p>Our project! An app for voluntary, decentralized, privacy-preserving alert system, which is an intervention that is expected to have the same benefits as contact tracing. Our Bluetooth proximity network system notifies users of potential close contact exposure. Our team was the first to open source Android, iOS and cross-communication between devices for Bluetooth contact alerts on March 17, 2020. <nuxt-link to="/article">Check out our white paper</nuxt-link> for more information.</p>
                </div>
            </div>

            <br>
            <br>

            <h3>Active Collaborations:</h3>
            <br>

            <div style="display:flex;margin-top:10px;align-items:center;">
                <img style="width:150px;margin-right:20px;max-height:150px;border-radius:4px;" src="../assets/images/logo/coepi_logo.png" alt="">
                <div>
                    <h4><a href="https://www.coepi.org/">CoEpi: Community Epidemiology In Action</a></h4>
                    <p>The CoEpi team are working on an app for community contact tracing, in which users would be able to report symptoms and likely contagiousness, whether they have a cold, flu, COVID-19, or any other contagious disease. We are collaborating with them on a shared, privacy-preserving database design.</p>
                </div>
            </div>

            <div style="display:flex;margin-top:10px;align-items:center;">
                <img style="width:135px;margin-right:20px;max-height:150px;border-radius:4px;" src="../assets/images/logo/private_kit_logo.png" alt="">
                <div>
                    <h4><a href="http://safepaths.mit.edu/">PrivateKit: Safe Paths</a></h4>
                    <p>Built by a team at MIT, Safe Paths focuses on an anonymized 28-day GPS trajectory, rather than bluetooth contact events.The team is leveraging their history of research on privatizing data. They are helping us to test our Bluetooth protocol.</p>
                </div>
            </div>

            <div style="display:flex;margin-top:10px;align-items:center;">
                <img style="width:150px;margin-right:20px;max-height:150px;border-radius:4px;" src="../assets/images/logo/trace_together_logo.png" alt="">
                <div>
                    <h4><a href="https://www.tracetogether.gov.sg/">TraceTogether</a></h4>
                    <p>This app is the first nationwide deployment of Bluetooth-enabled contact tracing. It was released by the Singaporean government on March 20, 2020. The app uses a similar approach to Covid Watch. We have been in touch with the TraceTogether team and are ready to adapt their code to our project as soon as it is open-sourced.</p>
                </div>
            </div>

            <br>
            <h3>Other Projects</h3>
            <br>
            <p>We wanted to contrast Covid Watch with a few other projects, but in the course of compiling this page it’s become clear that we won’t be able to successfully maintain a list of all the rapidly-proliferating projects in this space. For some efforts that are trying to do that, please see:</p>
            <ul>
                <li><a href="https://docs.google.com/document/d/1n5dMHVZ9fRfQZTD1IJ_hGJkaFvM5N5IZeY5dLgCqXq8/edit#">Covid19 - Contact tracing - Ecosystem survey</a>, a document compiled by Mitra Ardron</li>    
                <li><a href="https://docs.google.com/document/d/16Kh4_Q_tmyRh0-v452wiul9oQAiTRj8AdZ5vcOJum9Y/edit#">Shared research on privacy preserving contact tracing apps</a>, a document compiled by stop-covid.tech  </li>
                <li>The crowdsourced list of <a href="https://github.com/shankari/covid-19-tracing-projects">covid-19-tracing-projects on GitHub</a> </li>
            </ul>   

            <br>     
            <p>We know there are many projects in this space, and we’re striving to provide interoperable libraries that other projects will be able to use.</p>    
          </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss">

</style>

<script>
  export default {
    name: 'SubscribeForm'
  }

</script>
