import Vue from 'vue'
import App from './App'
// import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';//自动扫描该路径底下路由配置
import './assets/css/log.css'
//1导入axios
import Axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI);
//2 定义全局变量 axios
Vue.prototype.$axios = Axios
// 3
Axios.defaults.baseURL = 'api'
new Vue({
  router: router,
  //render 渲染App.vue
  render: h => h(App)
  //原始的js式这么写，上面式ES6
  // render:function (createElement) {
  //   return createElement('App');
  // }
}).$mount('#app')
