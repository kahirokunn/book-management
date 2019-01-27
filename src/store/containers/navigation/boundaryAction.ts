import {actionCreator} from 'vuex-typescript-fsa'
import {
  TOGGLE_DRAWER,
  CLOSE_DRAWER,
} from './types'

export const toggleDrawer = actionCreator(TOGGLE_DRAWER)
export const closeDrawer = actionCreator(CLOSE_DRAWER)
