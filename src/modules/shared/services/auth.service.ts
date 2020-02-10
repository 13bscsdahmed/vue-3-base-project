import JwtDecode from 'jwt-decode';
import store from '@/store';
import { StorageService } from './storage.service';
import { storeConstants } from '@/store/store.constants';
import { ProfileModel } from '@/modules/secure/modules/user/models';

export const AuthService = {
  /**
   * Initializes new session of user
   * @param token auth token sent by api
   */
  initUserSession: (token?: string): void => {
    if (!token) {
      token = StorageService.getAppToken();
    }

    if (token) {
      StorageService.setAppToken(token);

      const userData = JwtDecode(token);

      store.dispatch(storeConstants.user.actions.SET_USER_PROFILE, userData);
    }
  },

  /**
   * Ends current session of user
   */
  endUserSession: (): void => {
    StorageService.clearStorage();
    store.dispatch(storeConstants.root.actions.CLEAR_STORE);
  },

  /**
   * Checks if the user has token and is not expired
   */
  isLoggedIn: (): boolean => {
    const token = StorageService.getAppToken();
    const isTokenValid = token !== undefined && token !== null && token.length > 0 && token.trim().length > 0;

    if (isTokenValid) {
      const userData = JwtDecode(token) as ProfileModel;
      const isTokenNotExpired = Date.now() <= (userData.exp * 1000);

      return isTokenNotExpired;
    }

    return false;
  }
};
