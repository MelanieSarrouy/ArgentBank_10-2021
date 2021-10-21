// IMPORTS // ______________________________________________________________

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
// components imports
import Header from './components/Header'
// import NotFound from './pages/NotFound'
// import User from './pages/User'
import Homepage from './pages/Homepage'// styles imports
import SignIn from './pages/SignIn'
import { GlobalStyle } from './utils/styles/bases/GlobalStyle'

// JSX // _________________________________________________________________

/**
 * App's component to manage various routes 
 * and display corresponding pages components  
 * @returns {JSX}
 */

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <main className='main'>
        <section>
          <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/sign-in" component={SignIn} />

            {/* <Route exact path="/Login" component={Login} />
            <Route exact path="/user/:id?" component={User} /> */}
            {/* <Route path="/homepage" component={HomePageMocked} /> */}
            {/* <Route path="/loginbis" component={LoginPageMocked} />
            <Route path="/user" component={UserPageMocked} /> */}
            {/* <Route component={NotFound} /> */}
          </Switch>
        </section>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

// EXPORT // ______________________________________________________________

export default App