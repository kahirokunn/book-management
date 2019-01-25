import {
  USER_LOGIN,
  UNSUBSCRIBE_USER_ACTION,
} from './types'

export class UserLoginAction {
  public static readonly type = USER_LOGIN
  public readonly type = USER_LOGIN
}

export class UnsubscribeUserDataAction {
  public static readonly type = UNSUBSCRIBE_USER_ACTION
  public readonly type = UNSUBSCRIBE_USER_ACTION
}
