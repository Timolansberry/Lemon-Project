// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;

      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      highlightLight: string;
      highlightDark: string;
    };
    border: {
      radius: string;
    };
    font: {
      family: {
        primary: string;
        secondary: string;
      };
      weight: {
        regular: number;
        medium: number;
        bold: number;
        extraBold: number;
      };
      size: {
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
      };
    };
  }
}
