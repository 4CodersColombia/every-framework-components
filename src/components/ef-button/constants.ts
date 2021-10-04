export const CONST_SIZES_BUTTON = {
  LARGE: {
    'max-width': '325px',
    height: '38px',
    width:'100%',
  },
  MEDIUM: {
    'max-width': '251px',
    height: '34px',
    width:'100%',
  },
  SMALL: {
    'max-width': '177px',
    height: '30px',
    width:'100%',
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
