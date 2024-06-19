"use strict";(self.webpackChunkdavant_systems=self.webpackChunkdavant_systems||[]).push([[259],{2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,o=new RegExp("^"+s.source),l=new RegExp(s.source+n.source,"gu"),i=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,o=!1,l=!1;for(let i=0;i<e.length;i++){const c=e[i];s&&t.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),s=!1,l=o,o=!0,i++):o&&l&&a.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),l=o,o=!1,s=!0):(s=r(c)===c&&n(c)!==c,l=o,o=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(o,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,i.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(i,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return N},P:function(){return E},S:function(){return F},_:function(){return l},a:function(){return o},b:function(){return d},g:function(){return u},h:function(){return i}});var r=a(6540),n=(a(2729),a(5556)),s=a.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,s,l,i){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),i&&(c.objectPosition=i);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,m);return r.createElement(r.Fragment,null,r.createElement(p,o({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:i}=e,c=l(e,h);return r.createElement("img",o({},c,{decoding:"async",loading:n,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,alt:s}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=l(e,f);const i=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,o({},s,t,{sizes:i,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:i})})),c):c};var v;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,w);return t?r.createElement(y,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const N=function(e){return r.createElement(r.Fragment,null,r.createElement(y,o({},e)),r.createElement("noscript",null,r.createElement(y,o({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=y.propTypes;const A=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],x=e=>e.replace(/\n/g,""),k=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:s().object.isRequired,alt:k},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],I=new Set;let P,z;const O=function(e){let{as:t="div",image:n,style:s,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:h}=e,f=l(e,L);const{width:b,height:y,layout:v}=n,w=c(b,y,v),{style:E,className:N}=w,A=l(w,T),S=(0,r.useRef)(),x=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const k=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,b,y);return(0,r.useEffect)((()=>{P||(P=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return z=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(x);if(z&&I.has(x))return;let t,r;return P.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;S.current&&(S.current.innerHTML=a(o({isLoading:!0,isLoaded:I.has(x),image:n},f)),I.has(x)||(t=requestAnimationFrame((()=>{S.current&&(r=l(S.current,x,I,s,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{I.has(x)&&z&&(S.current.innerHTML=z(o({isLoading:I.has(x),isLoaded:I.has(x),image:n},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,o({},A,{style:o({},E,s,{backgroundColor:d}),className:N+(u?" "+u:""),ref:S,dangerouslySetInnerHTML:{__html:k},suppressHydrationWarning:!0}))},q=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));q.propTypes=C,q.displayName="GatsbyImage";const W=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function _(e){return function(t){let{src:a,__imageData:n,__error:s}=t,i=l(t,W);return s&&console.warn(s),n?r.createElement(e,o({image:n},i)):(console.warn("Image not loaded",a),null)}}const R=_((function(e){let{as:t="div",className:a,class:n,style:s,image:i,loading:m="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:b,objectPosition:y}=e,v=l(e,A);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=o({objectFit:b,objectPosition:y,backgroundColor:f},h);const{width:w,height:k,layout:C,images:L,placeholder:T,backgroundColor:I}=i,P=c(w,k,C),{style:z,className:O}=P,q=l(P,S),W={fallback:void 0,sources:[]};return L.fallback&&(W.fallback=o({},L.fallback,{srcSet:L.fallback.srcSet?x(L.fallback.srcSet):void 0})),L.sources&&(W.sources=L.sources.map((e=>o({},e,{srcSet:x(e.srcSet)})))),r.createElement(t,o({},q,{style:o({},z,s,{backgroundColor:f}),className:O+(a?" "+a:"")}),r.createElement(g,{layout:C,width:w,height:k},r.createElement(E,o({},u(T,!1,C,w,k,I,b,y))),r.createElement(N,o({"data-gatsby-image-ssr":"",className:p},v,d("eager"===m,!1,W,m,h)))))})),j=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},D=new Set(["fixed","fullWidth","constrained"]),M={src:s().string.isRequired,alt:k,width:j,height:j,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!D.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};R.displayName="StaticImage",R.propTypes=M;const F=_(q);F.displayName="StaticImage",F.propTypes=M},6615:function(e,t,a){var r=a(6540),n=a(2532),s=a(4810),o=a(3620);t.A=()=>{const e=(0,r.useContext)(o.A);return r.createElement("div",{className:"fixed top-0 z-50 bg-opacity-0 navbar bg-gradient-to-b from-black to-transparent"},r.createElement("div",{className:"navbar-start"},r.createElement(s.N_,{className:"text-xl btn btn-ghost",to:"/"},r.createElement(n.S,{src:"../images/DavantSystems-logo-1000.png",quality:100,alt:"Davant Systems",placeholder:"blurred",layout:"fixed",width:100,height:40,__imageData:a(1675)}))),r.createElement("div",{className:"hidden navbar-center md:flex"},r.createElement("ul",{className:"px-1 tracking-tight menu menu-horizontal text-cyan-100 drop-shadow-sm"},r.createElement("li",null,r.createElement(s.N_,{to:"/davant-studio/"},"Davant Studio")),r.createElement("li",null,r.createElement(s.N_,{to:"/photobooth/"},"Magic Mirror AI Photo Booth")),r.createElement("li",{className:"dropdown"},r.createElement("div",{tabIndex:0,role:"button"},"Learn & Create"),r.createElement("ul",{tabIndex:0,className:"menu menu-sm dropdown-content text-cyan-100 mt-3 z-[1] p-2 shadow border-2 border-indigo-950 bg-base-300 rounded-md w-auto right-0"},r.createElement("li",null,r.createElement(s.N_,{to:"/training/",className:"whitespace-nowrap"},"Training & Workshops")),r.createElement("li",null,r.createElement(s.N_,{to:"/ambassadors/",className:"whitespace-nowrap"},"Creative Ambassadors")))))),r.createElement("div",{className:"navbar-end"},r.createElement("a",{className:"btn btn-outline btn-secondary btn-xs",href:e.davant.links.davantStudioStripePortal,target:"_blank"},"Manage Subscription")),r.createElement("div",{className:"dropdown"},r.createElement("div",{tabIndex:0,role:"button",className:"btn btn-ghost md:hidden"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h8m-8 6h16"}))),r.createElement("ul",{tabIndex:0,className:"menu menu-sm dropdown-content text-cyan-100 mt-3 z-[1] p-2 shadow border-2 border-indigo-950 bg-base-300 rounded-md w-72 right-0"},r.createElement("li",null,r.createElement(s.N_,{to:"/davant-studio/"},"Davant Studio")),r.createElement("li",null,r.createElement(s.N_,{to:"/photobooth/"},"Magic Mirror AI Photo Booth")),r.createElement("li",null,r.createElement("span",{className:"hover:cursor-default hover:bg-transparent"},"Learn & Create"),r.createElement("ul",null,r.createElement("li",null,r.createElement(s.N_,{to:"/training/"},"Training & Workshops")),r.createElement("li",null,r.createElement(s.N_,{to:"/ambassadors/"},"Creative Ambassadors")))))),r.createElement("span",{className:"absolute top-0 left-0 w-full h-full scale-y-150 pointer-events-none select-none opacity-40 -z-10 bg-gradient-to-b from-base-100 via-base-100 to-transparent"}))}},1675:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFUlEQVR42mPIzFwvm5C22AhEp6Wd4Uqp2a5tFFZfoGYa2SZnEFIvoOhQJaHlV69iEdOiaZPSpu+U3S6nHdyuHVIVxwAEq+ZfkVi27Lz28nUX1KbMOqzNUF63/khW0YqlJdVrN9e1bpqbU7x0V27R4iMB/lWvE2K7XrGxKOyKjmp6kp4+6W1CYv+n+LieT9l5U9729G5+NnPmTrcpsw4smDnv8JK+Kbvv9E3eN4th25Qt6////893YNG+9h2zth8+PHf3xgvrTu5Pz2rdGBqRf2rthA2vSpOar6VEFp9d1bfq5aSiCa82zd96aE7fohWr2lcc3TN1+/aFbQuFN/RuWLSzeyc3w8vLr1c+uvBky/OLzxe+uPCq88qOm2aPjt6PvHDsUXKScsmyvZN3/5JUsdjY4NJ6pcGy+VqyZ+WJ59PunL0Xf6L37rprPk8OP1h2Zvdd/gdHHrVf2HmBmwHoOsb58+dzrFq1ipkBCZzgWVG2QWJhnQtP+PZ83ryrK7invl3I2fdxN+/ia4d4lr3cwT2/DaTuP8N/RgZsAGQwCIPYx2RWce7jXdJ0TGDV1r2iK96tEJj6rVug6fVCuWnr9wotiFsnOj1ntfRUPbwGgkA9Qz0TiN4ru0x7l+zC6p08c7sPiK1qN9YIn2ehGT1/Z/dzoJcY4BYTDWYypLGCk4TSTH6QC9gLK1R402tUYS6CYAashgIAJcME/Wm//D8AAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/b64b999fc4fc2af80924bec4339ee7f7/acdf0/DavantSystems-logo-1000.png","srcSet":"/static/b64b999fc4fc2af80924bec4339ee7f7/acdf0/DavantSystems-logo-1000.png 100w,\\n/static/b64b999fc4fc2af80924bec4339ee7f7/6b3e8/DavantSystems-logo-1000.png 200w","sizes":"100px"},"sources":[{"srcSet":"/static/b64b999fc4fc2af80924bec4339ee7f7/b2189/DavantSystems-logo-1000.webp 100w,\\n/static/b64b999fc4fc2af80924bec4339ee7f7/49fba/DavantSystems-logo-1000.webp 200w","type":"image/webp","sizes":"100px"}]},"width":100,"height":40}')}}]);
//# sourceMappingURL=b3773bdd0a52f498f1f750266aa44de701865aa2-2ba37d966188ebde391b.js.map