<template>
    <div>
        <form class="col-8 mx-auto" @submit.prevent="onSubmit">

            <p class="h4 mb-4">Login</p>
            <!-- Email input -->
            <div class="form-outline mb-4 mt-2">
                <input type="email" id="form1Example1" class="form-control border-bottom" v-model="email"/>
                <label class="form-label" for="form1Example1">Email address</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
                <input type="password" id="form1Example2" class="form-control border-bottom" v-model="password"/>
                <label class="form-label" for="form1Example2">Password</label>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary ms-2">Sign in</button>
            
            <div class="d-flex justify-content-end mt-2">
                <!-- Simple link -->
                <router-link to="/register">Register new account</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
        email: '',
        password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    onSubmit(){
      if(this.email !== '' && this.password !== '') {
        let user = {
            email: this.email,
            password: this.password
        }

        let route = this.$route.query.redirect
        this.login({user, route})
        // this.$router.push({name: 'Home'})
      }
    }
  }
}
</script>

<style>

</style>