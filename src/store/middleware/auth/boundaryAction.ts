import {IUser} from '@/boundary/userApplicationService/InOutType'
import {
  USER_LOGIN,
  REFLECT_USER_ACTION,
} from './types'

export class UserLoginAction {
  public static readonly type = USER_LOGIN
  public readonly type = USER_LOGIN
}

export class ReflectUserAction {
  public static readonly type = REFLECT_USER_ACTION
  public readonly type = REFLECT_USER_ACTION

  constructor(public readonly user: IUser) {}
}
