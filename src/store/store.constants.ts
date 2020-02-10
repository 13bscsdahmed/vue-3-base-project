'use strict';

import { appHelpers } from '@/modules/utils/app.helpers';

const constants = {
  root: {
    mutations: {
      CLEAR_STORE: 'clearStore'
    },
    actions: {
      CLEAR_STORE: 'clearStore'
    },
    getters: {
    }
  },
  user: {
    mutations: {
      SET_USER_PROFILE: 'setUserProfile'
    },
    actions: {
      SET_USER_PROFILE: 'user/setUserProfile'
    },
    getters: {
      GET_USER_PROFILE: 'user/getUserProfile'
    }
  }
};

// TODO: enable this after deployment on prod
// export const storeConstants = appHelpers.deepFreezeObject(constants);

// TODO: disable this after deployment on prod
export const storeConstants = constants;
