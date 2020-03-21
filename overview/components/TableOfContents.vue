<template>
  <div ref="toc" style="display:none">
    <slot></slot>
  </div>
</template>

<style lang="scss">

</style>

<script>
let injectedIntoElem = null;

export default {
  mounted() {
    for (let child of this.$root.$children) {
      const navDrawerTocElem = child.$refs.toc;
      if (!navDrawerTocElem) {
        continue;
      }

      navDrawerTocElem.innerHTML = '';
      navDrawerTocElem.appendChild(this.$refs.toc);
      injectedIntoElem = navDrawerTocElem;
      break;
    }
    this.$refs.toc.style.display = '';
  },

  beforeDestroy() {
    if (injectedIntoElem) {
      injectedIntoElem.innerHTML = '';
    }
  }
}
</script>
