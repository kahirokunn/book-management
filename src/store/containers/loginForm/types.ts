import {generate} from '@/submodules/store/UniqueActionTypeGenerator'

const namespace = 'containers/loginForm/'

export const LOGIN_BY_EMAIL_AND_PASSWORD = generate('LOGIN_BY_EMAIL_AND_PASSWORD', namespace)
export const TO_STANDBY = generate('TO_STANDBY', namespace)
export const FAILURE_LOGIN = generate('FAILURE_LOGIN', namespace)
