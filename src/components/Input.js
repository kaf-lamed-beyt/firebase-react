import React from 'react'


const Input = ({ type, name, id, event, default_text }) => {
  return (
    <div className="input">
      <input
        type={type}
        name={name}
        id={id}
        className="form__control"
        onChange={event}
        placeholder={default_text}
      />
    </div>
  )
}

export default Input
