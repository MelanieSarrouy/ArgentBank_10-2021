import axios from 'axios'
import { LOAD_EDIT_USER, LOAD_EDIT_USER_ERROR, LOAD_EDIT_USER_SUCCESS } from '../types/types'

const baseURL = 'http://localhost:3001/api/v1/user/'

const loadApiEditUser = () => {
  return {
    type: LOAD_EDIT_USER,
  }
}

const loadApiEditUserSuccess = (user) => {
  return {
    type: LOAD_EDIT_USER_SUCCESS,
    payload: user, 
  }
}

const loadApiEditUserError = (error) => {
  return {
    type: LOAD_EDIT_USER_ERROR,
    payload: error,
  }
}

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
    }).then((response) => {
      dispatch(loadApiEditUserSuccess(response.data))
    })
    .catch((error) => {
      dispatch(loadApiEditUserError(error.message))
    })
  }
}
