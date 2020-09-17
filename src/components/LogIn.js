import React from 'react'
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
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            name="name"
            id="name"
            value={input}
            event={handleChange}
          />
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            id="email"
            value={input}
            event={handleChange}
          />
        </form>
      </div>
    </div>
  )
}
