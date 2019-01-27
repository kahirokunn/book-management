import {generate} from '@/submodules/store/UniqueActionTypeGenerator'

const namespace = 'containers/changeUserProfileForm/'

export const UPDATE_PROFILE = generate('UPDATE_PROFILE', namespace)
export const TO_STANDBY = generate('TO_STANDBY', namespace)
export const SUCCESS_UPDATE = generate('SUCCESS_UPDATE', namespace)
export const FAILURE_SEND = generate('FAILURE_SEND', namespace)

export const OPEN_DIALOG = generate('OPEN_DIALOG', namespace)
export const CLOSE_DIALOG = generate('CLOSE_DIALOG', namespace)
