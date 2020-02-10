'use strict';

import { appHelpers } from './app.helpers';

const constants = {
  // internal constans of app
  TOKEN_HEADER_KEY: 'x-auth-token',
  TOKEN_LOCAL_STORAGE_KEY: 'pluckAppToken',

  // internal routes of app
  appRoutes: {
    appRoot: 'user',
    _public: {
      root: 'public',
      login: 'login'
    },
    _secure: {
      _user: {
        root: 'user',
        dashboard: 'dashboard'
      }
    }
  },

  // pluck api urls
  pluckApiUrls: {
    _public: {
      login: '/user/login'
    }
  }
};

// TODO: enable this after deployment on prod
// export const appConstants = appHelpers.deepFreezeObject(constants);

// TODO: disable this after deployment on prod
export const appConstants = constants;
