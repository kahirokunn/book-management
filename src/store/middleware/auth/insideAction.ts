import {IAuthInfo} from '@/boundary/authApplicationService/InOutType'
import {
  SUCCESS_USER_LOGIN_ACTION,
  FAILURE_LOGIN_ACTION,
} from './types'

export class SuccessUserLoginAction {
  public static readonly type = SUCCESS_USER_LOGIN_ACTION
  public readonly type = SUCCESS_USER_LOGIN_ACTION

  constructor(public readonly authInfo: IAuthInfo) {}
}

export class FailureLoginAction {
  public static readonly type = FAILURE_LOGIN_ACTION
  public readonly type = FAILURE_LOGIN_ACTION
}
