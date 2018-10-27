import Vuex from 'vuex';
import auth from './auth/index';

interface RootState {
  auth: ReturnType<typeof auth.state>;
}

export default new Vuex.Store<RootState>({
  modules: {
    auth,
  },
});
