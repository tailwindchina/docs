_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[145],{"2cYW":function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/text-decoration",function(){return n("unN4")}])},"5xSE":function(e,a,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,n){"use strict";n.d(a,"a",(function(){return l}));var t=n("rePB"),s=n("q1tI"),c=n.n(s),o=n("98BF"),r=n("Zb5r"),p=n("AOjV"),i=c.a.createElement;function l(e){var a=e.plugin,n=e.name,s=o.defaultConfig.variants[a]||["responsive"];n=n||a.replace(/([a-z])([A-Z])/g,(function(e,a,n){return"".concat(a," ").concat(n.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),l="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(n," \u529f\u80fd\u7c7b\uff0c").concat(s.length?"\u53ea\u751f\u6210 ".concat(Object(r.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:l}}),i("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u60a8\u7684"," ",i("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",i("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",i("code",null,a)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",n," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),i("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",s.length>0?"\u4e5f":"","\u5c06\u751f\u6210"," ",Object(r.a)(c)," \u53d8\u4f53:"),i(p.a,{path:"variants.extend",before:"...",add:Object(t.a)({},a,c)}))}},AOjV:function(e,a,n){"use strict";n.d(a,"a",(function(){return l}));var t=n("q1tI"),s=n.n(t),c=(n("Btb4"),n("AI3G")),o=n("iuhU"),r=s.a.createElement;function p(e){var a=e.value;return"string"===typeof a?r("span",{className:"token string"},"'",a,"'"):Array.isArray(a)?r(s.a.Fragment,null,r("span",{className:"token punctuation"},"["),a.map((function(e,n){return r(t.Fragment,{key:n},r(p,{value:e}),n===a.length-1?null:r("span",{className:"token punctuation"},", "))})),r("span",{className:"token punctuation"},"]")):"boolean"===typeof a?r("span",{className:"token boolean"},a.toString()):a.toString()}function i(e){var a=e.edits,n=e.indent,s=void 0===n?"":n,c=e.type,i=void 0===c?"inserted":c;return r("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===i,"deleted-sign deleted":"inserted"!==i})},Object.keys(a).map((function(e,n){return r(t.Fragment,{key:n},r("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===i,deleted:"inserted"!==i})},"inserted"===i?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(c=e)?c:"'".concat(c,"'"),r("span",{className:"token operator"},":")," ",r(p,{value:a[e]}),r("span",{className:"token punctuation"},","),"\n");var c})))}function l(e){var a=e.path,n=e.add,s=e.remove,o=e.before,p=e.after;return a="string"===typeof a?a.split("."):a,r("div",{className:"prose"},r("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  ",r("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",r("span",{className:"token punctuation"},"."),r("span",{className:"token property-access"},"exports")," ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token punctuation"},"{"),"\n",a.map((function(e,a){return r(t.Fragment,{key:a},"  ","  ".repeat(a+1),e,r("span",{className:"token operator"},":")," ",r("span",{className:"token punctuation"},"{"),"\n")})),o&&Object(c.a)(o).map((function(e,n){return r(t.Fragment,{key:n},"  ".repeat(a.length+2),r("span",{className:"token comment"},"// ".concat(e)),"\n")}))),s&&r(i,{edits:s,type:"deleted",indent:"  ".repeat(a.length+1)}),n&&r(i,{edits:n,type:"inserted",indent:"  ".repeat(a.length+1)}),r("span",{className:"token unchanged"},p&&Object(c.a)(p).map((function(e){return"".concat("  ".repeat(a.length+2)).concat(e,"\n")})),a.map((function(e,n){return r(t.Fragment,{key:n},"  ","  ".repeat(a.length-n),"}\n")})),"  }")))))}},Btb4:function(e,a,n){"use strict";const t=n("5xSE"),s=n("p+I8"),c=n("GAX2").default;e.exports=(e,a,n)=>{const o=[];return function e(a,n,r){let p;(n=n||{}).indent=n.indent||"\t",r=r||"",p=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=e=>{if(void 0===n.inlineCharacterLimit)return e;const a=e.replace(new RegExp(p.newLine,"g"),"").replace(new RegExp(p.newLineOrSpace,"g")," ").replace(new RegExp(p.pad+"|"+p.indent,"g"),"");return a.length<=n.inlineCharacterLimit?a:e.replace(new RegExp(p.newLine+"|"+p.newLineOrSpace,"g"),"\n").replace(new RegExp(p.pad,"g"),r).replace(new RegExp(p.indent,"g"),r+n.indent)};if(-1!==o.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||t(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";o.push(a);const t="["+p.newLine+a.map((t,s)=>{const c=a.length-1===s?p.newLine:","+p.newLineOrSpace;let o=e(t,n,r+n.indent);return n.transform&&(o=n.transform(a,s,o)),p.indent+o+c}).join("")+p.pad+"]";return o.pop(),i(t)}if(s(a)){let t=Object.keys(a).concat(c(a));if(n.filter&&(t=t.filter(e=>n.filter(a,e))),0===t.length)return"{}";o.push(a);const s="{"+p.newLine+t.map((s,c)=>{const o=t.length-1===c?p.newLine:","+p.newLineOrSpace,i="symbol"===typeof s,l=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=i||l?s:e(s,n);let d=e(a[s],n,r+n.indent);return n.transform&&(d=n.transform(a,s,d)),p.indent+String(u)+": "+d+o}).join("")+p.pad+"}";return o.pop(),i(s)}return a=String(a).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,n)}},GAX2:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter(a=>Object.prototype.propertyIsEnumerable.call(e,a))},Zb5r:function(e,a,n){"use strict";function t(e){return e.reduce((function(a,n,t){return 0===t?n:t===e.length-1?"".concat(a," and ").concat(n):"".concat(a,", ").concat(n)}),"")}n.d(a,"a",(function(){return t}))},ap0H:function(e,a,n){"use strict";n.d(a,"a",(function(){return p}));var t=n("q1tI"),s=n.n(t),c=n("8Kt/"),o=n.n(c),r=s.a.createElement;function p(e){var a=e.suffix,n=e.children+(a?" - ".concat(a):"");return r(o.a,null,r("title",{key:"title"},n),r("meta",{key:"twitter:title",name:"twitter:title",content:n}),r("meta",{key:"og:title",property:"og:title",content:n}))}},msGM:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:e,variants:a}){e({".underline":{"text-decoration":"underline"},".line-through":{"text-decoration":"line-through"},".no-underline":{"text-decoration":"none"}},a("textDecoration"))}}},"p+I8":function(e,a,n){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},pOT7:function(e,a,n){"use strict";n.d(a,"a",(function(){return g})),n.d(a,"b",(function(){return O}));var t=n("wx14"),s=n("q1tI"),c=n.n(s),o=n("iuhU"),r=n("ZMKu"),p=c.a.createElement,i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){var a=Object(s.useRef)(),n=Object(s.useState)(!1),c=n[0],o=n[1],r=Object(s.useState)({}),i=r[0],l=r[1];return Object(s.useEffect)((function(){if(c){var e=new window.ResizeObserver(n);return n(),e.observe(a.current.contentDocument.body),function(){e.disconnect()}}function n(){l({height:a.current.contentDocument.body.scrollHeight})}}),[c]),p("iframe",Object(t.a)({},e,{ref:a,onLoad:function(){return o(!0)},style:i}))}function b(e){var a=e.color,n=e.snippet;return p("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",i[a],{"bg-gray-800":!i[a]})},p("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[a]})},p("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function g(e){var a=e.preview,n=e.src,t=e.snippet,s=e.previewClassName,c=e.color,r=void 0===c?"gray":c;return p("div",{className:"relative overflow-hidden mb-8"},a?p("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",l[r],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):p(m,{src:n,className:Object(o.a)("w-full rounded-t-xl",l[r])}),p(b,{color:r,snippet:t}))}function O(e){var a=e.preview,n=e.src,t=e.previewClassName,c=e.snippet,i=e.color,g=void 0===i?"gray":i,O=e.min,j=void 0!==O&&O,f=Object(s.useRef)(),N=Object(r.h)(0),h=Object(s.useRef)(),v=Object(s.useState)(!1),k=v[0],w=v[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){N.set(0)}));return e.observe(f.current),function(){e.disconnect()}}),[]),p("div",{className:"relative mb-8"},p("div",{ref:f,className:"relative rounded-t-xl ".concat(u[g])},p("div",{className:j?"md:w-88":void 0},p(r.d.div,{className:"relative",style:{marginRight:Object(r.i)(N,(function(e){return-e}))}},a?p("div",{className:Object(o.a)("rounded-t-xl",t,l[g],{"p-10":!t}),dangerouslySetInnerHTML:{__html:a}}):p(m,{src:n,className:Object(o.a)("w-full rounded-t-xl",l[g],{"pointer-events-none":k})}))),p("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},p(r.d.div,{drag:"x",_dragX:N,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(j?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:N},onDragStart:function(){document.body.classList.add("cursor-grabbing"),w(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),w(!1)}},p("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},p("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[g]),style:{width:"0.4375rem"}},p("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),p(b,{color:g,snippet:c}))}},unN4:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return h}));var t=n("wx14"),s=n("Ff2n"),c=n("q1tI"),o=n.n(c),r=n("7ljp"),p=n("YFqc"),i=n.n(p),l=n("tc9R"),u=n("pOT7"),d=n("vRWG"),m=n("I6Nb"),b=n("msGM"),g=n.n(b),O=n("8C7G"),j=n("wH44"),f=(o.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:g.a},meta:{title:"\u6587\u672c\u88c5\u9970",description:"\u7528\u4e8e\u63a7\u5236\u6587\u672c\u88c5\u9970\u7684\u5b9e\u7528\u529f\u80fd\u7c7b\u3002",features:{responsive:!0,customizable:!1,hover:!0,focus:!0}},tableOfContents:[{title:"Underline",slug:"underline",children:[]},{title:"Line Through",slug:"line-through",children:[]},{title:"No Underline",slug:"no-underline",children:[]},{title:"\u54cd\u5e94\u5f0f",slug:"",children:[]},{title:"Hover",slug:"hover",children:[]},{title:"Focus",slug:"focus",children:[]},{title:"\u81ea\u5b9a\u4e49",slug:"-1",children:[{title:"\u53d8\u4f53",slug:"-2"},{title:"\u7981\u7528",slug:"-3"}]}]}),N=m.ContentsLayout;function h(e){var a=e.components,n=Object(s.a)(e,["components"]);return Object(r.a)(N,Object(t.a)({},f,n,{components:a,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"underline",toc:!0},"Underline"),Object(r.a)("p",null,"\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," \u529f\u80fd\u7c7b\u5bf9\u6587\u672c\u6dfb\u52a0\u4e0b\u5212\u7ebf\u6837\u5f0f\u3002")),Object(r.a)(u.a,{preview:'\n  <p class="underline text-xl text-fuchsia-600">The quick brown fox jumped over the lazy dog.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">underline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"line-through",toc:!0},"Line Through"),Object(r.a)("p",null,"\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"line-through")," \u529f\u80fd\u7c7b\u6765\u63d0\u793a\u5220\u9664\u6587\u672c\u3002")),Object(r.a)(u.a,{preview:'\n  <p class="line-through text-xl text-rose-600">The quick brown fox jumped over the lazy dog.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">line-through</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"no-underline",toc:!0},"No Underline"),Object(r.a)("p",null,"\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"no-underline")," \u529f\u80fd\u7c7b\u6765\u79fb\u9664 ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," \u6216 ",Object(r.a)("inlineCode",{parentName:"p"},"line-through")," \u6837\u5f0f\u3002")),Object(r.a)(u.a,{preview:'\n  <div class="text-center">\n    <a href="#" class="no-underline text-purple-600 text-xl">Link with no underline</a>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">no-underline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link with no underline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"",toc:!0},"\u54cd\u5e94\u5f0f"),Object(r.a)("p",null,"\u8981\u5728\u7279\u5b9a\u7684\u65ad\u70b9\u5904\u63a7\u5236\u5143\u7d20\u7684\u6587\u672c\u88c5\u9970\uff0c\u8bf7\u5728\u4efb\u4f55\u73b0\u6709\u7684\u6587\u672c\u88c5\u9970\u529f\u80fd\u7c7b\u4e2d\u6dfb\u52a0 ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," \u524d\u7f00\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"md:underline")," \u6765\u5e94\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," \u529f\u80fd\u7c7b\u5728\u4e2d\u7b49\u5927\u5c0f\u7684\u5c4f\u5e55\u548c\u4ee5\u4e0a\u7684\u5c4f\u5e55\u4e0a\u3002"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"no-underline ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:underline")," ...",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  The quick brown fox jumped over the lazy dog.\n",Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"\u5173\u4e8e Tailwind \u7684\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u529f\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",Object(r.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"\u54cd\u5e94\u5f0f\u8bbe\u8ba1")),"\u6587\u6863\u3002"),Object(r.a)(l.a,{level:2,id:"hover",toc:!0},"Hover"),Object(r.a)("p",null,"\u8981\u63a7\u5236\u5143\u7d20\u5728\u60ac\u505c\u65f6\u7684\u6587\u672c\u88c5\u9970\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55\u73b0\u6709\u7684\u6587\u672c\u88c5\u9970\u529f\u80fd\u7c7b\u4e2d\u6dfb\u52a0 ",Object(r.a)("inlineCode",{parentName:"p"},"hover:")," \u524d\u7f00\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"hover:underline")," \u5728\u60ac\u505c\u65f6\u5e94\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," \u529f\u80fd\u7c7b\u3002")),Object(r.a)(u.a,{preview:'\t\n  <a href="#hover" class="no-underline hover:underline text-indigo-600 text-xl">Link</a>\t\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>no-underline <span class="code-highlight bg-code-highlight">hover:underline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4",color:"indigo",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("p",null,"\u60ac\u505c\u529f\u80fd\u7c7b\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5728 ",Object(r.a)("inlineCode",{parentName:"p"},"hover:")," \u524d\u7f00\u524d\u6dfb\u52a0\u54cd\u5e94\u7684 ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," \u524d\u7f00\u6765\u4e0e\u54cd\u5e94\u7684\u529f\u80fd\u7c7b\u7ed3\u5408\u4f7f\u7528\u3002\t"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"a")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"href"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"#",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"... md:no-underline ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:hover:underline")," ...",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"Link",Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"a"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\t"))),Object(r.a)(l.a,{level:2,id:"focus",toc:!0},"Focus"),Object(r.a)("p",null,"\u8981\u63a7\u5236\u7126\u70b9\u5143\u7d20\u7684\u6587\u672c\u88c5\u9970\uff0c\u8bf7\u5728\u4efb\u4f55\u73b0\u6709\u7684\u6587\u672c\u88c5\u9970\u529f\u80fd\u7c7b\u4e2d\u6dfb\u52a0 ",Object(r.a)("inlineCode",{parentName:"p"},"focus:")," \u524d\u7f00\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"focus:underline")," \u5728\u7126\u70b9\u4e0a\u5e94\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," \u529f\u80fd\u7c7b\u3002\t")),Object(r.a)(u.a,{preview:'\t\n  <div class="max-w-xs w-full mx-auto">\t\n    <input class="bg-white focus:underline focus:shadow-outline text-emerald-900 appearance-none inline-block w-full border border-emerald-300 rounded py-3 px-4 focus:outline-none" value="Focus me" placeholder="Focus me">\t\n  </div>\t\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">focus:underline</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Focus me<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("p",null,"\u901a\u8fc7\u5728 ",Object(r.a)("inlineCode",{parentName:"p"},"focus:")," \u524d\u7f00\u4e4b\u524d\u6dfb\u52a0\u54cd\u5e94\u7684 ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," \u524d\u7f00\uff0c\u7126\u70b9\u529f\u80fd\u7c7b\u4e5f\u53ef\u4ee5\u4e0e\u54cd\u5e94\u7684\u529f\u80fd\u7c7b\u7ed3\u5408\u4f7f\u7528\u3002"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:focus:underline")," ...",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"value"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"Focus me",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\t"))),Object(r.a)(l.a,{level:2,id:"-1",toc:!0},"\u81ea\u5b9a\u4e49"),Object(r.a)(l.a,{level:3,id:"-2",toc:!0},"\u53d8\u4f53")),Object(r.a)(O.a,{plugin:"textDecoration",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"-3",toc:!0},"\u7981\u7528")),Object(r.a)(j.a,{plugin:"textDecoration",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=f},vRWG:function(e,a,n){"use strict";n.r(a),n.d(a,"DocumentationLayout",(function(){return m}));var t=n("wx14"),s=n("q1tI"),c=n.n(s),o=n("ekQu"),r=n("8Kt/"),p=n.n(r),i=n("nOHt"),l=n("ap0H"),u=n("1Q1k"),d=c.a.createElement;function m(e){var a=Object(i.useRouter)();return d(c.a.Fragment,null,d(l.a,{suffix:"/"===a.pathname?void 0:"Tailwind CSS \u4e2d\u6587\u6587\u6863"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(p.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(o.b,Object(t.a)({nav:u.a},e)))}},wH44:function(e,a,n){"use strict";n.d(a,"a",(function(){return d}));var t=n("rePB"),s=n("q1tI"),c=n.n(s),o=n("AOjV"),r=n("AI3G"),p=n("Zb5r"),i=c.a.createElement;function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){Object(t.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e){var a=e.plugin,n=e.name,s=Object(r.a)(a);return n=n||a.replace(/([a-z])([A-Z])/g,(function(e,a,n){return"".concat(a," ").concat(n.toLowerCase())})),i("div",{className:"prose"},i("p",null,"\u5982\u679c\u60a8\u4e0d\u6253\u7b97\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u4f7f\u7528 ",n," \u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u7684"," ",i("code",null,"corePlugins")," \u90e8\u5206\u5c06"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(p.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," "," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",i("code",null,"false")," \u6765\u5b8c\u5168\u7981\u7528\u5b83\u4eec\uff1a"),i(o.a,{path:"corePlugins",before:"...",add:s.reduce((function(e,a){return u(u({},e),{},Object(t.a)({},a,!1))}),{})}))}}},[["2cYW",0,2,6,1,3,4,5,7]]]);