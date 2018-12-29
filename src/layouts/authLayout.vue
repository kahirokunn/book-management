<template>
  <v-app key="authLayout">

    <UnloggedInHeader />

    <v-content>
      <slot />
    </v-content>
  </v-app>
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
