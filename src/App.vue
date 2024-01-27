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
  --grey-bkgnd: #9c9c9c;
  --grey-light-bkgnd: #d9d9d9;
  --grey-dark-bkgnd: #1d1d1f;
  --light: #f1f1f1;
  --warning: #c23a03;
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
    flex: 1;
    padding: 1em;
    margin: 0 auto 0 auto;
    justify-content: center;
    justify-self: center;
    align-items: center;

    @media (min-width: 1100px) {
      transition: 0.2s ease-in-out;
    }

    button {
      margin: 1em;
      padding: 0.5em 1em;
      border-radius: 0.9em;
      border: 2px solid var(--dark);
      background-color: var(--light);
      font-family: 'Poppins', sans-serif;
      color: var(--dark);
      line-height: 1.5;
      font-weight: 400;

      &:hover {
        color: var(--light);
        background-color: var(--dark);
        transition: 0.2s ease-in-out;
      }
    }
  }
}

.button .text {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

h2 {
  color: var(--dark);
  font-size: 2.5rem;
}

h3 {
  color: var(--grey);
  font-size: 2rem;
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
  font-size: 1.5em;
}

ul {
  list-style-type: none;
}

.loader {
  margin-top: 1em;
  width: 48px;
  height: 48px;
  border: 5px solid var(--dark);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
