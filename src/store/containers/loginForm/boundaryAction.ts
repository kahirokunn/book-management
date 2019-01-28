import {actionCreator} from 'typescript-fsa-vuex'
import {
  LOGIN_BY_EMAIL_AND_PASSWORD,
  TO_STANDBY,
} from './types'

export const loginByEmailAndPassword =
  actionCreator<{readonly email: string, readonly password: string}>(LOGIN_BY_EMAIL_AND_PASSWORD)
export const toStandby = actionCreator(TO_STANDBY)
