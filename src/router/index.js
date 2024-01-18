import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExportView from '../views/ExportView.vue'
import TranslationsView from '../views/TranslationsView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/export',
            component: ExportView
        },
        {
            path: '/translations',
            component: TranslationsView
        }
    ]
});

export default router;