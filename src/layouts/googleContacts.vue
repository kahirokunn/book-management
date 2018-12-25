<template>
  <div id="app">
    <v-app id="inspire">

      <Navigation/>
      <TheHeader />

      <v-content>
        <slot>
          <router-view/>
        </slot>
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import Navigation from '@/components/containers/navigation.vue'
import TheHeader from '@/components/containers/theHeader.vue'

@Component({
  components: {
    Navigation,
    TheHeader,
  },
})
export default class GoogleContacts extends Vue {
}
</script>
