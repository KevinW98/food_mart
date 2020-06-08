import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyDTWvEqJHX43puyYIJdO-RxKkqu2iGRZCU",
    authDomain: "foodmart-c7911.firebaseapp.com",
    databaseURL: "https://foodmart-c7911.firebaseio.com",
    projectId: "foodmart-c7911",
    storageBucket: "foodmart-c7911.appspot.com",
    messagingSenderId: "842313995499",
    appId: "1:842313995499:web:d1871f70e652625c0d5aae",
    measurementId: "G-NVF9EETJ52"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=>{
    auth.signInWithPopup(provider);
}

export default firebase;
