import React from 'react'
import { Button } from '../components/Buttons'
import { Link } from 'react-router-dom'

import * as Routes from '../Routes/routes'

export default function Index() {
  return (
    <div className="landing__base">
      <section id="head">
        <div className="dodo__base">
          <h2 className="dodo__text">
            Oh! 🤫 and Welcome to the mystiquenes of all blah blah blah 😄{' '}
          </h2>
          <Link to={Routes.signup}>
            <Button className="btn btn-50 btn__secondary get-started">
              Get started.
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
