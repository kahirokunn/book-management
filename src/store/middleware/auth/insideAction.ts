import {IAuthInfo} from '@/boundary/authApplicationService/InOutType'
import {
  SUCCESS_USER_LOGIN_ACTION,
  FAILURE_LOGIN_ACTION,
  SUBSCRIBE_USER_ACTION,
  SET_USER_STREAM_ACTION,
} from './types'
import {IUser} from '@/boundary/userApplicationService/InOutType'

export class SuccessUserLoginAction {
  public static readonly type = SUCCESS_USER_LOGIN_ACTION
  public readonly type = SUCCESS_USER_LOGIN_ACTION

  constructor(public readonly authInfo: IAuthInfo) {}
}

export class FailureLoginAction {
  public static readonly type = FAILURE_LOGIN_ACTION
  public readonly type = FAILURE_LOGIN_ACTION
}

export class SubscribeUserDataAction {
  public static readonly type = SUBSCRIBE_USER_ACTION
  public readonly type = SUBSCRIBE_USER_ACTION

  constructor(public readonly authInfo: IAuthInfo) {}
}

export class SetUserStreamAction {
  public static readonly type = SET_USER_STREAM_ACTION
  public readonly type = SET_USER_STREAM_ACTION

  constructor(public readonly user: IUser) {}
}
