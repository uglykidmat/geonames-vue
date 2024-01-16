<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="logo">
            <span>🌐</span>
        </div>
        <h1>Geonames</h1>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
            </button>

        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';
const is_expanded = ref(false);
const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
}
</script>

<style scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;
    background-color: #242424;

    transition: 0.2s ease-out;
}

aside .logo {
    margin-bottom: 1rem;
    /* width: 2rem; */

}

.menu-toggle-wrap .menu-toggle .material-icons {
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
}

.material-symbols-outlined {
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
}

aside .is-expanded {
    width: var(--sidebar-width);
}

@media screen and (max-width:768px) {
    aside {
        position: fixed;
        z-index: 99;
    }
}
</style>