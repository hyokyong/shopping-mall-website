const validPassword = (password: string) => {
  const isEmptyValue = password.length === 0;
  if (isEmptyValue) {
    return isEmptyValue;
  }
  let exp = /^(?=.*[a-zA-Z])(?=.*[0-9]).[^\s]{5,15}$/g;
  return exp.test(password);
};

export default validPassword;
