import { actionCreatorFactory } from 'typescript-fsa-vuex'
import { RawLocation } from 'vue-router'

const actionCreator = actionCreatorFactory('middleware/router')

export const changeRoute = actionCreator<RawLocation>('CHANGE_ROUTE')
