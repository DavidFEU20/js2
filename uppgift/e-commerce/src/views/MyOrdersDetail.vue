<template>
  <div>
      <div class="container my-5 py-5 z-depth-1">


  <!--Section: Content-->
  <section class="text-center">

    <!-- Section heading -->
    <h3 class="font-weight-bold mb-5">HEJ {{ user.firstName }}</h3>

   

  </section>
  <!--Section: Content-->


</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: ['id'],
    methods: {
        ...mapActions(['getOneProduct', 'getOneUser', 'user']),
    },
    created() {
        this.getOneUser(this._id)
    }
}
</script>

<style>

</style>