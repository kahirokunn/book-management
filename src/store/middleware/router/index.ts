import { RootState } from '@/store/root'
import { injectable } from 'inversify'
import {
  combineAction,
  combineMutation,
  mutation,
} from 'typescript-fsa-vuex'
import { actionToMutation } from 'typescript-fsa-vuex/lib/helpers'
import { RawLocation } from 'vue-router'
import {
  changeRoute,
} from './action'

type State = {
  location: RawLocation | null,
}

const initialState = (): State => ({
  location: null,
})

@injectable()
export class RouterModule {
  public state() {
    return initialState()
  }

  get mutations() {
    return combineMutation<State>(
      mutation(changeRoute, (state, action) => {
        state.location = action.payload
      }),
    )
  }

  get actions() {
    return combineAction<State, RootState>(
      actionToMutation(
        changeRoute,
      ),
    )
  }
}
