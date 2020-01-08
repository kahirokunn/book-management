import { Vue } from 'vue-property-decorator'
export default class LoginPage extends Vue {
    public $refs: {
        form: VForm;
    }
    public login: (email: string, password: string) => Promise<void>
    public valid: boolean
    public email: string
    public password: string
    get emailRules(): Array<((v: string) => true | 'E-mail is required') | ((v: string) => true | 'E-mail must be valid')>;
    get passwordRules(): Array<(v: string) => true | 'Password should be at least 6 characters'>;
    public submit(): Promise<void>
}
