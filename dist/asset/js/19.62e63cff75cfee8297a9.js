webpackJsonp([19],{560:function(t,e,n){"use strict";function i(t){s||n(759)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(760),o=n(761),s=!1,r=n(6),c=i,u=r(a.a,o.a,!1,c,null,null);u.options.__file="src\\pages\\setting\\acount_setting\\bind_alipay\\index.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)}),e.default=u.exports},759:function(t,e){},760:function(t,e,n){"use strict";var i=n(12),a=n(55),o=n.n(a),s=n(110),r=n(575),c=n(36),u=n(60),l=n(162),f=(n.n(l),n(61)),h=n(111),d=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),p=this&&this.__decorate||function(t,e,n,i){var a,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,n,s):a(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s},b=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},y=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(a,o){function s(t){try{c(i.next(t))}catch(t){o(t)}}function r(t){try{c(i.throw(t))}catch(t){o(t)}}function c(t){t.done?a(t.value):new n(function(e){e(t.value)}).then(s,r)}c((i=i.apply(t,e||[])).next())})},v=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(a)throw new TypeError("Generator is already executing.");for(;c;)try{if(a=1,o&&(s=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(o,n[1])).done)return s;switch(o=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,o=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(s=c.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){c.label=n[1];break}if(6===n[0]&&c.label<s[1]){c.label=s[1],s=n;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(n);break}s[2]&&c.ops.pop(),c.trys.pop();continue}n=e.call(t,c)}catch(t){n=[6,t],o=0}finally{a=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var a,o,s,r,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return r={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r},m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.edit=!1,e.aliPaymentId=null,e.aliPaymentName=null,e.buttonTxt=null,e.BUTTON_TXT={CHANGE:"修改绑定",BIND:"绑定"},e}return d(e,t),Object.defineProperty(e.prototype,"buttonEnable",{get:function(){return this.buttonTxt===this.BUTTON_TXT.CHANGE||this.buttonTxt===this.BUTTON_TXT.BIND&&this.aliPaymentId.length>0&&this.aliPaymentName.length>0},enumerable:!0,configurable:!0}),e.prototype.activated=function(){this.aliPaymentId=this.$store.state.user.aliPaymentId||"暂未绑定",this.aliPaymentName=this.$store.state.user.aliPaymentName||"暂未绑定",this.buttonTxt=this.BUTTON_TXT.CHANGE,this.edit=!1},e.prototype.clickButton=function(){var t=this;if(this.buttonTxt===this.BUTTON_TXT.CHANGE)this.edit=!0,this.buttonTxt=this.BUTTON_TXT.BIND;else if(this.buttonTxt===this.BUTTON_TXT.BIND){var e=this.aliPaymentId,n=this.aliPaymentName;if(!c.a.checkEmail(e)&&!c.a.checkPhoneNumber(e))return void this.showToast(new u.a("账号必须是邮箱或者手机号"));var i=new l.Subject,a=i.subscribe(function(i){return y(t,void 0,void 0,function(){var t,a;return v(this,function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),[4,f.a.changBindPayment(1,n,e,i)];case 1:return t=o.sent(),[4,this.getBindInfo()];case 2:return o.sent(),this.showToast(new u.a("更换支付宝账号成功")),this.$router.go(-1),[3,4];case 3:return a=o.sent(),this.showToast(new u.a(a.message)),[3,4];case 4:return[2]}})})}),o={phone:this.$store.state.user.user.tel,type:"bindThirdPayment",subject:i,subscription:a};c.a.saveItem(h.a.verificationConfig,o),this.$router.push({name:"verificationCode"})}},e.prototype.editHint=function(t){this.edit||this.showToast(new u.a("请先点击下方修改绑定按钮再进行编辑"))},p([Object(s.a)("showToast"),b("design:type",Object)],e.prototype,"showToast",void 0),p([Object(s.a)("getBindInfo"),b("design:type",Object)],e.prototype,"getBindInfo",void 0),e=p([o()({components:{"mu-text-field":r.a}})],e)}(i.default);e.a=m},761:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content",attrs:{id:"bind-alipay"}},[n("div",{staticClass:"title"},[t._v("支付宝账号")]),t._v(" "),n("div",{staticClass:"phone",on:{click:function(e){t.editHint("account")}}},[n("mu-text-field",{attrs:{hintText:"请输入支付宝账号",disabled:!t.edit},model:{value:t.aliPaymentId,callback:function(e){t.aliPaymentId=e},expression:"aliPaymentId"}})],1),t._v(" "),n("div",{staticClass:"hint"},[t._v("绑定支付宝账号只用于收款，不作他用")]),t._v(" "),n("div",{staticClass:"title"},[t._v("账户名")]),t._v(" "),n("div",{staticClass:"phone",on:{click:function(e){t.editHint("name")}}},[n("mu-text-field",{attrs:{hintText:"请输入支付宝账户名",disabled:!t.edit},model:{value:t.aliPaymentName,callback:function(e){t.aliPaymentName=e},expression:"aliPaymentName"}})],1),t._v(" "),n("div",{staticClass:"hint"},[t._v("账户名是支付宝账户上的真实姓名，请如实填写")]),t._v(" "),n("div",{staticClass:"button"},[n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:t.buttonTxt,primary:"",disabled:!t.buttonEnable,fullWidth:""},on:{click:t.clickButton}})],1)])},a=[];i._withStripped=!0;var o={render:i,staticRenderFns:a};e.a=o}});
//# sourceMappingURL=19.62e63cff75cfee8297a9.js.map