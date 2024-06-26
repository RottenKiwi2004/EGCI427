<template>
    <div class="container">
        <h1>Sign In</h1>
        <br><br>
        <div class="row">
            <div class="col-lg-3"/>
            <div class="col-lg-6">
                <input type="email" v-model="formData.email" class="form-control" placeholder="email"/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="password" v-model="formData.password" class="form-control" placeholder="password"/>
                <br> 
                <button class="btn btn-success btn-block full-width" @click="signIn">Sign In</button>
                <button class="btn btn-primary btn-block full-width" @click="signInGoogle">Google</button>
            </div>
            <div class="col-lg-3"/>
        </div>
    </div>
</template>

<script>
import {GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'

export default {
    name: 'SignIn',
    data() {
        return {
            formData: {
            email: '',
            password: ''
        },
        errorMessage: '',
        successMessage: '',
        xhrRequest: false
        }
    },
    methods: {
        signIn() {
            this.errorMessage = ""
            const auth = getAuth()
            signInWithEmailAndPassword(auth,this.formData.email, this.formData.password)
              .then (user => {
                this.$router.replace('/movieList')
                this.xhrRequest = false
              })
              .catch((error)=> {
                  alert(error.message)
                  this.errorMessage = error.message
                  this.xhrRequest = false
              })
        },
        signInGoogle() {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth, provider)
            .then(result=> {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken

                const user = result.user
                this.$router.replace('/movieList')
            })
            .catch(err=> {
                const errorCode = err.code
                const errorMsg = err.message
                const errorCredential = GoogleAuthProvider.credentialFromError(err);
            })
        }
    }
}
</script>
