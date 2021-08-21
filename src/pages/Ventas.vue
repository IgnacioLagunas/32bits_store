<template>
  <div>
    <h1>Ventas</h1>

    <GameList
      :list="$store.state.juegos"
      :sellingPoint="true"
      :colors="true"
    ></GameList>
    <h1>Carrito de compras</h1>

    <GameList
      :list="$store.state.carrito"
      :shoppingCart="true"
      :colors="true"
    ></GameList>
  </div>
</template>

<script>
  import GameList from "@/components/GameList";
  export default {
    methods: {},
    components: {
      GameList,
    },
  };
</script>

<style></style>
