// IMPORTS // ______________________________________________________________
import { createAction } from "@reduxjs/toolkit"

// CONSTANTS // ______________________________________________________________

/** 
 * Constants redux actions
 * @constant 
 * @type {string}
 */

const LOGOUT = 'LOGOUT'

// ACTIONS // ______________________________________________________________

/**
 * Redux actions logout
 * @reduxAction
 */


export const logOut = createAction(LOGOUT)

/**
 * to log out and unstock token
 * @function
 * @name logout
 * @returns {object}
 */
export const logout = () => {
  localStorage.removeItem('token')
  return (dispatch) => {
    dispatch(logOut())
  }
}