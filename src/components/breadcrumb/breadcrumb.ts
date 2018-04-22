/*
 * @Author: qiao 
 * @Date: 2018-03-22 13:54:07 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-03-22 14:03:15
 * 面包屑导航组件
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import { Action } from 'vuex-class';
import { RouteRecord } from 'vue-router';
import { Watch } from 'vue-property-decorator';

@Component({})
export default class Comp extends Vue {

    levelList = null;

    @Watch('$route')
    changeRoute() {
        console.log('路由改变');
        this.getBreadcrumb();
    }

    created() {
        this.getBreadcrumb();
    }

    getBreadcrumb() {
        let matched: any[] = this.$route.matched.filter(item => item.name);
        const first = matched[0];
        if (first && first.name !== 'dashboard') {
            const firstMatched = { 
                path: '/dashboard', 
                meta: { title: 'Dashboard' }
            };
            matched = [firstMatched].concat(matched);
        }
        this.levelList = matched;
    }
}
