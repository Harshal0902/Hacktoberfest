import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
 
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
   apiKey: "AIzaSyDpkCDYSxIRWz_1wVEQ3z0T-ZA2Kvub1l0",
  authDomain: "auth-development-78581.firebaseapp.com",
  projectId: "auth-development-78581",
  storageBucket: "auth-development-78581.appspot.com",
  messagingSenderId: "1026759717207",
  appId: "1:1026759717207:web:be290eb851f01d5c578e12",
  measurementId: "G-4YJ53CBP61"
})
 //const app = initializeApp(app)
export const auth=app.auth()
export default app