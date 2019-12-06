import { Vue } from 'vue-property-decorator'
export interface IRegistrationParamsParams {
    displayName: string
    iconFilepath: string
    emailAddress: string
    password: string
    firstName: string
    familyName: string
    firstNameKana: string
    familyNameKana: string
    birthday: Date
    hireDate: Date
    gender: Gender
}
export default class UserRegistrationForm extends Vue {
    public $refs: {
        form: VForm;
    }
    public registration: (params: IRegistrationParamsParams) => Promise<void>
    public valid: boolean
    public isSending: boolean
    public schoolDialog: boolean
    public medicalSubjectDialog: boolean
    public firstClinicalTrainingDialog: boolean
    public membershipAgreementDialog: boolean
    public privacyProtectionDialog: boolean
    public mailMagazineDialog: boolean
    public email: string
    public password: string
    public displayName: string
    public firstName: string
    public familyName: string
    public firstNameKana: string
    public familyNameKana: string
    public birthYear: string
    public birthMonth: string
    public birthDay: string
    public hireYear: string
    public hireMonth: string
    public hireDay: string
    public gender: Gender
    public school: string
    public medicalSubject: string
    public firstClinicalTraining: string
    public isAgreeMembershipAgreement: boolean
    public isAggreePrivacyProtection: boolean
    public isSubscribeMailMagazine: boolean
    get years(): number[];
    get months(): number[];
    get days(): number[];
    get genderList(): string[];
    get prefectures(): string[];
    get membershipAgreementText(): string;
    get emailRules(): Array<((v: string) => true | 'E-mail is required') | ((v: string) => true | 'E-mail must be valid')>;
    get passwordRules(): Array<(v: string) => true | 'Password should be at least 6 characters'>;
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
    get genderRules(): Array<(v: string) => true | 'Gender is invalid'>;
    get prefectureRules(): Array<(v: string) => true | 'Prefecture is invalid'>;
    get displayNameRules(): Array<((v: string) => true | 'Display name is required') | ((v: string) => true | 'Display name is invalid')>;
    get birthday(): Date;
    get hireDate(): Date;
    public closeSchoolDialog(): void
    public closefirstClinicalTrainingDialog(): void
    public closeMedicalSubjectDialog(): void
    public aggreeMembershipAgreement(): void
    public aggreePrivacyProtection(): void
    public subscribeMailMagazine(): void
    public submit(): void
}
