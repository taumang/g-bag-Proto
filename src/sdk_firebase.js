import firebase from 'firebase';
import "firebase/firestore";

 const firebaseConfig = {
  apiKey: "AIzaSyBlQuOGTVwPKm_ancxrkGLOb9hXVVawivw",
  authDomain: "gg-bagg-getting-it.firebaseapp.com",
  projectId: "gg-bagg-getting-it",
  storageBucket: "gg-bagg-getting-it.appspot.com",
  messagingSenderId: "590528968846",
  appId: "1:590528968846:web:975f5975145437df1631df",
  measurementId: "G-JWCFMJ56JN"

  };

  if(!firebaseConfig.apiKey) throw new Error("Missing firebase credential:apiKey") 
  if(!firebaseConfig.authDomain) throw new Error("Missing firebase credential:authDomain") 
  if(!firebaseConfig.projectId) throw new Error("Missing firebase credential:projectId") 
  if(!firebaseConfig.storageBucket) throw new Error("Missing firebase credential:storageBucket") 
  if(!firebaseConfig.messagingSenderId) throw new Error("Missing firebase credential:messageSenderId") 
  if(!firebaseConfig.appId) throw new Error("Missing firebase credential:appId") 
  if(!firebaseConfig.measurementId) throw new Error("Missing firebase credential:measurementId") 
  
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db, firebase};

