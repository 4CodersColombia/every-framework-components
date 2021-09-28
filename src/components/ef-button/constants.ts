export const CONST_SIZES_BUTTON = {
  LARGE: {
    width: '325px',
    height: '38px',
    maxWidth: '251px',
  },
  MEDIUM: {
    width: '251px',
    height: '34px',
    maxWidth: '177px',
  },
  SMALL: {
    width: '177px',
    height: '30px',
    maxWidth: '110px',
  },
} as const;

export const CONST_COLORS_BUTTON = {
  PRIMARY: {
    DISABLED: '#67BF72',
    ENABLED: '#67BF72',
  },
  SECONDARY: {
    DISABLED: '#FFFFFF',
    ENABLED: '#091731',
  },
  TRANSPARENT: 'rgba(0,0,0,0)',
} as const;
