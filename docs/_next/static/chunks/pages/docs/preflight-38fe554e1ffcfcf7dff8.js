_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[126],{"5xSE":function(e,a,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},AOjV:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t("q1tI"),c=t.n(n),s=(t("Btb4"),t("AI3G")),p=t("iuhU"),o=c.a.createElement;function l(e){var a=e.value;return"string"===typeof a?o("span",{className:"token string"},"'",a,"'"):Array.isArray(a)?o(c.a.Fragment,null,o("span",{className:"token punctuation"},"["),a.map((function(e,t){return o(n.Fragment,{key:t},o(l,{value:e}),t===a.length-1?null:o("span",{className:"token punctuation"},", "))})),o("span",{className:"token punctuation"},"]")):"boolean"===typeof a?o("span",{className:"token boolean"},a.toString()):a.toString()}function r(e){var a=e.edits,t=e.indent,c=void 0===t?"":t,s=e.type,r=void 0===s?"inserted":s;return o("span",{className:Object(p.a)("token",{"inserted-sign inserted":"inserted"===r,"deleted-sign deleted":"inserted"!==r})},Object.keys(a).map((function(e,t){return o(n.Fragment,{key:t},o("span",{className:Object(p.a)("token prefix",{inserted:"inserted"===r,deleted:"inserted"!==r})},"inserted"===r?"+":"-")," ",c,/^[a-z_$][a-z0-9_$]*$/i.test(s=e)?s:"'".concat(s,"'"),o("span",{className:"token operator"},":")," ",o(l,{value:a[e]}),o("span",{className:"token punctuation"},","),"\n");var s})))}function b(e){var a=e.path,t=e.add,c=e.remove,p=e.before,l=e.after;return a="string"===typeof a?a.split("."):a,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",a.map((function(e,a){return o(n.Fragment,{key:a},"  ","  ".repeat(a+1),e,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")})),p&&Object(s.a)(p).map((function(e,t){return o(n.Fragment,{key:t},"  ".repeat(a.length+2),o("span",{className:"token comment"},"// ".concat(e)),"\n")}))),c&&o(r,{edits:c,type:"deleted",indent:"  ".repeat(a.length+1)}),t&&o(r,{edits:t,type:"inserted",indent:"  ".repeat(a.length+1)}),o("span",{className:"token unchanged"},l&&Object(s.a)(l).map((function(e){return"".concat("  ".repeat(a.length+2)).concat(e,"\n")})),a.map((function(e,t){return o(n.Fragment,{key:t},"  ","  ".repeat(a.length-t),"}\n")})),"  }")))))}},Btb4:function(e,a,t){"use strict";const n=t("5xSE"),c=t("p+I8"),s=t("GAX2").default;e.exports=(e,a,t)=>{const p=[];return function e(a,t,o){let l;(t=t||{}).indent=t.indent||"\t",o=o||"",l=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const r=e=>{if(void 0===t.inlineCharacterLimit)return e;const a=e.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:e.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),o).replace(new RegExp(l.indent,"g"),o+t.indent)};if(-1!==p.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||n(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";p.push(a);const n="["+l.newLine+a.map((n,c)=>{const s=a.length-1===c?l.newLine:","+l.newLineOrSpace;let p=e(n,t,o+t.indent);return t.transform&&(p=t.transform(a,c,p)),l.indent+p+s}).join("")+l.pad+"]";return p.pop(),r(n)}if(c(a)){let n=Object.keys(a).concat(s(a));if(t.filter&&(n=n.filter(e=>t.filter(a,e))),0===n.length)return"{}";p.push(a);const c="{"+l.newLine+n.map((c,s)=>{const p=n.length-1===s?l.newLine:","+l.newLineOrSpace,r="symbol"===typeof c,b=!r&&/^[a-z$_][a-z$_0-9]*$/i.test(c),m=r||b?c:e(c,t);let O=e(a[c],t,o+t.indent);return t.transform&&(O=t.transform(a,c,O)),l.indent+String(m)+": "+O+p}).join("")+l.pad+"}";return p.pop(),r(c)}return a=String(a).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,t)}},F0Qs:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/preflight",function(){return t("LH5k")}])},GAX2:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter(a=>Object.prototype.propertyIsEnumerable.call(e,a))},LH5k:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var n=t("wx14"),c=t("Ff2n"),s=t("q1tI"),p=t.n(s),o=t("7ljp"),l=t("YFqc"),r=t.n(l),b=t("tc9R"),m=t("vRWG"),O=t("I6Nb"),j=t("AOjV"),i=(p.a.createElement,{Layout:m.DocumentationLayout,meta:{title:"Preflight",description:"\u4e00\u5957\u6b66\u65ad\u7684\u9488\u5bf9 Tailwind \u9879\u76ee\u9884\u8bbe\u7684\u57fa\u7840\u6837\u5f0f"},tableOfContents:[{title:"\u6982\u89c8",slug:"",children:[]},{title:"\u9ed8\u8ba4\u7684\u5916\u8fb9\u8ddd\u5df2\u79fb\u9664",slug:"-1",children:[]},{title:"\u6807\u9898\u65e0\u6837\u5f0f",slug:"-2",children:[]},{title:"\u5217\u8868\u65e0\u6837\u5f0f",slug:"-3",children:[]},{title:"\u56fe\u7247\u662f\u5757\u7ea7\u5143\u7d20",slug:"-4",children:[]},{title:"\u8fb9\u6846\u6837\u5f0f\u5df2\u88ab\u5168\u5c40\u5730\u91cd\u7f6e",slug:"-5",children:[]},{title:"\u6309\u94ae\u9ed8\u8ba4\u6709\u8f6e\u5ed3",slug:"-6",children:[]},{title:"\u6269\u5c55 Preflight",slug:"preflight",children:[]},{title:"\u7981\u7528 Preflight",slug:"preflight-1",children:[]}]}),N=O.ContentsLayout;function u(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(o.a)(N,Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(b.a,{level:2,id:"",toc:!0,hidden:!0,mdxType:"Heading"},"\u6982\u89c8"),Object(o.a)("p",null,"\u57fa\u4e8e ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/sindresorhus/modern-normalize"}),"modern-normalize")," , Preflight \u662f\u4e00\u5957\u9488\u5bf9 Tailwind \u9879\u76ee\u7684\u57fa\u7840\u6837\u5f0f\uff0c\u65e8\u5728\u6d88\u9664\u8de8\u6d4f\u89c8\u5668\u7684\u4e0d\u4e00\u81f4\u6027\uff0c\u5e76\u4f7f\u60a8\u7684\u5de5\u4f5c\u66f4\u8f7b\u677e\u5730\u7b26\u5408\u8bbe\u8ba1\u7cfb\u7edf\u7684\u7ea6\u675f\u3002"),Object(o.a)("p",null,"\u5f53\u60a8\u5728 CSS \u4e2d\u5305\u542b ",Object(o.a)("inlineCode",{parentName:"p"},"@tailwind base")," \u65f6\uff0cTailwind \u4f1a\u81ea\u52a8\u6ce8\u5165\u4ee5\u4e0b\u6837\u5f0f\uff1a"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," base",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";"))," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"/* Preflight will be injected here */"),"\n\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," components",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";"))))),Object(o.a)("p",null,"\u5c3d\u7ba1 Preflight \u4e2d\u7684\u5927\u591a\u6570\u6837\u5f0f\u90fd\u662f\u4e0d\u4f1a\u88ab\u6ce8\u610f\u5230\u7684 \u2014 \u5b83\u4eec\u53ea\u662f\u7b80\u5355\u5730\u8ba9\u4e8b\u60c5\u8868\u73b0\u5f97\u66f4\u50cf\u60a8\u671f\u671b\u7684\u6837\u5b50 \u2014 \u6709\u4e9b\u6837\u5f0f\u662f\u5f88\u6545\u610f\u4e3a\u4e4b\u7684\uff0c\u5f53\u60a8\u521d\u6b21\u9047\u5230\u5b83\u4eec\u65f6\u53ef\u80fd\u4f1a\u611f\u5230\u60ca\u8bb6\u3002"),Object(o.a)("p",null,"\u6709\u5173 Preflight \u91c7\u7528\u7684\u6240\u6709\u6837\u5f0f\u7684\u5b8c\u6574\u53c2\u8003\uff0c\u8bf7\u53c2\u89c1 ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://unpkg.com/tailwindcss@%5E2/dist/base.css"}),"\u6837\u5f0f\u8868"),"\u3002"),Object(o.a)("hr",null),Object(o.a)(b.a,{level:2,id:"-1",toc:!0},"\u9ed8\u8ba4\u7684\u5916\u8fb9\u8ddd\u5df2\u79fb\u9664"),Object(o.a)("p",null,"Preflight \u4f1a\u4ece\u6807\u9898\uff0c\u5757\u5f15\u7528\uff0c\u6bb5\u843d\u7b49\u5143\u7d20\u4e2d\u5220\u9664\u6240\u6709\u9ed8\u8ba4\u5916\u8fb9\u8ddd\u3002"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"blockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"margin"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"0"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(o.a)("p",null,"\u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u8fd9\u79cd\u60c5\u51b5\u4e8b\u66f4\u96be\u53d1\u751f\uff1a\u4e0d\u5c0f\u5fc3\u5730\u4f9d\u8d56\u4e86\u7528\u6237\u4ee3\u7406\uff08user-agent\uff09\u6837\u5f0f\u8868\u7684\u8fb9\u8ddd\u503c\uff0c\u800c\u8fd9\u4e9b\u8fb9\u8ddd\u503c\u5e76\u4e0d\u5c5e\u4e8e\u60a8\u95f4\u8ddd\u6bd4\u4f8b\u7684\u4e00\u90e8\u5206\u3002"),Object(o.a)("hr",null),Object(o.a)(b.a,{level:2,id:"-2",toc:!0},"\u6807\u9898\u65e0\u6837\u5f0f"),Object(o.a)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u6807\u9898\u5143\u7d20\u90fd\u662f\u5b8c\u5168\u672a\u8bbe\u7f6e\u6837\u5f0f\u7684\uff0c\u5e76\u4e14\u5176\u5b57\u4f53\u5927\u5c0f\uff08font-size\uff09\u548c\u5b57\u4f53\u7c97\u7ec6\uff08font-weight\uff09\u4e0e\u666e\u901a\u6587\u672c\u6ca1\u6709\u533a\u522b\u3002"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"h1,\nh2,\nh3,\nh4,\nh5,\nh6")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"font-size"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," inherit",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"font-weight"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," inherit",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(o.a)("p",null,"\u8fd9\u4e2a\u539f\u56e0\u662f\u53cc\u91cd\u7684\uff1a"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"\u5b83\u53ef\u4ee5\u5e2e\u52a9\u60a8\u907f\u514d\u4e0d\u5c0f\u5fc3\u5730\u504f\u79bb\u4e86\u60a8\u7684\u5b57\u5f62\u6bd4\u4f8b\uff08type scale\uff09"),"\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6d4f\u89c8\u5668\u4f1a\u4e3a\u5728 Tailwind \u9ed8\u8ba4\u5b57\u5f62\u6bd4\u4f8b\uff08type scale\uff09\u4e2d\u4e0d\u5b58\u5728\u7684\u6807\u9898\u5206\u914d\u5927\u5c0f\uff0c\u5e76\u4e14\u4e0d\u80fd\u4fdd\u8bc1\u8fd9\u4e2a\u5927\u5c0f\u4f1a\u5b58\u5728\u4e8e\u60a8\u81ea\u5df1\u7684\u5b57\u5f62\u6bd4\u4f8b\uff08type scale\uff09\u4e2d\u3002"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"\u5728\u7528\u6237\u754c\u9762\uff08 UI \uff09 \u5f00\u53d1\u4e2d\uff0c\u4e0d\u5e94\u8be5\u7ecf\u5e38\u5728\u89c6\u89c9\u4e0a\u5f3a\u8c03\u6807\u9898"),"\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5c06\u6807\u9898\u8bbe\u7f6e\u4e3a\u65e0\u6837\u5f0f\u610f\u5473\u7740\u60a8\u5bf9\u6807\u9898\u4f7f\u7528\u7684\u4efb\u4f55\u6837\u5f0f\u90fd\u4f1a\u662f\u6709\u610f\u8bc6\u548c\u8c28\u614e\u5730\u8fdb\u884c\u7684\u3002")),Object(o.a)("p",null,"\u60a8\u59cb\u7ec8\u53ef\u4ee5\u5c06\u9ed8\u8ba4\u6807\u9898\u6837\u5f0f\u6dfb\u52a0\u5230\u9879\u76ee\u4e2d\uff0c\u8bf7\u53c2\u8003 ",Object(o.a)(r.a,{href:"/docs/adding-base-styles",passHref:!0},Object(o.a)("a",null,"\u6dfb\u52a0\u60a8\u81ea\u5df1\u7684\u57fa\u672c\u6837\u5f0f")),"\u3002"),Object(o.a)("p",null,"\u5982\u679c\u60a8\u60f3\u9009\u62e9\u6027\u5730\u5f15\u5165\u5b9e\u7528\u7684\u9ed8\u8ba4\u6807\u9898\u6837\u5f0f\u5230\u6587\u7ae0\u7c7b\u578b\u7684\u9875\u9762\u4e2d\uff0c\u6211\u4eec\u5efa\u8bae ",Object(o.a)(r.a,{href:"/docs/typography-plugin/",passHref:!0},Object(o.a)("a",null,"@tailwindcss/typography plugin")),"\u3002"),Object(o.a)("hr",null),Object(o.a)(b.a,{level:2,id:"-3",toc:!0},"\u5217\u8868\u65e0\u6837\u5f0f"),Object(o.a)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6709\u5e8f\u5217\u8868\u548c\u65e0\u5e8f\u5217\u8868\u662f\u65e0\u6837\u5f0f\u7684\uff0c\u6ca1\u6709\u7b26\u53f7\u6807\u8bb0\u6216\u6570\u5b57\uff0c\u800c\u4e14\u6ca1\u6709\u5916\u8fb9\u8ddd\u6216\u5185\u8fb9\u8ddd\u3002"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"ol,\nul")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"list-style"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," none",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"margin"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"0"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"padding"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"0"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(o.a)("p",null,"\u5982\u679c\u60a8\u60f3\u4e3a\u5217\u8868\u8bbe\u7f6e\u6837\u5f0f\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 ",Object(o.a)(r.a,{href:"/docs/list-style-type",passHref:!0},Object(o.a)("a",null,"list-style-type"))," \u548c ",Object(o.a)(r.a,{href:"/docs/list-style-position",passHref:!0},Object(o.a)("a",null,"list-style-position")),"  \u529f\u80fd\u7c7b\uff1a"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"ul")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"list-disc list-inside",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"li"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"One",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"li"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"li"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Two",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"li"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"li"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Three",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"li"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"ul"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"\u60a8\u59cb\u7ec8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5c06\u9ed8\u8ba4\u5217\u8868\u6837\u5f0f\u6dfb\u52a0\u5230\u9879\u76ee\u4e2d\uff1a ",Object(o.a)(r.a,{href:"/docs/adding-base-styles",passHref:!0},Object(o.a)("a",null,"\u6dfb\u52a0\u60a8\u81ea\u5df1\u7684\u57fa\u672c\u6837\u5f0f")),"\u3002"),Object(o.a)("p",null,"\u5982\u679c\u60a8\u60f3\u9009\u62e9\u6027\u5730\u5c06\u9ed8\u8ba4\u5217\u8868\u6837\u5f0f\u5f15\u5165\u5230\u6587\u7ae0\u7c7b\u578b\u7684\u9875\u9762\u4e2d\uff0c\u6211\u4eec\u5efa\u8bae ",Object(o.a)(r.a,{href:"/docs/typography-plugin/",passHref:!0},Object(o.a)("a",null,"@tailwindcss/typography plugin")),"\u3002"),Object(o.a)("hr",null),Object(o.a)(b.a,{level:2,id:"-4",toc:!0},"\u56fe\u7247\u662f\u5757\u7ea7\u5143\u7d20"),Object(o.a)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u56fe\u7247\u548c\u5176\u4ed6\u66ff\u6362\u5143\u7d20 (\u6bd4\u5982 ",Object(o.a)("inlineCode",{parentName:"p"},"svg"),", ",Object(o.a)("inlineCode",{parentName:"p"},"video"),", ",Object(o.a)("inlineCode",{parentName:"p"},"canvas")," \u7b49) \u662f ",Object(o.a)("inlineCode",{parentName:"p"},"display: block")," \u3002"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"img,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"display"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," block",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"vertical-align"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," middle",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(o.a)("p",null,"\u8fd9\u6709\u52a9\u4e8e\u907f\u514d\u6d4f\u89c8\u5668\u9ed8\u8ba4\u8bbe\u7f6e\u4e2d\u7ecf\u5e38\u9047\u5230\u7684\u610f\u5916\u5bf9\u9f50\u95ee\u9898 ",Object(o.a)("inlineCode",{parentName:"p"},"display: inline")," \u3002"),Object(o.a)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u8ba9\u5176\u4e2d\u7684\u4e00\u4e2a\u5143\u7d20\u4f7f\u7528 ",Object(o.a)("inlineCode",{parentName:"p"},"inline")," \u800c\u4e0d\u662f ",Object(o.a)("inlineCode",{parentName:"p"},"block"),"\uff0c\u53ea\u9700\u4f7f\u7528 ",Object(o.a)("inlineCode",{parentName:"p"},"inline")," \u529f\u80fd\u7c7b\uff1a"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"inline",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"src"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"alt"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("hr",null),Object(o.a)(b.a,{level:2,id:"-5",toc:!0},"\u8fb9\u6846\u6837\u5f0f\u5df2\u88ab\u5168\u5c40\u5730\u91cd\u7f6e"),Object(o.a)("p",null,"\u4e3a\u4e86\u80fd\u7b80\u5355\u5730\u901a\u8fc7\u6dfb\u52a0 ",Object(o.a)("inlineCode",{parentName:"p"},"border")," \u7c7b\u5c31\u80fd\u6dfb\u52a0\u8fb9\u6846\uff0cTailwind \u4f7f\u7528\u4e86\u4ee5\u4e0b\u89c4\u5219\u8986\u76d6\u4e86\u6240\u6709\u5143\u7d20\u7684\u9ed8\u8ba4\u8fb9\u6846\u6837\u5f0f\uff1a"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"*,\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token pseudo-element"}),"::before"),",\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token pseudo-element"}),"::after"))," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"border-width"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"0"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"border-style"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," solid",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"border-color"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"theme"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'borderColor.default'"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," currentColor",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(o.a)("p",null,"\u7531\u4e8e ",Object(o.a)("inlineCode",{parentName:"p"},"border")," \u7c7b\u4ec5\u8bbe\u7f6e\u4e86 ",Object(o.a)("inlineCode",{parentName:"p"},"border-width")," \u5c5e\u6027\uff0c\u56e0\u6b64\u8fd9\u4e2a\u91cd\u7f6e\u53ef\u786e\u4fdd\u4f7f\u7528\u4e0a\u8ff0\u7c7b\u540e\u90fd\u4f1a\u59cb\u7ec8\u6dfb\u52a0\u4e00\u6761\u5b9e\u5fc3\u7684 1px \u8fb9\u6846\uff0c\u8fb9\u6846\u7684\u989c\u8272\u662f\u60a8\u914d\u7f6e\u7684\u9ed8\u8ba4\u8fb9\u6846\u989c\u8272\u3002"),Object(o.a)("p",null,"\u96c6\u6210\u67d0\u4e9b\u7b2c\u4e09\u65b9\u5e93\u65f6\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u67d0\u4e9b\u610f\u5916\u7ed3\u679c, \u6bd4\u5982 ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss/issues/484"}),"Google maps"),"\u3002"),Object(o.a)("p",null,"\u5f53\u60a8\u9047\u5230\u8fd9\u79cd\u60c5\u51b5\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49 CSS \u8986\u76d6 Preflight \u6837\u5f0f\u6765\u89e3\u51b3\u5b83\u4eec\uff1a"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token class"}),".google-map")," *")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"border-style"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," none",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(o.a)("hr",null),Object(o.a)(b.a,{level:2,id:"-6",toc:!0},"\u6309\u94ae\u9ed8\u8ba4\u6709\u8f6e\u5ed3"),Object(o.a)("p",null,"\u4e3a\u4fdd\u8bc1\u6211\u4eec\u53ef\u4ee5\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u6837\u5f0f\uff0c\u6211\u4eec\u786e\u4fdd\u4e86\u6309\u94ae\u90fd\u5177\u6709\u9ed8\u8ba4\u7684\u8f6e\u5ed3\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",Object(o.a)("inlineCode",{parentName:"p"},"focus:ring")," \u6216\u7c7b\u4f3c\u7684\u529f\u80fd\u7c7b\u5e94\u7528\u5230\u60a8\u7684\u6309\u94ae\u4e2d\u6765\u8986\u76d6\u5b83\u3002"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"button",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token pseudo-class"}),":focus"))," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"outline"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"1"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unit"}),"px")," dotted",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"outline"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"5"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unit"}),"px")," auto -webkit-focus-ring-color",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(o.a)("hr",null),Object(o.a)(b.a,{level:2,id:"preflight",toc:!0},"\u6269\u5c55 Preflight"),Object(o.a)("p",null,"\u5982\u679c\u60a8\u60f3\u5728 Preflight \u4e0a\u6dfb\u52a0\u81ea\u5df1\u7684\u57fa\u672c\u6837\u5f0f\uff0c\u53ea\u9700\u5728 ",Object(o.a)("inlineCode",{parentName:"p"},"@layer base")," \u6307\u4ee4\u4e2d\u6dfb\u52a0\u4f60\u7684 CSS\uff1a"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," base",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@layer")," base")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"h1")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule atapply"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@apply")," text-2",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token unit"}),"xl"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"h2")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule atapply"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@apply")," text-xl",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"h3")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule atapply"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@apply")," text-lg",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"a")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule atapply"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@apply")," text-",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token color"}),"blue"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"-600")," underline",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," components",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";"))))),Object(o.a)("p",null,"\u53ef\u4ee5\u5728\u8fd9\u91cc\u4e86\u89e3\u66f4\u591a ",Object(o.a)(r.a,{href:"/docs/adding-base-styles",passHref:!0},Object(o.a)("a",null,"\u6dfb\u52a0\u57fa\u672c\u200b\u200b\u6837\u5f0f\u6587\u6863")),"."),Object(o.a)("hr",null),Object(o.a)(b.a,{level:2,id:"preflight-1",toc:!0},"\u7981\u7528 Preflight"),Object(o.a)("p",null,"\u5982\u679c\u60a8\u60f3\u5b8c\u5168\u7981\u7528 Preflight - \u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u8981\u5c06 Tailwind \u96c6\u6210\u5230\u73b0\u6709\u9879\u76ee\u4e2d\uff0c\u6216\u8005\u662f\u56e0\u4e3a\u60a8\u60f3\u63d0\u4f9b\u81ea\u5df1\u7684\u57fa\u672c\u6837\u5f0f - \u60a8\u6240\u9700\u8981\u505a\u7684\u5c31\u662f\u5728 ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," \u6587\u4ef6\u7684 ",Object(o.a)("inlineCode",{parentName:"p"},"corePlugins")," \u90e8\u5206\uff0c\u8bbe\u7f6e ",Object(o.a)("inlineCode",{parentName:"p"},"preflight")," \u4e3a ",Object(o.a)("inlineCode",{parentName:"p"},"false"),"\uff1a")),Object(o.a)(j.a,{path:"corePlugins",add:{preflight:!1},mdxType:"ConfigSample"}))}u.isMDXComponent=!0,u.layoutProps=i},ap0H:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),c=t.n(n),s=t("8Kt/"),p=t.n(s),o=c.a.createElement;function l(e){var a=e.suffix,t=e.children+(a?" - ".concat(a):"");return o(p.a,null,o("title",{key:"title"},t),o("meta",{key:"twitter:title",name:"twitter:title",content:t}),o("meta",{key:"og:title",property:"og:title",content:t}))}},"p+I8":function(e,a,t){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},vRWG:function(e,a,t){"use strict";t.r(a),t.d(a,"DocumentationLayout",(function(){return j}));var n=t("wx14"),c=t("q1tI"),s=t.n(c),p=t("ekQu"),o=t("8Kt/"),l=t.n(o),r=t("nOHt"),b=t("ap0H"),m=t("1Q1k"),O=s.a.createElement;function j(e){var a=Object(r.useRouter)();return O(s.a.Fragment,null,O(b.a,{suffix:"/"===a.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),O(l.a,null,O("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),O("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),O(p.b,Object(n.a)({nav:m.a},e)))}}},[["F0Qs",0,2,1,3,4,5]]]);