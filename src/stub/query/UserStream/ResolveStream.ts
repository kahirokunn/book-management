import {injectable} from 'inversify'
import IUserStream, {InputSubscribe} from '@/query/user/IUserStream'
import {userFactory} from '../../domain/factory/IUser'

@injectable()
export default class UserStream implements IUserStream {
  public subscribe({ subscriber, payload, onError }: InputSubscribe): unsubscribe {
    subscriber(userFactory({id: payload.userId}))
    return () => {
      // pass
    }
  }
}
