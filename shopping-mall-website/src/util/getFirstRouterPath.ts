const getRouterPath = (router: any) => {
  const pathName = router.pathname.split('/')[1];
  return `/${pathName}`;
};

export default getRouterPath;
