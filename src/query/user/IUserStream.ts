import {
  injectable,
} from 'inversify'
import {IUser} from '@/boundary/userApplicationService/InOutType'

type subscriber = (user: IUser) => void
type onError = (error: Error) => void

export type InputSubscribe = {
  subscriber: subscriber,
  payload: {readonly userId: Identifier},
  onError?: onError,
}

@injectable()
export default abstract class UserStream {
  public abstract subscribe(params: InputSubscribe): unsubscribe
}
