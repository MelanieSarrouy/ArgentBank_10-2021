// IMPORTS // ______________________________________________________________

import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'

// CONSTANTS // ______________________________________________________________

/** 
 * Constants redux actions
 * @constant 
 * @type {string}
 */
const LOAD_EDIT_USER = 'LOAD_EDIT_USER'
const LOAD_EDIT_USER_SUCCESS = 'LOAD_EDIT_USER_SUCCESS'
const LOAD_EDIT_USER_ERROR = 'LOAD_EDIT_USER_ERROR'

const baseURL = 'http://localhost:3001/api/v1/user/'

// ACTIONS // ______________________________________________________________

/**
 * Redux actions edit user
 * @reduxAction
 */
export const loadApiEditUser = createAction(LOAD_EDIT_USER)

export const loadApiEditUserSuccess = createAction(
  LOAD_EDIT_USER_SUCCESS,
  (user) => {
    return {
      payload: user,
    }
  }
)

export const loadApiEditUserError = createAction(
  LOAD_EDIT_USER_ERROR,
  (error) => {
    return {
      payload: error,
    }
  }
)

/**
 * to edit user firstname and lastname with PUT method in API Call
 * @function
 * @name editUser
 * @param {string} firstName 
 * @param {string} lastName 
 * @returns {object}
 */
export const editUser = (firstName, lastName) => {
  const token = localStorage.getItem('token')
  return (dispatch) => {
    dispatch(loadApiEditUser())
    axios({
      method: 'PUT',
      url: baseURL + 'profile',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        firstName,
        lastName,
      },
    })
      .then((response) => {
        dispatch(loadApiEditUserSuccess(response.data))
      })
      .catch((error) => {
        dispatch(loadApiEditUserError(error.message))
      })
  }
}