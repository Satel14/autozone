import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDhHH-pLOwUoHrc11bp98LfJdVyp_P-2jA",
    authDomain: "shopping-cart-react-master.firebaseapp.com",
    projectId: "shopping-cart-react-master",
    storageBucket: "shopping-cart-react-master.appspot.com",
    messagingSenderId: "404473212651",
    appId: "1:404473212651:web:3c59d742ef4683697758ae",
    measurementId: "G-125KLLSQ5L"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };