import {actionCreatorFactory} from 'typescript-fsa-vuex'
import {IUser} from '@/boundary/userApplicationService/InOutType'

const actionCreator = actionCreatorFactory('containers/changeUserProfileForm')

// boundary action
export const updateProfile = actionCreator<{readonly user: IUser}>('UPDATE_PROFILE')
export const toStandby = actionCreator('TO_STANDBY')
export const openDialog = actionCreator('OPEN_DIALOG')
export const closeDialog = actionCreator('CLOSE_DIALOG')

// inside action
export const successUpdate = actionCreator('SUCCESS_UPDATE')
export const failureSend = actionCreator('FAILURE_SEND')
