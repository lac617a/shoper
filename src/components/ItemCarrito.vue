<template>
  <tr>
    <th scope="row">{{item.id}}</th>
    <td>{{item.title}}</td>
    <td>{{item.cantidad}}</td>
    <td>
      <button @click="aumentar(item.id)" class="btn btn-info btn-sm">+</button>
      <button @click="disminuir(item.id)" class="btn btn-danger btn-sm">-</button>
    </td>
    <td>${{totalPrice}}</td>
  </tr>
</template>

<script>
import { useStore } from 'vuex'

export default {
  props: ['item'],
  setup () {
    const store = useStore()
    const aumentar = id => { store.commit('aumentar', id) }
    const disminuir = id => { store.commit('disminuir', id) }

    return { aumentar, disminuir }
  },
  computed: {
    totalPrice () {
      return this.item.price * this.item.cantidad
    }
  }
}
</script>