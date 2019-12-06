import { Vue } from 'vue-property-decorator';
export default class LoginPage extends Vue {
    login(email: string, password: string): Promise<void>;
    toStandby(): Promise<any>;
}
