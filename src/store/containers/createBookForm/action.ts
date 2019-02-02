import { IRegistrationParams } from '@/boundary/bookApplicationService/InOutType'
import { actionCreatorFactory } from 'typescript-fsa-vuex'

export const actionCreator = actionCreatorFactory('containers/createBookForm')

export const createBook = actionCreator<{readonly params: IRegistrationParams}>('CREATE_BOOK')
export const toStandby = actionCreator('TO_STANDBY')
export const openDialog = actionCreator('OPEN_DIALOG')
export const closeDialog = actionCreator('CLOSE_DIALOG')
