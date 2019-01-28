import {actionCreator} from 'typescript-fsa-vuex'
import {FAILURE_REGISTRATION} from './types'

// https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword
export type ErrorCode =
  'auth/email-already-in-use' | 'auth/invalid-email' |
  'auth/operation-not-allowed' | 'auth/weak-password'

export const failureRegistration = actionCreator<{readonly code: ErrorCode}>(FAILURE_REGISTRATION)
