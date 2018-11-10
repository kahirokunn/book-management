import * as Pring from 'pring';
import {injectable} from 'inversify';
import {auth} from '@/firebase/index';
import IUserRepository, {ISaveParams, ICreateParams} from '@/domain/model/user/IUserRepository';
import {IUser} from '@/boundary/userApplicationService/IUser';

class User extends Pring.Base implements IUser {
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

@injectable()
export default class FirebaseUserRepository implements IUserRepository {
  public async create(params: ICreateParams): Promise<User> {
    const response = await auth().createUserWithEmailAndPassword(params.emailAddress, params.password);
    if (!response.user) {
      throw Error('userがなぜか取れませんでした');
    }
    return this.save({
      ...params,
      id: response.user.uid,
    });
  }

  public async save(params: ISaveParams): Promise<User> {
    const user = new User(params.id, params);
    await user.save();
    return user;
  }

  public async findById(id: Identifier): Promise<User> {
    const user = await User.get(id);
    if (user === undefined) {
      throw Error('userが取れませんでした');
    }
    return user;
  }
}
