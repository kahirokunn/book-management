<script lang="ts">
import {CreateElement, VNode} from 'vue'
import {Vue, Component, Watch} from 'vue-property-decorator'
import getters from '@/store/middleware/auth/getters'
import {notVerifyEmailRedirectPath} from '@/config/auth'
import {isNeedRedirect} from '@/router/middlewares/requiredVerifyEmail'
import First from '@/components/modules/first.vue'
import router from '@/router'

@Component
export default class RequiredVerifyEmail extends Vue {
  get isReady() {
    return getters.isInitialized()
  }

  @Watch('isReady', { immediate: true })
  public redirect() {
    if (isNeedRedirect(router.currentRoute.path)) {
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
