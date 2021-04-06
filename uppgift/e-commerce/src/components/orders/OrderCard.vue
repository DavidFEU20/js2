<template>
  
  <div class="col hover-shadow">
    <div class="card h-100">
      <h5 class="">{{ order.userId }}</h5>
      <h6 class="">{{ order.createdAt }}</h6>
      <div v-for="product in order.cart" :key="product._id" :product="product">
      
      <div v-for="title in product" :key="title._id" :title="title">
        <h5>{{title.title}}</h5>
      </div>
    </div>
      <div >
        
        <p class="card-text"> {{ order.totalPrice }} sek </p>
      </div>
      
      
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'OrderCard',
  props: ['order'],
  computed: {
    ...mapGetters(['loggedInUser'])
  },
}
</script>

<style>
.routerlink {
  color: black;
  
}
</style>