<template>
  <v-app id="covid19app">
    <v-app-bar id="navBar" fixed app clipped-left color="#A2C5BF">
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
              ><img class="logoImg" src="../assets/images/logo/new_logo_march_29.png" alt=""
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
                    <nuxt-link class="link" to="/faq"
                    >FAQ</nuxt-link
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
                  <v-list-item>
                    <nuxt-link class="link" style="color:#BF3F4A;" to="/medialist"
                      >Media</nuxt-link
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
        @click="tocShow = !tocShow"
      >
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>

      <TableOfContents></TableOfContents>
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


      <v-row style="border-bottom: .5px lightgray solid;">
        <!-- may be better way to center this than inline margin-left to be more responsive via Vuetify -->
        <v-col cols="12" style="display:flex;justify-content:center;align-items:center;margin-left:10px;">
           <p><strong> In partnership with: </strong></p>
           <img src="~/assets/images/stanford_logo.png" alt="" style="width:200px;"/>
           <!-- other logos if we want <img src="~/assets/images/IMAGEIMAGE" alt="" style="width:200px;"/> -->
        </v-col >
      </v-row>

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
                <nuxt-link class="link" to="/faq"
                  >FAQ</nuxt-link
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
              <v-col class="footerList" cols="12" md="3">
                <nuxt-link class="link" to="/medialist">Media</nuxt-link>
              </v-col>
            </v-row>
          </v-container>

          <v-divider></v-divider>

          <v-card-text class="gray--text">
            <img src="~/assets/images/logo/banner_1.png" alt="" />
          </v-card-text>
          <v-card-text>
            <a
              style="margin-right:100px;"
              href="https://www.facebook.com/CovidWatch2020"
              target="_blank"
            >
              <img
                style="width: 5em;"
                src="~/assets/images/footer_assets/facebook-white.png"
                alt="Like us on Facebook"
              />
            </a>
            <a href="https://twitter.com/COVIDWatchApp" target="_blank">
              <img
                style="width: 5em;"
                src="~/assets/images/footer_assets/twitter-white.png"
                alt="Like us on Twitter"
              />
            </a>
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

h1 {
  font-size: 36px;
}
</style>



<script>
import TableOfContents from "~/components/TableOfContents.vue";

export default {
  data() {
    return {
      tocShow: null
    };
  },
  components: {
    TableOfContents
  }
};
</script>
