import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDqeFpk23cU_kXNd8yXUuL1JoMRfNDcGGA",
    authDomain: "legitenough-e1470.firebaseapp.com",
    projectId: "legitenough-e1470",
    storageBucket: "legitenough-e1470.appspot.com",
    messagingSenderId: "525590042415",
    appId: "1:525590042415:web:a4a6e87d6ed45b030ff3da",
    measurementId: "G-60G83MR3J0"
  });
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { db, auth, provider };
  export default db; 