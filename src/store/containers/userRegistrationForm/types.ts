import {generate} from '@/submodules/store/UniqueActionTypeGenerator'

const namespace = 'containers/userRegistrationForm/'

export const USER_REGISTRATION = generate('USER_REGISTRATION', namespace)
export const TO_STANDBY = generate('TO_STANDBY', namespace)
export const FAILURE_REGISTRATION = generate('FAILURE_REGISTRATION', namespace)
