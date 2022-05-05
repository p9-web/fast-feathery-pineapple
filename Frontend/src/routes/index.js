import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../layouts/Default.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/Index.vue')
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
      component: () => import('../pages/Error404.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
