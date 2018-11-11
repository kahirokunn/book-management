import Vuex from 'vuex';
import middleware, {MiddlewareState} from './middleware';

interface RootState {
  middleware: MiddlewareState;
}

export default new Vuex.Store<RootState>({
  modules: {
    middleware,
  },
});
