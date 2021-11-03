import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import getUserReducer from '../reducers/getUserReducer'
import tokenReducer from '../reducers/getTokenReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { themeReducer } from '../reducers/themeReducer'

const rootReducer = combineReducers({
  token: tokenReducer,
  getUser: getUserReducer,
  theme: themeReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
