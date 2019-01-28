import {actionCreatorFactory} from 'typescript-fsa-vuex'

const actionCreator = actionCreatorFactory('containers/loginForm')

// boundary action
export const loginByEmailAndPassword =
  actionCreator<{readonly email: string, readonly password: string}>('LOGIN_BY_EMAIL_AND_PASSWORD')
export const toStandby = actionCreator('TO_STANDBY')

// inside action
export const failureLogin = actionCreator('FAILURE_LOGIN')
