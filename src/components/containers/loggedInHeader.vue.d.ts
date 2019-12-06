import { Vue } from 'vue-property-decorator';
export default class LoggedInHeader extends Vue {
    get defaultUserIconUrl(): string;
    toHome(): Promise<any>;
    openDialog(): Promise<any>;
    toggleDrawer(): Promise<any>;
}
