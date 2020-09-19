import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './Navigation'
import Index from '../pages/index'
import SignUpPage from '../pages/Signup'
import SignInPage from '../pages/LogIn'
import UserProfile from '../pages/User'
import Home from '../pages/HomePage'
import ForgotPassword from '../pages/ForgotPwd'
import Admin from '../pages/admin/Admin.js'

import * as Routes from '../Routes/routes'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app__base">
          <Navigation />
          {/* routes */}
          <Switch>
            <Route exact path={Routes.landing} component={Index} />
            <Route path={Routes.signup} component={SignUpPage} />
            <Route path={Routes.login} component={SignInPage} />
            <Route path={Routes.profile} component={UserProfile} />
            <Route path={Routes.home} component={Home} />
            <Route path={Routes.forgotPassword} component={ForgotPassword} />
            <Route path={Routes.admin} component={Admin} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
