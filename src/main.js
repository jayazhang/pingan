// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// pannel组件
import CommonPannel from '@/components/CommonPannel.vue'
Vue.component('common-pannel', CommonPannel)
// confirm插件
import { ConfirmPlugin } from './plugin'
Vue.use(ConfirmPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
