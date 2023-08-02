<template>
  <h1>home-menu</h1>
  <div class="container">
    <!-- 轮播图/走马灯 -->
    <Carousel />
    <!-- 搜索框 -->
    <Search />
  </div>
</template>

<script setup lang="ts">
import Carousel from "@/components/Carousel.vue";
import Search from "@/components/Search.vue";
</script>

<style lang="scss" scoped></style>
