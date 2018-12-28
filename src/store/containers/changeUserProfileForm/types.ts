import {generate} from '@/submodules/store/UniqueActionTypeGenerator'

const namespace = 'containers/changeUserProfileForm/'

export const UPDATE_PROFILE_ACTION = generate('UPDATE_PROFILE_ACTION', namespace)
export const TO_STANDBY_ACTION = generate('TO_STANDBY_ACTION', namespace)
export const SUCCESS_UPDATE_ACTION = generate('SUCCESS_UPDATE_ACTION', namespace)
export const FAILURE_SEND_ACTION = generate('FAILURE_SEND_ACTION', namespace)

export const OPEN_DIALOG = generate('OPEN_DIALOG', namespace)
export const CLOSE_DIALOG = generate('CLOSE_DIALOG', namespace)
