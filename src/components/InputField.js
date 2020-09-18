import React from 'react'

const InputField = ({ labelValue, label}) => {
  return (
    <div className="input__field">
      <label htmlFor={label}>{labelValue}</label>
    </div>
  )
}

export default InputField
