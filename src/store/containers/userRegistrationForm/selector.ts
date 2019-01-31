import { Store } from '@/store/root'
import { ScreenState } from './index'

function _stateScope(state: Store['state']) {
  return state.containers.userRegistrationForm
}

function isSending(state: Store['state']) {
  return _stateScope(state).screenState === ScreenState.SENDING
}

function isSendFailed(state: Store['state']) {
  return _stateScope(state).screenState === ScreenState.SEND_FAILED
}

function errorMessage(state: Store['state']) {
  switch (_stateScope(state).errorCode) {
    case 'auth/email-already-in-use':
      return 'そのメールアドレスは既に登録されています'
    case 'auth/invalid-email':
      return 'メールアドレスの形式が間違っています'
    case 'auth/operation-not-allowed':
      return 'システムでメールアドレス・パスワード認証が有効になっていません'
    case 'auth/weak-password':
      return '脆弱なパスワードです'
    default:
      return 'エラーが発生しました\n時間を置いてから再度やり直してください'
  }
}

export default {
  isSending,
  isSendFailed,
  errorMessage,
}
