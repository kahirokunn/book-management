import {
  InputSubscribe,
  IUserStream,
} from '@/query/user/IUserStream'
import { injectable } from 'inversify'
import { userFactory } from '../../domain/factory/IUser'

@injectable()
export class UserStream implements IUserStream {
  public subscribe({ subscriber, payload }: InputSubscribe): unsubscribe {
    subscriber(userFactory({id: payload.userId}))
    return () => {
      // pass
    }
  }
}
