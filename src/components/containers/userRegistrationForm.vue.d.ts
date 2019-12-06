import { IRegistrationParams } from '@/boundary/authApplicationService/InOutType';
import { Vue } from 'vue-property-decorator';
export default class UserRegistrationFormContainer extends Vue {
    userRegistration(params: IRegistrationParams): Promise<any>;
    toStandby(): Promise<any>;
}
