import Vue from 'vue';
import Vuex from 'vuex';

import { userStore } from './user';
import { appConstants } from '@/modules/utils/app.constants';
import { storeConstants } from './store.constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
    [storeConstants.root.mutations.CLEAR_STORE] (state) {
      state = {};
    }
  },
  actions: {
    [storeConstants.root.actions.CLEAR_STORE] (context: any) {
      context.commit(storeConstants.root.mutations.CLEAR_STORE);
    }
  },
  modules: {
    user: userStore
  }
});
