import {User} from './action';

import {
  LoginAction,
  AuthFailed,
  ChangeProfileAction,
} from './action';

interface AnonymouslyUser {
  // 必須
  id: string;
  iconFilepath: string;
  displayName: string;
}

// 後でタイプセーフにする
type State = {
  isInitialized: boolean;
  isLogined: boolean;
  isAnonymously: boolean;
  anonymouslyUser?: AnonymouslyUser;
  user?: User;
};

const initialState = (): State => ({
  isInitialized: false,
  isLogined: false,
  isAnonymously: false,
  anonymouslyUser: undefined,
  user: undefined,
});

const mutations = {
  [LoginAction.type](state: State, action: LoginAction) {
    state.isInitialized = state.isLogined = true;
    state.user = action.user;
  },
  [AuthFailed.type](state: State) {
    state.isInitialized = true;
  },
  [ChangeProfileAction.type](state: State, action: ChangeProfileAction) {
    state.user = action.user;
  },
};

export default {
  state: initialState,
  mutations,
};
