<template>
  <div class="bottom-container">
    <div class="bottom-content">
      <div class="bottom-left">
        <span>京ICP备</span>
        <span>13018369号</span>
        <span>电话挂号010-56253825</span>
      </div>
      <div class="bottom-right">
        <ul>
          <li>联系我们</li>
          <li>合作伙伴</li>
          <li>用户协议</li>
          <li>隐私协议</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.bottom-container {
  width: 100vw;
  height: 50px;
  background-color: #e9e9e9;
  display: flex;
  justify-content: center;
  .bottom-content {
    width: 90%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bottom-left {
      display: flex;
      justify-content: flex-start;
      span {
        color: #3d3d3d;
        margin-right: 10px;
      }
    }
    .bottom-right {
      display: flex;
      justify-content: flex-end;
      ul {
        display: flex;
        li {
          color: #3d3d3d;
          font-size: 14px;
          margin-right: 10px;}
      }
    }
  }
}
</style>
