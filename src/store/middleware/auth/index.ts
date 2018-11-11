import {IUser} from '@/boundary/userApplicationService/InOutType';
import AuthApplicationService from '@/serviceLocator/AuthApplicationService';
import {
  UserLoginAction,
  ReflectUserAction,
} from './boundaryAction';
import {
  SuccessUserLoginAction,
  FailureLoginAction,
} from './insideAction';
import store from '@/store/root';


type State = {
  isInitialized: boolean,
  isLoggedIn: boolean,
  isEmailVerified: boolean,
  user?: IUser,
};

const initialState = (): State => ({
  isInitialized: false,
  isLoggedIn: false,
  isEmailVerified: false,
  user: undefined,
});

const mutations = {
  [UserLoginAction.type](state: State, action: UserLoginAction) {
    AuthApplicationService.getInstance().login()
      .then((authInfo) => store.commit(new SuccessUserLoginAction(authInfo)))
      .catch(() => store.commit(new FailureLoginAction()));
  },
  [SuccessUserLoginAction.type](state: State, action: SuccessUserLoginAction) {
    state.isInitialized = true;
    state.isLoggedIn = true;
    const user = action.authInfo;
    state.isEmailVerified = user.isEmailVerified;
    delete user.isEmailVerified;
    state.user = user;
  },
  [FailureLoginAction.type](state: State) {
    state.isInitialized = true;
    state.isLoggedIn = false;
    state.user = initialState().user;
  },
  [ReflectUserAction.type](state: State, action: ReflectUserAction) {
    state.user = action.user;
  },
};

export default {
  state: initialState,
  mutations,
};
