(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"2c5R":function(n,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/align-self",function(){return t("Y9Rh")}])},"5xSE":function(n,a,t){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,a,t){"use strict";t.d(a,"a",(function(){return i}));var e=t("q1tI"),s=t.n(e),c=t("98BF"),p=t("Zb5r"),o=t("AOjV"),l=s.a.createElement;function i(n){var{plugin:a,name:t}=n,e=c.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(n,a,t)=>"".concat(a," ").concat(t.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(n=>!e.includes(n)).slice(0,2),i="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(t," \u529f\u80fd\u7c7b\uff0c").concat(e.length?"\u53ea\u751f\u6210 ".concat(Object(p.a)(e).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:i}}),l("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u60a8\u7684"," ",l("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",l("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",l("code",null,a)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",t," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),l("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",e.length>0?"\u4e5f":"","\u5c06\u751f\u6210"," ",Object(p.a)(s)," \u53d8\u4f53:"),l(o.a,{path:"variants.extend",before:"...",add:{[a]:s}}))}},AOjV:function(n,a,t){"use strict";t.d(a,"a",(function(){return r}));var e=t("q1tI"),s=t.n(e),c=(t("Btb4"),t("AI3G")),p=t("iuhU"),o=s.a.createElement;function l(n){var{value:a}=n;return"string"===typeof a?o("span",{className:"token string"},"'",a,"'"):Array.isArray(a)?o(s.a.Fragment,null,o("span",{className:"token punctuation"},"["),a.map((n,t)=>o(e.Fragment,{key:t},o(l,{value:n}),t===a.length-1?null:o("span",{className:"token punctuation"},", "))),o("span",{className:"token punctuation"},"]")):"boolean"===typeof a?o("span",{className:"token boolean"},a.toString()):a.toString()}function i(n){var{edits:a,indent:t="",type:s="inserted"}=n;return o("span",{className:Object(p.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(a).map((n,c)=>{return o(e.Fragment,{key:c},o("span",{className:Object(p.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",t,/^[a-z_$][a-z0-9_$]*$/i.test(i=n)?i:"'".concat(i,"'"),o("span",{className:"token operator"},":")," ",o(l,{value:a[n]}),o("span",{className:"token punctuation"},","),"\n");var i}))}function r(n){var{path:a,add:t,remove:s,before:p,after:l}=n;return a="string"===typeof a?a.split("."):a,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",a.map((n,a)=>o(e.Fragment,{key:a},"  ","  ".repeat(a+1),n,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")),p&&Object(c.a)(p).map((n,t)=>o(e.Fragment,{key:t},"  ".repeat(a.length+2),o("span",{className:"token comment"},"// ".concat(n)),"\n"))),s&&o(i,{edits:s,type:"deleted",indent:"  ".repeat(a.length+1)}),t&&o(i,{edits:t,type:"inserted",indent:"  ".repeat(a.length+1)}),o("span",{className:"token unchanged"},l&&Object(c.a)(l).map(n=>"".concat("  ".repeat(a.length+2)).concat(n,"\n")),a.map((n,t)=>o(e.Fragment,{key:t},"  ","  ".repeat(a.length-t),"}\n")),"  }")))))}},Btb4:function(n,a,t){"use strict";const e=t("5xSE"),s=t("p+I8"),c=t("GAX2").default;n.exports=(n,a,t)=>{const p=[];return function n(a,t,o){let l;(t=t||{}).indent=t.indent||"\t",o=o||"",l=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=n=>{if(void 0===t.inlineCharacterLimit)return n;const a=n.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:n.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),o).replace(new RegExp(l.indent,"g"),o+t.indent)};if(-1!==p.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||e(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";p.push(a);const e="["+l.newLine+a.map((e,s)=>{const c=a.length-1===s?l.newLine:","+l.newLineOrSpace;let p=n(e,t,o+t.indent);return t.transform&&(p=t.transform(a,s,p)),l.indent+p+c}).join("")+l.pad+"]";return p.pop(),i(e)}if(s(a)){let e=Object.keys(a).concat(c(a));if(t.filter&&(e=e.filter(n=>t.filter(a,n))),0===e.length)return"{}";p.push(a);const s="{"+l.newLine+e.map((s,c)=>{const p=e.length-1===c?l.newLine:","+l.newLineOrSpace,i="symbol"===typeof s,r=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=i||r?s:n(s,t);let d=n(a[s],t,o+t.indent);return t.transform&&(d=t.transform(a,s,d)),l.indent+String(u)+": "+d+p}).join("")+l.pad+"}";return p.pop(),i(s)}return a=String(a).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(n,a,t)}},GAX2:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=n=>Object.getOwnPropertySymbols(n).filter(a=>Object.prototype.propertyIsEnumerable.call(n,a))},Y9Rh:function(n,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var e=t("wx14"),s=t("Ff2n"),c=t("q1tI"),p=t.n(c),o=t("7ljp"),l=t("YFqc"),i=t.n(l),r=t("tc9R"),u=t("pOT7"),d=t("vRWG"),g=t("I6Nb"),m=t("iWgA"),b=t.n(m),f=t("8C7G"),k=t("wH44"),v=(p.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:b()},meta:{title:"Align Self",description:"\u7528\u4e8e\u63a7\u5236\u5355\u4e2a flex \u6216\u7f51\u683c\u9879\u5982\u4f55\u6cbf\u5176\u5bb9\u5668\u7684\u4ea4\u53c9\u8f74\u5b9a\u4f4d\u7684\u529f\u80fd\u7c7b\u3002"},tableOfContents:[{title:"Auto",slug:"auto",children:[]},{title:"Start",slug:"start",children:[]},{title:"Center",slug:"center",children:[]},{title:"End",slug:"end",children:[]},{title:"Stretch",slug:"stretch",children:[]},{title:"\u54cd\u5e94\u5f0f",slug:"",children:[]},{title:"\u5b9a\u5236",slug:"-1",children:[{title:"\u53d8\u4f53",slug:"-2"},{title:"\u7981\u7528",slug:"-3"}]}]}),O=g.ContentsLayout;function j(n){var{components:a}=n,t=Object(s.a)(n,["components"]);return Object(o.a)(O,Object(e.a)({},v,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"auto",toc:!0},"Auto"),Object(o.a)("p",null,"\u4f7f\u7528 ",Object(o.a)("inlineCode",{parentName:"p"},"self-auto")," \u6839\u636e\u5bb9\u5668\u7684 ",Object(o.a)("inlineCode",{parentName:"p"},"align-items")," \u5c5e\u6027\u7684\u503c\u6765\u5bf9\u9f50\u4e00\u4e2a\u9879\u76ee\uff1a")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-emerald-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-auto flex-1 rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center">2</div>\n    <div class="flex-1 rounded-md bg-emerald-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-auto</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"start",toc:!0},"Start"),Object(o.a)("p",null,"\u4f7f\u7528 ",Object(o.a)("inlineCode",{parentName:"p"},"self-start")," \u5c06\u4e00\u4e2a\u9879\u76ee\u5bf9\u9f50\u5230\u5bb9\u5668\u4ea4\u53c9\u8f74\u7684\u8d77\u70b9\uff0c\u65e0\u89c6\u5bb9\u5668\u7684 ",Object(o.a)("inlineCode",{parentName:"p"},"align-items")," \u503c\uff1a")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-amber-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-start flex-1 rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="flex-1 rounded-md bg-amber-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-start</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"amber",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"center",toc:!0},"Center"),Object(o.a)("p",null,"\u4f7f\u7528 ",Object(o.a)("inlineCode",{parentName:"p"},"self-center")," \u6cbf\u7740\u5bb9\u5668\u7684\u4ea4\u53c9\u8f74\u4e2d\u5fc3\u5bf9\u9f50\u4e00\u4e2a\u9879\u76ee\uff0c\u65e0\u89c6\u5bb9\u5668\u7684 ",Object(o.a)("inlineCode",{parentName:"p"},"align-items")," \u503c\uff1a")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-purple-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-center flex-1 rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="flex-1 rounded-md bg-purple-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-center</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"end",toc:!0},"End"),Object(o.a)("p",null,"\u4f7f\u7528 ",Object(o.a)("inlineCode",{parentName:"p"},"self-end")," \u5c06\u4e00\u4e2a\u9879\u76ee\u5bf9\u9f50\u5230\u5bb9\u5668\u7684\u4ea4\u53c9\u8f74\u672b\u7aef\uff0c\u65e0\u89c6\u5bb9\u5668\u7684 ",Object(o.a)("inlineCode",{parentName:"p"},"align-items")," \u503c\uff1a")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-rose-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-end flex-1 rounded-md bg-rose-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="flex-1 rounded-md bg-rose-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-end</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"rose",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"stretch",toc:!0},"Stretch"),Object(o.a)("p",null,"\u4f7f\u7528 ",Object(o.a)("inlineCode",{parentName:"p"},"self-stretch")," \u6765\u62c9\u4f38\u4e00\u4e2a\u9879\u76ee\u4ee5\u586b\u5145\u5bb9\u5668\u7684\u6a2a\u8f74\uff0c\u65e0\u89c6\u5bb9\u5668\u7684 ",Object(o.a)("inlineCode",{parentName:"p"},"align-items")," \u503c\uff1a")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-fuchsia-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-stretch flex-1 rounded-md bg-fuchsia-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="flex-1 rounded-md bg-fuchsia-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-stretch</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"fuchsia",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"",toc:!0},"\u54cd\u5e94\u5f0f"),Object(o.a)("p",null,"\u8981\u5728\u7279\u5b9a\u7684\u65ad\u70b9\u5904\u63a7\u5236 flex \u9879\u76ee\u7684\u5bf9\u9f50\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55\u73b0\u6709\u7684\u529f\u80fd\u7c7b\u524d\u6dfb\u52a0 ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," \u524d\u7f00\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 ",Object(o.a)("inlineCode",{parentName:"p"},"md:self-end")," \u6765\u4ec5\u5728\u4e2d\u7b49\u5c3a\u5bf8\u53ca\u4ee5\u4e0a\u7684\u5c4f\u5e55\u5e94\u7528 ",Object(o.a)("inlineCode",{parentName:"p"},"self-end")," \u529f\u80fd\u3002"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(e.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(e.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"'),"items-stretch ...",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"'),"self-auto ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:self-end")," ...",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n  ",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"\u5173\u4e8e Tailwind \u7684\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u529f\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"\u54cd\u5e94\u5f0f\u8bbe\u8ba1"))," \u6587\u6863\u3002"),Object(o.a)(r.a,{level:2,id:"-1",toc:!0},"\u5b9a\u5236"),Object(o.a)(r.a,{level:3,id:"-2",toc:!0},"\u53d8\u4f53")),Object(o.a)(f.a,{plugin:"alignSelf",name:"align-self",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"-3",toc:!0},"\u7981\u7528")),Object(o.a)(k.a,{plugin:"alignSelf",name:"align-self",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=v},Zb5r:function(n,a,t){"use strict";function e(n){return n.reduce((a,t,e)=>0===e?t:e===n.length-1?"".concat(a," and ").concat(t):"".concat(a,", ").concat(t),"")}t.d(a,"a",(function(){return e}))},ap0H:function(n,a,t){"use strict";t.d(a,"a",(function(){return l}));var e=t("q1tI"),s=t.n(e),c=t("8Kt/"),p=t.n(c),o=s.a.createElement;function l(n){var{suffix:a,children:t}=n,e=t+(a?" - ".concat(a):"");return o(p.a,null,o("title",{key:"title"},e),o("meta",{key:"twitter:title",name:"twitter:title",content:e}),o("meta",{key:"og:title",property:"og:title",content:e}))}},iWgA:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:n,variants:a}){n({".self-auto":{"align-self":"auto"},".self-start":{"align-self":"flex-start"},".self-end":{"align-self":"flex-end"},".self-center":{"align-self":"center"},".self-stretch":{"align-self":"stretch"}},a("alignSelf"))}}},"p+I8":function(n,a,t){"use strict";n.exports=function(n){var a=typeof n;return null!==n&&("object"===a||"function"===a)}},pOT7:function(n,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return f}));var e=t("wx14"),s=t("q1tI"),c=t.n(s),p=t("iuhU"),o=t("ZMKu"),l=c.a.createElement,i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},r={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(n){var a=Object(s.useRef)(),{0:t,1:c}=Object(s.useState)(!1),{0:p,1:o}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(t){var n=new window.ResizeObserver(e);return e(),n.observe(a.current.contentDocument.body),()=>{n.disconnect()}}function e(){o({height:a.current.contentDocument.body.scrollHeight})}},[t]),l("iframe",Object(e.a)({},n,{ref:a,onLoad:()=>c(!0),style:p}))}function m(n){var{color:a,snippet:t}=n;return l("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",i[a],{"bg-gray-800":!i[a]})},l("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[a]})},l("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function b(n){var{preview:a,src:t,snippet:e,previewClassName:s,color:c="gray"}=n;return l("div",{className:"relative overflow-hidden mb-8"},a?l("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",r[c],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):l(g,{src:t,className:Object(p.a)("w-full rounded-t-xl",r[c])}),l(m,{color:c,snippet:e}))}function f(n){var{preview:a,src:t,previewClassName:e,snippet:c,color:i="gray",min:b=!1}=n,f=Object(s.useRef)(),k=Object(o.h)(0),v=Object(s.useRef)(),{0:O,1:j}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var n=new window.ResizeObserver(()=>{k.set(0)});return n.observe(f.current),()=>{n.disconnect()}},[]),l("div",{className:"relative mb-8"},l("div",{ref:f,className:"relative rounded-t-xl ".concat(u[i])},l("div",{className:b?"md:w-88":void 0},l(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(k,n=>-n)}},a?l("div",{className:Object(p.a)("rounded-t-xl",e,r[i],{"p-10":!e}),dangerouslySetInnerHTML:{__html:a}}):l(g,{src:t,className:Object(p.a)("w-full rounded-t-xl",r[i],{"pointer-events-none":O})}))),l("div",{ref:v,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},l(o.d.div,{drag:"x",_dragX:k,dragMomentum:!1,dragElastic:0,dragConstraints:v,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(b?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:k},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),j(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),j(!1)}},l("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},l("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[i]),style:{width:"0.4375rem"}},l("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),l(m,{color:i,snippet:c}))}},vRWG:function(n,a,t){"use strict";t.r(a),t.d(a,"DocumentationLayout",(function(){return g}));var e=t("wx14"),s=t("q1tI"),c=t.n(s),p=t("ekQu"),o=t("8Kt/"),l=t.n(o),i=t("nOHt"),r=t("ap0H"),u=t("1Q1k"),d=c.a.createElement;function g(n){var a=Object(i.useRouter)();return d(c.a.Fragment,null,d(r.a,{suffix:"/"===a.pathname?void 0:"Tailwind CSS"},n.layoutProps.meta.metaTitle||n.layoutProps.meta.title),d(l.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/tailwindcss/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(p.b,Object(e.a)({nav:u.a},n)))}},wH44:function(n,a,t){"use strict";t.d(a,"a",(function(){return d}));var e=t("rePB"),s=t("q1tI"),c=t.n(s),p=t("AOjV"),o=t("AI3G"),l=t("Zb5r"),i=c.a.createElement;function r(n,a){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),t.push.apply(t,e)}return t}function u(n){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){Object(e.a)(n,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))}))}return n}function d(n){var{plugin:a,name:t}=n,e=Object(o.a)(a);return t=t||a.replace(/([a-z])([A-Z])/g,(n,a,t)=>"".concat(a," ").concat(t.toLowerCase())),i("div",{className:"prose"},i("p",null,"\u5982\u679c\u60a8\u4e0d\u6253\u7b97\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u4f7f\u7528 ",t," \u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u7684"," ",i("code",null,"corePlugins")," \u90e8\u5206\u5c06"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(e.map(n=>"<code>".concat(n,"</code>")))}})," "," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",i("code",null,"false")," \u6765\u5b8c\u5168\u7981\u7528\u5b83\u4eec\uff1a"),i(p.a,{path:"corePlugins",before:"...",add:e.reduce((n,a)=>u(u({},n),{},{[a]:!1}),{})}))}}},[["2c5R",0,2,6,1,3,4,5,7]]]);