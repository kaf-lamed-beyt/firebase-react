import React from 'react'
import Input from '../components/Input'
import { Button } from '../components/Buttons'

export default function ForgotPassword() {
  return (
    <div className="forgot__base">
      <h1>Forgot Password</h1>
      <div className="form__base">
        <h2 className="form__title">Login</h2>
        <form className="login form" action="">
          <Input
            type="email"
            name="email"
            id="email"
            value={input}
            event={handleChange}
            default_text="emailaddress@example.com"
          />
        </form>
        <div className="flex">
          <Button className="btn btn-25 outline__primary" event={handleClick}>
            Login
          </Button>
          <p className="alt-text">
            Don't have an account?{' '}
            <Link to={Routes.signup} className="link__text__underline">
              signup
            </Link>
          </p>
        </div>
        <p className="alt-text">
          <Link to={Routes.forgotPassword} className="link__text__underline">
            Forgot password?
          </Link>
        </p>
        <p className="alt-text">Login with facebook or google</p>
        <SocialAuth className="social__auth flex" />
      </div>
    </div>
  )
}
