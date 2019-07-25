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
        <v-list-item link :key="item.text" @click="fire(item.action)">
          <v-list-item-icon v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>

    <template v-slot:append>
      <div class="pa-2" @click="logout()">
        <v-btn block>Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { openDialog as openCreateBookFormDialog } from '@/store/containers/createBookForm/action'
import { closeDrawer } from '@/store/containers/navigation/action'
import selector from '@/store/containers/navigation/selector'
import { changeRoute } from '@/store/middleware/router/action'
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
        action: () => this.$store.dispatch(changeRoute('/books')),
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

  public logout() {
    alert('実装されてません')
  }
}
</script>
