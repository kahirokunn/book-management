import Router from 'vue-router';
import routes from 'vue-auto-routing';
import { createRouterLayout } from 'vue-router-layout';

const RouterLayout = createRouterLayout((layout) => {
  return import('@/layouts/' + layout + '.vue');
});

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes,
    },
  ],
});
