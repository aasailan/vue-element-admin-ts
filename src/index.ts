/*
 * @Author: qiao
 * @Date: 2017-10-23 14:48:50 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-04-22 14:54:49
 */

/**
 * 使用babel polyfill 与 babel-presets-envs 插件的 useBuiltIns="entry"搭配使用，使得能够根据编译目标环境自动引用全局的
 * polyfill。这句话一定要在整个应用的顶部调用，这样才能保证 polyfill在整个应用的最开始运行
 */
import 'babel-polyfill';
// 因为使用 providePlugin 所以可以不引用直接使用 Vue 
import Vue from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入自定义css
import '@/assets/css/index.scss';  // global css
import '@/assets/iconfont/iconfont.css';
// import '@/icons'; // icon

import i18n from '@/lang'; // Internationalization

import store from '@/store';
import router from '@/router';

import App from '@/App.vue';

Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
});

const root = new Vue({
  el: '#root',
  router,
  store,
  i18n,
  render: createVnode => {
    // 记得查看一下createVnode函数的api
    const vnode = createVnode(App);
    return vnode;
  }
});
