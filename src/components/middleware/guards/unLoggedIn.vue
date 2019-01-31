<script lang="ts">
import router from '@/router'
import {
  isNeedRedirect,
  redirectPath,
} from '@/router/middlewares/guards/unLoggedIn'
import { CreateElement, VNode } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class UnLoggedIn extends Vue {
  public beforeCreate() {
    if (isNeedRedirect(router.currentRoute.path, this.$store.state)) {
      router.push(redirectPath)
    }
  }

  public render(h: CreateElement): VNode {
    if (
      !isNeedRedirect(router.currentRoute.path, this.$store.state) &&
      this.$slots.default &&
      this.$slots.default.length > 0
    ) {
      return this.$slots.default[0]
    }
    return h('')
  }
}
</script>
