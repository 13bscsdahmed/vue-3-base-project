import { RouteConfig } from 'vue-router';
import { appConstants } from '@/modules/utils/app.constants';
import { AuthService } from '../shared/services';

export const publicRoutes: RouteConfig = {
  path: `/${appConstants.appRoutes._public.root}`,
  redirect: `/${appConstants.appRoutes._public.root}/${appConstants.appRoutes._public.login}`,
  component: () => import(/* webpackChunkName: 'public' */ './components/public.vue'),
  beforeEnter: (to, from, next) => {
    AuthService.isLoggedIn() ? next(appConstants.appRoutes.appRoot) : next();
  },
  children: [
    {
      path: appConstants.appRoutes._public.login,
      component: () => import(/* webpackChunkName: 'public' */ './components/login/login.component.vue')
    }
  ]
};
