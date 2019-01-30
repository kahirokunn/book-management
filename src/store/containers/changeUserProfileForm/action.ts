import {actionCreatorFactory} from 'typescript-fsa-vuex'
import {IUser} from '@/boundary/userApplicationService/InOutType'
import namespace from './namespace'

const actionCreator = actionCreatorFactory(namespace)

export const updateProfile = actionCreator<{readonly user: IUser}>('UPDATE_PROFILE')
export const toStandby = actionCreator('TO_STANDBY')
export const openDialog = actionCreator('OPEN_DIALOG')
export const closeDialog = actionCreator('CLOSE_DIALOG')
