import axios, { ResponseType } from 'axios';
import { setInterceptors } from './interceptors';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
const AXIOS_TIMEOUT = 18000;
const AXIOS_HEADERS = {
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  'Content-Type': 'application/json; charset=utf-8',
};

/** 인증 X */
const createAxios = (originUrl: string) => {
  return axios.create({
    baseURL: `${originUrl}/api`,
    timeout: AXIOS_TIMEOUT,
    headers: AXIOS_HEADERS,
  });
};

/** 인증 필요 */
function createAxiosWithAuth(originUrl: string, url: string, responseType?: ResponseType) {
  const axiosService = axios.create({
    baseURL: `${originUrl}/api/${url}`,
    timeout: AXIOS_TIMEOUT,
    responseType: responseType,
    headers: AXIOS_HEADERS,
  });
  return setInterceptors(axiosService);
}

/** axios 인스턴스 생성 */
export const axiosService = createAxios(API_URL);
export const axiosUsers = createAxiosWithAuth(API_URL, 'users');
export const axiosPartners = createAxiosWithAuth(API_URL, 'partners');
export const axiosOrders = createAxiosWithAuth(API_URL, 'orders');
export const axiosItems = createAxiosWithAuth(API_URL, 'items');
