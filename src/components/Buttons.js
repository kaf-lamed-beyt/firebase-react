import React from 'react'

export const LoginBtn = ({ className, color }) => {
  return (
    <button className={className} style={`background: ${color}`}>
      Login
    </button>
  )
}

export const SignUpBtn = ({ className, color }) => {
  return (
    <button className={className} style={`background: ${color}`}>
      Sign Up
    </button>
  )
}

export const UpdateProfileBtn = ({ className, color }) => {
  return (
    <button className={className} style={`background: ${color}`}>
      Update
    </button>
  )
}
