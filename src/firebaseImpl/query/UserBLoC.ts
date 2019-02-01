import { IUser } from '@/boundary/userApplicationService/InOutType'
import { User } from '@/models/user'
import { IUserBLoC } from '@/query/user/IUserBLoC'
import { injectable } from 'inversify'
import { docData } from 'rxfire/firestore'
import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators'

function userMapper(userId: Identifier, user: any): IUser {
  return {
    ...user,
    id: userId,
    birthday: user.birthday.toDate(),
    hireDate: user.hireDate.toDate(),
    createdAt: user.createdAt.toDate(),
    updatedAt: user.updatedAt && user.updatedAt.toDate() || null,
  }
}

@injectable()
export class UserBLoC implements IUserBLoC {
  private observables: {[id: string]: Observable<IUser>}  = {}

  public execute(id: Identifier) {
    if (id in this.observables) {
      return this.observables[id]
    }
    const docRef = User.getReference().doc(id)

    this.observables[id] = docData(docRef)
      .pipe(filter((data) => data && Object.keys(data).length > 0))
      .pipe(map((data) => userMapper(id, data)))
    return this.observables[id]
  }
}
