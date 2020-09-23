import React from 'react'
import { Button } from '../components/Buttons'
import { Link } from 'react-router-dom'
import Input from '../components/Input'

import * as Routes from '../Routes/routes'

export default function SignUp() {
  const [input, setInput] = React.useState('')

  const handleChange = event => {
    setInput(event.target.value)
  }

  return (
    <div className="signup__base">
      <div className="form__base">
        <h2 className="form__title">Signup</h2>
        <form className="login form" action="">
          <Input
            type="name"
            name="name"
            id="name"
            value={input}
            event={handleChange}
            default_text="Enter your fullname"
          />
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
          <Input
            type="password"
            name="password"
            id="pwd"
            value={input}
            event={handleChange}
            default_text="password again"
          />
        </form>
        <Button className="btn login-btn">Sign up</Button>
        <p className="alt-text">
          Have an account already? <Link to={Routes.login}>sign in</Link>
        </p>
      </div>
    </div>
  )
}
