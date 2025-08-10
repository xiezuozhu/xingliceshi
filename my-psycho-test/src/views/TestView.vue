<!-- 心理测试页面组件的模板部分 -->
<template>
  <!-- 心理测试页面容器 -->
  <div class="test">
    <!-- 显示当前测试的标题 -->
    <h1>{{ currentTest.title }}</h1>
    <!-- 显示当前测试的描述 -->
    <p>{{ currentTest.description }}</p>
    
    <!-- 如果测试未完成则显示测试题目 -->
    <div v-if="!testCompleted">
      <!-- 使用过渡组件包装问题卡片 -->
      <transition name="slide" mode="out-in">
        <!-- 使用Element Plus卡片组件显示当前问题 -->
        <el-card class="question-card" :key="currentQuestionIndex">
          <!-- 显示问题编号和内容 -->
          <h3>问题 {{ currentQuestionIndex + 1 }}: {{ currentTest.questions[currentQuestionIndex].text }}</h3>
          <!-- 使用自定义样式的选项按钮 -->
          <div class="options-container">
            <button 
              v-for="option in currentTest.questions[currentQuestionIndex].options" 
              :key="option.value" 
              :class="['option-button', { selected: answers[currentQuestionIndex] === option.value }]"
              @click="selectOption(option.value)"
            >
              {{ option.text }}
            </button>
          </div>
        </el-card>
      </transition>
      
      <!-- 导航按钮区域 -->
      <div class="navigation">
        <!-- 上一题按钮，当在第一题时禁用 -->
        <el-button @click="prevQuestion" :disabled="currentQuestionIndex === 0">上一题</el-button>
        <!-- 提交测试按钮 -->
        <el-button v-if="currentQuestionIndex >= currentTest.questions.length - 1" type="primary" @click="submitTest">提交测试</el-button>
        <!-- 下一题按钮 -->
        <el-button v-else type="primary" @click="nextQuestion" :disabled="answers[currentQuestionIndex] === null">下一题</el-button>
        <!-- 返回首页按钮 -->
        <el-button @click="goHome">返回首页</el-button>
      </div>
    </div>
    
    <!-- 如果测试已完成则显示测试结果 -->
    <div v-else>
      <!-- 使用Element Plus卡片组件显示测试结果 -->
      <el-card class="result-card">
        <!-- MBTI测试结果 -->
        <div v-if="testType === 'mbti'">
          <!-- 结果标题 -->
          <h2>您的MBTI人格类型</h2>
          <h3>{{ mbtiResult.type }} - {{ mbtiResult.description.name }}</h3>
          
          <!-- 显示百分比倾向 -->
          <p>倾向分析:</p>
          <ul>
            <li>外向(E) vs 内向(I): {{ mbtiResult.percentages.EI }}% 倾向于{{ mbtiResult.type[0] === 'E' ? '外向' : '内向' }}</li>
            <li>感觉(S) vs 直觉(N): {{ mbtiResult.percentages.SN }}% 倾向于{{ mbtiResult.type[1] === 'S' ? '感觉' : '直觉' }}</li>
            <li>思考(T) vs 情感(F): {{ mbtiResult.percentages.TF }}% 倾向于{{ mbtiResult.type[2] === 'T' ? '思考' : '情感' }}</li>
            <li>判断(J) vs 知觉(P): {{ mbtiResult.percentages.JP }}% 倾向于{{ mbtiResult.type[3] === 'J' ? '判断' : '知觉' }}</li>
          </ul>
          
          <!-- 添加图表展示 -->
          <div class="chart-container">
            <h4>维度倾向图表:</h4>
            <!-- E/I 维度 -->
            <div class="chart-item">
              <span>外向(E) vs 内向(I):</span>
              <el-progress :percentage="mbtiResult.percentages.EI" :format="percentage => `${percentage}% ${mbtiResult.type[0] === 'E' ? '外向' : '内向'}`"></el-progress>
            </div>
            <!-- S/N 维度 -->
            <div class="chart-item">
              <span>感觉(S) vs 直觉(N):</span>
              <el-progress :percentage="mbtiResult.percentages.SN" :format="percentage => `${percentage}% ${mbtiResult.type[1] === 'S' ? '感觉' : '直觉'}`"></el-progress>
            </div>
            <!-- T/F 维度 -->
            <div class="chart-item">
              <span>思考(T) vs 情感(F):</span>
              <el-progress :percentage="mbtiResult.percentages.TF" :format="percentage => `${percentage}% ${mbtiResult.type[2] === 'T' ? '思考' : '情感'}`"></el-progress>
            </div>
            <!-- J/P 维度 -->
            <div class="chart-item">
              <span>判断(J) vs 知觉(P):</span>
              <el-progress :percentage="mbtiResult.percentages.JP" :format="percentage => `${percentage}% ${mbtiResult.type[3] === 'J' ? '判断' : '知觉'}`"></el-progress>
            </div>
          </div>
          
          <!-- 显示关键词 -->
          <p><strong>关键词:</strong> {{ mbtiResult.description.keywords }}</p>
          
          <!-- 显示核心性格描述 -->
          <p><strong>核心性格描述:</strong> {{ mbtiResult.description.description }}</p>
          
          <!-- 显示潜在职业方向 -->
          <p><strong>潜在职业方向:</strong> {{ mbtiResult.description.careers }}</p>
          
          <!-- 显示人际关系模式 -->
          <p><strong>人际关系模式:</strong> {{ mbtiResult.description.relationships }}</p>
        </div>
        
        <!-- 其他测试结果 -->
        <div v-else>
          <h2>您的测试结果</h2>
          <p>您的测试得分: {{ otherTestResult.score }}</p>
          <p>结果分析: {{ otherTestResult.analysis }}</p>
        </div>
        
        <!-- 重新测试按钮 -->
        <el-button type="primary" @click="restartTest">重新测试</el-button>
        <!-- 返回首页按钮 -->
        <el-button @click="goHome">返回首页</el-button>
      </el-card>
    </div>
  </div>
</template>

<!-- 心理测试页面组件的脚本部分 -->
<script>
// 导入MBTI测试相关工具
import { calculateMBTI, mbtiQuestions } from '../utils/mbti.js'
// 导入其他测试题目
import { sasQuestions, sdsQuestions, personalityQuestions } from '../utils/testQuestions.js'

// 导出心理测试页面组件配置
export default {
  // 组件名称
  name: 'TestView',
  // 组件数据
  data() {
    // 获取测试类型
    const testType = localStorage.getItem('testType') || 'mbti';
    
    // 根据测试类型设置题目
    let questions = [];
    let title = '';
    let description = '';
    
    switch(testType) {
      case 'mbti':
        questions = mbtiQuestions;
        title = 'MBTI人格类型测试';
        description = '本测试包含93道题目，用于评估您的MBTI人格类型。请根据您的实际情况选择最合适的答案。';
        break;
      case 'sas':
        questions = sasQuestions;
        title = '焦虑自评量表(SAS)';
        description = '本测试包含20道题目，用于评估您的焦虑程度。请根据您的实际情况选择最合适的答案。';
        break;
      case 'sds':
        questions = sdsQuestions;
        title = '抑郁自评量表(SDS)';
        description = '本测试包含20道题目，用于评估您的抑郁程度。请根据您的实际情况选择最合适的答案。';
        break;
      case 'personality':
        questions = personalityQuestions;
        title = '一般人格测试';
        description = '本测试包含10道题目，用于评估您的人格特征。请根据您的实际情况选择最合适的答案。';
        break;
      default:
        questions = mbtiQuestions;
        title = 'MBTI人格类型测试';
        description = '本测试包含93道题目，用于评估您的MBTI人格类型。请根据您的实际情况选择最合适的答案。';
    }
    
    return {
      // 测试类型
      testType,
      // 当前问题索引
      currentQuestionIndex: 0,
      // 用户答案数组，初始化为与问题数量相同的null数组
      answers: Array(questions.length).fill(null),
      // 测试是否完成
      testCompleted: false,
      // MBTI测试结果
      mbtiResult: null,
      // 其他测试结果
      otherTestResult: null,
      // 当前测试数据
      currentTest: {
        // 测试标题
        title,
        // 测试描述
        description,
        // 测试问题数组
        questions: questions.map(q => ({
          id: q.id,
          text: q.text,
          options: [
            { value: 1, text: '完全不同意' },
            { value: 2, text: '很不同意' },
            { value: 3, text: '稍不同意' },
            { value: 4, text: '中立' },
            { value: 5, text: '稍同意' },
            { value: 6, text: '很同意' },
            { value: 7, text: '完全同意' }
          ]
        }))
      }
    }
  },
  // 计算属性
  computed: {
    // 无计算属性
  },
  // 组件方法
  methods: {
    // 下一题方法
    nextQuestion() {
      // 如果已选择答案且不是最后一题，则切换到下一题
      if (this.answers[this.currentQuestionIndex] !== null && this.currentQuestionIndex < this.currentTest.questions.length - 1) {
        this.currentQuestionIndex++
      }
    },
    // 选择选项方法
    selectOption(value) {
      // 设置答案
      this.answers[this.currentQuestionIndex] = value;
      
      // 延迟切换到下一题，给用户视觉反馈
      setTimeout(() => {
        this.nextQuestion();
      }, 300);
    },
    // 上一题方法
    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--
      }
    },
    // 提交测试方法
    submitTest() {
      // 根据测试类型计算结果
      if (this.testType === 'mbti') {
        // 计算MBTI结果
        this.mbtiResult = calculateMBTI(this.answers);
      } else {
        // 计算其他测试结果（简化处理）
        const totalScore = this.answers.reduce((sum, answer) => sum + (answer || 0), 0);
        let analysis = '';
        
        if (this.testType === 'sas' || this.testType === 'sds') {
          if (totalScore < 20) {
            analysis = '您的测试结果正常，无明显症状。';
          } else if (totalScore < 40) {
            analysis = '您的测试结果轻度异常，建议关注相关症状。';
          } else if (totalScore < 60) {
            analysis = '您的测试结果中度异常，建议寻求专业帮助。';
          } else {
            analysis = '您的测试结果重度异常，强烈建议寻求专业帮助。';
          }
        } else {
          analysis = '您的测试已完成，具体结果分析请咨询专业人士。';
        }
        
        this.otherTestResult = {
          score: totalScore,
          analysis: analysis
        };
      }
      
      this.testCompleted = true;
    },
    // 重新测试方法
    restartTest() {
      this.currentQuestionIndex = 0
      // 初始化答案数组，确保每个问题都有默认值
      this.answers = Array(this.currentTest.questions.length).fill(null)
      this.testCompleted = false
      this.mbtiResult = null
      this.otherTestResult = null
    },
    // 返回首页方法
    goHome() {
      // 清除授权状态并跳转到首页
      localStorage.removeItem('isAuthenticated')
      this.$router.push('/')
    },
    // 在组件销毁前清除授权状态
    beforeUnmount() {
      localStorage.removeItem('isAuthenticated')
    }
  }
}
</script>

<!-- 心理测试页面组件的样式部分，scoped表示样式只作用于当前组件 -->
<style scoped>
/* 设置心理测试页面容器样式 */
.test {
  /* 设置最大宽度 */
  max-width: 800px;
  /* 设置居中 */
  margin: 0 auto;
  /* 设置内边距 */
  padding: 20px;
}

/* 设置问题卡片和结果卡片样式 */
.question-card, .result-card {
  /* 设置下边距 */
  margin-bottom: 20px;
}

/* 设置单选框组样式 */
.radio-group {
  /* 设置为弹性盒子 */
  display: flex;
  /* 设置为垂直排列 */
  flex-direction: column;
  /* 设置对齐方式 */
  align-items: flex-start;
  /* 设置上边距 */
  margin-top: 10px;
}

/* 设置导航区域样式 */
.navigation {
  /* 设置为弹性盒子 */
  display: flex;
  /* 设置两端对齐 */
  justify-content: space-between;
  /* 设置上边距 */
  margin-top: 20px;
}

/* 设置图表容器样式 */
.chart-container {
  /* 设置上边距 */
  margin-top: 20px;
  /* 设置下边距 */
  margin-bottom: 20px;
}

/* 设置图表项样式 */
.chart-item {
  /* 设置下边距 */
  margin-bottom: 15px;
}

/* 设置图表项内文本样式 */
.chart-item span {
  /* 设置为块级元素 */
  display: block;
  /* 设置下边距 */
  margin-bottom: 5px;
  /* 设置字体加粗 */
  font-weight: bold;
}

/* 滑动过渡效果 */
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* 选项容器样式 */
.options-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

/* 选项按钮样式 */
.option-button {
  padding: 15px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f5f5f5;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* 选中选项按钮样式 */
.option-button.selected {
  background-color: #409eff;
  color: white;
  border-color: #409eff;
}

/* 按钮悬停效果 */
.option-button:hover {
  background-color: #e6f0ff;
  border-color: #b3d9ff;
}

/* 选中按钮悬停效果 */
.option-button.selected:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
}
</style>