_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[137],{"5xSE":function(e,a,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("rePB"),c=t("q1tI"),s=t.n(c),p=t("98BF"),r=t("Zb5r"),o=t("AOjV"),i=s.a.createElement;function l(e){var a=e.plugin,t=e.name,c=p.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(function(e,a,t){return"".concat(a," ").concat(t.toLowerCase())}));var s=["responsive","hover","focus","active","group-hover"].filter((function(e){return!c.includes(e)})).slice(0,2),l="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(t," \u529f\u80fd\u7c7b\uff0c").concat(c.length?"\u53ea\u751f\u6210 ".concat(Object(r.a)(c).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:l}}),i("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u60a8\u7684"," ",i("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",i("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",i("code",null,a)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",t," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),i("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",c.length>0?"\u4e5f":"","\u5c06\u751f\u6210"," ",Object(r.a)(s)," \u53d8\u4f53:"),i(o.a,{path:"variants.extend",before:"...",add:Object(n.a)({},a,s)}))}},AOjV:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),c=t.n(n),s=(t("Btb4"),t("AI3G")),p=t("iuhU"),r=c.a.createElement;function o(e){var a=e.value;return"string"===typeof a?r("span",{className:"token string"},"'",a,"'"):Array.isArray(a)?r(c.a.Fragment,null,r("span",{className:"token punctuation"},"["),a.map((function(e,t){return r(n.Fragment,{key:t},r(o,{value:e}),t===a.length-1?null:r("span",{className:"token punctuation"},", "))})),r("span",{className:"token punctuation"},"]")):"boolean"===typeof a?r("span",{className:"token boolean"},a.toString()):a.toString()}function i(e){var a=e.edits,t=e.indent,c=void 0===t?"":t,s=e.type,i=void 0===s?"inserted":s;return r("span",{className:Object(p.a)("token",{"inserted-sign inserted":"inserted"===i,"deleted-sign deleted":"inserted"!==i})},Object.keys(a).map((function(e,t){return r(n.Fragment,{key:t},r("span",{className:Object(p.a)("token prefix",{inserted:"inserted"===i,deleted:"inserted"!==i})},"inserted"===i?"+":"-")," ",c,/^[a-z_$][a-z0-9_$]*$/i.test(s=e)?s:"'".concat(s,"'"),r("span",{className:"token operator"},":")," ",r(o,{value:a[e]}),r("span",{className:"token punctuation"},","),"\n");var s})))}function l(e){var a=e.path,t=e.add,c=e.remove,p=e.before,o=e.after;return a="string"===typeof a?a.split("."):a,r("div",{className:"prose"},r("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  ",r("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",r("span",{className:"token punctuation"},"."),r("span",{className:"token property-access"},"exports")," ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token punctuation"},"{"),"\n",a.map((function(e,a){return r(n.Fragment,{key:a},"  ","  ".repeat(a+1),e,r("span",{className:"token operator"},":")," ",r("span",{className:"token punctuation"},"{"),"\n")})),p&&Object(s.a)(p).map((function(e,t){return r(n.Fragment,{key:t},"  ".repeat(a.length+2),r("span",{className:"token comment"},"// ".concat(e)),"\n")}))),c&&r(i,{edits:c,type:"deleted",indent:"  ".repeat(a.length+1)}),t&&r(i,{edits:t,type:"inserted",indent:"  ".repeat(a.length+1)}),r("span",{className:"token unchanged"},o&&Object(s.a)(o).map((function(e){return"".concat("  ".repeat(a.length+2)).concat(e,"\n")})),a.map((function(e,t){return r(n.Fragment,{key:t},"  ","  ".repeat(a.length-t),"}\n")})),"  }")))))}},Btb4:function(e,a,t){"use strict";const n=t("5xSE"),c=t("p+I8"),s=t("GAX2").default;e.exports=(e,a,t)=>{const p=[];return function e(a,t,r){let o;(t=t||{}).indent=t.indent||"\t",r=r||"",o=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=e=>{if(void 0===t.inlineCharacterLimit)return e;const a=e.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:e.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),"\n").replace(new RegExp(o.pad,"g"),r).replace(new RegExp(o.indent,"g"),r+t.indent)};if(-1!==p.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||n(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";p.push(a);const n="["+o.newLine+a.map((n,c)=>{const s=a.length-1===c?o.newLine:","+o.newLineOrSpace;let p=e(n,t,r+t.indent);return t.transform&&(p=t.transform(a,c,p)),o.indent+p+s}).join("")+o.pad+"]";return p.pop(),i(n)}if(c(a)){let n=Object.keys(a).concat(s(a));if(t.filter&&(n=n.filter(e=>t.filter(a,e))),0===n.length)return"{}";p.push(a);const c="{"+o.newLine+n.map((c,s)=>{const p=n.length-1===s?o.newLine:","+o.newLineOrSpace,i="symbol"===typeof c,l=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(c),m=i||l?c:e(c,t);let u=e(a[c],t,r+t.indent);return t.transform&&(u=t.transform(a,c,u)),o.indent+String(m)+": "+u+p}).join("")+o.pad+"}";return p.pop(),i(c)}return a=String(a).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,t)}},GAX2:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter(a=>Object.prototype.propertyIsEnumerable.call(e,a))},Jet2:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return d}));var n=t("wx14"),c=t("Ff2n"),s=t("q1tI"),p=t.n(s),r=t("7ljp"),o=(t("YFqc"),t("tc9R")),i=t("vRWG"),l=t("I6Nb"),m=t("Zalc"),u=t.n(m),b=t("8C7G"),O=t("wH44"),j=(p.a.createElement,{Layout:i.DocumentationLayout,classes:{plugin:u.a},meta:{title:"\u5c4f\u5e55\u9605\u8bfb\u5668",description:"\u7528\u4e8e\u63d0\u9ad8\u5c4f\u5e55\u9605\u8bfb\u5668\u7684\u65e0\u969c\u788d\u6027\u7684\u529f\u80fd\u7c7b\u3002"},tableOfContents:[{title:"\u4f7f\u7528",slug:"",children:[]},{title:"\u81ea\u5b9a\u4e49",slug:"-1",children:[{title:"\u53d8\u4f53",slug:"-2"},{title:"\u7981\u7528",slug:"-3"}]}]}),N=l.ContentsLayout;function d(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(r.a)(N,Object(n.a)({},j,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(o.a,{level:2,id:"",toc:!0},"\u4f7f\u7528"),Object(r.a)("p",null,"\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"sr-only")," \u6765\u9690\u85cf\u4e00\u4e2a\u5143\u7d20\uff0c\u800c\u4e0d\u5bf9\u5c4f\u5e55\u9605\u8bfb\u5668\u9690\u85cf\u3002"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"a")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"href"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"#",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"svg"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"svg"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"span")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"sr-only",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Settings",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"span"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"a"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"not-sr-only")," \u6765\u64a4\u9500 ",Object(r.a)("inlineCode",{parentName:"p"},"sr-only"),"\uff0c\u4f7f\u4e00\u4e2a\u5143\u7d20\u5bf9\u89c6\u529b\u7528\u6237\u548c\u5c4f\u5e55\u9605\u8bfb\u5668\u90fd\u53ef\u89c1\u3002\u5f53\u60a8\u60f3\u5728\u5c0f\u5c4f\u5e55\u4e0a\u9690\u85cf\u67d0\u4e9b\u5143\u7d20\uff0c\u4f46\u5728\u5927\u5c4f\u5e55\u4e0a\u663e\u793a\u5b83\u65f6\uff0c\u8fd9\u5f88\u6709\u7528\u3002"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"a")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"href"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"#",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"svg"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"svg"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"span")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"sr-only sm:not-sr-only",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Settings",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"span"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"a"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",Object(r.a)("inlineCode",{parentName:"p"},"responsive")," \u548c ",Object(r.a)("inlineCode",{parentName:"p"},"focus")," \u53d8\u4f53\u662f\u4e3a\u8fd9\u4e9b\u529f\u80fd\u7c7b\u751f\u6210\u7684\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"focus:not-sr-only")," \u6765\u4f7f\u4e00\u4e2a\u5143\u7d20\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u88ab\u9690\u85cf\uff0c\u4f46\u5f53\u7528\u6237\u7528tab\u952e\u70b9\u51fb\u5b83\u65f6\uff0c\u5b83\u53c8\u662f\u53ef\u89c1\u7684--\u8fd9\u5bf9 ",Object(r.a)("inlineCode",{parentName:"p"},"skip to content")," \u7684\u94fe\u63a5\u5f88\u6709\u7528\u3002"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"a")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"href"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"#",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"sr-only focus:not-sr-only",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  Skip to content\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"a"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)(o.a,{level:2,id:"-1",toc:!0},"\u81ea\u5b9a\u4e49"),Object(r.a)(o.a,{level:3,id:"-2",toc:!0},"\u53d8\u4f53")),Object(r.a)(b.a,{plugin:"accessibility",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(o.a,{level:3,id:"-3",toc:!0},"\u7981\u7528")),Object(r.a)(O.a,{plugin:"accessibility",mdxType:"Disabling"}))}d.isMDXComponent=!0,d.layoutProps=j},Zalc:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:e,variants:a}){e({".sr-only":{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"},".not-sr-only":{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",clip:"auto",whiteSpace:"normal"}},a("accessibility"))}}},Zb5r:function(e,a,t){"use strict";function n(e){return e.reduce((function(a,t,n){return 0===n?t:n===e.length-1?"".concat(a," and ").concat(t):"".concat(a,", ").concat(t)}),"")}t.d(a,"a",(function(){return n}))},ap0H:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),c=t.n(n),s=t("8Kt/"),p=t.n(s),r=c.a.createElement;function o(e){var a=e.suffix,t=e.children+(a?" - ".concat(a):"");return r(p.a,null,r("title",{key:"title"},t),r("meta",{key:"twitter:title",name:"twitter:title",content:t}),r("meta",{key:"og:title",property:"og:title",content:t}))}},"p+I8":function(e,a,t){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},"pI+W":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/screen-readers",function(){return t("Jet2")}])},vRWG:function(e,a,t){"use strict";t.r(a),t.d(a,"DocumentationLayout",(function(){return b}));var n=t("wx14"),c=t("q1tI"),s=t.n(c),p=t("ekQu"),r=t("8Kt/"),o=t.n(r),i=t("nOHt"),l=t("ap0H"),m=t("1Q1k"),u=s.a.createElement;function b(e){var a=Object(i.useRouter)();return u(s.a.Fragment,null,u(l.a,{suffix:"/"===a.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),u(o.a,null,u("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),u("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/tailwindcss/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),u(p.b,Object(n.a)({nav:m.a},e)))}},wH44:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t("rePB"),c=t("q1tI"),s=t.n(c),p=t("AOjV"),r=t("AI3G"),o=t("Zb5r"),i=s.a.createElement;function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e){var a=e.plugin,t=e.name,c=Object(r.a)(a);return t=t||a.replace(/([a-z])([A-Z])/g,(function(e,a,t){return"".concat(a," ").concat(t.toLowerCase())})),i("div",{className:"prose"},i("p",null,"\u5982\u679c\u60a8\u4e0d\u6253\u7b97\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u4f7f\u7528 ",t," \u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u7684"," ",i("code",null,"corePlugins")," \u90e8\u5206\u5c06"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(o.a)(c.map((function(e){return"<code>".concat(e,"</code>")})))}})," "," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",i("code",null,"false")," \u6765\u5b8c\u5168\u7981\u7528\u5b83\u4eec\uff1a"),i(p.a,{path:"corePlugins",before:"...",add:c.reduce((function(e,a){return m(m({},e),{},Object(n.a)({},a,!1))}),{})}))}}},[["pI+W",0,2,1,3,4,5]]]);