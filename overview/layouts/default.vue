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
                  <v-list-item v-for="link in navLinks" :key="link.title">
                    <nuxt-link
                      class="link"
                      style="color:#BF3F4A;"
                      :to="link.href"
                    >
                        {{ link.title }}
                    </nuxt-link>
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

      <nuxt style="min-height: 100vh" />

      <v-footer
        color="#A2C5BF"
        padless
      >
          <v-row
            justify="center"
            no-gutters
          >
            <v-btn
              v-for="link in navLinks"
              :key="link.title"
              text
              class="my-2"
              nuxt
              :href="link.href"
            >
              {{ link.title }}
            </v-btn>
          </v-row>
          <v-row
            justify="center"
          >
            <v-col
              v-for="social in socialIcons"
              :key="social.alt"
              class="d-flex justify-center"
              cols="1"
            >
              <a
                :href="social.href"
                target="_blank"
              >
                <v-img
                  :src="social.img"
                  height="24px"
                  width="24px"
                  alt="social.alt"
                  contain
                ></v-img>
              </a>
            </v-col>
            <v-col
              class="text-center caption"
              cols="12"
            >
              {{ new Date().getFullYear() }} — 
              Licensed <a href="https://creativecommons.org/licenses/by-nc/2.0/">CC-BY-NC</a>  — 
              <strong>COVID Watch</strong> in partnership with Stanford University
            </v-col>
          </v-row>
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
  data: () => ({
    tocShow: null,
    navLinks: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "About Us",
        href: "/about",
      },
      {
        title: "White Paper",
        href: "/article",
      },
      {
        title: "FAQ",
        href: "/faq",
      },
      {
        title: "Get Involved",
        href: "/collaborate",
      },
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Media",
        href: "/media",
      },
    ],
    socialIcons: [
      {
        "alt": "Follow our progress on Github",
        "img": require('~/assets/images/footer_assets/github-white.png'),
        "href": "https://github.com/covid19risk",
        
      },
      {
        "alt": "Follow us on Twitter",
        "img": require('~/assets/images/footer_assets/twitter-white.png'),
        "href": "https://twitter.com/COVIDWatchApp",
        
      },
      {
        "alt": "Like us on Facebook",
        "img": require('~/assets/images/footer_assets/facebook-white.png'),
        "href": "https://www.facebook.com/CovidWatch2020",
        
      },
    ]
  }),
  components: {
    TableOfContents
  }
};
</script>



