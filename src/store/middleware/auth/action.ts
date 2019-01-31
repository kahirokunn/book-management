import { IAuthInfo } from '@/boundary/authApplicationService/InOutType'
import { actionCreatorFactory } from 'typescript-fsa-vuex'
import namespace from './namespace'

const actionCreator = actionCreatorFactory(namespace)

export const userLogin = actionCreator('USER_LOGIN')
export const unsubscribeUserData = actionCreator('UNSUBSCRIBE_USER')
export const successUserLogin = actionCreator<{authInfo: IAuthInfo}>('SUCCESS_USER_LOGIN')
