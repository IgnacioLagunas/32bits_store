import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    carrito: [],
    juegos: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "#ef476f",
        destacado: true,
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "#118ab2",
        destacado: false,
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color: "#06d6a0",
        destacado: true,
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "#ffd166",
        destacado: false,
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "#118ab2",
        destacado: false,
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "#ef476f",
        destacado: true,
      },
    ],
  },
  getters: {
    cantidadDeJuegos(state) {
      let juegosConStock = state.juegos.filter((juego) => {
        return juego.stock > 0;
      });
      return juegosConStock.length;
    },
    totalStock(state) {
      let total = 0;
      state.juegos.forEach((juego) => {
        total += juego.stock;
      });
      return total;
    },
  },

  mutations: {
    LOWER_STOCK: (state, index) => {
      state.juegos[index].stock -= 1;
    },
    ADD_PRODUCT_TO_CART: (state, juego) => {
      state.carrito.push(juego);
    },
    INCREASE_CART_QTTY: (state, index) => {
      state.carrito[index].stock += 1;
    },
    LOWER_CART_QTTY: (state, index) => {
      state.carrito[index].stock -= 1;
    },
    REMOVE_PRODUCT_FROM_CART: (state, index) => {
      state.carrito.splice(index, 1);
    },
  },

  actions: {
    venderProducto(context, { juego, index }) {
      let foundInIndex = context.state.carrito.findIndex((juegoEnCarrito) => {
        return juegoEnCarrito.codigo === juego.codigo;
      });
      if (juego.stock > 0) {
        if (foundInIndex === -1) {
          let gameToAdd = {
            codigo: juego.codigo,
            nombre: juego.nombre,
            precio: juego.precio,
            stock: 1,
          };
          context.commit("LOWER_STOCK", index);
          context.commit("ADD_PRODUCT_TO_CART", gameToAdd);
        } else {
          context.commit("INCREASE_CART_QTTY", foundInIndex);
          context.commit("LOWER_STOCK", index);
        }
      } else {
        console.log(`El juego ${juego.nombre} no está disponible`);
      }

      // }
    },
    InCarrito(context, codigo) {
      let found = context.state.carrito.findIndex((juego) => {
        return juego.codigo === codigo;
      });
      console.log(found);
      return found;
    },
    borrarProducto(context, index) {
      if (context.state.carrito[index].stock === 1) {
        context.commit("REMOVE_PRODUCT_FROM_CART", index);
      } else {
        context.commit("LOWER_CART_QTTY", index);
      }
    },
  },
});

export default store;
