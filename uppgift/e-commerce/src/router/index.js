import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Products from '../views/Products.vue'
import ProductDetails from '../views/ProductDetails.vue'
import MyOrders from '../views/MyOrders.vue'
import MyOrdersDetail from '../views/MyOrdersDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/product/details/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/myorders', ///:id
    name: 'MyOrders',
    component: MyOrders,
    // props: true,
    // meta: { authorize: true }
  },
  {
    path: '/myorders/:id', ///:id
    name: 'MyOrdersDetail',
    component: MyOrdersDetail,
    props: true,
    // meta: { authorize: true }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { authorize } = to.meta
  const token = localStorage.getItem('token')

  if(authorize) {

    if(!token) {
      next({path: '/login', query: { redirect: to.fullPath }})
    } else {
      next()
    }

  }
  next()
})


export default router