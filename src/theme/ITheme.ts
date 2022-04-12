/* eslint-disable @typescript-eslint/naming-convention */
type Color = string;
type Gradient = string;
type Value = number;
type FontFamily = string;
type FontSize = string;

export interface IPalette {
  Primary: {
    blue: Color;
    _blue: Color;
    sky: Color;
  };
  Neutral: {
    dark: Color;
    _dark: Color;
    darkGrey: Color;
    _darkGrey: Color;
    __darkGrey: Color;
    light: Color;
    lightGrey: Color;
    _lightGrey: Color;
  };
  Meaning: {
    red: Color;
  };
}

export interface ITheme {
  palette: IPalette;
  gradients: {
    blue: Gradient;
  };
  background: {
    dark: Color;
    _dark: Color;
    light: Color;
  };
  cmp: {
    textField: {
      light: {
        placeholder: Color;
        color: Color;
        border: {
          default: Color;
          active: Color;
          error: Color;
        };
        helper: Color;
      };
      dark: {
        placeholder: Color;
        color: Color;
        border: {
          default: Color;
          active: Color;
          error: Color;
        };
        helper: Color;
      };
    };
    button: {
      primary: {
        main: Color;
        active: Color;
        text: {
          main: Color;
          active?: Color;
        };
      };
      secondary: {
        main: Color;
        active: Color;
        text: {
          main: Color;
          active: Color;
        };
      };
      disable: {
        main: Color;
        text: {
          main: Color;
          active?: Color;
        };
      };
    };
  };
  border: {
    dark: {
      primary: Color;
      secondary: Color;
      ternary: Color;
    };
    light: {
      primary: Color;
      secondary: Color;
    };
    active: {
      primary: Color;
      secondary: Color;
    };
  };
  text: {
    dark: {
      primary: Color;
      secondary: Color;
      ternary: Color;
      quaternary: Color;
    };
    light: {
      primary: Color;
      secondary: Color;
      ternary: Color;
    };
    active: {
      primary: Color;
      secondary: Color;
    };
    error: {
      primary: Color;
    };
  };
  typography: {
    fontFamily: {
      light: FontFamily;
      regular: FontFamily;
      medium: FontFamily;
    };
    fontWeight: {
      light: Value;
      regular: Value;
      medium: Value;
    };
    letterSpaces: {
      M: string;
    };
    fontSize: {
      heading: {
        XXS: FontSize;
        XS: FontSize;
        S: FontSize;
        M: FontSize;
        L: FontSize;
        XL: FontSize;
        XXL: FontSize;
        XXXL: FontSize;
      };
      body: {
        M: FontSize;
      };
      caption: {
        M: FontSize;
      };
      button: {
        M: FontSize;
      };
      tag: {
        M: FontSize;
      };
    };
  };
  spacing: {
    level1: {
      XXXXS: string;
      XXXS: string;
      XXS: string;
      XS: string;
      S: string;
      M: string;
      L: string;
      XL: string;
      XXL: string;
      XXXL: string;
    };
    level2: {
      XXXS: string;
      XXS: string;
      XS: string;
      S: string;
      M: string;
      L: string;
      XL: string;
      XXL: string;
    };
  };
}
