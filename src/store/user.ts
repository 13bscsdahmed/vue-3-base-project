import { UserModel, ProfileModel } from '@/modules/secure/modules/user/models';
import { storeConstants } from './store.constants';

const defaultState: UserModel = {
  profile: undefined
};

export const userStore = {
  state: defaultState,
  mutations: {
    [storeConstants.user.mutations.SET_USER_PROFILE] (state: UserModel, model: ProfileModel) {
      state.profile = model;
    }
  },
  actions: {
    [storeConstants.user.actions.SET_USER_PROFILE] (context: any, model: ProfileModel) {
      context.commit(storeConstants.user.mutations.SET_USER_PROFILE, model);
    }
  },
  getters: {
    [storeConstants.user.getters.GET_USER_PROFILE]: (state: UserModel) => state.profile
  }
};
