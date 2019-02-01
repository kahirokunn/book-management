import {
  InputSubscribe,
  IUserStream,
} from '@/query/user/IUserStream'
import { injectable } from 'inversify'

@injectable()
export class UserStream implements IUserStream {
  public subscribe({ onError }: InputSubscribe): unsubscribe {
    if (onError) {
      onError(new Error())
    }
    return () => {
      // pass
    }
  }
}
