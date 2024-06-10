const isNotChromeBrowser = () => {
  const agent = navigator.userAgent.toLowerCase();
  return agent.indexOf('chrome') === -1 || agent.indexOf('edg') !== -1;
};

export default isNotChromeBrowser;
