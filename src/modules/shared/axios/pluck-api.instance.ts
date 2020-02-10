import axios from 'axios';
import { requestInterceptor } from '../interceptors/interceptors';

// creating base instance
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: { 'content-type': 'application/json' }
});

// adding interceptor
instance.interceptors.request.use(
  request => requestInterceptor(request)
);

export const pluckApiInstance = instance;
