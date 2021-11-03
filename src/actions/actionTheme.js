import { TOGGLE_THEME, SET_THEME } from "../types/types";

export const toggleTheme = () => {
  return {
    type: TOGGLE_THEME,
  }
}

export const setTheme = (theme = 'light') => {
  return {
    type: SET_THEME,
    payload: theme,
  }
}

