<template>
  <LoggedInLayout>
    <v-container fluid fill-height grey darken-3>
      <BookList />
    </v-container>
  </LoggedInLayout>
</template>

<script lang="ts">
import BookList from '@/components/containers/bookList.vue'
import LoggedInLayout from '@/layouts/loggedInLayout.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    LoggedInLayout,
    BookList,
  },
})
export default class Books extends Vue {
}
</script>
