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
  position: fixed;
  z-index: 999;
  .top-content {
    width: 90vw;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .top-left {
      display: flex;
      align-items: center;
      .logo {
        width: 60px;
      }

      .text {
        margin-left: 10px;
        font-size: 24px;
        color: #70aeff;
      }
    }
    .top-right {
      display: flex;
      align-items: center;
      .text {
        margin-right: 20px;
        font-size: 15px;
        color: #969696;
      }
    }
  }
}
</style>
