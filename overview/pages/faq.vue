<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        
          <div class="FAQcontainer">

            <h1 id="faq">Frequently Asked Questions</h1>
            <br>

            <v-expansion-panels 
              hover
              multiple
              v-for="(faq, i) in faqList"
              :key="i"
            >
              <!-- v-for="(faq, i) in faqList.sort((a, b) => (a.section < b.section) ? 1 : -1)" -->


      <!-- played w a lot of options, using a v-card instead of v-row, v-col and got very close to desired result a few different ways: https://codepen.io/pen/?&editable=true&editors=101=https%3A%2F%2Fvuetifyjs.com%2Fen%2Fstyles%2Fflex%2F
      
      https://codepen.io/anon/pen/mKrjjY
       -->

       <!-- <v-row justify="center" >
         <v-col cols="4" class="d-flex flex-wrap"> -->

           <!-- add this to expansion panel component: v-bind:style="{ maxWidth: maxWidth + '%' }" -->


           <!-- v-if="sectionTitleExists(faq.section)" -->

              <v-expansion-panel 
                class="my-2"
              >
                  <v-expansion-panel-header>
                      
                      <div class="card-container d-flex justify-space-between align-center">
                        <h3 :id="faq.questionId">{{faq.question}}</h3>
                        <v-card :class="faq.section.split(' ')[0]">{{faq.section}}</v-card>
                      </div>
                  </v-expansion-panel-header>
                  
                  <v-expansion-panel-content>
                      <br>
                      <div v-html="faq.response"></div>
                      <nuxt-link v-if="faq.linkTitle" :to="faq.nuxtLink">{{faq.linkTitle}}</nuxt-link>
                  </v-expansion-panel-content>

              </v-expansion-panel >

            </v-expansion-panels>


          </div>
      </v-col>
    </v-row></v-container
  >
</template>


<style lang="scss">
    .card-container {
      .v-card {
        padding: 4px;
        margin-right: 4px;
      }

      .Why, .Preserving, .Who {
        background-color: #779F98;
        color: white;
      }

      .How, .Multiple, .Mobile {
        background-color: #BF3F4A;
        color: white;
      }
    }


</style>

<script>
export default {
  data: () => ({
    faqList: [
      {
        "section": "Why It Works",
        "question": "What is contact tracing?",
        "questionId": "what-is-contact-tracing",
        "response": 
            "<p> The World Health Organisation (WHO) <a target='_blank' href='https://www.who.int/features/qa/contact-tracing/en/'>defines</a> contact tracing as the identification and monitoring of people who may have come into close contact with a person infected with a contagious disease in order to help the contacts to get relevant care and treatment. </p>" +
            "<p> Contact tracing is a crucial part of epidemiological containment. It is traditionally done through patient interviews—when someone is diagnosed, that patient will be asked where they travelled and whom they saw while contagious. </p>" +
            "<p> Now that many people carry smartphones, it’s possible to perform an intervention like contact tracing automatically. Many groups, including Covid Watch, are working to make this a reality. However, our system does not strictly perform contact tracing. Users are not followed or tracked, and they are warned in an anonymous way. </p>" +
            "<p> We believe this will provide many of the benefits of contact tracing, as well as some additional ones. For example, we can more easily alert people when they have been in close contact with someone they don’t know (say, because you were riding a bus with them). However, we are not providing the kind of historical and identifying data that epidemiologists need for traditional contact tracing. </p>",
        "nuxtLink": "medialist",
        "linkTitle": "Read what media outlets such as Wired and Financial Times have written about Covid Watch and contact tracing here.",
      },
      {
        "section": "Why It Works",
        "question": "If COVID-19 is going to become widespread anyway, why bother delaying the inevitable?",
        "questionId": "delay-inevitable",
        "response": "<p> It’s not inevitable that COVID-19 will spread to every person, and slowing the spread is still extremely important. One major risk of COVID-19 in all countries is that it could overwhelm health systems, limiting their ability to care for people who desperately need it. By reducing infection rates we can space cases out slowly enough that hospitals worldwide can deal with them as they come, saving lives (often referred to as <a target='_blank' href='https://www.flattenthecurve.com/'>'Flattening The Curve'</a>). Furthermore, by enabling people to come out of lockdown, contact tracing could potentially reduce the severe negative economic consequences of COVID-19 that are materialising around the world. </p>",
        "nuxtLink": "/article#impact",
        "linkTitle": "Read more in our Whitepaper on our quantitative analysis of the impact smartphone-enabled contact tracing can have, if you want to get really geeky!",
      },
      {
        "section": "Why It Works",
        "question": "There is already a lockdown in my area and we can’t meet other people, so what is the point?",
        "questionId": "lockdown-why",
        "response": 
          "<p> We want to help bring you out of lockdown. Right now, the virus is spreading rapidly, and we must do our best to prevent hospital systems from becoming terribly overwhelmed. We don’t expect a vaccine for COVID-19 to be ready for at least a year, but we think it will be possible to end the lockdowns sooner than that. </p>" +
          "<p> If we build a system that can trace contagious individuals and the people they had contact with, then we can ask only those who have been exposed to COVID-10 to self-isolate. We’ve modelled how a system like ours can significantly reduce the rate of viral transmission; check out our whitepaper. </p>" +
          "<p> If you don’t want to take our word for it, check out <a target='_blank' href = 'https://github.com/BDI-pathogens/covid-19_instant_tracing/blob/master/Manuscript%20-%20Modelling%20instantaneous%20digital%20contact%20tracing.pdf'> Quantifying dynamics of SARS-CoV-2 transmission suggests that epidemic control and avoidance is feasible through instantaneous digital contact tracing</a>, a preprint published by University of Oxford researchers on March 16 (just under a month after we started work on the project). Trevor Bedford <a target='_blank' href='https://twitter.com/trvrb/status/1240444821593944064'>cited this model</a> as one of the strategies that he believed could bring the pandemic under control. </p>",
        "nuxtLink": "article#impact",
        "linkTitle": "Read a more detailed explanation here in our whitepaper.",
      },
      {
        "section": "Why It Works",
        "question": "Will this app ever get enough traction to work?",
        "questionId": "traction",
        "response": 
          "<p> We don’t know, but it might need less traction than you imagine. Our modeling suggests that a 60% adoption rate has the potential to stop the spread of the virus. Even if our app doesn’t succeed, we’re actively collaborating with other technology teams (<a target='_blank' href='https://tcn-coalition.org/'>see the TCN Coalition</a>) and government/health authorities around the world, exchanging code and ensuring system and data interoperability. Our hope is that any progress made by Covid Watch will benefit many projects.</p>" +
          "<p> <a target='_blank' href='https://www.apple.com/covid19/contacttracing/'>Google and Apple's announcement</a> to work in this space and our enthusiastic support of their work underscores that this is not a zero sum problem and the more interoperable our work is across systems, projects, countries, languages, challenges, the more successful we will all be in our ultimate goal: minimizing the threat of COVID-19.</p>" ,
        "nuxtLink": "/about#comparison",
        "linkTitle": "Read our full perspective on Apple and Google's efforts in our April 10, 2020 press release here."
      },
      {
        "section": "Why It Works",
        "question": "Why are you using Bluetooth?",
        "questionId": "bluetooth",
        "response": 
          "<p>When we first thought about a smartphone contact tracing app, we imagined using GPS location tracking. However, we soon realized that Bluetooth provides several advantages. First, it’s a closer proxy for people being in the same place—if you’re on the first floor of a tall building, and someone else is on the 15th, you wouldn’t be recorded as contacts. Second, Bluetooth allows us to never store your data centrally. Instead, anonymized contact event numbers are stored on your own device.</p>" ,
        "nuxtLink": "/article#contactTracing",
        "linkTitle": "Read a more detailed explanation here about our bluetooth approach in our whitepaper."
      },
      {
        "section": "Why It Works",
        "question": "Why not use GPS as well?",
        "questionId": "gps",
        "response": 
          "<p>We have decided not to implement this unless we are confident we can do so in a way that preserves the privacy of our users.</p>" +
          "<p>We initially planned to create a GPS-based risk heatmap. The heatmap would show areas estimated to have a high risk of infection, based on the anonymized GPS location history and diagnostic status of our users. This would allow users to avoid such areas, and would compensate for some of the limitations of Bluetooth contact tracing (namely fomite transmission and the existence of non-users). </p>" +
          "<p>We still may build this, but GPS anonymization has proven to be a far more challenging problem than Bluetooth anonymization. It requires significant privacy tradeoffs, and based on feedback from contact tracers we've decided that this is a lower priority than our Bluetooth work. An algorithmic system of slicing and blurring the data is also needed to make sure that no user uploads a unique trajectory. Many such systems exist and we are actively investigating several of these in the hope of eventually re-introducing a privacy-respecting heatmap. </p>",
        "nuxtLink": "/article#heatmapTitle",
        "linkTitle": "Read more about our (deprioritized) heatmap here in our whitepaper."
      },
      {
        "section": "How We're Different",
        "question": "Is this just another app that will record my symptoms?",
        "questionId": "another-app",
        "response": "<p> No. Our main purpose is local containment. Covid Watch alerts users if they may have been exposed to COVID-19 based on Bluetooth . While we may eventually try to integrate with COVID-19 symptom screening apps, that is not our initial aim.</p>",
        "nuxtLink": "/article#userRecommendations",
        "linkTitle": "See a mockup of our mobile app here from our whitepaper."
      },
      {
        "section": "How We're Different",
        "question": "Is this similar to what South Korea, Taiwan, and Singapore are doing?",
        "questionId": "asian-countries",
        "response": 
          "<p> No. </p>" +
          "<p> The relative success of these countries in slowing the rate of COVID-19 transmission is part of why we believe Covid Watch will work. For example, Taiwan has a population of 23.8 million, but at time of writing (29-MAR-2020) only 298 cases of COVID-19 and 2 deaths. </p>" +
          "<p>These countries have introduced mobile applications for contact tracing, and <a target='_blank' href='https://www.tracetogether.gov.sg/'>Singapore’s TraceTogether app</a> uses a similar Bluetooth approach. However, there are important differences. Singapore’s app allows health officials to track down individual users who have been diagnosed with or exposed to SARS-CoV-2. With Covid Watch, we have introduced important privacy-preserving mechanisms, such as never centrally storing contact events. While our users can volunteer to share their health information, they are never forced to. </p>" +
          "<a target='_blank' href='https://www.nbcnews.com/tech/tech-news/behind-global-efforts-make-privacy-first-coronavirus-tracking-app-n1177871'>Read more from NBC News here about the global effort to make a privacy-first COVID-19 tracking app.</a>",
      },
      {
        "section": "How We're Different",
        "question": "Is this the same as what Hong Kong has introduced?",
        "questionId": "hong-kong",
        "response": 
          "<p> No. </p>" +
          "<p> Hong Kong have introduced electronic-tracking wristbands in order to ensure that people suspected to have COVID-19 adhere to a quarantine. Covid Watch cannot be used to track or monitor people. Your location is never stored; instead, anonymized contact event numbers are stored on your own device; the aim is to enable contact-tracing in a way that preserves privacy. </p>" +
          "<a target='_blank' href='https://www.wired.com/story/covid-19-contact-tracing-apps-cryptography/'> Read more in Wired's article here about Covid Watch's privacy-first approach.</a>",
      },
      {
        "section": "Preserving Your Privacy",
        "question": "Is this legal given health data privacy laws?",
        "questionId": "health-privacy",
        "response": 
          "<p> Yes.</p>" +
          "<p> We take privacy and security extremely seriously; conserving privacy is one of the cornerstones of this work, and we will be fully compliant with GDPR and HIPAA laws. Our engineers have worked at major research institutions such as Stanford University, University College London, and University of Waterloo, and companies like Apple, Google, and Change.org. We understand the importance of data security, and we will be adhering to health privacy laws for the regions in which the app is available. </p>" +
          "<p> In fact, Covid Watch is a founding member of the <a target='_blank' href='https://tcn-coalition.org/'>TCN Coalition</a>, a global coalition of similar COVID-19-related tech efforts worldwide to standardize and commit to a privacy-first digital contact tracing protocol. ('TCN' stands for 'Temporary Contact Number', a decentralized, privacy-first contact tracing protocol developed by the TCN Coalition). </p>"+        
          "<a target='_blank' href='https://github.com/TCNCoalition/TCN'>You can find TCN Coalition's open source work here.</a>",        
        "nuxtLink": "",
      },
      {
        "section": "Preserving Your Privacy",
        "question": "What data are you collecting?",
        "questionId": "data-collection",
        "response": 
          "<p> Anonymized contact event numbers are stored locally on your phone. If you are diagnosed with COVID-19, you can volunteer to share your status and notify other users who you’ve had contact with, but you will never be forced to.</p>" +
          "<p> The numbers are random contact event numbers (CENs) that the app will generate every few minutes. Your current CEN is broadcast using your phone’s Bluetooth function. The app will also listen for CENs being broadcast by nearby devices with the app installed. A history of every CEN your device has broadcast or received will be stored locally. </p>" +
          "<p> If you are diagnosed with COVID-19, you can volunteer to share your contact history and upload the numbers to our shared database. Users with matching CENs will then be notified that they may have been exposed. </p>",
        "nuxtLink": "/article#userRecommendations",
        "linkTitle": "See a mockup here of our mobile app here from our whitepaper to better understand this workflow."
      },
      {
        "section": "Preserving Your Privacy",
        "question": "Who owns the data that is collected and will you sell it?",
        "questionId": "data-ownership",
        "response": 
          "<p> The data is anonymized and we will not sell what is uploaded to the database. It wouldn’t be worth anything, and we can’t use it for research because the database is so anonymized it is effectively uninterpretable, besides by the individual phones involved in each individual contact event. Data from old events will also be deleted every 2-3 weeks.</p>" +
          "<a target='_blank' href='https://tcn-coalition.org/'>Read more here about Covid Watch's commitment to privacy as a founding member of the TCN Coalition.</a>",

      },
      {
        "section": "Preserving Your Privacy",
        "question": "Will this app snoop on me?",
        "questionId": "snoop-dogg",
        "response": 
          "<p>One of the key reasons we started Covid Watch is that we were worried that a contact tracing solution which failed to respect the privacy of its users might be adopted. We’re concerned about ways in which this pandemic may increase unwanted surveillance, and this is why we’ve carefully designed a decentralized and voluntary solution. We’re currently collaborating on privacy guidelines with other contact tracing projects.</p>" +
          "<a target='_blank' href='https://tcn-coalition.org/'> Read more about our work as a founding member of the privacy-first TCN Coalition open source protocols here.</a>",
      },
      {
        "section": "Mobile App Functionality",
        "question": "How close to finished is the app?",
        "questionId": "finished",
        "response": "<p>We are currently at the beta-testing stage for our Bluetooth contact tracing app on both Android and iOS, and are actively in talks with the CDC and other health agencies internationally. With our current timeline, we aim to have a usable app finalised by the end of April at the latest.</p>",
         "nuxtLink": "/article#userRecommendations",
        "linkTitle": "Get a sneak peak of our mobile app here from our whitepaper."
      },
      {
        "section": "Mobile App Functionality",
        "question": "Will this app tell me where or when I was exposed?",
        "questionId": "exposed",
        "response": 
          "<p> No. Since we don’t collect any location data, we can’t tell you where you were exposed if someone in your contact history is diagnosed with COVID-19. This information is not broadcast, to make sure that our self-reporting users’ information is kept strictly private.</p>" +
          "<p> We will likely collect some extremely low-resolution time data, so it may be possible to tell you on which day you came into contact with a self-reporting user; we believe that this information is anonymous enough that any downsides are outweighed by the benefits of the system.</p>",
         "nuxtLink": "/article#userRecommendations",
        "linkTitle": "See more of our mobile app workflow here from our whitepaper."
      },
            {
        "section": "Who We Are",
        "question": "Who are you?",
        "questionId": "who-are-you",
        "response": "<p>We’re a non-profit group of researchers, programmers security experts and public health professionals. Starting from a forum post on February 19, our team, led by researchers from Stanford University and the University of Waterloo, has grown to a group of around 10-15 core contributors, as well as many more part-time volunteers and advisors. Although we are aiming to develop an app for initial use in the USA, the team is based around the world.",
        "nuxtLink": "/about#team",
        "linkTitle": "Read more about our team here.",
      },
      {
        "section": "Who We Are",
        "question": "Why are you doing this?",
        "questionId": "why-do-this",
        "response": 
          "<p>We don’t expect a COVID-19 vaccine to be developed for at least a year, which means we must build a system that is capable of rapidly containing local transmission wherever and whenever it appears. By doing this, and implementing it in our communities, we can lessen lockdowns and other restrictions in the world while preventing the majority of the population from getting sick.</p>" +
          "<p> If we build a system that can identify contagious individuals and the people they had contact with, then we can ask only those who have been exposed to COVID-19 to self-isolate. We’ve modelled how such a system can significantly reduce the rate of viral transmission; <a target='_blank' href='/article'> check out our whitepaper </a>. We believe that, combined with a comprehensive testing program, our filter may be powerful enough to protect our communities from COVID-19 becoming endemic.</p>" +
          "<p> We also want to provide a way for individuals to, on a volunteer basis, help reduce the painful impacts of COVID-19. That’s what all of the people working on this project were looking for, and we hope that users who participate in Covid Watch will feel they have been given a tool with which to protect their community and loved ones.</p>"
        ,
        "nuxtLink": "/article",
        "linkTitle": "Read our whitepaper here for a more detailed explanation.",
      },
      {
        "section": "Who We Are",
        "question": "Aren’t Google and Apple working on something similar?",
        "questionId": "google-and-apple",
        "response": "<p>There are! We have been in contact with them since late March 2020.  We are very supportive of their efforts and are exicted two leading tech companies are creating a de facto standardized protocol others can refer to.</p>",
        "nuxtLink": "/about#comparison",
        "linkTitle": "Read our full perspective on their efforts in our April 10, 2020 press release here.",
      },
      {
        "section": "Who We Are",
        "question": "What is the legal status of your organization?",
        "questionId": "legal-status",
        "response": "<p>We are a registered non-profit in the US state of Arizona. We have submitted the required application with the U.S. Internal Revenue Service (IRS), and are awaiting their response and our 501(c)(3) letter. Per the IRS regulations, while this application is pending, we are allowed to operate as a 501(c)(3) charitable organization and are eligible to receive tax deductible, charitable contributions. </p>",
        "nuxtLink": "/donate",
        "linkTitle": "To donate to Covid Watch, click here."
      },
      {
        "section": "Who We Are",
        "question": "Who are collaborating with? Are you working with the government?",
        "questionId": "collaborators",
        "response": "<p>A critical part of Covid Watch is buy-in from relevant healthcare authorities. We would need a confirmation number from a healthcare database for self-reported diagnoses to avoid false positives. We’re reaching out to the CDC to give us permission numbers to validate self-reports, so we don’t send out false positives. We’re also going to start reaching out to state health agencies since they keep state records with their confirmation numbers as well.</p>",
        "nuxtLink": "/article#healthAuthorities",
        "linkTitle": "Read more here about the incentives for healthcare authorities to use Covid Watch's solution in our whitepaper."
      },
      {
        "section": "Who We Are",
        "question": "How can I get involved?",
        "questionId": "get-involved",
        "response": "<p>We are always looking for talented people worldwide to join this effort as volunteers.  We have volunteers on six continents currently contributing actively.</p>" +
        "<p>Follow us on social media and share with your friends and family!  Links: <a target='_blank' href='hhttps://www.facebook.com/CovidWatch2020'>Facebook</a>, <a target='_blank' href='https://twitter.com/COVIDWatchAppTwitter'>Twitter</a>, and <a target='_blank' href='https://github.com/covid19risk'>Github</a>.  These links are also at the bottom of our website.</p>",
        "nuxtLink": "/collaborate",
        "linkTitle": "See our Join Our Team page here for the roles we are looking to fill."
      },
    ]
  })
}
</script>
