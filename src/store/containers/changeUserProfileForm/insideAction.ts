import {
  SUCCESS_UPDATE_ACTION,
  FAILURE_SEND_ACTION,
} from './types'

export class SuccessUpdateAction {
  public static readonly type = SUCCESS_UPDATE_ACTION
  public readonly type = SUCCESS_UPDATE_ACTION
}

export class FailureSendAction {
  public static readonly type = FAILURE_SEND_ACTION
  public readonly type = FAILURE_SEND_ACTION
}
