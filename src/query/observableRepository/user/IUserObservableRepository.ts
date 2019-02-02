import { IUser } from '@/boundary/userApplicationService/InOutType'
import { Observable } from 'rxjs'

export abstract class IUserObservableRepository {
  public abstract getUser(id: Identifier): Observable<IUser>
}
