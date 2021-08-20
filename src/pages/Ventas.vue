<template>
  <div>
    <h1>Ventas</h1>
    <div class="tabla">
      <li v-for="(juego, index) in $store.state.juegos" :key="juego.codigo">
        {{ juego.codigo }} | {{ juego.nombre }} | {{ juego.stock }} | $
        {{ juego.precio }}
        <button class="btn" @click="venderProducto(juego, index)">
          Vender
        </button>
      </li>
    </div>
    <h1>Carrito de compras</h1>
    <div class="tabla">
      <li v-for="(juego, index) in $store.state.carrito" :key="index">
        {{ juego.codigo }} | {{ juego.nombre }} | $ {{ juego.precio }} |
        {{ juego.cantidad }}
      </li>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      venderProducto(juego, index) {
        console.log(index);
        this.$store.dispatch("venderProducto", { juego, index });
        //:style="{ backgroundColor: juego.color }
      },
    },
  };
</script>

<style>
  .tabla {
    margin: 2rem 0;
  }

  .tabla li {
    display: flex;
    align-items: center;
    margin: 0.8rem 0;
  }
  .btn {
    margin-left: 1rem;
    background-color: #7469ca;
    padding: 0.3em 1.2em;
    border: 1px solid black;
    border-radius: 2em;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
  }
  .btn:hover {
    transform: scale(1.1);
  }
</style>
