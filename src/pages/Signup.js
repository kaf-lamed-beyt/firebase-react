import React from 'react'
import { Button } from '../components/Buttons'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import SocialAuth from '../components/SocialAuth'

import * as Routes from '../Routes/routes'

export default function SignUp() {
  const [input, setInput] = React.useState('')

  const handleChange = event => {
    setInput(event.target.value)
  }

  const handleClick = () => {
    let name = document.querySelector('#name')
    let email = name.value
    alert(`thank you ${email}`)
  }

  return (
    <div className="base">
      <div className="form__base">
        <h2 className="form__title">Signup</h2>
        <form className="signup form" action="">
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
            default_text="emailaddress@example.com"
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
        <div className="flex alt">
          <Button className="btn btn-25 outline__primary" event={handleClick}>
            Sign up
          </Button>
          <p className="alt-text">
            Have an account already?{' '}
            <Link to={Routes.login} className="link__text__underline">
              sign in
            </Link>
          </p>
        </div>
        <p className="alt-text">Login with facebook or google</p>
        <SocialAuth className="social__auth flex" />
      </div>
    </div>
  )
}
