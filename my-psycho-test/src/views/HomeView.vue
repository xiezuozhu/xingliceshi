<!-- 首页组件的模板部分 -->
<template>
  <!-- 首页容器 -->
  <div class="home">
    <!-- 页面标题 -->
    <div class="header">
      <h1>心理评测网站</h1>
      <!-- 页面描述 -->
      <p class="description">欢迎来到心理评测网站，在这里您可以进行多种心理测试，了解自己的心理状态。</p>
    </div>
    
    <!-- 测试分类 -->
    <div class="test-categories">
      <h2>测试分类</h2>
      <el-row :gutter="30">
        <el-col :span="12">
          <el-card class="category-card" @click="goToTest('mbti')">
            <div class="card-content">
              <div class="icon mbti-icon"></div>
              <h3>MBTI人格测试</h3>
              <p>了解您的MBTI人格类型和行为模式</p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="category-card" @click="goToTest('sas')">
            <div class="card-content">
              <div class="icon sas-icon"></div>
              <h3>焦虑自评量表</h3>
              <p>评估您的焦虑程度</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    
    <!-- 热门测试 -->
    <div class="popular-tests">
      <h2>热门测试</h2>
      <el-row :gutter="30">
        <el-col :span="8">
          <el-card class="test-card" @click="goToTest('mbti')">
            <div class="card-content">
              <h4>MBTI职业性格测试</h4>
              <p class="test-description">探索16种人格类型的职业倾向</p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="test-card" @click="goToTest('sas')">
            <div class="card-content">
              <h4>焦虑自评量表(SAS)</h4>
              <p class="test-description">科学评估您的焦虑水平</p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="test-card" @click="goToTest('sds')">
            <div class="card-content">
              <h4>抑郁自评量表(SDS)</h4>
              <p class="test-description">了解您的情绪状态</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<!-- 首页组件的脚本部分 -->
<script>
// 导出首页组件配置
export default {
  // 组件名称
  name: 'HomeView',
  // 定义组件方法
  methods: {
    // 开始测试方法，点击按钮时调用
    startTest() {
      // 使用路由名称跳转到测试页面
      this.$router.push({ name: 'test' })
    },
    
    // 跳转到指定测试
    goToTest(testType) {
      // 保存测试类型到本地存储
      localStorage.setItem('testType', testType);
      // 跳转到授权码验证页面
      this.$router.push({ name: 'auth' })
    }
  }
}
</script>

<!-- 首页组件的样式部分，scoped表示样式只作用于当前组件 -->
<style scoped>
/* 设置首页容器样式 */
.home {
  /* 文本居中对齐 */
  text-align: center;
  /* 设置最大宽度 */
  max-width: 1200px;
  /* 居中显示 */
  margin: 0 auto;
  /* 设置内边距 */
  padding: 20px;
}

/* 页面标题样式 */
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 40px 20px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  color: white;
}

.header h1 {
  font-size: 2.5em;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.description {
  font-size: 1.2em;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* 测试分类样式 */
.test-categories {
  margin: 40px 0;
}

.test-categories h2,
.popular-tests h2 {
  font-size: 2em;
  margin-bottom: 30px;
  color: #333;
  position: relative;
}

.test-categories h2::after,
.popular-tests h2::after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 10px auto;
  border-radius: 2px;
}

/* 分类卡片样式 */
.category-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  border-radius: 15px;
  overflow: hidden;
  height: 100%;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.card-content {
  padding: 30px 20px;
}

.icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
}

.mbti-icon {
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
}

.sas-icon {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.category-card h3 {
  margin: 15px 0;
  color: #333;
}

/* 热门测试样式 */
.popular-tests {
  margin: 60px 0;
}

/* 测试卡片样式 */
.test-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
}

.test-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.test-card h4 {
  margin: 10px 0;
  color: #333;
}

.test-description {
  color: #666;
  font-size: 0.9em;
  line-height: 1.5;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header {
    padding: 20px 15px;
  }
  
  .header h1 {
    font-size: 2em;
  }
  
  .description {
    font-size: 1em;
  }
  
  .el-col {
    margin-bottom: 20px;
  }
}
</style>