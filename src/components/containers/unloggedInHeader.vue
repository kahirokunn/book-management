<template>
  <v-app-bar color="primary" dark :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <span>Book Management</span>
    </v-toolbar-title>
    <v-spacer />

    <v-btn
      v-if="$route.path.includes('/user/login')"
      color="primary lighten-1"
      @click="toRegistrationPage()"
    >アカウントを作成</v-btn>

    <v-btn v-else color="primary lighten-1" @click="toLoginPage()">ログイン</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { changeRoute } from '@/store/middleware/router/action'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class UnloggedInHeader extends Vue {
  public toLoginPage() {
    this.$store.dispatch(changeRoute('/user/login'))
  }

  public toRegistrationPage() {
    this.$store.dispatch(changeRoute('/user/registration'))
  }
}
</script>
