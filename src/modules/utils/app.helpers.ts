import { appConstants } from './app.constants';

/**
 * Contains all helper methods of app
 */
export const appHelpers = {
  /**
   * Freezes the object to all nesting levels
   * @param obj The object to deep freeze
   */
  deepFreezeObject: (obj: any): any => {
    if (typeof obj === 'object') {
      Object.freeze(obj);

      if (obj === undefined) {
        return obj;
      }

      Object.getOwnPropertyNames(obj).forEach(function (prop) {
        if (obj[prop] !== null && (typeof obj[prop] === 'object' || typeof obj[prop] === 'function') && !Object.isFrozen(obj[prop])) {
          appHelpers.deepFreezeObject(obj[prop]);
        }
      });

      return obj;
    } else {
      return Error('Invalid input, deepFreeze only supports object.');
    }
  },
  /**
   * Checks if URL is public ie. requires auth token for API or not
   */
  isPublicUrl: (url: string): boolean => {
    const publicUrls = Object.values(appConstants.pluckApiUrls._public);

    return publicUrls.includes(url);
  }
};
