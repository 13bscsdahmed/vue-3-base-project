import { AxiosInstance } from 'axios';
import { pluckApiInstance } from '../axios';
import { PluckApiReponseModel } from '../models';

export class PluckGenericApiService {
  private axios: AxiosInstance;

  constructor () {
    this.axios = pluckApiInstance;
  }

  /**
   * Sends GET request to API and returns Promise of entity
   * @param url Url of the resource
   */
  get <T> (url: string): Promise<PluckApiReponseModel<T>> {
    return this.axios.get(url);
  }

  /**
   * Sends POST request to API and returns Promise of entity T2
   * @param url Url of the resource
   * @param entity Entity to post
   */
  post <T1, T2> (url: string, entity: T1): Promise<PluckApiReponseModel<T2>> {
    return this.axios.post(url, entity);
  }

  /**
   * Sends PUT request to API and returns Promise of entity T2
   * @param url Url of the resource
   * @param entity Entity to post
   */
  put <T1, T2> (url: string, entity: T1): Promise<PluckApiReponseModel<T2>> {
    return this.axios.put(url, entity);
  }

  /**
   * Sends DELETE request to API and returns Promise response
   * @param url Url of the resource
   * @param entity Entity to post
   */
  delete <T1, T2> (url: string, entity: T1): Promise<PluckApiReponseModel<T2>> {
    return this.axios.delete(url, entity);
  }
}
