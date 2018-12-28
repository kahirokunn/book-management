import {IUser} from '@/boundary/userApplicationService/InOutType'
import {
  UPDATE_PROFILE_ACTION,
  TO_STANDBY_ACTION,
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from './types'

export class UpdateProfileAction {
  public static readonly type = UPDATE_PROFILE_ACTION
  public readonly type = UPDATE_PROFILE_ACTION

  constructor(public readonly user: IUser) {}
}

export class ToStandbyAction {
  public static readonly type = TO_STANDBY_ACTION
  public readonly type = TO_STANDBY_ACTION
}

export class OpenDialog {
  public static readonly type = OPEN_DIALOG
  public readonly type = OPEN_DIALOG
}

export class CloseDialog {
  public static readonly type = CLOSE_DIALOG
  public readonly type = CLOSE_DIALOG
}
