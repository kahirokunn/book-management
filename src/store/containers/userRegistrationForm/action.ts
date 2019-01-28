import {actionCreatorFactory} from 'typescript-fsa-vuex'
import {IRegistrationParams} from '@/boundary/authApplicationService/InOutType'

const actionCreator = actionCreatorFactory('containers/userRegistrationForm')

// boundary action
export const userRegistration = actionCreator<IRegistrationParams>('USER_REGISTRATION')
export const toStandby = actionCreator('TO_STANDBY')

// inside action
// https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword
export type ErrorCode =
  'auth/email-already-in-use' | 'auth/invalid-email' |
  'auth/operation-not-allowed' | 'auth/weak-password'

export const failureRegistration = actionCreator<{readonly code: ErrorCode}>('FAILURE_REGISTRATION')
