import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyB3TKNcuHI-_UTBEnj3xPuEgB33MA1pQSc",
  authDomain: "tiktoktorto.firebaseapp.com",
  projectId: "tiktoktorto",
  storageBucket: "tiktoktorto.appspot.com",
  messagingSenderId: "285466369260",
  appId: "1:285466369260:web:d5791f1ec9a719059959c9",
  measurementId: "G-EL4JNQ18Q4"
 };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();
 const auth = firebaseApp.auth();
 const storage = firebaseApp.storage()


 export {firebaseApp, db, auth, storage};

