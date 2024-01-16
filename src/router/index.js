import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Export from '../views/Export.vue'

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
        }
    ]
});

export default router;