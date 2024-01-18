<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <h1>Geonames.</h1>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-symbols-outlined material-icons">keyboard_double_arrow_right</span>
            </button>

        </div>
        <!-- <h3>Menu</h3> -->
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-symbols-outlined material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link class="button" to="/export">
                <span class="material-symbols-outlined material-icons">ios_share</span>
                <span class="text">Export</span>
            </router-link>
            <router-link class="button" to="/translations">
                <span class="material-symbols-outlined material-icons">translate</span>
                <span class="text">Translations</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';
const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
    localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    background-color: var(--light);
    color: var(--dark);
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;
    transition: 0.2s ease-in-out;


    h1 {
        display: none;
        max-width: fit-content;
        transition: 0.2s ease-in-out;
    }

    .flex {
        flex: 1 1 0%;
    }

    .logo {
        margin-bottom: 1rem;
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-in-out;

        .menu-toggle {
            transition: 0.2s ease-in-out;

            .material-icons {
                font-size: 2rem;
                color: var(--dark);
                transition: 0.2s ease-out;
            }

            &:hover {
                .material-icons {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            transition: 0.2s ease-in-out;
            padding: 0.5rem 1rem;

            .material-icons {
                font-size: 2rem;
                color: var(--dark);
                transition: 0.2s ease-in-out;
            }

            .text {
                color: var(--dark);
                transition: 0.2s ease-in-out;
            }

            &:hover {
                background-color: var(--dark-alt);

                .material-icons,
                .text {
                    color: var(--light);
                }
            }

            &.router-link-exact-active {
                background-color: var(--dark-alt);
                border-right: 5px solid var(--dark);

                .material-icons,
                .text {
                    color: var(--light);
                }
            }
        }
    }

    .footer {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;

        p {
            font-size: 0.875rem;
            color: var(--grey);
        }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        h1 {
            display: block;
            transition: 0.2s ease-in-out;
        }

        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3,
        .button .text {
            opacity: 1;
        }

        .button {
            .material-icons {
                margin-right: 1rem;
            }
        }

        .footer {
            opacity: 0;
        }
    }

    @media (max-width: 1024px) {
        position: absolute;
        z-index: 99;
    }
}
</style>