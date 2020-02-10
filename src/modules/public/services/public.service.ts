import { PluckGenericApiService } from '@/modules/shared/services';
import { AxiosResponse } from 'axios';
import { pluckApiInstance } from '@/modules/shared/axios';
import { appConstants } from '@/modules/utils/app.constants';

import { LoginModel } from '../models';

export class PublicService extends PluckGenericApiService {

  /**
   * Makes login call to API
   * @param model model of login api call
   */
  login (model: LoginModel): Promise<AxiosResponse> {
    return pluckApiInstance.post(appConstants.pluckApiUrls._public.login, model);
  }
}
