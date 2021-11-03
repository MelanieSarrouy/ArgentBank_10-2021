import { SET_THEME, TOGGLE_THEME } from "../types/types";


export const themeReducer = (state = 'light', action) => {
  if (action.type === TOGGLE_THEME) {
    return state === 'light' ? 'dark' : 'light'
  }
  if (action.type === SET_THEME) {
    return action.payload
  }
  return state
}
