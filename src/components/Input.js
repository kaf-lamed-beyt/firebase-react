import React from 'react'
import PropTypes from 'prop-types'

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

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

export default Input
