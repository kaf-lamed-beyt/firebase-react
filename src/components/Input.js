import React from 'react'

const Input = ({ type, name, id, event }) => {
  return (
    <input type={type} name={name} id={id} className="input" onChange={event} />
  )
}

export default Input
