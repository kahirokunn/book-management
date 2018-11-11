import {
  PageNotFound,
} from './boundaryAction'

type State = {
  isPageNotFound: boolean,
}

const initialState = (): State => ({
  isPageNotFound: false,
})

const mutations = {
  [PageNotFound.type](state: State, action: PageNotFound) {
    state.isPageNotFound = true
  },
}

export default {
  state: initialState,
  mutations,
}
