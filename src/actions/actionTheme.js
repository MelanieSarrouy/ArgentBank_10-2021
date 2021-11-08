// IMPORTS // ______________________________________________________________
import { createAction } from "@reduxjs/toolkit";

// CONSTANTS // ______________________________________________________________

/** 
 * Constants redux actions
 * @constant 
 * @type {string}
 */
const TOGGLE_THEME = 'TOGGLE_THEME'

// ACTIONS // ______________________________________________________________

/**
 * Redux actions toggle theme
 * @reduxAction
 */

export const toggleTheme = createAction(TOGGLE_THEME)
