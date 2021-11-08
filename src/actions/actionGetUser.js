// IMPORTS // ______________________________________________________________
import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'

// CONSTANTS // ______________________________________________________________

/** 
 * Constants redux actions
 * @constant 
 * @type {string}
 */
const LOAD_GET_USER = 'LOAD_GET_USER'
const LOAD_GET_USER_SUCCESS = 'LOAD_GET_USER_SUCCESS'
const LOAD_GET_USER_ERROR = 'LOAD_GET_USER_ERROR'

const baseURL = 'http://localhost:3001/api/v1/user/'

// ACTIONS // ______________________________________________________________

/**
 * Redux actions get user
 * @reduxAction
 */

export const loadApiUser = createAction(LOAD_GET_USER)

export const loadApiUserSuccess = createAction(
  LOAD_GET_USER_SUCCESS,
  (user) => {
    return {
      payload: user,
    }
  }
)

export const loadApiUserError = createAction(LOAD_GET_USER_ERROR, (error) => {
  return {
    payload: error,
  }
})

/**
 * to get user token with POST method in API Call
 * @function
 * @name getUser
 * @param {string} token 
 * @returns {object}
 */
export const getUser = (token) => {
  return (dispatch) => {
    dispatch(loadApiUser())
    axios({
      method: 'POST',
      url: baseURL + 'profile',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch(loadApiUserSuccess(response.data))
      })
      .catch((error) => {
        dispatch(loadApiUserError(error.message))
      })
  }
}