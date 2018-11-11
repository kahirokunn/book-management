import store from '@/store/root'
import {ScreenState} from './index'

function _state() {
  return store.state.containers.userRegistrationForm
}

function isSending() {
  return _state().screenState === ScreenState.SENDING
}

function isSendFailed() {
  return _state().screenState === ScreenState.SEND_FAILED
}

function errorMessage() {
  switch (_state().errorCode) {
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
