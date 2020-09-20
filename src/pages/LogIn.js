import React from 'react'
import Input from '../components/Input'
import { LoginBtn } from '../components/Buttons'

export default function Login() {
  const [input, setInput] = React.useState('')

  const handleChange = event => {
    setInput(event.target.value)
  }

  return (
    <div className="login__base">
      <h1>Login</h1>
      <div className="form__base">
        <form className="login form">
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
          <LoginBtn className="btn" color="rgb(2, 10, 85)" />
        </form>
      </div>
    </div>
  )
}
