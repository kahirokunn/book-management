import {actionCreator} from 'typescript-fsa-vuex'
import {IAuthInfo} from '@/boundary/authApplicationService/InOutType'
import {
  SUCCESS_USER_LOGIN,
  FAILURE_LOGIN,
  SUBSCRIBE_USER,
  RECEIVE_USER_FROM_STREAM,
} from './types'
import {IUser} from '@/boundary/userApplicationService/InOutType'

export const successUserLogin = actionCreator<{readonly authInfo: IAuthInfo}>(SUCCESS_USER_LOGIN)
export const failureLogin = actionCreator(FAILURE_LOGIN)
export const subscribeUserData = actionCreator<{readonly authInfo: IAuthInfo}>(SUBSCRIBE_USER)
export const receiveUserFromStream = actionCreator<{readonly user: IUser}>(RECEIVE_USER_FROM_STREAM)
