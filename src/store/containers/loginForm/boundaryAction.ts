import {
  LOGIN_BY_EMAIL_AND_PASSWORD,
  TO_STANDBY_ACTION,
} from './types'

export class LoginByEmailAndPasswordAction {
  public static readonly type = LOGIN_BY_EMAIL_AND_PASSWORD
  public readonly type = LOGIN_BY_EMAIL_AND_PASSWORD

  constructor(public readonly info: {email: string, password: string}) {}
}

export class ToStandbyAction {
  public static readonly type = TO_STANDBY_ACTION
  public readonly type = TO_STANDBY_ACTION
}
