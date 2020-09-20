import React from 'react'

export const Button = ({ className, color, children }) => {
  return (
    <button className={className} style={{ background: color }}>
      {children}
    </button>
  )
}

