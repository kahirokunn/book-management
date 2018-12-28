<template>
  <div id="app" key="authLayout">
    <v-app id="inspire">

      <UnloggedInHeader />

      <v-content>
        <slot />
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import UnloggedInHeader from '@/components/containers/unloggedInHeader.vue'

@Component({
  components: {
    UnloggedInHeader,
  },
})
export default class AuthLayout extends Vue {
}
</script>
