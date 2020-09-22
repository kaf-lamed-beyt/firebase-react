import React from 'react'
import { Button } from '../components/Buttons'
import Input from '../components/Input'

export default function SignUp() {
  return (
    <div className="signup__base">
      <div className="form__base">
        <h2 className="form__title">Signup</h2>
        <form className="login form" action="">
          <Input
            type="email"
            name="email"
            id="email"
            value={input}
            event={handleChange}
            default_text="yourname@example.com"
          />
          <Input
            type="password"
            name="password"
            id="pwd"
            value={input}
            event={handleChange}
            default_text="password"
          />
         
          <Button className="btn login-btn">Login</Button>
        </form>
      </div>
    </div>
  )
}
