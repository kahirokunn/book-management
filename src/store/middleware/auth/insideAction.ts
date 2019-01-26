import {actionCreator} from 'vuex-typescript-fsa'
import {IAuthInfo} from '@/boundary/authApplicationService/InOutType'
import {
  SUCCESS_USER_LOGIN_ACTION,
  FAILURE_LOGIN_ACTION,
  SUBSCRIBE_USER_ACTION,
  SET_USER_STREAM_ACTION,
} from './types'
import {IUser} from '@/boundary/userApplicationService/InOutType'

export const successUserLogin = actionCreator<{readonly authInfo: IAuthInfo}>(SUCCESS_USER_LOGIN_ACTION)
export const failureLogin = actionCreator(FAILURE_LOGIN_ACTION)
export const subscribeUserData = actionCreator<{readonly authInfo: IAuthInfo}>(SUBSCRIBE_USER_ACTION)
export const setUserStream = actionCreator<{readonly user: IUser}>(SET_USER_STREAM_ACTION)
