import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyDL953H_eJV5Qkhu5B_tT_fHi2jueNek4M",
    authDomain: "mappsupreme-50938.firebaseapp.com",
    projectId: "mappsupreme-50938",
    storageBucket: "mappsupreme-50938.appspot.com",
    messagingSenderId: "671826782729",
    appId: "1:671826782729:web:24162cdc61f8c174b4a6d8",
    measurementId: "G-J0BKN0ZTD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
firebase.analytics(app)