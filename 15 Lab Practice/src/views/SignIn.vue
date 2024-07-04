<template>
    <div class="row">
        <h2>Signin</h2>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3"/>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">

            <input type="email" class="form-control" placeholder="email" v-model=formData.email>
            <br>
            <input type="password" class="form-control" placeholder="password" v-model=formData.password>
            <br>
            <button class="btn btn-success btn-block full-width" @click="signIn">Signin</button>
        </div>

    </div>
</template>

<script>
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export default {
  name: 'SignIn',
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      console.log('Signin')
      const auth = getAuth();
      console.log(this.formData.email, this.formData.password)
      signInWithEmailAndPassword(auth, this.formData.email, this.formData.password)
      .then(()=>{
        console.log(`${auth.currentUser}`)
        this.$router.replace('/cities');
      })
      .catch(err=>{
        alert(`${err.code}\n${err.message}`);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>