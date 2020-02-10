import Vue from 'vue';
import VueRouter from 'vue-router';

import { publicRoutes } from '@/modules/public/public-routes';
import { secureRoutes } from '@/modules/secure/secure-routes';
import { appConstants } from '@/modules/utils/app.constants';

Vue.use(VueRouter);

const routes = [
  { path: '*', redirect: `/${appConstants.appRoutes._public.root}` },
  publicRoutes,
  secureRoutes
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeResolve((to, from, next) => {
  next();
});

export default router;
