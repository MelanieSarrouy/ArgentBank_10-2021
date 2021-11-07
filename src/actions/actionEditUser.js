import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'

const baseURL = 'http://localhost:3001/api/v1/user/'

export const loadApiEditUser = createAction('LOAD_EDIT_USER')

export const loadApiEditUserSuccess = createAction(
  'LOAD_EDIT_USER_SUCCESS',
  (user) => {
    return {
      payload: user,
    }
  }
)

export const loadApiEditUserError = createAction(
  'LOAD_EDIT_USER_ERROR',
  (error) => {
    return {
      payload: error,
    }
  }
)

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
