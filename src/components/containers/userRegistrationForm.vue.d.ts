import { IRegistrationParams } from '@/boundary/authApplicationService/InOutType'
import { Vue } from 'vue-property-decorator'
export default class UserRegistrationFormContainer extends Vue {
    public userRegistration(params: IRegistrationParams): Promise<any>
    public toStandby(): Promise<any>
}
