// import axios from '@/axios'

// export default {
//     state: {
//         userToken: null,
//         loggedIn: false
//     },
//     getters: {
//       loggedIn: state => state.loggedIn
//     },
//     mutations: {
//       SET_USER: (state, token) => {
//         if(token) {
//         state.userToken = token
//         state.loggedIn = true
//         } else {
//           state.userToken = null
//           state.loggedIn = false
//         }
//       }
//     },
//     actions: {
//       register: async ({dispatch}, _user) => {
//         const user = {
//           email: _user.email,
//           password: _user.password
//         }
//         await axios.post('/users/register', _user)
//         dispatch('login', {user})
//       },
//       login: ({commit}, payload) => {
//         axios.post('/users/login', payload.user)
//           .then( res => {
//             if(res.status === 200) {
//               commit('SET_USER', res.data.token)
//             }
//           })
//       }
//     }
// }

import axios from '@/axios'
import router from '@/router'
import jwt from 'jsonwebtoken'

export default {
  state: {
    userToken: null,
    loggedIn: false,
    //test
    users:[],
    user: null,
    loggedInUser: null
  },
  getters: {
    loggedIn: state => state.loggedIn,
    //test
    loggedInUser: state => state.loggedInUser,
    user: state => state.user,
    users: state => state.users
  },
  mutations: {
    SET_USER: (state, token) => {
      if(token) {
        state.userToken = token
        state.loggedIn = true
      } else {
        state.userToken = null
        state.loggedIn = false
      }
    },
    CHECK_USER: state => {
      try {
        let token = localStorage.getItem('token')

        const user = jwt.decode(token)
        if(token) {
          state.loggedInUser = user._id
          state.userToken = token
          state.loggedIn = true
        } else {
          state.loggedInUser = null
          state.userToken = null
          state.loggedIn = false
        }
      }
      catch(err) {
        console.log(err)
      }
    }, 
    //test
    SET_USERS: (state, users) => {
      state.users = users
    },
    SET_ONEUSER: (state, user) => {
      state.user = user
  
  },
},
  actions: {
    register: async ({dispatch}, _user) => {
      const user = {
        email: _user.email,
        password: _user.password
      }
      await axios.post('/users/register', _user)
      dispatch('login', {user})
    },
    login: ({commit}, payload) => {
      axios.post('/users/login', payload.user)
        .then(res => {
          if(res.status === 200) {
            
            localStorage.setItem('token', res.data.token)
            commit('SET_USER', res.data.token)

            if(payload.route) {
              router.push(payload.route)
            } else {
              router.push('/')
            }
          }
        })
    },
    checkUser: ({commit}) => {
      commit('CHECK_USER')
    },
    logout: ({commit}) => {
      let token = localStorage.getItem('token')
      if(token) {
        localStorage.removeItem('token')

        commit('SET_USER', null)
      }
    },
    // test
    getUsers: async ({commit}) => {
      const res = await axios.get('/users')
      commit('SET_USERS', res.data)
  },
    getOneUser: async ({commit}, id) => {
      const res = await axios.get('/users/' + id)
      commit('SET_ONEUSER', res.data)
    }
}}
