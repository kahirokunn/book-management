<template>
  <v-toolbar
    color="primary"
    dark
    app
    :clipped-left="$vuetify.breakpoint.mdAndUp"
    fixed>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <span>Book Management</span>
    </v-toolbar-title>
    <v-spacer/>

    <v-btn
      v-if="$route.path.includes('/user/login')"
      color="primary lighten-1"
      @click="$router.push('/user/registration')">
      アカウントを作成
    </v-btn>

    <v-btn
      v-else
      color="primary lighten-1"
      @click="$router.push('/user/login')">
      ログイン
    </v-btn>

  </v-toolbar>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class UnloggedInHeader extends Vue {
}
</script>
