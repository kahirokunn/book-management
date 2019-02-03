import { injectable } from 'inversify'
import {
  actionsToMutations,
  combineMutation,
  mutation,
} from 'typescript-fsa-vuex'
import {
  pageNotFound,
} from './action'

type State = {
  isPageNotFound: boolean,
}

const initialState = (): State => ({
  isPageNotFound: false,
})

@injectable()
export class PageNotFoundModule {
  public state() {
    return initialState()
  }

  get mutations() {
    return combineMutation<State>(
      mutation(pageNotFound, (state) => {
        state.isPageNotFound = true
      }),
    )
  }

  get actions() {
    return actionsToMutations(pageNotFound)
  }
}
