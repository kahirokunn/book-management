import { IUser } from '@/boundary/userApplicationService/InOutType'
import { User } from '@/models/user'
import { IUserObservableRepository } from '@/query/observableRepository/user/IUserObservableRepository'
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
export class UserObservableRepository implements IUserObservableRepository {
  public getUser(id: Identifier): Observable<IUser> {
    const docRef = User.getReference().doc(id)
    return docData(docRef)
      .pipe(filter((data) => data && Object.keys(data).length > 0))
      .pipe(map((data) => userMapper(id, data)))
  }
}
