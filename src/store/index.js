import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [],
    carrito: {}
  },
  // Mutations Solo modifica el !state
  mutations: {
    setProducto(state, payload){
      state.productos = payload
    },
    setAddCarrito(state, payload) {
      state.carrito[payload.id] = { ...payload }
    },
    emptyCarrito(state) {
      state.carrito = {}
    },
    aumentar(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1
    },
    disminuir(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1
      if (state.carrito[payload].cantidad === 0) {
        delete state.carrito[payload]
      }
    }
  },
  // Las actiones 
  actions: {
    async fetchData({ commit }) {
      try {
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setProducto', data)
      } catch (error) {
        console.log(error)
      }
    },
    addToCarrito({ commit, state }, producto) {
      state.carrito.hasOwnProperty(producto.id)
        ? producto.cantidad = state.carrito[producto.id].cantidad + 1
        : producto.cantidad = 1
      commit('setAddCarrito',producto)
    }
  },
  // Los GETTER Toman algo del STATE y lo devuelve transformado
  getters: {
    totalCantidad(state) {
      return Object.values(state.carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    },
    totalPrice(state) {
      return Object.values(state.carrito).reduce((acc, { cantidad, price }) => acc + cantidad * price, 0)
    }
  },
  modules: {
  }
})
