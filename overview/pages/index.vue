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
        <v-col cols="12" md="6">
          <h3>
            This column takes up full width on narrow mobile screens, but half the browser width
            for desktop.
          </h3>
          <p>
            This is a dummy paragraph. I would write it in lorem ipsum but then Google
            wants to translate it when it loads in the browser. I'd like to see it
            <em>try</em> to translate lorem ipsum. Duh. Blah blah. Have you seen my
            cat? My cat is adorable?
          </p>
        </v-col>

        <v-col cols="12" md="6">
          <h3>
            This column takes up the other half on full browsers, but falls below the
            previous column on mobile.
          </h3>
          <img src="https://images-na.ssl-images-amazon.com/images/I/51pn4A4VnML._AC_.jpg"
              class="puppypic" />
        </v-col>

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
