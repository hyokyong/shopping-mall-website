import { getRecoil } from 'recoil-nexus';
import { rfTokenState, tokenState } from '@/recoil/auth/atom';
import { AuthType } from '@/type/common/authType';
// import { postRequestToken } from '@/api/auth/authApi';
import { AxiosInstance, AxiosInterceptorManager, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

interface CustomInstance extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<InternalAxiosRequestConfig<any>>;
    response: AxiosInterceptorManager<AxiosResponse<AuthType>>;
  };
}

export function setInterceptors(axiosService: CustomInstance) {
  axiosService.interceptors.request.use(
    async (config: any) => {
      // 요청을 보내기 전에 어떤 처리를 할 수 있다.
      const token = getRecoil(tokenState);
      /** to be: header에 토큰 담는 로직 추가 */
      // config.headers['Bearer'] = token;
      return config;
    },
    (error) => {
      // 요청이 잘못되었을 때 에러가 컴포넌트 단으로 오기 전에 어떤 처리를 할 수 있다.
      return Promise.reject(error);
    },
  );

  axiosService.interceptors.response.use(
    (response) => {
      // 서버에 요청을 보내고 나서 응답을 받기 전에 어떤 처리를 할 수 있다.
      return response;
    },
    async (error) => {
      // 응답이 에러인 경우에 미리 전처리할 수 있다.
      if (error.response) {
        const {
          config,
          response: { status },
        } = error;
        if ([401].includes(status)) {
          try {
            /** to be: 리프레시 토큰으로 토큰 재발급 기능 추가 */
            // const rfToken = getRecoil(rfTokenState);
            // await postRequestToken({ rfToken: rfToken });
            return axiosService(config);
          } catch (error) {
            console.error(error);
          }
        }
      }
      return Promise.reject(error);
    },
  );
  return axiosService;
}
