import React from 'react'

export const useInput = () => {
  const [input, setInput] = React.useState('')

  const handleChange = event => {
    setInput(event.target.value)
  }
}
