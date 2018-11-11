import {generate} from '@/submodules/store/UniqueActionTypeGenerator'

const namespace = 'containers/loginForm/'

export const LOGIN_BY_EMAIL_AND_PASSWORD = generate('LOGIN_BY_EMAIL_AND_PASSWORD', namespace)
export const TO_STANDBY_ACTION = generate('TO_STANDBY_ACTION', namespace)
export const AUTHENTICATION_FAILED = generate('AUTHENTICATION_FAILED', namespace)
