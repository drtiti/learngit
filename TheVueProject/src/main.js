// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import babel from 'babel-polyfill'

import './polyfill'
import axios from 'axios'
import Vuex from 'vuex'
import {demoFunc} from '@/api/apis'
Vue.use(element)

Vue.use(babel)
Vue.use(Vuex)
Vue.config.productionTip = false

axios.defaults.baseURI = 'http://127.0.0.1:8080'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

demoFunc({A: '1', B: '2'})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
