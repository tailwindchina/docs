(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[68],{"5xSE":function(e,t,a){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),s=a.n(n),i=a("98BF"),c=a("Zb5r"),r=a("AOjV"),l=s.a.createElement;function u(e){var{plugin:t,name:a}=e,n=i.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(e,t,a)=>"".concat(t," ").concat(a.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!n.includes(e)).slice(0,2),u="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(a," \u529f\u80fd\u7c7b\uff0c").concat(n.length?"\u53ea\u751f\u6210 ".concat(Object(c.a)(n).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:u}}),l("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u60a8\u7684"," ",l("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",l("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",l("code",null,t)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",a," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),l("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",n.length>0?"\u4e5f":"","\u5c06\u751f\u6210"," ",Object(c.a)(s)," \u53d8\u4f53:"),l(r.a,{path:"variants.extend",before:"...",add:{[t]:s}}))}},AOjV:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),s=a.n(n),i=(a("Btb4"),a("AI3G")),c=a("iuhU"),r=s.a.createElement;function l(e){var{value:t}=e;return"string"===typeof t?r("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?r(s.a.Fragment,null,r("span",{className:"token punctuation"},"["),t.map((e,a)=>r(n.Fragment,{key:a},r(l,{value:e}),a===t.length-1?null:r("span",{className:"token punctuation"},", "))),r("span",{className:"token punctuation"},"]")):"boolean"===typeof t?r("span",{className:"token boolean"},t.toString()):t.toString()}function u(e){var{edits:t,indent:a="",type:s="inserted"}=e;return r("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(t).map((e,i)=>{return r(n.Fragment,{key:i},r("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(u=e)?u:"'".concat(u,"'"),r("span",{className:"token operator"},":")," ",r(l,{value:t[e]}),r("span",{className:"token punctuation"},","),"\n");var u}))}function o(e){var{path:t,add:a,remove:s,before:c,after:l}=e;return t="string"===typeof t?t.split("."):t,r("div",{className:"prose"},r("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  ",r("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",r("span",{className:"token punctuation"},"."),r("span",{className:"token property-access"},"exports")," ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token punctuation"},"{"),"\n",t.map((e,t)=>r(n.Fragment,{key:t},"  ","  ".repeat(t+1),e,r("span",{className:"token operator"},":")," ",r("span",{className:"token punctuation"},"{"),"\n")),c&&Object(i.a)(c).map((e,a)=>r(n.Fragment,{key:a},"  ".repeat(t.length+2),r("span",{className:"token comment"},"// ".concat(e)),"\n"))),s&&r(u,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&r(u,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),r("span",{className:"token unchanged"},l&&Object(i.a)(l).map(e=>"".concat("  ".repeat(t.length+2)).concat(e,"\n")),t.map((e,a)=>r(n.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")),"  }")))))}},Btb4:function(e,t,a){"use strict";const n=a("5xSE"),s=a("p+I8"),i=a("GAX2").default;e.exports=(e,t,a)=>{const c=[];return function e(t,a,r){let l;(a=a||{}).indent=a.indent||"\t",r=r||"",l=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const u=e=>{if(void 0===a.inlineCharacterLimit)return e;const t=e.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:e.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),r).replace(new RegExp(l.indent,"g"),r+a.indent)};if(-1!==c.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||n(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";c.push(t);const n="["+l.newLine+t.map((n,s)=>{const i=t.length-1===s?l.newLine:","+l.newLineOrSpace;let c=e(n,a,r+a.indent);return a.transform&&(c=a.transform(t,s,c)),l.indent+c+i}).join("")+l.pad+"]";return c.pop(),u(n)}if(s(t)){let n=Object.keys(t).concat(i(t));if(a.filter&&(n=n.filter(e=>a.filter(t,e))),0===n.length)return"{}";c.push(t);const s="{"+l.newLine+n.map((s,i)=>{const c=n.length-1===i?l.newLine:","+l.newLineOrSpace,u="symbol"===typeof s,o=!u&&/^[a-z$_][a-z$_0-9]*$/i.test(s),p=u||o?s:e(s,a);let m=e(t[s],a,r+a.indent);return a.transform&&(m=a.transform(t,s,m)),l.indent+String(p)+": "+m+c}).join("")+l.pad+"}";return c.pop(),u(s)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,a)}},EmDB:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/float",function(){return a("Mh21")}])},GAX2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},Mh21:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a("wx14"),s=a("Ff2n"),i=a("q1tI"),c=a.n(i),r=a("7ljp"),l=a("YFqc"),u=a.n(l),o=a("tc9R"),p=a("pOT7"),m=a("vRWG"),d=a("I6Nb"),g=a("mnQy"),b=a.n(g),f=a("8C7G"),v=a("wH44"),h=(c.a.createElement,{Layout:m.DocumentationLayout,classes:{plugin:b()},meta:{title:"\u6d6e\u52a8",description:"\u63a7\u5236\u5143\u7d20\u5468\u56f4\u5185\u5bb9\u6d6e\u52a8",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"\u5411\u53f3\u6d6e\u52a8",slug:"",children:[]},{title:"\u5411\u5de6\u6d6e\u52a8",slug:"-1",children:[]},{title:"\u4e0d\u6d6e\u52a8",slug:"-2",children:[]},{title:"\u54cd\u5e94\u5f0f",slug:"-3",children:[]},{title:"\u5b9a\u5236",slug:"-4",children:[{title:"\u53d8\u4f53",slug:"-5"},{title:"\u7981\u7528",slug:"-6"}]}]}),O=d.ContentsLayout;function j(e){var{components:t}=e,a=Object(s.a)(e,["components"]);return Object(r.a)(O,Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(o.a,{level:2,id:"",toc:!0},"\u5411\u53f3\u6d6e\u52a8"),Object(r.a)("p",null,"\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"float-right")," \u5c06\u4e00\u4e2a\u5143\u7d20\u6d6e\u52a8\u5230\u5176\u5bb9\u5668\u7684\u53f3\u8fb9\u3002")),Object(r.a)(p.a,{preview:'\n  <img class="float-right mt-2 mr-0 mb-4 ml-10 h-32" src="/img/placeholder-emerald.svg">\n  <p class="text-emerald-500 font-flow text-justify font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">float-right</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>path/to/image.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(o.a,{level:2,id:"-1",toc:!0},"\u5411\u5de6\u6d6e\u52a8"),Object(r.a)("p",null,"\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"float-left")," \u5c06\u4e00\u4e2a\u5143\u7d20\u6d6e\u52a8\u5230\u5176\u5bb9\u5668\u7684\u5de6\u8fb9\u3002")),Object(r.a)(p.a,{preview:'\n  <img class="float-left mt-2 ml-0 mb-4 mr-10 h-32" src="/img/placeholder-indigo.svg">\n  <p class="text-indigo-500 font-flow text-justify font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">float-left</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>path/to/image.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(o.a,{level:2,id:"-2",toc:!0},"\u4e0d\u6d6e\u52a8"),Object(r.a)("p",null,"\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"float-none")," \u91cd\u7f6e\u4efb\u4f55\u5e94\u7528\u4e8e\u5143\u7d20\u7684\u6d6e\u52a8\u3002\u8fd9\u662f float \u5c5e\u6027\u7684\u9ed8\u8ba4\u503c\u3002")),Object(r.a)(p.a,{preview:'\n  <img class="float-none mb-8 h-32" src="/img/placeholder-purple.svg">\n  <p class="text-purple-500 font-flow text-justify font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">float-none</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>path/to/image.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(o.a,{level:2,id:"-3",toc:!0},"\u54cd\u5e94\u5f0f"),Object(r.a)("p",null,"\u8981\u5728\u7279\u5b9a\u7684\u65ad\u70b9\u5904\u63a7\u5236\u5143\u7d20\u7684\u6d6e\u52a8\uff0c\u8bf7\u5728\u4efb\u4f55\u73b0\u6709\u7684\u6d6e\u52a8\u529f\u80fd\u7c7b\u4e2d\u524d\u6dfb\u52a0 ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," \u524d\u7f00\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"md:float-left"),"  \u6765\u7ed9\u4e2d\u7b49\u5927\u5c0f\u7684\u5c4f\u5e55\u53ca\u4ee5\u4e0a\u5e94\u7528 ",Object(r.a)("inlineCode",{parentName:"p"},"float-left")," \u529f\u80fd\u3002"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"bg-gray-200 p-4",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"float-right ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:float-left")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"\u5173\u4e8e Tailwind \u7684\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u529f\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",Object(r.a)(u.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"\u54cd\u5e94\u5f0f\u8bbe\u8ba1"))," \u6587\u6863\u3002"),Object(r.a)(o.a,{level:2,id:"-4",toc:!0},"\u5b9a\u5236"),Object(r.a)(o.a,{level:3,id:"-5",toc:!0},"\u53d8\u4f53")),Object(r.a)(f.a,{plugin:"float",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(o.a,{level:3,id:"-6",toc:!0},"\u7981\u7528")),Object(r.a)(v.a,{plugin:"float",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=h},Zb5r:function(e,t,a){"use strict";function n(e){return e.reduce((t,a,n)=>0===n?a:n===e.length-1?"".concat(t," and ").concat(a):"".concat(t,", ").concat(a),"")}a.d(t,"a",(function(){return n}))},ap0H:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),s=a.n(n),i=a("8Kt/"),c=a.n(i),r=s.a.createElement;function l(e){var{suffix:t,children:a}=e,n=a+(t?" - ".concat(t):"");return r(c.a,null,r("title",{key:"title"},n),r("meta",{key:"twitter:title",name:"twitter:title",content:n}),r("meta",{key:"og:title",property:"og:title",content:n}))}},mnQy:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".float-right":{float:"right"},".float-left":{float:"left"},".float-none":{float:"none"}},t("float"))}}},"p+I8":function(e,t,a){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return f}));var n=a("wx14"),s=a("q1tI"),i=a.n(s),c=a("iuhU"),r=a("ZMKu"),l=i.a.createElement,u={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},o={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},p={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},m={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function d(e){var t=Object(s.useRef)(),{0:a,1:i}=Object(s.useState)(!1),{0:c,1:r}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(a){var e=new window.ResizeObserver(n);return n(),e.observe(t.current.contentDocument.body),()=>{e.disconnect()}}function n(){r({height:t.current.contentDocument.body.scrollHeight})}},[a]),l("iframe",Object(n.a)({},e,{ref:t,onLoad:()=>i(!0),style:c}))}function g(e){var{color:t,snippet:a}=e;return l("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",u[t],{"bg-gray-800":!u[t]})},l("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":u[t]})},l("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function b(e){var{preview:t,src:a,snippet:n,previewClassName:s,color:i="gray"}=e;return l("div",{className:"relative overflow-hidden mb-8"},t?l("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",o[i],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):l(d,{src:a,className:Object(c.a)("w-full rounded-t-xl",o[i])}),l(g,{color:i,snippet:n}))}function f(e){var{preview:t,src:a,previewClassName:n,snippet:i,color:u="gray",min:b=!1}=e,f=Object(s.useRef)(),v=Object(r.h)(0),h=Object(s.useRef)(),{0:O,1:j}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{v.set(0)});return e.observe(f.current),()=>{e.disconnect()}},[]),l("div",{className:"relative mb-8"},l("div",{ref:f,className:"relative rounded-t-xl ".concat(p[u])},l("div",{className:b?"md:w-88":void 0},l(r.d.div,{className:"relative",style:{marginRight:Object(r.i)(v,e=>-e)}},t?l("div",{className:Object(c.a)("rounded-t-xl",n,o[u],{"p-10":!n}),dangerouslySetInnerHTML:{__html:t}}):l(d,{src:a,className:Object(c.a)("w-full rounded-t-xl",o[u],{"pointer-events-none":O})}))),l("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},l(r.d.div,{drag:"x",_dragX:v,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(b?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:v},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),j(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),j(!1)}},l("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},l("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(m[u]),style:{width:"0.4375rem"}},l("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),l(g,{color:u,snippet:i}))}},vRWG:function(e,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return d}));var n=a("wx14"),s=a("q1tI"),i=a.n(s),c=a("ekQu"),r=a("8Kt/"),l=a.n(r),u=a("nOHt"),o=a("ap0H"),p=a("1Q1k"),m=i.a.createElement;function d(e){var t=Object(u.useRouter)();return m(i.a.Fragment,null,m(o.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),m(l.a,null,m("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),m("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/tailwindcss/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),m(c.b,Object(n.a)({nav:p.a},e)))}},wH44:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("rePB"),s=a("q1tI"),i=a.n(s),c=a("AOjV"),r=a("AI3G"),l=a("Zb5r"),u=i.a.createElement;function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e){var{plugin:t,name:a}=e,n=Object(r.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(e,t,a)=>"".concat(t," ").concat(a.toLowerCase())),u("div",{className:"prose"},u("p",null,"\u5982\u679c\u60a8\u4e0d\u6253\u7b97\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u4f7f\u7528 ",a," \u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u7684"," ",u("code",null,"corePlugins")," \u90e8\u5206\u5c06"," ",u("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(n.map(e=>"<code>".concat(e,"</code>")))}})," "," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",u("code",null,"false")," \u6765\u5b8c\u5168\u7981\u7528\u5b83\u4eec\uff1a"),u(c.a,{path:"corePlugins",before:"...",add:n.reduce((e,t)=>p(p({},e),{},{[t]:!1}),{})}))}}},[["EmDB",0,2,6,1,3,4,5,7]]]);