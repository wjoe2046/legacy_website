<template>
  <!-- Hi Jesse. nuxt requires a single element under v-container (or at least it used to.)
    This is usually a v-container. -->
  <v-container class="overviewContainer">
    <v-row>
      <v-col cols="12">
        <!-- Typically a v-container has a bunch of v-row elements under it.
        Each v-row usually has v-col elements, which are organized into a
        responsive 12-column grid.
        See: https://vuetifyjs.com/en/components/grids/
        -->
        <!-- Jesse's notes:
              1) I used this word to html website (https://wordhtml.com/) to save time + generate an outline in html of the text content, hence the sometimes slightly whacky formatting and inline styling font-weights.  I will adjust as needed.
              2) since the desired output is a single column of text, images, etc. I don't believe including any columns is necessary <v-col cols="12" md="12">
              3) I abandoned using v-row elements since the word2html service output line breaks differently and I'm not as familiar w v-row/v-col.  Path of least resistance and doesn't seem to compromise the result
            -->
        <div class="mainTitle">
          <h1>COVID Watch</h1>
        </div>

        <div id="keyPoints">
          <div class="keyPointsContainer">
            <h2 class="titleLine">Key Points:</h2>
            <br />
            <ol>
              <li><a href="#intro">Pandemic mitigation in the context of filtering and optimization: developing a tool to better filter the population for more effective interventions</a></li>
              <li><a href="#keyParameters">Epidemiological modeling and findings from China and South Korea: important parameters to influence are contact tracing accuracy, diagnosis speed, and base infection rate</a></li>
              <li><a href="#proposedSystem">Proposed system (bluetooth, heatmap) and how it might affect key parameters&nbsp;</a></li>
              <li><a href="#privacyRequirements">Privacy requirements</a></li>
              <li><a href="#implementationDetails">Implementation/progress details (bluetooth, GPS)</a></li>
              <li><a href="#pathToAdoption">Path to adoption: incentives for individuals and public health / support of tech companies</a></li>
              <li><a href="#estimatedImpact">Estimated impact: modeling results</a></li>
              <li><a href="#conclusion">Next steps: what needs to be done and why it needs to be done quickly</a></li>
            </ol>
          </div>
        </div>
        <!-- <div class="byline-grid gridContainer">
          <div class="authors-affiliations grid"> -->

        <v-container fluid="true">
          <v-row justify="center" align="center">
            <v-col cols="10" sm="9">
              <v-row>
                <v-col cols="6" sm="3">
                  <h4>Authors</h4>
                  <div class="author">
                    <a class="name" href="#">John Smith</a>
                  </div>
                  <p class="author">
                    <a class="name" href="#">Jane Doe</a>
                  </p>
                </v-col>
                <v-col cols="6" sm="3">
                  <h4>Affiliations</h4>
                  <div class="affiliation">
                    <a class="affiliation" href="#">Stanford</a>
                  </div>
                  <div class="affiliation">
                    <a class="affiliation" href="#">Univ of Waterloo</a>
                  </div>
                </v-col>
                <v-col cols="6" sm="3">
                  <h4>Published</h4>
                  <div class="published">
                    <div>March 17, 2020</div>
                  </div>
                </v-col>
                <v-col cols="6" sm="3">
                  <h4>DOI</h4>
                  <div>
                    <a href="#"> 12345</a>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

        </v-container>

        <p>&nbsp;</p>
        <div id="intro">
          <p><span style="font-weight:bold; font-size: 18px;">From a technical standpoint, pandemic mitigation is an optimization problem.</span> The goal is to simultaneously minimize adverse health outcomes and economic impact. Non-pharmaceutical approaches to infectious disease control have the following components:</p>
        </div>

        <ul>
          <li><span>Filtering (picking a subset of the population)</span></li>
          <li><span>Intervention (modifying the behaviour of these people)</span></li>
        </ul>
        <p>&nbsp;</p>
        <p><span>For example, quarantining patients with a positive diagnosis applies a filter based on testing and then applies the quarantine intervention. Other examples include travel restrictions for at-risk areas, cancelling public events in a specific city, or encouraging more handwashing in an entire country.</span></p>
        <p><span>It has been shown [] that some of these interventions, especially self-isolation, are highly effective at preventing the transmission of infectious diseases like COVID-19. The downside is that they can also be costly to use. If the filtering process is not accurate this could result in a huge number of false positives, and therefore a huge cost incurred in the form of negative impact on peoples&rsquo; lives. In the short term it may be necessary to take aggressive action in the form of broad quarantines. If COVID-19 is not completely contained, medium and long term solutions must also be developed.&nbsp;</span></p>
        <p><span>In this document a technological solution to the pandemic optimization problem is explored. We show how anonymous information gathered from mobile devices can be used to build a high quality filter, and how targeted interventions can be selected and implemented using this information. Using numerical models we demonstrate how in some parameter regimes this system could be used to prevent COVID-19 from becoming endemic. This document discusses what we would like to accomplish, how the technology works, how the technology can be used, and numerical estimates of the benefit gained by implementing this system.</span></p>

        <h2 id="keyParameters"><span class="titleLine">Contact Tracing: Key Parameters</span></h2>
        <p style="color:red;">this section doesn't appear to be fully written yet</p>
        <p><span>Non-pharmaceutical methods the only choice for COVID-19 currently</span></p>
        <p><span>Based around reducing contact between contagious and susceptible people&nbsp;</span></p>
        <p><span>Simplest form this can be achieved by reducing all social events and increasing precautions like handwashing</span></p>
        <p><span>Number of new infections roughly proportional to the number of contact events with infectious people, scaled by a factor relating to the degree of caution (masks, etc.)</span></p>
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

        <!-- in line styling for now just so the images aren't huge in rough draft -->
        <div class="centerImage">

          <img style="width:30%;" src="../assets/images/001.png" alt="">
          <img style="width:70%;" src="../assets/images/002.png" alt="">
        </div>

        <p><br /><br /></p>

        <h2 id="proposedSystem"><span class="titleLine">Proposed System</span></h2>
        <p><br /></p>
        <h3><span>Mobile App</span></h3>
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

        <p><span>Use mobile devices to:</span></p>
        <ul>
          <li><span>Automatically trace contacts, increasing accuracy and scale of contact tracing efforts</span></li>
          <li><span>Advise people of current risk so that they avoid dangerous areas and take additional precautions, reducing overall transmission rate</span></li>
          <li><span>Advise people that have a higher risk of infection to monitor for symptoms and get tested if they exceed a symptom threshold, increasing testing rate and reducing diagnosis time</span></li>
        </ul>
        <p>&nbsp;</p>

        <h2><span>Use Case: Automated Contact Tracing&nbsp;</span></h2>
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
        <h2><span>Use Case: Location-Specific Alerts and Advisories&nbsp;</span></h2>
        <ul>
          <li><span>List of location-specific instructions from health authorities, including what symptoms to look for, recommended social distancing methods, hand washing reminders, who to contact if needed</span></li>
          <li><span>Low resolution heatmap of infection density, instructions for individuals in high risk areas to be extra cautious. Instructions about social distancing and symptom monitoring when travelling from high risk area to low risk area</span></li>
        </ul>
        <p>&nbsp;</p>

        <h2>Use Case: Heatmap&nbsp;</h2>
        <Heatmap style="width: 110%"></Heatmap>

        <p>&nbsp;</p>
        <h2 id="privacyRequirements"><span class="titleLine">Privacy Requirements</span></h2>
        <p><span>As effective as these approaches are, they both involve significant personal information being released to the public. The challenge is to find an equally effective system that can be made to work in countries where stricter privacy laws and increased civil liberties make a number of such approaches nearly infeasible.</span></p>
        <p><span>Our solution is the use of a cryptographically secure system structured so that patient data is kept completely private.&nbsp;</span></p>
        <p><span>We can do this by building the system in a decentralized manner, and by using randomly generated &lsquo;contact event numbers&rsquo; instead of static IDs.&nbsp;</span></p>

        <h2 id="implementationDetails"><span class="titleLine">Implementation Details</span></h2>
        <h3><span>Private and Decentralized System for Contact Tracing&nbsp;</span></h3>
        <p><span>By generating a new random number for each contact event, the system is able to operate without storing or transmitting any personal information. This method is designed so that only the phones involved in a contact event are able to identify messages on a public database.</span></p>

        <p><span>The method works as follows:</span></p>

        <v-container class="stepsVisual">
          <v-row align="center">
            <v-col cols="12" sm="6">
              <li>
                <span>1</span>
                <p>Every time two phones are close they randomly generate a contact event number and share it privately. </p>
                <img src="../assets/images/007.png" alt="">
              </li>
            </v-col>
            <v-col cols="12" sm="6">
              <li>
                <span>2</span>
                <p>This number is saved locally on both phones.</p>
                <img src="../assets/images/008.png" alt="">
              </li>
            </v-col>
            <v-col cols="12" sm="6">
              <li>
                <span>3</span>
                <p>If one of the phone owners is diagnosed positive, they are given a permission number by health authorities.</p>
                <img src="../assets/images/009.png" alt="">
              </li>
            </v-col>
            <v-col cols="12" sm="6">
              <li>
                <span>4</span>
                <p>This person sends a packet to the public database with the permission number and their history of contact event numbers.</p>
                <img src="../assets/images/010.png" alt="">
              </li>
            </v-col>
            <v-col cols="12" sm="6">
              <li>
                <span>5</span>
                <p>If the permission number is valid the contact event numbers are stored in the database and transmitted to all other phones.</p>
                <img src="../assets/images/011.png" alt="">
              </li>
            </v-col>
            <v-col cols="12" sm="6">
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

        <h2><span>Bluetooth Protocol: Background Processes on iOS and Android</span></h2>
        <p><span>Contact Event Number shared privately between two phones</span></p>
        <p><span>With this approach, a contact event number is only used once and it is only known by two phones. This could be implemented by temporarily linking nearby phones running our app and using Diffie-Hellman key exchange to establish an encrypted channel. The two phones could then collectively generate and store a contact event number. For example, each phone could generate a random number and the combined CEN could be formed by concatenating these two numbers.</span></p>

        <br />

        <!-- in line styling to be replaced, just temporary for quick non-styled first draft  - Jesse -->

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

        <h2><span>Database Implementation: Diagnosis Authentication and Bandwidth Estimates</span></h2>
        <h3><span>Database</span></h3>
        <p><span>The database will perform two functionalities: storing packets that are successfully authenticated, and transmitting contact event numbers to phones that request this information</span></p>
        <p><br /></p>
        <h3><span>Heatmap Calculation</span></h3>
        <p><br /></p>

        <h2 id="pathToAdoption"><span class="titleLine">Path to adoption</span></h2>
        <h3><span>Value-add for Health Authorities</span></h3>
        <ul>
          <li><span>High accuracy, instantaneous contact tracing</span></li>
          <li><span>Targeted interventions based on calculated risk and current health policy</span></li>
          <li><span>Public announcements and information</span></li>
        </ul>
        <p>&nbsp;</p>
        <h3><span>Value-add for Individuals</span></h3>
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

        <h2 id="conclusion"><span class="titleLine">Conclusion</span></h2>
        <p><span>We believe that technology can be an important part of this solution. In order to remain operational for years, the contact tracing system must have a low social and economic cost. Mobile technologies can provide instantaneous and high accuracy contact tracing, even between strangers. Instead of requiring thousands of healthcare workers to do this manually (as is the current approach in China) the process will be essentially cost-free. Because the system will be so accurate, a majority of people can continue to live their lives without the need for increased social distancing.</span></p>
        <p><span>What we are developing is a high-quality filter to be used for the pandemic optimization problem. Combined with a comprehensive testing program, our filter may be powerful enough to protect our communities from COVID-19.</span></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
#covid19riskapp {
  // Please put CSS in here.
  // FYI, there's a wrapper element with id="covid19riskapp", but that's outside
  // of this page, in the layout code. Don't worry about it.

  .overviewContainer {
    background-color: #ffffff;
    color: rgba(0, 0, 0, 0.8);
    font-family: Roboto;
  }
}

img {
  max-width: 100%;
}

.mainTitle {
  display: flex;
  justify-content: center;
  font-size: 24px;
}

#keyPoints {
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 40px;

  .keyPointsContainer {
    border: gray 1px solid;
    width: 70%;
    padding: 10px;
    border-radius: 4px;
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
    }

    p {
      // width: 300px;
      width: 40%;
      font-size: 18px;
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
  .benefitsDisadvantages {
    width: 60%;
  }
}
@media screen and (min-width: 480px) {
  .overviewContainer {
    padding: 8%;
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
