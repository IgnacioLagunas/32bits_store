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
        color: "red",
        destacado: true,
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true,
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true,
      },
    ],
  },
  getters: {},

  mutations: {
    LOWER_STOCK: (state, index) => {
      state.juegos[index].stock -= 1;
    },
    ADD_PRODUCT_TO_CART: (state, juego) => {
      state.carrito.push(juego);
    },
    INCREASE_CART_QTTY: (state, index) => {
      state.carrito[index].cantidad += 1;
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
            cantidad: 0,
          };
          context.commit("ADD_PRODUCT_TO_CART", gameToAdd);
          context.commit("LOWER_STOCK", index);
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
  },
});

export default store;
