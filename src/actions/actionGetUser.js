import axios from 'axios'
import { LOAD_GET_USER, LOAD_GET_USER_SUCCESS, LOAD_GET_USER_ERROR } from '../types/types'

const baseURL = 'http://localhost:3001/api/v1/user/'

const loadApiUser = () => {
  return {
    type: LOAD_GET_USER,
  }
}

const loadApiUserSuccess = (user) => {
  return {
    type: LOAD_GET_USER_SUCCESS,
    payload: user,
  }
}

 
const loadApiUserError = (error) => {
  return {
    type: LOAD_GET_USER_ERROR,
    payload: error,
  }
}

export const getUser = (token, password) => {
  return (dispatch) => {
    dispatch(loadApiUser())
    axios({
      method: "POST",
      url: baseURL + 'profile',
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch(loadApiUserSuccess(response.data))
      localStorage.setItem('email', response.data.body.email)
      localStorage.setItem('password', password)
    })
    .catch((error) => {
      dispatch(loadApiUserError(error.message))
    })
  }
}








