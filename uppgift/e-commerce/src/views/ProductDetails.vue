<template>
  <div>
      <div class="container my-5 py-5 z-depth-1">


  <!--Section: Content-->
  <section class="text-center">

    <!-- Section heading -->
    <h3 class="font-weight-bold mb-5">Product Details</h3>

    <div class="row">

      <div class="col-lg-6">

        
          <!--Slides-->
          <div class="carousel-inner text-center text-md-left" role="listbox">
            <div class="carousel-item active">
              <img :src="product.img"
                alt="First slide" class="img-fluid">
            </div>
          </div>
          <!--/.Slides-->


      </div>

      <div class="col-lg-5 text-center text-md-left">

        <h2 class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
          <strong> {{ product.title }} </strong>
        </h2>
        <h3 class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
          <span class="font-weight-bold">
            <strong> $ {{ product.price }} </strong>
          </span>
        </h3>

        <!--Accordion wrapper-->
        

          <!-- Accordion card -->
          <div class="card">

            <!-- Card header -->
            <div class="card-header" role="tab" id="headingOne1">
             
                <h5 class="mb-0">
                  Description
              
                </h5>
             
            </div>

            <!-- Card body -->
            <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
              data-parent="#accordionEx">
              <div class="card-body">
                {{ product.description }}
              </div>
            </div>
          </div>
         

        
        <!--/.Accordion wrapper-->

        <!-- Add to Cart -->
        <section class="color">
          <div class="mt-5">

            <div class="row mt-3">
              <div class="col-md-12 text-center text-md-left text-md-right">
                <button class="btn btn-primary" @click="addProductToCart({ product, quantity })">
                  <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</button>
              </div>
            </div>
          </div>
        </section>
        <!-- /.Add to Cart -->

      </div>

    </div>

  </section>
  <!--Section: Content-->


</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['id'],
    data() {
        return {
            quantity: 1
        }
    },
    methods: {
        ...mapActions(['getOneProduct', 'addProductToCart'])
    },
    computed: {
        ...mapGetters(['product'])
    },
    created() {
        this.getOneProduct(this.id)
    }
}
</script>

<style>

</style>