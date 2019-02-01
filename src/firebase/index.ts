import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import * as Pring from 'pring'
import './debug'


const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
}

const app = firebase.initializeApp(config)
const firestore = firebase.firestore(app)

const auth = firebase.auth
const storage = firebase.storage
const firestoreHelper = firebase.firestore

Pring.initialize(app.firestore())

export {
  auth,
  firestore,
  firestoreHelper,
  storage,
}
