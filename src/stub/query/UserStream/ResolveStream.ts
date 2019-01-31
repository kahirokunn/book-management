import IUserStream, { InputSubscribe } from '@/query/user/IUserStream'
import { injectable } from 'inversify'
import { userFactory } from '../../domain/factory/IUser'

@injectable()
export default class UserStream implements IUserStream {
  public subscribe({ subscriber, payload }: InputSubscribe): unsubscribe {
    subscriber(userFactory({id: payload.userId}))
    return () => {
      // pass
    }
  }
}
