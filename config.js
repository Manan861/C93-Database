import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCjedSLwZwQghZKiRL9-XIU1NSvzJO5OHE",
  authDomain: "booking-app-39c78.firebaseapp.com",
  databaseURL: "https://booking-app-39c78-default-rtdb.firebaseio.com",
  projectId: "booking-app-39c78",
  storageBucket: "booking-app-39c78.appspot.com",
  messagingSenderId: "568594124685",
  appId: "1:568594124685:web:f7fd844c4a5dfc602d37c4",
  measurementId: "G-TJDH0E78M3"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
