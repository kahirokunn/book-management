import { IUser } from '@/boundary/userApplicationService/InOutType'
import { Vue } from 'vue-property-decorator'
export default class ChangeUserProfileFormContainer extends Vue {
    public updateProfile(params: IUser): Promise<any>
    public toStandby(): Promise<any>
    public closeDialog(): Promise<any>
}
