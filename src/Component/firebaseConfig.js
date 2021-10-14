// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhnMs8g4ueja4ngbP-pPaM9zNCTbtoeEM",
  authDomain: "fir-api-bd361.firebaseapp.com",
  databaseURL :'https://fir-api-bd361-default-rtdb.firebaseio.com/',
  projectId: "fir-api-bd361",
  storageBucket: "fir-api-bd361.appspot.com",
  messagingSenderId: "966512333496",
  appId: "1:966512333496:web:160cc658a2c2f73d949a4d"
};

// Initialize Firebase
const fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();