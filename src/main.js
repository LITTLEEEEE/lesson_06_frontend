// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VCharts from 'v-charts'
import store from './store'

Vue.use(iView)
Vue.use(VCharts)

Vue.config.productionTip = false
// 引入工具文件
const commonUtil = require('@/common/utils')
// 引入常量文件
const constant = require('@/common/constants')
// 引入MOCk组件
process.env.MOCK && require('@/common/mock')
// 引入api配置文件
const api = require('@/common/url/api')
Vue.prototype.globalApi = api
Vue.prototype.commonUtil = commonUtil
Vue.prototype.constant = constant
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
