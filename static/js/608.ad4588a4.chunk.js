"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[608],{4087:function(t,n,e){e.d(n,{xu:function(){return l}});var r=e(1413),i=e(4925),o=e(1999),a=e(7872),s=e(184),c=["size","centerContent"],u=["size"],l=(0,o.m)("div");l.displayName="Box";var d=(0,a.G)((function(t,n){var e=t.size,o=t.centerContent,a=void 0===o||o,u=(0,i.Z)(t,c),d=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,s.jsx)(l,(0,r.Z)({ref:n,boxSize:e,__css:(0,r.Z)((0,r.Z)({},d),{},{flexShrink:0,flexGrow:0})},u))}));d.displayName="Square",(0,a.G)((function(t,n){var e=t.size,o=(0,i.Z)(t,u);return(0,s.jsx)(d,(0,r.Z)({size:e,ref:n,borderRadius:"9999px"},o))})).displayName="Circle"},176:function(t,n,e){e.d(n,{k:function(){return u}});var r=e(1413),i=e(4925),o=e(7872),a=e(1999),s=e(184),c=["direction","align","justify","wrap","basis","grow","shrink"],u=(0,o.G)((function(t,n){var e=t.direction,o=t.align,u=t.justify,l=t.wrap,d=t.basis,f=t.grow,p=t.shrink,m=(0,i.Z)(t,c),v={display:"flex",flexDirection:e,alignItems:o,justifyContent:u,flexWrap:l,flexBasis:d,flexGrow:f,flexShrink:p};return(0,s.jsx)(a.m.div,(0,r.Z)({ref:n,__css:v},m))}));u.displayName="Flex"},5218:function(t,n,e){e.d(n,{x7:function(){return kt},ZP:function(){return Et}});var r=e(168),i=e(9439),o=e(3433),a=e(1413),s=e(2791),c=e(4942),u={data:""},l=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||u},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,f=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,m=function t(n,e){var r="",i="",o="",a=function(a){var c=n[a];"@"==a[0]?"i"==a[1]?r=a+" "+c+";":i+="f"==a[1]?t(c,a):a+"{"+t(c,"k"==a[1]?"":e)+"}":"object"==typeof c?i+=t(c,e?e.replace(/([^,])+/g,(function(t){return a.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):a):null!=c&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=t.p?t.p(a,c):a+":"+c+";"),s=a};for(var s in n)a(s);return r+(e&&o?e+"{"+o+"}":o)+i},v={},g=function t(n){if("object"==typeof n){var e="";for(var r in n)e+=r+t(n[r]);return e}return n},y=function(t,n,e,r,i){var o=g(t),a=v[o]||(v[o]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(o));if(!v[a]){var s=o!==t?t:function(t){for(var n,e,r=[{}];n=d.exec(t.replace(f,""));)n[4]?r.shift():n[3]?(e=n[3].replace(p," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][n[1]]=n[2].replace(p," ").trim();return r[0]}(t);v[a]=m(i?(0,c.Z)({},"@keyframes "+a,s):s,e?"":"."+a)}var u=e&&v.g?v.g:null;return e&&(v.g=v[a]),function(t,n,e,r){r?n.data=n.data.replace(r,t):-1===n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(v[a],n,r,u),a},h=function(t,n,e){return t.reduce((function(t,r,i){var o=n[i];if(o&&o.call){var a=o(e),s=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=s?"."+s:a&&"object"==typeof a?a.props?"":m(a,""):!1===a?"":a}return t+r+(null==o?"":o)}),"")};function b(t){var n=this||{},e=t.call?t(n.p):t;return y(e.unshift?e.raw?h(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return Object.assign(t,e&&e.call?e(n.p):e)}),{}):e,l(n.target),n.g,n.o,n.k)}b.bind({g:1});var Z,x,w,k,E,j,C,z,N,O,_,D,I,A,P,S,F,M,T,G=b.bind({k:1});function H(t,n){var e=this||{};return function(){var r=arguments;function i(o,a){var s=Object.assign({},o),c=s.className||i.className;e.p=Object.assign({theme:x&&x()},s),e.o=/ *go\d+/.test(c),s.className=b.apply(e,r)+(c?" "+c:""),n&&(s.ref=a);var u=t;return t[0]&&(u=s.as||t,delete s.as),w&&u[0]&&w(s),Z(u,s)}return n?n(i):i}}var L=function(t,n){return function(t){return"function"==typeof t}(t)?t(n):t},B=function(){var t=0;return function(){return(++t).toString()}}(),q=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}(),R=new Map,U=function(t){if(!R.has(t)){var n=setTimeout((function(){R.delete(t),J({type:4,toastId:t})}),1e3);R.set(t,n)}},W=function t(n,e){switch(e.type){case 0:return(0,a.Z)((0,a.Z)({},n),{},{toasts:[e.toast].concat((0,o.Z)(n.toasts)).slice(0,20)});case 1:return e.toast.id&&function(t){var n=R.get(t);n&&clearTimeout(n)}(e.toast.id),(0,a.Z)((0,a.Z)({},n),{},{toasts:n.toasts.map((function(t){return t.id===e.toast.id?(0,a.Z)((0,a.Z)({},t),e.toast):t}))});case 2:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:1,toast:r}):t(n,{type:0,toast:r});case 3:var i=e.toastId;return i?U(i):n.toasts.forEach((function(t){U(t.id)})),(0,a.Z)((0,a.Z)({},n),{},{toasts:n.toasts.map((function(t){return t.id===i||void 0===i?(0,a.Z)((0,a.Z)({},t),{},{visible:!1}):t}))});case 4:return void 0===e.toastId?(0,a.Z)((0,a.Z)({},n),{},{toasts:[]}):(0,a.Z)((0,a.Z)({},n),{},{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case 5:return(0,a.Z)((0,a.Z)({},n),{},{pausedAt:e.time});case 6:var s=e.time-(n.pausedAt||0);return(0,a.Z)((0,a.Z)({},n),{},{pausedAt:void 0,toasts:n.toasts.map((function(t){return(0,a.Z)((0,a.Z)({},t),{},{pauseDuration:t.pauseDuration+s})}))})}},Y=[],$={toasts:[],pausedAt:void 0},J=function(t){$=W($,t),Y.forEach((function(t){t($)}))},K={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Q=function(t){return function(n,e){var r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return(0,a.Z)((0,a.Z)({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||B()})}(n,t,e);return J({type:2,toast:r}),r.id}},V=function(t,n){return Q("blank")(t,n)};V.error=Q("error"),V.success=Q("success"),V.loading=Q("loading"),V.custom=Q("custom"),V.dismiss=function(t){J({type:3,toastId:t})},V.remove=function(t){return J({type:4,toastId:t})},V.promise=function(t,n,e){var r=V.loading(n.loading,(0,a.Z)((0,a.Z)({},e),null==e?void 0:e.loading));return t.then((function(t){return V.success(L(n.success,t),(0,a.Z)((0,a.Z)({id:r},e),null==e?void 0:e.success)),t})).catch((function(t){V.error(L(n.error,t),(0,a.Z)((0,a.Z)({id:r},e),null==e?void 0:e.error))})),t};var X=function(t,n){J({type:1,toast:{id:t,height:n}})},tt=function(){J({type:5,time:Date.now()})},nt=function(t){var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,s.useState)($),e=(0,i.Z)(n,2),r=e[0],o=e[1];(0,s.useEffect)((function(){return Y.push(o),function(){var t=Y.indexOf(o);t>-1&&Y.splice(t,1)}}),[r]);var c=r.toasts.map((function(n){var e,r;return(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},t),t[n.type]),n),{},{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==t?void 0:t.duration)||K[n.type],style:(0,a.Z)((0,a.Z)((0,a.Z)({},t.style),null==(r=t[n.type])?void 0:r.style),n.style)})}));return(0,a.Z)((0,a.Z)({},r),{},{toasts:c})}(t),e=n.toasts,r=n.pausedAt;(0,s.useEffect)((function(){if(!r){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return V.dismiss(n.id)}),e);n.visible&&V.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,r]);var c=(0,s.useCallback)((function(){r&&J({type:6,time:Date.now()})}),[r]),u=(0,s.useCallback)((function(t,n){var r,i=n||{},a=i.reverseOrder,s=void 0!==a&&a,c=i.gutter,u=void 0===c?8:c,l=i.defaultPosition,d=e.filter((function(n){return(n.position||l)===(t.position||l)&&n.height})),f=d.findIndex((function(n){return n.id===t.id})),p=d.filter((function(t,n){return n<f&&t.visible})).length;return(r=d.filter((function(t){return t.visible}))).slice.apply(r,(0,o.Z)(s?[p+1]:[0,p])).reduce((function(t,n){return t+(n.height||0)+u}),0)}),[e]);return{toasts:e,handlers:{updateHeight:X,startPause:tt,endPause:c,calculateOffset:u}}},et=G(k||(k=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),rt=G(E||(E=(0,r.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),it=G(j||(j=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),ot=H("div")(C||(C=(0,r.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),et,rt,(function(t){return t.secondary||"#fff"}),it),at=G(z||(z=(0,r.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),st=H("div")(N||(N=(0,r.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),at),ct=G(O||(O=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),ut=G(_||(_=(0,r.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),lt=H("div")(D||(D=(0,r.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),ct,ut,(function(t){return t.secondary||"#fff"})),dt=H("div")(I||(I=(0,r.Z)(["\n  position: absolute;\n"]))),ft=H("div")(A||(A=(0,r.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),pt=G(P||(P=(0,r.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),mt=H("div")(S||(S=(0,r.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),pt),vt=function(t){var n=t.toast,e=n.icon,r=n.type,i=n.iconTheme;return void 0!==e?"string"==typeof e?s.createElement(mt,null,e):e:"blank"===r?null:s.createElement(ft,null,s.createElement(st,(0,a.Z)({},i)),"loading"!==r&&s.createElement(dt,null,"error"===r?s.createElement(ot,(0,a.Z)({},i)):s.createElement(lt,(0,a.Z)({},i))))},gt=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},yt=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},ht=H("div")(F||(F=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),bt=H("div")(M||(M=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Zt=s.memo((function(t){var n=t.toast,e=t.position,r=t.style,o=t.children,c=n.height?function(t,n){var e=t.includes("top")?1:-1,r=q()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[gt(e),yt(e)],o=(0,i.Z)(r,2),a=o[0],s=o[1];return{animation:n?"".concat(G(a)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(G(s)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(n.position||e||"top-center",n.visible):{opacity:0},u=s.createElement(vt,{toast:n}),l=s.createElement(bt,(0,a.Z)({},n.ariaProps),L(n.message,n));return s.createElement(ht,{className:n.className,style:(0,a.Z)((0,a.Z)((0,a.Z)({},c),r),n.style)},"function"==typeof o?o({icon:u,message:l}):s.createElement(s.Fragment,null,u,l))}));!function(t,n,e,r){m.p=n,Z=t,x=e,w=r}(s.createElement);var xt=function(t){var n=t.id,e=t.className,r=t.style,i=t.onHeightUpdate,o=t.children,a=s.useCallback((function(t){if(t){var e=function(){var e=t.getBoundingClientRect().height;i(n,e)};e(),new MutationObserver(e).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[n,i]);return s.createElement("div",{ref:a,className:e,style:r},o)},wt=b(T||(T=(0,r.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),kt=function(t){var n=t.reverseOrder,e=t.position,r=void 0===e?"top-center":e,i=t.toastOptions,o=t.gutter,c=t.children,u=t.containerStyle,l=t.containerClassName,d=nt(i),f=d.toasts,p=d.handlers;return s.createElement("div",{style:(0,a.Z)({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},u),className:l,onMouseEnter:p.startPause,onMouseLeave:p.endPause},f.map((function(t){var e=t.position||r,i=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return(0,a.Z)((0,a.Z)({left:0,right:0,display:"flex",position:"absolute",transition:q()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(n*(e?1:-1),"px)")},r),i)}(e,p.calculateOffset(t,{reverseOrder:n,gutter:o,defaultPosition:r}));return s.createElement(xt,{id:t.id,key:t.id,onHeightUpdate:p.updateHeight,className:t.visible?wt:"",style:i},"custom"===t.type?L(t.message,t):c?c(t):s.createElement(Zt,{toast:t,position:e}))})))},Et=V}}]);
//# sourceMappingURL=608.ad4588a4.chunk.js.map