import axios from '@/axios'

export default {
  state: {
    newOrder: null,
    orders: [],
    userOrder: null
    
  },
  getters: {
    newOrder: state => state.newOrder,
    orders: state => state.orders,
    userOrder: state => state.userOrder
  },
  mutations: {
    SET_ORDERS: (state, orders) => {
      state.orders = orders
    },
    GET_ONE_ORDER: (state, order) => {
        state.userOrder = order
    }

  },
  actions: {
    saveOrders: async (context, _order) => {

      let newOrder = {
          userId: _order.userId,
          totalPrice: _order.totalPrice,
          cart: _order.cart
      }


      await axios.post('/orders/save', newOrder)
    },
    
    getOrders: async ({commit}) => {
      const res = await axios.get('/orders')
      commit('SET_ORDERS', res.data)
    },
    findUserOrder: async ({commit}, id) => {
        const res = await axios.get('/orders')
        const result = await res.data.filter(order => order.userId === id)
        commit('GET_ONE_ORDER', result)
    }
  }
}