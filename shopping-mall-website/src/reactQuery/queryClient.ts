import { QueryCache, QueryClient } from '@tanstack/react-query';
import { setRecoil } from 'recoil-nexus';
import { globalModalState } from '@/recoil/globalModal/atom';
// import { logout } from '@/util/logout';
import getErrorMessage from '@/api/getErrorMessage';
import axios, { AxiosPromise } from 'axios';
import { t } from 'i18next';

export function queryErrorHandler(error: Error): AxiosPromise {
  if (axios.isAxiosError(error) && error.response) {
    const { value } = getErrorMessage('common', error.response.status);
    const errorMsg = t(value) || `[${error.response.status}] ${t('error_popup')}`;

    setRecoil(globalModalState, {
      isShow: true,
      content: errorMsg,
      // onCallback: error.response.status === 401 ? logout : undefined,
    });
  }
  return Promise.reject(error.message);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      gcTime: 5 * 60 * 1000, // 5 min
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 1,
      enabled: false, // disable this query from automatically running
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
});
