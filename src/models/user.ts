import * as Pring from 'pring';
import {IUser} from '@/boundary/userApplicationService/InOutType';

export default class User extends Pring.Base implements IUser {
  @Pring.property public displayName!: string;
  @Pring.property public iconFilepath!: string;
  @Pring.property public emailAddress!: string;
  @Pring.property public firstName!: string;
  @Pring.property public familyName!: string;
  @Pring.property public firstNameKana!: string;
  @Pring.property public familyNameKana!: string;
  @Pring.property public birthday!: Date;
  @Pring.property public hireDate!: Date;
  @Pring.property public gender!: Gender;
}
