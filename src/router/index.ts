import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录',
      },
      component: () => import('../views/login/Login.vue'),
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '首页',
      },
      component: () => import('../layout/Index.vue'),
      children: [{
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          title: '控制台',
        },
        component: () => import('../views/Dashboard/Index.vue'),
      },
        {

          path: 'list',
          name: 'list',
          meta: {
            title: '列表',
          },
          component: () => import('../views/System/List.vue'),
        },
        {
          path: 'user',
          name: 'user',
          meta: {
            title: '用户',
          },
          component: () => import('../views/User/List.vue'),
        }
      ]
    }
  ]
})

export default router
