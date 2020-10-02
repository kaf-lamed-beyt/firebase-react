import app from 'firebase/app'
import 'firebase/auth'

const productionConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

const developmentConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

const config =
  process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig

class Firebase {
  constructor() {
    app.initializeApp(config)

    // add app authentication api
    this.auth = app.auth()
  }
  // setting up the authentication api

  // create new user
  createUser = (email, password) => {
    this.auth.createUserWithEmailAndPassword(email, password)
  }

  // authenticate user with email and password
  loginWithEmailAndPassword = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password)
  }

  // logout authenticated user
  logout = () => {
    this.auth.signOut()
  }

  // reset password for authenticated user
  resetPassword = email => {
    this.auth.sendPasswordResetEmail(email)
  }

  // change password (only authenticated users)
  changePassword = password => {
    this.auth.currentUser.updatePassword(password)
  }
}

export default Firebase
