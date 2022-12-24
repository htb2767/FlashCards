import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAHbXTzUyW8jtZ6W95L6JAVg_U6TJS6GVM",
  authDomain: "auth-development-deaf3.firebaseapp.com",
  projectId: "auth-development-deaf3",
  storageBucket: "auth-development-deaf3.appspot.com",
  messagingSenderId: "145161060976",
  appId: "1:145161060976:web:ce1ff9e8797c88a8dcaab5"
})
console.log(process.env.REACT_APP_FIREBASE_API_KEY);

export const auth = app.auth()
export default app
