<template>
  <div id="app">
    <Navbar />

    <div class="container">
      <transition name="vista">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  export default {
    components: { Navbar },
  };
</script>

<style>
  .vista-enter-active,
  .vista-leave-active {
    transition: opacity 0.1s;
  }
  .vista-enter,
  .vista-leave-to {
    opacity: 0;
  }
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-family: "Roboto", sans-serif;
  }
  .container {
    width: 95%;
    margin: 0 auto;
    margin-top: 2rem;
  }
  h1 {
    margin-bottom: 2rem;
  }
</style>
