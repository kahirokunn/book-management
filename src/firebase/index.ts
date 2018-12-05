import firebase from 'firebase'
import * as admin from 'firebase-admin'
import * as Pring from 'pring'


const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  timestampsInSnapshots: true,
}

const app = firebase.initializeApp(config)
const firestore = firebase.firestore(app)

firestore.settings({ timestampsInSnapshots: true })

const auth = firebase.auth
const storage = firebase.storage
const firestoreHelper = firebase.firestore

Pring.initialize(admin.initializeApp(config).firestore())

export {
  auth,
  firestore,
  firestoreHelper,
  storage,
}
