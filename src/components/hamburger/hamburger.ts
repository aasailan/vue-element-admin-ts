/*
 * @Author: qiao 
 * @Date: 2018-03-22 14:05:46 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-03-22 14:10:23
 * 
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import { Action } from 'vuex-class';
import { Prop } from 'vue-property-decorator';

@Component({
    name: 'hamburger'
})
export default class Comp extends Vue {

    @Prop({default: false})
    isActive: boolean;

    @Prop()
    toggleClick: Function;
}
