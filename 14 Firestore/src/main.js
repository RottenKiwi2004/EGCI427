import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getAuth, onAuthStateChanged} from 'firebase/auth'

let app
let auth

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdJ-QkCqxv68atLTbxBoEzo89YQB1TGAI",
    authDomain: "egci427-4ae04.firebaseapp.com",
    projectId: "egci427-4ae04",
    storageBucket: "egci427-4ae04.appspot.com",
    messagingSenderId: "379257344531",
    appId: "1:379257344531:web:ba9373daea89457bfce5e6"
  };
// Initialize Firebase
initializeApp(firebaseConfig);
auth = getAuth()

onAuthStateChanged(auth, (user) => {
    if(!app) {
        app = createApp(App).use(router).mount('#app')
    }
})







