import {FAILURE_REGISTRATION_ACTION} from './types'

// https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword
export type ErrorCode =
  'auth/email-already-in-use' | 'auth/invalid-email' |
  'auth/operation-not-allowed' | 'auth/weak-password'

export class FailureRegistrationAction {
  public static readonly type = FAILURE_REGISTRATION_ACTION
  public readonly type = FAILURE_REGISTRATION_ACTION

  constructor(public readonly error: { code: ErrorCode }) {}
}
