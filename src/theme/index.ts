import baseStyled, { ThemedStyledInterface, DefaultTheme } from "styled-components";

export const BulbasaurTheme: DefaultTheme = {
  colors: {
    main: "#49896F",
    secondary: "#B74555",
  },
};

export const CharmanderTheme: DefaultTheme = {
  colors: {
    main: "#F15F3E",
    secondary: "#FFE26F",
  },
};

export const SquirtleTheme: DefaultTheme = {
  colors: {
    main: "#CC6310",
    secondary: "#F5E97E",
  },
};

export const Themes: { [key: string]: DefaultTheme } = {
  BulbasaurTheme,
  CharmanderTheme,
  SquirtleTheme,
};

export const styled = baseStyled as ThemedStyledInterface<DefaultTheme>;
