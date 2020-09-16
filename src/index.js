import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './scss/app.scss'

import App from './components/App'
import SignUpPage from './components/SignUp'
import SignInPage from './components/Login'
import UserProfile from './components/User'
import HomePage from './components/Home'
import ForgotPassword from './components/ForgotPw'
import Admin from './components/Admin'

import * as Routes from './Routes/routes'

const index = () => {
  return (
    <div>
      <Router>
        {/* routes */}
        <Route exact path={Routes.landing} component={App} />
        <Route path={Routes.signup} component={SignUpPage} />
        <Route path={Routes.login} component={SignInPage} />
        <Route path={Routes.profile} component={UserProfile} />
        <Route path={Routes.home} component={HomePage} />
        <Route path={Routes.forgotPassword} component={ForgotPassword} />
        <Route path={Routes.admin} component={Admin} />
      </Router>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
