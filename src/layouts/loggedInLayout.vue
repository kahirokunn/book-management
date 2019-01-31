<template>
  <v-app key="loggedInLayout">

    <template v-if="isLoggedIn">
      <Navigation />
      <LoggedInHeader />
      <ChangeUserProfileForm />

      <v-content>
        <slot />
      </v-content>
    </template>

  </v-app>
</template>

<script lang="ts">
import ChangeUserProfileForm from '@/components/containers/changeUserProfileForm.vue'
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
  },
  computed: mapComputed(authSelector),
})
export default class LoggedInLayout extends Vue {
}
</script>
