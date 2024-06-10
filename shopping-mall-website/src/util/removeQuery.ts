const removeQuery = (path: string) => {
  // 쿼리 파라미터가 있는지 확인
  const hasQuery = path?.includes('?');

  // 쿼리 파라미터가 있는 경우 ? 이후의 문자열을 삭제, 없는 경우 그대로 유지
  const resultString = hasQuery ? path?.substring(0, path?.indexOf('?')) : path;
  return resultString;
};

export default removeQuery;
