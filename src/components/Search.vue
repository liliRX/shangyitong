<template>
  <div class="search">
    <el-autocomplete
      clearable
      placeholder="请输入医院名称"
      @select="handleSelect"
    />
    <el-button type="primary" class="ml-2" :icon="Search"> 搜索 </el-button>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
const handleSelect = () => {};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-top: 20px;

  :deep(.el-autocomplete) {
    width: 400px;
  }
  
}
</style>
