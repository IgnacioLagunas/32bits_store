<template>
  <nav>
    <div class="logo">
      <h1>32<span>_Bits</span></h1>
    </div>
    <ul class="nav-links">
      <router-link class="nav-link" :to="{ path: '/' }">Inicio</router-link>
      <router-link class="nav-link" :to="{ path: '/busquedas' }"
        >Busquedas</router-link
      >
      <router-link class="nav-link" :to="{ path: '/ventas' }"
        >Ventas</router-link
      >
      <router-link class="nav-link" :to="{ path: '/total' }">Total</router-link>
    </ul>
  </nav>
</template>

<script>
  export default {};
</script>

<style>
  nav {
    width: 100%;
    height: 50px;
    margin-bottom: 1rem;
    background-color: #333333;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    margin-left: 3rem;
    color: #7469ca;
  }
  .logo span {
    color: white;
    letter-spacing: 0.2rem;
  }
  .nav-links {
    width: 350px;
    margin-right: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-link {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  .nav-link:hover {
    color: #7469ca;
  }
</style>
