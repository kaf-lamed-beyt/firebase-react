import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './Buttons'

const SocialAuth = ({ className }) => {
  return (
    <div className={className}>
      <Button className="btn btn-60 facebook__btn">
        <span>
          <i className="fab fa-facebook-f"></i>
        </span>
        facebook
      </Button>
      <Button className="btn btn-60 google__btn">
        <span>
          <i className="fab fa-google"></i>
        </span>
        google
      </Button>
    </div>
  )
}

SocialAuth.propTypes = {
  className: PropTypes.string,
}

export default SocialAuth
