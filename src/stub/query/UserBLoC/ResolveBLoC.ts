import {
  IUserBLoC,
} from '@/query/user/IUserBLoC'
import { injectable } from 'inversify'
import { from } from 'rxjs'
import { userFactory } from '../../domain/factory/IUser'

@injectable()
export class UserBLoC implements IUserBLoC {
  public execute(id: Identifier) {
    return from([userFactory({id})])
  }
}
