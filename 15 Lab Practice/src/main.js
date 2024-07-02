import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const firebaseConfig = {
    apiKey: "AIzaSyCdJ-QkCqxv68atLTbxBoEzo89YQB1TGAI",
    authDomain: "egci427-4ae04.firebaseapp.com",
    projectId: "egci427-4ae04",
    storageBucket: "egci427-4ae04.appspot.com",
    messagingSenderId: "379257344531",
    appId: "1:379257344531:web:ba9373daea89457bfce5e6"
};
  
initializeApp(firebaseConfig);

// const auth = getAuth()

// onAuthStateChanged(auth, user=> {
//     if (!app)
// app = createApp(App).use(router).mount('#app')
// })
createApp(App).use(router).mount('#app')
