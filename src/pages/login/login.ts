/*
 * @Author: qiao 
 * @Date: 2018-03-21 19:22:07 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-04-22 15:24:02
 * 登录
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import { Action } from 'vuex-class';
import { isvalidUsername } from '@/utils/validate';

// 语言选择模块
// import LangSelect from '@/components/LangSelect';
// 社交登录
// import SocialSign from './socialsignin/socialsignin.vue';

/**
 * 自定义验证用户名函数
 * @param rule 
 * @param value 
 * @param callback 
 */
function validateUsername(rule, value, callback) {
  if (!isvalidUsername(value)) {
    callback(new Error('Please enter the correct user name'));
  } else {
    callback();
  }
}

/**
 * 自定义验证用户密码
 * @param rule 
 * @param value 
 * @param callback 
 */
function validatePassword(rule, value: string, callback) {
  if (value.length < 6) {
    callback(new Error('The password can not be less than 6 digits'));
  } else {
    callback();
  }
}

@Component({
  name: 'login',
  components: {
    // SocialSign,
    // LangSelect
  }
})
export default class LoginComp extends Vue {

  // 登录表单
  loginForm = {
    username: '',
    password: ''
  };

  loginRules = {
    username: [
      {
        required: true,
        trigger: 'blur',
        validator: validateUsername
      }
    ],
    password: [
      {
        required: true,
        trigger: 'blur',
        validator: validatePassword
      }
    ]
  };

  passwordType = 'password';

  loading = false;

  showDialog = false;

  $refs: {
    loginForm: any;
  };

  // 显示登录密码
  showPwd() {
    if (this.passwordType === 'password') {
      this.passwordType = '';
    } else {
      this.passwordType = 'password';
    }
  }

  // 处理登录
  handleLogin() {
    this.$refs.loginForm.validate(valid => {
      if (valid) {
        this.loading = true;
        // 在这里提交登录请求

        this.$router.replace({ path: '/' });

        this.loading = false;
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }

  afterQRScan() {
    // const hash = window.location.hash.slice(1)
    // const hashObj = getQueryObject(hash)
    // const originUrl = window.location.origin
    // history.replaceState({}, '', originUrl)
    // const codeMap = {
    //   wechat: 'code',
    //   tencent: 'code'
    // }
    // const codeName = hashObj[codeMap[this.auth_type]]
    // if (!codeName) {
    //   alert('第三方登录失败')
    // } else {
    //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //     this.$router.push({ path: '/' })
    //   })
    // }
  }

  created() {
    // window.addEventListener('hashchange', this.afterQRScan)
  }
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan)
  }
}
