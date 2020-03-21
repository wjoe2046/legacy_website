<template>
  <v-container class="overviewContainer">
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <div class="TopSection">
          <div class="mainTitle">
            <img src="~/assets/images/logo/banner_1.png" alt="" />
          </div>

          <TableOfContents>
            <h2 class="titleLine">Table of Contents</h2>
            <br />
            <ol class="outerList">
              <li>
                <strong><a href="#aboutUs">About Us</a></strong>
                <ol class="innerList">
                  <li><a href="#mission">Mission Statement</a></li>
                  <li><a href="#privacy">Privacy Focus</a></li>
                  <li><a href="#interventionBackground">Current Mobile Phone Interventions</a></li>
                  <li><a href="#interventionOptimization">Making Interventions More Efficient</a></li>
                </ol>
              </li>
              <li>
                <strong
                  ><a href="#proposedSystem"
                    >Proposed System: Three Parts</a
                  ></strong
                >
                <ol class="innerList">
                  <li><a href="#contactTracing">Part 1: Bluetooth Contact Tracing</a>
                    <ol class="nestedInnerList">
                      <li><a href="#contactTracingBackground">Contact Tracing Background</a></li>
                      <li><a href="#blueToothModel">Model Description</a></li>
                      <li><a href="#blueToothPrivacy">Privacy Model</a></li>
                      <li><a href="#bluetoothDatabase">Database</a></li>
                      <li><a href="#bluetoothImplementation">Implementation</a></li>
                    </ol>
                  </li>
                  <li><a href="#heatmapTitle">Part 2: GPS Heatmap</a>
                    <ol class="nestedInnerList">
                      <li><a href="#heatmapDesc">Model Description</a></li>
                      <li><a href="#heatmapImplementation">Implementation</a></li>
                      <li><a href="#heatmapEpidemiology">Heatmap Epidemiology Model</a></li>
                      <li><a href="#databasePrivacy">Privacy Model</a></li>
                      <li><a href="#databaseAnonymization">Anonymization Model</a></li>
                    </ol>
                  </li>
                  <li><a href="#userRecommendations">Part 3: User Recommendations</a>
                    <ol class="nestedInnerList">
                      <li><a href="#scopeDesign">Scope and Design</a></li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li><strong><a href="#care">Why You Should Care</a></strong>
                <ol class="innerList">
                  <li><a href="#healthAuthorities">Incentive for Health Authorities</a></li>
                  <li><a href="#users">Incentives for Individuals</a></li>
                  <li><a href="#impact">Quantitative Analysis of Impact</a></li>
                  <li><a href="#timeline">Timeline to Deployment</a></li>
                </ol>
              </li>
              <li> <strong><a href="#conclusion">Conclusions</a></strong>
                <ol class="innerList">
                  <li><a href="#youDo">Who Can Help</a></li>
                  <li><a href="#contributors">Contributors, Advisors, and Acknowledgements</a></li>
                </ol>
              </li>
            </ol>
          </div>
        </div>

       <p>&nbsp;</p>

       <!--About Us-->
       <h2 id="aboutUs"><span class="titleLine">About Us</span></h2>
              <p>&nbsp;</p>


        <p><span id="mission" class="subTitleLine"> Mission Statement </span></p>

        <p>We are a group of volunteers — researchers, software engineers, privacy and public health experts — who have developed a privacy-preserving mobile app intervention to reduce the spread of COVID-19. Our mobile app performs automatic decentralized contact tracing using Bluetooth proximity networks.</p>
        <p>
          <br>
        </p>
        <p>Our volunteers care strongly about preserving human life and human rights. All data we could collect is voluntary and fully anonymized. All code is transparent. It is&nbsp;
          <a href="https://github.com/covid19risk/"><span>open source</span></a><span>&nbsp;and could be easily reviewed, reproduced and used anywhere on the planet.</span></p>
        <p>
          <br>
        </p>
        <p><span>It could be installed by anyone with a Bluetooth-capable smartphone, alerting them to their risk of having been in contact with a confirmed case of COVID-19, and helping them to protect themselves and their friends, families, and other contacts altruistically.</span></p>
        <p>
          <br>
        </p>
        <p><span>We also believe scalable measures like an app are especially helpful in communities where contact tracing resources are too limited to match the scope of the pandemic. We're building this app to provide components and tools that public health agencies can use to supplement their pre-existing efforts to fight COVID-19, assisted by voluntary public action.&nbsp;</span></p>

        <p><span id="privacy" class="subTitleLine"> Privacy Focus </span></p>

        <p><span>Existing mobile apps without a privacy focus have been an effective intervention to reduce the spread of COVID-19. However, invasive interventions carry significant human rights costs, including the temporary loss of personal freedom and fears around whether that freedom will be restored.</span></p>
        <p>
          <br>
        </p>
        <p><span>A mobile app with a strong privacy model may also have greater efficacy because people will be more likely to share accurate data if they know that data is safe. Ensuring privacy prevents COVID-19 patients from being ostracized or socially harmed on account of inadvertent potential data exposures. Also, mobile apps with poor privacy models may further undermine public confidence in responses and exacerbate existing mistrust.&nbsp;</span></p>
        <p>
          <br>
        </p>
        <p><span>In contrast, our mobile app research has focused on developing a strong privacy model while still providing effective intervention. Using the app, users can alert recent contacts without anyone being able to trace the information back to them. We believe this intervention has the potential to slow or stop the spread of COVID-19 and save lives.&nbsp;</span></p>

        <p><span id="interventionBackground" class="subTitleLine"> Current Mobile Phone Interventions </span></p>

        <p><span>South Korea and China have demonstrated two successful systems for containing COVID-19 that make extensive use of technology.&nbsp;</span><span>The results they have seen match well with predictions from numerical models: with a sufficient diagnosis rate and contact tracing accuracy COVID-19 can be contained.</span></p>
        <p>
          <br>
        </p>
        <p>
          <a href="https://www.nytimes.com/2020/03/04/health/coronavirus-china-aylward.html"><span>China</span></a><span>&nbsp;was the first to create a mobile app intervention. Their app uses GPS history and other data to assign a risk score. This score is then used to control which individuals are allowed to move freely. China’s intervention appears to have been successful, but required far-reaching state surveillance that, by the standards of most liberal democracies, would be considered highly invasive, likely unlawful, and politically unpalatable.</span></p>
        <p>
          <br>
        </p>
        <p>
          <a href="https://www.sciencemag.org/news/2020/03/coronavirus-cases-have-dropped-sharply-south-korea-whats-secret-its-success"><span>South Korea</span></a><span>&nbsp;</span><span>publicizes a large amount of information collected from the cellphones of infected patients so that others can determine if they had been in contact.</span><span>&nbsp;South Korea’s success has been attributed mostly to (1) widespread testing (2) contact tracing and (3) case isolation. However, their mobile alert solutions do not effectively anonymize patient data. They gather location data from interviews, mobile phone GPS history, surveillance cameras, and credit card records then send text alerts with the location history of patients. Much like the intervention in China, this appears to be effective, but takes a similarly high toll on personal privacy.</span></p>
        <div class="centerImage" style="display:flex;flex-direction:column;align-items:center;">
          <img src="../assets/images/ROKDailyCases.png" alt="">
          <p style="color:gray;"><span>South Korea&nbsp;</span>
          <a href="https://www.worldometers.info/coronavirus/country/south-korea/"><span>Cases per Day</span></a>
        </p>
        </div>
        <p>
          <br>
        </p>
        <p><span>We’ve built a privacy-preserving version of these successful interventions that we believe would have a regulatorily, publicly, and politically viable adoption process within the United States and other Western countries. The system as designed complies with existing regulations around medical information in the United States and does not reveal identifying patient information.&nbsp;</span></p>

        <p><span id="interventionOptimization" class="subTitleLine"> Making Interventions More Efficient </span></p>
        <p>Non-pharmaceutical pandemic interventions fundamentally make a trade-off between two important social goods: (1) loss of life from the pandemic and (2) economic impact, which influences health and well-being outcomes indirectly. Mobile app interventions are a powerful public health tool because they can improve this trade-off.</p>
        <p>In general, non-pharmaceutical approaches to infectious disease control have the following components:</p>
         <ul>
          <li>Filtering (picking a subset of the population)</li>
          <li>Intervention (modifying the behaviour of these people)</li>
        </ul>
         <p></p>
        <p>For example, quarantining patients with a positive diagnosis applies a filter based on testing and then applies the quarantine intervention. Other examples include travel restrictions for at-risk areas, cancelling public events in a specific city, or encouraging more handwashing in an entire country. Some of these interventions, especially self-isolation, are <a href="https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(20)30074-7/fulltext">highly effective</a> at preventing the transmission of infectious diseases like COVID-19. The downside is that they can also be costly to use.</p>
        <p>The quality of filtering plays a crucial role in determining the trade-off between loss of life and economic impact. If filtering is poor, a correspondingly larger economic impact will be needed to achieve the same loss of life reduction. Without good filtering, broad quarantines and social distancing are needed, incurring a huge cost in the form of negative impact on people’s lives.</p>
        <p>Unfortunately, traditional approaches to filtering, such as contact tracing, are labor intensive and don’t scale well. So we expect filtering (and, correspondingly, the trade-off between loss of life and economic impact) to degrade in quality as a pandemic grows. But automated contact tracing solutions have the potential to be more scalable -- and potentially even more accurate, with access to higher quality information than traditional contact tracing. This may allow for a better trade-off to be maintained in the midst of a pandemic.</p>



        <!--Proposed System: Three Parts-->
        <h2 id="proposedSystem"><span class="titleLine">Proposed System: Three Parts</span></h2>
         <p>&nbsp;</p>
        <p>The system proposed here is intended to be used as part of a broader campaign to combat COVID-19. These methods focus on gathering and disseminating the information needed to perform targeted interventions. </p>
        <p>There are three components to this system that work almost independently, but can be bundled into a single mobile app. Depending on privacy requirements and the needs of specific public health authorities a subset of these capabilities could be utilized: </p>
         <ul style="list-style:decimal">
          <li>Automated contact tracing at scale using anonymized Bluetooth proximity sensing </li>
          <li>Heatmap informed by epidemiological models using anonymized GPS data to warn users about high risk areas
          <li>Recommendations from local health authorities and risk-aware suggestions about when to get tested</li>
        </ul>


          <p>&nbsp;</p>
        <p><span id="contactTracing" class="subTitleLine"> Part 1: Bluetooth Contact Tracing</span></p>
        <p><span id="contactTracingBackground" class="subTitleLine"> Contact Tracing Background</span></p>
        <p>Non-pharmaceutical methods focused on social distancing reduce the spread of COVID-19. These methods are based on reducing contact between infected and susceptible people, even when it isn’t known who is infected.</p>
        <p>In the simplest form, this is being achieved by reducing all social events and increasing precautions like handwashing. This is an effective measure because the number of new infections is roughly proportional to the number of contact events with infectious people.</p>
        <p>A more targeted approach employed by many health agencies is <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/health-professionals/interim-guidance-cases-contacts.html">contact tracing</a>. This system works by finding and monitoring contacts of patients that have been diagnosed. Individuals that are thought to be infected are then put into isolation to prevent further transmission, and individuals who have previously been in contact with infected individuals are quarantined.</p>
         <div class="centerImage" style="display:flex;flex-direction:column;align-items:center;">
          <img src="../assets/images/overview_article_imgs/003.png" alt="">
            <p style="color:gray;">Contact Network </p>
        </div>

        <p><a href="https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(20)30074-7/fulltext">Hellewell et al</a> analyzed the effectiveness of contact tracing as a method to contain COVID-19 at the beginning of an outbreak. <strong>Their findings are promising: with 80% contact tracing accuracy and a mean detection time of 3.8 days after symptom onset, containment is likely.</strong></p>
          <p>In the context of contact tracing there are three parameters that can strongly impact results:</p>
         <ul style="list-style:decimal">
          <li>Reduction in overall transmission through social distancing </li>
          <li>Testing rate and time to diagnosis</li>
          <li>Contact tracing accuracy</li>
        </ul>

        <p><span id="blueToothModel" class="subTitleLine">Model Description</span></p>
        <p>Mobile phones are carried by a majority of people in several countries, with an estimated <a href="https://www.statista.com/statistics/330695/number-of-smartphone-users-worldwide/">3.5 billion users worldwide</a>. They are extremely common in Western society, with <a href="https://www.statista.com/statistics/201183/forecast-of-smartphone-penetration-in-the-us/">over 70%</a> of the entire US population estimated to own one. Bluetooth is a radio protocol that can be used to wirelessly communicate between nearby mobile devices and Bluetooth signal strength can be used to estimate distance.</p>
        <p>Mobile devices can be made to proactively record contact events with other nearby devices by sending Bluetooth signals. By measuring the signal strength and discrete number of contact events, the duration and distance of contact between two phone users can be estimated. </p>
        <p>By recording all contact events, a high accuracy list of at-risk individuals can be generated and sorted immediately to determine close contacts when a new person is diagnosed to provide instantaneous alerts. And the contact events can be deleted after a certain number of days.  </p>
        <p>Bluetooth proximity may be the most accurate crowdsourcing method for approximating close contact. While GPS data is a more well-known general technology, there are clear advantages Bluetooth has over GPS in terms of accuracy for contact tracing. With Bluetooth, proximity can be approximated by signal strength that is reduced by obstructions like walls. Therefore, it more accurately reflects functional proximity in high-risk environments for close contact: inside buildings, in vehicles and airplanes, and in underground transit.</p>
        <p>Finally and most importantly, Bluetooth communication occurs directly between mobile devices. This means a decentralized system can be built with strong privacy preservation. </p>
        <p>We are pursuing research in developing inexpensive <a href="https://www.amazon.com/DSD-TECH-Bluetooth-CC2640R2F-Arduino/dp/B07MBLVHH8">external Bluetooth devices</a> under the same automatic contact tracing alert system for use in countries with fewer smartphone users. These methods would face much steeper adoption challenges, but if mobile app users and external device users could be integrated under a single system, outcomes could be further improved over more regions. However, this technology is still under development. </p>

        <p><span id="blueToothPrivacy" class="subTitleLine">Privacy Model</span></p>
        <p>The Bluetooth contact tracing system can be structured in a decentralized and anonymous way using randomly generated and locally stored ‘Contact Event Numbers’. This allows the system to function fully without any private information being stored or transmitted. </p>
        <p>By generating a new random number for each contact event, the system is able to operate without storing or transmitting any personal information. This method is designed so that only the phones involved in a contact event are able to identify messages on a public database. </p>

        <v-container class="stepsVisual">
          <v-row align="center">
            <v-col cols="12" md="6">
              <li>
                <span>1</span>
                <p>Every time two phones are close a contact event is detected.  </p>
                <img src="../assets/images/overview_article_imgs/004.png" alt="">
              </li>
            </v-col>
            <v-col cols="12" md="6">
              <li>
                <span>2</span>
                <p>Each phone broadcasts a randomly generated contact event number. The number is updated every few minutes. </p>
                <img src="../assets/images/overview_article_imgs/007.png" alt="">
              </li>
            </v-col>
            <v-col cols="12" md="6">
              <li>
                <span>3</span>
                <p>All phones keep a local log of every number they have transmitted or received.</p>
                <img src="../assets/images/overview_article_imgs/008.png" alt="">
              </li>
            </v-col>
            <v-col cols="12" md="6">
              <li>
                <span>4</span>
                <p>This person sends a packet to the public database with the permission number and their history of contact event numbers (both transmitted and received). </p>
                <img src="../assets/images/overview_article_imgs/009.png" alt="">
              </li>
            </v-col>
            <v-col cols="12" md="6">
              <li>
                <span>5</span>
                <p>This person sends a packet to the public database with the permission number and their history of contact event numbers.</p>
                <img src="../assets/images/overview_article_imgs/010.png" alt="">
              </li>
            </v-col>
            <v-col cols="12" md="6">
              <li>
                <span>6</span>
                <p>If the permission number is valid, the contact event numbers are stored in the database and transmitted to all other phones.</p>
                <img src="../assets/images/overview_article_imgs/011.png" alt="">
              </li>
            </v-col>
            <v-col cols="12" md="6">
              <li>
                <span>7</span>
                <p>Each phone compares the publicly posted contact event numbers against their own history. If there are any matches this means they were close to an infected individual and are given instructions on what to do next.</p>
                <img src="../assets/images/overview_article_imgs/012.png" alt="">
              </li>
            </v-col>
          </v-row>
        </v-container>
        <p>&nbsp;</p>
        <p>&nbsp;</p>

       <p>The only authentication required is the permission number provided by a public health authority. This permission number is used so that malicious actors cannot send false alarms. After authentication the permission number is deleted from server memory.</p>
       <p>The contact event numbers are random and only known by the message recipient and the message sender, so the database can be made public without risk of sensitive information being discovered. </p>
       <p>While our current intervention is based on permission numbers, in regions where widespread testing is unavailable, a well-designed symptom sharing questionnaire may perform a similar function, with a higher number of false positives. Research in this direction is currently being done by the <a href="https://www.CoEpi.org">CoEpi</a> team. </p>

      <p><span id="bluetoothDatabase" class="subTitleLine">Database</span></p>
      <p>The specification for the database is very simple: it is shared across all installations of the app and stores anonymized Contact Event Numbers. If protections against hoaxes are required, permission numbers can be used, but are not an essential requirement of the system. If the database grows too large, it can also be fragmented based on general location. The code and a more in depth discussion of architecture are available on the open source github repo <a href="https://github.com/covid19risk/covidwatch-backend/blob/master/README.md">here</a>.</p>

      <p><span id="bluetoothImplementation" class="subTitleLine">Implementation</span></p>
      <p>Bluetooth contact tracing is implemented via background processes on iOS and Android.</p>
      <p>The approach currently being investigated utilizes BLE functionality for background advertisement and scanning. Due to different system requirements for Android and iOS, the protocol works differently depending on the operating systems of the devices involved. The key challenges are:</p>
      <ul style="list-style:decimal">
        <li>iOS devices acting as “peripherals” in the background can only be found by “centrals” that are scanning for their specific service UUID. These peripherals must establish a connection to transfer any data.</li>
        <li>Android devices have several unfixed bugs where subsequent connections with many devices can cause the Bluetooth system to lock up.</li>
      </ul>
      <br>
      <p>The current solution is a hybrid model that is asymmetric for communication between iOS and Android. All devices will simultaneously act as peripherals and centrals, but only some devices will be able to detect others, and only some devices will need to establish a connection to exchange data. An extended description of the communication model and the code are available on github here <a href="https://github.com/covid19risk/covidwatch-ios">for iOS </a> and <a href="https://github.com/covid19risk/covidwatch-android">for Android</a>.</p>
       <p>This model has been successfully implemented as a proof-of-concept, as shown below:</p>
       <iframe width="1425" height="566" src="https://www.youtube.com/embed/4aQ90emoAqc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>&nbsp;</p>



      <!-- Heatmap -->
      <p><span id="heatmapTitle" class="subTitleLine"> Part 2: GPS Heatmap</span></p>
      <p><span id="heatmapDesc" class="subTitleLine">Model Description</span></p>
      <p>GPS capability is ubiquitous among smartphone devices, and high-resolution spatiotemporal data is regularly used by mapping and social media apps. Given anonymized GPS data along with user infection status, we can approximately calculate where the fomite-based risk of infection is the highest; meaning, where there may be inanimate objects capable of transmitting infection. </p>
       <p>Anonymized GPS data can inform an epidemiological model to show how the disease is likely to spread.</p>
       <p>Based on this epidemiological model, we can generate a risk heatmap showing comparative fomite risk for different geographical areas. This heatmap enables our users to adjust their behaviours in response to their local environment. They could, for example, choose to take extra precautions when in high-risk areas, or avoid them altogether. This both decreases the risk of our users becoming infected, and decreases the risk that they will infect those around them.</p>
       <p>This provides a supplementary service for our users to inform their social distancing measures.</p>

      <p>&nbsp;</p>
      <p><span id="heatmapImplementation" class="subTitleLine">Implementation</span></p>
      <Heatmap class="heatMap"></Heatmap>

        <p>&nbsp;</p>

      <p><span id="heatmapEpidemiology" class="subTitleLine">Heatmap Epidemiology Model</span></p>
       <p>The source code at time of writing [19-MAR-2020] of the epidemiological model can be found and is available open source <a href="https://github.com/covid19risk/proof/tree/master/SimContagion/">here</a>. </p>
       <p>To describe it simply, the heat map builds upon SEIR models and simulates users according to the following state machine:</p>

      <p style="color:red;font-size:30px">need a better resolution image, enlarge font size inside each node also</p>
      <img src="../assets/images/overview_article_imgs/bad_resolution_epi_model.png" alt="">
      <p>&nbsp;</p>

      <p>The population of simulated users, and probability and timing of a simulated user moving from one state to the next, are generated from the data we have available: both on the background demographics of impacted areas and specific case data. </p>
      <p>Each simulated user is given an age and has a chance of having pre-existing health conditions, which impact their contagiousness and susceptibility to infection.</p>
      <p>The anonymized user trajectories are superimposed over a grid covering the area being modelled, while the grid squares are filled with a number of randomly generated simulated humans based off demographic data for that area. As simulated infected and contagious users move across the grid, they carry a chance of infecting the other simulated humans (both user and non-user) sharing their grid space at any given time. </p>
      <p>Simulated non-user humans also have a probability of adjusting their behaviour and movement throughout the simulation, to model hospital admission and self-isolation. </p>
      <p>This simulation is run multiple times, and the amount of time each infected human spent in each grid square contributes to its overall risk score, which is represented by the final heatmap.</p>
      <p>As our understanding of COVID-19 progresses, this heatmap can be refined, and the parameters tuned to more accurately reflect real-world data.</p>

      <p><span id="databasePrivacy" class="subTitleLine">Privacy Model</span></p>
      <p>Given the personally identifying nature of the spatiotemporal trajectories provided by GPS systems, this information will be handled in a more complex way involving two distinct servers.</p>
      <p>The first server, Server A, will handle anonymization using the methods described in the <span style="font-style:italic">Heatmap Privacy Model</span> section above. Users will send their GPS data to Server A first without any other information, and Server A will return the now-anonymized data to them.</p>
      <p>They will then upload the anonymized data, along with their infection status, to the second server, Server B. Server B will take this data and add it to our epidemiological simulation, generating a heatmap.</p>

        <p>
          <span id="databaseAnonymization" class="subTitleLine"
            >GPS Anonymization Model</span
          >
        </p>
        <p>
          The heatmap may either require the application of an anonymization
          algorithm, or the explicit consent of users to publish high resolution
          GPS trajectories. This choice will need to be made in consultation
          with regulators. The advisory system will make use of the information
          generated by the other two methods and information from public health
          offices. It can be structured so no additional patient data needs to
          be collected, but making suggestions more complicated than ‘call your
          local public health department’ may require additional regulatory
          approval.
        </p>
        <p>
          There is a large body of academic work behind the anonymization of
          spatiotemporal data, most of which draw from a handful of common
          strategies. These include aggregating multiple similar trajectories
          together, decreasing the resolution of each datapoint across space and
          time, removing particularly distinctive datapoints, and swapping
          sections of trajectories that cross paths.
        </p>
        <p>
          One widely accepted metric for de-identification of data is
          k-anonymization. A dataset is anonymous for some integer k if no entry
          can be narrowed down further than belonging to one of k individuals.
          For example, a group of trajectories would be 3-anonymous if each
          trajectory could plausibly belong to at least 3 individuals. Our aim
          is to create a dataset with the maximum possible k-value that still
          preserves utility. The worst-case scenario we would be willing to
          publish is at minimum a 10-anonymous dataset with respect to an
          adversary using commonly available geographical information.
        </p>
        <p>
          Given the urgency of the situation, we intend to use contractual
          boundaries against deanonymization rather than aiming to protect
          against more sophisticated and hypothetical attacks on our
          anonymization scheme. Building anonymity systems that are resistant to
          more sophisticated attacks is challenging, and takes much more time.
        </p>
        <p>
          The anonymization model we are implementing is one created by
          researchers from the University of Montréal
          <a
            href="https://www.academia.edu/24040759/Anonymizing_trajectory_data_for_passenger_flow_analysis"
            >(Ghazemzadeh et al 2014)</a
          >. It allows for flexible k-anonymity without significant distortion,
          and has a proven and open-source implementation.
        </p>
        <p>
          This does require a significant number of trajectories to be
          significant, so we will be supplementing our initial database with
          plausible synthetic trajectories created by the
          <a href="https://iapg.jade-hs.de/personen/brinkhoff/generator/"
            >Brinkhoff trajectory generator</a
          >.
        </p>
        <p>
          The end result is that the trajectories being used to generate our
          heatmap can be mathematically verified to be anonymous, guaranteeing
          the privacy of our users.
        </p>

      <p><span id="userRecommendations" class="subTitleLine"> Part 3: User Recommendations</span></p>
      <p>We have designed the app user interface (UI) and are building a beta app with the following features: </p>
      <ul>
        <li>CDC general COVID-19 advice, symptoms, and resources</li>
        <li>An infection density heat map based on anonymized GPS data</li>
        <li>A notification system of potential COVID-19 contact risk via Bluetooth proximity networks</li>
        <li>Personalized advice: If close contact is detected, a popup instructs the user to call the local public health department, and looks up this number to call for them to inquire about next steps</li>
        <li>Other features may include: more personalized advice based on heat map location, a supplies map, self-reporting of symptoms, FAQs, news updates tailored by geographic region, travel counseling, or access to home-based testing</li>
      </ul>


         <p>&nbsp;</p>

      <h3 id="scopeDesign">Scope and Design</h3>

        <v-container>
          <v-row>
            <v-col cols="12" md="4" style="justify-content:space-evenly;">
              <img
                style="border:1px solid gray;"
                src="../assets/images/mobile/mobile_get_started.png"
                alt=""
              />
            </v-col>
            <v-col cols="12" md="4" style="justify-content:space-evenly;">
              <img
                style="border:1px solid gray;"
                src="../assets/images/mobile/mobile_heat_map.png"
                alt=""
              />
            </v-col>
            <v-col cols="12" md="4" style="justify-content:space-evenly;">
              <img
                style="border:1px solid gray;"
                src="../assets/images/mobile/mobile_transmission_log.png"
                alt=""
              />
            </v-col>
          </v-row>
        </v-container>
        <div style="border:1px solid black;border-radius:4px;padding: 10px;">
          <p>
            <strong>Figure 1: COVID-19 Transmission Map and Phone Log</strong>.
            The transmission map will utilize Bluetooth proximity network and a
            confirmed contact event number provided by health authorities. When
            a confirmed COVID-19 is identified, notifications are sent to users
            who may have been in close proximity to the confirmed case based on
            the phone’s Bluetooth and GPS system. Users are able to determine
            when they may have contracted the viruses based on the user’s
            transmission phone log. In addition, a user is able to self-report
            symptoms of illness or positive COVID-19 lab results.
          </p>
        </div>

      <p>&nbsp;</p>
      <h3>Design: CDC Information and Symptoms Survey</h3>
       <v-container>
        <v-col cols="12" md="6" class="centerImage" style="justify-content:space-evenly;">
          <img style="border:1px solid gray;" src="../assets/images/mobile/mobile_cdc.png" alt="">
          <img style="border:1px solid gray;" src="../assets/images/mobile/mobile_symptoms.png" alt="">
          <img style="border:1px solid gray;" src="../assets/images/mobile/mobile_symptoms_survey.png" alt="">
        </v-col>
      </v-container>
       <p>&nbsp;</p>
      <div class="centerImage" style="border:1px solid black;border-radius:4px;padding: 10px;">
        <p> <strong>Figure 2: COVID-19 CDC Information and Symptoms Survey</strong>. Users are given information, resources, and advice from the Centers for Disease Control and Prevention (CDC) about COVID-19. In addition, users are able to fill a travel/symptoms questionnaire to better tailor their advice and assess their risk level. This data will be stored locally on the user’s phone to reduce privacy concerns.</p>
      </div>


      <!-- Why You Should Care -->
      <h2 id="care"><span class="titleLine">Why You Should Care</span></h2>
      <p>&nbsp;</p>
      <h3 id="healthAuthorities">Incentives for Health Authorities</h3>
      <br>
      <ul>
        <li>High accuracy, instantaneous contact tracing</li>
        <li>Targeted interventions based on calculated risk and current health policy</li>
        <li>Easier communication of announcements and information</li>
      </ul>
      <br>

      <h3 id="users">Incentives for Individuals</h3>
      <br>
      <ul>
        <li>Information about how to avoid contracting the disease</li>
        <li>Earlier warning to protect friends, family, and close contacts if you do get sick</li>
        <li>Friends, family, and close contacts who use the system will likely be warned before they can get you sick</li>
        <li>Broad health measures to contain the disease could be relaxed in favor of such targeted and private interventions, so regular life will not need to be disrupted as much</li>
      </ul>
      <br>

      <h3 id="impact">Quantitative Analysis of Impact</h3>
      <br>
        <p>The impact of this technology will depend largely on the state of the system around it. <a href="https://github.com/BDI-pathogens/covid-19_instant_tracing/blob/master/Manuscript%20-%20Modelling%20instantaneous%20digital%20contact%20tracing.pdf">Numerical models</a> and ongoing <a href="https://www.sciencemag.org/news/2020/03/coronavirus-cases-have-dropped-sharply-south-korea-whats-secret-its-success">campaigns</a> suggest that with extensive testing, accurate contact tracing, and isolation of suspected cases, outbreaks can be contained.</p>
        <p>For intermediate testing and contact tracing detection rates, a system like this would likely need to be used in combination with social distancing measures and manual contact tracing. However, the measures suggested by <a href="https://www.imperial.ac.uk/media/imperial-college/medicine/sph/ide/gida-fellowships/Imperial-College-COVID19-NPI-modelling-16-03-2020.pdf">Ferguson et al</a>. could potentially be relaxed if supplemented with sufficient targeted interventions.   </p>
        <p>Of the three target parameters (tracing accuracy, detection rate, base transmission), the potential influence of the app on tracing accuracy is the simplest to quantify. Any two users of the app who are at the same location at the same time will register a contact event. In theory,  all transmission events except those by fomites would be detected. This includes all types of contact classified as being <a href="https://www.ecdc.europa.eu/sites/default/files/documents/covid-19-public-health-management-contact-novel-coronavirus-cases-EU.pdf">“high risk” by the ECDC</a>.</p>
        <p>Preventative measures encouraged by the app such as avoiding high-risk areas and increased precautions would reduce overall transmission rate, however it is difficult to quantify this impact. The current design of the app may also increase detection rate by informing users of symptoms to watch for and how to get tested. Ongoing research is being conducted on how to allocate testing resources to maximize the expected value of secondary cases detected. </p>
        <p>To have a significant impact the technology will require a significant adoption rate. To detect contact events using Bluetooth both individuals must have the app installed at the time of transmission. Assuming ‘P’ percent of the population uses the app, ‘A’  percent of transmission events between app users are detected, and ‘T’ percent of infected are tested, then T*A*P^2 percent of total transmissions are detected (if app users are homogeneous in the population). </p>
        <p>The figure below examines the percentage of detectable transmission events in countries with different testing rates as a function of app usage. The analysis assumes that these events are uncorrelated, which may significantly under-estimate detected transmissions due to missing chain-reaction testing. Ongoing modelling work is being done to investigate the dynamics of rapid tracing and testing along infection chains.</p>

        <div class="centerImage" style="display:flex;flex-direction:column;align-items:center;">
          <img src="../assets/images/ProportionTraced.png" alt="">
          <p style="color:gray;">Transmission Detection vs. App Usage curves for testing rates [0.05, 0.1, 0.2, 0.4, 0.8]. BLE_Acc gives the detection rate of transmission events between app users. Work derived from this <a href="https://colab.research.google.com/drive/1V7yuwuVHK-WXP5p_LWmJ77NuhNb2Lvid">Monte Carlo Model</a>.</p>
        </div>
        <p>In order to investigate disease dynamics with clusters of app users, the model developed by Hellewel et al was modified to account for two sub-populations, one that uses the app and another that doesn’t. The modified implementation is available on <a href="https://github.com/covid19risk/impact-sim">Github</a> and currently assumes 90% app tracing accuracy and 50% non-app tracing accuracy (assuming health systems are partially overwhelmed).</p>
      <p>This model was used to estimate the average number of infections caused in 6 weeks due to a single imported case. Results show a significant reduction in risk for clusters of app users that are partially distanced from non app users. This is important because it provides an additional incentive for individuals to use the app even when the overall adoption rate is low. As the proportion of the population using the app increases the risk for the entire population is reduced and most outbreaks are contained. </p>
        <div class="centerImage" style="display:flex;flex-direction:column;align-items:center;">
          <img src="../assets/images/totalInfected.png" alt="">
          <img src="../assets/images/appInfected.png" alt="">
          <p style="color:gray;">Expected infections for total population (top) and app population (bottom) adjusted for relative population size.</p>
        </div>
       <p> <strong>So for the question: “Can an effective contact tracing program reduce local transmission so that sustained local spread does not occur?” </strong></p>
       <p> The answer seems to be yes. With a comprehensive testing program, high contact tracing accuracy, and self-isolation of diagnosed individuals, our models predict that each new case could cause on the order of 10 other cases before the outbreak is extinguished. Even in parameter regimes where automated contact tracing alone is not enough, this technology can be used in combination with existing methodologies to provide greater protections with lower social cost. </p>
       <p>Also, even in parameter regimes where automated contact tracing alone is not enough, this technology can be used in combination with existing methodologies to provide greater protection with lower social cost.</p>

        <p>&nbsp;</p>
        <p><span id="timeline" class="subTitleLine"> Timeline to Deployment</span></p>
        <p>We estimate we could complete the remainder of the necessary technical requirements and deploy the first version of the mobile app for pilot within 2 weeks, and possibly sooner, based on the rapid rate of progress that has so far been achieved by the researchers and volunteers who have devoted their time to this technically challenging, but potentially high impact intervention. </p>
        <p>The track to development requires (1) more volunteers to help us with skill sets listed on our <a href="https://www.covid-watch.org/collaborate.html">collaborate page</a> and (2) funding for, at a minimum, cloud services. </p>
        <p>The app will be implemented and launched in two parts: </p>
        <ul style="list-style:decimal">
          <li>The first version will implement a GPS/Bluetooth proximity network system to develop a heatmap to track and notify users of potential close contact exposure to SARS-CoV-2.</li>
          <li>The second version will build upon the initial launch. Users may be able to self-report symptoms, receive personalized advice based on the local health department, and receive CDC advice and resources (Fig. 1). When users come in contact with someone with COVID-19 or symptoms of it, their phones will send them a push notification of the alert. Users could then see their Transmission Phone Log within the application to determine where and when they may have contracted the virus. Additional features include incorporating a locally-stored questionnaire noting recent travel and symptoms to better determine the user’s risk level (Fig. 2).</li>
        </ul>
        <p></p>
        <p>We also want to emphasize that high user adoption as quickly as possible after release will facilitate the best possible outcomes for intervention. The app may not be able to make use of historical GPS data from individuals, and historical data from Bluetooth contact events doesn’t exist. Therefore, a user needs to download the app in order to start the clock and begin benefiting from the system as it anonymously logs their Bluetooth contact events. </p>

        <p>&nbsp;</p>
       <!--
        ALL OF THIS WAS PREVIOUS VERSION - to be removed but keeping just in case for a bit -Jesse



        <div id="intro">
          <p> Non-pharmaceutical approaches to infectious disease control generally have the following two components:</p>
        </div>

        <ul>
          <li><span>Filtering (picking a subset of the population)</span></li>
          <li><span>Intervention (modifying the behaviour of these people)</span></li>
        </ul>
        <p>&nbsp;</p>
        <p><span>For example, quarantining patients with a positive diagnosis applies a filter based on testing and then applies the quarantine intervention. Other examples include travel restrictions for at-risk areas, cancelling public events in a specific city, or encouraging more handwashing in an entire country.</span></p>
        <p><span>It has been shown [] that some of these interventions, especially self-isolation, are highly effective at preventing the transmission of infectious diseases like COVID-19. The downside is that they can also be costly to use. If the filtering process is not accurate this could result in a huge number of false positives, and therefore a huge cost incurred in the form of negative impact on peoples&rsquo; lives. In the short term it may be necessary to take aggressive action in the form of broad quarantines. If COVID-19 is not completely contained, medium and long term solutions must also be developed.&nbsp;</span></p>
         <p><span class="subTitleLine"> Crowdsourcing for pandemics </span></p>
        <p><span>In this document a technological solution to the pandemic optimization problem is explored. We show how anonymous information gathered from mobile devices can be used to build a high quality filter, and how targeted interventions can be selected and implemented using this information. Using numerical models we demonstrate how in some parameter regimes this system could be used to prevent COVID-19 from becoming endemic. This document discusses what we would like to accomplish, how the technology works, how the technology can be used, and numerical estimates of the benefit gained by implementing this system.</span></p>

        <p>&nbsp;</p>
        <h2 id="keyParameters"><span class="titleLine">Contact Tracing</span></h2>
        <p><span class="subTitleLine"> Objctive: Reducing contact between contagious people </span></p>
        <!-- <p style="color:red;">this section doesn't appear to be fully written yet</p>
        <p><span>Non-pharmaceutical methods the only choice for COVID-19 currently</span></p>
        <p><span>Based around reducing contact between contagious and susceptible people&nbsp;</span></p>
        <p><span>Simplest form this can be achieved by reducing all social events and increasing precautions like handwashing</span></p>
        <p><span>Number of new infections roughly proportional to the number of contact events with infectious people, scaled by a factor relating to the degree of caution (masks, etc.)</span></p>
        <p><span class="subTitleLine"> How it works </span></p>
        <p><span>A more targeted approach employed by many health agencies is contact tracing []. This system works by finding and monitoring contacts of patients that have been diagnosed.&nbsp;</span></p>

        <div class="centerImage">
          <img src="../assets/images/003.png" alt="">
        </div>
        <p><span>Hellewell et al analyzed the effectiveness of contact tracing as a method to contain COVID-19 at the beginning of an outbreak (<a href="https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(20)30074-7/fulltext" target="_blank">paper</a>). Their findings are fairly promising: with 80% contact tracing accuracy and a mean detection time of 3.8 days after symptom onset, containment is likely.</span></p>
        <p><span>In the context of contact tracing there are three parameters that can strongly impact results:</span></p>
        <ol>
          <li><span>Reduction in transmission through social distancing</span></li>
          <li><span>Testing rate and time to diagnosis</span></li>
          <li><span>Contact tracing accuracy</span></li>
        </ol>
        <p>&nbsp;</p>
        <p><span>China and South Korea have demonstrated two methods to contain COVID-19. is problem, which have both seen significant success.</span></p>
        <p><span>China uses thousands of people to manually trace contacts, combined with a mobile app of unknown functionality.</span></p>
        <p>&nbsp;</p>
        <p><span>South Korea publicizes a large amount of information collected from the cellphones of infected patients so that others can determine if they were in contact.</span></p>

        <!-- in line styling for now just so the images aren't huge in rough draft
        <div class="centerImage">

          <img style="width:30%;" src="../assets/images/001.png" alt="">
          <img style="width:70%;" src="../assets/images/002.png" alt="">
        </div>

        <p><br /><br /></p>

        <h2 id="proposedSystem"><span class="titleLine">Proposed System</span></h2>
        <!-- <p><br /></p>

          <p><span class="subTitleLine"> Mobile App </span></p>
        <p><span>Potential app functionality depending on time constraints and regulations:</span></p>
        <ul>
          <li><span>Logging contact events using Bluetooth when two people with the app are nearby</span></li>
          <li><span>Logging coarse location data (at a resolution that cannot identify the user)</span></li>
          <li><span>Warning users when someone they have been in contact with tests positive for the disease</span></li>
          <li><span>Estimating a risk score</span></li>
          <ul>
            <li><span>Simplest version: all direct contacts are instructed to call health authorities, all others in high risk areas are told to call if they experience certain symptoms</span></li>
            <li><span>More complicated: health authorities can adjust thresholds for certain interventions based on testing capacity, other risk estimates</span></li>
            <li><span>Can combine contact events with time spent in high risk areas to generate a risk score and customized set of instructions for what to do if users experience certain symptoms</span></li>
          </ul>
        </ul>

        <p>&nbsp;</p>
         <p><span class="subTitleLine"> Use mobile devices to </span></p>

        <ul>
          <li><span>Automatically trace contacts, increasing accuracy and scale of contact tracing efforts</span></li>
          <li><span>Advise people of current risk so that they avoid dangerous areas and take additional precautions, reducing overall transmission rate</span></li>
          <li><span>Advise people that have a higher risk of infection to monitor for symptoms and get tested if they exceed a symptom threshold, increasing testing rate and reducing diagnosis time</span></li>
        </ul>
        <p>&nbsp;</p>
       <p><span class="subTitleLine"> Automated Contact Tracing </span></p>

        <!-- <h2><span>Use Case: Automated Contact Tracing&nbsp;</span></h2> -
        <ul>
          <li><span>Use direct contact measured with Bluetooth, general location data, and symptom threshold to give targeted advice about when to self isolate and when to get tested</span></li>
          <li><span>Always on, always private contact tracing using cellphone Bluetooth&nbsp;</span></li>
          <li><span>&lsquo;Contact Events&rsquo; are measured when two people with cellphones running our software are close to each other&nbsp;&nbsp;</span></li>
        </ul>

        <div class="centerImage">
          <img src="../assets/images/004.png" alt="">
        </div>

        <ul>
          <li><span>When a new positive diagnosis occurs, the infected individual uses our app to automatically send an alert to everyone they have recently been in close contact with</span></li>
          <li><span>Public health offices can adjust the threshold for their targeted advisories:</span></li>
          <ul>
            <li><span>If the resources are available they can ask anyone who has logged a contact event to call them</span></li>
            <li><span>If the situation is very severe and they don&rsquo;t have the resources, these people could be instructed to self isolate.</span></li>
            <li><span>Even with no contact events, can advise people in high risk areas what symptoms warrant calling</span></li>
          </ul>

          <div class="centerImage">
            <img src="../assets/images/005_TEMP.png" alt="">
          </div>

        </ul>
        <ul>
          <li><span>If implemented properly, this system would be faster, more accurate, and would work even if public health offices became overwhelmed.</span></li>
        </ul>

        <p>&nbsp;</p>
       <p><span class="subTitleLine"> Location-Specific Alerts and Advisories </span></p>

        <ul>
          <li><span>List of location-specific instructions from health authorities, including what symptoms to look for, recommended social distancing methods, hand washing reminders, who to contact if needed</span></li>
          <li><span>Low resolution heatmap of infection density, instructions for individuals in high risk areas to be extra cautious. Instructions about social distancing and symptom monitoring when travelling from high risk area to low risk area</span></li>
        </ul>
        <p>&nbsp;</p>
        <p><span class="subTitleLine"> Use Case: Heatmap </span></p>

        <Heatmap class="heatMap"></Heatmap>

        <p>&nbsp;</p>
        <h2 id="privacyRequirements"><span class="titleLine">Privacy Requirements</span></h2>
           <p><span class="subTitleLine"> Privacy preservation </span></p>
        <p><span>As effective as these approaches are, they both involve significant personal information being released to the public. The challenge is to find an equally effective system that can be made to work in countries where stricter privacy laws and increased civil liberties make a number of such approaches nearly infeasible.</span></p>

         <p><span class="subTitleLine"> Cryptographically secure system </span></p>
        <p><span>Our solution is the use of a cryptographically secure system structured so that patient data is kept completely private.&nbsp;</span></p>
        <p><span>We can do this by building the system in a decentralized manner, and by using randomly generated &lsquo;contact event numbers&rsquo; instead of static IDs.&nbsp;</span></p>

        <h2 id="implementationDetails"><span class="titleLine">Implementation Details</span></h2>
        <p><span class="subTitleLine"> Private and Decentralized System for Contact Tracing </span></p>


        <!-- <h3><span>Private and Decentralized System for Contact Tracing&nbsp;</span></h3>
        <p><span>By generating a new random number for each contact event, the system is able to operate without storing or transmitting any personal information. This method is designed so that only the phones involved in a contact event are able to identify messages on a public database.</span></p>

        <p><span>The method works as follows:</span></p>

        <v-container class="stepsVisual">
          <v-row align="center">
            <v-col cols="12" md="6">
              <li>
                <span>1</span>
                <p>Every time two phones are close they randomly generate a contact event number and share it privately. </p>
                <img src="../assets/images/007.png" alt="">
              </li>
            </v-col>
            <v-col cols="12" md="6">
              <li>
                <span>2</span>
                <p>This number is saved locally on both phones.</p>
                <img src="../assets/images/008.png" alt="">
              </li>
            </v-col>
            <v-col cols="12" md="6">
              <li>
                <span>3</span>
                <p>If one of the phone owners is diagnosed positive, they are given a permission number by health authorities.</p>
                <img src="../assets/images/009.png" alt="">
              </li>
            </v-col>
            <v-col cols="12" md="6">
              <li>
                <span>4</span>
                <p>This person sends a packet to the public database with the permission number and their history of contact event numbers.</p>
                <img src="../assets/images/010.png" alt="">
              </li>
            </v-col>
            <v-col cols="12" md="6">
              <li>
                <span>5</span>
                <p>If the permission number is valid the contact event numbers are stored in the database and transmitted to all other phones.</p>
                <img src="../assets/images/011.png" alt="">
              </li>
            </v-col>
            <v-col cols="12" md="6">
              <li>
                <span>6</span>
                <p>Each phone compares the publicly posted contact event numbers against their own history. If there are any matches this means they were close to an infected individual and are given instructions on what to do next.</p>
                <img src="../assets/images/012.png" alt="">
              </li>
            </v-col>
          </v-row>
        </v-container>

        <p><br /></p>
        <p><span>The only authentication required is the permission number provided by a public health authority. This permission number is used so that malicious actors cannot send false alarms. After authentication the permission number is deleted from server memory.</span></p>
        <p><span>The contact event numbers are random and only known by the message recipient and the message sender, so the database can be made public without risk of sensitive information being discovered.&nbsp;</span></p>
        <p><br /></p>

        <p><span class="subTitleLine"> Bluetooth Protocol: Background Processes on iOS and Android </span></p>

        <p><span>Contact Event Number shared privately between two phones</span></p>
        <p><span>With this approach, a contact event number is only used once and it is only known by two phones. This could be implemented by temporarily linking nearby phones running our app and using Diffie-Hellman key exchange to establish an encrypted channel. The two phones could then collectively generate and store a contact event number. For example, each phone could generate a random number and the combined CEN could be formed by concatenating these two numbers.</span></p>

        <br />

        <!-- in line styling to be replaced, just temporary for quick non-styled first draft  - Jesse

        <div class="centerImage">
          <div class="benefitsDisadvantages">
            <div class="benefits">
              <p><strong>Benefits:</strong></p>
              <p>It is relatively simple to reason about the privacy of this approach- only two phones have knowledge of the CEN.</p>
              <br />
            </div>

            <div>
              <p><strong>Disadvantages:</strong></p>
              <p>Linking phones with bluetooth could be complicated, and it may require more time and power to record a contact event.</p>
            </div>
          </div>
        </div>

        <p><br /></p>

       <p><span class="subTitleLine"> Database Implementation: Diagnosis Authentication and Bandwidth Estimates </span></p>

        <h3><span>Database</span></h3>
        <p><span>The database will perform two functionalities: storing packets that are successfully authenticated, and transmitting contact event numbers to phones that request this information</span></p>
        <p><br /></p>
        <h3><span>Heatmap Calculation</span></h3>
        <p><br /></p>

        <h2 id="pathToAdoption"><span class="titleLine">Path to adoption</span></h2>
           <p><span class="subTitleLine"> Value add for health authorities </span></p>
        <!-- <h3><span>Value-add for Health Authorities</span></h3>
        <ul>
          <li><span>High accuracy, instantaneous contact tracing</span></li>
          <li><span>Targeted interventions based on calculated risk and current health policy</span></li>
          <li><span>Public announcements and information</span></li>
        </ul>
        <p>&nbsp;</p>
           <p><span class="subTitleLine"> Value add for individuals </span></p>
        <!-- <h3><span>Value-add for Individuals</span></h3>
        <ul>
          <li><span>Information about how to avoid contracting the disease</span></li>
          <li><span>Early warning to protect friends and family if you do get sick</span></li>
          <li><span>Friends and family who use our system will be warned before they can get you sick</span></li>
          <li><span>Health measures to contain the disease will be targeted and private, so regular life will not need to be disrupted as much</span></li>
        </ul>

        <p>&nbsp;</p>

        <h2 id="estimatedImpact"><span class="titleLine">Epidemiological Modelling: Estimated Impact</span></h2>
        <p><a href="https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(20)30074-7/fulltext" target="_blank">This paper</a> analyzes the effectiveness of contact tracing as a method to contain COVID-19 at the beginning of an outbreak. Their findings are fairly promising: with 80% contact tracing accuracy and a mean detection time of 3.8 days after symptom onset, containment is very likely. We are working on a very similar model for a slightly different research question:</p>
        <p><strong>&ldquo;Can an effective contact tracing program reduce local transmission so that sustained local spread does not occur?&rdquo;</strong></p>
        <p><span>The answer seems to be yes. With a comprehensive testing program, high contact tracing accuracy, and self-isolation of diagnosed individuals, our models predict that each new case will likely cause on the order of 10 other cases before the outbreak is extinguished.&nbsp;</span></p>
        <p><span>Current&nbsp;</span></p>
        <p><br /><br /></p>

        -->
        <p>&nbsp;</p>
        <h2 id="conclusion"><span class="titleLine">Conclusions</span></h2>
        <br>
        <p>Mobile technologies can provide instantaneous and high accuracy contact tracing, even between strangers at low social and economic cost. Instead of requiring thousands of healthcare workers to do this manually (as is the current approach in China) the process will be essentially cost-free. Also, because the system will be so accurate, a majority of people can continue to live their lives without the need for increased social distancing.</p>
        <p>We are developing this technology as a high-quality filter to be used for the pandemic optimization problem. Combined with a comprehensive testing program, our filter may be powerful enough to stop further spread of COVID-19. </p>

        <p>&nbsp;</p>
        <h2 id="youDo"><span class="titleLine">Who Can Help</span></h2>
        <br>
        <p>We continue to seek more <a href="https://www.covid-watch.org/collaborate.html">collaborators</a>, donors, and support from health organizations and testing centers.</p>
      </v-col>
    </v-row>

    <p>&nbsp;</p>
    <a class="link" href="#">Back to Top</a>
    <p>&nbsp;</p>

    <h2 id="contributors" class="titleLine">Contributors, Advisors, and Acknowledgements</h2>
    <div class="subTitleLine">Contributors:</div>
    <v-container class="contributors">
          <v-row justify="center" align="center">
            <v-col cols="10" sm="9">
              <v-row>
                <v-col cols="6" sm="3">
                  <h4>Name</h4>
                  <div class="author">
                    <a class="name">Isaiah Becker-Mayer</a>
                  </div>
                  <div class="author">
                    <a class="name">Daniel Blank</a>
                  </div>
                  <div class="author">
                    <a class="name">Jesse Colligan</a>
                  </div>
                  <div class="author">
                    <a class="name">Rhys Fenwick</a>
                  </div>
                  <div class="author">
                    <a class="name">Mike Hittle</a>
                  </div>
                  <div class="author">
                    <a class="name">Victoria Nguyen</a>
                  </div>
                  <div class="author">
                    <a class="name">James Petrie</a>
                  </div>
                  <div class="author">
                    <a class="name">Jeff Schwaber</a>
                  </div>
                  <div class="author">
                    <a class="name">Zsombor Szabo</a>
                  </div>
                  <div class="author">
                    <a class="name">Akhil Veeraghanta</a>
                  </div>
                  <div class="author">
                    <a class="name">Mikhail Voloshin</a>
                  </div>
                  <div class="author">
                    <a class="name">Sydney Von Arx</a>
                  </div>
                  <div class="author">
                    <a class="name">Tina White</a>
                  </div>
                </v-col>
                <v-col cols="6" sm="3">
                  <h4>Role</h4>
                  <div class="role">
                    <div>Software Engineer</div>
                  </div>
                  <div class="role">
                    <div>Software Engineer - Heat Map</div>
                  </div>
                  <div class="role">
                    <div>Software Engineer</div>
                  </div>
                  <div class="role">
                    <div>Head of Communications</div>
                  </div>
                  <div class="role">
                    <div>Heat Map Team Advisor</div>
                  </div>
                  <div class="role">
                    <div>User Interface Designer</div>
                  </div>
                  <div class="role">
                    <div>Head of Research</div>
                  </div>
                  <div class="role">
                    <div>Software Engineer</div>
                  </div>
                  <div class="role">
                    <div>Bluetooth Team Lead</div>
                  </div>
                  <div class="role">
                    <div>Software Engineer - Bluetooth</div>
                  </div>
                  <div class="role">
                    <div>Heatmap Team Lead</div>
                  </div>
                  <div class="role">
                    <div>Human Resources</div>
                  </div>
                  <div class="role">
                    <div>Executive Director</div>
                  </div>
                </v-col>
                <v-col cols="6" sm="3">
                  <h4>Affiliation</h4>
                  <div class="affiliation">
                    <a class="affiliation">n/a</a>
                  </div>
                  <div class="affiliation">
                    <a class="affiliation">n/a</a>
                  </div>
                  <div class="affiliation">
                    <a class="affiliation">Georgetown University</a>
                  </div>
                  <div class="affiliation">
                    <a class="affiliation">n/a</a>
                  </div>
                  <div class="affiliation">
                    <a class="affiliation">Stanford University</a>
                  </div>
                  <div class="affiliation">
                    <a class="affiliation">42 Silicon Valley</a>
                  </div>
                  <div class="affiliation">
                    <a class="affiliation">University of Waterloo</a>
                  </div>
                  <div class="affiliation">
                    <a class="affiliation">Bigtincan</a>
                  </div>
                  <div class="affiliation">
                    <a class="affiliation">n/a</a>
                  </div>
                  <div class="affiliation">
                    <a class="affiliation">University of British Columbia</a>
                  </div>
                  <div class="affiliation">
                    <a class="affiliation">n/a</a>
                  </div>
                  <div class="affiliation">
                    <a class="affiliation">Stanford University</a>
                  </div>
                  <div class="affiliation">
                    <a class="affiliation">Stanford University</a>
                  </div>
                </v-col>

                <v-col cols="6" sm="3">
                  <h4>Location</h4>
                  <div>
                    <a>California, USA</a>
                  </div>
                  <div>
                    <a>Berkeley, USA</a>
                  </div>
                  <div>
                    <a>New York, USA</a>
                  </div>
                  <div>
                    <a>Australia</a>
                  </div>
                  <div>
                    <a>USA</a>
                  </div>
                  <div>
                    <a>USA</a>
                  </div>
                  <div>
                    <a>Canada</a>
                  </div>
                  <div>
                    <a>USA</a>
                  </div>
                  <div>
                    <a>Budapest, Romania</a>
                  </div>
                  <div>
                    <a>Canada</a>
                  </div>
                  <div>
                    <a>USA</a>
                  </div>
                  <div>
                    <a>USA</a>
                  </div>
                  <div>
                    <a href="">United States</a>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>

        <div class="subTitleLine">Public Health and Epidemiology Advisors:</div>
        <v-container class="healthAdvisors">
          <v-row justify="center" align="center">
            <v-col cols="10" sm="9">
              <v-row>
                <v-col cols="6" sm="3">
                  <h4>Name</h4>
                  <div class="author">
                    <a class="name">Megan Coffee</a>
                  </div>
                  <div class="author">
                    <a class="name">Jolene Elizabeth</a>
                  </div>
                  <div class="author">
                    <a class="name">Celine Gounder</a>
                  </div>
                    <br><br>
                  <div class="author">
                    <a class="name">Julie Parsonnet</a>
                  </div>
                </v-col>
                <v-col cols="6" sm="3">
                  <h4>Title</h4>
                  <div class="role">
                    <div>MD, PhD, Infectious Diseases</div>
                  </div>
                  <div class="role">
                    <div>Public Health Research</div>
                  </div>
                  <div class="role">
                    <div>MD, ScM, FIDSA, Internist, Infectious Diseases Specialist, Epidemiologist</div>
                  </div>
                  <div class="role">
                    <div>MD, PhD, Infectious Diseases Specialist and Epidemiologist</div>
                  </div>
                </v-col>
                <v-col cols="6" sm="3">
                  <h4>Affiliation</h4>
                  <div class="affiliation">
                    <a class="affiliation">NYU and Columbia University</a>
                  </div>
                  <div class="affiliation">
                    <a class="affiliation">?</a>
                  </div>
                  <div class="affiliation">
                    <a class="affiliation">?</a>
                  </div>

                  <br><br>
                  <div class="affiliation">
                    <a class="affiliation">Stanford University</a>
                  </div>
                </v-col>

                <v-col cols="6" sm="3">
                  <h4>Location</h4>
                  <div>
                    <a>New York, USA</a>
                  </div>
                  <div>
                    <a>California, USA</a>
                  </div>
                  <div>
                    <a>New York, USA</a>
                  </div>
                    <br><br>
                  <div>
                    <a>California, USA</a>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>

        <div class="subTitleLine">Privacy and Security Advisors:</div>
        <v-container class="privacyAdvisors">
          <v-row justify="center" align="center">
            <v-col cols="10" sm="9">
              <v-row>
                <v-col cols="6" sm="3">
                  <h4>Name</h4>
                  <div class="author">
                    <a class="name">Tessa Alexanian</a>
                  </div>
                  <div class="author">
                    <a class="name">Peter Eckersley</a>
                  </div>
                  <div class="author">
                    <a class="name">Jeffrey Ladish</a>
                  </div>

                </v-col>
                <v-col cols="6" sm="3">
                  <h4>Title</h4>
                  <div class="role">
                    <div>Privacy and Security, iGEM</div>
                  </div>
                  <div class="role">
                    <div>Privacy and Security, Distinguished Technology Fellow</div>
                  </div>
                  <div class="role">
                    <div>Privacy and Security, Security Consultant</div>
                  </div>

                </v-col>
                <v-col cols="6" sm="3">
                  <h4>Affiliation</h4>
                  <div class="affiliation">
                    <a class="affiliation">East Bay Biosecurity Group</a>
                  </div>
                  <div class="affiliation">
                    <a class="affiliation">stop-covid.tech, EFF</a>
                  </div>
                  <div class="affiliation">
                    <a class="affiliation">Gordian Research</a>
                  </div>

                </v-col>

                <v-col cols="6" sm="3">
                  <h4>Location</h4>
                  <div>
                    <a>Berkeley, USA</a>
                  </div>
                  <div>
                    <a>Australia</a>
                  </div>
                  <div>
                    <a>Berkeley, USA</a>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>

        <div class="subTitleLine">Acknowledgements:</div>
        <br>
        <p>We are deeply grateful for the feedback and contributions from Allen Akhaumere, Ian Derrington, Wang Jian, Chris Olah, Justin Shovelain, Manisha Singh, Drew Stonebraker, and Joshua Zader.</p>
        <p>We also appreciate the advice, shared work, and cooperative spirit of Scott Leibrandt, Dana Lewis and the entire <a href="https://www.coepi.org/">CoEpi</a> volunteer team.</p>
        <p>We would also like to thank all the other volunteers and helpers and anyone else we might have missed who showed up and contributed time to the COVID Watch project. We couldn’t have done this without you. Look for the helpers.</p>

        <p>&nbsp;</p>
        <a class="link" href="#">Back to Top</a>
  </v-container>
</template>

<style lang="scss">
#covid19riskapp {
  // Please put CSS in here.
  // FYI, there's a wrapper element with id="covid19riskapp", but that's outside
  // of this page, in the layout code. Don't worry about it.

  .overviewContainer {
    //background-color: #ffffff;
    background-color: #779F98;
    color: rgba(0, 0, 0, 0.8);
    font-family: Roboto;
  }
}

.v-application a {
  // this color gets overridden somewhere else.  needs to be assigned elsewhere.  not even sure if this red shade looks that good tbh - Jesse
  // color: #BF3F4A;
  text-decoration: none;
  }

img {
  max-width: 100%;
}

// .TopSection {
//   background-color: #779F98;
//   opacity: 0.5;
// }


.mainTitle {
  display: flex;
  justify-content: center;
  padding-bottom: 20Px;
  //color: #8C1620;
   color: #404040;
  font-size: 50px;
}

.mainSubTitle {
  display: flex;
  justify-content: center;
  color: #779F98;
  font-size: 40px;
  padding-bottom: 15Px;
}

.IntroSection {
  display: flex;
  justify-content: center;
  //color: '#779F98';
  font-size: 18px;
  padding-bottom: 25Px;
}

.SmallerSubTitle {
  display: flex;
  justify-content: center;
  color: #779F98;
  font-size: 27px;
  padding-bottom: 15Px;
}


#tableOfContents {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-Top: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 40px;

  .tableOfContentsContainer {
    border: gray 1px solid;
    width: 70%;
    padding: 10px;
    border-radius: 4px;

    .outerList {
      font-size: 22px;
    }

     .innerList {
        list-style: none;
        font-size: 18px;
      }

      .nestedInnerList {
        list-style: none;
        font-size: 16px;
      }

  }
}

#overviewContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gridContainer {
  contain: style;
  overflow: unset;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 0.8rem;
  line-height: 1.8em;
  padding: 1.5rem 0;
  min-height: 1.8em;
  // display: grid;
  display: flex;
  justify-content: space-evenly;
  // justify-items: stretch;
  // grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr [text-end page-end gutter-end kicker-end middle-end];
  // this was original below modified from distill site.  Simplified above with no significant end result change - Jesse
  // grid-template-columns: [screen-start] 8px [page-start kicker-start text-start gutter-start middle-start]  1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr [text-end page-end gutter-end kicker-end middle-end] 8px [screen-end];
  // grid-column-gap: 80px;

  .byline {
    grid-template-columns: 1fr 1fr;
    grid-column: text;
  }

  .grid {
    display: grid;
    grid-column-gap: 8px;
  }

  .authors-affiliations {
    grid-column-end: span 2;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 1em;
  }
}

.titleLine {
  font-weight: bold;
 // color: 'red';
  font-size: 28px;
  padding-top: 10px;
  padding-bottom: 25px;
  color: #779F98;
 // #8C1620
  //color: '#779F98'
}

.subTitleLine {
 font-weight: bold;
  font-size: 22px;
 // color: 'red';
  padding-top: 10px;
  padding-bottom: 5px;
  color: #404040;
 // #8C1620
  //color: '#779F98'
}



.centerImage {
  display: flex;
  justify-content: center;
  max-width: 90%;
}

.stepsVisual {
  list-style: none;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;

  li {
    display: flex;
    // width: 40%;
    align-items: center;
    justify-content: space-evenly;
    margin: 0;

    span {
      font-weight: bold;
      font-size: 40px;
      margin-right: 20px;
      // color of large number:
      // color: #779F98;
    }

    p {
      // width: 300px;
      width: 40%;
      font-size: 17px;
    }

    img {
      width: 50%;
      // width: 300px;
    }
  }
}
.benefitsDisadvantages {
  border: 1px solid black;
  border-radius: 4px;
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .benefits {
    border-right: 1px solid black;
  }
}
@media screen and (min-width: 480px) {
  .overviewContainer {
    padding: 8%;
  }

  .benefitsDisadvantages {
    width: 60%;
  }
}
.container {
  // padding-right: 60px;
  // padding-left: 60px;
  // padding-bottom: 100px;
}




</style>

<script>
import Heatmap from "~/components/Heatmap.vue";

export default {
  components: {
    Heatmap
  }
};
</script>
