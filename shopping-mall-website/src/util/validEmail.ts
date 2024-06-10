const validEmail = (email: string) => {
  if (!email) {
    return false;
  }

  let exp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  return exp.test(email);
};

export default validEmail;
