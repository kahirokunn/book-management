import {IUser} from '@/boundary/userApplicationService/InOutType'
import AuthApplicationService from '@/serviceLocator/AuthApplicationService'
import {
  UserLoginAction, UnsubscribeUserDataAction,
} from './boundaryAction'
import {
  SuccessUserLoginAction,
  FailureLoginAction,
  SubscribeUserDataAction,
  SetUserStreamAction,
} from './insideAction'
import store from '@/store/root'
import Logger from '@/serviceLocator/Logger'
import {UpdatedUserProfileEvent} from '@/store/eventHub/eventCreators'
import UserStream from '@/query/user/UserStream'

type State = {
  isInitialized: boolean,
  isLoggedIn: boolean,
  isEmailVerified: boolean,
  user?: IUser,
  unsubscribe?: unsubscribe,
}

const initialState = (): State => ({
  isInitialized: false,
  isLoggedIn: false,
  isEmailVerified: false,
  user: undefined,
})

const mutations = {
  [UpdatedUserProfileEvent.type](state: State, action: UpdatedUserProfileEvent) {
    state.user = action.user
  },
  [UserLoginAction.type](state: State, action: UserLoginAction) {
    AuthApplicationService.getInstance().login()
      .then((authInfo) => {
        Logger.getInstance().info('ログイン成功', authInfo)
        store.commit(new SuccessUserLoginAction(authInfo))
      })
      .catch((e) => {
        Logger.getInstance().info('ログイン失敗', e)
        store.commit(new FailureLoginAction())
      })
  },
  [SuccessUserLoginAction.type](state: State, action: SuccessUserLoginAction) {
    state.isInitialized = true
    state.isLoggedIn = true
    const user = action.authInfo
    state.isEmailVerified = user.isEmailVerified
    delete user.isEmailVerified
    state.user = user
    store.commit(new SubscribeUserDataAction(user))
  },
  [FailureLoginAction.type](state: State, action: FailureLoginAction) {
    state.isInitialized = true
    state.isLoggedIn = false
    state.user = initialState().user
  },
  [SubscribeUserDataAction.type](state: State, action: SubscribeUserDataAction) {
    const userStream = new UserStream(action.authInfo.id)
    userStream.subscribe((user) => store.commit(new SetUserStreamAction(user)))
  },
  [UnsubscribeUserDataAction.type](state: State, action: UnsubscribeUserDataAction) {
    if (state.unsubscribe) {
      state.unsubscribe()
    }
  },
  [SetUserStreamAction.type](state: State, action: SetUserStreamAction) {
    state.user = action.user
  },
}

export default {
  state: initialState,
  mutations,
}
