// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
//import VueAwesomeSwiper from 'vue-awesome-swiper'

// 重置浏览器样式
import 'styles/reset.css'
// 解决移动端1px问题
import 'styles/border.css'
// 解决移动端浏览器点击事件延迟
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
