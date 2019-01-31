<template>
  <BlankLayout>
    <PageNotFoundComponent/>
  </BlankLayout>
</template>

<script lang="ts">
import PageNotFoundComponent from '@/components/organisms/pageNotFound.vue'
import BlankLayout from '@/layouts/blank.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    BlankLayout,
    PageNotFoundComponent,
  },
})
export default class PageNotFoundPage extends Vue {
}
</script>
