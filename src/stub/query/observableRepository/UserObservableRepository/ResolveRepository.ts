import { IUserObservableRepository } from '@/query/observableRepository/user/IUserObservableRepository'
import { userFactory } from '@/stub/domain/factory/IUser'
import { injectable } from 'inversify'
import { from } from 'rxjs'

@injectable()
export class UserObservableRepository implements IUserObservableRepository {
  public getUser(id: Identifier) {
    return from([userFactory({id})])
  }
}
