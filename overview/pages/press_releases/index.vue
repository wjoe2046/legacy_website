<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="10">
          
        <h1>Press Releases</h1>
        <br>
        <template
            v-for="(press, i) in pressList"
        >
            <div :key="i" class="mb-4">
                <div class="font-italic font-weight-light">{{press.date}}</div>
                <nuxt-link class="title" :to="press.link">{{press.title}}</nuxt-link>
                <p><strong>Contact: </strong>Rhys Fenwick, Commmunications, <a href="mailto: contact@covid-watch.org">contact@covid-watch.org</a> </p>
            </div>
        </template>

      </v-col></v-row
    ></v-container
  >
</template>

<script>
import SubscribeForm from '../../components/SubscribeForm'

export default {
    components: {
        SubscribeForm
    },
    data: () => ({
        pressList: [
            {
                "date": "April 10, 2020",
                "title": "Covid Watch Celebrates Apple and Google’s COVID-19 Contact Tracing Announcement ",
                "link": "/press_releases/google_apple_press_release",
            }
        ]
    })
}
</script>
