import {IAuthInfo} from '@/boundary/authApplicationService/InOutType'
import {
  SUCCESS_USER_LOGIN_ACTION,
  AUTHENTICATION_FAILED,
} from './types'

export class SuccessUserLoginAction {
  public static readonly type = SUCCESS_USER_LOGIN_ACTION
  public readonly type = SUCCESS_USER_LOGIN_ACTION

  constructor(public readonly authInfo: IAuthInfo) {}
}

export class FailureLoginAction {
  public static readonly type = AUTHENTICATION_FAILED
  public readonly type = AUTHENTICATION_FAILED
}
