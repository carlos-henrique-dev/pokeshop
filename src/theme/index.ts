import baseStyled, { ThemedStyledInterface, DefaultTheme } from "styled-components";

/* 
color scheme fonts:
Bulbasaur: https://www.schemecolor.com/bulbasaur-pokemon-colors.php
Charmander: https://www.schemecolor.com/charmander-pokemon-colors.php
Squirtle: https://www.schemecolor.com/squirtle-pokemon-colors.php
*/

export const BulbasaurTheme: DefaultTheme = {
  name: "BulbasaurTheme",
  colors: {
    main: "#49896F",
    secondary: "#BD92AF",
    firstVariant: "#89C893",
    secondVariant: "#B74555",
    thirdVariant: "#92D1B3",
  },
};

export const CharmanderTheme: DefaultTheme = {
  name: "CharmanderTheme",
  colors: {
    main: "#F15F3E",
    secondary: "#FFE26F",
    firstVariant: "#FCF0DE",
    secondVariant: "#ffffff",
    thirdVariant: "#F4B185",
  },
};

export const SquirtleTheme: DefaultTheme = {
  name: "SquirtleTheme",
  colors: {
    main: "#CC6310",
    secondary: "#DF807E",
    firstVariant: "#55A3AB",
    secondVariant: "#F5E97E",
    thirdVariant: "#A2D7D5",
  },
};

export const Themes: { [key: string]: DefaultTheme } = {
  BulbasaurTheme,
  CharmanderTheme,
  SquirtleTheme,
};

export const styled = baseStyled as ThemedStyledInterface<DefaultTheme>;
