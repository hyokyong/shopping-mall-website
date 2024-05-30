const mediaSizes = {
  mobile: 480,
  tablet: 768,
  desktop: 1280,
  desktopS: 1760,
  desktopM: 1920,
  desktopL: 2220,
};

const media = {
  desktopL: `@media only screen and (max-width: ${mediaSizes.desktopL}px)`,
  desktopM: `@media only screen and (max-width: ${mediaSizes.desktopM}px)`,
  desktopS: `@media only screen and (max-width: ${mediaSizes.desktopS}px)`,
  desktop: `@media only screen and (max-width: ${mediaSizes.desktop}px)`,
  tablet: `@media only screen and (max-width: ${mediaSizes.tablet}px)`,
  mobile: `@media only screen and (max-width: ${mediaSizes.mobile}px)`,
};

export { media };
