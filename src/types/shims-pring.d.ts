declare module 'pring' {
  type appFirestore = import ('firebase').firestore.Firestore | import ('firebase-admin').firestore.Firestore
  export const initialize: (appFirestore: appFirestore) => void
}
