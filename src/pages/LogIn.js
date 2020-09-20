import React from 'react'
import Input from '../components/Input'
import { Button } from '../components/Buttons'

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
         
          <Button className="btn" color="rgb(2, 10, 85)">Login</Button>
        </form>
      </div>
    </div>
  )
}
