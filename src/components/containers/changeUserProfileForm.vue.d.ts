import { IUser } from '@/boundary/userApplicationService/InOutType';
import { Vue } from 'vue-property-decorator';
export default class ChangeUserProfileFormContainer extends Vue {
    updateProfile(params: IUser): Promise<any>;
    toStandby(): Promise<any>;
    closeDialog(): Promise<any>;
}
