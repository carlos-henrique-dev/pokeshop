import { DefaultTheme } from "styled-components";
import { Themes } from "../../theme";

export const Types = {
  SELECT_THEME: "SELECT_THEME",
};

export type ThemeState = {
  theme: DefaultTheme;
};

const initialState: ThemeState = {
  theme: Themes.BulbasaurTheme,
};

type Actions = {
  type: string;
  payload: any;
};

export default function stepsReducer(state = initialState, { type, payload }: Actions) {
  switch (type) {
    case Types.SELECT_THEME:
      return { ...state, theme: Themes[payload] };

    default:
      return state;
  }
}

export function selectTheme(themeName: string) {
  return { type: Types.SELECT_THEME, payload: themeName };
}
