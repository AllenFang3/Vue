// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import {Header,Swipe, SwipeItem ,Button} from 'mint-ui'

import './libs/mui/css/mui.min.css'
import './libs/mui/css/icons-extra.css'
import router from './router/index'
import VueResource from 'vue-resource'
Vue.use(VueResource) 

Vue.use(VueRouter)

import moment from 'moment'
//注册成标签（全局）
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
