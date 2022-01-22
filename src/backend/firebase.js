import { initializeApp } from "firebase/app"
import "firebase/auth"

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// }

const firebaseConfig = {
  apiKey: "AIzaSyCD3Bv1aIX7W81q8vqV-XAIlgjHQRi233Q",
  authDomain: "meckeebs.firebaseapp.com",
  projectId: "meckeebs",
  storageBucket: "meckeebs.appspot.com",
  messagingSenderId: "72519999027",
  appId: "1:72519999027:web:5e076f5ae8c1da41318d46",
  measurementId: "G-EMQZJT3GHE"
}

const app = initializeApp(firebaseConfig)

// export const auth = app.auth()
export default app