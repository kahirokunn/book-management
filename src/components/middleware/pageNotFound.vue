<template>
  <BlankLayout v-if="isPageNotFound">
    <PageNotFoundComponent/>
  </BlankLayout>

  <First v-else>
    <slot>
      <BlankLayout>
        <PageNotFoundComponent/>
      </BlankLayout>
    </slot>
  </First>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import BlankLayout from '@/layouts/blank.vue'
import selector from '@/store/middleware/pageNotFound/selector'
import First from '@/components/modules/first.vue'
import PageNotFoundComponent from '@/components/organisms/pageNotFound.vue'
import { mapComputed } from '@/submodules/store'

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
