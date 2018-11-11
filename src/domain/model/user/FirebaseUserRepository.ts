import {injectable} from 'inversify'
import IUserRepository from '@/domain/model/user/IUserRepository'
import {IUser} from '@/boundary/userApplicationService/InOutType'
import User from '@/models/user'


@injectable()
export default class FirebaseUserRepository implements IUserRepository {
  public async save(params: IUser): Promise<IUser> {
    const user = new User(params.id, params)
    await user.save()
    return user
  }

  public async findById(id: Identifier): Promise<IUser> {
    const user = await User.get(id)
    if (user === undefined) {
      throw Error('userが取れませんでした')
    }
    return user
  }
}
