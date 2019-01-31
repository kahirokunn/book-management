import { actionCreatorFactory } from 'typescript-fsa-vuex'
import namespace from './namespace'

const actionCreator = actionCreatorFactory(namespace)

export const loginByEmailAndPassword =
  actionCreator<{readonly email: string, readonly password: string}>('LOGIN_BY_EMAIL_AND_PASSWORD')
export const toStandby = actionCreator('TO_STANDBY')
