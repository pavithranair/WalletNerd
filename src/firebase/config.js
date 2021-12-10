import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBBkclQV-G3eFFSaCs4j2nFfDR0MkHCOOs",
  authDomain: "walletnerd.firebaseapp.com",
  projectId: "walletnerd",
  storageBucket: "walletnerd.appspot.com",
  messagingSenderId: "567609347025",
  appId: "1:567609347025:web:25df58718d9248dd59aef0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFireStore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.Timestamp

export { projectFireStore, projectAuth, timestamp }