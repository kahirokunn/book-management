import { IUser } from '@/boundary/userApplicationService/InOutType'
import { Observable } from 'rxjs'

export abstract class IUserBLoC {
  public abstract  execute(id: Identifier): Observable<IUser>
}
