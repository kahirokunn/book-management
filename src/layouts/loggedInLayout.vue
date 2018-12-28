<template>
  <div id="app" key="loggedInLayout">
    <v-app id="inspire">

      <template v-if="isLoggedIn">
        <Navigation />
        <LoggedInHeader />
        <ChangeUserProfileForm />

        <v-content>
          <slot />
        </v-content>
      </template>

    </v-app>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import Navigation from '@/components/containers/navigation.vue'
import LoggedInHeader from '@/components/containers/loggedInHeader.vue'
import ChangeUserProfileForm from '@/components/containers/changeUserProfileForm.vue'
import authGetters from '@/store/middleware/auth/getters'

@Component({
  components: {
    Navigation,
    LoggedInHeader,
    ChangeUserProfileForm,
  },
  computed: authGetters,
})
export default class LoggedInLayout extends Vue {
}
</script>
