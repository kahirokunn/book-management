import {
  actionsToMutations,
  combineMutation,
  mutation,
} from 'typescript-fsa-vuex'
import {
  closeDrawer,
  toggleDrawer,
} from './action'

export function navigationCreator() {
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

  const actions = actionsToMutations(
    toggleDrawer,
    closeDrawer,
  )

  return {
    state: initialState,
    mutations,
    actions,
  }
}
