<template>
  <v-app key="loggedInLayout" id="scroll-target" dark>
    <template v-if="isLoggedIn">
      <Navigation />
      <LoggedInHeader />
      <ChangeUserProfileForm />
      <CreateBookForm />

      <v-content>
        <slot />
      </v-content>
    </template>
  </v-app>
</template>

<script lang="ts">
import ChangeUserProfileForm from '@/components/containers/changeUserProfileForm.vue'
import CreateBookForm from '@/components/containers/createBookForm.vue'
import LoggedInHeader from '@/components/containers/loggedInHeader.vue'
import Navigation from '@/components/containers/navigation.vue'
import authSelector from '@/store/middleware/auth/selector'
import { mapComputed } from '@/submodules/store'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Navigation,
    LoggedInHeader,
    ChangeUserProfileForm,
    CreateBookForm,
  },
  computed: mapComputed(authSelector),
})
export default class LoggedInLayout extends Vue {
}
</script>

<style lang="scss" scoped>
#scroll-target {
  height: 100vh;
  overflow: auto;
}
</style>
