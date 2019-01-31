import { IUser } from '@/boundary/userApplicationService/InOutType'
import {
  injectable,
} from 'inversify'

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
