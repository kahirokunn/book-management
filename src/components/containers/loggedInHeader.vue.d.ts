import { Vue } from 'vue-property-decorator'
export default class LoggedInHeader extends Vue {
    get defaultUserIconUrl(): string;
    public toHome(): Promise<any>
    public openDialog(): Promise<any>
    public toggleDrawer(): Promise<any>
}
