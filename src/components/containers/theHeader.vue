<template>
  <v-toolbar
    color="primary"
    dark
    app
    :clipped-left="$vuetify.breakpoint.mdAndUp"
    fixed
  >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3" @click="$router.push('/')">
      <v-toolbar-side-icon
        @click.stop="toggleDrawer()"/>
      <span>Book Management</span>
    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      prepend-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    ></v-text-field>
    <v-spacer/>

    <template v-if="!isLoggedIn">
      <v-btn
        color="success"
        @click="$router.push('/user/registration')">
        アカウントを作成
      </v-btn>

      <v-btn
        color="success"
        @click="$router.push('/user/login')">
        ログイン
      </v-btn>
    </template>

  </v-toolbar>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import authGetters from '@/store/middleware/auth/getters'
import store from '@/store/root'
import {ToggleDrawer} from '@/store/containers/navigation/boundaryAction'
import {defaultUserIconUrl} from '@/config/user/defaultUserParams'


@Component({
  computed: authGetters,
})
export default class TheHeader extends Vue {
  get defaultUserIconUrl() {
    return defaultUserIconUrl
  }

  public toggleDrawer() {
    store.commit(new ToggleDrawer())
  }
}
</script>
