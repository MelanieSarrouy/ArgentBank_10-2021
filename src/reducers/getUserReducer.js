import {
  LOAD_GET_USER,
  LOAD_GET_USER_SUCCESS,
  LOAD_GET_USER_ERROR,
  LOGOUT,
  LOAD_EDIT_USER,
  LOAD_EDIT_USER_SUCCESS,
  LOAD_EDIT_USER_ERROR,
} from '../types/types'

const initialStateToken = {
  isLoading: false,
  isLogged: false,
  user: {},
  error: '',
}

const getUserReducer = (state = initialStateToken, action) => {
  switch (action.type) {
    case LOAD_GET_USER:
      return {
        ...state,
        isLoading: true,
      }
    case LOAD_GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogged: true,
        user: action.payload,
        error: '',
      }
    case LOAD_GET_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isLogged: false,
        user: {},
        error: action.payload,
      }

    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        isLogged: false,
        user: {},
        error: '',
      }

    case LOAD_EDIT_USER:
      return {
        ...state,
        isLoading: true,
      }
    case LOAD_EDIT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: '',
      }
    case LOAD_EDIT_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        user: {},
        error: action.payload,
      }

    default:
      return state
  }
}

export default getUserReducer
