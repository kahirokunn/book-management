import { actionCreatorFactory } from 'typescript-fsa-vuex'

export const actionCreator = actionCreatorFactory('containers/bookList')

export const initialize = actionCreator('INITIALIZE')
export const seeMore = actionCreator('SEE_MORE')
export const depose = actionCreator('DEPOSE')
