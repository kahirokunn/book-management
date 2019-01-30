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

    <v-avatar size="36px" @click="openDialog()" class="clickable">
      <img
        width="36"
        height="36"
        :src="user.iconFilepath"
        class="user-icon-img">
    </v-avatar>

  </v-toolbar>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import authSelector from '@/store/middleware/auth/selector'
import {toggleDrawer} from '@/store/containers/navigation/action'
import {defaultUserIconUrl} from '@/config/user/defaultUserParams'
import {openDialog} from '@/store/containers/changeUserProfileForm/action'
import { mapComputed } from '@/submodules/store'

@Component({
  computed: mapComputed(authSelector),
})
export default class LoggedInHeader extends Vue {
  get defaultUserIconUrl() {
    return defaultUserIconUrl
  }

  public openDialog() {
    return this.$store.dispatch(openDialog())
  }

  public toggleDrawer() {
    return this.$store.dispatch(toggleDrawer())
  }
}
</script>

<style lang="scss" scoped>
.clickable {
  cursor: pointer;
}
</style>
