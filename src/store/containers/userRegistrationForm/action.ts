import { IRegistrationParams } from '@/boundary/authApplicationService/InOutType'
import { actionCreatorFactory } from 'typescript-fsa-vuex'

export const actionCreator = actionCreatorFactory('containers/userRegistrationForm')

// boundary action
export const userRegistration = actionCreator<IRegistrationParams>('USER_REGISTRATION')
export const toStandby = actionCreator('TO_STANDBY')
