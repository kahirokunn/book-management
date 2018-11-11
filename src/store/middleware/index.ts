import auth from './auth';

export type MiddlewareState = {
  auth: ReturnType<typeof auth.state>,
};

export default {
  modules: {
    auth,
  },
};
