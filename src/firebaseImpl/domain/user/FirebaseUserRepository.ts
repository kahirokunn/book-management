import { IUser } from '@/boundary/userApplicationService/InOutType'
import IUserRepository from '@/domain/model/user/IUserRepository'
import User from '@/models/user'
import firebase from 'firebase/app'
import { injectable } from 'inversify'

function userSetter(params: IUser, user: User) {
  user.displayName = params.displayName
  user.iconFilepath = params.iconFilepath
  user.emailAddress = params.emailAddress
  user.firstName = params.firstName
  user.familyName = params.familyName
  user.firstNameKana = params.firstNameKana
  user.familyNameKana = params.familyNameKana
  user.birthday = firebase.firestore.Timestamp.fromDate(params.birthday)
  user.hireDate = firebase.firestore.Timestamp.fromDate(params.hireDate)
  user.gender = params.gender
}

function userMapper(user: User): IUser {
  return {
    ...user,
    birthday: user.birthday.toDate(),
    hireDate: user.hireDate.toDate(),
  }
}

@injectable()
export default class FirebaseUserRepository implements IUserRepository {
  public async create(params: IUser): Promise<IUser> {
    const user = new User(params.id)
    userSetter(params, user)
    await user.save()
    return params
  }

  public async update(params: IUser): Promise<IUser> {
    const user = await User.get(params.id)
    if (!user) {
      throw Error('userが取れませんでした')
    }
    userSetter(params, user)
    await user.update()
    return params
  }

  public async findById(id: Identifier): Promise<IUser> {
    const user = await User.get(id)
    if (!user) {
      throw Error('userが取れませんでした')
    }
    return userMapper(user)
  }
}
