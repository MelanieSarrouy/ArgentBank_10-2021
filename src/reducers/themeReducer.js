import { toggleTheme } from "../actions/actionTheme";


export const themeReducer = (state = 'light', action) => {
  if (action.type === toggleTheme.toString()) {
    return state === 'light' ? 'dark' : 'light'
  }
  return state
}
