<!-- Vue应用的根模板 -->
<template>
  <!-- 包含整个应用的div容器 -->
  <div id="app">
    <!-- 路由视图占位符，用于显示当前路由对应的组件 -->
    <router-view />
  </div>
</template>

<!-- Vue组件的脚本部分 -->
<script>
// 导出App组件的配置
export default {
  // 组件名称
  name: 'App'
}
</script>

<!-- Vue组件的样式部分 -->
<style>
/* 设置应用的全局样式 */
#app {
  /* 设置字体族 */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* 设置字体平滑效果 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* 设置文本对齐方式 */
  text-align: center;
  /* 设置文本颜色 */
  color: #2c3e50;
  /* 设置上边距 */
  margin-top: 60px;
}
</style>