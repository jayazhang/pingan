import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Main from '@/views/Main'
import Index from '@/views/Index'
import Demo from '@/views/Demo'
import DataSearch from '@/views/DataSearch'

Vue.use(Router)

export default new Router({
  routes: [
    // 登录页面
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // 主页面
    {
      path: '/main',
      component: Main,
      children: [
        // 首页
        { path: 'index', component: Index, name: 'Index' },
        // 数据查询
        { path: 'data-search', component: DataSearch, name: 'DataSearch' },
      ]
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    // 404时到首页
    {
      path: '*',
      redirect: '/main/index'
    }
  ]
})
