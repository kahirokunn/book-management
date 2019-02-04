<template>
  <v-navigation-drawer
    class="black"
    dark
    fixed
    :clipped="$vuetify.breakpoint.mdAndUp"
    app
    :value="isOpen"
  >
    <v-list dense>
      <template v-for="item in items">
        <v-layout
          row
          v-if="item.heading"
          align-center
          :key="item.heading"
        >
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
          <v-flex xs6 class="text-xs-center">
            <a href="#!" class="body-2 black--text">EDIT</a>
          </v-flex>
        </v-layout>
        <v-list-group
          v-else-if="item.children"
          v-model="item.model"
          :key="item.text"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon=""
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="(child, i) in item.children"
            :key="i"
            @click="item.action && fire(item.action)"
          >
            <v-list-tile-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ child.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile v-else @click="item.action && fire(item.action)" :key="item.text">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import router from '@/router/index'
import { openDialog as openCreateBookFormDialog } from '@/store/containers/createBookForm/action'
import { closeDrawer } from '@/store/containers/navigation/action'
import selector from '@/store/containers/navigation/selector'
import { mapComputed } from '@/submodules/store'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  computed: mapComputed(selector),
})
export default class Navigation extends Vue {
  get items() {
    return [
      {
        icon: 'list_alt',
        text: '購入済み書籍一覧',
        action: () => router.push('/books'),
      },
      {
        icon: 'library_add',
        text: '本を登録する',
        action: () => this.$store.dispatch(openCreateBookFormDialog()),
      },
    ]
  }

  public fire(action: () => void) {
    this.$store.dispatch(closeDrawer())
    action()
  }
}
</script>
