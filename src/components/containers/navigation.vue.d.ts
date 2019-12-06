import { Vue } from 'vue-property-decorator';
export default class Navigation extends Vue {
    get items(): {
        icon: string;
        text: string;
        action: () => Promise<any>;
    }[];
    fire(action: () => void): void;
}
