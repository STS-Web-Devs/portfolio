(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[942],{2454:function(e,r,t){e.exports=t(9608)},1923:function(e,r,t){"use strict";var n=t(6086),l=t(2695),i=t(1247),a=t(7118),o=t(1051),s=["projectId","dataset","imageOptions"],u={imageOptions:{}};function c(e){return"block"===e._type&&e.listItem}e.exports=function(e,r,t,d){var f=n({},u,r),p=Array.isArray(f.blocks)?f.blocks:[f.blocks],h=a(p),m=i(h,f.listNestMode),y=o(t,f.serializers||{}),k=s.reduce((function(e,r){var t=f[r];return"undefined"!==typeof t&&(e[r]=t),e}),{});function v(r,t,n,i){return"list"===(a=r)._type&&a.listItem?function(r){var t=r.listItem,n=r.level,l=r._key,i=r.children.map(v);return e(y.list,{key:l,level:n,type:t,options:k},i)}(r):c(r)?function(r,t){var n=r._key,i=l(r).map(v);return e(y.listItem,{node:r,serializers:y,index:t,key:n,options:k},i)}(r,function(e,r){for(var t=0,n=0;n<r.length;n++){if(r[n]===e)return t;c(r[n])&&t++}return t}(r,n)):function(e){return"string"===typeof e||e.marks||"span"===e._type}(r)?d(r,y,t,{serializeNode:v}):function(r,t,n){var i=l(r).map((function(e,r,t){return v(e,r,t,!0)})),a={key:r._key||"block-".concat(t),node:r,isInline:n,serializers:y,options:k};return e(y.block,a,i)}(r,t,i);var a}var b=Boolean(f.renderContainerOnSingleChild),g=m.map(v);if(b||g.length>1){var z=f.className?{className:f.className}:{};return e(y.container,z,g)}return g[0]?g[0]:"function"===typeof y.empty?e(y.empty):y.empty}},2695:function(e){"use strict";var r=["strong","em","code","underline","strike-through"];function t(e,r,t){if(!e.marks||0===e.marks.length)return e.marks||[];var l=e.marks.reduce((function(e,n){e[n]=e[n]?e[n]+1:1;for(var l=r+1;l<t.length;l++){var i=t[l];if(!i.marks||!Array.isArray(i.marks)||-1===i.marks.indexOf(n))break;e[n]++}return e}),{}),i=n.bind(null,l);return e.marks.slice().sort(i)}function n(e,t,n){var l=e[t]||0,i=e[n]||0;if(l!==i)return i-l;var a=r.indexOf(t),o=r.indexOf(n);return a!==o?a-o:t<n?-1:t>n?1:0}e.exports=function(e){var r=e.children,n=e.markDefs;if(!r||!r.length)return[];var l=r.map(t),i={_type:"span",children:[]},a=[i];return r.forEach((function(e,r){var t=l[r];if(t){var i=1;if(a.length>1)for(;i<a.length;i++){var o=a[i].markKey,s=t.indexOf(o);if(-1===s)break;t.splice(s,1)}var u,c=function(e){for(var r=e.length-1;r>=0;r--){var t=e[r];if("span"===t._type&&t.children)return t}return}(a=a.slice(0,i));if(t.forEach((function(r){var t={_type:"span",_key:e._key,children:[],mark:n.find((function(e){return e._key===r}))||r,markKey:r};c.children.push(t),a.push(t),c=t})),"span"!==(u=e)._type||"string"!==typeof u.text||!Array.isArray(u.marks)&&"undefined"!==typeof u.marks)c.children=c.children.concat(e);else{for(var d=e.text.split("\n"),f=d.length;f-- >1;)d.splice(f,0,"\n");c.children=c.children.concat(d)}}else{a[a.length-1].children.push(e)}})),i.children}},7118:function(e,r,t){"use strict";var n=t(6086);function l(e){var r=0,t=e.length;if(0===t)return r;for(var n=0;n<t;n++)r=(r<<5)-r+e.charCodeAt(n),r&=r;return r}e.exports=function(e){return e.map((function(e){return e._key?e:n({_key:(r=e,l(JSON.stringify(r)).toString(36).replace(/[^A-Za-z0-9]/g,""))},e);var r}))}},1643:function(e,r,t){"use strict";var n=t(6456),l=t(6803),i=t(6086),a=encodeURIComponent,o="You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ".concat(n("block-content-image-materializing"));e.exports=function(e){var r=e.node,t=e.options,n=t.projectId,s=t.dataset,u=r.asset;if(!u)throw new Error("Image does not have required `asset` property");if(u.url)return u.url+function(e){var r=e.imageOptions,t=Object.keys(r);if(!t.length)return"";var n=t.map((function(e){return"".concat(a(e),"=").concat(a(r[e]))}));return"?".concat(n.join("&"))}(t);if(!n||!s)throw new Error(o);if(!u._ref)throw new Error("Invalid image reference in block, no `_ref` found on `asset`");return l(i({projectId:n,dataset:s},t.imageOptions||{})).image(r).toString()}},9608:function(e,r,t){"use strict";var n=t(8019),l=t(1923),i=t(1643),a=t(1051);e.exports={blocksToNodes:function(e,r,t,i){if(t)return l(e,r,t,i);var a=n(e);return l(e,r,a.defaultSerializers,a.serializeSpan)},getSerializers:n,getImageUrl:i,mergeSerializers:a}},1051:function(e,r,t){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var l=t(6086);e.exports=function(e,r){return Object.keys(e).reduce((function(t,i){var a=n(e[i]);return t[i]="function"===a?"undefined"!==typeof r[i]?r[i]:e[i]:"object"===a?l({},e[i],r[i]):"undefined"===typeof r[i]?e[i]:r[i],t}),{})}},1247:function(e,r,t){"use strict";var n=t(6086);function l(e){return Boolean(e.listItem)}function i(e,r){return e.level===r.level&&e.listItem===r.listItem}function a(e){return{_type:"list",_key:"".concat(e._key,"-parent"),level:e.level,listItem:e.listItem,children:[e]}}function o(e){return e.children&&e.children[e.children.length-1]}function s(e,r){var t="string"===typeof r.listItem;if("list"===e._type&&e.level===r.level&&t&&e.listItem===r.listItem)return e;var n=o(e);return!!n&&s(n,r)}e.exports=function(e){for(var r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",u=[],c=0;c<e.length;c++){var d=e[c];if(l(d))if(r)if(i(d,r))r.children.push(d);else if(d.level>r.level){var f=a(d);if("html"===t){var p=o(r),h=n({},p,{children:p.children.concat(f)});r.children[r.children.length-1]=h}else r.children.push(f);r=f}else if(d.level<r.level){var m=s(u[u.length-1],d);if(m){(r=m).children.push(d);continue}r=a(d),u.push(r)}else if(d.listItem===r.listItem)console.warn("Unknown state encountered for block",d),u.push(d);else{var y=s(u[u.length-1],{level:d.level});if(y&&y.listItem===d.listItem){(r=y).children.push(d);continue}r=a(d),u.push(r)}else r=a(d),u.push(r);else u.push(d),r=null}return u}},8019:function(e,r,t){"use strict";var n=t(6086),l=t(1643);e.exports=function(e,r){var t=r||{useDashedStyles:!1};function i(r,t){return e(r,null,t.children)}return{defaultSerializers:{types:{block:function(r){var t=r.node.style||"normal";return/^h\d/.test(t)?e(t,null,r.children):e("blockquote"===t?"blockquote":"p",null,r.children)},image:function(r){if(!r.node.asset)return null;var t=e("img",{src:l(r)});return r.isInline?t:e("figure",null,t)}},marks:{strong:i.bind(null,"strong"),em:i.bind(null,"em"),code:i.bind(null,"code"),underline:function(r){var n=t.useDashedStyles?{"text-decoration":"underline"}:{textDecoration:"underline"};return e("span",{style:n},r.children)},"strike-through":function(r){return e("del",null,r.children)},link:function(r){return e("a",{href:r.mark.href},r.children)}},list:function(r){var t="bullet"===r.type?"ul":"ol";return e(t,null,r.children)},listItem:function(r){var t=r.node.style&&"normal"!==r.node.style?e(r.serializers.types.block,r,r.children):r.children;return e("li",null,t)},block:function(r){var t=r.node,n=r.serializers,l=r.options,i=r.isInline,a=r.children,o=t._type,s=n.types[o];if(!s)throw new Error('Unknown block type "'.concat(o,'", please specify a serializer for it in the `serializers.types` prop'));return e(s,{node:t,options:l,isInline:i},a)},span:function(r){var t=r.node,n=t.mark,l=t.children,i="string"===typeof n?n:n._type,a=r.serializers.marks[i];return a?e(a,r.node,l):(console.warn('Unknown mark type "'.concat(i,'", please specify a serializer for it in the `serializers.marks` prop')),e(r.serializers.markFallback,null,l))},hardBreak:function(){return e("br")},container:"div",markFallback:"span",text:void 0,empty:""},serializeSpan:function(r,t,l,i){if("\n"===r&&t.hardBreak)return e(t.hardBreak,{key:"hb-".concat(l)});if("string"===typeof r)return t.text?e(t.text,{key:"text-".concat(l)},r):r;var a;r.children&&(a={children:r.children.map((function(e,t){return i.serializeNode(e,t,r.children,!0)}))});var o=n({},r,a);return e(t.span,{key:r._key||"span-".concat(l),node:o,serializers:t})}}}},6456:function(e){e.exports=function(e){return"https://docs.sanity.io/help/"+e}},8863:function(e,r,t){"use strict";var n=t(7294),l=t(5697),i=t(2454),a=t(8675),o=a.serializers,s=a.serializeSpan,u=a.renderProps,c=i.getImageUrl,d=i.blocksToNodes,f=i.mergeSerializers,p=n.createElement,h=function e(r){var t=f(e.defaultSerializers,r.serializers),n=Object.assign({},u,r,{serializers:t,blocks:r.blocks||[]});return d(p,n,o,s)};h.defaultSerializers=o,h.getImageUrl=c,h.propTypes={className:l.string,renderContainerOnSingleChild:l.bool,projectId:l.string,dataset:l.string,imageOptions:l.object,serializers:l.shape({types:l.object,marks:l.object,list:l.func,listItem:l.func,block:l.func,span:l.func}),blocks:l.oneOfType([l.arrayOf(l.shape({_type:l.string.isRequired})),l.shape({_type:l.string.isRequired})]).isRequired},h.defaultProps={renderContainerOnSingleChild:!1,serializers:{},imageOptions:{}},e.exports=h},8675:function(e,r,t){"use strict";var n=t(7294),l=(0,t(2454).getSerializers)(n.createElement),i=l.defaultSerializers,a=l.serializeSpan;e.exports={serializeSpan:a,serializers:i,renderProps:{nestMarks:!0}}},1163:function(e,r,t){e.exports=t(880)},7737:function(e,r,t){var n=Object.create,l=Object.defineProperty,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=Object.getOwnPropertyNames,s=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,d=Object.assign,f=e=>l(e,"__esModule",{value:!0}),p=(e,r)=>{var t={};for(var n in e)a.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&u)for(var n of u(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t},h=e=>((e,r,t)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let n of o(r))!a.call(e,n)&&"default"!==n&&l(e,n,{get:()=>r[n],enumerable:!(t=s(r,n))||t.enumerable});return e})(f(l(null!=e?n(i(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);f(r),((e,r)=>{for(var t in r)l(e,t,{get:r[t],enumerable:!0})})(r,{blockContentToPlainText:()=>I,default:()=>g});var m=h(t(7294)),y=h(t(5697)),k=h(t(8863)),v=k.default.defaultSerializers,b=e=>{var{content:r,className:t,serializers:n={},dataset:l,projectId:i}=e,a=p(e,["content","className","serializers","dataset","projectId"]);if(!r)throw new Error("No `content` provided to PortableText.");return m.default.createElement(k.default,d({blocks:r,className:t,serializers:z(n),renderContainerOnSingleChild:!0,dataset:l,projectId:i},a))},g=b;b.propTypes={content:y.default.array.isRequired,className:y.default.string,projectId:y.default.string,dataset:y.default.string,serializers:y.default.shape({link:y.default.elementType,strong:y.default.elementType,em:y.default.elementType,underline:y.default.elementType,del:y.default.elementType,code:y.default.elementType,ul:y.default.elementType,ol:y.default.elementType,li:y.default.elementType,h1:y.default.elementType,h2:y.default.elementType,h3:y.default.elementType,h4:y.default.elementType,h5:y.default.elementType,h6:y.default.elementType,blockquote:y.default.elementType,container:y.default.elementType,block:y.default.elementType,span:y.default.elementType,hardBreak:y.default.elementType,unknownType:y.default.elementType,unknownMark:y.default.elementType})};var z=e=>{let{link:r,strong:t,em:n,underline:l,del:i,code:a,ul:o,ol:s,li:u,h1:c,h2:f,h3:h,h4:y,h5:b,h6:g,blockquote:z,container:I="div",block:S=v.BlockSerializer,span:T=v.SpanSerializer,hardBreak:j=v.HardBreakSerializer,unknownType:x=v.DefaultUnknownTypeSerializer,unknownMark:w="span"}=e,N=p(e,["link","strong","em","underline","del","code","ul","ol","li","h1","h2","h3","h4","h5","h6","blockquote","container","block","span","hardBreak","unknownType","unknownMark"]),E={h1:c,h2:f,h3:h,h4:y,h5:b,h6:g,blockquote:z};return{container:I,block:S,span:T,hardBreak:j,unknownType:x,unknownMark:w,marks:_(d({link:r,strong:t,em:n,underline:l,code:a,"strike-through":i},N)),list:e=>{let{type:r,children:t}=e,n="bullet"===r?o:s;return n?n({children:t}):k.default.defaultSerializers.list(e)},listItem:e=>{let{children:r}=e;return u?u({children:r}):k.default.defaultSerializers.listItem(e)},types:d({block:e=>{let{node:{style:r},children:t}=e;return E[r]?E[r]({children:t}):N[r]?N[r]({children:t}):k.default.defaultSerializers.types.block(e)}},Object.entries(N).reduce(((e,[r,t])=>{let n=({node:e})=>m.default.createElement(t,e);return n.displayName=`${O(r)}Wrapper`,e[r]=n,e}),{}))}},_=e=>Object.entries(e).reduce(((e,[r,t])=>{if(t){let n=e=>{var{_type:r,_key:n,mark:l,markKey:i,children:a}=e,o=p(e,["_type","_key","mark","markKey","children"]);if("object"==typeof l){let{_type:e,_key:r}=l,t=p(l,["_type","_key"]);Object.entries(t).forEach((([e,r])=>{o[e]=r}))}return m.default.createElement(t,o,a)};n.displayName=`${O(r)}Wrapper`,e[r]=n}return e}),{}),I=(e=[])=>e.map((e=>"block"===e._type&&e.children?e.children.map((e=>e.text)).join(""):"")).join("\n\n"),O=e=>e.slice(0,1).toUpperCase()+e.slice(1)}}]);