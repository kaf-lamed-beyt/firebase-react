import React from 'react'
import Input from '../components/Input'
import { Button } from '../components/Buttons'
import { Link } from 'react-router-dom'

import * as Routes from '../Routes/routes'

export default function Login() {
  const [input, setInput] = React.useState('')

  const handleChange = event => {
    setInput(event.target.value)
  }

  return (
    <div className="login__base">
      <div className="form__base">
        <h2 className="form__title">Login</h2>
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
        </form>
        <Button className="btn outline__primary">Login</Button>
        <p className="alt-text">
          Don't have an account? <Link to={Routes.signup}>signup</Link>
        </p>
      </div>
    </div>
  )
}
