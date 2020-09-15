import React from 'react'
import { Link } from 'react-router-dom'

import * as Route from '../Routes/routes'

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={Route.login}>Sign In</Link>
        </li>
        <li>
          <Link to={Route.landing}>Landing</Link>
        </li>
        <li>
          <Link to={Route.home}>Home</Link>
        </li>
        <li>
          <Link to={Route.profile}>Profile</Link>
        </li>
        <li>
          <Link to={Route.admin}>Admin</Link>
        </li>
      </ul>
    </div>
  )
}


export default Navigation