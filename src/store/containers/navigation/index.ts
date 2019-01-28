import {combineMutation, mutation} from 'typescript-fsa-vuex'
import {
  toggleDrawer,
  closeDrawer,
} from './boundaryAction'

type State = {
  isOpen: boolean,
}

const initialState = (): State => ({
  isOpen: false,
})

const mutations = combineMutation<State>(
  mutation(toggleDrawer, (state) => {
    state.isOpen = !state.isOpen
  }),
  mutation(closeDrawer, (state: State) => {
    state.isOpen = false
  }),
)

export default {
  state: initialState,
  mutations,
}
