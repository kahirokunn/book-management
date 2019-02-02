import { IUserObservableRepository } from '@/query/observableRepository/user/IUserObservableRepository'
import { injectable } from 'inversify'
import { Observable } from 'rxjs'

@injectable()
export class UserObservableRepository implements IUserObservableRepository {
  public getUser() {
    return Observable.throw(new Error())
  }
}
