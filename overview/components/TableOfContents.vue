<template>
  <span id="tableOfContents">
    <div class="tableOfContentsContainer">
      <h2 class="titleLine">Table of Contents</h2>
      <ol class="outerList">
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
            <li>
              <a href="/article#heatmapTitle">Part 2: GPS Heatmap</a>
            </li>
            <li>
              <a href="/article#userRecommendations"
                >Part 3: User Recommendations</a
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
  // padding-top: 50px;
  // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  // padding-bottom: 40px;

  .tableOfContentsContainer {
    // border: gray 1px solid;
    // margin-left: 1vw;
    padding-left: 10px;
    padding-right: 10px;
    // border-radius: 4px;

    .outerList {
      list-style: none;
      // font-size: 22px;
    }

    .innerList {
      list-style: none;
      // font-size: 18px;
    }

    .nestedInnerList {
      list-style: none;
      // font-size: 16px;
    }
  }
}
</style>