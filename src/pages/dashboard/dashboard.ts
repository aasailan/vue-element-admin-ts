/*
 * @Author: qiao 
 * @Date: 2018-03-22 14:32:20 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-03-22 14:36:48
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, State } from 'vuex-class';

@Component({
    name: 'dashboard'
})
export default class DashboardComp extends Vue {

    @State(state => state.user.user.realname)
    name: string; 

    @State(state => state.user.user.roles)
    roles: string[];
}  
