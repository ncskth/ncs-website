function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var a=o((function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r=p;return function(o,a){if(r===v)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=j(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",h="suspendedYield",v="executing",d="completed",m={};function y(){}function g(){}function b(){}var $={};$[i]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(R([])));w&&w!==r&&o.call(w,i)&&($=w);var _=b.prototype=y.prototype=Object.create($);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(a,i,c,u){var f=l(e[a],e,i);if("throw"!==f.type){var s=f.arg,p=s.value;return p&&"object"===t(p)&&o.call(p,"__await")?n.resolve(p.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(p).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(f.arg)}var a;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function R(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:n,done:!0}}return g.prototype=_.constructor=b,b.constructor=g,g.displayName=f(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[c]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new S(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(_),f(_,u,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=R,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),f=o.call(i,"finallyLoc");if(u&&f){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:R(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}));function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}var f,s=o((function(t){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=e=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),e(n)}t.exports=e,t.exports.default=t.exports,t.exports.__esModule=!0}));function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?l(t):e}function h(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(){}function y(t,e){for(var n in e)t[n]=e[n];return t}function g(t){return t()}function b(){return Object.create(null)}function $(t){t.forEach(g)}function x(t){return"function"==typeof t}function w(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function _(t,e,n,r){return t[1]&&r?y(n.ctx.slice(),t[1](r(e))):n.ctx}function E(e,n,r,o,a,i,c){var u=function(e,n,r,o){if(e[2]&&o){var a=e[2](o(r));if(void 0===n.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(n.dirty.length,a.length),u=0;u<c;u+=1)i[u]=n.dirty[u]|a[u];return i}return n.dirty|a}return n.dirty}(n,o,a,i);if(u){var f=_(n,r,o,c);e.p(f,u)}}function S(t,e){t.appendChild(e)}function j(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function L(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function O(t){return document.createElement(t)}function R(t){return document.createTextNode(t)}function P(){return R(" ")}function A(){return R("")}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t){return Array.from(t.childNodes)}function T(t,e,n,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,c=[];i<a.attributes.length;){var u=a.attributes[i++];n[u.name]||c.push(u.name)}for(var f=0;f<c.length;f++)a.removeAttribute(c[f]);return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):O(e)}function C(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return R(e)}function q(t){return C(t," ")}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function G(t){f=t}function J(){if(!f)throw new Error("Function called outside component initialization");return f}var M=[],F=[],K=[],V=[],Y=Promise.resolve(),D=!1;function H(t){K.push(t)}var z=!1,W=new Set;function X(){if(!z){z=!0;do{for(var t=0;t<M.length;t+=1){var e=M[t];G(e),Q(e.$$)}for(G(null),M.length=0;F.length;)F.pop()();for(var n=0;n<K.length;n+=1){var r=K[n];W.has(r)||(W.add(r),r())}K.length=0}while(M.length);for(;V.length;)V.pop()();D=!1,z=!1,W.clear()}}function Q(t){if(null!==t.fragment){t.update(),$(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}var Z,tt=new Set;function et(){Z={r:0,c:[],p:Z}}function nt(){Z.r||$(Z.c),Z=Z.p}function rt(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function ot(t,e,n,r){if(t&&t.o){if(tt.has(t))return;tt.add(t),Z.c.push((function(){tt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function at(t,e){for(var n={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(r[u]=1);for(var f in c)o[f]||(n[f]=c[f],o[f]=1);t[a]=c}else for(var s in i)o[s]=1}for(var l in r)l in n||(n[l]=void 0);return n}function it(e){return"object"===t(e)&&null!==e?e:{}}function ct(t){t&&t.c()}function ut(t,e){t&&t.l(e)}function ft(t,e,n,r){var o=t.$$,a=o.fragment,i=o.on_mount,c=o.on_destroy,u=o.after_update;a&&a.m(e,n),r||H((function(){var e=i.map(g).filter(x);c?c.push.apply(c,h(e)):$(e),t.$$.on_mount=[]})),u.forEach(H)}function st(t,e){var n=t.$$;null!==n.fragment&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){-1===t.$$.dirty[0]&&(M.push(t),D||(D=!0,Y.then(X)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pt(t,e,n,r,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=f;G(t);var u=t.$$={fragment:null,ctx:null,props:a,update:m,not_equal:o,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:b(),dirty:i,skip_bound:!1},s=!1;if(u.ctx=n?n(t,e.props||{},(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return u.ctx&&o(u.ctx[e],u.ctx[e]=r)&&(!u.skip_bound&&u.bound[e]&&u.bound[e](r),s&&lt(t,e)),n})):[],u.update(),s=!0,$(u.before_update),u.fragment=!!r&&r(u.ctx),e.target){if(e.hydrate){var l=I(e.target);u.fragment&&u.fragment.l(l),l.forEach(k)}else u.fragment&&u.fragment.c();e.intro&&rt(t.$$.fragment),ft(t,e.target,e.anchor,e.customElement),X()}G(c)}var ht=function(){function t(){v(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){st(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&d(e.prototype,n),r&&d(e,r),t}(),vt=[];function dt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,r=[];function o(n){if(w(t,n)&&(t=n,e)){for(var o=!vt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),vt.push(i,t)}if(o){for(var c=0;c<vt.length;c+=2)vt[c][0](vt[c+1]);vt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[a,i];return r.push(c),1===r.length&&(e=n(o)||m),a(t),function(){var t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var mt={};function yt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function gt(t){var e,n,o,a,i,c,u,f,s,l,p,h,v,d,y,g;return{c:function(){e=O("nav"),n=O("ul"),o=O("li"),a=O("a"),i=R("home"),u=P(),f=O("li"),s=O("a"),l=R("staff"),h=P(),v=O("li"),d=O("a"),y=R("science"),this.h()},l:function(t){var r=I(e=T(t,"NAV",{class:!0})),c=I(n=T(r,"UL",{class:!0})),p=I(o=T(c,"LI",{class:!0})),m=I(a=T(p,"A",{"aria-current":!0,href:!0,class:!0}));i=C(m,"home"),m.forEach(k),p.forEach(k),u=q(c);var g=I(f=T(c,"LI",{class:!0})),b=I(s=T(g,"A",{"aria-current":!0,href:!0,class:!0}));l=C(b,"staff"),b.forEach(k),g.forEach(k),h=q(c);var $=I(v=T(c,"LI",{class:!0})),x=I(d=T($,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));y=C(x,"science"),x.forEach(k),$.forEach(k),c.forEach(k),r.forEach(k),this.h()},h:function(){N(a,"aria-current",c=void 0===t[0]?"page":void 0),N(a,"href","."),N(a,"class","svelte-1hga8j4"),N(o,"class","svelte-1hga8j4"),N(s,"aria-current",p="staff"===t[0]?"page":void 0),N(s,"href","staff"),N(s,"class","svelte-1hga8j4"),N(f,"class","svelte-1hga8j4"),N(d,"rel","prefetch"),N(d,"aria-current",g="science"===t[0]?"page":void 0),N(d,"href","science"),N(d,"class","svelte-1hga8j4"),N(v,"class","svelte-1hga8j4"),N(n,"class","svelte-1hga8j4"),N(e,"class","svelte-1hga8j4")},m:function(t,r){j(t,e,r),S(e,n),S(n,o),S(o,a),S(a,i),S(n,u),S(n,f),S(f,s),S(s,l),S(n,h),S(n,v),S(v,d),S(d,y)},p:function(t,e){var n=r(e,1)[0];1&n&&c!==(c=void 0===t[0]?"page":void 0)&&N(a,"aria-current",c),1&n&&p!==(p="staff"===t[0]?"page":void 0)&&N(s,"aria-current",p),1&n&&g!==(g="science"===t[0]?"page":void 0)&&N(d,"aria-current",g)},i:m,o:m,d:function(t){t&&k(e)}}}function bt(t,e,n){var r=e.segment;return t.$$set=function(t){"segment"in t&&n(0,r=t.segment)},[r]}var $t=function(t){u(n,ht);var e=yt(n);function n(t){var r;return v(this,n),pt(l(r=e.call(this)),t,bt,gt,w,{segment:0}),r}return n}();function xt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function wt(t){var e,n,o,a;e=new $t({props:{segment:t[0]}});var i=t[2].default,c=function(t,e,n,r){if(t){var o=_(t,e,n,r);return t[0](o)}}(i,t,t[1],null);return{c:function(){ct(e.$$.fragment),n=P(),o=O("main"),c&&c.c(),this.h()},l:function(t){ut(e.$$.fragment,t),n=q(t);var r=I(o=T(t,"MAIN",{class:!0}));c&&c.l(r),r.forEach(k),this.h()},h:function(){N(o,"class","svelte-1tg3ag8")},m:function(t,r){ft(e,t,r),j(t,n,r),j(t,o,r),c&&c.m(o,null),a=!0},p:function(t,n){var o=r(n,1)[0],a={};1&o&&(a.segment=t[0]),e.$set(a),c&&c.p&&2&o&&E(c,i,t,t[1],o,null,null)},i:function(t){a||(rt(e.$$.fragment,t),rt(c,t),a=!0)},o:function(t){ot(e.$$.fragment,t),ot(c,t),a=!1},d:function(t){st(e,t),t&&k(n),t&&k(o),c&&c.d(t)}}}function _t(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,a=e.$$scope,i=e.segment;return t.$$set=function(t){"segment"in t&&n(0,i=t.segment),"$$scope"in t&&n(1,a=t.$$scope)},[i,a,o]}var Et=function(t){u(n,ht);var e=xt(n);function n(t){var r;return v(this,n),pt(l(r=e.call(this)),t,_t,wt,w,{segment:0}),r}return n}();function St(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function jt(t){var e,n,r=t[1].stack+"";return{c:function(){e=O("pre"),n=R(r)},l:function(t){var o=I(e=T(t,"PRE",{}));n=C(o,r),o.forEach(k)},m:function(t,r){j(t,e,r),S(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&U(n,r)},d:function(t){t&&k(e)}}}function kt(t){var e,n,o,a,i,c,u,f,s,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&jt(t);return{c:function(){n=P(),o=O("h1"),a=R(t[0]),i=P(),c=O("p"),u=R(l),f=P(),p&&p.c(),s=A(),this.h()},l:function(e){B('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(k),n=q(e);var r=I(o=T(e,"H1",{class:!0}));a=C(r,t[0]),r.forEach(k),i=q(e);var h=I(c=T(e,"P",{class:!0}));u=C(h,l),h.forEach(k),f=q(e),p&&p.l(e),s=A(),this.h()},h:function(){N(o,"class","svelte-8od9u6"),N(c,"class","svelte-8od9u6")},m:function(t,e){j(t,n,e),j(t,o,e),S(o,a),j(t,i,e),j(t,c,e),S(c,u),j(t,f,e),p&&p.m(t,e),j(t,s,e)},p:function(t,n){var o=r(n,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&U(a,t[0]),2&o&&l!==(l=t[1].message+"")&&U(u,l),t[2]&&t[1].stack?p?p.p(t,o):((p=jt(t)).c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&k(n),t&&k(o),t&&k(i),t&&k(c),t&&k(f),p&&p.d(t),t&&k(s)}}}function Lt(t,e,n){var r=e.status,o=e.error;return t.$$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}var Ot=function(t){u(n,ht);var e=St(n);function n(t){var r;return v(this,n),pt(l(r=e.call(this)),t,Lt,kt,w,{status:0,error:1}),r}return n}();function Rt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function Pt(t){var e,n,r,o=[t[4].props],a=t[4].component;function i(t){for(var e={},n=0;n<o.length;n+=1)e=y(e,o[n]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&ct(e.$$.fragment),n=A()},l:function(t){e&&ut(e.$$.fragment,t),n=A()},m:function(t,o){e&&ft(e,t,o),j(t,n,o),r=!0},p:function(t,r){var c=16&r?at(o,[it(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){et();var u=e;ot(u.$$.fragment,1,0,(function(){st(u,1)})),nt()}a?(ct((e=new a(i())).$$.fragment),rt(e.$$.fragment,1),ft(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i:function(t){r||(e&&rt(e.$$.fragment,t),r=!0)},o:function(t){e&&ot(e.$$.fragment,t),r=!1},d:function(t){t&&k(n),e&&st(e,t)}}}function At(t){var e,n;return e=new Ot({props:{error:t[0],status:t[1]}}),{c:function(){ct(e.$$.fragment)},l:function(t){ut(e.$$.fragment,t)},m:function(t,r){ft(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(rt(e.$$.fragment,t),n=!0)},o:function(t){ot(e.$$.fragment,t),n=!1},d:function(t){st(e,t)}}}function Nt(t){var e,n,r,o,a=[At,Pt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=a[e](t),{c:function(){n.c(),r=A()},l:function(t){n.l(t),r=A()},m:function(t,n){i[e].m(t,n),j(t,r,n),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(et(),ot(i[u],1,1,(function(){i[u]=null})),nt(),(n=i[e])?n.p(t,o):(n=i[e]=a[e](t)).c(),rt(n,1),n.m(r.parentNode,r))},i:function(t){o||(rt(n),o=!0)},o:function(t){ot(n),o=!1},d:function(t){i[e].d(t),t&&k(r)}}}function It(t){for(var e,n,o=[{segment:t[2][0]},t[3].props],a={$$slots:{default:[Nt]},$$scope:{ctx:t}},i=0;i<o.length;i+=1)a=y(a,o[i]);return e=new Et({props:a}),{c:function(){ct(e.$$.fragment)},l:function(t){ut(e.$$.fragment,t)},m:function(t,r){ft(e,t,r),n=!0},p:function(t,n){var a=r(n,1)[0],i=12&a?at(o,[4&a&&{segment:t[2][0]},8&a&&it(t[3].props)]):{};147&a&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i:function(t){n||(rt(e.$$.fragment,t),n=!0)},o:function(t){ot(e.$$.fragment,t),n=!1},d:function(t){st(e,t)}}}function Tt(t,e,n){var r,o,a,i=e.stores,c=e.error,u=e.status,f=e.segments,s=e.level0,l=e.level1,p=void 0===l?null:l,h=e.notify;return r=h,J().$$.after_update.push(r),o=mt,a=i,J().$$.context.set(o,a),t.$$set=function(t){"stores"in t&&n(5,i=t.stores),"error"in t&&n(0,c=t.error),"status"in t&&n(1,u=t.status),"segments"in t&&n(2,f=t.segments),"level0"in t&&n(3,s=t.level0),"level1"in t&&n(4,p=t.level1),"notify"in t&&n(6,h=t.notify)},[c,u,f,s,p,i,h]}var Ct,qt=function(t){u(n,ht);var e=Rt(n);function n(t){var r;return v(this,n),pt(l(r=e.call(this)),t,Tt,It,w,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),Ut=[/^\/science\.json$/,/^\/science\/([^/]+?)\.json$/],Bt=[{js:function(){return Promise.all([import("./index.9bff42fd.js"),__inject_styles(["client-45696d7b.css","index-e785e05b.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./index.742d1bc6.js"),__inject_styles(["client-45696d7b.css","index-df9e554a.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./[slug].87427e3f.js"),__inject_styles(["client-45696d7b.css","[slug]-5bc8f95f.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./staff.3dc242c3.js"),__inject_styles(["client-45696d7b.css","staff-7603920f.css"])]).then((function(t){return t[0]}))}}],Gt=(Ct=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/science\/?$/,parts:[{i:1}]},{pattern:/^\/science\/([^/]+?)\/?$/,parts:[null,{i:2,params:function(t){return{slug:Ct(t[1])}}}]},{pattern:/^\/staff\/?$/,parts:[{i:3}]}]);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Jt(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{u(r.next(t))}catch(t){a(t)}}function c(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}u((r=r.apply(t,e||[])).next())}))}function Mt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var Ft,Kt=1;var Vt,Yt,Dt="undefined"!=typeof history?history:{pushState:function(){},replaceState:function(){},scrollRestoration:"auto"},Ht={};function zt(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=r(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=o[1],i=o[2],c=void 0===i?"":i;"string"==typeof n[a]&&(n[a]=[n[a]]),"object"===t(n[a])?n[a].push(c):n[a]=c})),n}function Wt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Vt))return null;var e=t.pathname.slice(Vt.length);if(""===e&&(e="/"),!Ut.some((function(t){return t.test(e)})))for(var n=0;n<Gt.length;n+=1){var r=Gt[n],o=r.pattern.exec(e);if(o){var a=zt(t.search),i=r.parts[r.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:r,match:o,page:u}}}}function Xt(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var n=Mt(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=Wt(a);if(i)te(i,null,n.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),Dt.pushState({id:Ft},"",a.href)}}}else location.hash||e.preventDefault()}}}function Qt(){return{x:pageXOffset,y:pageYOffset}}function Zt(t){if(Ht[Ft]=Qt(),t.state){var e=Wt(new URL(location.href));e?te(e,t.state.id):location.href=location.href}else(function(t){Ft=t})(Kt=Kt+1),Dt.replaceState({id:Ft},"",location.href)}function te(t,e,n,r){return Jt(this,void 0,void 0,a.mark((function o(){var i,c,u,f;return a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(i=!!e)?Ft=e:(c=Qt(),Ht[Ft]=c,Ft=e=++Kt,Ht[Ft]=n?c:{x:0,y:0}),o.next=4,Yt(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),n||(u=Ht[e],r&&(f=document.getElementById(r.slice(1)))&&(u={x:0,y:f.getBoundingClientRect().top+scrollY}),Ht[Ft]=u,i||f?scrollTo(u.x,u.y):scrollTo(0,0));case 6:case"end":return o.stop()}}),o)})))}function ee(t){var e=t.baseURI;if(!e){var n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}var ne,re=null;function oe(t){return re&&re.href===t.href?re.promise:je(t)}function ae(t){var e=Mt(t.target);e&&"prefetch"===e.rel&&function(t){var e=Wt(new URL(t,ee(document)));if(e)re&&t===re.href||(re={href:t,promise:je(e)}),re.promise}(e.href)}function ie(t){clearTimeout(ne),ne=setTimeout((function(){ae(t)}),20)}function ce(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},n=Wt(new URL(t,ee(document)));return n?(Dt[e.replaceState?"replaceState":"pushState"]({id:Ft},"",t),te(n,null,e.noscroll)):(location.href=t,new Promise((function(){})))}var ue,fe,se,le,pe,he,ve,de,me,ye="undefined"!=typeof __SAPPER__&&__SAPPER__,ge=!1,be=[],$e="{}",xe={page:function(t){var e=dt(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:dt(null),session:dt(ye&&ye.session)};function we(t,e){var n=t.error;return Object.assign({error:n},e)}function _e(t){return Jt(this,void 0,void 0,a.mark((function e(){var n,r,o,i,c,u;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ue&&xe.preloading.set(!0),n=oe(t),r=fe={},e.next=5,n;case 5:if(o=e.sent,i=o.redirect,r===fe){e.next=9;break}return e.abrupt("return");case 9:if(!i){e.next=14;break}return e.next=12,ce(i.location,{replaceState:!0});case 12:e.next=17;break;case 14:return c=o.props,u=o.branch,e.next=17,Ee(u,c,we(c,t.page));case 17:case"end":return e.stop()}}),e)})))}function Ee(t,e,n){return Jt(this,void 0,void 0,a.mark((function r(){return a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(xe.page.set(n),xe.preloading.set(!1),!ue){r.next=6;break}ue.$set(e),r.next=13;break;case 6:return e.stores={page:{subscribe:xe.page.subscribe},preloading:{subscribe:xe.preloading.subscribe},session:xe.session},r.next=9,se;case 9:r.t0=r.sent,e.level0={props:r.t0},e.notify=xe.page.notify,ue=new qt({target:he,props:e,hydrate:!0});case 13:be=t,$e=JSON.stringify(n.query),ge=!0,pe=!1;case 17:case"end":return r.stop()}}),r)})))}function Se(t,e,n,r){if(r!==$e)return!0;var o=be[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function je(t){return Jt(this,void 0,void 0,a.mark((function e(){var n,r,o,i,c,u,f,s,l,p,h,v,d=this;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,o=r.path.split("/").filter(Boolean),i=null,c={error:null,status:200,segments:[o[0]]},u={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},se||(f=function(){return{}},se=ye.preloaded[0]||f.call(u,{host:r.host,path:r.path,query:r.query,params:{}},le)),l=1,e.prev=7,p=JSON.stringify(r.query),h=n.pattern.exec(r.path),v=!1,e.next=13,Promise.all(n.parts.map((function(e,n){return Jt(d,void 0,void 0,a.mark((function i(){var f,s,d,m,y,g;return a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(f=o[n],Se(n,f,h,p)&&(v=!0),c.segments[l]=o[n+1],e){a.next=5;break}return a.abrupt("return",{segment:f});case 5:if(s=l++,pe||v||!be[n]||be[n].part!==e.i){a.next=8;break}return a.abrupt("return",be[n]);case 8:return v=!1,a.next=11,Bt[e.i].js();case 11:if(d=a.sent,m=d.default,y=d.preload,!ge&&ye.preloaded[n+1]){a.next=25;break}if(!y){a.next=21;break}return a.next=18,y.call(u,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(t.match):{}},le);case 18:a.t0=a.sent,a.next=22;break;case 21:a.t0={};case 22:g=a.t0,a.next=26;break;case 25:g=ye.preloaded[n+1];case 26:return a.abrupt("return",c["level".concat(s)]={component:m,props:g,segment:f,match:h,part:e.i});case 27:case"end":return a.stop()}}),i)})))})));case 13:s=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),c.error=e.t0,c.status=500,s=[];case 21:return e.abrupt("return",{redirect:i,props:c,branch:s});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}xe.session.subscribe((function(t){return Jt(void 0,void 0,void 0,a.mark((function e(){var n,r,o,i,c,u;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(le=t,ge){e.next=3;break}return e.abrupt("return");case 3:return pe=!0,n=Wt(new URL(location.href)),r=fe={},e.next=8,je(n);case 8:if(o=e.sent,i=o.redirect,c=o.props,u=o.branch,r===fe){e.next=14;break}return e.abrupt("return");case 14:if(!i){e.next=19;break}return e.next=17,ce(i.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,Ee(u,c,we(c,n.page));case 21:case"end":return e.stop()}}),e)})))})),ve={target:document.querySelector("#sapper")},de=ve.target,he=de,me=ye.baseUrl,Vt=me,Yt=_e,"scrollRestoration"in Dt&&(Dt.scrollRestoration="manual"),addEventListener("beforeunload",(function(){Dt.scrollRestoration="auto"})),addEventListener("load",(function(){Dt.scrollRestoration="manual"})),addEventListener("click",Xt),addEventListener("popstate",Zt),addEventListener("touchstart",ae),addEventListener("mousemove",ie),ye.error?Promise.resolve().then((function(){return function(){var t=location,e=t.host,n=t.pathname,r=t.search,o=ye.session,a=ye.preloaded,i=ye.status,c=ye.error;se||(se=a&&a[0]);var u={error:c,status:i,session:o,level0:{props:se},level1:{props:{status:i,error:c},component:Ot},segments:a},f=zt(r);Ee([],u,{host:e,path:n,query:f,params:{},error:c})}()})):Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;Dt.replaceState({id:Kt},"",n);var r=Wt(new URL(location.href));if(r)return te(r,Kt,!0,e)}));export{ht as S,u as _,i as a,p as b,v as c,l as d,P as e,O as f,k as g,q as h,pt as i,T as j,I as k,C as l,N as m,j as n,S as o,m as p,B as q,U as r,w as s,R as t,r as u,L as v,a as w};

import __inject_styles from './inject_styles.fe622066.js';