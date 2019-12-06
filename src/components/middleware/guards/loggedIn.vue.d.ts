import { CreateElement, VNode } from 'vue';
import { Vue } from 'vue-property-decorator';
export default class LoggedIn extends Vue {
    private route;
    created(): void;
    render(h: CreateElement): VNode;
}
