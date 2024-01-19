<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <h1>Geonames.</h1>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-symbols-outlined material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>
        <div class="menu">
            <RouterLink class="button" to="/">
                <span class="material-symbols-outlined material-icons">home</span>
                <span class="text">Home</span>
            </RouterLink>
            <RouterLink class="button" to="/export">
                <span class="material-symbols-outlined material-icons">ios_share</span>
                <span class="text">Export</span>
            </RouterLink>
            <RouterLink class="button" to="/translations">
                <span class="material-symbols-outlined material-icons">translate</span>
                <span class="text">Translations</span>
            </RouterLink>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
    localStorage.setItem("is_expanded", is_expanded.value)
}
const AutoCloseWhenTooSmall = () => {
    if (window.innerWidth < 900 && is_expanded) {
        is_expanded.value = false
        localStorage.setItem("is_expanded", is_expanded.value)
    }

    else is_expanded.value = true
    localStorage.setItem("is_expanded", is_expanded.value)
}

window.onresize = AutoCloseWhenTooSmall;
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
                background-color: var(--dark);
                border-right: 5px solid var(--dark-alt);

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
            transition: 1s ease-in-out 1s;
        }

        .menu-toggle-wrap {
            top: -2.3rem;
            right: 0.6rem;
            margin-bottom: -1rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

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

    @media screen and (max-width: 900) {
        //position: absolute;
        z-index: 99;
    }

    @media screen and (min-width: 900) {}
}
</style>