import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ className, color, children, event }) => {
  return (
    <button className={className} style={{ background: color }} onClick={event}>
      {children}
    </button>
  )
}

Button.PropTypes = {
  // button label: the text that the button displays
  children: PropTypes.node.isRequired,
  // the color prop of the button
  color: PropTypes.string,
  // element class for unique styling
  className: PropTypes.string,
  // click event for the button that gets called when it is clicked
  onClick: PropTypes.func
}
