// IMPORTS // ______________________________________________________________

import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// components imports
import Footer from './components/Footer'
import Header from './components/Header'
// import NotFound from './pages/NotFound'
import Homepage from './pages/Homepage' // styles imports
import SignIn from './pages/SignIn'
import User from './pages/User'
import NotFound from './pages/NotFound'
import store from './store/store'
// styles imports
import { GlobalStyle } from './styles/bases/GlobalStyle'

// JSX // _________________________________________________________________

/**
 * App's component to manage various routes
 * and display corresponding pages components
 * @returns {JSX}
 */

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <main className="main">
          <section>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/sign-in" component={SignIn} />
              <Route exact path="/user" component={User} />
              <Route component={NotFound} />
            </Switch>
          </section>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

// EXPORT // ______________________________________________________________

export default App
