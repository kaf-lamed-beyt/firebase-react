import React from 'react'
import InputField from './InputField'
import Input from './Input'

export default function Login() {
  const [input, setInput] = React.useState('')

  const handleChange = event => {
    setInput(event.target.value)
  }

  return (
    <div className="login__base">
      <h1>Login</h1>
      <div className="form-base">
        <form>

            <Input
              type="text"
              name="name"
              id="name"
              value={input}
              event={handleChange}
            />

        </form>
      </div>
    </div>
  )
}
