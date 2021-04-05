<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
      <order-card v-for="order in orders" :key="order._id" :order="order" />
      
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import OrderCard from './OrderCard.vue'
export default {
  components: { 
    OrderCard 
  },
  methods: {
    ...mapActions(['getOrders'])
  },
  computed: {
    ...mapGetters(['orders'])
  },
  mounted() {
    this.getOrders()
  }
}
</script>

<style>

</style>