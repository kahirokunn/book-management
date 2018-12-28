<template>
  <BlankLayout>
    <PageNotFoundComponent/>
  </BlankLayout>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import BlankLayout from '@/layouts/blank.vue'
import PageNotFoundComponent from '@/components/organisms/pageNotFound.vue'

@Component({
  components: {
    BlankLayout,
    PageNotFoundComponent,
  },
})
export default class PageNotFoundPage extends Vue {
}
</script>
