import {actionCreatorFactory} from 'typescript-fsa-vuex'
import namespace from './namespace'

const actionCreator = actionCreatorFactory(namespace)

export const userLogin = actionCreator('USER_LOGIN')
export const unsubscribeUserData = actionCreator('UNSUBSCRIBE_USER')
