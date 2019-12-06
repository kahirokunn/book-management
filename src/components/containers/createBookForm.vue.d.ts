import { IRegistrationParams } from '@/boundary/bookApplicationService/InOutType';
import { Vue } from 'vue-property-decorator';
export default class CreateBookFormContainer extends Vue {
    createBook(params: IRegistrationParams): Promise<any>;
    toStandby(): Promise<any>;
    closeDialog(): Promise<any>;
}
