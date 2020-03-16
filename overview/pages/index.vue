<template>
  <!-- Hi Jesse. nuxt requires a single element under v-container (or at least it used to.)
    This is usually a v-container. -->
  <v-container class="hijesse">
    <v-row>
      <!-- Typically a v-container has a bunch of v-row elements under it.
        Each v-row usually has v-col elements, which are organized into a
        responsive 12-column grid.
        See: https://vuetifyjs.com/en/components/grids/
        -->
         <!-- Jesse's note: since the desired output is a single column of text, images, etc. I don't believe including any columns is necessary <v-col cols="12" md="12">-->
         <h1>COVID Watch</h1>
      </v-row>
      <div id="keyPoints" style="border:gray 1px solid; width:50%;">

          <h2><span style="font-weight: 400;">Key Points:</span></h2>

            <ol>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Pandemic mitigation in the context of filtering and optimization: developing a tool to better filter the population for more effective interventions</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Epidemiological modeling and findings from China and South Korea: important parameters to influence are contact tracing accuracy, diagnosis speed, and base infection rate</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Proposed system (bluetooth, heatmap) and how it might affect key parameters&nbsp;</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Privacy requirements</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Implementation/progress details (bluetooth, GPS)</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Path to adoption: incentives for individuals and public health / support of tech companies</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Estimated impact: modeling results</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Next steps: what needs to be done and why it needs to be done quickly</span></li>
            </ol>
      </div>
          <p>&nbsp;</p>
          <v-row>
            <p><span style="font-weight: 400;">From a technical standpoint, pandemic mitigation is an optimization problem. The goal is to simultaneously minimize adverse health outcomes and economic impact. Non-pharmaceutical approaches to infectious disease control have the following components:</span></p>
          </v-row>
          
          <ul>
          <li style="font-weight: 400;"><span style="font-weight: 400;">Filtering (picking a subset of the population)</span></li>
          <li style="font-weight: 400;"><span style="font-weight: 400;">Intervention (modifying the behaviour of these people)</span></li>
          </ul>
          <p>&nbsp;</p>
          <p><span style="font-weight: 400;">For example, quarantining patients with a positive diagnosis applies a filter based on testing and then applies the quarantine intervention. Other examples include travel restrictions for at-risk areas, cancelling public events in a specific city, or encouraging more handwashing in an entire country.</span></p>
          <p><span style="font-weight: 400;">It has been shown [] that some of these interventions, especially self-isolation, are highly effective at preventing the transmission of infectious diseases like COVID-19. The downside is that they can also be costly to use. If the filtering process is not accurate this could result in a huge number of false positives, and therefore a huge cost incurred in the form of negative impact on peoples&rsquo; lives. In the short term it may be necessary to take aggressive action in the form of broad quarantines. If COVID-19 is not completely contained, medium and long term solutions must also be developed.&nbsp;</span></p>
          <p><span style="font-weight: 400;">In this document a technological solution to the pandemic optimization problem is explored. We show how anonymous information gathered from mobile devices can be used to build a high quality filter, and how targeted interventions can be selected and implemented using this information. Using numerical models we demonstrate how in some parameter regimes this system could be used to prevent COVID-19 from becoming endemic. This document discusses what we would like to accomplish, how the technology works, how the technology can be used, and numerical estimates of the benefit gained by implementing this system.</span></p>


          <h2><span style="font-weight: 400;">Contact Tracing: Key Parameters</span></h2>
            <p style="color:red;">this section doesn't appear to be fully written yet</p>
            <p><span style="font-weight: 400;">Non-pharmaceutical methods the only choice for COVID-19 currently</span></p>
            <p><span style="font-weight: 400;">Based around reducing contact between contagious and susceptible people&nbsp;</span></p>
            <p><span style="font-weight: 400;">Simplest form this can be achieved by reducing all social events and increasing precautions like handwashing</span></p>
            <p><span style="font-weight: 400;">Number of new infections roughly proportional to the number of contact events with infectious people, scaled by a factor relating to the degree of caution (masks, etc.)</span></p>
            <p><span style="font-weight: 400;">A more targeted approach employed by many health agencies is contact tracing []. This system works by finding and monitoring contacts of patients that have been diagnosed.&nbsp;</span></p>

            <img src="../assets/images/003.png" alt="">

            <p><span style="font-weight: 400;">Hellewell et al analyzed the effectiveness of contact tracing as a method to contain COVID-19 at the beginning of an outbreak [[</span><a href="https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(20)30074-7/fulltext"><span style="font-weight: 400;">https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(20)30074-7/fulltext</span></a><span style="font-weight: 400;">]. Their findings are fairly promising: with 80% contact tracing accuracy and a mean detection time of 3.8 days after symptom onset, containment is likely.</span></p>
            <p><span style="font-weight: 400;">In the context of contact tracing there are three parameters that can strongly impact results:</span></p>
          <ol>
          <li style="font-weight: 400;"><span style="font-weight: 400;">Reduction in transmission through social distancing</span></li>
          <li style="font-weight: 400;"><span style="font-weight: 400;">Testing rate and time to diagnosis</span></li>
          <li style="font-weight: 400;"><span style="font-weight: 400;">Contact tracing accuracy</span></li>
          </ol>
          <p>&nbsp;</p>
          <p><span style="font-weight: 400;">China and South Korea have demonstrated two methods to contain COVID-19. is problem, which have both seen significant success.</span></p>
          <p><span style="font-weight: 400;">China uses thousands of people to manually trace contacts, combined with a mobile app of unknown functionality.</span></p>
          <p>&nbsp;</p>
          <p><span style="font-weight: 400;">South Korea publicizes a large amount of information collected from the cellphones of infected patients so that others can determine if they were in contact.</span></p>
          
          <!-- in line styling for now just so the images aren't huge in rough draft -->
          <img style="width:200px;" src="../assets/images/001.png" alt="">
          <img style="width:500px;" src="../assets/images/002.png" alt="">
          
          <p><br /><br /></p>

          <h2><span style="font-weight: 400;">Proposed System</span></h2>
            <p><br /></p>
            <h3><span style="font-weight: 400;">Mobile App</span></h3>
            <p><span style="font-weight: 400;">Potential app functionality depending on time constraints and regulations:</span></p>
            <ul>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Logging contact events using Bluetooth when two people with the app are nearby</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Logging coarse location data (at a resolution that cannot identify the user)</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Warning users when someone they have been in contact with tests positive for the disease</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Estimating a risk score</span></li>
            <ul>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Simplest version: all direct contacts are instructed to call health authorities, all others in high risk areas are told to call if they experience certain symptoms</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">More complicated: health authorities can adjust thresholds for certain interventions based on testing capacity, other risk estimates</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Can combine contact events with time spent in high risk areas to generate a risk score and customized set of instructions for what to do if users experience certain symptoms</span></li>
            </ul>
            </ul>
            
            <p>&nbsp;</p>
            
            <p><span style="font-weight: 400;">Use mobile devices to:</span></p>
            <ul>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Automatically trace contacts, increasing accuracy and scale of contact tracing efforts</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Advise people of current risk so that they avoid dangerous areas and take additional precautions, reducing overall transmission rate</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Advise people that have a higher risk of infection to monitor for symptoms and get tested if they exceed a symptom threshold, increasing testing rate and reducing diagnosis time</span></li>
            </ul>
            <p>&nbsp;</p>


          <h2><span style="font-weight: 400;">Use Case: Automated Contact Tracing&nbsp;</span></h2>
            <ul>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Use direct contact measured with Bluetooth, general location data, and symptom threshold to give targeted advice about when to self isolate and when to get tested</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Always on, always private contact tracing using cellphone Bluetooth&nbsp;</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">&lsquo;Contact Events&rsquo; are measured when two people with cellphones running our software are close to each other&nbsp;&nbsp;</span></li>
            </ul>

            <img src="../assets/images/004.png" alt="">

            <ul>
              <li style="font-weight: 400;"><span style="font-weight: 400;">When a new positive diagnosis occurs, the infected individual uses our app to automatically send an alert to everyone they have recently been in close contact with</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Public health offices can adjust the threshold for their targeted advisories:</span></li>
            <ul>
              <li style="font-weight: 400;"><span style="font-weight: 400;">If the resources are available they can ask anyone who has logged a contact event to call them</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">If the situation is very severe and they don&rsquo;t have the resources, these people could be instructed to self isolate.</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Even with no contact events, can advise people in high risk areas what symptoms warrant calling</span></li>
            </ul>
            <img src="../assets/images/005_TEMP.png" alt="">

            </ul>
            <ul>
              <li style="font-weight: 400;"><span style="font-weight: 400;">If implemented properly, this system would be faster, more accurate, and would work even if public health offices became overwhelmed.</span></li>
            </ul>

            <p>&nbsp;</p>
          <h2><span style="font-weight: 400;">Use Case: Location-Specific Alerts and Advisories&nbsp;</span></h2>
            <ul>
            <li style="font-weight: 400;"><span style="font-weight: 400;">List of location-specific instructions from health authorities, including what symptoms to look for, recommended social distancing methods, hand washing reminders, who to contact if needed</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Low resolution heatmap of infection density, instructions for individuals in high risk areas to be extra cautious. Instructions about social distancing and symptom monitoring when travelling from high risk area to low risk area</span></li>
            </ul>
            <p>&nbsp;</p>
          <h2><span style="font-weight: 400;">Use Case: Heatmap&nbsp;</span></h2>
          <!-- @Mikhail: area for heatmap element to be placed below.  Just remove the p and img elements below  - Jesse -->
          <div>
            <p style="color:red;">note: live heat map will go here</p>
            <img style="width:1200px"src="../assets/images/006.png" alt="">
          </div>


          <p>&nbsp;</p>
          <h2><span style="font-weight: 400;">Privacy Requirements</span></h2>
            <p><span style="font-weight: 400;">As effective as these approaches are, they both involve significant personal information being released to the public. The challenge is to find an equally effective system that can be made to work in countries where stricter privacy laws and increased civil liberties make a number of such approaches nearly infeasible.</span></p>
            <p><span style="font-weight: 400;">Our solution is the use of a cryptographically secure system structured so that patient data is kept completely private.&nbsp;</span></p>
            <p><span style="font-weight: 400;">We can do this by building the system in a decentralized manner, and by using randomly generated &lsquo;contact event numbers&rsquo; instead of static IDs.&nbsp;</span></p>


          <h2><span style="font-weight: 400;">Implementation Details</span></h2>
            <h3><span style="font-weight: 400;">Private and Decentralized System for Contact Tracing&nbsp;</span></h3>
            <p><span style="font-weight: 400;">By generating a new random number for each contact event, the system is able to operate without storing or transmitting any personal information. This method is designed so that only the phones involved in a contact event are able to identify messages on a public database.</span></p>

            <p><span style="font-weight: 400;">The method works as follows:</span></p>
            <ul>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Every time two phones are close they randomly generate a contact event number and share it privately. This number is saved locally on both phones.</span></li>
            </ul>
            <img src="../assets/images/007.png" alt="">
            <img src="../assets/images/008.png" alt="">

            <ul>
              <li style="font-weight: 400;"><span style="font-weight: 400;">If one of the phone owners is diagnosed positive, they are given a permission number by health authorities.</span></li>
            </ul>
            <img src="../assets/images/009.png" alt="">

            <ul>
              <li style="font-weight: 400;"><span style="font-weight: 400;">This person sends a packet to the public database with the permission number and their history of contact event numbers.</span></li>
            </ul>
            <img src="../assets/images/010.png" alt="">

            <ul>
              <li style="font-weight: 400;"><span style="font-weight: 400;">If the permission number is valid the contact event numbers are stored in the database and transmitted to all other phones.</span></li>
            </ul>
            <img src="../assets/images/011.png" alt="">

            <ul>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Each phone compares the publicly posted contact event numbers against their own history. If there are any matches this means they were close to an infected individual and are given instructions on what to do next.</span></li>
            </ul>
            <img src="../assets/images/012.png" alt="">

            <p><br /></p>
            <p><span style="font-weight: 400;">The only authentication required is the permission number provided by a public health authority. This permission number is used so that malicious actors cannot send false alarms. After authentication the permission number is deleted from server memory.</span></p>
            <p><span style="font-weight: 400;">The contact event numbers are random and only known by the message recipient and the message sender, so the database can be made public without risk of sensitive information being discovered.&nbsp;</span></p>
            <p><br /></p>


          <h2><span style="font-weight: 400;">Bluetooth Protocol: Background Processes on iOS and Android</span></h2>
            <p><span style="font-weight: 400;">Contact Event Number shared privately between two phones</span></p>
            <p><span style="font-weight: 400;">With this approach, a contact event number is only used once and it is only known by two phones. This could be implemented by temporarily linking nearby phones running our app and using Diffie-Hellman key exchange to establish an encrypted channel. The two phones could then collectively generate and store a contact event number. For example, each phone could generate a random number and the combined CEN could be formed by concatenating these two numbers.</span></p>
            
            <br />

            <!-- in line styling to be replaced, just temporary for quick non-styled first draft  - Jesse -->
            <div style="border:gray 1px solid; width:50%;">
              <p><strong>Benefits:</strong></p>
              <p><span style="font-weight: 400;">It is relatively simple to reason about the privacy of this approach- only two phones have knowledge of the CEN.</span></p>
              <br />
              <p><strong>Disadvantages:</strong></p>
              <p><span style="font-weight: 400;">Linking phones with bluetooth could be complicated, and it may require more time and power to record a contact event.</span></p>
            </div>

          <p><br /></p>

          <h2><span style="font-weight: 400;">Database Implementation: Diagnosis Authentication and Bandwidth Estimates</span></h2>
            <h3><span style="font-weight: 400;">Database</span></h3>
            <p><span style="font-weight: 400;">The database will perform two functionalities: storing packets that are successfully authenticated, and transmitting contact event numbers to phones that request this information</span></p>
            <p><br /></p>
            <h3><span style="font-weight: 400;">Heatmap Calculation</span></h3>
            <p><br /></p>
          
          
          <h2><span style="font-weight: 400;">Path to adoption</span></h2>
            <h3><span style="font-weight: 400;">Value-add for Health Authorities</span></h3>
            <ul>
              <li style="font-weight: 400;"><span style="font-weight: 400;">High accuracy, instantaneous contact tracing</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Targeted interventions based on calculated risk and current health policy</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Public announcements and information</span></li>
            </ul>
            <p>&nbsp;</p>
            <h3><span style="font-weight: 400;">Value-add for Individuals</span></h3>
            <ul>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Information about how to avoid contracting the disease</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Early warning to protect friends and family if you do get sick</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Friends and family who use our system will be warned before they can get you sick</span></li>
              <li style="font-weight: 400;"><span style="font-weight: 400;">Health measures to contain the disease will be targeted and private, so regular life will not need to be disrupted as much</span></li>
            </ul>


          <p>&nbsp;</p>


          <h2><span style="font-weight: 400;">Epidemiological Modelling: Estimated Impact</span></h2>
          <p><span style="font-weight: 400;">This paper [</span><a href="https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(20)30074-7/fulltext"><span style="font-weight: 400;">https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(20)30074-7/fulltext</span></a><span style="font-weight: 400;">] analyzes the effectiveness of contact tracing as a method to contain COVID-19 at the beginning of an outbreak. Their findings are fairly promising: with 80% contact tracing accuracy and a mean detection time of 3.8 days after symptom onset, containment is very likely. We are working on a very similar model for a slightly different research question:</span></p>
          <p><strong>&ldquo;Can an effective contact tracing program reduce local transmission so that sustained local spread does not occur?&rdquo;</strong></p>
          <p><span style="font-weight: 400;">The answer seems to be yes. With a comprehensive testing program, high contact tracing accuracy, and self-isolation of diagnosed individuals, our models predict that each new case will likely cause on the order of 10 other cases before the outbreak is extinguished.&nbsp;</span></p>
          <p><span style="font-weight: 400;">Current&nbsp;</span></p>
          <p><br /><br /></p>

          <h2><span style="font-weight: 400;">Conclusion</span></h2>
          <p><span style="font-weight: 400;">We believe that technology can be an important part of this solution. In order to remain operational for years, the contact tracing system must have a low social and economic cost. Mobile technologies can provide instantaneous and high accuracy contact tracing, even between strangers. Instead of requiring thousands of healthcare workers to do this manually (as is the current approach in China) the process will be essentially cost-free. Because the system will be so accurate, a majority of people can continue to live their lives without the need for increased social distancing.</span></p>
          <p><span style="font-weight: 400;">What we are developing is a high-quality filter to be used for the pandemic optimization problem. Combined with a comprehensive testing program, our filter may be powerful enough to protect our communities from COVID-19.</span></p>
          <!--</v-col>-->

    </v-row>
  </v-container>
</template>

<style lang="scss">
#covid19riskapp {
  // Please put CSS in here.
  // FYI, there's a wrapper element with id="covid19riskapp", but that's outside
  // of this page, in the layout code. Don't worry about it.

  .hijesse {
    img.puppypic {
      width: 100%;
    }
  }
}
</style>

<script>
export default {

}
</script>
