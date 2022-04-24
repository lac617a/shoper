<template>
  <div class="container">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1>Carrito</h1>
    <!-- <pre>{{carrito}}</pre>
    <pre>{{$store.state.carrito}}</pre> -->
    <hr>
    <Carrito/>
    <hr>
    <div class="row">
      <Cards
        v-for="producto of productos"
        :key="producto.id"
        :producto="producto"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from '@vue/runtime-core'
import Cards from '@/components/Cards'
import Carrito from '@/components/Carrito'

export default {
  name: 'App',
  components: {
    Cards,
    Carrito
  },
  // COMPOSITION API
  setup(){
    const store = useStore()
    onMounted(() => {
      // Para activar una accion "actions" se usa DISPATCH
      store.dispatch('fetchData')
    })
    const productos = computed(() => store.state.productos)
    const carrito = computed(() => store.state.carrito)
    return  { productos, carrito }
  }
}
</script>

<style>
@import url('../../src/css/bootstrap.min.css');
</style>