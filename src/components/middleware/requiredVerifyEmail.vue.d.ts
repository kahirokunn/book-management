import { CreateElement, VNode } from 'vue'
import { Vue } from 'vue-property-decorator'
export default class RequiredVerifyEmail extends Vue {
    private route
    get isReady(): boolean;
    public redirect(): void
    public render(h: CreateElement): VNode
}
