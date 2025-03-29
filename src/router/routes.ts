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
    name: 'ROOT',
    redirect: '/view-topic'
  },
  {
    path: '/view-topic',
    name: 'ViewTopic',
    component: () => import('@/views/topic/ViewTopic.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/topic/About.vue')
  }
]

export default routes
