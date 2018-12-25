import {
  ToggleDrawer,
  CloseDrawer,
} from './boundaryAction'

type State = {
  isOpen: boolean,
}

const initialState = (): State => ({
  isOpen: false,
})

const mutations = {
  [ToggleDrawer.type](state: State, action: ToggleDrawer) {
    state.isOpen = !state.isOpen
  },
  [CloseDrawer.type](state: State, action: CloseDrawer) {
    state.isOpen = false
  },
}

export default {
  state: initialState,
  mutations,
}
