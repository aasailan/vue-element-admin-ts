webpackJsonp([18],{559:function(t,e,n){"use strict";function o(t){s||n(756)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(757),r=n(758),s=!1,a=n(6),u=o,c=a(i.a,r.a,!1,u,null,null);c.options.__file="src\\pages\\setting\\acount_setting\\bind_phone\\index.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)}),e.default=c.exports},756:function(t,e){},757:function(t,e,n){"use strict";var o=n(12),i=n(55),r=n.n(i),s=n(110),a=n(575),u=n(36),c=n(60),l=n(111),h=n(162),f=(n.n(h),n(61)),p=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),d=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(r<3?i(s):r>3?i(e,n,s):i(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},b=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},T=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(i,r){function s(t){try{u(o.next(t))}catch(t){r(t)}}function a(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,a)}u((o=o.apply(t,e||[])).next())})},y=this&&this.__generator||function(t,e){function n(t){return function(e){return o([t,e])}}function o(n){if(i)throw new TypeError("Generator is already executing.");for(;u;)try{if(i=1,r&&(s=r[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,r=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(s=u.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){u.label=n[1];break}if(6===n[0]&&u.label<s[1]){u.label=s[1],s=n;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(n);break}s[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(t){n=[6,t],r=0}finally{i=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,r,s,a,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.edit=!1,e.buttonTxt="",e.BUTTON_TEXT={CHANGE:"更换手机号",BIND:"绑定",SUCCESS:"绑定成功"},e.phone=null,e}return p(e,t),Object.defineProperty(e.prototype,"buttonEnable",{get:function(){return this.buttonTxt===this.BUTTON_TEXT.CHANGE||this.buttonTxt===this.BUTTON_TEXT.BIND&&this.phone.length>0},enumerable:!0,configurable:!0}),e.prototype.activated=function(){this.edit=!1,this.buttonTxt=this.BUTTON_TEXT.CHANGE,this.phone=this.$store.state.user.user.tel},e.prototype.clickButton=function(){var t=this;if(this.buttonTxt===this.BUTTON_TEXT.CHANGE)this.edit=!0,this.buttonTxt=this.BUTTON_TEXT.BIND;else if(this.buttonTxt===this.BUTTON_TEXT.BIND){var e=this.phone;if(!u.a.checkPhoneNumber(e))return void this.showToast(new c.a("请输入正确的手机号"));var n=new h.Subject,o=n.subscribe(function(n){return T(t,void 0,void 0,function(){var t,o;return y(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),[4,f.a.changeBindPhone(e,n)];case 1:return t=i.sent(),[4,this.getMyInfo()];case 2:return i.sent(),this.showToast(new c.a("更换绑定手机成功")),this.$router.go(-1),[3,4];case 3:return o=i.sent(),this.showToast(new c.a(o.message)),[3,4];case 4:return[2]}})})}),i={phone:this.$store.state.user.user.tel,type:"bindTelephone",subject:n,subscription:o};u.a.saveItem(l.a.verificationConfig,i),this.$router.push({name:"verificationCode"})}},e.prototype.editHint=function(){this.edit||this.showToast(new c.a("请先点击下方更换手机号按钮再进行编辑"))},d([Object(s.a)("showToast"),b("design:type",Object)],e.prototype,"showToast",void 0),d([Object(s.a)("getMyInfo"),b("design:type",Object)],e.prototype,"getMyInfo",void 0),e=d([r()({components:{"mu-text-field":a.a}})],e)}(o.default);e.a=v},758:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content",attrs:{id:"bind-phone"}},[n("div",{staticClass:"title"},[t._v("手机号")]),t._v(" "),n("div",{staticClass:"phone",on:{click:t.editHint}},[n("mu-text-field",{attrs:{hintText:"请输入您的手机号",disabled:!t.edit},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),n("div",{staticClass:"hint"},[t._v("绑定的手机号是您在系统内的账号")]),t._v(" "),n("div",{staticClass:"button"},[n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:t.buttonTxt,primary:"",disabled:!t.buttonEnable,fullWidth:""},on:{click:t.clickButton}})],1)])},i=[];o._withStripped=!0;var r={render:o,staticRenderFns:i};e.a=r}});
//# sourceMappingURL=18.e6f031f0b308d449e2de.js.map