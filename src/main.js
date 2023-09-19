// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import router from './router';
// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import Vuex from 'vuex';
import store from "./store";

Vue.use(VueRouter);
//安装ElementUI
Vue.use(ElementUI);
Vue.prototype.axios = axios;
Vue.use(Vuex)
Vue.config.productionTip = false;
//路由跳转之前
router.beforeEach((to, from, next) => {
  let isLogin = sessionStorage.getItem('isLogin');
  //注销
  if (to.path == '/logout') {
    //清空
    sessionStorage.clear();
    //跳转到登陆页面
    next({path: '/login'});
  } else if (to.path =='/login') {
    //判断是否为空，不为空，跳转至首页
    if (isLogin != null) {
      next({path: '/main'});
    }
  } else if (isLogin == null) {
    next({path: '/login'});
  }
  //下一个路由
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // 使用ELementUI
  render: h => h(App)
})
