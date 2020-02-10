import { AxiosRequestConfig } from 'axios';
import router from '@/router';

import { StorageService, AuthService } from '../services';
import { appConstants } from '@/modules/utils/app.constants';
import { appHelpers } from '@/modules/utils/app.helpers';

export const requestInterceptor = (request: AxiosRequestConfig) => {
  if (AuthService.isLoggedIn()) {
    request.headers[appConstants.TOKEN_HEADER_KEY] = StorageService.getAppToken();

    return request;
  } else if (appHelpers.isPublicUrl(request.url || '')) {
    return request;
  } else {
    router.push(`/${appConstants.appRoutes._public}`);

    throw new Error('Invalid token.');
  }
};
