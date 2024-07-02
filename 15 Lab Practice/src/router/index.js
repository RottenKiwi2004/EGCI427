import { createRouter, createWebHistory } from 'vue-router'
import CityList from '../views/CityList.vue'
import Info from '../views/Info.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

import {getAuth, onAuthStateChanged} from 'firebase/auth'

const routerHistory = createWebHistory()

const routes = [
    {
        path: '/',
        redirect: '/signin'
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/signin'
    },
    {
        path: '/cities',
        name: 'CityList',
        component: CityList,
        meta: {
          requiresAuth: true
        }
    },
    {
        path: '/info/:city',
        name: 'Info',
        component: Info,
        meta: {
          requiresAuth: true
        }
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/signup',
        name: 'Signp',
        component: SignUp
    }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

const getCurrentUser = () =>{
    return new Promise((resolve, reject)=> {
      const removeListener = onAuthStateChanged(
        getAuth(),
        (user)=>{
          removeListener()
          resolve(user)
        },
        reject
      )
    })
  }
  
  router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
    if (requiresAuth) {
      if(await getCurrentUser()){
        console.log("You are authorized to access this area.");
        next()
      } else {
        console.log("You are not authorized to access this area.")
        next('signin')
      }
    } else {
      next()
    }
  })


export default router