import React from 'react'
import Input from '../components/Input'
import { Button } from '../components/Buttons'
import { Link } from 'react-router-dom'
import SocialAuth from '../components/SocialAuth'

import * as Routes from '../Routes/routes'

export default function Login() {
  const [input, setInput] = React.useState('')

  const handleChange = event => {
    setInput(event.target.value)
  }

  const handleClick = () => {
    let name = document.querySelector('#email')
    let email = name.value
    alert(`thank you ${email}`)
  }

  return (
    <div className="base login__base">
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
        <p className="alt-text">Login with facebook or google</p>
        <SocialAuth className="social__auth flex" />
      </div>
    </div>
  )
}
