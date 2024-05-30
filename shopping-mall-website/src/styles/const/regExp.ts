const regExp = {
  loginId: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*[a-zA-Z])(?=.*[0-9])(?!.*[\sㄱ-ㅎㅏ-ㅣ가-힣]).{6,16}$/,
};

export default regExp;
