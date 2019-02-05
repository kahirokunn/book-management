<template>
  <v-btn
    fab
    bottom
    right
    color="pink"
    dark
    fixed
    @click.stop="openDialog()"
  >
    <v-icon>add</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { openDialog as openCreateBookFormDialog } from '@/store/containers/createBookForm/action'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CreateBookButton extends Vue {
  public openDialog() {
    this.$store.dispatch(openCreateBookFormDialog())
  }
}
</script>
