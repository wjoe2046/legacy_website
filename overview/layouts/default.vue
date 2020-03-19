<template>
  <v-app id="covid19app">
    <v-app-bar id="navBar" fixed app>
    <!-- this is the header that persists across pages -->
      <v-container class="navbarContainer">
    <!-- if by using Vuetify we can improve the below somehow to be more responsive, etc. please let me know, I'm new to Vuetify and eager to learn! - Jesse -->
        <v-row class="navbarRow">
          <v-col class="navbarColumn">
            <a class="logo" href="#"><img class="logoImg" src="../assets/images/logo/logo.png" alt=""></a>
            
            <ul class="navbarList">
              <li><a target="_blank" class="link heatmapLink" href="https://www.covid19risk.com/heatmap/">Heatmap</a></li>
              <li><a target="_blank" class="link" href="https://www.covid19risk.com/collaborate.html">Get Involved</a></li>
              <li><a target="_blank" class="link" href="https://www.covid19risk.com/collaborate.html">Donate</a></li>
              <li><a target="_blank" class="link" href="https://www.covid19risk.com/about.html">About</a></li>
              <li class="download">Download App</li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
export default {
}
</script>
