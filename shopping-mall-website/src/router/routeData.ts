import { routeDataType } from './routeDataType';

/** 라우트 경로 */
export const ROUTE_PATH: routeDataType = {
  HOME: '/',
  LOGIN: '/login',
  SIGN_UP: '/sign-up', // 회원가입
  ITEM_LIST: '/item/list', // 상품 목록
  ITEM_DETAIL: '/item/[itemId]', // 상품 상세
  ITEM_REGISTER: '/item/register', // 상품 등록
  ORDER: '/order', // 상품 주문
  PARTNER_REGISTER: '/partner/register', // 파트너 등록
  404: `/404`, // 404 페이지
  FORBIDDEN: `/forbidden`, // 접근 제한
};

/** 인증 없이 접근 가능한 라우트 경로 */
export const ROUTE_NO_REQUIRED_AUTH = [
  ROUTE_PATH['LOGIN'],
  ROUTE_PATH['SIGN_UP'],
  ROUTE_PATH['404'],
  ROUTE_PATH['FORBIDDEN'],
];

/** CUSTOMER 접근 가능 라우트 경로 */
export const ROUTE_CUSTOMER_PATH = [ROUTE_PATH['ITEM_LIST'], ROUTE_PATH['ITEM_DETAIL']];

/** PARTNER 접근 가능 라우트 경로 */
export const ROUTE_PARTNER_PATH = [ROUTE_PATH['ITEM_REGISTER']];

/** ADMIN 접근 가능 라우트 경로 */
export const ROUTE_ADMIN_PATH = [ROUTE_PATH['PARTNER_REGISTER']];

/** Footer 적용 페이지 */
export const HAS_FOOTER_PAGES = [ROUTE_PATH['LOGIN'], ROUTE_PATH['FORBIDDEN'], ROUTE_PATH['404']];

/** GNB 미적용 페이지 */
export const NONE_GNB_PAGES = [ROUTE_PATH['LOGIN'], ROUTE_PATH['SIGN_UP']];
