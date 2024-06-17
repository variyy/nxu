// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment'
import * as echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.prototype.$momoent = moment
Vue.config.productionTip = false
Vue.prototype.axios = axios
// axios.defaults.baseURL = IPConfig.IP + ':' + IPConfig.HOST

Vue.use(ElementUI)
Vue.use(echarts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
