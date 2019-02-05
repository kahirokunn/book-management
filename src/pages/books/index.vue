<template>
  <LoggedInLayout>
    <BookList />
    <CreateBookButton />
  </LoggedInLayout>
</template>

<script lang="ts">
import BookList from '@/components/containers/bookList.vue'
import CreateBookButton from '@/components/containers/createBookButton.vue'
import LoggedInLayout from '@/layouts/loggedInLayout.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    LoggedInLayout,
    BookList,
    CreateBookButton,
  },
})
export default class BooksPage extends Vue {
}
</script>
