<template>
  <v-container grey darken-3 grid-list-xl>
    <BookList :books="books" />
  </v-container>
</template>

<script lang="ts">
import BookList from '@/components/organisms/bookList.vue'
import { depose, initialize, seeMore } from '@/store/containers/bookList/action'
import selector from '@/store/containers/bookList/selector'
import { mapComputed } from '@/submodules/store'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  computed: mapComputed(selector),
  components: {
    BookList,
  },
})
export default class BookListContainer extends Vue {
  public mounted() {
    this.$store.dispatch(initialize())
  }

  public seeMore() {
    this.$store.dispatch(seeMore())
  }

  public destroyed() {
    this.$store.dispatch(depose())
  }
}
</script>
