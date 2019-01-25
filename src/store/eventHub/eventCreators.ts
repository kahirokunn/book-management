import {actionCreator} from 'vuex-typescript-fsa'
import {IUser} from '@/boundary/userApplicationService/InOutType'
import {
  UPDATED_USER_PROFILE,
} from './types'

export const updatedUserProfileEvent = actionCreator<{readonly user: IUser}>(UPDATED_USER_PROFILE)
