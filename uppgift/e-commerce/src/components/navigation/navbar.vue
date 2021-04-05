<template>
  <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!-- Container wrapper -->
  <div class="container">
    <!-- Navbar brand -->
    <router-link class="navbar-brand" to="/">e-Commerce.se
    </router-link>

    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <router-link class="nav-link"  to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About Us</router-link>
        </li>

      </ul>
      <!-- Left links -->

     
      <!-- Navbar dropdown -->
      <ul class="navbar-nav">
        <li class="nav-item dropdown me-3">
          <a
            class="nav-link "
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-shopping-cart"></i>
            <span class="badge rounded-pill badge-notification bg-danger">{{ cartItemCount }}</span>
          </a>
         
          <ul class="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdown">
            <shoppingCart />
          </ul>
        </li>

        <li class="nav-item dropdown" v-if="loggedIn">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-user"></i>
          </a>
         
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><router-link :to="{name: 'MyOrders'}" class="dropdown-item">My Orders</router-link></li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a  href="#" class="dropdown-item" @click="logout">Logout</a>
            </li>
          </ul>
        </li>
        
        <li class="nav-item dropdown" v-if="!loggedIn">
          <router-link
            class="nav-link"
            to="login"
            id="navbarDropdown"
            role="button"
            
            aria-expanded="false"
          >Login
            
          </router-link>
         
          <!-- <ul class="dropdown-menu dropdown-menu-end login-form p-3" aria-labelledby="navbarDropdown">
            <form>
                Email input
                <div class="form-outline mb-4 mt-2">
                  <input type="email" id="form1Example1" class="form-control border-bottom" />
                  <label class="form-label" for="form1Example1">Email address</label>
                </div>

                Password input
                <div class="form-outline mb-4">
                  <input type="password" id="form1Example2" class="form-control border-bottom" />
                  <label class="form-label" for="form1Example2">Password</label>
                </div>

                Submit button
                <button type="submit" class="btn btn-primary ms-2">Sign in</button>
                
                <div class="d-flex justify-content-end mt-2">
                  Simple link
                  <router-link to="/register">Register new account</router-link>
                </div>
              </form>
          </ul> -->
        </li>
        </ul>
    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ShoppingCart from '../shoppingcart/shoppingCart'
export default {
  components: {
    ShoppingCart
  },
  computed: {
    ...mapGetters(['cartItemCount', 'loggedIn'])
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style scoped>
  .shopping-cart {
    min-width: 350px;
  }
  .login-form {
    min-width: 300px;
  }
</style>