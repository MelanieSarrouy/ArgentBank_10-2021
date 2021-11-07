import { loadApiUser, loadApiUserError, loadApiUserSuccess } from '../actions/actionGetUser'
import { logOut } from '../actions/actionLogout'
import { loadApiEditUser, loadApiEditUserSuccess, loadApiEditUserError } from '../actions/actionEditUser'

const initialStateToken = {
  isLoading: false,
  isLogged: false,
  user: {},
  error: '',
}

const getUserReducer = (state = initialStateToken, action) => {
  switch (action.type) {
    case loadApiUser.toString():
      return {
        ...state,
        isLoading: true,
      }
    case loadApiUserSuccess.toString():
      return {
        ...state,
        isLoading: false,
        isLogged: true,
        user: action.payload,
        error: '',
      }
    case loadApiUserError.toString():
      return {
        ...state,
        isLoading: false,
        isLogged: false,
        user: {},
        error: action.payload,
      }

    case logOut.toString():
      return {
        ...state,
        isLoading: false,
        isLogged: false,
        user: {},
        error: '',
      }

    case loadApiEditUser.toString():
      return {
        ...state,
        isLoading: true,
      }
    case loadApiEditUserSuccess.toString():
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: '',
      }
    case loadApiEditUserError.toString():
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
