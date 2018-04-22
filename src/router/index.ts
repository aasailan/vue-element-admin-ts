
/*
 * @Author: qiao 
 * @Date: 2018-03-21 18:49:31 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-03-22 19:17:37
 * 管理路由
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import joeRouter from './joe-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    ...joeRouter
  ]
});

// 全局路由拦截器，鉴权
router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    // 在这里鉴权。没有权限跳转到login页面
    console.log('在这里鉴权');
  }
  next();
});

export default router;
