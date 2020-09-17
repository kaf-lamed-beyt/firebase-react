import React from 'react'

const Input = ({ type, name, id, event }) => {
  return <input type={type} name={name} id={id} onChange={event} />
}

export default Input
