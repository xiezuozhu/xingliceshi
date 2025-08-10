<!-- 关于我们页面组件的模板部分 -->
<template>
  <!-- 关于我们页面容器 -->
  <div class="about">
    <!-- 页面标题 -->
    <h1>关于我们</h1>
    <!-- 网站介绍 -->
    <p>这是一个专业的心理评测网站，提供多种心理测试量表，帮助您了解自己的心理状态。</p>
    <!-- 测试量表介绍 -->
    <p>我们的测试量表包括：</p>
    <!-- 测试量表列表 -->
    <ul>
      <li>焦虑自评量表(SAS)</li>
      <li>抑郁自评量表(SDS)</li>
      <li>症状自评量表(SCL-90)</li>
      <li>MBTI职业性格测试</li>
      <li>霍兰德职业兴趣测试</li>
    </ul>
  </div>
</template>

<!-- 关于我们页面组件的脚本部分 -->
<script>
// 导出关于我们页面组件配置
export default {
  // 组件名称
  name: 'AboutView'
}
</script>

<!-- 关于我们页面组件的样式部分，scoped表示样式只作用于当前组件 -->
<style scoped>
/* 设置关于我们页面容器样式 */
.about {
  /* 文本左对齐 */
  text-align: left;
  /* 设置最大宽度 */
  max-width: 800px;
  /* 设置居中 */
  margin: 0 auto;
}
</style>