import { IUser } from '@/boundary/userApplicationService/InOutType'
import { Vue } from 'vue-property-decorator'
export default class UserProfileForm extends Vue {
    public $refs: {
        form: VForm;
    }
    public updateProfile: (params: IUser) => void
    public user: IUser
    public valid: boolean
    public iconFilepath: string
    public displayName: string
    public firstName: string
    public familyName: string
    public firstNameKana: string
    public familyNameKana: string
    public birthYear: number
    public birthMonth: number
    public birthDay: number
    public hireYear: number
    public hireMonth: number
    public hireDay: number
    public gender: Gender
    get years(): number[];
    get months(): number[];
    get days(): number[];
    get genderList(): string[];
    get firstNameRules(): Array<((v: string) => true | 'First name is required') | ((v: string) => true | 'Symbol is included in first name')>;
    get familyNameRules(): Array<((v: string) => true | 'Family name is required') | ((v: string) => true | 'Symbol is included in family name')>;
    get firstNameKanaRules(): Array<((v: string) => true | 'First name kana is required') | ((v: string) => true | 'Included not kana characters')>;
    get familyNameKanaRules(): Array<((v: string) => true | 'Family name kana is required') | ((v: string) => true | 'Included not kana characters')>;
    get birthYearRules(): Array<((v: string) => true | 'Birth year is required') | ((v: string) => true | 'Birth year is invalid')>;
    get birthMonthRules(): Array<((v: string) => true | 'Birth month is required') | ((v: string) => true | 'Birth month is invalid')>;
    get birthDayRules(): Array<((v: string) => true | 'Birth day is required') | ((v: string) => true | 'Birth day is invalid')>;
    get hireYearRules(): Array<((v: string) => true | 'Hire year is required') | ((v: string) => true | 'Hire year is invalid')>;
    get hireMonthRules(): Array<((v: string) => true | 'Hire month is required') | ((v: string) => true | 'Hire month is invalid')>;
    get hireDayRules(): Array<((v: string) => true | 'Hire day is required') | ((v: string) => true | 'Hire day is invalid')>;
    get displayNameRules(): Array<((v: string) => true | 'Display name is required') | ((v: string) => true | 'Display name is invalid')>;
    get birthday(): Date;
    get hireDate(): Date;
    public created(): void
    public submit(): void
    public cancel(): void
}
