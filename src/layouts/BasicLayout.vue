<script setup lang="ts">
/**
 * 2025/3/29 22:57
 * @author <a href="https://github.com/wzh-devin">devin</a>
 * @description 主布局
 * @version 1.0
 * @since 1.0
 */
import GlobalHeader from '@/components/global/GlobalHeader.vue'
</script>

<template>
  <div class="basic-layout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">底部导航栏</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped lang="less">
.basic-layout {
  .header {
    padding: 0;
    height: 60px;
    line-height: 60px;
  }

  .content {
    background: linear-gradient(to right, #bbb, #fff);
    padding: 20px;
  }

  .footer {
    background-color: green;
    padding: 16px;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
  }
}
</style>
