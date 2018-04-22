<template>
  <!-- 主要布局 -->
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <!-- 侧边栏 -->
    <sidebar class="sidebar-container"></sidebar>
    <!-- 中间主要内容区 -->
    <div class="main-container">
      <!-- 顶部导航栏 -->
      <navbar></navbar>
      <!-- 中间操作区 -->
      <app-main></app-main>
    </div>
  </div>
</template>

<script src="./layout.ts" lang="ts">
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/assets/css/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
