<template>
  <div class="layout">
  <!-- 顶部全局组件 -->
  <HospitalTop />

  <!-- 展示路由区域 -->
  <div class="routerviews">
    <router-view></router-view>
  </div>
    

  <!-- 底部全局组件 -->
  <HospitalBottom />
</div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  .routerviews {
    margin-top: 80px;
    min-height: 1200px;
    width: 90%;
    background-color:white;
  }
}
</style>
