import {IRegistrationParams} from '@/boundary/authApplicationService/InOutType'
import {
  USER_REGISTRATION_ACTION,
  TO_STANDBY_ACTION,
} from './types'

export class UserRegistrationAction {
  public static readonly type = USER_REGISTRATION_ACTION
  public readonly type = USER_REGISTRATION_ACTION

  constructor(public readonly registrationParams: IRegistrationParams) {}
}

export class ToStandbyAction {
  public static readonly type = TO_STANDBY_ACTION
  public readonly type = TO_STANDBY_ACTION
}
