<template>
  <BlankLayout v-if="isPageNotFound">
    <PageNotFoundComponent/>
  </BlankLayout>

  <First v-else>
    <slot />
  </First>
</template>

<script lang="ts">
import First from '@/components/modules/first.vue'
import PageNotFoundComponent from '@/components/organisms/pageNotFound.vue'
import BlankLayout from '@/layouts/blank.vue'
import selector from '@/store/middleware/pageNotFound/selector'
import { mapComputed } from '@/submodules/store'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    BlankLayout,
    PageNotFoundComponent,
    First,
  },
  computed: mapComputed(selector),
})
export default class PageNotFound extends Vue {
}
</script>
