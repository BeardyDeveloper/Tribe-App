import type { IPalette, ITheme } from './ITheme';

export const palette: IPalette = {
  Primary: {
    blue: '#4069FF',
    _blue: '#345AE5',
    sky: '#99DEFF',
  },
  Neutral: {
    dark: '#161B2C',
    _dark: '#242B40',
    darkGrey: '#6F7E90',
    _darkGrey: '#A5B0BD',
    __darkGrey: '#9EAAB9',
    light: '#FFFFFF',
    lightGrey: '#F7F9FC',
    _lightGrey: '#EFF2FA',
  },
  Meaning: {
    red: '#FF4040',
  },
};

export const lightBase: ITheme = {
  palette,
  gradients: {
    blue: 'linear-gradient(92.35deg, #244DE1 0.1%, #99DEFF 100.08%)',
  },
  background: {
    dark: palette.Neutral.dark,
    _dark: palette.Neutral._dark,
    light: palette.Neutral.light,
  },
  cmp: {
    textField: {
      light: {
        placeholder: palette.Neutral.darkGrey,
        color: palette.Neutral.light,
        border: {
          default: palette.Neutral._dark,
          active: palette.Primary.sky,
          error: palette.Meaning.red,
        },
        helper: palette.Meaning.red,
      },
      dark: {
        placeholder: palette.Neutral.darkGrey,
        color: palette.Neutral.dark,
        border: {
          default: palette.Neutral._darkGrey,
          active: palette.Primary._blue,
          error: palette.Meaning.red,
        },
        helper: palette.Meaning.red,
      },
    },
    button: {
      primary: {
        main: palette.Primary.blue,
        active: palette.Primary._blue,
        text: {
          main: palette.Neutral.light,
        },
      },
      secondary: {
        main: palette.Neutral.lightGrey,
        active: palette.Neutral.lightGrey,
        text: {
          main: palette.Neutral.dark,
          active: palette.Primary.blue,
        },
      },
      disable: {
        main: palette.Neutral._lightGrey,
        text: {
          main: palette.Neutral._darkGrey,
        },
      },
    },
  },
  border: {
    dark: {
      primary: palette.Neutral._dark,
      secondary: palette.Neutral.darkGrey,
      ternary: palette.Neutral._darkGrey,
    },
    light: {
      primary: palette.Neutral.lightGrey,
      secondary: palette.Neutral._lightGrey,
    },
    active: {
      primary: palette.Primary.sky,
      secondary: palette.Primary.blue,
    },
  },
  text: {
    dark: {
      primary: palette.Neutral.dark,
      secondary: palette.Neutral.darkGrey,
      ternary: palette.Neutral._darkGrey,
      quaternary: palette.Neutral.__darkGrey,
    },
    light: {
      primary: palette.Neutral.light,
      secondary: palette.Neutral.lightGrey,
      ternary: palette.Neutral._lightGrey,
    },
    active: {
      primary: palette.Primary.sky,
      secondary: palette.Primary.blue,
    },
    error: {
      primary: palette.Meaning.red,
    },
  },
  typography: {
    fontFamily: {
      light: 'Poppins',
      regular: 'Poppins',
      medium: 'Poppins',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
    },
    letterSpaces: {
      M: '6px',
    },
    fontSize: {
      heading: {
        XXS: '16px',
        XS: '18px',
        S: '20px',
        M: '24px',
        L: '28px',
        XL: '32px',
        XXL: '48px',
        XXXL: '56px',
      },
      body: {
        M: '14px',
      },
      caption: {
        M: '12px',
      },
      button: {
        M: '14px',
      },
      tag: {
        M: '14px',
      },
    },
  },
  spacing: {
    level1: {
      XXXXS: '2px',
      XXXS: '4px',
      XXS: '8px',
      XS: '10px',
      S: '12px',
      M: '16px',
      L: '18px',
      XL: '20px',
      XXL: '24px',
      XXXL: '28px',
    },
    level2: {
      XXXS: '32px',
      XXS: '40px',
      XS: '48px',
      S: '56px',
      M: '64px',
      L: '76px',
      XL: '96px',
      XXL: '128px',
    },
  },
};
