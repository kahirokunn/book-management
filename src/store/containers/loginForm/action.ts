import { actionCreatorFactory } from 'typescript-fsa-vuex'

export const actionCreator = actionCreatorFactory('containers/loginForm')

export const loginByEmailAndPassword =
  actionCreator<{readonly email: string, readonly password: string}>('LOGIN_BY_EMAIL_AND_PASSWORD')
export const toStandby = actionCreator('TO_STANDBY')
