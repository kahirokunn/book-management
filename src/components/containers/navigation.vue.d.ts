import { Vue } from 'vue-property-decorator'
export default class Navigation extends Vue {
    get items(): Array<{
        icon: string;
        text: string;
        action: () => Promise<any>;
    }>;
    public fire(action: () => void): void
}
