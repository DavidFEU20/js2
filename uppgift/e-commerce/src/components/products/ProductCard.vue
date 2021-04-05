<template>
  
  <div class="col hover-shadow">
    <div class="card h-100">
      <router-link class="routerlink" :to="{name: 'ProductDetails', params: {id: product._id}}" type="button">
      <img
        :src="product.img"
        class="card-img-top"
        alt="..."
      />

      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text"> {{ product.description }} </p>
      </div>
      </router-link>
      
        <div class="mb-3">
          <div class="col-md-12 text-center text-md-left text-md-right">
            <button class="btn btn-primary" @click="addProductToCart({ product, quantity })">
              <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</button>
          </div>
        </div>
      
    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ProductCard',
  props: ['product'],
  data() {
        return {
            quantity: 1
        }
    },
  methods: {
      ...mapActions(['addProductToCart'])
  },
}
</script>

<style>
.routerlink {
  color: black;
  
}
</style>