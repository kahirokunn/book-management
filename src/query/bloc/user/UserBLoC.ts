import { IUser } from '@/boundary/userApplicationService/InOutType'
import { IUserObservableRepository } from '@/query/observableRepository/user/IUserObservableRepository'
import { inject, injectable } from 'inversify'
import { Observable, Subject, Subscription } from 'rxjs'

@injectable()
export class UserBLoC {
  private readonly _user$: Subject<IUser> = new Subject<IUser>()
  private _subscriptions: Subscription[] = []

  get user$(): Observable<IUser> {
    return this._user$
  }

  constructor(
    @inject(IUserObservableRepository)
    private readonly userRepository: IUserObservableRepository,
  ) {}

  public fetchUserById(id: Identifier): void {
    const subscription = this.userRepository
      .getUser(id)
      .subscribe(this._user$)
    this._subscriptions.push(subscription)
  }

  public depose() {
    this._subscriptions
      .map((subscription) => subscription.unsubscribe())
  }
}
