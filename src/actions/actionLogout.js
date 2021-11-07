import { createAction } from "@reduxjs/toolkit"

export const logOut = createAction('LOGOUT')

export const logout = () => {
  localStorage.removeItem('token')
  return (dispatch) => {
    dispatch(logOut())
  }
}