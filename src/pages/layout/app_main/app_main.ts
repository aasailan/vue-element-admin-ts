/*
 * @Author: qiao 
 * @Date: 2018-03-22 14:27:12 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-03-22 14:28:49
 * 中间操作区域
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import { Action } from 'vuex-class';

@Component({
    name: 'AppMain'
})
export default class AppMainComp extends Vue {

    // get key() {
    //     return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
}
