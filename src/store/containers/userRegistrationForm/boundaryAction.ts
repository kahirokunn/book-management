import {actionCreator} from 'vuex-typescript-fsa'
import {IRegistrationParams} from '@/boundary/authApplicationService/InOutType'
import {
  USER_REGISTRATION,
  TO_STANDBY,
} from './types'

export const userRegistration = actionCreator<IRegistrationParams>(USER_REGISTRATION)
export const toStandby = actionCreator(TO_STANDBY)
