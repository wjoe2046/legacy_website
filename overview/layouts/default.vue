<template>
  <v-app id="covid19app">
    <v-app-bar id="navBar" fixed app>
      <!-- this is the header that persists across pages -->
      <v-container class="navbarContainer">
        <!-- if by using Vuetify we can improve the below somehow to be more responsive, etc. please let me know, I'm new to Vuetify and eager to learn! - Jesse -->
        <v-row class="navbarRow">
          <v-col class="navbarColumn">
            <a class="logoDesktop" href="#" style="width: 25%;"
              ><img
                class="logoImg"
                src="../assets/images/logo/banner_1.png"
                alt=""
            /></a>
            <a class="logoMobile logo" href="#"
              ><img class="logoImg" src="../assets/images/logo/logo.png" alt=""
            /></a>

            <div class="rightNav">
              <v-btn
                color="#BF3F4A"
                class="white--text"
                onClick="{alertFunc()}"
              >
                Get App
              </v-btn>

              <!-- @Isaiah this is where menu code begins.  The commented out <ul> a bit further down is what I'm attemtping to replace with this dropdown menu so at some point we need to get the links to other pages in the menu items-->
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn text color="gray" v-on="on">
                    <v-icon left>mdi-chevron-down</v-icon>
                    <span>Menu</span>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <a
                      target="_blank"
                      class="link"
                      href="https://www.covid-watch.org/collaborate.html"
                      style="color:#BF3F4A;"
                      >Get Involved</a
                    ></v-list-item
                  >
                  <v-list-item>
                    <a
                      target="_blank"
                      class="link"
                      href="https://www.covid-watch.org/collaborate.html"
                      style="color:#BF3F4A;"
                      >Donate</a
                    >
                  </v-list-item>
                  <v-list-item>
                    <a
                      target="_blank"
                      class="link"
                      href="https://www.covid-watch.org/about.html"
                      style="color:#BF3F4A;"
                      >About</a
                    >
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer color="#A2C5BF" :elevation="6">
      <v-card
        flat
        tile
        class="lighten-1 white--text text-center"
        color="#A2C5BF"
      >
        <v-container>
          <v-row>
            <v-col class="footerList" cols="12" md="3">
              <a
                target="_blank"
                class="text-no-wrap"
                href="https://www.covid-watch.org/heatmap/"
                >Heatmap Demo</a
              >
            </v-col>
            <v-col class="footerList" cols="12" md="3">
              <a
                target="_blank"
                class="text-no-wrap"
                href="https://www.covid-watch.org/collaborate.html"
                >Get Involved</a
              >
            </v-col>
            <v-col class="footerList" cols="12" md="3">
              <a
                target="_blank"
                class="text-no-wrap"
                href="https://www.covid-watch.org/collaborate.html"
                >Donate</a
              >
            </v-col>
            <v-col class="footerList" cols="12" md="3">
              <a
                target="_blank"
                class="text-no-wrap"
                href="https://www.covid-watch.org/about.html"
                >About</a
              >
            </v-col></v-row
          ></v-container
        >

        <v-divider></v-divider>

        <v-card-text class="gray--text">
          <img src="../assets/images/logo/banner_1.png" alt="" />
        </v-card-text>
        <v-card-text class="gray--text">
          All rights reserved - COVID Watch
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
@media screen and (max-width: 960px) {
  .logoDesktop {
    display: none;
  }
}

@media screen and (min-width: 960px) {
  .logoMobile {
    display: none !important;
  }
}
</style>
