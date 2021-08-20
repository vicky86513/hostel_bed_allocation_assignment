import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDqtSpfOVy4pYv4CbtV3EUqfbbKn7WWFsE",
    authDomain: "hostel-app-f6a20.firebaseapp.com",
    projectId: "hostel-app-f6a20",
    storageBucket: "hostel-app-f6a20.appspot.com",
    messagingSenderId: "747038473119",
    appId: "1:747038473119:web:132698fef4fb5a22eb1baa",
    measurementId: "G-XL64S4BH7Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;