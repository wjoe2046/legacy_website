<template>
  <v-app id="covid19app">
    <v-app-bar id="navBar" fixed app>
    <!-- this is the header that persists across pages -->
      <v-container class="navbarContainer">
    <!-- coding first without vue approach first so not great w responsiveness yet - Jesse -->
        <v-row class="navbarRow">
          <v-column class="navbarColumn">
            <a class="logo" href="#"><img class="logoImg" src="../assets/images/logo/logo.png" alt=""></a>
            
            <ul class="navbarList">
              <li>Get Involved</li>
              <li>Donate</li>
              <li>About Us</li>
              <li class="download">Download App</li>
            </ul>
          </v-column>
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
