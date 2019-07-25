<template>
  <v-app key="authLayout">
    <UnloggedInHeader />

    <v-content>
      <slot />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import UnloggedInHeader from '@/components/containers/unloggedInHeader.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    UnloggedInHeader,
  },
})
export default class AuthLayout extends Vue {
}
</script>
