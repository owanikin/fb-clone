import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAmXTwkSBJbOJvI5Dpv_r-pZb_YpbOnvjo",
    authDomain: "facebook-clone-14694.firebaseapp.com",
    projectId: "facebook-clone-14694",
    storageBucket: "facebook-clone-14694.appspot.com",
    messagingSenderId: "839548859744",
    appId: "1:839548859744:web:fe240b14e75685ad84da05",
    measurementId: "G-MD20B6G46V"
  };
  
 const firebaseApp = firebase.initializeApp(firebaseConfig) 
 const db = firebaseApp.firestore()
 const auth = firebase.auth()
 const provider = new firebase.auth.GoogleAuthProvider()

 export { auth, provider }
 export default db