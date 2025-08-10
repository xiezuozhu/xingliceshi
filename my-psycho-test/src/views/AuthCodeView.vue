<!-- 授权码验证页面组件 -->
<template>
  <div class="auth-code">
    <el-card class="auth-card">
      <h2>测试授权验证</h2>
      <p class="description">请输入授权码以继续进行测试</p>
      
      <el-form @submit.prevent="validateAuthCode">
        <el-form-item>
          <el-input 
            v-model="authCode" 
            placeholder="请输入授权码" 
            type="password"
            show-password
            size="large"
            class="auth-input"
            ref="authCodeInput"
            @keyup.enter="validateAuthCode"
          />
        </el-form-item>
        
        <div class="button-container">
          <el-button type="primary" @click="validateAuthCode" size="large" class="auth-button validate-button">验证授权码</el-button>
          <el-button @click="goBack" size="large" class="auth-button back-button">返回初始页</el-button>
        </div>
      </el-form>
      
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </el-card>
  </div>
</template>

<script>
// 导入授权码验证函数
import { isValidAuthCode } from '../utils/authCodes'

export default {
  name: 'AuthCodeView',
  data() {
    return {
      authCode: '',
      errorMessage: ''
    }
  },
  methods: {
    validateAuthCode() {
      // 验证授权码是否有效
      if (isValidAuthCode(this.authCode)) {
        // 验证成功，设置验证状态
        localStorage.setItem('isAuthenticated', 'true')
        
        // 获取测试类型
        const testType = localStorage.getItem('testType') || 'mbti';
        
        // 根据测试类型跳转到相应的测试页面
        this.$router.push('/test')
      } else {
        // 验证失败，显示错误信息
        this.errorMessage = '授权码错误，请重新输入'
      }
    },
    goBack() {
      // 返回首页
      this.$router.push('/')
    }
  },
  // 在页面激活时清除错误信息
  activated() {
    this.errorMessage = ''
    // 页面激活时聚焦到输入框
    this.$nextTick(() => {
      if (this.$refs.authCodeInput && this.$refs.authCodeInput.focus) {
        this.$refs.authCodeInput.focus()
      }
    })
  }
}
</script>

<style scoped>
.auth-code {
  max-width: 500px;
  margin: 20px auto;
  padding: 15px;
}

.auth-card {
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px 20px;
}

.auth-card h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
}

.description {
  font-size: 1em;
  margin-bottom: 25px;
  color: #666;
}

.el-form-item {
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-input {
  width: 100%;
  font-size: 16px; /* 防止iOS缩放 */
  padding: 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

/* 输入框焦点样式 */
.auth-input :deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 2px #409eff inset !important;
}

.button-container {
  display: flex;
  gap: 12px; /* 按钮之间的间距 */
  width: 100%;
  margin-top: 10px;
  align-items: center; /* 确保按钮在容器中居中对齐 */
}

/* 确保按钮在表单项目中有足够的间距 */
.el-form-item:last-child {
  margin-bottom: 10px;
}

.auth-button {
  flex: 1; /* 让两个按钮等宽 */
  min-width: 200px;
  font-size: 16px;
  padding: 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
  touch-action: manipulation; /* 防止双击缩放 */
  box-sizing: border-box; /* 确保padding和border包含在元素宽度内 */
  text-align: center; /* 确保按钮文本居中 */
}

.auth-button:active {
  transform: scale(0.98);
}

.validate-button {
  background-color: #409eff;
  border-color: #409eff;
  color: white;
}

.validate-button:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
  color: white;
}

.back-button {
  background-color: #f5f5f5;
  border-color: #dcdfe6;
  color: #606266;
}

.back-button:hover {
  background-color: #e6e6e6;
  border-color: #c0c4cc;
  color: #606266;
}

.error-message {
  color: #f56c6c;
  margin-top: 15px;
  font-size: 0.9em;
  padding: 10px;
  border-radius: 4px;
  background-color: #fef0f0;
}

/* 移动端优化 */
@media (max-width: 768px) {
  .auth-code {
    margin: 10px;
    padding: 10px;
  }
  
  .auth-card {
    padding: 25px 15px;
  }
  
  .auth-card h2 {
    font-size: 1.3em;
  }
  
  .description {
    font-size: 0.9em;
    margin-bottom: 20px;
  }
  
  .auth-input {
    padding: 12px;
  }
  
  .auth-input :deep(.el-input__wrapper.is-focus) {
    box-shadow: 0 0 0 1px #409eff inset !important;
  }
  
  .auth-button {
    padding: 16px;
    font-size: 17px;
  }
  
  .button-container {
    gap: 12px;
  }
}

/* 小屏幕优化 */
@media (max-width: 480px) {
  .auth-card {
    padding: 20px 10px;
  }
  
  .auth-card h2 {
    font-size: 1.2em;
  }
  
  .description {
    font-size: 0.85em;
    margin-bottom: 15px;
  }
  
  .auth-input {
    padding: 10px;
  }
  
  .auth-input :deep(.el-input__wrapper.is-focus) {
    box-shadow: 0 0 0 1px #409eff inset !important;
  }
  
  .auth-button {
    padding: 14px;
    font-size: 16px;
  }
  
  .button-container {
    gap: 10px;
  }
}
</style>