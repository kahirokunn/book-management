import {generate} from '@/submodules/store/UniqueActionTypeGenerator'

const namespace = 'middleware/auth/'

export const USER_LOGIN = generate('USER_LOGIN', namespace)
export const SUCCESS_USER_LOGIN_ACTION = generate('SUCCESS_USER_LOGIN_ACTION', namespace)
export const REFLECT_USER_ACTION = generate('REFLECT_USER_ACTION', namespace)
export const AUTHENTICATION_FAILED = generate('AUTHENTICATION_FAILED', namespace)
