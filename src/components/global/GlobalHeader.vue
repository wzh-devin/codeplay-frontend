<script setup lang="ts">
/**
 * 2025/3/29 23:43
 * @author <a href="https://github.com/wzh-devin">devin</a>
 * @description 全局导航栏
 * @version 1.0
 * @since 1.0
 */
import routes from '../../router/routes.ts'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import useUserStore from '../../store/user.ts'

const router = useRouter()
const userStore = useUserStore()

const selectedKeys = ref(['/'])

// 页面刷新时，锁定菜单选中项
router.afterEach((to) => {
  selectedKeys.value = [to.path]
})

const handleMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key
  })
}
</script>

<template>
  <div class="global-header">
    <a-row style="height: 64px">
      <a-col flex="150px" :wrap="false">
        <img
          class="logo"
          src="../../assets/images/header-logo.jpeg"
          alt="Logo"
        />
      </a-col>
      <a-col flex="auto" :wrap="false">
        <div class="menu-container">
          <a-menu
            mode="horizontal"
            :selected-keys="selectedKeys"
            @click="handleMenuClick"
          >
            <template v-for="route in routes">
              <a-menu-item v-if="route.name !== 'ROOT'" :key="route.path">
                {{ route.name }}
              </a-menu-item>
            </template>
          </a-menu>
        </div>
      </a-col>
      <a-col flex="100px" :wrap="false"
        >{{ userStore.loginUser?.username ?? '未登录' }}
      </a-col>
    </a-row>
  </div>
</template>

<style scoped lang="less">
.global-header {
  height: 64px;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 24px;
  position: relative;

  .logo {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .menu-container {
    flex-grow: 0;
    display: flex;
    align-items: center;

    :deep(.ant-menu-item) {
      padding: 0 20px;
      font-size: 20px;
      margin: 0 4px;
    }
  }
}
</style>
