<script lang="ts">
import {CreateElement, VNode} from 'vue'
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class First extends Vue {
  public render(h: CreateElement): VNode {
    if (this.$slots.default && this.$slots.default.length > 0) {
      // slotは1つだけ
      return this.$slots.default[0]
    }
    return h('')
  }
}
</script>
