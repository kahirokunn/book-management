import {actionCreator} from 'vuex-typescript-fsa'
import {
  USER_LOGIN,
  UNSUBSCRIBE_USER_ACTION,
} from './types'

export const userLogin = actionCreator(USER_LOGIN)
export const unsubscribeUserData = actionCreator(UNSUBSCRIBE_USER_ACTION)
