import {generate} from '@/submodules/store/UniqueActionTypeGenerator'

const namespace = 'middleware/auth/'

export const USER_LOGIN = generate('USER_LOGIN', namespace)
export const SUCCESS_USER_LOGIN = generate('SUCCESS_USER_LOGIN', namespace)
export const FAILURE_LOGIN = generate('FAILURE_LOGIN', namespace)
export const SUBSCRIBE_USER = generate('SUBSCRIBE_USER', namespace)
export const UNSUBSCRIBE_USER = generate('UNSUBSCRIBE_USER', namespace)
export const RECEIVE_USER_FROM_STREAM = generate('RECEIVE_USER_FROM_STREAM', namespace)
