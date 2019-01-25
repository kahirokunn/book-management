import {actionCreator} from 'vuex-typescript-fsa'
import {
  USER_LOGIN,
  UNSUBSCRIBE_USER_ACTION,
} from './types'

export const userLogin = actionCreator<void>(USER_LOGIN)
export const unsubscribeUserData = actionCreator<void>(UNSUBSCRIBE_USER_ACTION)
