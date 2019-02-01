import { IUser } from '@/boundary/userApplicationService/InOutType'
import { User } from '@/models/user'
import { InputSubscribe, IUserStream } from '@/query/user/IUserStream'
import firebase from 'firebase'
import { injectable } from 'inversify'

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
export class UserStream implements IUserStream {
  public subscribe({ subscriber, payload, onError }: InputSubscribe): unsubscribe {
    return User
      .getReference()
      .doc(payload.userId)
      .onSnapshot((snapshot: firebase.firestore.DocumentSnapshot) => {
        const data = snapshot.data()
        if (!data) {
          return
        }
        subscriber(userMapper(payload.userId, data as any))
      }, onError)
  }
}
