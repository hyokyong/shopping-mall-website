import { axiosService } from '@/api/axiosInstance';
// import { PostProfileRequestType, PutProfileRequestType } from '@/type/profile';
// import createQueryString, { queryDataType } from '@/util/createQueryString';
// import { PutChangePasswordReqType, PutResetPasswordReqType, PutUsersMyInfoReqType } from './usersApi.type';

/** 유저 회원 가입 */
export const postUsersSignUp = async () => {
  const { data } = await axiosService.get(`myInfo`);
  return data;
};

/** 유저 로그인 */
export const postUsersLogin = async () => {
  const { data } = await axiosService.get('/roleList');
  return data;
};

//받아온값 뭔지 써주는게 일반적인지?
