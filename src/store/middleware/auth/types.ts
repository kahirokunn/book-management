import {generate} from '@/submodules/store/UniqueActionTypeGenerator'

const namespace = 'middleware/auth/'

export const USER_LOGIN = generate('USER_LOGIN', namespace)
export const SUCCESS_USER_LOGIN_ACTION = generate('SUCCESS_USER_LOGIN_ACTION', namespace)
export const FAILURE_LOGIN_ACTION = generate('FAILURE_LOGIN_ACTION', namespace)
export const SUBSCRIBE_USER_ACTION = generate('SUBSCRIBE_USER_ACTION', namespace)
export const UNSUBSCRIBE_USER_ACTION = generate('UNSUBSCRIBE_USER_ACTION', namespace)
export const SET_USER_STREAM_ACTION = generate('USER_FROM_STREAM_ACTION', namespace)
