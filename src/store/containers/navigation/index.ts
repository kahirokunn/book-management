import { injectable } from 'inversify'
import {
  actionsToMutations,
  combineMutation,
  mutation,
} from 'typescript-fsa-vuex'
import {
  closeDrawer,
  toggleDrawer,
} from './action'

type State = {
  isOpen: boolean,
}

const initialState = (): State => ({
  isOpen: false,
})

@injectable()
export class NavigationModule {
  public state() {
    return initialState()
  }

  get mutations() {
    return combineMutation<State>(
      mutation(toggleDrawer, (state) => {
        state.isOpen = !state.isOpen
      }),
      mutation(closeDrawer, (state: State) => {
        state.isOpen = false
      }),
    )
  }

  get actions() {
    return actionsToMutations(
      toggleDrawer,
      closeDrawer,
    )
  }
}
