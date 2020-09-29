import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './scss/app.scss'

import Firebase, { FirebaseContext } from './Firebase'

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase}>
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
)
