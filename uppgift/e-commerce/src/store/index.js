import Vue from 'vue'
import Vuex from 'vuex'
import products from './Modules/products'
import cart from './Modules/cart'
import user from './Modules/user'
import order from './Modules/order'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    cart,
    user,
    order
  }
})
