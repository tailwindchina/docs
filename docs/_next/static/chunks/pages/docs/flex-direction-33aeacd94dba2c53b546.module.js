(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[64],{"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("q1tI"),s=t.n(a),c=t("98BF"),o=t("Zb5r"),l=t("AOjV"),p=s.a.createElement;function r(e){var{plugin:n,name:t}=e,a=c.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(e,n,t)=>"".concat(n," ").concat(t.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!a.includes(e)).slice(0,2),r="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(t," \u529f\u80fd\u7c7b\uff0c").concat(a.length?"\u53ea\u751f\u6210 ".concat(Object(o.a)(a).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:r}}),p("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u60a8\u7684"," ",p("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",p("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",p("code",null,n)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",t," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),p("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",a.length>0?"\u4e5f":"","\u5c06\u751f\u6210"," ",Object(o.a)(s)," \u53d8\u4f53:"),p(l.a,{path:"variants.extend",before:"...",add:{[n]:s}}))}},ABV8:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,variants:n}){e({".flex-row":{"flex-direction":"row"},".flex-row-reverse":{"flex-direction":"row-reverse"},".flex-col":{"flex-direction":"column"},".flex-col-reverse":{"flex-direction":"column-reverse"}},n("flexDirection"))}}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("q1tI"),s=t.n(a),c=(t("Btb4"),t("AI3G")),o=t("iuhU"),l=s.a.createElement;function p(e){var{value:n}=e;return"string"===typeof n?l("span",{className:"token string"},"'",n,"'"):Array.isArray(n)?l(s.a.Fragment,null,l("span",{className:"token punctuation"},"["),n.map((e,t)=>l(a.Fragment,{key:t},l(p,{value:e}),t===n.length-1?null:l("span",{className:"token punctuation"},", "))),l("span",{className:"token punctuation"},"]")):"boolean"===typeof n?l("span",{className:"token boolean"},n.toString()):n.toString()}function r(e){var{edits:n,indent:t="",type:s="inserted"}=e;return l("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(n).map((e,c)=>{return l(a.Fragment,{key:c},l("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",t,/^[a-z_$][a-z0-9_$]*$/i.test(r=e)?r:"'".concat(r,"'"),l("span",{className:"token operator"},":")," ",l(p,{value:n[e]}),l("span",{className:"token punctuation"},","),"\n");var r}))}function i(e){var{path:n,add:t,remove:s,before:o,after:p}=e;return n="string"===typeof n?n.split("."):n,l("div",{className:"prose"},l("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},l("pre",{className:"language-diff"},l("code",{className:"language-diff"},l("span",{className:"token unchanged"},"  ",l("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",l("span",{className:"token punctuation"},"."),l("span",{className:"token property-access"},"exports")," ",l("span",{className:"token operator"},"=")," ",l("span",{className:"token punctuation"},"{"),"\n",n.map((e,n)=>l(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,l("span",{className:"token operator"},":")," ",l("span",{className:"token punctuation"},"{"),"\n")),o&&Object(c.a)(o).map((e,t)=>l(a.Fragment,{key:t},"  ".repeat(n.length+2),l("span",{className:"token comment"},"// ".concat(e)),"\n"))),s&&l(r,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&l(r,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),l("span",{className:"token unchanged"},p&&Object(c.a)(p).map(e=>"".concat("  ".repeat(n.length+2)).concat(e,"\n")),n.map((e,t)=>l(a.Fragment,{key:t},"  ","  ".repeat(n.length-t),"}\n")),"  }")))))}},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),c=t("GAX2").default;e.exports=(e,n,t)=>{const o=[];return function e(n,t,l){let p;(t=t||{}).indent=t.indent||"\t",l=l||"",p=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:l,indent:l+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const r=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(p.newLine,"g"),"").replace(new RegExp(p.newLineOrSpace,"g")," ").replace(new RegExp(p.pad+"|"+p.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(p.newLine+"|"+p.newLineOrSpace,"g"),"\n").replace(new RegExp(p.pad,"g"),l).replace(new RegExp(p.indent,"g"),l+t.indent)};if(-1!==o.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";o.push(n);const a="["+p.newLine+n.map((a,s)=>{const c=n.length-1===s?p.newLine:","+p.newLineOrSpace;let o=e(a,t,l+t.indent);return t.transform&&(o=t.transform(n,s,o)),p.indent+o+c}).join("")+p.pad+"]";return o.pop(),r(a)}if(s(n)){let a=Object.keys(n).concat(c(n));if(t.filter&&(a=a.filter(e=>t.filter(n,e))),0===a.length)return"{}";o.push(n);const s="{"+p.newLine+a.map((s,c)=>{const o=a.length-1===c?p.newLine:","+p.newLineOrSpace,r="symbol"===typeof s,i=!r&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=r||i?s:e(s,t);let d=e(n[s],t,l+t.indent);return t.transform&&(d=t.transform(n,s,d)),p.indent+String(u)+": "+d+o}).join("")+p.pad+"}";return o.pop(),r(s)}return n=String(n).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter(n=>Object.prototype.propertyIsEnumerable.call(e,n))},GuPV:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/flex-direction",function(){return t("sdhg")}])},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce((n,t,a)=>0===a?t:a===e.length-1?"".concat(n," and ").concat(t):"".concat(n,", ").concat(t),"")}t.d(n,"a",(function(){return a}))},ap0H:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t("q1tI"),s=t.n(a),c=t("8Kt/"),o=t.n(c),l=s.a.createElement;function p(e){var{suffix:n,children:t}=e,a=t+(n?" - ".concat(n):"");return l(o.a,null,l("title",{key:"title"},a),l("meta",{key:"twitter:title",name:"twitter:title",content:a}),l("meta",{key:"og:title",property:"og:title",content:a}))}},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var a=t("wx14"),s=t("q1tI"),c=t.n(s),o=t("iuhU"),l=t("ZMKu"),p=c.a.createElement,r={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},i={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(e){var n=Object(s.useRef)(),{0:t,1:c}=Object(s.useState)(!1),{0:o,1:l}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(t){var e=new window.ResizeObserver(a);return a(),e.observe(n.current.contentDocument.body),()=>{e.disconnect()}}function a(){l({height:n.current.contentDocument.body.scrollHeight})}},[t]),p("iframe",Object(a.a)({},e,{ref:n,onLoad:()=>c(!0),style:o}))}function m(e){var{color:n,snippet:t}=e;return p("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",r[n],{"bg-gray-800":!r[n]})},p("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":r[n]})},p("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function b(e){var{preview:n,src:t,snippet:a,previewClassName:s,color:c="gray"}=e;return p("div",{className:"relative overflow-hidden mb-8"},n?p("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",i[c],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:n}}):p(g,{src:t,className:Object(o.a)("w-full rounded-t-xl",i[c])}),p(m,{color:c,snippet:a}))}function f(e){var{preview:n,src:t,previewClassName:a,snippet:c,color:r="gray",min:b=!1}=e,f=Object(s.useRef)(),v=Object(l.h)(0),k=Object(s.useRef)(),{0:x,1:h}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{v.set(0)});return e.observe(f.current),()=>{e.disconnect()}},[]),p("div",{className:"relative mb-8"},p("div",{ref:f,className:"relative rounded-t-xl ".concat(u[r])},p("div",{className:b?"md:w-88":void 0},p(l.d.div,{className:"relative",style:{marginRight:Object(l.i)(v,e=>-e)}},n?p("div",{className:Object(o.a)("rounded-t-xl",a,i[r],{"p-10":!a}),dangerouslySetInnerHTML:{__html:n}}):p(g,{src:t,className:Object(o.a)("w-full rounded-t-xl",i[r],{"pointer-events-none":x})}))),p("div",{ref:k,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},p(l.d.div,{drag:"x",_dragX:v,dragMomentum:!1,dragElastic:0,dragConstraints:k,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(b?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:v},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),h(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),h(!1)}},p("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},p("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[r]),style:{width:"0.4375rem"}},p("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),p(m,{color:r,snippet:c}))}},sdhg:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return h}));var a=t("wx14"),s=t("Ff2n"),c=t("q1tI"),o=t.n(c),l=t("7ljp"),p=t("YFqc"),r=t.n(p),i=t("tc9R"),u=t("pOT7"),d=t("vRWG"),g=t("I6Nb"),m=t("ABV8"),b=t.n(m),f=t("8C7G"),v=t("wH44"),k=(o.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:b()},meta:{title:"Flex Direction",description:"\u63a7\u5236 Flex \u5b50\u9879\u7684\u65b9\u5411\u7684\u529f\u80fd\u7c7b",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"\u6a2a\u5411",slug:"",children:[]},{title:"\u6a2a\u5411\u53cd\u5411",slug:"-1",children:[]},{title:"\u7eb5\u5411",slug:"-2",children:[]},{title:"\u7eb5\u5411\u53cd\u5411",slug:"-3",children:[]},{title:"\u54cd\u5e94\u5f0f",slug:"-4",children:[]},{title:"\u5b9a\u5236",slug:"-5",children:[{title:"\u53d8\u4f53",slug:"-6"},{title:"\u7981\u7528",slug:"-7"}]}]}),x=g.ContentsLayout;function h(e){var{components:n}=e,t=Object(s.a)(e,["components"]);return Object(l.a)(x,Object(a.a)({},k,t,{components:n,mdxType:"MDXLayout"}),Object(l.a)("div",{className:"prose"},Object(l.a)(i.a,{level:2,id:"",toc:!0},"\u6a2a\u5411"),Object(l.a)("p",null,"\u4f7f\u7528 ",Object(l.a)("inlineCode",{parentName:"p"},"flex-row")," \u7528\u6765\u6cbf\u4e0e\u6587\u672c\u76f8\u540c\u7684\u65b9\u5411\u6c34\u5e73\u653e\u7f6e flex \u5b50\u9879\u3002")),Object(l.a)(u.a,{preview:'\n  <div class="flex flex-row space-x-4">\n    <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>\n    <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>\n    <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-row</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"amber",min:!1}),Object(l.a)("div",{className:"prose"},Object(l.a)(i.a,{level:2,id:"-1",toc:!0},"\u6a2a\u5411\u53cd\u5411"),Object(l.a)("p",null,"\u4f7f\u7528 ",Object(l.a)("inlineCode",{parentName:"p"},"flex-row")," \u7528\u6765\u6cbf\u4e0e\u6587\u672c\u76f8\u53cd\u7684\u65b9\u5411\u6c34\u5e73\u653e\u7f6e flex \u5b50\u9879\u3002")),Object(l.a)(u.a,{preview:'\n  <div class="flex flex-row-reverse space-x-reverse space-x-4">\n    <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>\n    <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>\n    <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-row-reverse</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"lightBlue",min:!1}),Object(l.a)("div",{className:"prose"},Object(l.a)(i.a,{level:2,id:"-2",toc:!0},"\u7eb5\u5411"),Object(l.a)("p",null,"\u4f7f\u7528 ",Object(l.a)("inlineCode",{parentName:"p"},"flex-col")," \u7528\u6765\u6cbf\u5782\u76f4\u65b9\u5411\u653e\u7f6e flex \u5b50\u9879\u3002")),Object(l.a)(u.a,{preview:'\n  <div class="flex flex-col space-y-4">\n    <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>\n    <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>\n    <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-col</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"emerald",min:!1}),Object(l.a)("div",{className:"prose"},Object(l.a)(i.a,{level:2,id:"-3",toc:!0},"\u7eb5\u5411\u53cd\u5411"),Object(l.a)("p",null,"\u4f7f\u7528 ",Object(l.a)("inlineCode",{parentName:"p"},"flex-col-reverse")," \u7528\u6765\u6cbf\u5782\u76f4\u65b9\u5411\u53cd\u5411\u653e\u7f6e flex \u5b50\u9879\u3002")),Object(l.a)(u.a,{preview:'\n  <div class="flex flex-col-reverse space-y-reverse space-y-4">\n    <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>\n    <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>\n    <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-col-reverse</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"rose",min:!1}),Object(l.a)("div",{className:"prose"},Object(l.a)(i.a,{level:2,id:"-4",toc:!0},"\u54cd\u5e94\u5f0f"),Object(l.a)("p",null,"\u8981\u4ec5\u5728\u7279\u5b9a\u7684\u65ad\u70b9\u5904\u5e94\u7528 flex direction \u529f\u80fd\u7c7b\uff0c\u8bf7\u5728\u73b0\u6709\u7684\u7c7b\u540d\u79f0\u4e0a\u6dfb\u52a0 ",Object(l.a)("inlineCode",{parentName:"p"},"{screen}:")," \u524d\u7f00\u3002\u4f8b\u5982\uff0c\u5c06\u7c7b ",Object(l.a)("inlineCode",{parentName:"p"},"md:flex-row")," \u6dfb\u52a0\u5230\u5143\u7d20\u4e0a\uff0c\u5c06\u5728\u4e2d\u7b49\u5c3a\u5bf8\u53ca\u4ee5\u4e0a\u7684\u5c4f\u5e55\u4e0a\u5e94\u7528 ",Object(l.a)("inlineCode",{parentName:"p"},"flex-row")," \u529f\u80fd\u7c7b\u3002"),Object(l.a)("p",null,"\u6709\u5173 Tailwind \u7684\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u529f\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u67e5\u770b ",Object(l.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(l.a)("a",null,"\u54cd\u5e94\u5f0f\u8bbe\u8ba1"))," \u6587\u6863\u3002"),Object(l.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(l.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"  ",Object(l.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(l.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(l.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(l.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(l.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(l.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(l.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"flex flex-col ",Object(l.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:flex-row")," ...",Object(l.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(l.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",Object(l.a)("span",Object(a.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n  ",Object(l.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(l.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(l.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(l.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(l.a)(i.a,{level:2,id:"-5",toc:!0},"\u5b9a\u5236"),Object(l.a)(i.a,{level:3,id:"-6",toc:!0},"\u53d8\u4f53")),Object(l.a)(f.a,{plugin:"flexDirection",name:"flex-direction",mdxType:"Variants"}),Object(l.a)("div",{className:"prose"},Object(l.a)(i.a,{level:3,id:"-7",toc:!0},"\u7981\u7528")),Object(l.a)(v.a,{plugin:"flexDirection",name:"flex-direction",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=k},vRWG:function(e,n,t){"use strict";t.r(n),t.d(n,"DocumentationLayout",(function(){return g}));var a=t("wx14"),s=t("q1tI"),c=t.n(s),o=t("ekQu"),l=t("8Kt/"),p=t.n(l),r=t("nOHt"),i=t("ap0H"),u=t("1Q1k"),d=c.a.createElement;function g(e){var n=Object(r.useRouter)();return d(c.a.Fragment,null,d(i.a,{suffix:"/"===n.pathname?void 0:"Tailwind CSS \u4e2d\u6587\u6587\u6863"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(p.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(o.b,Object(a.a)({nav:u.a},e)))}},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("rePB"),s=t("q1tI"),c=t.n(s),o=t("AOjV"),l=t("AI3G"),p=t("Zb5r"),r=c.a.createElement;function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){var{plugin:n,name:t}=e,a=Object(l.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,(e,n,t)=>"".concat(n," ").concat(t.toLowerCase())),r("div",{className:"prose"},r("p",null,"\u5982\u679c\u60a8\u4e0d\u6253\u7b97\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u4f7f\u7528 ",t," \u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u7684"," ",r("code",null,"corePlugins")," \u90e8\u5206\u5c06"," ",r("span",{dangerouslySetInnerHTML:{__html:Object(p.a)(a.map(e=>"<code>".concat(e,"</code>")))}})," "," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",r("code",null,"false")," \u6765\u5b8c\u5168\u7981\u7528\u5b83\u4eec\uff1a"),r(o.a,{path:"corePlugins",before:"...",add:a.reduce((e,n)=>u(u({},e),{},{[n]:!1}),{})}))}}},[["GuPV",0,2,6,1,3,4,5,7]]]);