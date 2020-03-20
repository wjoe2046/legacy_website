<template>
  <v-app id="covid19app">
    <v-app-bar id="navBar" fixed app>
    <!-- this is the header that persists across pages -->
      <v-container class="navbarContainer">
    <!-- if by using Vuetify we can improve the below somehow to be more responsive, etc. please let me know, I'm new to Vuetify and eager to learn! - Jesse -->
        <v-row class="navbarRow">
          <v-col class="navbarColumn">
            <a class="logo" href="#"><img class="logoImg" src="../assets/images/logo/logo.png" alt=""></a>
            
            <v-btn color="#BF3F4A" class="white--text">
              Download App
            </v-btn>


            <!-- @Isaiah this is where menu code begins.  The commented out <ul> a bit further down is what I'm attemtping to replace with this dropdown menu so at some point we need to get the links to other pages in the menu items-->
            <v-menu offset-y>
              <v-btn text slot="activator" color="gray">
                <v-icon left>mdi-chevron-down</v-icon>
                <span>Menu</span>
              </v-btn>
              <v-list>
                <v-list-item>
                  hey
                </v-list-item>



                <!-- <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click=""
                >
                  <v-list-item-title>
                    hey
                  </v-list-item-title>

                </v-list-item> -->
              </v-list>

            </v-menu>


            <!-- <ul class="navbarList">
              <li><a target="_blank" class="link heatmapLink text-no-wrap" href="https://www.covid19risk.com/heatmap/">Heatmap</a></li>
              <li><a target="_blank" class="link text-no-wrap" href="https://www.covid19risk.com/collaborate.html">Get Involved</a></li>
              <li><a target="_blank" class="link text-no-wrap" href="https://www.covid19risk.com/collaborate.html">Donate</a></li>
              <li><a target="_blank" class="link text-no-wrap" href="https://www.covid19risk.com/about.html">About</a></li>
              <li class="download text-no-wrap">Download App</li>
            </ul> -->
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
      
     

      <div class="footerList">
       <a target="_blank"  class="text-no-wrap" href="https://www.covid19risk.com/heatmap/">Heatmap</a>
        <a target="_blank" class="text-no-wrap" href="https://www.covid19risk.com/collaborate.html">Get Involved</a>
        <a target="_blank" class="text-no-wrap" href="https://www.covid19risk.com/collaborate.html">Donate</a>
        <a target="_blank" class="text-no-wrap" href="https://www.covid19risk.com/about.html">About</a>
      </div>
  
        <v-divider></v-divider>
  
        <v-card-text class="gray--text">
          All rights reserved - COVID Watch
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    }
  }
}
</script>
