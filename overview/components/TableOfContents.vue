<template>
  <span id="tableOfContents">
    <div class="tableOfContentsContainer">
      <div class="toc-header">
        <h2 class="titleLine">Table of Contents</h2>
      </div>
      <ol class="outerList firstOuterList">
        <li>
          <strong><a href="/article#aboutUs">About Us</a></strong>
          <ol class="innerList">
            <li><a href="/article#mission">Mission Statement</a></li>
            <li><a href="/article#privacy">Privacy Focus</a></li>
            <li>
              <a href="/article#interventionBackground"
                >Current Mobile Phone Interventions</a
              >
            </li>
            <li>
              <a href="/article#interventionOptimization"
                >Making Interventions More Efficient</a
              >
            </li>
          </ol>
        </li>
        <li>
          <strong
            ><a href="/article#proposedSystem"
              >Proposed System: Three Parts</a
            ></strong
          >
          <ol class="innerList">
            <li>
              <a href="/article#contactTracing"
                >Part 1: Bluetooth Contact Tracing</a
              >
            </li>
            <!-- <li>
              <a href="/article#heatmapTitle">Part 2: GPS Heatmap</a>
            </li> -->
            <li>
              <a href="/article#userRecommendations"
                >Part 2: User Recommendations</a
              >
            </li>
          </ol>
        </li>
        <li>
          <strong><a href="/article#care">Why You Should Care</a></strong>
          <ol class="innerList">
            <li>
              <a href="/article#healthAuthorities"
                >Incentives for Health Authorities</a
              >
            </li>
            <li>
              <a href="/article#users">Incentives for Individuals</a>
            </li>
            <li>
              <a href="/article#impact">Quantitative Analysis of Impact</a>
            </li>
            <li>
              <a href="/article#timeline">Timeline to Deployment</a>
            </li>
          </ol>
        </li>
        <li>
          <strong><a href="/article#conclusion">Conclusions</a></strong>
          <ol class="innerList">
            <li><a href="/article#youDo">Who Can Help</a></li>
            <li>
              <a href="/article#contributors"
                >Contributors, Advisors, and Acknowledgements</a
              >
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </span>
</template>

<style lang="scss">
#tableOfContents {
  display: flex;
  justify-content: baseline;
  width: 100%;

  .toc-header {
    position: absolute;
    background-color: white;
    width: 104%;
    display: flex;
    justify-content: center;
  }

  .tableOfContentsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;

    .outerList {
      list-style: none;
      margin-top: 70px;
    }

    .innerList {
      list-style: none;
    }

    .firstOuterList {
      margin-top: 70px;
    }

    .nestedInnerList {
      list-style: none;
    }
  }
}
</style>