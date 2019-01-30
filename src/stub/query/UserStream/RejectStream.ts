import {injectable} from 'inversify'
import IUserStream, {InputSubscribe} from '@/query/user/IUserStream'

@injectable()
export default class UserStream implements IUserStream {
  public subscribe({ onError }: InputSubscribe): unsubscribe {
    if (onError) {
      onError(new Error())
    }
    return () => {
      // pass
    }
  }
}
