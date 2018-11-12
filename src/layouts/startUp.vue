<template>
  <div id="app">
    <v-app id="inspire">
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
          v-if="'/user/login'.includes($route.path)"
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
      <v-content>
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class StartUp extends Vue {
}
</script>
