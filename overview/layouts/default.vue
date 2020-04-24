<template>
  <v-app id="covid19app">
    <!-- Header that persists across pages -->
    <v-app-bar
      app
      dense
      flat
      clipped-left
      color="secondaryLight"
    >
      <v-toolbar-title>
        <!-- Logos -->
        <a class="logoDesktop logo d-none d-md-flex" href="#">
          <v-img
            class="logoImg"
            :src="require('../assets/images/logo/banner_1.png')"
            alt="Covid Watch"
            contain
          />
        </a>
        <a class="logoMobile logo d-flex d-md-none" href="#">
          <v-img
            class="logoImg"
            :src="require('../assets/images/logo/new_logo_march_29.png')"
            alt="Covid Watch"
            max-height="40px"
            max-width="40px"
            contain
          />
        </a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Desktop menu -->
      <v-toolbar-items class="d-none d-md-flex">
        <v-btn
          v-for="link in navLinks"
          :key="link.icon"
          :title="link.title"
          :to="link.href"
          nuxt
          text
        >{{ link.title }}</v-btn>
      </v-toolbar-items>
      <!-- Mobile menu -->
      <v-toolbar-items class="d-flex d-md-none">
        <v-menu offset-y >
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="link in navLinks" :key="link.title">
              <nuxt-link
                class="link primary--text"
                :to="link.href"
              >
                  {{ link.title }}
              </nuxt-link>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>

    <!-- Navigation drawer (i.e. Table of Contents) for the article page --->
    <transition name="slide-fade">
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
    </transition>

    <!-- Navigation drawer (i.e. Table of Contents) for the FAQ page --->
    <!-- commented out in case we want to bring back naviation bar to FAQ at some point -->
    <!-- <v-navigation-drawer
      v-if="$nuxt.$route.name === 'faq'"
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
        <v-icon >mdi-close-circle</v-icon>
      </v-btn>

      <FAQTableOfContents></FAQTableOfContents>

    </v-navigation-drawer> -->

    <v-content>
      <!-- Affiliations --->
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="4" sm="auto" class="text-center caption">
            <div class="px-1">
              a project in collaboration with
            </div>
        </v-col>
        <v-col cols="4" sm="auto" class="text-center">
            <v-img
              :src="require('../assets/images/logo/stanford_wordmark.png')"
              alt="Stanford University"
              max-height="48px"
              max-width="200px"
              contain
              class="d-flex"
            />
        </v-col>
        <v-col cols="4" sm="auto" class="text-center">
            <v-img
              :src="require('../assets/images/logo/waterloo_wordmark.png')"
              alt="University of Waterloo"
              max-height="48px"
              max-width="200px"
              contain
              class="d-flex"
            />
        </v-col>
        <v-col cols="12" sm="12">
          <v-divider></v-divider>
        </v-col>
      </v-row>

        <!-- Button to show / hide table of contents --->
        <!-- commented out in case we want to bring back naviation bar to FAQ at some point -->
        <!-- <v-btn
          v-if="$nuxt.$route.name === 'faq'"
          class="toc-hamburger"
          color="primary"
          v-show="!tocShow"
          @click="tocShow = !tocShow"
        >
          <v-icon>mdi-table-of-contents</v-icon>
        </v-btn> -->

      <!-- Button to show / hide table of contents --->
      <v-btn
        v-if="$nuxt.$route.name === 'article'"
        class="toc-hamburger"
        color="primary"
        v-show="!tocShow"
        @click="tocShow = !tocShow"
      >
        <v-icon>mdi-table-of-contents</v-icon>
      </v-btn>

      <!-- Page content provided by nuxt --->
      <!-- note: transition styling is on the index.vue <style> section - the home page -->
      <transition name="slide-fade">

        <nuxt style="min-height: 100vh" />
      
      </transition>

      <!-- Footer that persists across pages-->
      <v-footer
        color="secondaryLight"
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
              <strong>Covid Watch</strong>
            </v-col>
          </v-row>
      </v-footer>
    </v-content>
  </v-app>
</template>

<style lang="scss">

// note: transition styling for all pages is in index.vue (home page)

.v-navigation-drawer {
  max-width: 95vw;

  .toc-closer {
    position: absolute;
    top: 1em;
    right: 1em;
    z-index: 10;
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
  width: 30% !important;
}


h1 {
  font-size: 36px;
  color: var(--v-primary-base);
}

</style>

<script>
import TableOfContents from "~/components/TableOfContents.vue";
import FAQTableOfContents from "~/components/FAQTableOfContents.vue";

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
        href: "/medialist",
      },
      {
        title: "Donate",
        href: "/donate",
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
    TableOfContents,
    FAQTableOfContents
  }
};
</script>



