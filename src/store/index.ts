/*
 * @Author: qiao 
 * @Date: 2018-03-22 11:19:39 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-03-22 18:33:43
 * 状态管理
 */

import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import user from './modules/user';

Vue.use(Vuex);

export interface IRootState {

}

const store = new Vuex.Store({
    modules: {
        app,
        user
    }
});

export default store;
