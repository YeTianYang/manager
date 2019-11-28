import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
//导入基础样式
import '@/assets/css/base.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
