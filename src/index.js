// IMPORTS // ______________________________________________________________

import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
// components imports
import { App } from './App'

// Rendering elements in the root DOM node // ______________________________

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
