<script setup>
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <Sidebar />
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
:root {
  --primary: #026773;
  --primary-alt: #3CA6A6;
  --grey: #024959;
  --dark: #012E40;
  --dark-alt: #334155;
  --light: #f1f1f1;
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;
  min-width: 320px;
  min-height: 100vh;
  text-align: center;

  main {

    padding: 1em;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}

h3,
.button .text {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

h3 {
  color: var(--grey);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

a:hover {
  color: #535bf2;
}

p {
  font-family: 'Overpass', sans-serif;
}
</style>
