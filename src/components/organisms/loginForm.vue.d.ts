import { Vue } from 'vue-property-decorator';
export default class LoginPage extends Vue {
    $refs: {
        form: VForm;
    };
    login: (email: string, password: string) => Promise<void>;
    valid: boolean;
    email: string;
    password: string;
    get emailRules(): (((v: string) => true | "E-mail is required") | ((v: string) => true | "E-mail must be valid"))[];
    get passwordRules(): ((v: string) => true | "Password should be at least 6 characters")[];
    submit(): Promise<void>;
}
