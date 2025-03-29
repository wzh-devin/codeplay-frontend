/**
 * 2025/3/29 22:52
 * @author <a href="https://github.com/wzh-devin">devin</a>
 * @description
 * @version 1.0
 * @since 1.0
 */
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.ts'

const history = createWebHistory()

const router = createRouter({
  history,
  routes: routes
})

export default router
