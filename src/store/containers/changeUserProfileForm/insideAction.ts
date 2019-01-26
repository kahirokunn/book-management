import {actionCreator} from 'vuex-typescript-fsa'
import {
  SUCCESS_UPDATE_ACTION,
  FAILURE_SEND_ACTION,
} from './types'

export const successUpdate = actionCreator(SUCCESS_UPDATE_ACTION)
export const failureSend = actionCreator(FAILURE_SEND_ACTION)
