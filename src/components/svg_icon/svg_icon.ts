/*
 * @Author: qiao 
 * @Date: 2018-03-22 15:53:14 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-03-23 09:21:10
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import { Action } from 'vuex-class';
import { Prop } from 'vue-property-decorator';

@Component({
    name: 'svg-icon'
})
export default class SvgIconComp extends Vue {

    @Prop()
    iconClass: string;

    @Prop()
    className: string;

    get iconName() {
        return `#icon-${this.iconClass}`;
    }

    get svgClass() {
        if (this.className) {
            return 'svg-icon ' + this.className;
        } else {
            return 'svg-icon';
        }
    }
}
