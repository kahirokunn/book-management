import { Vue } from 'vue-property-decorator'
export default class LoginPage extends Vue {
    public login(email: string, password: string): Promise<void>
    public toStandby(): Promise<any>
}
