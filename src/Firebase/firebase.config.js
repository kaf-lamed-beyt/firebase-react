import app from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCz5OSJATR7fdcgrBvbgElIic55eRy67lA",
    authDomain: process.env.MY_AUTH_DOMAIN,
    databaseURL: process.env.MY_DATABASE_URL,
    projectId: process.env.MY_PROJECT_ID,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.MY_MESSAGING_SENDER_ID
}

class Firebase {
    constructor() {
        app.initializeApp(config)

        // add app authentication api
        this.auth = app.auth()

        // setting up the authentication api
        
        // create new user 
        const createUser = (email, password) => {
            this.auth.createUserWithEmailAndPassword(email, password)
        }

        // authenticate user with email and password
        const loginWithEmailAndPassword = (email, password) => {
            this.auth.signInWithEmailAndPassword(email, password)
        }

        // logout authenticated user
        const logout = () => {
            this.auth.signOut()
        }

        // reset password for authenticated user
        const resetPassword = (email) => {
            this.auth.sendPasswordResetEmail(email)
        }

        // change password (only authenticated users)
        const changePassword = (password) => {
            this.auth.currentUser.updatePassword(password)
        }
    }
}

export default Firebase