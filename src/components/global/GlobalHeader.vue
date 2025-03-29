<script setup lang="ts">
/**
 * 2025/3/29 23:43
 * @author <a href="https://github.com/wzh-devin">devin</a>
 * @description 全局导航栏
 * @version 1.0
 * @since 1.0
 */
import routes from '@/router/routes.ts'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const selectedKeys = ref(['/'])

// 页面刷新时，锁定菜单选中项
router.afterEach((to) => {
  selectedKeys.value = [to.path]
})

const handleMenuClick = ({ key }) => {
  router.push({
    path: key
  })
}
</script>

<template>
  <div class="global-header">
    <div class="logo-container">
      <img class="logo" src="../../assets/images/header-logo.jpeg" alt="Logo" />
    </div>
    <div class="menu-container">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @click="handleMenuClick"
      >
        <template v-for="route in routes">
          <a-menu-item
            v-if="route.name !== 'ROOT'"
            :key="route.path"
            class="menu-item"
          >
            {{ route.name }}
          </a-menu-item>
        </template>
      </a-menu>
    </div>
  </div>
</template>

<style scoped lang="less">
.global-header {
  height: 64px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 24px;
  display: flex;
  align-items: center;

  .logo-container {
    flex-shrink: 0;
    padding-right: 48px;
    display: flex;
    align-items: center;

    .logo {
      height: 40px;
      width: auto;
      display: block;
    }
  }

  .menu-container {
    flex-grow: 0;
    display: flex;
    align-items: center;

    :deep(.ant-menu-item) {
      padding: 0 20px;
      font-size: 20px;
      margin: 0 4px;
      transition: all 0.3s;
    }
  }
}
</style>
