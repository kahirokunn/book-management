<script lang="ts">
import First from '@/components/modules/first.vue'
import { notVerifyEmailRedirectPath } from '@/config/auth'
import { isNeedRedirect } from '@/router/middlewares/requiredVerifyEmail'
import selector from '@/store/middleware/auth/selector'
import { changeRoute } from '@/store/middleware/router/action'
import { CreateElement, VNode } from 'vue'
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class RequiredVerifyEmail extends Vue {
  get isReady() {
    return selector.isInitialized(this.$store.state)
  }

  @Watch('isReady', { immediate: true })
  public redirect() {
    if (isNeedRedirect(this.$route.path, this.$store.state)) {
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
