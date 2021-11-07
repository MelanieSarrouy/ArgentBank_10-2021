import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'

const baseURL = 'http://localhost:3001/api/v1/user/'

export const loadApiUser = createAction('LOAD_GET_USER')

export const loadApiUserSuccess = createAction('LOAD_GET_USER_SUCCESS', (user) => {
  return {
    payload: user
  }
})

export const loadApiUserError = createAction('LOAD_GET_USER_ERROR', (error) => {
  return {
    payload: error
  }
})

export const getUser = (token) => {
  return (dispatch) => {
    dispatch(loadApiUser())
    axios({
      method: "POST",
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








