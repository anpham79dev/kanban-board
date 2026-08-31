import KanbanView from '@/views/KanbanView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{ path: '/', component: KanbanView }],
})

export default router
