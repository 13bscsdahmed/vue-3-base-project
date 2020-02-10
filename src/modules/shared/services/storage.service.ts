import { appConstants } from '@/modules/utils/app.constants';

export const StorageService = {
  /**
   * Set auth token to localstorage
   */
  setAppToken: (token: string): void => {
    localStorage.setItem(appConstants.TOKEN_LOCAL_STORAGE_KEY, token);
  },

  /**
   * Get auth token from localstorage
   */
  getAppToken: ():string => {
    return localStorage.getItem(appConstants.TOKEN_LOCAL_STORAGE_KEY) || '';
  },

  /**
   * Clears all data from localstorage. Note: calling this will clear current user sesison
   */
  clearStorage: (): void => {
    localStorage.clear();
  },

  /**
   * Saves the data in localstorage
   * @param key Key that will be used to get/set the data in localstorage
   * @param data Data to save
   */
  saveData: (key: string, data: any): void => {
    localStorage.setItem(key, JSON.stringify(data));
  },

  /**
   * Returns the value of key from localstorage
   * @param key Key of the value required
   */
  getData: (key: string): string => {
    return localStorage.getItem(key) || '';
  }
};
