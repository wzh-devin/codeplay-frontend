<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'
import { useRouter } from 'vue-router'
import useUserStore from './store/user.ts'

// 路由鉴权处理
const router = useRouter()

const userStore = useUserStore()

// 路由守卫
router.beforeEach((to, from, next) => {
  console.log(from)
  // 判断登录用户是否有权限
  if (to.meta?.authorize === 'admin') {
    if (userStore.loginUser.role !== 'admin') {
      next({
        path: '/no-permission'
      })
      return
    }
  }
  next()
})
</script>

<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style scoped lang="less">
#app {
}
</style>
