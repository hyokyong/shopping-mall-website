type errorCodeType = {
  [key: string]: {
    [key: number]: string;
  };
};

export const errorCode: errorCodeType = {
  common: {
    400: 'error_popup', // 오류가 발생했습니다.
    401: 'session_popup', // 로그인 세션이 만료
    403: 'authority_popup', // 권한 없음
    500: 'error_popup',
    404: 'error_popup',
  },
  login: {
    1001: `loginError.1001`, // ERROR_VIVAR_INVALID_SIGNATURE
    1003: `loginError.1003`, // 이미 로그인 상태인 경우
    1005: `loginError.1005`, // 로그인 아이디가 제한사항에 걸린 경우
    400: `loginError.400`, // 점검/매뉴얼 권한 미 보유자
    401: `loginError.401`, // 권한 없음
    403: `loginError.403`, // 아이디 또는 비밀번호 확인
    404: `loginError.404`, // 아이디 또는 비밀번호 확인
    409: `loginError.409`, // 사용 정지된 회사의 계정
    500: `loginError.500`, // server error
    9999: `loginError.9999`, // unknown error
  },
  logout: {
    1001: `logoutError.1001`,
    1003: `logoutError.1003`,
  },
  changePassword: {
    400: `changePasswordError.400`,
    401: `changePasswordError.401`,
    403: `changePasswordError.403`,
    500: `changePasswordError.500`,
    1001: `changePasswordError.1001`,
    1003: `changePasswordError.1003`,
  },
};

const getErrorMessage = (type: string, code: number) => {
  return { value: errorCode[type][code] };
};

export default getErrorMessage;
