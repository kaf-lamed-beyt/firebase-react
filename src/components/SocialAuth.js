import React from 'react'
import PropTypes from 'prop-types'

const SocialAuth = ({ children }) => {
  return <div className="social__signin">{children}</div>
}

SocialAuth.PropTypes = {
  children: PropTypes.children.isRequired
}

export default SocialAuth
