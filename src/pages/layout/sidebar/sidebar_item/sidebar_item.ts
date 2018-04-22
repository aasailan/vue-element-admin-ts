/*
 * @Author: qiao 
 * @Date: 2018-03-22 10:55:33 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-04-22 14:47:56
 * 侧边导航栏按钮项
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import { Action } from 'vuex-class';
import { Prop } from 'vue-property-decorator';

@Component({
    name: 'SidebarItem'
})
export default class SidebarItemComp extends Vue {
    
    @Prop()
    routes: Array<any>;

    @Prop()
    isNest: boolean = false;
}
