<template>
  
  <div class="col hover-shadow">
    <div class="card h-100">
      <div v-for="product in order.cart" :key="product._id" :product="product">
      <div v-for="title in product" :key="title._id" :title="title">
        <h2 class="ordertextcard">{{title.title}}</h2>
      </div>
    </div>
      <!-- <img
        :src="product.image"
        class="card-img-top"
        alt="..."
      /> -->

      <div class="card-body">
        <h5 class="card-title">{{ order.userId }}</h5>
        <p class="card-text"> {{ order.totalPrice }} </p>
      </div>
      
      
    </div>
  </div>

</template>

<script>
export default {
  name: 'OrderCard',
  props: ['order'],
}
</script>

<style>
.routerlink {
  color: black;
  
}
</style>