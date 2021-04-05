export default {
    state: {
        cart: []
    },
    getters: {
        shoppingCart: state => {
            return state.cart
        },
        cartItemCount: state => {
            let items = 0
            state.cart.forEach(item => {
                items += item.quantity
            })
            return items
        },
        cartTotalPrice: state => {
            let total = 0
            if(state.cart.length !== 0) {
                state.cart.forEach(item => {
                    total += item.product.price * item.quantity
                })
            }
            return total
        }
    },
    mutations: {
        ADD_TO_CART: (state, {product, quantity }) => {
            let exists = state.cart.find(item => item.product._id === product._id)
            if(exists) {
                exists.quantity += quantity
                return
            }
            state.cart.push({product, quantity})
        },
        DELETE_PRODUCT_FROM_CART: (state, id) => {
            state.cart = state.cart.filter(item => item.product._id !== id)
        },
        INCREMENT_QUANTITY: (state, item) => {
            item.quantity += 1
        },
        DECREMENT_QUANTITY: (state, item) => {
            item.quantity -= 1
        },
        CLEAR_CART: (state) => {
            state.cart = []
        },
        ADD_ORDER: (state, {order}) => {
            state.cart.push({order})
        },
    },
    actions: {
        addProductToCart: ({commit}, { product, quantity} ) => {
            commit('ADD_TO_CART', { product, quantity })
          },
          deleteProductFromCart: ({commit}, id) => {
            commit('DELETE_PRODUCT_FROM_CART', id)
          },
          incrementQuantity: ({commit}, item) => {
            commit('INCREMENT_QUANTITY', item)
          },
          decrementQuantity: ({commit}, item) => {
            if(item.quantity > 1) {
                commit('DECREMENT_QUANTITY', item)
            }
          },
          clearCart: ({commit}) => {
            commit('CLEAR_CART')
        },
        addOrder: ({commit}, {order}) => {
            commit('ADD_ORDER', {order})
        }
    }
}
