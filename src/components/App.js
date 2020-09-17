import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './Navigation'
import LandingPage from './Welcome'
import SignUpPage from './Signup'
import SignInPage from './LogIn'
import UserProfile from './User'
import Home from './HomePage'
import ForgotPassword from './ForgotPwd'
import Admin from './Admin.js'

import * as Routes from '../Routes/routes'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app__base">
          <hr />
          {/* routes */}
          <Route exact path={Routes.landing} component={LandingPage} />
          <Route path={Routes.signup} component={SignUpPage} />
          <Route path={Routes.login} component={SignInPage} />
          <Route path={Routes.profile} component={UserProfile} />
          <Route path={Routes.home} component={Home} />
          <Route path={Routes.forgotPassword} component={ForgotPassword} />
          <Route path={Routes.admin} component={Admin} />
          <Navigation />
        </div>
      </Router>
    )
  }
}

export default App
