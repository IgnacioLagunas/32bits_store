<template>
  <div>
    <h1>Busquedas</h1>

    <p>Total de juegos con stock: {{ $store.getters.cantidadDeJuegos }}</p>
    <p>Total stock: {{ $store.getters.totalStock }}</p>

    <GameList :list="$store.state.juegos" :colors="true"></GameList>
  </div>
</template>

<script>
  import GameList from "@/components/GameList";

  export default {
    components: {
      GameList,
    },
  };
</script>

<style></style>
