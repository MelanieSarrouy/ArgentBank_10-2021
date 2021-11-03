import { LOGOUT } from "../types/types"

export const logout = () => {
  localStorage.removeItem('token')
  return {
    type: LOGOUT,
  }
}
