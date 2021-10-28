import axios from 'axios'
import { LOAD_GET_USER, LOAD_GET_USER_SUCCESS, LOAD_GET_USER_ERROR } from '../utils/type/types'

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

export const getUser = (token) => {
  return (dispatch) => {
    dispatch(loadApiUser())
    axios.post(baseURL + 'profile', {
      headers: { Authorization: `Bearer ${token}`},
    })
    .then((response) => {
      console.log(response.data.body)
      dispatch(loadApiUserSuccess(response.data.body))
    })
    .catch((error) => {
      dispatch(loadApiUserError(error.message))
    })
  }
}
