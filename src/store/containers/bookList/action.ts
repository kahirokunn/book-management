import { actionCreatorFactory } from 'typescript-fsa-vuex'

export const actionCreator = actionCreatorFactory('containers/bookList')

export const see = actionCreator<{ startAfter?: Date }>('see')
export const depose = actionCreator('DEPOSE')
