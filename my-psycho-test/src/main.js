// 从vue中导入createApp函数，用于创建Vue应用实例
import { createApp } from 'vue'
// 导入根组件App.vue
import App from './App.vue'
// 导入路由配置
import router from './router'
// 从pinia中导入createPinia函数，用于创建状态管理实例
import { createPinia } from 'pinia'
// 导入Element Plus UI组件库
import ElementPlus from 'element-plus'
// 导入Element Plus的CSS样式
import 'element-plus/dist/index.css'
// 导入自定义的状态管理store
import store from './store'

// 创建Vue应用实例
const app = createApp(App)
// 创建Pinia状态管理实例
const pinia = createPinia()

// 将路由配置注册到应用中
app.use(router)
// 将Pinia状态管理注册到应用中
app.use(pinia)
// 将Element Plus UI组件库注册到应用中
app.use(ElementPlus)

// 将应用挂载到id为'app'的DOM元素上
app.mount('#app')