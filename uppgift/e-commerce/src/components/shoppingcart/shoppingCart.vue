<template>
  <div>
      <shopping-cart-product v-for="item in shoppingCart" :key="item.product._id" :item="item" />

      <div v-if="shoppingCart.length < 1" class="cart-item">
          <div class="p-2 d-flex justify-content-center align-items-center">
              Din kundvagn är tom.
          </div>
          <div class="dropdown-divider"></div>
      </div>

      <div class="p-2 d-flex justify-content-between align-items-center">
          <div class="ms-2">
              <div class="total-price">
                  Total <span class="ms-1"> {{cartTotalPrice}}  kr </span>
              </div>
              <small class="text-muted">inkl. moms</small>
          </div>
          <button type="submit" class="btn btn-primary mt-2" @click="purchase">Genomför Köp</button>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ShoppingCartProduct from './shoppingCartProduct'
export default {
    components: {
        ShoppingCartProduct
    },
    computed: {
        ...mapGetters(['shoppingCart', 'cartTotalPrice', 'loggedIn', 'loggedInUser', 'newOrder', 'user'])
    },
    methods: {
        ...mapActions(['saveOrders', 'checkUser', 'clearCart']),
        purchase() {
            if(!this.loggedIn) {
            console.log('err')
          } else {
            if(this.shoppingCart.length > 0) {
              
              let newOrder = {
                userId: this.loggedInUser,
                totalPrice: this.cartTotalPrice,
                cart: this.shoppingCart,
                
              }
              console.log(newOrder)
              this.saveOrders(newOrder)
            //   this.$router.push({name: 'OrderCompleted'})
              this.clearCart()
              console.log('success')
            } else {
              console.log('err')
            }
          }
        },
        
    },
}
</script>

<style>

</style>