import {combineMutation, mutation} from 'typescript-fsa-vuex'
import {
  pageNotFound,
} from './boundaryAction'

type State = {
  isPageNotFound: boolean,
}

const initialState = (): State => ({
  isPageNotFound: false,
})

const mutations = combineMutation<State>(
  mutation(pageNotFound, (state) => {
    state.isPageNotFound = true
  }),
)

export default {
  state: initialState,
  mutations,
}
