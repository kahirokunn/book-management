<script lang="ts">
import {CreateElement, VNode} from 'vue'
import {Vue, Component} from 'vue-property-decorator'
import router from '@/router'
import {
  redirectPath,
  isNeedRedirect,
} from '@/router/middlewares/guards/loggedIn'

@Component
export default class LoggedIn extends Vue {
  public beforeCreate() {
    if (isNeedRedirect(router.currentRoute.path)) {
      router.push(redirectPath)
    }
  }

  public render(h: CreateElement): VNode {
    if (
      !isNeedRedirect(router.currentRoute.path) &&
      this.$slots.default &&
      this.$slots.default.length > 0
    ) {
      return this.$slots.default[0]
    }
    return h('')
  }
}
</script>
