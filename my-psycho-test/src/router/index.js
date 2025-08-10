// 从vue-router中导入创建路由所需的方法
import { createRouter, createWebHistory } from 'vue-router'
// 导入首页组件
import HomeView from '../views/HomeView.vue'

// 定义路由配置数组
const routes = [
  // 首页路由配置
  {
    // 路由路径
    path: '/',
    // 路由名称
    name: 'home',
    // 对应的组件
    component: HomeView
  },
  // 关于我们页面路由配置
  {
    // 路由路径
    path: '/about',
    // 路由名称
    name: 'about',
    // 路由级别的代码分割
    // 这会为此路由生成一个独立的代码块 (about.[hash].js)
    // 当访问此路由时，该代码块会被懒加载
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // 授权码验证页面路由配置
  {
    // 路由路径
    path: '/auth',
    // 路由名称
    name: 'auth',
    // 对应的组件
    component: () => import('../views/AuthCodeView.vue')
  },
  // 测试页面路由配置
  {
    // 路由路径
    path: '/test',
    // 路由名称
    name: 'test',
    // 对应的组件，使用懒加载方式导入
    component: () => import('../views/TestView.vue'),
    // 路由元信息，标记需要授权验证
    meta: { requiresAuth: true }
  }
]

// 创建路由实例
const router = createRouter({
  // 使用HTML5历史模式
  history: createWebHistory(),
  // 路由配置
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 检查目标路由是否需要授权验证
  if (to.meta.requiresAuth) {
    // 检查是否已通过授权码验证（通过localStorage存储验证状态）
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
    
    // 如果已验证，允许访问
    if (isAuthenticated) {
      next()
    } else {
      // 如果未验证，重定向到授权码验证页面
      next('/auth')
    }
  } else {
    // 如果目标路由不需要授权验证，直接允许访问
    next()
  }
})

// 导出路由实例
export default router