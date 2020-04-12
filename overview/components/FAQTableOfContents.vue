<template>
  <span id="FAQtableOfContents">
    <div class="FAQtableOfContentsContainer">
      <div class="toc-header">
        <div style="width: 100%;display:block;">
          <h2 class="toc-title">FAQ Navigator</h2>
          <div class="fade-container">
              <div class="fade"></div>
          </div>
        </div>
        
      </div>
      <ol class="outerList">
        

        <!-- Jesse note: below is my initial stab at accessing 
        the faqList array defined in faq.vue to display as a list
        instead of hardcoding <li> elements here.
           
        I'm still getting familiar with Vue (I'm much more experienced w React)
        but it seems we need to:

        (1) make most of the content in faq.vue a Component, to render at page /faq

        (2) use some sort of state (which I don't think we have currently set up)

        OR rearrange where FAQTableOfContents renders (it currently renders in the component default.vue)
        in order to pass array faqList as props from parent component Faq to child component FAQTableOfContents
            
        Thoughts?    
        -->

          <!-- <template
            v-for="(faq, i) in faqList"
          >
              <li :key="i">
                <p>{{faq.question}}</p>
              </li>
          </template> -->


        <li class="firstLi">
          <a href="/faq#who-are-you">Who are you?</a>
        </li>
        <li>
          <a href="/faq#why-do-this">Why are you doing this?</a>
        </li>
        <li>
          <a href="/faq#google-and-apple">Aren’t Google and Apple working on something similar?</a>
        </li>
        <li>
          <a href="/faq#what-is-contact-tracing">What is contact tracing?</a>
        </li>
        <li>
          <a href="/faq#delay-inevitable">If COVID-19 is going to become widespread anyway, why bother delaying the inevitable?</a>
        </li>
        <li>
          <a href="/faq#lockdown-why">There is already a lockdown in my area and we can’t meet other people, so what is the point?</a>
        </li>
        <li>
          <a href="/faq#health-privacy">Is this legal given health data privacy laws?</a>
        </li>
        <li>
          <a href="/faq#traction">Will this app ever get enough traction to work?</a>
        </li>
        <li>
          <a href="/faq#another-app">Is this just another app that will record my symptoms?</a>
        </li>
        <li>
          <a href="/faq#asian-countries">Is this similar to what South Korea, Taiwan, and Singapore are doing?</a>
        </li>
        <li>
          <a href="/faq#hong-kong">Is this the same as what Hong Kong has introduced?</a>
        </li>
        <li>
          <a href="/faq#legal-status">What is the legal status of your organization?</a>
        </li>
        <li>
          <a href="/faq#data-collection">What data are you collecting?</a>
        </li>
        <li>
          <a href="/faq#data-ownership">Who owns the data that is collected and will you sell it?</a>
        </li>
        <li>
          <a href="/faq#bluetooth">Why are you using Bluetooth?</a>
        </li>
        <li>
          <a href="/faq#gps">Why not use GPS as well?</a>
        </li>
        <li>
          <a href="/faq#snoop-dogg">Will this app snoop on me?</a>
        </li>
        <li>
          <a href="/faq#finished">How close to finished is the app?</a>
        </li>
        <li>
          <a href="/faq#exposed">Will this app tell me where or when I was exposed?</a>
        </li>
        <li>
          <a href="/faq#collaborators">Who are your app’s collaborators? Are you working with the government?</a>
        </li>
        <li>
          <a href="/faq#get-involved">How can I get involved?</a>
        </li>
        
      </ol>
    </div>
  </span>
</template>

<style lang="scss">


#FAQtableOfContents {
  display: flex;
  justify-content: baseline;
  width: 90%;

  .FAQtableOfContentsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    .toc-header {
      position: absolute;
      background-color: white;
      width: 104%;
      display: flex;
      flex-direction: column;
      align-items: center;
      // border-bottom: .5px rgba(128, 128, 128, 0.753) solid;
    }
    
    .toc-title {
      font-weight: bold;
      font-size: 26px;
      padding-top: 9px;
      padding-bottom: 2px;
      margin-left: 30%;
      color: #779f98;
   }

    .fade-container {
      position: absolute;
      width: 100%;
      height: 3vh;
      z-index: 2;
    }

    .fade {
      width: 100%;
      height: 3vh;
      z-index: 2;
      background: rgb(255, 255, 255, 0) linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 80%) repeat scroll 0 0;
    }

    .outerList {
      list-style: none;
      margin-top: 70px;

      li {
          padding-bottom: 12px;
          padding-right: 12px;
          padding-left: 12px;
      }

      li a:hover {
        text-decoration: underline;
      }
    }

  }
}
</style>

<script>
import faqList from "../pages/faq";

export default {
  faqList
}
</script>