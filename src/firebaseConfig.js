import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAvy_FA1Gl7itaAntYqciFKMa4QfG3Rffc",
    authDomain: "premiozumbidw.firebaseapp.com",
    projectId: "premiozumbidw",
    storageBucket: "premiozumbidw.appspot.com",
    messagingSenderId: "148686511025",
    appId: "1:148686511025:web:5804eadd387d3eab4abb90"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);


export { app, db, storage, auth };