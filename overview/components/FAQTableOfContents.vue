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
        <template
            v-for="(item, i) in tocItems"
        >
            <li :key="i">
              <a :href="item.link">{{item.title}}</a>
            </li>
        </template>
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
export default {
  props: {
    tocItems: Array,
  }
};
</script>