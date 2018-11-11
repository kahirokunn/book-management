<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class First extends Vue {
  public render(h: any) {
    if (this.$slots.default && this.$slots.default.length > 0) {
      // slotは1つだけ
      return h('transition', [this.$slots.default[0]])
    }
    return h('')
  }
}
</script>
