import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Export from '../views/Export.vue'
import Translations from '../views/Translations.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/export',
            component: Export
        },
        {
            path: '/translations',
            component: Translations
        }
    ]
});

export default router;