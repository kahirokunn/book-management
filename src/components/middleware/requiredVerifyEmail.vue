<script lang="ts">
import First from '@/components/modules/first.vue'
import { notVerifyEmailRedirectPath } from '@/config/auth'
import { isNeedRedirect } from '@/router/middlewares/requiredVerifyEmail'
import authSelector from '@/store/middleware/auth/selector'
import { changeRoute } from '@/store/middleware/router/action'
import selector from '@/store/route/selector'
import { mapComputed } from '@/submodules/store'
import { CreateElement, VNode } from 'vue'
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  computed: mapComputed(selector),
})
export default class RequiredVerifyEmail extends Vue {
  private route!: ReturnType<typeof selector.route>

  get isReady() {
    return authSelector.isInitialized(this.$store.state)
  }

  @Watch('isReady', { immediate: true })
  public redirect() {
    if (isNeedRedirect(this.route.path, this.$store.state)) {
      this.$store.dispatch(changeRoute(notVerifyEmailRedirectPath))
    }
  }

  public render(h: CreateElement): VNode {
    if (this.isReady) {
      return h('transition', [
        h(First, this.$slots.default),
      ])
    }

    return h('')
  }
}
</script>
