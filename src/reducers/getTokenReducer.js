import { loadApiToken, loadApiTokenError, loadApiTokenSuccess } from '../actions/actionGetToken'

const initialStateToken = {
  isLoading: false,
  token: '',
  error: '',
}

const tokenReducer = (state = initialStateToken, action) => {
  switch (action.type) {
    case loadApiToken.toString():
      return {
        ...state,
        isLoading: true
      }
    case loadApiTokenSuccess.toString():
      return {
        ...state,
        isLoading: false,
        token: action.payload,
        error: ''
      }
    case loadApiTokenError.toString():
      return {
        ...state,
        isLoading: false,
        token: '',
        error: action.payload
      }
    default:
      return state
  }
}

export default tokenReducer