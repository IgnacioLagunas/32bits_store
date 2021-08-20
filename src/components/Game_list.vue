<template lang="">
  <div>
    <div class="tabla">
      <li v-for="game in game_list" :key="game">
        {{ game.codigo }} | {{ game.nombre }} | {{ game.stock }} |
        {{ game.precio }} | {{ game.destacado }}
      </li>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Game_list",
    data: () => ({}),
    params: {
      list: [],
    },
  };
</script>
<style lang=""></style>
