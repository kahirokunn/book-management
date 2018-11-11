import {generate} from '@/submodules/store/UniqueActionTypeGenerator'

const namespace = 'containers/userRegistrationForm/'

export const USER_REGISTRATION_ACTION = generate('USER_REGISTRATION_ACTION', namespace)
export const TO_STANDBY_ACTION = generate('TO_STANDBY_ACTION', namespace)
export const FAILURE_REGISTRATION_ACTION = generate('FAILURE_REGISTRATION_ACTION', namespace)
