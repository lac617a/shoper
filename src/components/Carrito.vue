<template>
  <div class="my-5">
    <h4>Carrito de compra</h4>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Accion</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody id="items">
        <ItemCarrito
          v-for="item in items"
          :key="item.id"
          :item="item"
        />
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colspan="5" v-if="Object.keys(items).length === 0" >Carrito vacio - comprar</th>
          <FooterCarrito v-else/>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import ItemCarrito from './ItemCarrito.vue'
import FooterCarrito from './FooterCarrito.vue'

export default {
  components: { ItemCarrito, FooterCarrito },
  setup () {
    const store = useStore()
    const items = computed(() => store.state.carrito)

    return { items }
  }
}
</script>