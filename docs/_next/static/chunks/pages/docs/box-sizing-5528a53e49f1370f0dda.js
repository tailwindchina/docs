_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[45],{"5wHl":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/box-sizing",function(){return n("xiNK")}])},"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("rePB"),r=n("q1tI"),s=n.n(r),o=n("98BF"),c=n("Zb5r"),i=n("AOjV"),l=s.a.createElement;function p(e){var t=e.plugin,n=e.name,r=o.defaultConfig.variants[t]||["responsive"];n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())}));var s=["responsive","hover","focus","active","group-hover"].filter((function(e){return!r.includes(e)})).slice(0,2),p="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(n," \u529f\u80fd\u7c7b\uff0c").concat(r.length?"\u53ea\u751f\u6210 ".concat(Object(c.a)(r).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:p}}),l("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u60a8\u7684"," ",l("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",l("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",l("code",null,t)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",n," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),l("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",r.length>0?"\u4e5f":"","\u5c06\u751f\u6210"," ",Object(c.a)(s)," \u53d8\u4f53:"),l(i.a,{path:"variants.extend",before:"...",add:Object(a.a)({},t,s)}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),r=n.n(a),s=(n("Btb4"),n("AI3G")),o=n("iuhU"),c=r.a.createElement;function i(e){var t=e.value;return"string"===typeof t?c("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?c(r.a.Fragment,null,c("span",{className:"token punctuation"},"["),t.map((function(e,n){return c(a.Fragment,{key:n},c(i,{value:e}),n===t.length-1?null:c("span",{className:"token punctuation"},", "))})),c("span",{className:"token punctuation"},"]")):"boolean"===typeof t?c("span",{className:"token boolean"},t.toString()):t.toString()}function l(e){var t=e.edits,n=e.indent,r=void 0===n?"":n,s=e.type,l=void 0===s?"inserted":s;return c("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===l,"deleted-sign deleted":"inserted"!==l})},Object.keys(t).map((function(e,n){return c(a.Fragment,{key:n},c("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===l,deleted:"inserted"!==l})},"inserted"===l?"+":"-")," ",r,/^[a-z_$][a-z0-9_$]*$/i.test(s=e)?s:"'".concat(s,"'"),c("span",{className:"token operator"},":")," ",c(i,{value:t[e]}),c("span",{className:"token punctuation"},","),"\n");var s})))}function p(e){var t=e.path,n=e.add,r=e.remove,o=e.before,i=e.after;return t="string"===typeof t?t.split("."):t,c("div",{className:"prose"},c("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},c("pre",{className:"language-diff"},c("code",{className:"language-diff"},c("span",{className:"token unchanged"},"  ",c("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",c("span",{className:"token punctuation"},"."),c("span",{className:"token property-access"},"exports")," ",c("span",{className:"token operator"},"=")," ",c("span",{className:"token punctuation"},"{"),"\n",t.map((function(e,t){return c(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,c("span",{className:"token operator"},":")," ",c("span",{className:"token punctuation"},"{"),"\n")})),o&&Object(s.a)(o).map((function(e,n){return c(a.Fragment,{key:n},"  ".repeat(t.length+2),c("span",{className:"token comment"},"// ".concat(e)),"\n")}))),r&&c(l,{edits:r,type:"deleted",indent:"  ".repeat(t.length+1)}),n&&c(l,{edits:n,type:"inserted",indent:"  ".repeat(t.length+1)}),c("span",{className:"token unchanged"},i&&Object(s.a)(i).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")})),t.map((function(e,n){return c(a.Fragment,{key:n},"  ","  ".repeat(t.length-n),"}\n")})),"  }")))))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),r=n("p+I8"),s=n("GAX2").default;e.exports=(e,t,n)=>{const o=[];return function e(t,n,c){let i;(n=n||{}).indent=n.indent||"\t",c=c||"",i=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),c).replace(new RegExp(i.indent,"g"),c+n.indent)};if(-1!==o.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";o.push(t);const a="["+i.newLine+t.map((a,r)=>{const s=t.length-1===r?i.newLine:","+i.newLineOrSpace;let o=e(a,n,c+n.indent);return n.transform&&(o=n.transform(t,r,o)),i.indent+o+s}).join("")+i.pad+"]";return o.pop(),l(a)}if(r(t)){let a=Object.keys(t).concat(s(t));if(n.filter&&(a=a.filter(e=>n.filter(t,e))),0===a.length)return"{}";o.push(t);const r="{"+i.newLine+a.map((r,s)=>{const o=a.length-1===s?i.newLine:","+i.newLineOrSpace,l="symbol"===typeof r,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(r),u=l||p?r:e(r,n);let d=e(t[r],n,c+n.indent);return n.transform&&(d=n.transform(t,r,d)),i.indent+String(u)+": "+d+o}).join("")+i.pad+"}";return o.pop(),l(r)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce((function(t,n,a){return 0===a?n:a===e.length-1?"".concat(t," and ").concat(n):"".concat(t,", ").concat(n)}),"")}n.d(t,"a",(function(){return a}))},ap0H:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),r=n.n(a),s=n("8Kt/"),o=n.n(s),c=r.a.createElement;function i(e){var t=e.suffix,n=e.children+(t?" - ".concat(t):"");return c(o.a,null,c("title",{key:"title"},n),c("meta",{key:"twitter:title",name:"twitter:title",content:n}),c("meta",{key:"og:title",property:"og:title",content:n}))}},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var a=n("wx14"),r=n("q1tI"),s=n.n(r),o=n("iuhU"),c=n("ZMKu"),i=s.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function b(e){var t=Object(r.useRef)(),n=Object(r.useState)(!1),s=n[0],o=n[1],c=Object(r.useState)({}),l=c[0],p=c[1];return Object(r.useEffect)((function(){if(s){var e=new window.ResizeObserver(n);return n(),e.observe(t.current.contentDocument.body),function(){e.disconnect()}}function n(){p({height:t.current.contentDocument.body.scrollHeight})}}),[s]),i("iframe",Object(a.a)({},e,{ref:t,onLoad:function(){return o(!0)},style:l}))}function g(e){var t=e.color,n=e.snippet;return i("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},i("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function m(e){var t=e.preview,n=e.src,a=e.snippet,r=e.previewClassName,s=e.color,c=void 0===s?"gray":s;return i("div",{className:"relative overflow-hidden mb-8"},t?i("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",p[c],r,{"p-10":!r}),dangerouslySetInnerHTML:{__html:t}}):i(b,{src:n,className:Object(o.a)("w-full rounded-t-xl",p[c])}),i(g,{color:c,snippet:a}))}function f(e){var t=e.preview,n=e.src,a=e.previewClassName,s=e.snippet,l=e.color,m=void 0===l?"gray":l,f=e.min,O=void 0!==f&&f,v=Object(r.useRef)(),j=Object(c.h)(0),h=Object(r.useRef)(),N=Object(r.useState)(!1),x=N[0],w=N[1];return Object(r.useEffect)((function(){var e=new window.ResizeObserver((function(){j.set(0)}));return e.observe(v.current),function(){e.disconnect()}}),[]),i("div",{className:"relative mb-8"},i("div",{ref:v,className:"relative rounded-t-xl ".concat(u[m])},i("div",{className:O?"md:w-88":void 0},i(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(j,(function(e){return-e}))}},t?i("div",{className:Object(o.a)("rounded-t-xl",a,p[m],{"p-10":!a}),dangerouslySetInnerHTML:{__html:t}}):i(b,{src:n,className:Object(o.a)("w-full rounded-t-xl",p[m],{"pointer-events-none":x})}))),i("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(c.d.div,{drag:"x",_dragX:j,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(O?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:j},onDragStart:function(){document.body.classList.add("cursor-grabbing"),w(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),w(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[m]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(g,{color:m,snippet:s}))}},sOsq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".box-border":{"box-sizing":"border-box"},".box-content":{"box-sizing":"content-box"}},t("boxSizing"))}}},vRWG:function(e,t,n){"use strict";n.r(t),n.d(t,"DocumentationLayout",(function(){return b}));var a=n("wx14"),r=n("q1tI"),s=n.n(r),o=n("ekQu"),c=n("8Kt/"),i=n.n(c),l=n("nOHt"),p=n("ap0H"),u=n("1Q1k"),d=s.a.createElement;function b(e){var t=Object(l.useRouter)();return d(s.a.Fragment,null,d(p.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(i.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/tailwindcss/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(o.b,Object(a.a)({nav:u.a},e)))}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("rePB"),r=n("q1tI"),s=n.n(r),o=n("AOjV"),c=n("AI3G"),i=n("Zb5r"),l=s.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var t=e.plugin,n=e.name,r=Object(c.a)(t);return n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())})),l("div",{className:"prose"},l("p",null,"\u5982\u679c\u60a8\u4e0d\u6253\u7b97\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u4f7f\u7528 ",n," \u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u7684"," ",l("code",null,"corePlugins")," \u90e8\u5206\u5c06"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(r.map((function(e){return"<code>".concat(e,"</code>")})))}})," "," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",l("code",null,"false")," \u6765\u5b8c\u5168\u7981\u7528\u5b83\u4eec\uff1a"),l(o.a,{path:"corePlugins",before:"...",add:r.reduce((function(e,t){return u(u({},e),{},Object(a.a)({},t,!1))}),{})}))}},xiNK:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n("wx14"),r=n("Ff2n"),s=n("q1tI"),o=n.n(s),c=n("7ljp"),i=n("YFqc"),l=n.n(i),p=n("tc9R"),u=n("pOT7"),d=n("vRWG"),b=n("I6Nb"),g=n("sOsq"),m=n.n(g),f=n("8C7G"),O=n("wH44"),v=(o.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:m.a},meta:{title:"Box Sizing",description:"\u63a7\u5236\u6d4f\u89c8\u5668\u5982\u4f55\u8ba1\u7b97\u5143\u7d20\u7684\u603b\u5927\u5c0f\u7684\u529f\u80fd\u7c7b\u3002"},tableOfContents:[{title:"\u5305\u62ec\u8fb9\u6846\u548c\u5185\u8fb9\u8ddd",slug:"",children:[]},{title:"\u4e0d\u5305\u62ec\u8fb9\u6846\u548c\u5185\u8fb9\u8ddd",slug:"-1",children:[]},{title:"\u54cd\u5e94\u5f0f",slug:"-2",children:[]},{title:"\u5b9a\u5236",slug:"-3",children:[{title:"\u53d8\u4f53",slug:"-4"},{title:"\u7981\u7528",slug:"-5"}]}]}),j=b.ContentsLayout;function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.a)(j,Object(a.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:2,id:"",toc:!0},"\u5305\u62ec\u8fb9\u6846\u548c\u5185\u8fb9\u8ddd"),Object(c.a)("p",null,"\u4f7f\u7528 ",Object(c.a)("inlineCode",{parentName:"p"},"box-border")," \u5c06\u5143\u7d20\u7684 ",Object(c.a)("inlineCode",{parentName:"p"},"box-sizing")," \u8bbe\u7f6e\u4e3a ",Object(c.a)("inlineCode",{parentName:"p"},"border-box"),"\uff0c\u544a\u8bc9\u6d4f\u89c8\u5668\uff0c\u5f53\u60a8\u7ed9\u5b83\u4e00\u4e2a\u9ad8\u5ea6\u6216\u5bbd\u5ea6\u65f6\uff0c\u5b83\u5c06\u5305\u62ec\u5143\u7d20\u7684\u8fb9\u6846\u548c\u5185\u8fb9\u8ddd\u3002"),Object(c.a)("p",null,"\u8fd9\u610f\u5473\u7740\u4e00\u4e2a 100px ","\xd7"," 100px \u7684\u5143\u7d20\uff0c\u8fb9\u6846\u4e3a 2px\uff0c\u56db\u8fb9\u6709 4px \u7684\u5185\u8fb9\u8ddd\uff0c\u5c06\u6e32\u67d3\u4e3a 100px ","\xd7"," 100px\uff0c\u5185\u90e8\u5185\u5bb9\u533a\u57df\u4e3a 88px ","\xd7"," 88px\u3002"),Object(c.a)("p",null,"Tailwind \u5728 ",Object(c.a)(l.a,{href:"/docs/preflight",passHref:!0},Object(c.a)("a",null,"preflight\u57fa\u7840\u6837\u5f0f"))," \u4e2d\u9488\u5bf9\u6240\u6709\u5143\u7d20\u628a\u8fd9\u505a\u4e3a\u9ed8\u8ba4\u8bbe\u7f6e\u3002")),Object(c.a)(u.a,{preview:'\n  <div class="flex items-center justify-around">\n    <div class="box-border h-32 w-32 p-4 border-4 border-light-blue-400 bg-light-blue-200 rounded-md">\n      <div class="h-full w-full bg-light-blue-400 bg-stripes bg-stripes-white"></div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">box-border</span> h-32 w-32 p-4 border-4 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:2,id:"-1",toc:!0},"\u4e0d\u5305\u62ec\u8fb9\u6846\u548c\u5185\u8fb9\u8ddd"),Object(c.a)("p",null,"\u4f7f\u7528 ",Object(c.a)("inlineCode",{parentName:"p"},"box-content")," \u5c06\u5143\u7d20\u7684 ",Object(c.a)("inlineCode",{parentName:"p"},"box-sizing")," \u8bbe\u7f6e\u4e3a ",Object(c.a)("inlineCode",{parentName:"p"},"content-box"),"\uff0c\u544a\u8bc9\u6d4f\u89c8\u5668\u5728\u5143\u7d20\u7684\u6307\u5b9a\u5bbd\u5ea6\u6216\u9ad8\u5ea6\u7684\u57fa\u7840\u4e0a\u6dfb\u52a0\u8fb9\u6846\u548c\u5185\u8fb9\u8ddd\u3002"),Object(c.a)("p",null,"\u8fd9\u610f\u5473\u7740\u4e00\u4e2a 100px ","\xd7"," 100px \u7684\u5143\u7d20\uff0c\u5982\u679c\u6709 2px \u7684\u8fb9\u6846\uff0c\u56db\u8fb9\u6709 4px \u7684\u5185\u8fb9\u8ddd\uff0c\u5b9e\u9645\u4e0a\u4f1a\u6e32\u67d3\u4e3a 112px ","\xd7"," 112px\uff0c\u5185\u90e8\u5185\u5bb9\u533a\u57df\u4e3a 100px ","\xd7"," 100px\u3002")),Object(c.a)(u.a,{preview:'\n  <div class="flex items-center justify-around">\n    <div class="box-content h-32 w-32 p-4 border-4 border-emerald-400 bg-emerald-200 rounded-md">\n      <div class="h-full w-full bg-emerald-400 bg-stripes bg-stripes-white"></div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">box-content</span> h-32 w-32 p-4 border-4 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:2,id:"-2",toc:!0},"\u54cd\u5e94\u5f0f"),Object(c.a)("p",null,"\u8981\u63a7\u5236\u7279\u5b9a\u65ad\u70b9\u5904\u7684 box-sizing\uff0c\u53ef\u4e3a\u4efb\u4f55\u73b0\u6709\u7684 box-sizing \u529f\u80fd\u7c7b\u6dfb\u52a0 ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," \u524d\u7f00\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 ",Object(c.a)("inlineCode",{parentName:"p"},"md:box-content")," \u53ea\u7ed9\u4e2d\u7b49\u4ee5\u4e0a\u7684\u5c4f\u5e55\u5c3a\u5bf8\u5e94\u7528 ",Object(c.a)("inlineCode",{parentName:"p"},"box-content")," \u529f\u80fd\u7c7b\u3002"),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"box-border ",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:box-content")," ...",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(c.a)("p",null,"\u5173\u4e8e Tailwind \u7684\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u529f\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",Object(c.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"\u54cd\u5e94\u5f0f\u8bbe\u8ba1"))," \u6587\u6863\u3002"),Object(c.a)(p.a,{level:2,id:"-3",toc:!0},"\u5b9a\u5236"),Object(c.a)(p.a,{level:3,id:"-4",toc:!0},"\u53d8\u4f53")),Object(c.a)(f.a,{plugin:"boxSizing",name:"box-sizing",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:3,id:"-5",toc:!0},"\u7981\u7528")),Object(c.a)(O.a,{plugin:"boxSizing",name:"box-sizing",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=v}},[["5wHl",0,2,6,1,3,4,5,7]]]);