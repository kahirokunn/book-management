<script lang="ts">
import {
  isNeedRedirect,
  redirectPath,
} from '@/router/middlewares/guards/unLoggedIn'
import { changeRoute } from '@/store/middleware/router/action'
import selector from '@/store/route/selector'
import { mapComputed } from '@/submodules/store'
import { CreateElement, VNode } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  computed: mapComputed(selector),
})
export default class UnLoggedIn extends Vue {
  private route!: ReturnType<typeof selector.route>

  public created() {
    if (isNeedRedirect(this.route.path, this.$store.state)) {
      this.$store.dispatch(changeRoute(redirectPath))
    }
  }

  public render(h: CreateElement): VNode {
    if (
      !isNeedRedirect(this.route.path, this.$store.state) &&
      this.$slots.default &&
      this.$slots.default.length > 0
    ) {
      return this.$slots.default[0]
    }
    return h('')
  }
}
</script>
