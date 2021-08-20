<template>
  <div>
    <h1>Home</h1>
    <div class="tabla">
      <li v-for="juego in $store.state.juegos" :key="juego">
        {{ juego.codigo }} | {{ juego.nombre }} | {{ juego.stock }} |
        {{ juego.precio }}
      </li>
    </div>
  </div>
</template>
<script>
  export default {};
</script>
