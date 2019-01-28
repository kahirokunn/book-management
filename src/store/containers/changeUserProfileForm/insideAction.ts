import {actionCreator} from 'typescript-fsa-vuex'
import {
  SUCCESS_UPDATE,
  FAILURE_SEND,
} from './types'

export const successUpdate = actionCreator(SUCCESS_UPDATE)
export const failureSend = actionCreator(FAILURE_SEND)
