<template>
  <div class="top-container">
    <div class="top-content">
      <div class="top-left">
        <img class="logo" src="@/assets/images/logo.png" alt="尚医通的logo" />
        <h1 class="text">尚医通 预约挂号统一平台</h1>
      </div>
      <div class="top-right">
        <div class="text help">帮助中心</div>
        <div class="text login">登录/注册</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.top-container {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-bottom: 2px solid #eee;
  .top-content {
    width: 1200px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin: 0 auto;
    .top-left {
      display: flex;
      align-items: center;
      .logo {
        width: 60px;
      }

      .text {
        margin-left: 10px;
        font-size: 26px;
        color: #0066ee;
      }
    }
    .top-right {
      display: flex;
      align-items: center;
      .text {
        margin-right: 20px;
        font-size: 16px;
        color: #737373;
      }
    }
  }
}
</style>
