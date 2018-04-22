/*
 * @Author: qiao 
 * @Date: 2018-03-22 13:51:44 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-03-22 14:24:44
 * 头部导航栏组件
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, State } from 'vuex-class';

import Breadcrumb from '@/components/breadcrumb/breadcrumb.vue';
import Hamburger from '@/components/hamburger/hamburger.vue';

@Component({
    components: {
        Breadcrumb,
        Hamburger
    }
})
export default class NavbarComp extends Vue {

    @State(state => state.app.sidebar)
    sidebar;

    @State(state => state.user.user.headPortrait)
    avatar: string;

    @Action('toggleSideBar')
    toggleSideBar;

    logout() {
        // 退出登录
        console.log('logout');
    }
}
