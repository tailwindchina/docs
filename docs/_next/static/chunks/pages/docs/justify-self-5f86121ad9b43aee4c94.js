_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[99],{"5xSE":function(t,e,n){"use strict";t.exports=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)}},"8C7G":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var s=n("rePB"),a=n("q1tI"),i=n.n(a),r=n("98BF"),c=n("Zb5r"),o=n("AOjV"),p=i.a.createElement;function l(t){var e=t.plugin,n=t.name,a=r.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,(function(t,e,n){return"".concat(e," ").concat(n.toLowerCase())}));var i=["responsive","hover","focus","active","group-hover"].filter((function(t){return!a.includes(t)})).slice(0,2),l="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(n," \u529f\u80fd\u7c7b\uff0c").concat(a.length?"\u53ea\u751f\u6210 ".concat(Object(c.a)(a).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:l}}),p("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u60a8\u7684"," ",p("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",p("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",p("code",null,e)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",n," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),p("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",a.length>0?"\u4e5f":"","\u5c06\u751f\u6210"," ",Object(c.a)(i)," \u53d8\u4f53:"),p(o.a,{path:"variants.extend",before:"...",add:Object(s.a)({},e,i)}))}},AOjV:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var s=n("q1tI"),a=n.n(s),i=(n("Btb4"),n("AI3G")),r=n("iuhU"),c=a.a.createElement;function o(t){var e=t.value;return"string"===typeof e?c("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?c(a.a.Fragment,null,c("span",{className:"token punctuation"},"["),e.map((function(t,n){return c(s.Fragment,{key:n},c(o,{value:t}),n===e.length-1?null:c("span",{className:"token punctuation"},", "))})),c("span",{className:"token punctuation"},"]")):"boolean"===typeof e?c("span",{className:"token boolean"},e.toString()):e.toString()}function p(t){var e=t.edits,n=t.indent,a=void 0===n?"":n,i=t.type,p=void 0===i?"inserted":i;return c("span",{className:Object(r.a)("token",{"inserted-sign inserted":"inserted"===p,"deleted-sign deleted":"inserted"!==p})},Object.keys(e).map((function(t,n){return c(s.Fragment,{key:n},c("span",{className:Object(r.a)("token prefix",{inserted:"inserted"===p,deleted:"inserted"!==p})},"inserted"===p?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(i=t)?i:"'".concat(i,"'"),c("span",{className:"token operator"},":")," ",c(o,{value:e[t]}),c("span",{className:"token punctuation"},","),"\n");var i})))}function l(t){var e=t.path,n=t.add,a=t.remove,r=t.before,o=t.after;return e="string"===typeof e?e.split("."):e,c("div",{className:"prose"},c("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},c("pre",{className:"language-diff"},c("code",{className:"language-diff"},c("span",{className:"token unchanged"},"  ",c("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",c("span",{className:"token punctuation"},"."),c("span",{className:"token property-access"},"exports")," ",c("span",{className:"token operator"},"=")," ",c("span",{className:"token punctuation"},"{"),"\n",e.map((function(t,e){return c(s.Fragment,{key:e},"  ","  ".repeat(e+1),t,c("span",{className:"token operator"},":")," ",c("span",{className:"token punctuation"},"{"),"\n")})),r&&Object(i.a)(r).map((function(t,n){return c(s.Fragment,{key:n},"  ".repeat(e.length+2),c("span",{className:"token comment"},"// ".concat(t)),"\n")}))),a&&c(p,{edits:a,type:"deleted",indent:"  ".repeat(e.length+1)}),n&&c(p,{edits:n,type:"inserted",indent:"  ".repeat(e.length+1)}),c("span",{className:"token unchanged"},o&&Object(i.a)(o).map((function(t){return"".concat("  ".repeat(e.length+2)).concat(t,"\n")})),e.map((function(t,n){return c(s.Fragment,{key:n},"  ","  ".repeat(e.length-n),"}\n")})),"  }")))))}},Btb4:function(t,e,n){"use strict";const s=n("5xSE"),a=n("p+I8"),i=n("GAX2").default;t.exports=(t,e,n)=>{const r=[];return function t(e,n,c){let o;(n=n||{}).indent=n.indent||"\t",c=c||"",o=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=t=>{if(void 0===n.inlineCharacterLimit)return t;const e=t.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return e.length<=n.inlineCharacterLimit?e:t.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),"\n").replace(new RegExp(o.pad,"g"),c).replace(new RegExp(o.indent,"g"),c+n.indent)};if(-1!==r.indexOf(e))return'"[Circular]"';if(null===e||void 0===e||"number"===typeof e||"boolean"===typeof e||"function"===typeof e||"symbol"===typeof e||s(e))return String(e);if(e instanceof Date)return`new Date('${e.toISOString()}')`;if(Array.isArray(e)){if(0===e.length)return"[]";r.push(e);const s="["+o.newLine+e.map((s,a)=>{const i=e.length-1===a?o.newLine:","+o.newLineOrSpace;let r=t(s,n,c+n.indent);return n.transform&&(r=n.transform(e,a,r)),o.indent+r+i}).join("")+o.pad+"]";return r.pop(),p(s)}if(a(e)){let s=Object.keys(e).concat(i(e));if(n.filter&&(s=s.filter(t=>n.filter(e,t))),0===s.length)return"{}";r.push(e);const a="{"+o.newLine+s.map((a,i)=>{const r=s.length-1===i?o.newLine:","+o.newLineOrSpace,p="symbol"===typeof a,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(a),u=p||l?a:t(a,n);let d=t(e[a],n,c+n.indent);return n.transform&&(d=n.transform(e,a,d)),o.indent+String(u)+": "+d+r}).join("")+o.pad+"}";return r.pop(),p(a)}return e=String(e).replace(/[\r\n]/g,t=>"\n"===t?"\\n":"\\r"),!1===n.singleQuotes?`"${e=e.replace(/"/g,'\\"')}"`:`'${e=e.replace(/\\?'/g,"\\'")}'`}(t,e,n)}},GAX2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=t=>Object.getOwnPropertySymbols(t).filter(e=>Object.prototype.propertyIsEnumerable.call(t,e))},"GR+v":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:t,variants:e}){t({".justify-self-auto":{"justify-self":"auto"},".justify-self-start":{"justify-self":"start"},".justify-self-end":{"justify-self":"end"},".justify-self-center":{"justify-self":"center"},".justify-self-stretch":{"justify-self":"stretch"}},e("justifySelf"))}}},"Ju+c":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var s=n("wx14"),a=n("Ff2n"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),o=n("YFqc"),p=n.n(o),l=n("tc9R"),u=n("pOT7"),d=n("vRWG"),f=n("I6Nb"),m=n("GR+v"),g=n.n(m),b=n("8C7G"),x=n("wH44"),v=(r.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:g.a},meta:{title:"Justify Self",description:"\u7528\u4e8e\u63a7\u5236\u5355\u4e2a\u7f51\u683c\u9879\u5982\u4f55\u6cbf\u5176\u5185\u8054\u8f74\u5bf9\u9f50\u7684\u529f\u80fd\u7c7b\u3002"},tableOfContents:[{title:"Auto",slug:"auto",children:[]},{title:"Start",slug:"start",children:[]},{title:"Center",slug:"center",children:[]},{title:"End",slug:"end",children:[]},{title:"Stretch",slug:"stretch",children:[]},{title:"\u54cd\u5e94\u5f0f",slug:"",children:[]},{title:"\u5b9a\u5236",slug:"-1",children:[{title:"\u53d8\u4f53",slug:"-2"},{title:"\u7981\u7528",slug:"-3"}]}]}),k=f.ContentsLayout;function y(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(c.a)(k,Object(s.a)({},v,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"auto",toc:!0},"Auto"),Object(c.a)("p",null,"\u4f7f\u7528 ",Object(c.a)("inlineCode",{parentName:"p"},"justify-self-auto")," \u6839\u636e\u7f51\u683c\u7684 ",Object(c.a)("inlineCode",{parentName:"p"},"justify-items")," \u5c5e\u6027\u7684\u503c\u6765\u5bf9\u9f50\u4e00\u4e2a\u9879\u76ee\uff1a")),Object(c.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32">\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-purple-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="justify-self-auto text-white text-2xl font-extrabold bg-purple-500 rounded-md flex justify-center items-center px-4 py-2">1</div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-purple-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-purple-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-purple-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-purple-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid justify-items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">justify-self-auto</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"purple",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"start",toc:!0},"Start"),Object(c.a)("p",null,"\u4f7f\u7528 ",Object(c.a)("inlineCode",{parentName:"p"},"justify-self-start")," \u5c06\u7f51\u683c\u9879\u6cbf\u5185\u8054\u8f74\u8d77\u70b9\u5bf9\u9f50\uff1a")),Object(c.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32">\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-emerald-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="justify-self-start text-white text-2xl font-extrabold bg-emerald-500 rounded-md flex justify-center items-center px-4 py-2">1</div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-emerald-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-emerald-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-emerald-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-emerald-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid justify-items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">justify-self-start</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"emerald",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"center",toc:!0},"Center"),Object(c.a)("p",null,"\u4f7f\u7528 ",Object(c.a)("inlineCode",{parentName:"p"},"justify-self-center")," \u5c06\u7f51\u7edc\u9879\u6cbf\u5176\u5185\u8054\u8f74\u7684\u4e2d\u5fc3\u5bf9\u9f50\u3002")),Object(c.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32">\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-amber-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="justify-self-center text-white text-2xl font-extrabold bg-amber-500 rounded-md flex justify-center items-center px-4 py-2">1</div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-amber-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-amber-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-amber-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-amber-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid justify-items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">justify-self-center</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"amber",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"end",toc:!0},"End"),Object(c.a)("p",null,"\u4f7f\u7528 ",Object(c.a)("inlineCode",{parentName:"p"},"justify-self-end")," \u5c06\u7f51\u683c\u9879\u6cbf\u5185\u8054\u8f74\u7ec8\u70b9\u5bf9\u9f50\uff1a")),Object(c.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32">\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-rose-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="justify-self-end text-white text-2xl font-extrabold bg-rose-500 rounded-md flex justify-center items-center px-4 py-2">1</div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-rose-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-rose-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-rose-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-rose-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid justify-items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">justify-self-end</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"rose",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"stretch",toc:!0},"Stretch"),Object(c.a)("p",null,"\u4f7f\u7528 ",Object(c.a)("inlineCode",{parentName:"p"},"justify-self-stretch")," \u6765\u62c9\u4f38\u4e00\u4e2a\u7f51\u683c\u9879\uff0c\u4ee5\u586b\u5145\u5176\u5185\u8054\u8f74\u4e0a\u7684\u7f51\u683c\u533a\u57df\u3002")),Object(c.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-4 justify-items-start auto-rows-fr h-32">\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="justify-self-stretch text-white text-2xl font-extrabold bg-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2">1</div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid justify-items-start ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">justify-self-stretch</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"fuchsia",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"",toc:!0},"\u54cd\u5e94\u5f0f"),Object(c.a)("p",null,"\u8981\u5728\u7279\u5b9a\u7684\u65ad\u70b9\u5904\u63a7\u5236\u7f51\u683c\u9879\u5728\u5176\u7f51\u683c\u533a\u57df\u5185\u7684\u5bf9\u9f50\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55\u73b0\u6709\u7684\u529f\u80fd\u7c7b\u524d\u6dfb\u52a0 ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," \u524d\u7f00\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 ",Object(c.a)("inlineCode",{parentName:"p"},"md:justify-self-end")," \u6765\u4ec5\u5728\u4e2d\u7b49\u5c3a\u5bf8\u53ca\u4ee5\u4e0a\u7684\u5c4f\u5e55\u5e94\u7528 ",Object(c.a)("inlineCode",{parentName:"p"},"justify-self-end")," \u529f\u80fd\u3002"),Object(c.a)("p",null,"\u5173\u4e8e Tailwind \u7684\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u529f\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",Object(c.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"\u54cd\u5e94\u5f0f\u8bbe\u8ba1"))," \u6587\u6863\u3002"),Object(c.a)(l.a,{level:2,id:"-1",toc:!0},"\u5b9a\u5236"),Object(c.a)(l.a,{level:3,id:"-2",toc:!0},"\u53d8\u4f53")),Object(c.a)(b.a,{plugin:"justifySelf",name:"justify-self",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:3,id:"-3",toc:!0},"\u7981\u7528")),Object(c.a)(x.a,{plugin:"justifySelf",name:"justify-self",mdxType:"Disabling"}))}y.isMDXComponent=!0,y.layoutProps=v},Zb5r:function(t,e,n){"use strict";function s(t){return t.reduce((function(e,n,s){return 0===s?n:s===t.length-1?"".concat(e," and ").concat(n):"".concat(e,", ").concat(n)}),"")}n.d(e,"a",(function(){return s}))},ap0H:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var s=n("q1tI"),a=n.n(s),i=n("8Kt/"),r=n.n(i),c=a.a.createElement;function o(t){var e=t.suffix,n=t.children+(e?" - ".concat(e):"");return c(r.a,null,c("title",{key:"title"},n),c("meta",{key:"twitter:title",name:"twitter:title",content:n}),c("meta",{key:"og:title",property:"og:title",content:n}))}},fEWL:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/justify-self",function(){return n("Ju+c")}])},"p+I8":function(t,e,n){"use strict";t.exports=function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}},pOT7:function(t,e,n){"use strict";n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return b}));var s=n("wx14"),a=n("q1tI"),i=n.n(a),r=n("iuhU"),c=n("ZMKu"),o=i.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function f(t){var e=Object(a.useRef)(),n=Object(a.useState)(!1),i=n[0],r=n[1],c=Object(a.useState)({}),p=c[0],l=c[1];return Object(a.useEffect)((function(){if(i){var t=new window.ResizeObserver(n);return n(),t.observe(e.current.contentDocument.body),function(){t.disconnect()}}function n(){l({height:e.current.contentDocument.body.scrollHeight})}}),[i]),o("iframe",Object(s.a)({},t,{ref:e,onLoad:function(){return r(!0)},style:p}))}function m(t){var e=t.color,n=t.snippet;return o("div",{className:Object(r.a)("overflow-hidden rounded-b-xl",p[e],{"bg-gray-800":!p[e]})},o("pre",{className:Object(r.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[e]})},o("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function g(t){var e=t.preview,n=t.src,s=t.snippet,a=t.previewClassName,i=t.color,c=void 0===i?"gray":i;return o("div",{className:"relative overflow-hidden mb-8"},e?o("div",{className:Object(r.a)("rounded-t-xl overflow-hidden",l[c],a,{"p-10":!a}),dangerouslySetInnerHTML:{__html:e}}):o(f,{src:n,className:Object(r.a)("w-full rounded-t-xl",l[c])}),o(m,{color:c,snippet:s}))}function b(t){var e=t.preview,n=t.src,s=t.previewClassName,i=t.snippet,p=t.color,g=void 0===p?"gray":p,b=t.min,x=void 0!==b&&b,v=Object(a.useRef)(),k=Object(c.h)(0),y=Object(a.useRef)(),h=Object(a.useState)(!1),j=h[0],w=h[1];return Object(a.useEffect)((function(){var t=new window.ResizeObserver((function(){k.set(0)}));return t.observe(v.current),function(){t.disconnect()}}),[]),o("div",{className:"relative mb-8"},o("div",{ref:v,className:"relative rounded-t-xl ".concat(u[g])},o("div",{className:x?"md:w-88":void 0},o(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(k,(function(t){return-t}))}},e?o("div",{className:Object(r.a)("rounded-t-xl",s,l[g],{"p-10":!s}),dangerouslySetInnerHTML:{__html:e}}):o(f,{src:n,className:Object(r.a)("w-full rounded-t-xl",l[g],{"pointer-events-none":j})}))),o("div",{ref:y,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},o(c.d.div,{drag:"x",_dragX:k,dragMomentum:!1,dragElastic:0,dragConstraints:y,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(x?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:k},onDragStart:function(){document.body.classList.add("cursor-grabbing"),w(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),w(!1)}},o("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},o("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[g]),style:{width:"0.4375rem"}},o("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),o(m,{color:g,snippet:i}))}},vRWG:function(t,e,n){"use strict";n.r(e),n.d(e,"DocumentationLayout",(function(){return f}));var s=n("wx14"),a=n("q1tI"),i=n.n(a),r=n("ekQu"),c=n("8Kt/"),o=n.n(c),p=n("nOHt"),l=n("ap0H"),u=n("1Q1k"),d=i.a.createElement;function f(t){var e=Object(p.useRouter)();return d(i.a.Fragment,null,d(l.a,{suffix:"/"===e.pathname?void 0:"Tailwind CSS \u4e2d\u6587\u6587\u6863"},t.layoutProps.meta.metaTitle||t.layoutProps.meta.title),d(o.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(r.b,Object(s.a)({nav:u.a},t)))}},wH44:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var s=n("rePB"),a=n("q1tI"),i=n.n(a),r=n("AOjV"),c=n("AI3G"),o=n("Zb5r"),p=i.a.createElement;function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t){var e=t.plugin,n=t.name,a=Object(c.a)(e);return n=n||e.replace(/([a-z])([A-Z])/g,(function(t,e,n){return"".concat(e," ").concat(n.toLowerCase())})),p("div",{className:"prose"},p("p",null,"\u5982\u679c\u60a8\u4e0d\u6253\u7b97\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u4f7f\u7528 ",n," \u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u7684"," ",p("code",null,"corePlugins")," \u90e8\u5206\u5c06"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(o.a)(a.map((function(t){return"<code>".concat(t,"</code>")})))}})," "," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",p("code",null,"false")," \u6765\u5b8c\u5168\u7981\u7528\u5b83\u4eec\uff1a"),p(r.a,{path:"corePlugins",before:"...",add:a.reduce((function(t,e){return u(u({},t),{},Object(s.a)({},e,!1))}),{})}))}}},[["fEWL",0,2,6,1,3,4,5,7]]]);