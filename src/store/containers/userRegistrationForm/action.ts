import {actionCreatorFactory} from 'typescript-fsa-vuex'
import {IRegistrationParams} from '@/boundary/authApplicationService/InOutType'
import namespace from './namespace'

const actionCreator = actionCreatorFactory(namespace)

// boundary action
export const userRegistration = actionCreator<IRegistrationParams>('USER_REGISTRATION')
export const toStandby = actionCreator('TO_STANDBY')
