!function(){var t={3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},6077:function(t,n,e){var r=e(111);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},9670:function(t,n,e){var r=e(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},8457:function(t,n,e){"use strict";var r=e(9974),o=e(7908),i=e(3411),c=e(7659),u=e(7466),a=e(6135),f=e(1246);t.exports=function(t){var n,e,s,l,p,v,h=o(t),d="function"==typeof this?this:Array,y=arguments.length,m=y>1?arguments[1]:void 0,g=void 0!==m,b=f(h),x=0;if(g&&(m=r(m,y>2?arguments[2]:void 0,2)),null==b||d==Array&&c(b))for(e=new d(n=u(h.length));n>x;x++)v=g?m(h[x],x):h[x],a(e,x,v);else for(p=(l=b.call(h)).next,e=new d;!(s=p.call(l)).done;x++)v=g?i(l,m,[s.value,x],!0):s.value,a(e,x,v);return e.length=x,e}},1318:function(t,n,e){var r=e(5656),o=e(7466),i=e(1400),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},1194:function(t,n,e){var r=e(7293),o=e(5112),i=e(7392),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},5417:function(t,n,e){var r=e(111),o=e(3157),i=e(5112)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},3411:function(t,n,e){var r=e(9670),o=e(9212);t.exports=function(t,n,e,i){try{return i?n(r(e)[0],e[1]):n(e)}catch(n){throw o(t),n}}},7072:function(t,n,e){var r=e(5112)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},4326:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},648:function(t,n,e){var r=e(1694),o=e(4326),i=e(5112)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:c?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},9920:function(t,n,e){var r=e(6656),o=e(3887),i=e(1236),c=e(3070);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},8544:function(t,n,e){var r=e(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4994:function(t,n,e){"use strict";var r=e(3383).IteratorPrototype,o=e(30),i=e(9114),c=e(8003),u=e(7497),a=function(){return this};t.exports=function(t,n,e){var f=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),c(t,f,!1,!0),u[f]=a,t}},8880:function(t,n,e){var r=e(9781),o=e(3070),i=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},6135:function(t,n,e){"use strict";var r=e(7593),o=e(3070),i=e(9114);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},654:function(t,n,e){"use strict";var r=e(2109),o=e(4994),i=e(9518),c=e(7674),u=e(8003),a=e(8880),f=e(1320),s=e(5112),l=e(1913),p=e(7497),v=e(3383),h=v.IteratorPrototype,d=v.BUGGY_SAFARI_ITERATORS,y=s("iterator"),m="keys",g="values",b="entries",x=function(){return this};t.exports=function(t,n,e,s,v,w,O){o(e,n,s);var S,j,C,A=function(t){if(t===v&&P)return P;if(!d&&t in T)return T[t];switch(t){case m:case g:case b:return function(){return new e(this,t)}}return function(){return new e(this)}},k=n+" Iterator",E=!1,T=t.prototype,F=T[y]||T["@@iterator"]||v&&T[v],P=!d&&F||A(v),_="Array"==n&&T.entries||F;if(_&&(S=i(_.call(new t)),h!==Object.prototype&&S.next&&(l||i(S)===h||(c?c(S,h):"function"!=typeof S[y]&&a(S,y,x)),u(S,k,!0,!0),l&&(p[k]=x))),v==g&&F&&F.name!==g&&(E=!0,P=function(){return F.call(this)}),l&&!O||T[y]===P||a(T,y,P),p[n]=P,v)if(j={values:A(g),keys:w?P:A(m),entries:A(b)},O)for(C in j)(d||E||!(C in T))&&f(T,C,j[C]);else r({target:n,proto:!0,forced:d||E},j);return j}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,e){var r=e(7854),o=e(111),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8113:function(t,n,e){var r=e(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,n,e){var r,o,i=e(7854),c=e(8113),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]<4?1:r[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,e){var r=e(7854),o=e(1236).f,i=e(8880),c=e(1320),u=e(3505),a=e(9920),f=e(4705);t.exports=function(t,n){var e,s,l,p,v,h=t.target,d=t.global,y=t.stat;if(e=d?r:y?r[h]||u(h,{}):(r[h]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(d?s:h+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:function(t,n,e){var r=e(3099);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},5005:function(t,n,e){var r=e(857),o=e(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},1246:function(t,n,e){var r=e(648),o=e(7497),i=e(5112)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},7854:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},6656:function(t,n,e){var r=e(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,n){return o.call(r(t),n)}},3501:function(t){t.exports={}},490:function(t,n,e){var r=e(5005);t.exports=r("document","documentElement")},4664:function(t,n,e){var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(7293),o=e(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,n,e){var r=e(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},9909:function(t,n,e){var r,o,i,c=e(8536),u=e(7854),a=e(111),f=e(8880),s=e(6656),l=e(5465),p=e(6200),v=e(3501),h="Object already initialized",d=u.WeakMap;if(c||l.state){var y=l.state||(l.state=new d),m=y.get,g=y.has,b=y.set;r=function(t,n){if(g.call(y,t))throw new TypeError(h);return n.facade=t,b.call(y,t,n),n},o=function(t){return m.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var x=p("state");v[x]=!0,r=function(t,n){if(s(t,x))throw new TypeError(h);return n.facade=t,f(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},7659:function(t,n,e){var r=e(5112),o=e(7497),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},3157:function(t,n,e){var r=e(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4705:function(t,n,e){var r=e(7293),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},9212:function(t,n,e){var r=e(9670);t.exports=function(t){var n=t.return;if(void 0!==n)return r(n.call(t)).value}},3383:function(t,n,e){"use strict";var r,o,i,c=e(7293),u=e(9518),a=e(8880),f=e(6656),s=e(5112),l=e(1913),p=s("iterator"),v=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(r=o):v=!0);var h=null==r||c((function(){var t={};return r[p].call(t)!==t}));h&&(r={}),l&&!h||f(r,p)||a(r,p,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:v}},7497:function(t){t.exports={}},133:function(t,n,e){var r=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,n,e){var r=e(7854),o=e(2788),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},30:function(t,n,e){var r,o=e(9670),i=e(6048),c=e(748),u=e(3501),a=e(490),f=e(317),s=e(6200)("IE_PROTO"),l=function(){},p=function(t){return"<script>"+t+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;v=r?function(t){t.write(p("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var e=c.length;e--;)delete v.prototype[c[e]];return v()};u[s]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(l.prototype=o(t),e=new l,l.prototype=null,e[s]=t):e=v(),void 0===n?e:i(e,n)}},6048:function(t,n,e){var r=e(9781),o=e(3070),i=e(9670),c=e(1956);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=c(n),u=r.length,a=0;u>a;)o.f(t,e=r[a++],n[e]);return t}},3070:function(t,n,e){var r=e(9781),o=e(4664),i=e(9670),c=e(7593),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:function(t,n,e){var r=e(9781),o=e(5296),i=e(9114),c=e(5656),u=e(7593),a=e(6656),f=e(4664),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},8006:function(t,n,e){var r=e(6324),o=e(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},9518:function(t,n,e){var r=e(6656),o=e(7908),i=e(6200),c=e(8544),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},6324:function(t,n,e){var r=e(6656),o=e(5656),i=e(1318).indexOf,c=e(3501);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},1956:function(t,n,e){var r=e(6324),o=e(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},7674:function(t,n,e){var r=e(9670),o=e(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},3887:function(t,n,e){var r=e(5005),o=e(8006),i=e(5181),c=e(9670);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},857:function(t,n,e){var r=e(7854);t.exports=r},1320:function(t,n,e){var r=e(7854),o=e(8880),i=e(6656),c=e(3505),u=e(2788),a=e(9909),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var a,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(a=s(e)).source||(a.source=l.join("string"==typeof n?n:""))),t!==r?(f?!v&&t[n]&&(p=!0):delete t[n],p?t[n]=e:o(t,n,e)):p?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,n,e){var r=e(7854),o=e(8880);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},8003:function(t,n,e){var r=e(3070).f,o=e(6656),i=e(5112)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},6200:function(t,n,e){var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3505),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.15.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},8710:function(t,n,e){var r=e(9958),o=e(4488),i=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},1400:function(t,n,e){var r=e(9958),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9958:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},7466:function(t,n,e){var r=e(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(4488);t.exports=function(t){return Object(r(t))}},7593:function(t,n,e){var r=e(111);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1694:function(t,n,e){var r={};r[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},9711:function(t){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},3307:function(t,n,e){var r=e(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,n,e){var r=e(7854),o=e(2309),i=e(6656),c=e(9711),u=e(133),a=e(3307),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)&&(u||"string"==typeof f[t])||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},2222:function(t,n,e){"use strict";var r=e(2109),o=e(7293),i=e(3157),c=e(111),u=e(7908),a=e(7466),f=e(6135),s=e(5417),l=e(1194),p=e(5112),v=e(7392),h=p("isConcatSpreadable"),d=9007199254740991,y="Maximum allowed index exceeded",m=v>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=l("concat"),b=function(t){if(!c(t))return!1;var n=t[h];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!m||!g},{concat:function(t){var n,e,r,o,i,c=u(this),l=s(c,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(b(i=-1===n?c:arguments[n])){if(p+(o=a(i.length))>d)throw TypeError(y);for(e=0;e<o;e++,p++)e in i&&f(l,p,i[e])}else{if(p>=d)throw TypeError(y);f(l,p++,i)}return l.length=p,l}})},1038:function(t,n,e){var r=e(2109),o=e(8457);r({target:"Array",stat:!0,forced:!e(7072)((function(t){Array.from(t)}))},{from:o})},8783:function(t,n,e){"use strict";var r=e(8710).charAt,o=e(9909),i=e(654),c="String Iterator",u=o.set,a=o.getterFor(c);i(String,"String",(function(t){u(this,{type:c,string:String(t),index:0})}),(function(){var t,n=a(this),e=n.string,o=n.index;return o>=e.length?{value:void 0,done:!0}:(t=r(e,o),n.index+=t.length,{value:t,done:!1})}))}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e(2222);var n=function(){function n(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.body=document.body,this.cursor=document.querySelector(".cursor"),this.listenerCursor()}var e,r;return e=n,(r=[{key:"listenerCursor",value:function(){var t=this;document.addEventListener("mousemove",(function(n){var e={x:n.clientX,y:n.clientY};t.cursor.style.transform="translate(".concat(e.x,"px, ").concat(e.y-56,"px)")})),document.addEventListener("mousedown",(function(n){t.cursor.children[0].classList.add("attack"),setTimeout((function(){return t.cursor.children[0].classList.remove("attack")}),150)}))}}])&&t(e.prototype,r),n}();function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e(1038),e(8783);var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.fieldSize=4,this.drawGameField(),this.fieldsHitAndMiss()}var n,e;return n=t,(e=[{key:"drawGameField",value:function(){this.gameFieldConteiner=document.createElement("div"),this.gameFieldConteiner.classList.add("game-field-container"),this.gameField=document.createElement("div"),this.gameField.classList.add("game-field"),this.gameFieldConteiner.appendChild(this.gameField);for(var t=0;t<Math.pow(this.fieldSize,2);t++){var n=document.createElement("div");n.classList.add("cell"),this.gameField.appendChild(n)}document.body.appendChild(this.gameFieldConteiner),this.arrayCells=Array.from(this.gameField.children)}},{key:"fieldsHitAndMiss",value:function(){this.hitBlock=document.createElement("p"),this.hitBlock.classList.add("hit"),this.missBlock=document.createElement("p"),this.missBlock.classList.add("miss"),this.gameFieldConteiner.insertAdjacentElement("afterbegin",this.hitBlock),this.gameFieldConteiner.appendChild(this.missBlock)}}])&&r(n.prototype,e),t}();function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.gameField=document.querySelector(".game-field"),this.arrayCells=Array.from(document.querySelectorAll(".cell")),this.currentCell=null,this.activeSetTimeout=null,this.goblin=null,this.drawGoblin(),this.movementGoblin()}var n,e;return n=t,(e=[{key:"drawGoblin",value:function(){this.goblin=document.createElement("div"),this.goblin.classList.add("goblin")}},{key:"movementGoblin",value:function(){var t=this,n=null;do{n=Math.floor(Math.random()*this.arrayCells.length)}while(this.currentCell===n);this.currentCell=n,this.gameField.children[n].appendChild(this.goblin),this.activeSetTimeout=setTimeout((function(){t.movementGoblin()}),1e3)}},{key:"stopActive",value:function(){clearTimeout(this.activeSetTimeout)}}])&&i(n.prototype,e),t}();function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}new(function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.gameField=n,this.goblin=e,this.init()}var n,e;return n=t,(e=[{key:"init",value:function(){this.resetGame(),this.listenerCounter()}},{key:"resetGame",value:function(){this.hitCounter=0,this.missCounter=0,this.drawCount()}},{key:"drawCount",value:function(){this.gameField.hitBlock.textContent=this.hitCounter,this.gameField.missBlock.textContent=this.missCounter}},{key:"listenerCounter",value:function(){var t=this;document.addEventListener("mousedown",(function(n){n.target.closest(".goblin")?(t.hitCounter++,t.drawCount(),t.nextGoblinStep()):n.target.closest(".game-field")&&(t.missCounter++,t.drawCount(),t.gamecheck())}))}},{key:"nextGoblinStep",value:function(){this.goblin.stopActive(),this.goblin.movementGoblin()}},{key:"gamecheck",value:function(){this.missCounter<=5||(alert("вы проиграли(("),this.resetGame())}}])&&u(n.prototype,e),t}())(new o,new c),new n}()}();