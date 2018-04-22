/*
 * @Author: qiao 
 * @Date: 2018-03-22 10:43:42 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-03-22 14:29:36
 * 整体布局组件
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import { Action } from 'vuex-class';

import Sidebar from './sidebar/sidebar.vue';
import Navbar from './navbar/navbar.vue';
import AppMain from './app_main/app_main.vue';

@Component({
    name: 'layout',
    components: {
        Sidebar,
        Navbar,
        AppMain
    }
})
export default class LayoutComp extends Vue {
    get sidebar() {
        return this.$store.state.app.sidebar;
    }
}
