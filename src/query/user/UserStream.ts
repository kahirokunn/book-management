import firebase from 'firebase'
import {IUser} from '@/boundary/userApplicationService/InOutType'
import User from '@/models/user'

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

type subscriber = (user: IUser) => void
type onError = (error: Error) => void

export default class UserStream {
  constructor(private readonly userId: Identifier) {}

  public subscribe(subscriber: subscriber, onError?: onError): unsubscribe {
    return User
      .getReference()
      .doc(this.userId)
      .onSnapshot((snapshot: firebase.firestore.DocumentSnapshot) => {
        const data = snapshot.data()
        if (!data) {
          return
        }
        subscriber(userMapper(this.userId, data as any))
      }, onError)
  }
}
