import { IRegistrationParams } from '@/boundary/bookApplicationService/InOutType'
import { Vue } from 'vue-property-decorator'
export default class CreateBookFormContainer extends Vue {
    public createBook(params: IRegistrationParams): Promise<any>
    public toStandby(): Promise<any>
    public closeDialog(): Promise<any>
}
