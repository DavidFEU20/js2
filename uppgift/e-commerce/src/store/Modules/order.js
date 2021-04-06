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
    },
    NEW_ORDER: (state, newOrder) => {
      state.newOrder = newOrder
    }

  },
  actions: {
    saveOrders: async ({commit}, data) => {
      const newOrder = {
          userId: data.userId,
          cart: data.cart,
          totalPrice: data.totalPrice
      }
      await axios.post('/orders/save', newOrder)
      commit('NEW_ORDER', newOrder)
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