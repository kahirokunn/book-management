import {combineMutation, mutation} from 'vuex-typescript-fsa'
import {IUser} from '@/boundary/userApplicationService/InOutType'
import AuthApplicationService from '@/serviceLocator/AuthApplicationService'
import {
  userLogin,
  unsubscribeUserData,
} from './boundaryAction'
import {
  successUserLogin,
  failureLogin,
  subscribeUserData,
  receiveUser,
} from './insideAction'
import store from '@/store/root'
import Logger from '@/serviceLocator/Logger'
import {updatedUserProfileEvent} from '@/store/eventHub/eventCreators'
import UserStream from '@/query/user/UserStream'

type State = {
  isInitialized: boolean,
  isLoggedIn: boolean,
  isEmailVerified: boolean,
  user?: IUser,
  unsubscribe: unsubscribe[],
}

const initialState = (): State => ({
  isInitialized: false,
  isLoggedIn: false,
  isEmailVerified: false,
  user: undefined,
  unsubscribe: [],
})

const mutations = combineMutation<State>(
  mutation(updatedUserProfileEvent, (state, action) => {
    state.user = action.payload.user
  }),
  mutation(userLogin, () => {
    AuthApplicationService.getInstance().login()
      .then((authInfo) => {
        Logger.getInstance().info('ログイン成功', authInfo)
        store.commit(successUserLogin({authInfo}))
      })
      .catch((e) => {
        Logger.getInstance().info('ログイン失敗', e)
        store.commit(failureLogin())
      })
  }),
  mutation(successUserLogin, (state, action) => {
    state.isInitialized = true
    state.isLoggedIn = true
    const {authInfo} = action.payload
    state.isEmailVerified = authInfo.isEmailVerified
    delete authInfo.isEmailVerified
    state.user = authInfo
    store.commit(subscribeUserData({authInfo}))
  }),
  mutation(failureLogin, (state) => {
    state.isInitialized = true
    state.isLoggedIn = false
    state.user = initialState().user
  }),
  mutation(subscribeUserData, (_, action) => {
    new UserStream(action.payload.authInfo.id)
      .subscribe((user) => store.commit(receiveUser({user})))
  }),
  mutation(unsubscribeUserData, (state) => {
    state.unsubscribe.map((unsubscribe) => unsubscribe())
  }),
  mutation(receiveUser, (state, action) => {
    state.user = action.payload.user
  }),
)

export default {
  state: initialState,
  mutations,
}
