import { CreateElement, VNode } from 'vue'
import { Vue } from 'vue-property-decorator'
export default class LoggedIn extends Vue {
    private route
    public created(): void
    public render(h: CreateElement): VNode
}
