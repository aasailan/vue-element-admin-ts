webpackJsonp([32],{539:function(e,t,s){"use strict";function a(e){n||s(657)}Object.defineProperty(t,"__esModule",{value:!0});var i=s(658),r=s(659),n=!1,o=s(6),c=a,u=o(i.a,r.a,!1,c,null,null);u.options.__file="src\\pages\\my_task\\index.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)}),t.default=u.exports},657:function(e,t){},658:function(e,t,s){"use strict";function a(e){for(var t=0,s=e.totalCount,a=e.totalAmount/100,i=0,r=e.subsetTasks,n=0,o=r;n<o.length;n++){var c=o[n];1===c.receiveStatus&&(t++,i=c.amount/100)}return i=i.toFixed(2),a=a.toFixed(2),"已领取"+t+"/"+s+"个，共"+i+"/"+a+"元"}var i=s(12),r=s(55),n=s.n(r),o=s(110),c=s(25),u=s(60),l=s(61),h=s(36),d=s(111),v=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])};return function(t,s){function a(){this.constructor=t}e(t,s),t.prototype=null===s?Object.create(s):(a.prototype=s.prototype,new a)}}(),p=this&&this.__decorate||function(e,t,s,a){var i,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,a);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(n=(r<3?i(n):r>3?i(t,s,n):i(t,s))||n);return r>3&&n&&Object.defineProperty(t,s,n),n},f=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=this&&this.__awaiter||function(e,t,s,a){return new(s||(s=Promise))(function(i,r){function n(e){try{c(a.next(e))}catch(e){r(e)}}function o(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new s(function(t){t(e.value)}).then(n,o)}c((a=a.apply(e,t||[])).next())})},b=this&&this.__generator||function(e,t){function s(e){return function(t){return a([e,t])}}function a(s){if(i)throw new TypeError("Generator is already executing.");for(;c;)try{if(i=1,r&&(n=r[2&s[0]?"return":s[0]?"throw":"next"])&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[0,n.value]),s[0]){case 0:case 1:n=s;break;case 4:return c.label++,{value:s[1],done:!1};case 5:c.label++,r=s[1],s=[0];continue;case 7:s=c.ops.pop(),c.trys.pop();continue;default:if(n=c.trys,!(n=n.length>0&&n[n.length-1])&&(6===s[0]||2===s[0])){c=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){c.label=s[1];break}if(6===s[0]&&c.label<n[1]){c.label=n[1],n=s;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(s);break}n[2]&&c.ops.pop(),c.trys.pop();continue}s=t.call(e,c)}catch(e){s=[6,e],r=0}finally{i=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}var i,r,n,o,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.loadingText=c.w,t.pageSize=10,t.activeTabIndex="0",t.swiperOpt=new(function(){function e(e){this.superThis=e,this.on={},this.touchAngle=20,this.iOSEdgeSwipeDetection=!0,this.shortSwipes=!0,this.on.slideChangeTransitionEnd=function(){e.changeTab(""+this.activeIndex,!1)}}return e}())(t),t.publishTasks=[],t.refreshingPublishTasks=!1,t.loadingPublishTasks=!1,t.publishTaskListContainer=null,t.publishTaskPage={hasMore:!1,curPage:1},t.receivedTasks=[],t.refreshingReceivedTasks=!1,t.receivedTaskListContainer=null,t.loadingReceivedTasks=!1,t.receivedTaskPage={hasMore:!1,curPage:1},t}return v(t,e),Object.defineProperty(t.prototype,"swiper",{get:function(){return this.$refs.myTaskSwiper.swiper},enumerable:!0,configurable:!0}),t.prototype.mounted=function(){return k(this,void 0,void 0,function(){return b(this,function(e){return this.publishTaskListContainer=this.$refs.publishTaskListContainer,this.receivedTaskListContainer=this.$refs.receivedTaskListContainer,[2]})})},t.prototype.activated=function(){this.refreshPublishTasks(),this.refreshReceivedTasks()},t.prototype.changeTab=function(e,t){void 0===t&&(t=!0),this.activeTabIndex=e,t&&this.swiper.slideTo(parseInt(e,10))},t.prototype.refreshPublishTasks=function(){return k(this,void 0,void 0,function(){var e,t,s;return b(this,function(a){switch(a.label){case 0:this.refreshingPublishTasks=!0,a.label=1;case 1:return a.trys.push([1,3,4,5]),[4,l.a.getPublishedTasks(1,this.pageSize)];case 2:return e=a.sent(),this.publishTasks=e.body.obj.rows,t=e.body.obj.page,h.a.checkPage(this.publishTaskPage,t),[3,5];case 3:return s=a.sent(),this.showToast(new u.a(s.message)),[3,5];case 4:return this.refreshingPublishTasks=!1,[7];case 5:return[2]}})})},t.prototype.loadMorePublishTasks=function(){return k(this,void 0,void 0,function(){var e,t,s,a;return b(this,function(i){switch(i.label){case 0:this.loadingPublishTasks=!0,i.label=1;case 1:return i.trys.push([1,3,4,5]),[4,l.a.getPublishedTasks(this.publishTaskPage.curPage+1,this.pageSize)];case 2:return e=i.sent(),t=e.body.obj.rows,this.publishTasks=this.publishTasks.concat(t),s=e.body.obj.page,h.a.checkPage(this.publishTaskPage,s),[3,5];case 3:return a=i.sent(),this.showToast(new u.a(a.message)),this.publishTaskPage.hasMore=!1,[3,5];case 4:return this.loadingPublishTasks=!1,[7];case 5:return[2]}})})},t.prototype.refreshReceivedTasks=function(){return k(this,void 0,void 0,function(){var e,t,s;return b(this,function(a){switch(a.label){case 0:this.refreshingReceivedTasks=!0,a.label=1;case 1:return a.trys.push([1,3,4,5]),[4,l.a.getReceivedTasksHistory(1,this.pageSize)];case 2:return e=a.sent(),this.receivedTasks=e.body.obj.rows,t=e.body.obj.page,h.a.checkPage(this.receivedTaskPage,t),[3,5];case 3:return s=a.sent(),this.showToast(new u.a(s.message)),[3,5];case 4:return this.refreshingReceivedTasks=!1,[7];case 5:return[2]}})})},t.prototype.loadMoreReceivedTasks=function(){return k(this,void 0,void 0,function(){var e,t,s,a;return b(this,function(i){switch(i.label){case 0:this.loadingReceivedTasks=!0,i.label=1;case 1:return i.trys.push([1,3,4,5]),[4,l.a.getReceivedTasksHistory(this.receivedTaskPage.curPage+1,this.pageSize)];case 2:return e=i.sent(),t=e.body.obj.rows,this.receivedTasks=this.receivedTasks.concat(t),s=e.body.obj.page,h.a.checkPage(this.receivedTaskPage,s),[3,5];case 3:return a=i.sent(),this.showToast(new u.a(a.message)),this.receivedTaskPage.hasMore=!1,[3,5];case 4:return this.loadingReceivedTasks=!1,[7];case 5:return[2]}})})},t.prototype.toRecommendDetailPage=function(e){var t={taskId:e.taskId};this.$router.push({name:"receivedTaskDetail",params:t})},t.prototype.toRecommendPage=function(e,t){if(0===t.subsetTasks[0].taskStatus){var s={action:"task",uid:t.fromUid,subId:t.subsetTasks[0].subId};this.$router.push({name:"recommend",params:s})}e.stopPropagation()},t.prototype.clearTask=function(e,t){return k(this,void 0,void 0,function(){var s,a,i;return b(this,function(r){switch(r.label){case 0:if(0!==(s=t.subsetTasks[0].clearingStatus)&&-1!==s)return[3,5];if(null===this.alipayId)return this.showToast(new u.a("您未绑定支付宝账户，请往绑定支付宝账户。")),this.$router.push({name:"bindAlipay"}),[2];if(-1===this.myRoles.indexOf(c.Y.authorized_matchmaker))return this.showToast(new u.a("您未认证，暂时无法领取红包，请先完成认证。")),this.$router.push({name:"authIndex"}),[2];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,l.a.clearTask(t.subsetTasks[0].subId,1)];case 2:return a=r.sent(),this.showToast(new u.a("申请结算成功，红包将在24小时内发放至您的支付宝账户！")),[3,4];case 3:return i=r.sent(),this.showToast(new u.a(i.message)),[3,4];case 4:return[3,6];case 5:1===s?this.showToast(new u.a("金额结算中")):this.showToast(new u.a("金额已结算")),r.label=6;case 6:return e.stopPropagation(),[2]}})})},t.prototype.clickPublishTask=function(e){if(0===e.paymentStatus){var t={taskId:e.taskId,action:"fromList"};h.a.saveItem(d.a.payParams,t),this.$router.push({name:"pay"})}else{var t={taskId:e.taskId};this.$router.push({name:"publishTaskDetail",params:t})}},p([Object(o.c)(function(e){return e.user.aliPaymentId}),f("design:type",String)],t.prototype,"alipayId",void 0),p([Object(o.c)(function(e){return e.user.roles}),f("design:type",Array)],t.prototype,"myRoles",void 0),p([Object(o.a)("showToast"),f("design:type",Object)],t.prototype,"showToast",void 0),t=p([n()({filters:{redPacketAmount:a}})],t)}(i.default);t.a=T},659:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content",attrs:{id:"myTask"}},[s("mu-paper",{attrs:{zDepth:1}},[s("mu-tabs",{attrs:{value:e.activeTabIndex},on:{change:e.changeTab}},[s("mu-tab",{attrs:{value:"0",title:"找对象订单"}}),e._v(" "),s("mu-tab",{attrs:{value:"1",title:"牵红线任务"}})],1)],1),e._v(" "),s("div",{staticStyle:{height:"93%"}},[s("swiper",{ref:"myTaskSwiper",attrs:{options:e.swiperOpt}},[s("swiper-slide",[s("div",{ref:"publishTaskListContainer",staticClass:"list-container"},[s("mu-refresh-control",{attrs:{refreshing:e.refreshingPublishTasks,trigger:e.publishTaskListContainer},on:{refresh:e.refreshPublishTasks}}),e._v(" "),s("mu-list",[0===e.publishTasks.length?s("mu-list-item",[s("div",{staticClass:"content-box hint"},[e._v("暂时没有找对象订单！")])]):e._e(),e._v(" "),e._l(e.publishTasks,function(t){return s("mu-list-item",{key:t.id},[s("div",{staticClass:"content-box",on:{click:function(s){e.clickPublishTask(t)}}},[s("div",{staticClass:"head-bar"},[s("span",{staticClass:"order-type"},[e._v(e._s(e._f("taskType")(t.subject)))]),e._v(" "),s("span",{staticClass:"order-time"},[e._v(e._s(t.createTime))]),e._v(" "),s("span",{staticClass:"order-status"},[e._v(e._s(e._f("taskStatus")(t)))])]),e._v(" "),s("div",{staticClass:"red-pack"},[s("span",{staticClass:"red-pack-type"},[e._v(e._s(e._f("redPacketType")(t)))]),e._v(" "),s("span",{staticClass:"red-pack-totalAmount"},[e._v("共"+e._s(e._f("taskAmount")(t.totalAmount))+"元")])]),e._v(" "),1===t.taskType?s("div",{staticClass:"red-pack-receive"},e._l(t.subsetTasks.slice(0,4),function(t){return s("div",{key:t.subId,staticClass:"row"},[s("div",{staticClass:"col-33"},[e._v(e._s(e._f("taskAmount")(t.amount)))]),e._v(" "),s("div",{staticClass:"col-34"},[e._v("to "+e._s(t.toUser.realname))]),e._v(" "),s("div",{staticClass:"col-33"},[e._v(e._s(0===t.receiveStatus?"未领取":"已领取"))])])})):e._e(),e._v(" "),s("div",{staticClass:"foot-bar"},[e._v("\n                                    "+e._s(e._f("redPacketAmount")(t))+"\n                                ")])])])})],2),e._v(" "),e.publishTaskPage.hasMore?e._e():s("div",{staticStyle:{height:"44px"}}),e._v(" "),e.publishTaskPage.hasMore?s("mu-infinite-scroll",{attrs:{scroller:e.publishTaskListContainer,loading:e.loadingPublishTasks,loadingText:e.loadingText},on:{load:e.loadMorePublishTasks}}):e._e()],1)]),e._v(" "),s("swiper-slide",[s("div",{ref:"receivedTaskListContainer",staticClass:"list-container"},[s("mu-refresh-control",{attrs:{refreshing:e.refreshingReceivedTasks,trigger:e.receivedTaskListContainer},on:{refresh:e.refreshReceivedTasks}}),e._v(" "),s("mu-list",[0===e.receivedTasks.length?s("mu-list-item",[s("div",{staticClass:"content-box hint"},[e._v("\n                                暂时没有牵红线任务！\n                            ")])]):e._e(),e._v(" "),e._l(e.receivedTasks,function(t){return s("mu-list-item",{key:t.uid},[s("div",{staticClass:"received-task-box",on:{click:function(s){e.toRecommendDetailPage(t)}}},[s("div",{staticClass:"task-content"},[s("load-img",{staticClass:"avatar",attrs:{type:"div",url:t.fromUser.headPortrait}}),e._v(" "),s("div",{staticClass:"task-detail"},[s("div",{staticClass:"head-info"},[s("div",{staticClass:"col-34 one-line-ellipsis realname"},[s("nobr",[e._v(e._s(t.fromUser.realname))])],1),e._v(" "),s("div",{staticClass:"col-33 price"},[e._v("￥"+e._s(e._f("taskAmount")(t.subsetTasks[0].amount)))]),e._v(" "),s("div",{staticClass:"col-33 status"},[e._v(e._s(e._f("taskStatus")(t)))])]),e._v(" "),s("div",{staticClass:"receiver-time"},[e._v("接受时间："+e._s(t.subsetTasks[0].receiveTime))]),e._v(" "),0===t.subsetTasks[0].taskStatus?s("div",{staticClass:"deadline"},[e._v("截止时间："+e._s(t.subsetTasks[0].dueTime))]):e._e(),e._v(" "),0!==t.subsetTasks[0].taskStatus?s("div",{staticClass:"deadline"},[e._v("结束时间："+e._s(t.subsetTasks[0].endTime))]):e._e(),e._v(" "),s("div",{staticClass:"leave-msg"},[e._v("留言："+e._s(t.leaveMsg))])])],1),e._v(" "),s("div",{staticClass:"foot-content"},[s("div",{staticClass:"letter"},[s("span",[e._v("已推荐：")]),e._v(" "),e._l(t.subsetTasks[0].letters,function(e){return s("load-img",{key:e.uid,staticClass:"avatar",attrs:{type:"img",url:e.headPortrait}})})],2),e._v(" "),4!==t.subsetTasks[0].taskStatus?s("div",{staticClass:"task-button",class:0===t.subsetTasks[0].taskStatus?"active":"close",on:{click:function(s){s.stopPropagation(),e.toRecommendPage(s,t)}}},[e._v("\n                                        帮TA牵线\n                                    ")]):e._e(),e._v(" "),4===t.subsetTasks[0].taskStatus?s("div",{staticClass:"task-button",class:0===t.subsetTasks[0].clearingStatus?"active":"close",on:{click:function(s){s.stopPropagation(),e.clearTask(s,t)}}},[e._v("\n                                        领取\n                                    ")]):e._e()])])])})],2),e._v(" "),e.receivedTaskPage.hasMore?e._e():s("div",{staticStyle:{height:"44px"}}),e._v(" "),e.receivedTaskPage.hasMore?s("mu-infinite-scroll",{attrs:{scroller:e.receivedTaskListContainer,loading:e.loadingReceivedTasks,loadingText:e.loadingText},on:{load:e.loadMoreReceivedTasks}}):e._e()],1)])],1)],1)],1)},i=[];a._withStripped=!0;var r={render:a,staticRenderFns:i};t.a=r}});
//# sourceMappingURL=32.042b0ff382707b46dd6b.js.map