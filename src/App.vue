<script setup>
import Fetchtest from './components/Fetchtest.vue';
</script>

<template>
  <header>
    <h1>Geonames <span class="logo">🌐</span></h1>
  </header>
  <Fetchtest />
</template>

<style scoped>
.logo {
  height: 6em;
  /* padding: 1.5em; */
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 1em #ffffff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
