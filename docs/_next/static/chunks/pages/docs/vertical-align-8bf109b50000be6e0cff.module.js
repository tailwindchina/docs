(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[163],{"5xSE":function(e,a,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("q1tI"),s=t.n(n),o=t("98BF"),c=t("Zb5r"),r=t("AOjV"),l=s.a.createElement;function p(e){var{plugin:a,name:t}=e,n=o.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(e,a,t)=>"".concat(a," ").concat(t.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!n.includes(e)).slice(0,2),p="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(t," \u529f\u80fd\u7c7b\uff0c").concat(n.length?"\u53ea\u751f\u6210 ".concat(Object(c.a)(n).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:p}}),l("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u60a8\u7684"," ",l("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",l("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",l("code",null,a)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",t," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),l("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",n.length>0?"\u4e5f":"","\u5c06\u751f\u6210"," ",Object(c.a)(s)," \u53d8\u4f53:"),l(r.a,{path:"variants.extend",before:"...",add:{[a]:s}}))}},AOjV:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),s=t.n(n),o=(t("Btb4"),t("AI3G")),c=t("iuhU"),r=s.a.createElement;function l(e){var{value:a}=e;return"string"===typeof a?r("span",{className:"token string"},"'",a,"'"):Array.isArray(a)?r(s.a.Fragment,null,r("span",{className:"token punctuation"},"["),a.map((e,t)=>r(n.Fragment,{key:t},r(l,{value:e}),t===a.length-1?null:r("span",{className:"token punctuation"},", "))),r("span",{className:"token punctuation"},"]")):"boolean"===typeof a?r("span",{className:"token boolean"},a.toString()):a.toString()}function p(e){var{edits:a,indent:t="",type:s="inserted"}=e;return r("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(a).map((e,o)=>{return r(n.Fragment,{key:o},r("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",t,/^[a-z_$][a-z0-9_$]*$/i.test(p=e)?p:"'".concat(p,"'"),r("span",{className:"token operator"},":")," ",r(l,{value:a[e]}),r("span",{className:"token punctuation"},","),"\n");var p}))}function i(e){var{path:a,add:t,remove:s,before:c,after:l}=e;return a="string"===typeof a?a.split("."):a,r("div",{className:"prose"},r("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  ",r("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",r("span",{className:"token punctuation"},"."),r("span",{className:"token property-access"},"exports")," ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token punctuation"},"{"),"\n",a.map((e,a)=>r(n.Fragment,{key:a},"  ","  ".repeat(a+1),e,r("span",{className:"token operator"},":")," ",r("span",{className:"token punctuation"},"{"),"\n")),c&&Object(o.a)(c).map((e,t)=>r(n.Fragment,{key:t},"  ".repeat(a.length+2),r("span",{className:"token comment"},"// ".concat(e)),"\n"))),s&&r(p,{edits:s,type:"deleted",indent:"  ".repeat(a.length+1)}),t&&r(p,{edits:t,type:"inserted",indent:"  ".repeat(a.length+1)}),r("span",{className:"token unchanged"},l&&Object(o.a)(l).map(e=>"".concat("  ".repeat(a.length+2)).concat(e,"\n")),a.map((e,t)=>r(n.Fragment,{key:t},"  ","  ".repeat(a.length-t),"}\n")),"  }")))))}},Btb4:function(e,a,t){"use strict";const n=t("5xSE"),s=t("p+I8"),o=t("GAX2").default;e.exports=(e,a,t)=>{const c=[];return function e(a,t,r){let l;(t=t||{}).indent=t.indent||"\t",r=r||"",l=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===t.inlineCharacterLimit)return e;const a=e.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:e.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),r).replace(new RegExp(l.indent,"g"),r+t.indent)};if(-1!==c.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||n(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";c.push(a);const n="["+l.newLine+a.map((n,s)=>{const o=a.length-1===s?l.newLine:","+l.newLineOrSpace;let c=e(n,t,r+t.indent);return t.transform&&(c=t.transform(a,s,c)),l.indent+c+o}).join("")+l.pad+"]";return c.pop(),p(n)}if(s(a)){let n=Object.keys(a).concat(o(a));if(t.filter&&(n=n.filter(e=>t.filter(a,e))),0===n.length)return"{}";c.push(a);const s="{"+l.newLine+n.map((s,o)=>{const c=n.length-1===o?l.newLine:","+l.newLineOrSpace,p="symbol"===typeof s,i=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||i?s:e(s,t);let d=e(a[s],t,r+t.indent);return t.transform&&(d=t.transform(a,s,d)),l.indent+String(u)+": "+d+c}).join("")+l.pad+"}";return c.pop(),p(s)}return a=String(a).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,t)}},EL43:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/vertical-align",function(){return t("yLNH")}])},GAX2:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter(a=>Object.prototype.propertyIsEnumerable.call(e,a))},Zb5r:function(e,a,t){"use strict";function n(e){return e.reduce((a,t,n)=>0===n?t:n===e.length-1?"".concat(a," and ").concat(t):"".concat(a,", ").concat(t),"")}t.d(a,"a",(function(){return n}))},ap0H:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),o=t("8Kt/"),c=t.n(o),r=s.a.createElement;function l(e){var{suffix:a,children:t}=e,n=t+(a?" - ".concat(a):"");return r(c.a,null,r("title",{key:"title"},n),r("meta",{key:"twitter:title",name:"twitter:title",content:n}),r("meta",{key:"og:title",property:"og:title",content:n}))}},"p+I8":function(e,a,t){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return g})),t.d(a,"b",(function(){return O}));var n=t("wx14"),s=t("q1tI"),o=t.n(s),c=t("iuhU"),r=t("ZMKu"),l=o.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},i={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function b(e){var a=Object(s.useRef)(),{0:t,1:o}=Object(s.useState)(!1),{0:c,1:r}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(t){var e=new window.ResizeObserver(n);return n(),e.observe(a.current.contentDocument.body),()=>{e.disconnect()}}function n(){r({height:a.current.contentDocument.body.scrollHeight})}},[t]),l("iframe",Object(n.a)({},e,{ref:a,onLoad:()=>o(!0),style:c}))}function m(e){var{color:a,snippet:t}=e;return l("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",p[a],{"bg-gray-800":!p[a]})},l("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[a]})},l("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function g(e){var{preview:a,src:t,snippet:n,previewClassName:s,color:o="gray"}=e;return l("div",{className:"relative overflow-hidden mb-8"},a?l("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",i[o],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):l(b,{src:t,className:Object(c.a)("w-full rounded-t-xl",i[o])}),l(m,{color:o,snippet:n}))}function O(e){var{preview:a,src:t,previewClassName:n,snippet:o,color:p="gray",min:g=!1}=e,O=Object(s.useRef)(),f=Object(r.h)(0),h=Object(s.useRef)(),{0:v,1:j}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{f.set(0)});return e.observe(O.current),()=>{e.disconnect()}},[]),l("div",{className:"relative mb-8"},l("div",{ref:O,className:"relative rounded-t-xl ".concat(u[p])},l("div",{className:g?"md:w-88":void 0},l(r.d.div,{className:"relative",style:{marginRight:Object(r.i)(f,e=>-e)}},a?l("div",{className:Object(c.a)("rounded-t-xl",n,i[p],{"p-10":!n}),dangerouslySetInnerHTML:{__html:a}}):l(b,{src:t,className:Object(c.a)("w-full rounded-t-xl",i[p],{"pointer-events-none":v})}))),l("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},l(r.d.div,{drag:"x",_dragX:f,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(g?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:f},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),j(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),j(!1)}},l("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},l("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[p]),style:{width:"0.4375rem"}},l("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),l(m,{color:p,snippet:o}))}},qkm3:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:e,variants:a}){e({".align-baseline":{"vertical-align":"baseline"},".align-top":{"vertical-align":"top"},".align-middle":{"vertical-align":"middle"},".align-bottom":{"vertical-align":"bottom"},".align-text-top":{"vertical-align":"text-top"},".align-text-bottom":{"vertical-align":"text-bottom"}},a("verticalAlign"))}}},vRWG:function(e,a,t){"use strict";t.r(a),t.d(a,"DocumentationLayout",(function(){return b}));var n=t("wx14"),s=t("q1tI"),o=t.n(s),c=t("ekQu"),r=t("8Kt/"),l=t.n(r),p=t("nOHt"),i=t("ap0H"),u=t("1Q1k"),d=o.a.createElement;function b(e){var a=Object(p.useRouter)();return d(o.a.Fragment,null,d(i.a,{suffix:"/"===a.pathname?void 0:"Tailwind CSS \u4e2d\u6587\u6587\u6863"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(l.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(c.b,Object(n.a)({nav:u.a},e)))}},wH44:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t("rePB"),s=t("q1tI"),o=t.n(s),c=t("AOjV"),r=t("AI3G"),l=t("Zb5r"),p=o.a.createElement;function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e){var{plugin:a,name:t}=e,n=Object(r.a)(a);return t=t||a.replace(/([a-z])([A-Z])/g,(e,a,t)=>"".concat(a," ").concat(t.toLowerCase())),p("div",{className:"prose"},p("p",null,"\u5982\u679c\u60a8\u4e0d\u6253\u7b97\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u4f7f\u7528 ",t," \u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u7684"," ",p("code",null,"corePlugins")," \u90e8\u5206\u5c06"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(n.map(e=>"<code>".concat(e,"</code>")))}})," "," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",p("code",null,"false")," \u6765\u5b8c\u5168\u7981\u7528\u5b83\u4eec\uff1a"),p(c.a,{path:"corePlugins",before:"...",add:n.reduce((e,a)=>u(u({},e),{},{[a]:!1}),{})}))}},yLNH:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t("wx14"),s=t("Ff2n"),o=t("q1tI"),c=t.n(o),r=t("7ljp"),l=t("YFqc"),p=t.n(l),i=t("tc9R"),u=t("pOT7"),d=t("vRWG"),b=t("I6Nb"),m=t("qkm3"),g=t.n(m),O=t("8C7G"),f=t("wH44"),h=(c.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:g()},meta:{title:"\u5782\u76f4\u5bf9\u9f50",shortTitle:"\u5782\u76f4\u5bf9\u9f50",description:"\u7528\u4e8e\u63a7\u5236\u5185\u8054\u6216\u8868\u683c\u5355\u5143\u683c\u7684\u5782\u76f4\u5bf9\u9f50\u7684\u529f\u80fd\u7c7b\u3002",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Baseline",slug:"baseline",children:[]},{title:"Top",slug:"top",children:[]},{title:"Middle",slug:"middle",children:[]},{title:"Bottom",slug:"bottom",children:[]},{title:"Text Top",slug:"text-top",children:[]},{title:"Text Bottom",slug:"text-bottom",children:[]},{title:"\u54cd\u5e94\u5f0f",slug:"",children:[]},{title:"\u81ea\u5b9a\u4e49",slug:"-1",children:[{title:"\u53d8\u4f53",slug:"-2"},{title:"\u7981\u7528",slug:"-3"}]}]}),v=b.ContentsLayout;function j(e){var{components:a}=e,t=Object(s.a)(e,["components"]);return Object(r.a)(v,Object(n.a)({},h,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:2,id:"baseline",toc:!0},"Baseline"),Object(r.a)("p",null,"\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"align-baseline")," \u5c06\u4e00\u4e2a\u5143\u7d20\u7684\u57fa\u7ebf\u4e0e\u5176\u7236\u5143\u7d20\u7684\u57fa\u7ebf\u5bf9\u9f50\u3002")),Object(r.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-baseline">\n      <span class="absolute top-0 border-light-blue-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-light-blue-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-light-blue-600 font-medium">The quick brown fox jumped over the lazy dog.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-baseline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:2,id:"top",toc:!0},"Top"),Object(r.a)("p",null,"\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"align-top")," \u5c06\u4e00\u4e2a\u5143\u7d20\u7684\u9876\u90e8\u548c\u5b83\u7684\u5b50\u4ee3\u4e0e\u6574\u4e2a\u884c\u7684\u9876\u90e8\u5bf9\u9f50\u3002")),Object(r.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-top">\n      <span class="absolute top-0 border-emerald-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-emerald-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-emerald-600 font-medium">The quick brown fox jumped over the lazy dog.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-top</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:2,id:"middle",toc:!0},"Middle"),Object(r.a)("p",null,"\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"align-middle")," \u5c06\u5143\u7d20\u7684\u4e2d\u95f4\u4e0e\u57fa\u7ebf\u52a0\u7236\u5143\u7d20\u7684\u4e00\u534a\u9ad8\u5ea6\u5bf9\u9f50\u3002")),Object(r.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-middle">\n      <span class="absolute top-0 border-purple-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-purple-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-purple-600 font-medium">The quick brown fox jumped over the lazy dog.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-middle</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:2,id:"bottom",toc:!0},"Bottom"),Object(r.a)("p",null,"\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"align-bottom")," \u5c06\u4e00\u4e2a\u5143\u7d20\u7684\u5e95\u90e8\u548c\u5b83\u7684\u5b50\u4ee3\u4e0e\u6574\u4e2a\u884c\u7684\u5e95\u90e8\u5bf9\u9f50\u3002")),Object(r.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-bottom">\n      <span class="absolute top-0 border-rose-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-rose-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-rose-600 font-medium">The quick brown fox jumped over the lazy dog.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-bottom</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:2,id:"text-top",toc:!0},"Text Top"),Object(r.a)("p",null,"\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"align-text-top")," \u4f7f\u5143\u7d20\u7684\u9876\u90e8\u4e0e\u7236\u5143\u7d20\u7684\u5b57\u4f53\u9876\u90e8\u5bf9\u9f50\u3002")),Object(r.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-text-top">\n      <span class="absolute top-0 border-amber-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-amber-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-amber-600 font-medium">The quick brown fox jumped over the lazy dog.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-text-top</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:2,id:"text-bottom",toc:!0},"Text Bottom"),Object(r.a)("p",null,"\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"align-text-bottom")," \u4f7f\u5143\u7d20\u7684\u5e95\u90e8\u4e0e\u7236\u5143\u7d20\u7684\u5b57\u4f53\u5e95\u90e8\u5bf9\u9f50\u3002")),Object(r.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-text-bottom">\n      <span class="absolute top-0 border-fuchsia-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-fuchsia-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-fuchsia-600 font-medium">The quick brown fox jumped over the lazy dog.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-text-bottom</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:2,id:"",toc:!0},"\u54cd\u5e94\u5f0f"),Object(r.a)("p",null,"\u8981\u4ec5\u5728\u7279\u5b9a\u7684\u65ad\u70b9\u5904\u63a7\u5236\u5782\u76f4\u5bf9\u9f50\uff0c\u8bf7\u5728\u4efb\u4f55\u73b0\u6709\u7684\u5782\u76f4\u5bf9\u9f50\u529f\u80fd\u7c7b\u4e2d\u6dfb\u52a0 ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," \u524d\u7f00\u3002\u4f8b\u5982\uff0c\u6dfb\u52a0\u7c7b ",Object(r.a)("inlineCode",{parentName:"p"},"md:align-top")," \u5230\u4e00\u4e2a\u5143\u7d20\u4e2d\uff0c\u5c31\u4f1a\u5728\u4e2d\u7b49\u5c3a\u5bf8\u4ee5\u4e0a\u7684\u5c4f\u5e55\u4e0a\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"align-top")," \u529f\u80fd\u7c7b\u3002"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"relative",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"span")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"align-middle ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:align-top")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"...",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"span"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"span"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"span"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"\u5173\u4e8e Tailwind \u7684\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u529f\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",Object(r.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"\u54cd\u5e94\u5f0f\u8bbe\u8ba1")),"\u6587\u6863\u3002"),Object(r.a)(i.a,{level:2,id:"-1",toc:!0},"\u81ea\u5b9a\u4e49"),Object(r.a)(i.a,{level:3,id:"-2",toc:!0},"\u53d8\u4f53")),Object(r.a)(O.a,{plugin:"verticalAlign",name:"vertical-alignment",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:3,id:"-3",toc:!0},"\u7981\u7528")),Object(r.a)(f.a,{plugin:"verticalAlign",name:"vertical-alignment",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=h}},[["EL43",0,2,6,1,3,4,5,7]]]);