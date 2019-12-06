import { BookType, Evaluation, Owner, PurchasedLocation } from '@/boundary/bookApplicationService/InOutType'
import { IRegistrationParams } from '@/boundary/bookApplicationService/InOutType'
import { IUser } from '@/boundary/userApplicationService/InOutType'
import { Vue } from 'vue-property-decorator'
export default class CreateBookForm extends Vue {
    public $refs: {
        form: VForm;
    }
    public createBook: (params: IRegistrationParams) => void
    public user: IUser
    public valid: boolean
    public title: string
    public purchasedLocation: PurchasedLocation
    public description: string
    public type: BookType
    public price: number
    public owner: Owner
    public purchasedUrl: string
    public downloadUrl: string
    public coverImageFilePath: string | null
    public evaluation: Evaluation | null
    public receiptImageFilePath: string | null
    public purchasedYear: number
    public purchasedMonth: number
    public purchasedDay: number
    get rows(): number;
    get titleRules(): Array<(v: string) => string | true>;
    get priceRules(): Array<(v: string) => string | true>;
    get urlRules(): Array<(v: string) => true | 'Url is invalid'>;
    get years(): number[];
    get months(): number[];
    get days(): number[];
    get purchasedLocationList(): PurchasedLocation[];
    get bookTypeList(): BookType[];
    get ownerList(): Owner[];
    get purchasedDatetime(): Date;
    public submit(): void
    public cancel(): void
}
