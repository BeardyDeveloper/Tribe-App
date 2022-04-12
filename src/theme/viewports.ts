export const breakPoints = {
  mobileS: 400,
  mobile: 600,
  tablet: 1023,
  laptop: 1239,
  desktop: 1439,
};

export const device = {
  mobile: `(max-width: ${breakPoints.mobile}px)`, // all mobiles
  tablet: `(min-width: ${breakPoints.mobile + 1}px) and (max-width: ${
    breakPoints.tablet
  }px)`,
  laptop: `(min-width: ${breakPoints.tablet + 1}px) and (max-width: ${
    breakPoints.laptop
  }px)`,
  desktop: `(min-width: ${breakPoints.laptop + 1}px) and (max-width: ${
    breakPoints.desktop
  }px)`,
};

export const below = {
  mobileS: `(max-width: ${breakPoints.mobileS}px)`, // includes  small mobile
  mobile: `(max-width: ${breakPoints.mobile}px)`, // includes    mobile
  tablet: `(max-width: ${breakPoints.tablet}px)`, // includes    mobile & tablet
  laptop: `(max-width: ${breakPoints.laptop}px)`, // includes    mobile & tablet & laptop (not desktop)
  desktop: `(max-width: ${breakPoints.desktop}px)`, // includes  mobile & tablet & laptop & desktop
};

export const above = {
  mobile: `(min-width: ${breakPoints.mobile + 1}px)`, // includes    mobile & tablet & laptop & desktop
  tablet: `(min-width: ${breakPoints.tablet + 1}px)`, // includes    laptop & desktop
  laptop: `(min-width: ${breakPoints.laptop + 1}px)`, // includes    desktop
  desktop: `(min-width: ${breakPoints.desktop + 1}px)`, // includes  >desktop
};
