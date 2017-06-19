import Vue from 'vue'
import App from './App.vue'

// 引入 mint-ui 模块
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import store from './store/store.js'

import router from './router/router.js'

import $ from 'jquery'
import './js/common.js'



new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
