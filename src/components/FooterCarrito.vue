<template>
  <th scope="row" colspan="2">Total Productos</th>
  <td>{{totalCantidad}}</td>
  <td>
    <button @click="empty" class="btn btn-danger btn-sm">Vaciar todo</button>
  </td>
  <td class="font-weight-bold">$ <span>{{totalPrice}}</span></td>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const totalCantidad = computed(() => store.getters.totalCantidad)
    const totalPrice = computed(() => store.getters.totalPrice)

    const empty = () => { store.commit('emptyCarrito') }

    return { totalCantidad, totalPrice, empty }
  }
}
</script>