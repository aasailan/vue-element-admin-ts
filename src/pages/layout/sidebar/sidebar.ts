/*
 * @Author: qiao 
 * @Date: 2018-03-22 10:51:17 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-03-22 13:46:14
 * 侧边栏导航组件
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, State } from 'vuex-class';

import SidebarItem from './sidebar_item/sidebar_item.vue';
import ScrollBar from '@/components/scroll_bar/scroll_bar.vue';
import { IAppState } from '@/store/modules/app';

@Component({
    components: {
        SidebarItem,
        ScrollBar
    }
})
export default class SidebarComp extends Vue {
    @State(state => state.app.sidebar)
    sidebar;

    get routes() {
        return this.$router['options'].routes;
    }

    get isCollapse() {
        return !this.sidebar.opened;
    }
}
