import { CreateElement, VNode } from 'vue';
import { Vue } from 'vue-property-decorator';
export default class Auth extends Vue {
    get isReady(): boolean;
    mounted(): void;
    render(h: CreateElement): VNode;
}
