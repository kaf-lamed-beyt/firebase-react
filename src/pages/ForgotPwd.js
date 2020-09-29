import React from 'react'
import Input from '../components/Input'
import { Button } from '../components/Buttons'

import { Link } from 'react-router-dom'
import * as Routes from '../Routes/routes'

export default function ForgotPassword() {
  const [input, setInput] = React.useState("")

  const handleChange = event => {
    setInput(event.target.value)
  }

  const handleClick = () => {
    let name = document.querySelector('#email')
    let email = name.value
    alert(`thank you ${email}`)
  }

  return (
    <div className="base">
      <div className="form__base">
        <h2 className="form__title">Forgot Password</h2>
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
          <Button className="btn btn-75 outline__primary" event={handleClick}>
            Reset
          </Button>
          <p className="alt-text">
            <Link to={Routes.login} className="link__text__underline">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
