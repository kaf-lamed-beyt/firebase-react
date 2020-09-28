import React from 'react'
import { Link } from 'react-router-dom'

import * as Route from '../Routes/routes'

const Navigation = () => {
  return (
    <header className="nav__base">
      <div className="brand">
        <h1>Dodo</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={Route.login} className="link__text__primary">
              Sign In
            </Link>
          </li>
          <li>
            <Link to={Route.landing} className="link__text__primary">
              Landing
            </Link>
          </li>
          <li>
            <Link to={Route.home} className="link__text__primary">
              Home
            </Link>
          </li>
          <li>
            <Link to={Route.profile} className="link__text__primary">
              Profile
            </Link>
          </li>
          <li>
            <Link to={Route.admin} className="link__text__primary">
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
