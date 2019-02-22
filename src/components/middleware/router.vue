<template>
  <First>
    <slot />
  </First>
</template>


<script lang="ts">
import First from '@/components/modules/first.vue'
import selector from '@/store/middleware/router/selector'
import { mapComputed } from '@/submodules/store'
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {
    First,
  },
  computed: mapComputed(selector),
})
export default class Router extends Vue {
  public location!: ReturnType<typeof selector.location>

  @Watch('location')
  public onChangeLocation() {
    if (this.location) {
      this.$router.push(this.location)
    }
  }
}
</script>
