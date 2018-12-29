import firebase from 'firebase/app'

// 開発時はwindowにfirebaseを追加してデバッグしやすくする
interface Window {
  firebase: typeof firebase
}
declare var window: Window
if (process.env.NODE_ENV !== 'production') {
  window.firebase = firebase
}
