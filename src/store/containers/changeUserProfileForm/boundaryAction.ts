import {actionCreator} from 'vuex-typescript-fsa'
import {IUser} from '@/boundary/userApplicationService/InOutType'
import {
  UPDATE_PROFILE_ACTION,
  TO_STANDBY_ACTION,
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from './types'

export const updateProfile = actionCreator<{readonly user: IUser}>(UPDATE_PROFILE_ACTION)
export const toStandby = actionCreator(TO_STANDBY_ACTION)
export const openDialog = actionCreator(OPEN_DIALOG)
export const closeDialog = actionCreator(CLOSE_DIALOG)
