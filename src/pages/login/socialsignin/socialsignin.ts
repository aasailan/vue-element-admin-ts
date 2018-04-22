/*
 * @Author: qiao 
 * @Date: 2018-04-22 13:36:02 
 * @Last Modified by:   qiao 
 * @Last Modified time: 2018-04-22 13:36:02 
 * 社交登录处理
 */
import openWindow from '@/utils/openWindow';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action } from 'vuex-class';

@Component({
  name: 'social-signin'
})
export default class SocialSigninComp extends Vue {

  wechatHandleClick(thirdpart) {
    this.$store.commit('SET_AUTH_TYPE', thirdpart);
    const appid = 'xxxxx';
    const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/authredirect');
    const url = 'https://open.weixin.qq.com/connect/qrconnect?appid=' + appid + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=snsapi_login#wechat_redirect';
    openWindow(url, thirdpart, 540, 540);
  }

  tencentHandleClick(thirdpart) {
    this.$store.commit('SET_AUTH_TYPE', thirdpart);
    const client_id = 'xxxxx';
    const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/authredirect');
    const url = 'https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirect_uri;
    openWindow(url, thirdpart, 540, 540);
  }
}
