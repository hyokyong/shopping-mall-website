## 쇼핑몰 웹 서비스 구현

개발환경

- Next.js v14.0.4
- React.js v18.2.0
- styled-components
- recoil
- react-query

기능

- 토큰 인증 기반 로그인
- 회원 가입
- 사용자의 역할 별 기능 구현
- ...추가 예정

서버 API

- [mall service](https://github.com/hanyugyung/mall-service)

## 기능 명세서

API

- api 호출은 axios를 사용하며 공통 인스턴스를 생성하여 사용한다.
- api 인스턴스 명칭은 요청방식 + api 주소를 따른다.
- 토큰을 넣어 호출하는 api 인스턴스는 인터셉터를 리턴하며, 인터셉터 내부에서 header 추가 및 토큰 갱신 로직을 다룬다.
- api 인스턴스는 react-query로 감싸서 사용한다.

상태 관리

- 상태 관리는 recoil 을 사용한다.
- 토큰과 내정보는 recoil-persist를 사용하여 스토리지에 저장한다.

라우터

- 페이지 정보는 routeData에 정의한 값을 사용한다.

다국어

- i18n을 사용한다.
- 엑셀 파일을 변환한 한글, 영문 json 파일을 사용한다.

- ...추가 예정
