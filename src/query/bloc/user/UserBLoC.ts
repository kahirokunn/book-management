import { IUser } from '@/boundary/userApplicationService/InOutType'
import { IUserObservableRepository } from '@/query/observableRepository/user/IUserObservableRepository'
import { inject, injectable } from 'inversify'
import { Observable } from 'rxjs'

@injectable()
export class UserBLoC {
  private observables: {[id: string]: Observable<IUser>}  = {}

  constructor(
    @inject(IUserObservableRepository)
    private readonly userObservableRepository: IUserObservableRepository,
  ) {}

  public user$(id: Identifier) {
    if (id in this.observables) {
      return this.observables[id]
    }
    this.observables[id] = this.userObservableRepository.getUser(id)
    return this.observables[id]
  }
}
