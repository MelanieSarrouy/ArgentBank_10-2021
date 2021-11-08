// IMPORTS // ______________________________________________________________

import { createReducer } from '@reduxjs/toolkit'
// actions imports
import {
  loadApiToken,
  loadApiTokenError,
  loadApiTokenSuccess,
} from '../actions/actionGetToken'

// REDUCER // ______________________________________________________________

// initial state
const initialStateToken = {
  isLoading: false,
  token: '',
  error: '',
}
// reducer
export const tokenReducer = createReducer(initialStateToken, (builder) => {
  return builder
    .addCase(loadApiToken, (draft) => {
      draft.isLoading = true
      return
    })
    .addCase(loadApiTokenSuccess, (draft, action) => {
      draft.isLoading = false
      draft.token = action.payload
      draft.error =  ''
      return
    })
    .addCase(loadApiTokenError, (draft, action) => {
      draft.isLoading = false
      draft.token = ''
      draft.error = action.payload
      return
    })
})
