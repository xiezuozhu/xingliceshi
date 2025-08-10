// 从pinia中导入defineStore方法，用于定义状态存储
import { defineStore } from 'pinia'

// 导出名为'main'的状态存储
export default defineStore('main', {
  // 定义状态
  state: () => ({
    // 用户信息
    user: null,
    // 测试结果数组
    testResults: []
  }),
  
  // 定义actions，用于修改state中的数据
  actions: {
    // 设置用户信息
    setUser: function(userInfo) {
      this.user = userInfo;
    },
    
    // 添加测试结果
    addTestResult: function(result) {
      this.testResults.push(result);
    },
    
    // 清除所有测试结果
    clearTestResults: function() {
      this.testResults = [];
    }
  },
  
  // 定义getters，用于获取state中的数据
  getters: {
    // 获取最新的测试结果
    latestResult: (state) => {
      return state.testResults.length > 0 
        ? state.testResults[state.testResults.length - 1] 
        : null;
    }
  }
});