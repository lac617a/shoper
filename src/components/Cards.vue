<template>
  <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3">
    <div class="card">
      <img :src="producto.thumbnailUrl" :alt="`Imagen-${producto.title}`" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{producto.title}}</h5>
        <p class="card-text">$ <span>{{producto.price}}</span></p>
        <button @click="addToCarrito(producto)" class="btn btn-dark">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
  props: {
    producto: Object
  },
  setup(){
    const store = useStore()
    const addToCarrito = producto => {
      // Para activar una accion se usa DISPATCH
      store.dispatch('addToCarrito', producto)
    }
    return {addToCarrito}
  }
}
</script>
