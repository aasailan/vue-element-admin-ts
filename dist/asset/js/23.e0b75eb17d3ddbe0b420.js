webpackJsonp([23],{538:function(e,t,s){"use strict";function a(e){n||s(654)}Object.defineProperty(t,"__esModule",{value:!0});var i=s(655),r=s(656),n=!1,c=s(6),o=a,d=c(i.a,r.a,!1,o,null,null);d.options.__file="src\\pages\\redpacket_detail\\index.vue",d.esModule&&Object.keys(d.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)}),t.default=d.exports},654:function(e,t){},655:function(e,t,s){"use strict";var a=s(12),i=s(55),r=s.n(i),n=s(110),c=s(111),o=s(36),d=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])};return function(t,s){function a(){this.constructor=t}e(t,s),t.prototype=null===s?Object.create(s):(a.prototype=s.prototype,new a)}}(),u=this&&this.__decorate||function(e,t,s,a){var i,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,a);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(n=(r<3?i(n):r>3?i(t,s,n):i(t,s))||n);return r>3&&n&&Object.defineProperty(t,s,n),n},v=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.receivedTask=null,t}return d(t,e),t.prototype.activated=function(){var e=this.$route.params;this.receivedTask=o.a.getItem(c.a.redpacketDetail+e.taskId)},t.prototype.toRecommendPage=function(){var e={action:"task",uid:this.receivedTask.fromUid,subId:this.receivedTask.subsetTasks[0].subId};this.$router.replace({name:"recommend",params:e})},u([Object(n.c)(function(e){return e.user.user}),v("design:type",Object)],t.prototype,"myInfo",void 0),t=u([r()({})],t)}(a.default);t.a=l},656:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.receivedTask?s("div",{attrs:{id:"redpacket-detail"}},[s("div",{staticClass:"from-user"},[s("load-img",{staticClass:"avatar",attrs:{type:"img",url:e.receivedTask.fromUser.headPortrait}}),e._v(" "),s("div",{staticClass:"name"},[e._v(e._s(e.receivedTask.fromUser.realname))]),e._v(" "),s("div",{staticClass:"leave-msg"},[e._v("留言："+e._s(e.receivedTask.leaveMsg?e.receivedTask.leaveMsg:"请帮我介绍对象吧"))])],1),e._v(" "),s("div",{staticClass:"receive-user"},[s("load-img",{staticClass:"headPortrait",attrs:{type:"img",url:e.myInfo.headPortrait}}),e._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"name"},[e._v(e._s(e.myInfo.realname))]),e._v(" "),s("div",{staticClass:"time"},[e._v(e._s(e.receivedTask.subsetTasks[0]&&e.receivedTask.subsetTasks[0].receiveTime))])]),e._v(" "),s("div",{staticClass:"amount"},[e._v(e._s(e._f("taskAmount")(e.receivedTask.subsetTasks[0]&&e.receivedTask.subsetTasks[0].amount))+"元")])],1),e._v(" "),s("div",{staticClass:"hint"},[s("div",{staticClass:"title"},[e._v("温馨提示")]),e._v(" "),s("div",[e._v("温馨提示：该任务的有效期是"+e._s(e.receivedTask.duration)+"天，若超时未完成推荐任务，红包将自动退还")])]),e._v(" "),s("div",{staticClass:"find-object",on:{click:e.toRecommendPage}},[e._v("帮TA找对象")])]):e._e()},i=[];a._withStripped=!0;var r={render:a,staticRenderFns:i};t.a=r}});
//# sourceMappingURL=23.e0b75eb17d3ddbe0b420.js.map