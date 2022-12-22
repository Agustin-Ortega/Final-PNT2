import Vue from 'vue'
import App from './App.vue'

import './bootstrap'

import './form'


import { router } from './router'


import './axios'



import store from './store'

import './globalMixin'


Vue.config.productionTip = false

new Vue({
  router: router, 
  store,
  render: h => h(App),
}).$mount('#app')
