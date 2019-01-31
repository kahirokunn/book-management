import { actionCreatorFactory } from 'typescript-fsa-vuex'

const actionCreator = actionCreatorFactory('middleware/pageNotFound')

export const pageNotFound = actionCreator('PAGE_NOT_FOUND')
