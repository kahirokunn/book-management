import {injectable} from 'inversify';
import {auth} from '@/firebase/index';
import User from './User';
import IUserRepository, {ISaveParams, ICreateParams} from '@/domain/application/userApplicationService/IUserRepository';

@injectable()
export default class UserRepository implements IUserRepository {
  public async create(params: ICreateParams): Promise<User> {
    const response = await auth().createUserWithEmailAndPassword(params.emailAddress, params.password);
    if (!response.user) {
      throw Error('userがなぜか取れませんでした');
    }
    return this.save(params);
  }

  public async save(params: ISaveParams): Promise<User> {
    const user = new User();
    Object.assign(user, params);
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
