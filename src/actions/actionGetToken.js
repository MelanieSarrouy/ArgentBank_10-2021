import axios from 'axios'
import { getUser } from './actionGetUser'
import { createAction } from '@reduxjs/toolkit'

const baseURL = 'http://localhost:3001/api/v1/user/'

export const loadApiToken = createAction('LOAD_TOKEN')

export const loadApiTokenSuccess = createAction('LOAD_TOKEN_SUCCESS', (token) => {
  return {
    payload: { token }
  }
})

export const loadApiTokenError = createAction('LOAD_TOKEN_ERROR', (error) => {
  return {
    payload: { error }
  }
})

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
