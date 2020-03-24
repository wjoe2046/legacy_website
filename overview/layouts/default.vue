<template>
  <v-app id="covid19app">
    <v-app-bar id="navBar" fixed app clipped-left color="secondaryLight">
      <!-- this is the header that persists across pages -->
      <v-container class="navbarContainer">
        <!-- if by using Vuetify we can improve the below somehow to be more responsive, etc. please let me know, I'm new to Vuetify and eager to learn! - Jesse -->
        <v-row class="navbarRow">
          <v-col class="navbarColumn">
            <a class="logoDesktop logo d-none d-md-flex" href="#"
              ><img
                class="logoImg"
                src="../assets/images/logo/banner_1.png"
                alt=""
            /></a>
            <a class="logoMobile logo d-flex d-md-none" href="#"
              ><img class="logoImg" src="../assets/images/logo/logo.png" alt=""
            /></a>

            <div class="rightNav">
              <v-btn color="primary" class="white--text">
                <nuxt-link style="color:white;" to="/subscribe"
                  >Sign Up</nuxt-link
                >
              </v-btn>

              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn text color="gray" v-on="on">
                    <span class="d-none d-md-flex">
                      <v-icon left>mdi-chevron-down</v-icon>
                      <span>Menu</span>
                    </span>
                    <v-icon class="d-flex d-md-none">mdi-menu</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <nuxt-link class="link" style="color:#BF3F4A;" to="/"
                      >Home</nuxt-link
                    >
                  </v-list-item>
                  <v-list-item>
                    <nuxt-link class="link" to="/article" style="color:#BF3F4A;"
                      >White Paper</nuxt-link
                    >
                  </v-list-item>
                  <v-list-item>
                    <nuxt-link
                      class="link"
                      :to="{ path: '/article', hash: 'heatmapImplementation' }"
                      style="color:#BF3F4A;"
                      >Heatmap Demo</nuxt-link
                    >
                  </v-list-item>
                  <v-list-item>
                    <nuxt-link
                      class="link"
                      style="color:#BF3F4A;"
                      to="/collaborate"
                      >Get Involved</nuxt-link
                    >
                  </v-list-item>
                  <v-list-item>
                    <nuxt-link class="link" style="color:#BF3F4A;" to="/blog"
                      >Blog</nuxt-link
                    >
                  </v-list-item>
                  <v-list-item>
                    <nuxt-link class="link" style="color:#BF3F4A;" to="/donate"
                      >Donate</nuxt-link
                    >
                  </v-list-item>
                  <v-list-item>
                    <nuxt-link class="link" style="color:#BF3F4A;" to="/about"
                      >About</nuxt-link
                    >
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-if="$nuxt.$route.name === 'article'"
      clipped
      app
      :width="350"
      v-model="tocShow"
    >
      <v-btn
        icon
        small
        color="primary"
        class="toc-closer"
        @click="tocShow = false"
      >
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>

      <div class="px-1" ref="toc"></div>
    </v-navigation-drawer>

    <v-content>
      <v-btn
        v-if="$nuxt.$route.name === 'article'"
        class="toc-hamburger"
        color="primary"
        v-show="!tocShow"
        @click="tocShow = !tocShow"
      >
        <v-icon>mdi-table-of-contents</v-icon>
      </v-btn>

      <nuxt style="min-height: 100vh" />

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
                <nuxt-link class="link" to="/">Home</nuxt-link>
              </v-col>
              <v-col class="footerList" cols="12" md="3">
                <nuxt-link class="link" to="/article">White Paper</nuxt-link>
              </v-col>
              <v-col class="footerList" cols="12" md="3">
                <nuxt-link
                  class="link"
                  :to="{ path: '/article', hash: 'heatmapImplementation' }"
                  >Heatmap Demo</nuxt-link
                >
              </v-col>
              <v-col class="footerList" cols="12" md="3">
                <nuxt-link class="link" to="/collaborate"
                  >Get Involved</nuxt-link
                >
              </v-col>
              <v-col class="footerList" cols="12" md="3">
                <nuxt-link class="link" to="/blog">Blog</nuxt-link>
              </v-col>
              <v-col class="footerList" cols="12" md="3">
                <nuxt-link class="link" to="/donate">Donate</nuxt-link>
              </v-col>
              <v-col class="footerList" cols="12" md="3">
                <nuxt-link class="link" to="/about">About</nuxt-link>
              </v-col>
            </v-row>
          </v-container>

          <v-divider></v-divider>

          <v-card-text class="gray--text">
            <img src="~/assets/images/logo/banner_1.png" alt="" />
          </v-card-text>
          <v-card-text class="gray--text">
            Licensed
            <a href="https://creativecommons.org/licenses/by-nc/2.0/"
              >CC-BY-NC</a
            >
            - COVID Watch
          </v-card-text>
        </v-card>
      </v-footer>
    </v-content>
  </v-app>
</template>

<style lang="scss">
.v-navigation-drawer {
  max-width: 95vw;

  .toc-closer {
    position: absolute;
    top: 1em;
    right: 1em;
  }
}

.toc-hamburger {
  margin: 1ex;
  position: fixed;
  z-index: 1;

  @media (max-width: 1264px) {
    opacity: 0.8;
  }
}

.logoDesktop {
  width: 25% !important;
}
</style>



<script>
export default {
  data() {
    return {
      tocShow: null
    };
  }
};
</script>
