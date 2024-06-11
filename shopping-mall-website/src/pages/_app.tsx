import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { I18nextProvider, useTranslation } from 'react-i18next';
import Head from 'next/head';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/reactQuery/queryClient';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import RecoilNexus, { getRecoil } from 'recoil-nexus';
import { globalModalState } from '@/recoil/globalModal/atom';
import Footer from '@/components/footer/footer';
import Gnb from '@/components/gnb';
import { GlobalModal } from '@/components/modal';
import ToastProvider from '@/components/toast/toastProvider';
import isNotChromeBrowser from '@/util/isNotChromeBrowser';
import { NONE_HEADER_PAGES, NONE_SIDEBAR_PAGES, SIMPLE_PAGES } from '@/const/hasPageComponent';
import { headData } from '@/const/headData';
import WithRouterGuard from '@/hoc/WithRouterGuard';
import { ROUTE_PATH } from '@/router/routeData';
import GlobalStyle from '@/styles/globalStyle';
import { theme } from '@/styles/theme';
import i18n from '@/translation';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RecoilNexus />
        <I18nextProvider i18n={i18n}>
          {/* <Translation /> */}
          <ThemeProvider theme={theme}>
            <ToastProvider>
              <WithRouterGuard>
                <App Component={Component} pageProps={pageProps} router={router} />
              </WithRouterGuard>
              <GlobalModal />
            </ToastProvider>
          </ThemeProvider>
        </I18nextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
