<script setup>
import CountryListFetch from './components/CountryListFetch.vue';
import { useRouter, useRoute } from 'vue-router';
import Sidebar from './components/Sidebar.vue';

</script>

<template>
  <!--<header>
      <h1>Geonames <span class="logo">🌐</span></h1>
    </header>
    <nav class="menu">
      <ul>
        <li><a href="#">Export</a></li>
        <li><a href="#">Translations</a></li>
      </ul>
    </nav>
    <CountryListFetch />
  -->
  <!-- <RouterLink></RouterLink>
  <RouterLink></RouterLink> -->
  <Sidebar />
  <RouterView />
  <!-- <router-view /> -->
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

ul {
  padding: 0;
  margin: 0.5em auto;
  border: 1px solid transparent;
  border-color: #f9f9f9;
  border-radius: 0.2em;
}

li {
  list-style-type: none;
}

li b {
  color: #ffffff;
}
</style>
