import { RouteConfig } from 'vue-router';
import { appConstants } from '@/modules/utils/app.constants';

import UserComponent from './components/user.vue';

export const userRoutes: RouteConfig = {
  path: `/${appConstants.appRoutes._secure._user.root}`,
  redirect: `/${appConstants.appRoutes._secure._user.root}/${appConstants.appRoutes._secure._user.dashboard}`,
  component: UserComponent,
  children: [
    {
      path: appConstants.appRoutes._secure._user.dashboard,
      component: () => import(/* webpackChunkName: 'user' */ './components/dashboard/dashboard.component.vue')
    }
  ]
};
