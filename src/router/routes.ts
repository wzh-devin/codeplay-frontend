/**
 * 2025/3/29 22:52
 * @author <a href="https://github.com/wzh-devin">devin</a>
 * @description
 * @version 1.0
 * @since 1.0
 */
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    meta: {
      isShow: false
    },
    redirect: '/view-topic'
  },
  {
    path: '/no-permission',
    name: 'authentication',
    meta: {
      isShow: false
    },
    component: () => import('@/views/authentication/NoPermission.vue')
  },
  {
    path: '/view-topic',
    meta: {
      isShow: true
    },
    name: 'ViewTopic',
    component: () => import('@/views/topic/ViewTopic.vue')
  },
  {
    path: '/about',
    meta: {
      isShow: true
    },
    name: 'About',
    component: () => import('@/views/topic/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {
      isShow: true,
      authorize: 'admin'
    },
    component: () => import('@/views/admin/Admin.vue')
  }
]

export default routes
