import { CreateElement, VNode } from 'vue'
import { Vue } from 'vue-property-decorator'
export default class Auth extends Vue {
    get isReady(): boolean;
    public mounted(): void
    public render(h: CreateElement): VNode
}
