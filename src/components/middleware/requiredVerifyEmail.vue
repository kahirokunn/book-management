<script lang="ts">
import First from '@/components/modules/first.vue'
import { notVerifyEmailRedirectPath } from '@/config/auth'
import router from '@/router'
import { isNeedRedirect } from '@/router/middlewares/requiredVerifyEmail'
import selector from '@/store/middleware/auth/selector'
import { CreateElement, VNode } from 'vue'
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class RequiredVerifyEmail extends Vue {
  get isReady() {
    return selector.isInitialized(this.$store.state)
  }

  @Watch('isReady', { immediate: true })
  public redirect() {
    if (isNeedRedirect(router.currentRoute.path, this.$store.state)) {
      this.$router.push(notVerifyEmailRedirectPath)
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
