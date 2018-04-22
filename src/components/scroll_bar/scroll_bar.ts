/*
 * @Author: qiao 
 * @Date: 2018-03-22 11:10:46 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-03-22 11:14:30
 * 滚动组件
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import { Action } from 'vuex-class';

const delta = 15;

@Component({
    name: 'scrollBar'
})
export default class Comp extends Vue {

    top: number = 0;

    $refs: {
        scrollContainer: HTMLElement,
        scrollWrapper: HTMLElement
    };

    handleScroll(e) {
        const eventDelta = e.wheelDelta || -e.deltaY * 3;
        const $container = this.$refs.scrollContainer;
        const $containerHeight = $container.offsetHeight;
        const $wrapper = this.$refs.scrollWrapper;
        const $wrapperHeight = $wrapper.offsetHeight;
        if (eventDelta > 0) {
          this.top = Math.min(0, this.top + eventDelta);
        } else {
          if ($containerHeight - delta < $wrapperHeight) {
            if (this.top < -($wrapperHeight - $containerHeight + delta)) {
              this.top = this.top;
            } else {
              this.top = Math.max(this.top + eventDelta, $containerHeight - $wrapperHeight - delta);
            }
          } else {
            this.top = 0;
          }
        }
    }
}
