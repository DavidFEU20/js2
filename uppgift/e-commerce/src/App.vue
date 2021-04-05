<template>
  <div >
    <navbar />
    <div class="container mt-5">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from './components/navigation/navbar'


export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['checkUser'])
  },
  created() {
    this.checkUser()
  }
}
</script>

<style>

</style>
