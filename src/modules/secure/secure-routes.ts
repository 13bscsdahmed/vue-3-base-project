import { RouteConfig } from 'vue-router';
import { userRoutes } from './modules/user/user-routes';
import { appConstants } from '@/modules/utils/app.constants';
import { AuthService } from '../shared/services';

import SecureComponent from './components/secure.vue';

export const secureRoutes: RouteConfig = {
  path: `/`,
  redirect: appConstants.appRoutes.appRoot,
  component: SecureComponent,
  beforeEnter: (to, from, next) => {
    AuthService.isLoggedIn() ? next() : next(`/${appConstants.appRoutes._public.root}`);
  },
  children: [
    userRoutes
  ]
};
