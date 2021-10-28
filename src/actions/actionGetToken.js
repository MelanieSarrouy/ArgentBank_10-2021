import axios from 'axios'
import {
  LOAD_TOKEN,
  LOAD_TOKEN_SUCCESS,
  LOAD_TOKEN_ERROR,
} from '../utils/type/types'

const baseURL = 'http://localhost:3001/api/v1/user/'

const loadApiToken = () => {
  return {
    type: LOAD_TOKEN,
  }
}

const loadApiTokenSuccess = (token) => {
  return {
    type: LOAD_TOKEN_SUCCESS,
    payload: token,
  }
}

const loadApiTokenError = (error) => {
  return {
    type: LOAD_TOKEN_ERROR,
    payload: error,
  }
}

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
      })
      .catch((error) => {
        dispatch(loadApiTokenError(error.message))
      })
  }
}

