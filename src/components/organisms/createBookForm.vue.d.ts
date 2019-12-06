import { BookType, Evaluation, Owner, PurchasedLocation } from '@/boundary/bookApplicationService/InOutType';
import { IRegistrationParams } from '@/boundary/bookApplicationService/InOutType';
import { IUser } from '@/boundary/userApplicationService/InOutType';
import { Vue } from 'vue-property-decorator';
export default class CreateBookForm extends Vue {
    $refs: {
        form: VForm;
    };
    createBook: (params: IRegistrationParams) => void;
    user: IUser;
    valid: boolean;
    title: string;
    purchasedLocation: PurchasedLocation;
    description: string;
    type: BookType;
    price: number;
    owner: Owner;
    purchasedUrl: string;
    downloadUrl: string;
    coverImageFilePath: string | null;
    evaluation: Evaluation | null;
    receiptImageFilePath: string | null;
    purchasedYear: number;
    purchasedMonth: number;
    purchasedDay: number;
    get rows(): number;
    get titleRules(): ((v: string) => string | true)[];
    get priceRules(): ((v: string) => string | true)[];
    get urlRules(): ((v: string) => true | "Url is invalid")[];
    get years(): number[];
    get months(): number[];
    get days(): number[];
    get purchasedLocationList(): PurchasedLocation[];
    get bookTypeList(): BookType[];
    get ownerList(): Owner[];
    get purchasedDatetime(): Date;
    submit(): void;
    cancel(): void;
}
