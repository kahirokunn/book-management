import {IUser} from '@/boundary/userApplicationService/InOutType'
import {
  UPDATED_USER_PROFILE,
} from './types'

export class UpdatedUserProfileEvent {
  public static readonly type = UPDATED_USER_PROFILE
  public readonly type = UPDATED_USER_PROFILE

  constructor(public readonly user: IUser) {}
}
