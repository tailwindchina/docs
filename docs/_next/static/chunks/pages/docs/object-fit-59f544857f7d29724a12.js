_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[109],{"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("rePB"),s=t("q1tI"),c=t.n(s),o=t("98BF"),i=t("Zb5r"),r=t("AOjV"),p=c.a.createElement;function l(e){var n=e.plugin,t=e.name,s=o.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),l="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(t," \u529f\u80fd\u7c7b\uff0c").concat(s.length?"\u53ea\u751f\u6210 ".concat(Object(i.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:l}}),p("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u60a8\u7684"," ",p("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",p("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",p("code",null,n)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",t," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),p("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",s.length>0?"\u4e5f":"","\u5c06\u751f\u6210"," ",Object(i.a)(c)," \u53d8\u4f53:"),p(r.a,{path:"variants.extend",before:"...",add:Object(a.a)({},n,c)}))}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("q1tI"),s=t.n(a),c=(t("Btb4"),t("AI3G")),o=t("iuhU"),i=s.a.createElement;function r(e){var n=e.value;return"string"===typeof n?i("span",{className:"token string"},"'",n,"'"):Array.isArray(n)?i(s.a.Fragment,null,i("span",{className:"token punctuation"},"["),n.map((function(e,t){return i(a.Fragment,{key:t},i(r,{value:e}),t===n.length-1?null:i("span",{className:"token punctuation"},", "))})),i("span",{className:"token punctuation"},"]")):"boolean"===typeof n?i("span",{className:"token boolean"},n.toString()):n.toString()}function p(e){var n=e.edits,t=e.indent,s=void 0===t?"":t,c=e.type,p=void 0===c?"inserted":c;return i("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===p,"deleted-sign deleted":"inserted"!==p})},Object.keys(n).map((function(e,t){return i(a.Fragment,{key:t},i("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===p,deleted:"inserted"!==p})},"inserted"===p?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(c=e)?c:"'".concat(c,"'"),i("span",{className:"token operator"},":")," ",i(r,{value:n[e]}),i("span",{className:"token punctuation"},","),"\n");var c})))}function l(e){var n=e.path,t=e.add,s=e.remove,o=e.before,r=e.after;return n="string"===typeof n?n.split("."):n,i("div",{className:"prose"},i("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  ",i("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",i("span",{className:"token punctuation"},"."),i("span",{className:"token property-access"},"exports")," ",i("span",{className:"token operator"},"=")," ",i("span",{className:"token punctuation"},"{"),"\n",n.map((function(e,n){return i(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,i("span",{className:"token operator"},":")," ",i("span",{className:"token punctuation"},"{"),"\n")})),o&&Object(c.a)(o).map((function(e,t){return i(a.Fragment,{key:t},"  ".repeat(n.length+2),i("span",{className:"token comment"},"// ".concat(e)),"\n")}))),s&&i(p,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&i(p,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),i("span",{className:"token unchanged"},r&&Object(c.a)(r).map((function(e){return"".concat("  ".repeat(n.length+2)).concat(e,"\n")})),n.map((function(e,t){return i(a.Fragment,{key:t},"  ","  ".repeat(n.length-t),"}\n")})),"  }")))))}},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),c=t("GAX2").default;e.exports=(e,n,t)=>{const o=[];return function e(n,t,i){let r;(t=t||{}).indent=t.indent||"\t",i=i||"",r=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(r.newLine,"g"),"").replace(new RegExp(r.newLineOrSpace,"g")," ").replace(new RegExp(r.pad+"|"+r.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(r.newLine+"|"+r.newLineOrSpace,"g"),"\n").replace(new RegExp(r.pad,"g"),i).replace(new RegExp(r.indent,"g"),i+t.indent)};if(-1!==o.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";o.push(n);const a="["+r.newLine+n.map((a,s)=>{const c=n.length-1===s?r.newLine:","+r.newLineOrSpace;let o=e(a,t,i+t.indent);return t.transform&&(o=t.transform(n,s,o)),r.indent+o+c}).join("")+r.pad+"]";return o.pop(),p(a)}if(s(n)){let a=Object.keys(n).concat(c(n));if(t.filter&&(a=a.filter(e=>t.filter(n,e))),0===a.length)return"{}";o.push(n);const s="{"+r.newLine+a.map((s,c)=>{const o=a.length-1===c?r.newLine:","+r.newLineOrSpace,p="symbol"===typeof s,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||l?s:e(s,t);let d=e(n[s],t,i+t.indent);return t.transform&&(d=t.transform(n,s,d)),r.indent+String(u)+": "+d+o}).join("")+r.pad+"}";return o.pop(),p(s)}return n=String(n).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter(n=>Object.prototype.propertyIsEnumerable.call(e,n))},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce((function(n,t,a){return 0===a?t:a===e.length-1?"".concat(n," and ").concat(t):"".concat(n,", ").concat(t)}),"")}t.d(n,"a",(function(){return a}))},ap0H:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("q1tI"),s=t.n(a),c=t("8Kt/"),o=t.n(c),i=s.a.createElement;function r(e){var n=e.suffix,t=e.children+(n?" - ".concat(n):"");return i(o.a,null,i("title",{key:"title"},t),i("meta",{key:"twitter:title",name:"twitter:title",content:t}),i("meta",{key:"og:title",property:"og:title",content:t}))}},cryp:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/object-fit",function(){return t("u+Ep")}])},"hv1/":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,variants:n}){e({".object-contain":{"object-fit":"contain"},".object-cover":{"object-fit":"cover"},".object-fill":{"object-fit":"fill"},".object-none":{"object-fit":"none"},".object-scale-down":{"object-fit":"scale-down"}},n("objectFit"))}}},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return f}));var a=t("wx14"),s=t("q1tI"),c=t.n(s),o=t("iuhU"),i=t("ZMKu"),r=c.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(e){var n=Object(s.useRef)(),t=Object(s.useState)(!1),c=t[0],o=t[1],i=Object(s.useState)({}),p=i[0],l=i[1];return Object(s.useEffect)((function(){if(c){var e=new window.ResizeObserver(t);return t(),e.observe(n.current.contentDocument.body),function(){e.disconnect()}}function t(){l({height:n.current.contentDocument.body.scrollHeight})}}),[c]),r("iframe",Object(a.a)({},e,{ref:n,onLoad:function(){return o(!0)},style:p}))}function b(e){var n=e.color,t=e.snippet;return r("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",p[n],{"bg-gray-800":!p[n]})},r("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[n]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function m(e){var n=e.preview,t=e.src,a=e.snippet,s=e.previewClassName,c=e.color,i=void 0===c?"gray":c;return r("div",{className:"relative overflow-hidden mb-8"},n?r("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",l[i],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:n}}):r(g,{src:t,className:Object(o.a)("w-full rounded-t-xl",l[i])}),r(b,{color:i,snippet:a}))}function f(e){var n=e.preview,t=e.src,a=e.previewClassName,c=e.snippet,p=e.color,m=void 0===p?"gray":p,f=e.min,j=void 0!==f&&f,v=Object(s.useRef)(),k=Object(i.h)(0),O=Object(s.useRef)(),h=Object(s.useState)(!1),N=h[0],w=h[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){k.set(0)}));return e.observe(v.current),function(){e.disconnect()}}),[]),r("div",{className:"relative mb-8"},r("div",{ref:v,className:"relative rounded-t-xl ".concat(u[m])},r("div",{className:j?"md:w-88":void 0},r(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(k,(function(e){return-e}))}},n?r("div",{className:Object(o.a)("rounded-t-xl",a,l[m],{"p-10":!a}),dangerouslySetInnerHTML:{__html:n}}):r(g,{src:t,className:Object(o.a)("w-full rounded-t-xl",l[m],{"pointer-events-none":N})}))),r("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(i.d.div,{drag:"x",_dragX:k,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(j?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:k},onDragStart:function(){document.body.classList.add("cursor-grabbing"),w(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),w(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[m]),style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(b,{color:m,snippet:c}))}},"u+Ep":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var a=t("wx14"),s=t("Ff2n"),c=t("q1tI"),o=t.n(c),i=t("7ljp"),r=t("YFqc"),p=t.n(r),l=t("tc9R"),u=t("pOT7"),d=t("vRWG"),g=t("I6Nb"),b=t("hv1/"),m=t.n(b),f=t("8C7G"),j=t("wH44"),v=(o.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:m.a},meta:{title:"Object Fit",description:"\u7528\u4e8e\u63a7\u5236\u88ab\u66ff\u6362\u5143\u7d20\u7684\u5185\u5bb9\u5982\u4f55\u8c03\u6574\u5927\u5c0f\u7684\u529f\u80fd\u7c7b\u3002"},tableOfContents:[{title:"Contain",slug:"contain",children:[]},{title:"Cover",slug:"cover",children:[]},{title:"Fill",slug:"fill",children:[]},{title:"None",slug:"none",children:[]},{title:"Scale Down",slug:"scale-down",children:[]},{title:"\u54cd\u5e94\u5f0f",slug:"",children:[]},{title:"\u5b9a\u5236",slug:"-1",children:[{title:"\u53d8\u4f53",slug:"-2"},{title:"\u7981\u7528",slug:"-3"}]}]}),k=g.ContentsLayout;function O(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(i.a)(k,Object(a.a)({},v,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"contain",toc:!0},"Contain"),Object(i.a)("p",null,"\u4f7f\u7528 ",Object(i.a)("inlineCode",{parentName:"p"},".object-contain")," \u8c03\u6574\u5143\u7d20\u5185\u5bb9\u7684\u5927\u5c0f\uff0c\u4f7f\u5176\u4fdd\u6301\u5728\u5bb9\u5668\u5185\u3002")),Object(i.a)(u.a,{preview:'\n  <div class="bg-rose-300 bg-stripes bg-stripes-white rounded-md overflow-hidden">\n    <img class="h-48 w-full object-contain" src="/img/placeholder-rose.svg" alt="">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-rose-300 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">object-contain</span> h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"cover",toc:!0},"Cover"),Object(i.a)("p",null,"\u4f7f\u7528 ",Object(i.a)("inlineCode",{parentName:"p"},".object-cover")," \u8c03\u6574\u5143\u7d20\u5185\u5bb9\u7684\u5927\u5c0f\u4ee5\u8986\u76d6\u5176\u5bb9\u5668\u3002")),Object(i.a)(u.a,{preview:'\n  <div class="bg-indigo-300 bg-stripes bg-stripes-white rounded-md overflow-hidden">\n    <img class="h-48 w-full object-cover" src="/img/placeholder-indigo.svg" alt="">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-indigo-300 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">object-cover</span> h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"fill",toc:!0},"Fill"),Object(i.a)("p",null,"\u4f7f\u7528 ",Object(i.a)("inlineCode",{parentName:"p"},".object-fill")," \u62c9\u4f38\u5143\u7d20\u7684\u5185\u5bb9\u4ee5\u9002\u5e94\u5176\u5bb9\u5668\u3002")),Object(i.a)(u.a,{preview:'\n  <div class="bg-light-blue-300 bg-stripes bg-stripes-white rounded-md overflow-hidden">\n    <img class="h-48 w-full object-fill" src="/img/placeholder-light-blue.svg" alt="">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-light-blue-300 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">object-fill</span> h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"none",toc:!0},"None"),Object(i.a)("p",null,"\u4f7f\u7528 ",Object(i.a)("inlineCode",{parentName:"p"},".object-none")," \u4ee5\u539f\u59cb\u5927\u5c0f\u663e\u793a\u5143\u7d20\u7684\u5185\u5bb9\uff0c\u5ffd\u7565\u5bb9\u5668\u5927\u5c0f\u3002")),Object(i.a)(u.a,{preview:'\n  <div class="bg-amber-300 bg-stripes bg-stripes-white rounded-md overflow-hidden">\n    <img class="h-48 w-full object-none" src="/img/placeholder-amber.svg" alt="">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-yellow-300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">object-none</span> h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"scale-down",toc:!0},"Scale Down"),Object(i.a)("p",null,"\u4ee5\u539f\u59cb\u5927\u5c0f\u663e\u793a\u5143\u7d20\u7684\u5185\u5bb9\uff0c\u4f46\u5fc5\u8981\u65f6\u4f7f\u7528 ",Object(i.a)("inlineCode",{parentName:"p"},".object-scale-down")," \u5c06\u5176\u7f29\u5c0f\u4ee5\u9002\u5e94\u5176\u5bb9\u5668\u3002")),Object(i.a)(u.a,{preview:'\n  <div class="bg-emerald-300 bg-stripes bg-stripes-white rounded-md overflow-hidden">\n    <img class="h-48 w-full object-scale-down" src="/img/placeholder-emerald.svg" alt="">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-green-300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">object-scale-down</span> h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"",toc:!0},"\u54cd\u5e94\u5f0f"),Object(i.a)("p",null,"\u8981\u63a7\u5236\u88ab\u66ff\u6362\u7684\u5143\u7d20\u7684\u5185\u5bb9\u5982\u4f55\u53ea\u5728\u7279\u5b9a\u7684\u65ad\u70b9\u5904\u8c03\u6574\u5927\u5c0f\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55\u73b0\u6709\u7684 object fit \u529f\u80fd\u7c7b\u524d\u6dfb\u52a0 ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," \u524d\u7f00\u3002\u4f8b\u5982\uff0c\u5c06\u7c7b ",Object(i.a)("inlineCode",{parentName:"p"},"md:object-scale-down")," \u6dfb\u52a0\u5230\u5143\u7d20\u4e2d\uff0c\u5c06\u5728\u4e2d\u7b49\u5c3a\u5bf8\u53ca\u4ee5\u4e0a\u5c4f\u5e55\u4e0a\u5e94\u7528 ",Object(i.a)("inlineCode",{parentName:"p"},"object-scale-down")," \u529f\u80fd\u3002"),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"object-contain ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:object-scale-down")," ...",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"src"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"...",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)("p",null,"\u5173\u4e8e Tailwind \u7684\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u529f\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",Object(i.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"\u54cd\u5e94\u5f0f\u8bbe\u8ba1"))," \u6587\u6863\u3002"),Object(i.a)(l.a,{level:2,id:"-1",toc:!0},"\u5b9a\u5236"),Object(i.a)(l.a,{level:3,id:"-2",toc:!0},"\u53d8\u4f53")),Object(i.a)(f.a,{plugin:"objectFit",name:"object-fit",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:3,id:"-3",toc:!0},"\u7981\u7528")),Object(i.a)(j.a,{plugin:"objectFit",name:"object-fit",mdxType:"Disabling"}))}O.isMDXComponent=!0,O.layoutProps=v},vRWG:function(e,n,t){"use strict";t.r(n),t.d(n,"DocumentationLayout",(function(){return g}));var a=t("wx14"),s=t("q1tI"),c=t.n(s),o=t("ekQu"),i=t("8Kt/"),r=t.n(i),p=t("nOHt"),l=t("ap0H"),u=t("1Q1k"),d=c.a.createElement;function g(e){var n=Object(p.useRouter)();return d(c.a.Fragment,null,d(l.a,{suffix:"/"===n.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(r.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/tailwindcss/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(o.b,Object(a.a)({nav:u.a},e)))}},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("rePB"),s=t("q1tI"),c=t.n(s),o=t("AOjV"),i=t("AI3G"),r=t("Zb5r"),p=c.a.createElement;function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){var n=e.plugin,t=e.name,s=Object(i.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())})),p("div",{className:"prose"},p("p",null,"\u5982\u679c\u60a8\u4e0d\u6253\u7b97\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u4f7f\u7528 ",t," \u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u7684"," ",p("code",null,"corePlugins")," \u90e8\u5206\u5c06"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(r.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," "," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",p("code",null,"false")," \u6765\u5b8c\u5168\u7981\u7528\u5b83\u4eec\uff1a"),p(o.a,{path:"corePlugins",before:"...",add:s.reduce((function(e,n){return u(u({},e),{},Object(a.a)({},n,!1))}),{})}))}}},[["cryp",0,2,6,1,3,4,5,7]]]);