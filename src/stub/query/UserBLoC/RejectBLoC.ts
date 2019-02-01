import {
  IUserBLoC,
} from '@/query/user/IUserBLoC'
import { injectable } from 'inversify'
import { Observable } from 'rxjs'

@injectable()
export class UserBLoC implements IUserBLoC {
  public execute() {
    return Observable.throw(new Error())
  }
}
