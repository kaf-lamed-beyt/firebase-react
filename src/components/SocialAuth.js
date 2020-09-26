import React from 'react'
import PropTypes from 'prop-types'

const SocialAuth = ({ children, className }) => {
  return <div className={className}>{children}</div>
}

SocialAuth.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default SocialAuth
