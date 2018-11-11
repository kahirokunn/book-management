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
import getters from '@/store/middleware/pageNotFound/getters'
import First from '@/components/modules/first.vue'
import PageNotFoundComponent from '@/components/organisms/pageNotFound.vue'

@Component({
  components: {
    BlankLayout,
    PageNotFoundComponent,
    First,
  },
  computed: getters,
})
export default class PageNotFound extends Vue {
}
</script>
