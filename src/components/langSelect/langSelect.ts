/*
 * @Author: qiao 
 * @Date: 2018-04-22 13:44:04 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-04-22 13:49:31
 * 语言选择
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import { Action } from 'vuex-class';

@Component({})
export default class Comp extends Vue {

  get language() {
    return this.$store.getters.language;
  }

  handleSetLanguage(lang) {
    // this.$i18n.locale = lang; ??? $i18n 是什么意思？由哪个插件提供
      this.$store.dispatch('setLanguage', lang);
      this.$message({
        message: 'switch language success',
        type: 'success'
      });
  }
}
