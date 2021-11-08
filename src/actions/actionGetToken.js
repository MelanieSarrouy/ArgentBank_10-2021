// IMPORTS // ______________________________________________________________
import axios from 'axios'
import { getUser } from './actionGetUser'
import { createAction } from '@reduxjs/toolkit'

// CONSTANTS // ______________________________________________________________

/** 
 * Constants redux actions
 * @constant 
 * @type {string}
 */
const LOAD_TOKEN = 'LOAD_TOKEN'
const LOAD_TOKEN_SUCCESS = 'LOAD_TOKEN_SUCCESS'
const LOAD_TOKEN_ERROR = 'LOAD_TOKEN_ERROR'

const baseURL = 'http://localhost:3001/api/v1/user/'

// ACTIONS // ______________________________________________________________

/**
 * Redux actions get token
 * @reduxAction
 */
export const loadApiToken = createAction(LOAD_TOKEN)

export const loadApiTokenSuccess = createAction(LOAD_TOKEN_SUCCESS, (token) => {
  return {
    payload: { token }
  }
})

export const loadApiTokenError = createAction(LOAD_TOKEN_ERROR, (error) => {
  return {
    payload: { error }
  }
})

/**
 * to get user token with POST method in API Call
 * @function
 * @name getToken
 * @param {string} email 
 * @param {string} password 
 * @returns {object}
 */
export const getToken = (email, password) => {
  return (dispatch) => {
    dispatch(loadApiToken())
    axios
      .post(baseURL + 'login', {
        email,
        password,
      })
      .then((response) => {
        dispatch(loadApiTokenSuccess(response.data.body.token))
        localStorage.setItem('token', response.data.body.token)
        const token = localStorage.getItem('token')
        dispatch(getUser(token))
      })
      .catch((error) => {
        dispatch(loadApiTokenError(error.message))
      })
  }
}