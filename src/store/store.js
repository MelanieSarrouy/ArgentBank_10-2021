import getUserReducer from '../reducers/getUserReducer'
import tokenReducer from '../reducers/getTokenReducer'
import { themeReducer } from '../reducers/themeReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    token: tokenReducer,
    getUser: getUserReducer,
    theme: themeReducer,
  },
})

export default store
