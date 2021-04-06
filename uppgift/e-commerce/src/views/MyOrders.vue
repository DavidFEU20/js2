<!-- <template>
  <h1>Hej {{ user.lastName }}</h1>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['id'],
    methods: {
        ...mapActions(['getOneUser'])
    },
    computed: {
        ...mapGetters(['user'])
    },
    created() {
        this.getOneUser('606a4410e35dc521f43ab322')
    }
}
</script>

<style>

</style> -->

<template>
  <div>
      <order-card-deck />
  </div>
</template>

<script>
import OrderCardDeck from '../components/orders/OrderCardDeck'
export default {
  components: { 
    OrderCardDeck 
  },
}
</script>

<style>

</style>