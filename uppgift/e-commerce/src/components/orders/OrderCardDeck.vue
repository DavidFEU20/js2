<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
      <order-card v-for="order in userOrder" :key="order._id" :order="order" />
      
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
    ...mapActions(['findUserOrder'])
  },
  computed: {
    ...mapGetters(['userOrder', 'loggedInUser'])
  },
  mounted() {
    this.findUserOrder(this.loggedInUser)
  }
}
</script>

<style>

</style>