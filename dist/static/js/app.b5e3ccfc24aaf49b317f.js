webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o=n("Xxa5"),a=n.n(o),i=n("exGp"),s=n.n(i),c=n("uXeI"),u=n.n(c),l=n("mtWM"),d=n.n(l),h={name:"pwd",data:function(){return{pwd:"",showPwd:!1,requestPending:!1,pwned:!1,count:0}},computed:{pwdType:function(){return this.showPwd?"text":"password"},showPwdText:function(){return this.showPwd?"hide":"show"}},methods:{goToAcc:function(){this.$router.push("/acc")},validatePwd:function(){return this.pwd.trim()},togglePwdType:function(){this.showPwd=!this.showPwd},getURL:function(e){return"https://api.pwnedpasswords.com/range/"+e},checkHash:function(){this.validatePwd()&&!this.requestPending&&this.sendRequest()},sendRequest:function(){var e=this;return s()(a.a.mark(function t(){var n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u()(e.pwd),t.next=3,e.$glob.api.newLoadingController({content:"Fetching breach details..."});case 3:(r=t.sent).present(),e.requestPending=!0,d.a.get(e.getURL(n.substr(0,5))).then(function(t){e.count=e.search(n.substr(5).toUpperCase(),t.data),e.pwned=e.count>0,e.notify()}).catch(function(e){console.log("Error:",e)}).finally(function(){e.pwd="",e.requestPending=!1,r.dismiss()});case 7:case"end":return t.stop()}},t,e)}))()},search:function(e,t){var n=t.indexOf(e);if(-1===n)return 0;var r=t.indexOf("\n",n);-1===r&&(r=t.substr(n).length);var o=t.substr(n,r-n).split(":");if(2!==o.length)throw new Error("Unexpected data");return o[1]},notify:function(){var e=["Yay!"],t="You are secure, for now...";this.pwned&&(e=["Doh!"],t="You've been pwned across "+this.count+" domains"),this.$glob.api.newAlertController({header:"Beep",subHeader:null,message:t,buttons:e}).then(function(e){return e.present()})}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ion-page",{staticClass:"ion-page"},[n("ion-header",[n("ion-toolbar",[n("ion-buttons",{attrs:{slot:"start"},slot:"start"},[n("ion-back-button")],1),e._v(" "),n("ion-title",[e._v("Password checking")])],1)],1),e._v(" "),n("ion-content",{staticClass:"content",attrs:{padding:""}},[n("ion-list",[n("ion-item",[n("ion-icon",{directives:[{name:"show",rawName:"v-show",value:!e.showPwd,expression:"!showPwd"}],attrs:{slot:"start",name:"lock"},slot:"start"}),e._v(" "),n("ion-icon",{directives:[{name:"show",rawName:"v-show",value:e.showPwd,expression:"showPwd"}],attrs:{slot:"start",name:"unlock"},slot:"start"}),e._v(" "),n("ion-input",{attrs:{type:e.pwdType,value:e.pwd,placeholder:"Password"},on:{input:function(t){e.pwd=t.target.value}}}),e._v(" "),n("ion-button",{directives:[{name:"show",rawName:"v-show",value:e.pwd,expression:"pwd"}],attrs:{slot:"end",fill:"clear",size:"small"},on:{click:e.togglePwdType},slot:"end"},[e._v("\n                    "+e._s(e.showPwdText)+"\n                ")])],1)],1),e._v(" "),n("ion-button",{attrs:{expand:"full",type:"submit",disabled:!e.validatePwd()},on:{click:e.checkHash}},[e.requestPending?n("span",[n("ion-spinner")],1):n("span",[e._v("Have I been pwned?")])]),e._v(" "),n("ion-button",{on:{click:e.goToAcc}},[e._v("go to account page")])],1)],1)},staticRenderFns:[]};var v=n("VU/8")(h,p,!1,function(e){n("RyJm")},null,null).exports,f={name:"breach",props:["breach"],methods:{getImageURL:function(e){return"https://haveibeenpwned.com/Content/Images/PwnedLogos/"+e.Name+"."+e.LogoType},formatDate:function(e){var t=new Date(e);return t.getDate()+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+" "+t.getFullYear()}}},w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ion-card",{attrs:{"no-margin":""}},[n("ion-card-content",[n("ion-card-title",[n("div",{staticClass:"breach-head"},[n("div",{staticClass:"breach-name"},[n("h1",[e._v(e._s(e.breach.Title))])]),e._v(" "),n("div",{staticClass:"breach-image-holder"},[n("img",{attrs:{src:e.getImageURL(e.breach)}})])])]),e._v(" "),n("ion-grid",[n("ion-row",[n("ion-col",[n("ion-item",[n("ion-badge",{attrs:{color:"light"}},[e._v("\n                            "+e._s(e.formatDate(e.breach.BreachDate))+"\n                        ")])],1)],1),e._v(" "),n("ion-col",[n("ion-item",[n("ion-icon",{attrs:{name:"people",color:"primary"}}),e._v(" "),n("ion-badge",[e._v("\n                            "+e._s(e.breach.PwnCount)+"\n                        ")])],1)],1)],1)],1),e._v(" "),n("p",{domProps:{innerHTML:e._s(e.breach.Description)}})],1)],1)},staticRenderFns:[]};var g={name:"acc",components:{Breach:n("VU/8")(f,w,!1,function(e){n("R7vS")},null,null).exports},data:function(){return{account:"",accountChecked:"",requestPending:!1,isSubmitted:!1,includeUnverified:!1,breaches:[]}},methods:{validateAccount:function(){return this.account.trim()},getURL:function(){var e="https://haveibeenpwned.com/api/v2/breachedaccount/"+this.account;return this.includeUnverified&&(e+="?includeUnverified=true"),e},toggleIncludeUnverified:function(){this.includeUnverified=!this.includeUnverified},checkAccount:function(){!this.requestPending&&this.validateAccount()&&(this.reset(),this.sendRequest())},reset:function(){this.isSubmitted=!1,this.breaches=[],this.accountChecked=this.account},sendRequest:function(){var e=this;return s()(a.a.mark(function t(){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$glob.api.newLoadingController({content:"Fetching breach details..."});case 2:(n=t.sent).present(),e.requestPending=!0,d.a.get(e.getURL()).then(function(t){e.breaches=t.data}).catch(function(t){t.response&&404===t.response.status?e.breaches=[]:e.showError()}).finally(function(){e.account="",e.isSubmitted=!0,e.requestPending=!1,n.dismiss()});case 6:case"end":return t.stop()}},t,e)}))()},showError:function(){this.$glob.api.newAlertController({header:"Error",message:"Something went wrong...",buttons:["OK"]}).then(function(e){return e.present()})}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ion-page",{staticClass:"ion-page"},[n("ion-header",[n("ion-toolbar",[n("ion-buttons",{attrs:{slot:"start"},slot:"start"},[n("ion-back-button")],1),e._v(" "),n("ion-title",[e._v("Account page")])],1)],1),e._v(" "),n("ion-content",{staticClass:"content",attrs:{padding:""}},[n("ion-list",[n("ion-item",[n("ion-icon",{attrs:{slot:"start",name:"person"},slot:"start"}),e._v(" "),n("ion-input",{attrs:{type:"text",value:e.account},on:{input:function(t){e.account=t.target.value}}})],1),e._v(" "),n("ion-item",[n("ion-checkbox",{attrs:{checked:e.includeUnverified},on:{change:e.toggleIncludeUnverified}}),e._v(" "),n("ion-label",[e._v("Include Unverified")])],1)],1),e._v(" "),n("ion-button",{attrs:{expand:"full",disabled:!e.validateAccount()},on:{click:e.checkAccount}},[e.requestPending?n("span",[n("ion-spinner")],1):n("span",[e._v("Have I been pwned?")])]),e._v(" "),n("div",[e.isSubmitted?n("ion-card",{attrs:{"no-margin":""}},[n("ion-card-content",{attrs:{"text-center":""}},[n("i",[e._v(e._s(e.accountChecked))]),e._v(" is\n                    "),n("strong",[n("ion-badge",{attrs:{color:e.breaches.length?"danger":"success"}},[e.breaches.length?n("span",[e._v("pwned "+e._s(e.breaches.length)+" times")]):n("span",[e._v("not pwned, yet...")])])],1)])],1):e._e(),e._v(" "),e._l(e.breaches,function(e,t){return n("breach",{key:t,attrs:{breach:e}})})],2)],1)],1)},staticRenderFns:[]};var b=n("VU/8")(g,m,!1,function(e){n("lAsg")},null,null).exports,_=n("//Fk"),y=n.n(_),k=n("BO1k"),x=n.n(k);var C={attachViewToDom:function(e,t,n,o){var a,i=document.createElement(function(e){return e.classList.contains("modal-wrapper")}(a=e)||function(e){return"ION-NAV"===e.tagName.toUpperCase()}(a)?"ion-page":"div");e.appendChild(i);var s=(new(r.a.extend(t))).$mount(i);if(o){var c=!0,u=!1,l=void 0;try{for(var d,h=x()(o);!(c=(d=h.next()).done);c=!0){var p=d.value;s.$el.classList.add(p)}}catch(e){u=!0,l=e}finally{try{!c&&h.return&&h.return()}finally{if(u)throw l}}}return y.a.resolve(s.$el)},removeViewFromDom:function(e,t){return t.hasOwnProperty("__vue__")&&t.__vue__.$destroy(),e.removeChild(t),y.a.resolve()}};var P={name:"home",delegate:C,methods:{goToAcc:function(){this.$router.push("/acc")},goToPwd:function(){this.$router.push("/pwd")}}},R={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ion-page",{staticClass:"ion-page"},[n("ion-header",[n("ion-toolbar",[n("ion-buttons",{attrs:{slot:"start"},slot:"start"},[n("ion-back-button")],1),e._v(" "),n("ion-title",[e._v("home")])],1)],1),e._v(" "),n("ion-content",{staticClass:"content",attrs:{padding:""}},[n("ion-button",{attrs:{expand:"full",type:"submit"},on:{click:e.goToAcc}},[e._v("\n            Check Account\n        ")]),e._v(" "),n("ion-button",{attrs:{expand:"full",type:"submit"},on:{click:e.goToPwd}},[e._v("\n            Check Password\n        ")])],1)],1)},staticRenderFns:[]},A=n("VU/8")(P,R,!1,null,null,null).exports,E=n("Zx67"),$=n.n(E),U=n("Zrlr"),L=n.n(U),q=n("wxAW"),T=n.n(q),D=n("zwoO"),I=n.n(D),O=n("yEsh"),B=n.n(O),F=n("Pf15"),H=n.n(F),N=n("/ocq"),S={name:"IonRouterView",data:function(){return{leavingEl:null,enteringEl:null}},props:{animated:{type:Boolean,default:!0}},methods:{catchIonicGoBack:function(e){if(e.target){var t=e.target.closest("ion-back-button"),n=void 0;t&&(this.$router.canGoBack()?(e.preventDefault(),this.$router.back()):void 0!==(n=t.defaultHref)&&(e.preventDefault(),this.$router.push(n)))}},transition:function(e,t){var n=this;return s()(a.a.mark(function r(){var o;return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(o=n.$refs.ionRouterOutlet,e&&e!==t){r.next=3;break}return r.abrupt("return");case 3:return r.next=5,o.componentOnReady();case 5:return r.next=7,o.commit(e,t,{duration:n.animated?void 0:0,direction:1===n.$router.direction?"forward":"back",deepWait:!0,showGoBack:n.$router.canGoBack()});case 7:case"end":return r.stop()}},r,n)}))()},beforeEnter:function(e){this.enteringEl=e},beforeLeave:function(e){this.leavingEl=e,this.animated&&this.$router.direction>0&&(this.enteringEl.style.opacity=0)},leave:function(e,t){var n=this;if(!this.animated)return t();this.transition(this.enteringEl,e).then(function(){n.enteringEl.style.opacity=1,t()})},enter:function(e,t){t()},afterEnter:function(e){},enterCancelled:function(e){},afterLeave:function(e){},leaveCancelled:function(e){}}},V={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ion-router-outlet",{ref:"ionRouterOutlet",on:{click:e.catchIonicGoBack}},[n("transition",{attrs:{mode:"in-out",css:!1},on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"enter-cancelled":e.enterCancelled,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave,"leave-cancelled":e.leaveCancelled}},[n("router-view")],1)],1)},staticRenderFns:[]},G=n("VU/8")(S,V,!1,null,null,null).exports,J=function(e){function t(){var e;L()(this,t);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var a=I()(this,(e=t.__proto__||$()(t)).call.apply(e,[this].concat(r)));return a.direction=r.direction||1,a.viewCount=r.viewCount||0,a.prevRoute=a.history.current,a.extendHistory(),a}return H()(t,e),T()(t,[{key:"extendHistory",value:function(){var e=this;this.history._updateRoute=this.history.updateRoute,this.history.updateRoute=function(t){e.direction=e.guessDirection(t),e.viewCount+=e.direction,e.history._updateRoute(t)}}},{key:"push",value:function(){for(var e,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];(e=B()(t.prototype.__proto__||$()(t.prototype),"push",this)).call.apply(e,[this].concat(r)),this.direction=1,this.viewCount++}},{key:"go",value:function(e){B()(t.prototype.__proto__||$()(t.prototype),"go",this).call(this,e),this.viewCount+=e,this.direction=e>0?1:-1}},{key:"canGoBack",value:function(){return this.viewCount>0&&this.currentRoute.path.length>1}},{key:"guessDirection",value:function(e){return this.prevRoute.fullPath===e.fullPath?-1:(this.prevRoute=this.history.current,1)}}]),t}(N.a),M=J;function W(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"body",n=function(e,t){var n=document.querySelector(e);if(n)return n;return t.appendChild(document.createElement(e))}(e,document.querySelector(t));return n.delegate=C,n.componentOnReady()}J.install=function(e){N.a.install(e),e.component("IonRouterView",G)};var Y={api:{newNavController:function(e){var t=this;return s()(a.a.mark(function n(){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W("ion-nav","ion-app");case 2:return(r=t.sent).root=e,t.abrupt("return",r);case 5:case"end":return t.stop()}},n,t)}))()},newAlertController:function(e){var t=this;return s()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.newAbstractController("ion-alert-controller",e));case 1:case"end":return n.stop()}},n,t)}))()},newLoadingController:function(e){var t=this;return s()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.newAbstractController("ion-loading-controller",e));case 1:case"end":return n.stop()}},n,t)}))()},newAbstractController:function(e,t){var n=this;return s()(a.a.mark(function r(){var o;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,W(e);case 2:return o=n.sent,n.next=5,o.create(t);case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}},r,n)}))()}},install:function(){Object.defineProperty(r.a.prototype,"$glob",{get:function(){return Y}})}};r.a.use(Y),r.a.use(M),r.a.config.ignoredElements=[/^ion-/],new r.a({router:new M({routes:[{path:"/",component:A},{path:"/acc",component:b},{path:"/pwd",component:v}]})}).$mount("ion-app")},R7vS:function(e,t){},RyJm:function(e,t){},lAsg:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b5e3ccfc24aaf49b317f.js.map