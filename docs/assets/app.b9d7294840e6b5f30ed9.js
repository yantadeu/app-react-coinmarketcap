!function(e){function t(t){for(var r,a,c=t[0],u=t[1],l=t[2],f=0,p=[];f<c.length;f++)a=c[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);p.length;)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={2:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var i,c=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=function(e){return a.p+""+({}[e]||e)+".b9d7294840e6b5f30ed9.js"}(e),i=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,n[1](a)}o[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:u})},12e4);u.onerror=u.onload=i,c.appendChild(u)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/",a.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;i.push([926,0,1]),n()}({118:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(366);var r=function(){return window.location.origin||(window.location.origin="".concat(window.location.protocol,"//").concat(window.location.hostname).concat(window.location.port?":"+window.location.port:"")),window.location.origin}},153:function(e,t,n){e.exports=n(927)},155:function(e,t,n){"use strict";n.r(t);var r=n(154),o=n(56),i=n(230),a=n(118),c=n(367),u=n.n(c),l=n(227),s=n.n(l),f=["localStorage","sessionStorage"],p=JSON.parse,d=JSON.stringify,b={getToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"token";return e===f[0]?localStorage&&localStorage.getItem(t)||null:e===f[1]&&sessionStorage&&sessionStorage.getItem(t)||null},setToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f[0],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"token";!e||e.length<=0||(t===f[0]&&localStorage&&localStorage.setItem(n,e),t===f[1]&&sessionStorage&&sessionStorage.setItem(n,e))},isAuthenticated:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"token";return e===f[0]?!(!localStorage||!localStorage.getItem(t)):e===f[1]&&!(!sessionStorage||!sessionStorage.getItem(t))},clearToken:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"token";return localStorage&&localStorage[e]?(localStorage.removeItem(e),!0):!(!sessionStorage||!sessionStorage[e])&&(sessionStorage.removeItem(e),!0)},getTokenExpirationDate:function(e){if(!e)return new Date(0);var t=u()(e);return t.exp?new Date(1e3*t.exp):new Date(0)},isExpiredToken:function(e){var t=this.getTokenExpirationDate(e),n=new Date,r=s()(n,t);return r},getUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"userInfo";return e===f[0]?localStorage&&p(localStorage.getItem(t))||null:e===f[1]&&sessionStorage&&p(sessionStorage.getItem(t))||null},setUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f[0],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"userInfo";!e||e.length<=0||(t===f[0]&&localStorage&&localStorage.setItem(n,d(e)),t===f[1]&&sessionStorage&&sessionStorage.setItem(n,d(e)))},clearUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"userInfo";localStorage&&localStorage[e]&&localStorage.removeItem(e),sessionStorage&&sessionStorage[e]&&sessionStorage.removeItem(e)},clearAllAppStorage:function(){localStorage&&localStorage.clear(),sessionStorage&&sessionStorage.clear()}};function y(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){h(e,t,n[t])})}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"disconnectUser",function(){return P}),n.d(t,"checkUserIsConnected",function(){return I}),n.d(t,"logUserIfNeeded",function(){return C}),n.d(t,"fetchUserInfoDataIfNeeded",function(){return A});var g="REQUEST_USER_INFOS_DATA",v="RECEIVED_USER_INFOS_DATA",w="ERROR_USER_INFOS_DATA",O="REQUEST_LOG_USER",S="RECEIVED_LOG_USER",E="ERROR_LOG_USER",j="CHECK_IF_USER_IS_AUTHENTICATED",k="DISCONNECT_USER",_={isFetching:!1,isLogging:!1,time:"",id:"",login:"",firstname:"",lastname:"",token:null,isAuthenticated:!1};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=Object(r.format)(new Date);switch(t.type){case j:return m({},e,{actionTime:n,isAuthenticated:t.isAuthenticated,token:t.token||_.token,id:t.user&&t.user.id?t.user.id:_.id,login:t.user&&t.user.login?t.user.login:_.login,firstname:t.user&&t.user.firstname?t.user.firstname:_.firstname,lastname:t.user&&t.user.lastname?t.user.lastname:_.firstname});case k:return m({},e,{actionTime:n,isAuthenticated:!1,token:_.token,id:_.id,login:_.login,firstname:_.firstname,lastname:_.lastname});case O:return m({},e,{actionTime:n,isLogging:!0});case S:var o=t.payload.data;return m({},e,{actionTime:n,isAuthenticated:!0,token:o.token,id:o.id,login:o.login,firstname:o.firstname,lastname:o.lastname,isLogging:!1});case E:return m({},e,{actionTime:n,isAuthenticated:!1,isLogging:!1});case g:return m({},e,{actionTime:n,isFetching:!0});case v:var i=t.payload.data;return m({},e,{actionTime:n,isFetching:!1,id:i.id,login:i.login,firstname:i.firstname,lastname:i.lastname});case w:return m({},e,{actionTime:n,isFetching:!1});default:return e}};function P(){return b.clearAllAppStorage(),{type:k}}function I(){var e=b.getToken(),t=b.getUserInfo(),n=!(!e||!function(e){return e&&e._id}(t));return m({type:j,token:e},t,{isAuthenticated:n})}function T(e,t){return function(){var n=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){y(i,r,o,a,c,"next",e)}function c(e){y(i,r,o,a,c,"throw",e)}a(void 0)})}}(regeneratorRuntime.mark(function n(r){var c,u,l,s,f,p,d;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return c=o.a.DEV_MODE?"FETCH_MOCK":"FETCH",u="login",l=i,s="".concat(Object(a.a)(),"/").concat(u),f="post",p={},d={credentials:"same-origin",data:{login:e,password:t}},n.abrupt("return",r({type:"FETCH_MIDDLEWARE",fetch:{type:c,actionTypes:{request:O,success:S,fail:E},mockResult:l,url:s,method:f,headers:p,options:d}}));case 8:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}function C(e,t){return function(n,r){return function(e){if(e.userAuth.isLogging)return!1;return!0}(r())?n(T(e,t)):Promise.resolve()}}function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(t,n){return function(e){if(e.userAuth.isFetching)return!1;return!0}(n())?t(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(t){var n=b.getToken(),r=o.a.DEV_MODE,c=o.a.api.users,u=r?"FETCH_MOCK":"FETCH",l=i,s="".concat(Object(a.a)(),"/").concat(c,"/").concat(e),f={authorization:"Bearer ".concat(n)};return t({type:"FETCH_MIDDLEWARE",fetch:{type:u,actionTypes:{request:g,success:v,fail:w},mockResult:l,url:s,method:"get",headers:f,options:{credentials:"same-origin"}}})}}(e)):Promise.resolve()}}},230:function(e){e.exports={token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZW1vIiwiaWF0IjoxNTAyMzA3MzU0LCJleHAiOjE3MjMyMzIxNTQsImF1ZCI6ImRlbW8tZGVtbyIsInN1YiI6ImRlbW8iLCJHaXZlbk5hbWUiOiJKb2huIiwiU3VybmFtZSI6IkRvZSIsIkVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJSb2xlIjpbIlN1cGVyIGNvb2wgZGV2IiwibWFnaWMgbWFrZXIiXX0.6FjgLCypaqmRp4tDjg_idVKIzQw16e-z_rjA3R94IqQ",user:{id:111,login:"john.doe@fake.mail",firstname:"John",lastname:"Doe",isAdmin:!0}}},365:function(e){e.exports=[{id:1,label:"item 1"},{id:2,label:"item 2"}]},56:function(e,t,n){"use strict";t.a={DEV_MODE:!0,api:{fakeEndPoint:"api/somewhere",users:"api/someusersapi"},sw:{path:"public/assets/sw.js"}}},926:function(e,t,n){"use strict";n.r(t);n(374);var r=n(1),o=n.n(r),i=n(24),a=n(356),c=n.n(a),u=n(357),l=n.n(u),s=n(96),f=(n(660),n(119));function p(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"]);return p=function(){return e},e}var d=function(){return Object(f.c)(p())},b=n(117),y=n(933),m=n(934),h=n(115),g=n(93),v=n.n(g),w=n(153),O=n.n(w),S=n(149);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),k(this,_(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,r["Component"]),function(e,t,n){t&&j(e.prototype,t),n&&j(e,n)}(t,[{key:"componentDidUpdate",value:function(e){window&&(e.location!==this.props.location&&window.scrollTo(0,0))}},{key:"render",value:function(){return this.props.children}}]),t}(),T=Object(S.a)(I),C=(n(372),n(53)),A=n(932),R=n(155),D=n(64);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return U(L(L(n=function(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?L(e):t}(this,(e=M(t)).call.apply(e,[this].concat(o))))),"state",{isOpen:!1}),U(L(L(n)),"toggle",function(e){e&&e.preventDefault(),n.setState(function(e){return{isOpen:!e.isOpen}})}),U(L(L(n)),"handlesNavItemClick",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";return function(t){t&&t.preventDefault(),n.props.history.push(e)}}),U(L(L(n)),"handlesDisconnect",function(e){e&&e.preventDefault();var t=n.props,r=t.history;(0,t.disconnectUser)(),r.push("/")}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,r["PureComponent"]),function(e,t,n){t&&F(e.prototype,t),n&&F(e,n)}(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.brand,r=t.navModel.rightLinks,i=this.state.isOpen;return o.a.createElement(D.e,{color:"dark",dark:!0,expand:"md"},o.a.createElement(D.f,{href:"/"},n),o.a.createElement(D.g,{onClick:this.toggle}),o.a.createElement(D.a,{isOpen:i,navbar:!0},o.a.createElement(D.b,{className:"ml-auto",navbar:!0},r.map(function(t,n){var r=t.label,i=t.link;t.viewName;return o.a.createElement(D.c,{key:"".concat(n)},o.a.createElement(D.d,{href:"#",onClick:e.handlesNavItemClick(i),color:"white"},r))}))))}}]),t}();U(W,"defaultProps",{brand:"brand"});var H=W;function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=v()(Object(h.connect)(function(e){return{token:e.userAuth.token,isAuthenticated:e.userAuth.isAuthenticated}},function(e){return Object(C.bindActionCreators)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){B(e,t,n[t])})}return e}({},R),e)}),A.a)(H),z=n(3),V=n.n(z),K=function(e){var t=e.color;return o.a.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 512 512",fill:"".concat(t)},o.a.createElement("path",{d:"M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1 c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z"}))};K.defaultProps={color:"#F1F1F1"},K.displayName="UpIcon";var Y=K;function q(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin-right: 10px;\n"]);return q=function(){return e},e}var Z=f.b.div(q());function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Q(e,t,n[t])})}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X="-10px",$={position:"fixed",right:X,left:"",bottom:"40px",width:"100px",zIndex:10,opacity:.5,backgroundColor:"#4A4A4A"},ee=function(e){var t=e.onClick,n=e.position,r=e.children,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom-right",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$,n=G({},t);switch(e){case"bottom-right":return n.right=X,n.left="",n;case"bottom-left":return n.right="",n.left=X,n;default:return t}}(n,G({},e.motionStyle,$));return o.a.createElement("button",{style:i,className:V()({btn:!0}),onClick:t},!r&&o.a.createElement(Z,null,o.a.createElement(Y,{color:"#F1F1F1"})),!!r&&r)};ee.defaultProps={position:"bottom-right"},ee.displayName="BackToTopButton";var te=ee,ne=n(156);function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ie(e){return(ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var le=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return ue(ce(ce(n=function(e,t){return!t||"object"!==re(t)&&"function"!=typeof t?ce(e):t}(this,(e=ie(t)).call.apply(e,[this].concat(o))))),"state",{windowScrollY:0,showBackButton:!1,tickingScollObserve:!1}),ue(ce(ce(n)),"handleWindowScroll",function(){if(window){var e=n.state,t=e.windowScrollY,r=e.tickingScollObserve,o=n.props.minScrollY,i=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;r||window.requestAnimationFrame(function(){if(t!==i){var e=i>=o;n.setState({windowScrollY:i,showBackButton:e})}n.setState({tickingScollObserve:!1})}),n.setState({tickingScollObserve:!0})}}),ue(ce(ce(n)),"handlesOnBackButtonClick",function(e){e&&e.preventDefault();var t=n.props.minScrollY,r=n.state.windowScrollY;window&&r&&r>t&&window.scroll({top:0,left:0,behavior:"smooth"})}),ue(ce(ce(n)),"scrollDone",function(){var e=n.props.onScrollDone;e&&e()}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(t,r["Component"]),function(e,t,n){t&&oe(e.prototype,t),n&&oe(e,n)}(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.addEventListener("scroll",this.handleWindowScroll)}},{key:"componentWillUnmount",value:function(){"undefined"!=typeof window&&window.removeEventListener("scroll",this.handleWindowScroll)}},{key:"render",value:function(){var e=this,t=this.state.showBackButton;return o.a.createElement(ne.Motion,{style:{x:Object(ne.spring)(t?0:120,ne.presets.stiff)}},function(t){var n=t.x;return o.a.createElement(te,{position:"bottom-right",onClick:e.handlesOnBackButtonClick,motionStyle:{WebkitTransform:"translate3d(".concat(n,"px, 0, 0)"),transform:"translate3d(".concat(n,"px, 0, 0)")}})})}}]),t}();ue(le,"defaultProps",{minScrollY:120,onScrollDone:function(){}});var se=le,fe={brand:"App React CoinMarketCap",leftLinks:[],rightLinks:[{label:"Home",link:"/"},{label:"Cotações",link:"/tickers",view:"tickers",isRouteBtn:!0}]};function pe(e){return(pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var de=n(56).a.sw.path;var be=function(){void 0!==("undefined"==typeof window?"undefined":pe(window))&&"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register(de).then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.log("SW registration failed: ",e)})})};function ye(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function me(e){return(me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function he(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ge(e){return(ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ve(e,t){return(ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function we(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Se=function(){return function(e){var t=function(t){function n(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return Oe(we(we(t=function(e,t){return!t||"object"!==me(t)&&"function"!=typeof t?we(e):t}(this,(e=ge(n)).call.apply(e,[this].concat(o))))),"state",{navModel:fe}),Oe(we(we(t)),"handleLeftNavItemClick",function(e,t){}),Oe(we(we(t)),"handleRightNavItemClick",function(e,t){}),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ve(e,t)}(n,r.Component),function(e,t,n){t&&he(e.prototype,t),n&&he(e,n)}(n,[{key:"componentDidMount",value:function(){void 0!==("undefined"==typeof window?"undefined":me(window))&&be()}},{key:"render",value:function(){var t=this.props,n=(t.history,t.location,t.match,ye(t,["history","location","match"])),r=this.state.navModel;return o.a.createElement("div",{id:"appContainer"},o.a.createElement(J,{brand:r.brand,navModel:r,handleLeftNavItemClick:this.handleLeftNavItemClick,handleRightNavItemClick:this.handleRightNavItemClick}),o.a.createElement("div",{className:"container-fluid"},o.a.createElement(e,n)),o.a.createElement(se,{minScrollY:40,scrollTo:"appContainer"}))}}]),n}();return v()(S.a)(t)}},Ee=n(148),je=n(94),ke=Object(s.a)(function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,940))},{modules:["../pages/home"]}),_e=Object(s.a)(function(){return Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,941))},{modules:["../pages/tickers"]}),Pe=function(){return o.a.createElement(Ee.a,null,o.a.createElement(je.a,{exact:!0,path:"/",component:ke}),o.a.createElement(je.a,{exact:!0,path:"/tickers",component:_e}),o.a.createElement(je.a,{path:"*",component:void 0}))};function Ie(e){return(Ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ce(e,t){return!t||"object"!==Ie(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ae(e){return(Ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Re(e,t){return(Re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var De=v()(Se())(Pe),xe=O()(),Fe=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ce(this,Ae(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Re(e,t)}(t,r["Component"]),function(e,t,n){t&&Te(e.prototype,t),n&&Te(e,n)}(t,[{key:"render",value:function(){return o.a.createElement(h.Provider,{store:xe},o.a.createElement(b.ConnectedRouter,{history:w.history},o.a.createElement(T,null,o.a.createElement(y.a,null,o.a.createElement(De,null),o.a.createElement(m.a,{path:"*",component:void 0})))))}}]),t}(),Me=document.getElementById("root");l.a.polyfill(),window.__forceSmoothScrollPolyfill__=!0,window.snapSaveState=function(){return Object(s.b)()},d();!function(e){var t=function(){return o.a.createElement(c.a,null,o.a.createElement(e,null))};Me.hasChildNodes()?Object(s.c)().then(function(){Object(i.hydrate)(o.a.createElement(t,null),Me)}):Object(i.render)(o.a.createElement(t,null),Me)}(Fe)},927:function(e,t,n){"use strict";n.r(t);var r=n(53),o=n(362),i=n(117),a=n(363),c=n(364),u=n.n(c),l=n(154);n(365),n(56),n(118);function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){p(e,t,n[t])})}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d="REQUEST_FAKE_FETCH",b="RECEIVED_FAKE_FETCH",y="ERROR_FAKE_FETCH",m={isFetching:!1,actionTime:"",data:[],error:{}};function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={fakeModuleWithFetch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=Object(l.format)(new Date);switch(t.type){case d:return f({},e,{actionTime:n,isFetching:!0});case b:return f({},e,{actionTime:n,isFetching:!1,data:s(t.payload)});case y:return f({},e,{actionTime:n,isFetching:!1,error:t.error?f({},t.error):{}});default:return e}},userAuth:n(155).default},v=Object(r.combineReducers)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){h(e,t,n[t])})}return e}({},g)),w=n(331),O=n.n(w);function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){E(e,t,n[t])})}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){return function(t){return function(n){if(!n.fetch)return t(n);if(!n.fetch.type||"FETCH_MOCK"===!n.fetch.type||"FETCH"===!n.fetch.type)return t(n);if(!n.fetch.actionTypes)return t(n);if("FETCH_MOCK"===n.fetch.type){if(!n.fetch.mockResult)throw new Error('Fetch middleware require a mockResult payload when type is "FETCH_MOCK"');var r=n.fetch,o=r.actionTypes,i=o.request,a=o.success,c=r.mockResult;return e.dispatch({type:i}),Promise.resolve(e.dispatch({type:a,payload:{status:200,data:c}}))}if("FETCH"===n.fetch.type){var u=n.fetch,l=u.actionTypes,s=l.request,f=l.success,p=l.fail,d=u.url,b=u.method,y=u.headers,m=u.options;return e.dispatch({type:s}),O.a.request(S({method:b,url:d,withCredentials:!0,headers:S({Accept:"application/json","Content-Type":"application/json","Acces-Control-Allow-Origin":"*"},y)},m)).then(function(t){return e.dispatch({type:f,payload:t})}).catch(function(t){return e.dispatch({type:p,error:t.response}),Promise.reject(t.response)})}return t(n)}}};n.d(t,"history",function(){return k}),n.d(t,"default",function(){return P});var k=u()(),_=Object(a.composeWithDevTools)(Object(r.applyMiddleware)(o.a,j,Object(i.routerMiddleware)(k)));function P(e){return Object(r.createStore)(Object(i.connectRouter)(k)(v),e,_)}}});