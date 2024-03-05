import{_ as ot,j as Z,c as Gt,e as Kt}from"./useTheme-AMHikNwr.js";import{_ as C}from"./extends-Bih7WiFi.js";import{r as $}from"./index-C-wxagUl.js";import{d as Er,a as Cr,g as $r,c as Ge}from"./generateUtilityClasses-BkXz_rP6.js";import{c as Jt,b as Ar,s as nt}from"./styled-Cea7lQfD.js";import{u as Mr}from"./useTheme-C8Z8IRiV.js";import{u as Qt}from"./useThemeProps-DN7sIikO.js";import"./iframe-C6jAGuY7.js";import{o as Bt,a as Dr,u as jr}from"./useControlled-pFiEE0Ib.js";import{P as Sr}from"./Portal-BvedyDEB.js";import{u as ut}from"./useForkRef-DHyczKbH.js";import{u as Lt}from"./useEnhancedEffect-DicSz42a.js";import{u as kr,a as Ke}from"./useSlotProps-5DfGAFMd.js";import{u as Je,a as Br,T as Lr}from"./useIsFocusVisible-rM4MwBSL.js";import{u as Wt}from"./useEventCallback-CVO70Gln.js";import{G as _t}from"./Grow-xRpIP6ws.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a9360673-00ab-48fd-b09d-70aa934f4a9e",e._sentryDebugIdIdentifier="sentry-dbid-a9360673-00ab-48fd-b09d-70aa934f4a9e")}catch{}})();const Wr={disableDefaultClasses:!1},_r=$.createContext(Wr);function Nr(e){const{disableDefaultClasses:t}=$.useContext(_r);return r=>t?"":e(r)}var L="top",F="bottom",H="right",W="left",ht="auto",Ne=[L,F,H,W],Te="start",We="end",Ir="clippingParents",Zt="viewport",Se="popper",Fr="reference",Nt=Ne.reduce(function(e,t){return e.concat([t+"-"+Te,t+"-"+We])},[]),er=[].concat(Ne,[ht]).reduce(function(e,t){return e.concat([t,t+"-"+Te,t+"-"+We])},[]),Hr="beforeRead",Vr="read",Ur="afterRead",qr="beforeMain",zr="main",Xr="afterMain",Yr="beforeWrite",Gr="write",Kr="afterWrite",Jr=[Hr,Vr,Ur,qr,zr,Xr,Yr,Gr,Kr];function te(e){return e?(e.nodeName||"").toLowerCase():null}function N(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function me(e){var t=N(e).Element;return e instanceof t||e instanceof Element}function I(e){var t=N(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function gt(e){if(typeof ShadowRoot>"u")return!1;var t=N(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Qr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},a=t.elements[r];!I(a)||!te(a)||(Object.assign(a.style,o),Object.keys(n).forEach(function(l){var s=n[l];s===!1?a.removeAttribute(l):a.setAttribute(l,s===!0?"":s)}))})}function Zr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],a=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),s=l.reduce(function(i,c){return i[c]="",i},{});!I(n)||!te(n)||(Object.assign(n.style,s),Object.keys(a).forEach(function(i){n.removeAttribute(i)}))})}}const eo={name:"applyStyles",enabled:!0,phase:"write",fn:Qr,effect:Zr,requires:["computeStyles"]};function ee(e){return e.split("-")[0]}var ve=Math.max,rt=Math.min,Re=Math.round;function dt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function tr(){return!/^((?!chrome|android).)*safari/i.test(dt())}function Ee(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,a=1;t&&I(e)&&(n=e.offsetWidth>0&&Re(o.width)/e.offsetWidth||1,a=e.offsetHeight>0&&Re(o.height)/e.offsetHeight||1);var l=me(e)?N(e):window,s=l.visualViewport,i=!tr()&&r,c=(o.left+(i&&s?s.offsetLeft:0))/n,p=(o.top+(i&&s?s.offsetTop:0))/a,v=o.width/n,y=o.height/a;return{width:v,height:y,top:p,right:c+v,bottom:p+y,left:c,x:c,y:p}}function yt(e){var t=Ee(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function rr(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&gt(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ne(e){return N(e).getComputedStyle(e)}function to(e){return["table","td","th"].indexOf(te(e))>=0}function pe(e){return((me(e)?e.ownerDocument:e.document)||window.document).documentElement}function at(e){return te(e)==="html"?e:e.assignedSlot||e.parentNode||(gt(e)?e.host:null)||pe(e)}function It(e){return!I(e)||ne(e).position==="fixed"?null:e.offsetParent}function ro(e){var t=/firefox/i.test(dt()),r=/Trident/i.test(dt());if(r&&I(e)){var o=ne(e);if(o.position==="fixed")return null}var n=at(e);for(gt(n)&&(n=n.host);I(n)&&["html","body"].indexOf(te(n))<0;){var a=ne(n);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return n;n=n.parentNode}return null}function Ie(e){for(var t=N(e),r=It(e);r&&to(r)&&ne(r).position==="static";)r=It(r);return r&&(te(r)==="html"||te(r)==="body"&&ne(r).position==="static")?t:r||ro(e)||t}function bt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Be(e,t,r){return ve(e,rt(t,r))}function oo(e,t,r){var o=Be(e,t,r);return o>r?r:o}function or(){return{top:0,right:0,bottom:0,left:0}}function nr(e){return Object.assign({},or(),e)}function ar(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var no=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,nr(typeof t!="number"?t:ar(t,Ne))};function ao(e){var t,r=e.state,o=e.name,n=e.options,a=r.elements.arrow,l=r.modifiersData.popperOffsets,s=ee(r.placement),i=bt(s),c=[W,H].indexOf(s)>=0,p=c?"height":"width";if(!(!a||!l)){var v=no(n.padding,r),y=yt(a),u=i==="y"?L:W,P=i==="y"?F:H,d=r.rects.reference[p]+r.rects.reference[i]-l[i]-r.rects.popper[p],m=l[i]-r.rects.reference[i],x=Ie(a),R=x?i==="y"?x.clientHeight||0:x.clientWidth||0:0,b=d/2-m/2,f=v[u],g=R-y[p]-v[P],h=R/2-y[p]/2+b,O=Be(f,h,g),A=i;r.modifiersData[o]=(t={},t[A]=O,t.centerOffset=O-h,t)}}function io(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||rr(t.elements.popper,n)&&(t.elements.arrow=n))}const so={name:"arrow",enabled:!0,phase:"main",fn:ao,effect:io,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ce(e){return e.split("-")[1]}var po={top:"auto",right:"auto",bottom:"auto",left:"auto"};function lo(e,t){var r=e.x,o=e.y,n=t.devicePixelRatio||1;return{x:Re(r*n)/n||0,y:Re(o*n)/n||0}}function Ft(e){var t,r=e.popper,o=e.popperRect,n=e.placement,a=e.variation,l=e.offsets,s=e.position,i=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets,v=e.isFixed,y=l.x,u=y===void 0?0:y,P=l.y,d=P===void 0?0:P,m=typeof p=="function"?p({x:u,y:d}):{x:u,y:d};u=m.x,d=m.y;var x=l.hasOwnProperty("x"),R=l.hasOwnProperty("y"),b=W,f=L,g=window;if(c){var h=Ie(r),O="clientHeight",A="clientWidth";if(h===N(r)&&(h=pe(r),ne(h).position!=="static"&&s==="absolute"&&(O="scrollHeight",A="scrollWidth")),h=h,n===L||(n===W||n===H)&&a===We){f=F;var E=v&&h===g&&g.visualViewport?g.visualViewport.height:h[O];d-=E-o.height,d*=i?1:-1}if(n===W||(n===L||n===F)&&a===We){b=H;var T=v&&h===g&&g.visualViewport?g.visualViewport.width:h[A];u-=T-o.width,u*=i?1:-1}}var D=Object.assign({position:s},c&&po),k=p===!0?lo({x:u,y:d},N(r)):{x:u,y:d};if(u=k.x,d=k.y,i){var j;return Object.assign({},D,(j={},j[f]=R?"0":"",j[b]=x?"0":"",j.transform=(g.devicePixelRatio||1)<=1?"translate("+u+"px, "+d+"px)":"translate3d("+u+"px, "+d+"px, 0)",j))}return Object.assign({},D,(t={},t[f]=R?d+"px":"",t[b]=x?u+"px":"",t.transform="",t))}function co(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,a=r.adaptive,l=a===void 0?!0:a,s=r.roundOffsets,i=s===void 0?!0:s,c={placement:ee(t.placement),variation:Ce(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ft(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ft(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const fo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:co,data:{}};var Qe={passive:!0};function uo(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,a=n===void 0?!0:n,l=o.resize,s=l===void 0?!0:l,i=N(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach(function(p){p.addEventListener("scroll",r.update,Qe)}),s&&i.addEventListener("resize",r.update,Qe),function(){a&&c.forEach(function(p){p.removeEventListener("scroll",r.update,Qe)}),s&&i.removeEventListener("resize",r.update,Qe)}}const vo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:uo,data:{}};var mo={left:"right",right:"left",bottom:"top",top:"bottom"};function tt(e){return e.replace(/left|right|bottom|top/g,function(t){return mo[t]})}var ho={start:"end",end:"start"};function Ht(e){return e.replace(/start|end/g,function(t){return ho[t]})}function wt(e){var t=N(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function xt(e){return Ee(pe(e)).left+wt(e).scrollLeft}function go(e,t){var r=N(e),o=pe(e),n=r.visualViewport,a=o.clientWidth,l=o.clientHeight,s=0,i=0;if(n){a=n.width,l=n.height;var c=tr();(c||!c&&t==="fixed")&&(s=n.offsetLeft,i=n.offsetTop)}return{width:a,height:l,x:s+xt(e),y:i}}function yo(e){var t,r=pe(e),o=wt(e),n=(t=e.ownerDocument)==null?void 0:t.body,a=ve(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),l=ve(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+xt(e),i=-o.scrollTop;return ne(n||r).direction==="rtl"&&(s+=ve(r.clientWidth,n?n.clientWidth:0)-a),{width:a,height:l,x:s,y:i}}function Pt(e){var t=ne(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function ir(e){return["html","body","#document"].indexOf(te(e))>=0?e.ownerDocument.body:I(e)&&Pt(e)?e:ir(at(e))}function Le(e,t){var r;t===void 0&&(t=[]);var o=ir(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),a=N(o),l=n?[a].concat(a.visualViewport||[],Pt(o)?o:[]):o,s=t.concat(l);return n?s:s.concat(Le(at(l)))}function vt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function bo(e,t){var r=Ee(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Vt(e,t,r){return t===Zt?vt(go(e,r)):me(t)?bo(t,r):vt(yo(pe(e)))}function wo(e){var t=Le(at(e)),r=["absolute","fixed"].indexOf(ne(e).position)>=0,o=r&&I(e)?Ie(e):e;return me(o)?t.filter(function(n){return me(n)&&rr(n,o)&&te(n)!=="body"}):[]}function xo(e,t,r,o){var n=t==="clippingParents"?wo(e):[].concat(t),a=[].concat(n,[r]),l=a[0],s=a.reduce(function(i,c){var p=Vt(e,c,o);return i.top=ve(p.top,i.top),i.right=rt(p.right,i.right),i.bottom=rt(p.bottom,i.bottom),i.left=ve(p.left,i.left),i},Vt(e,l,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function sr(e){var t=e.reference,r=e.element,o=e.placement,n=o?ee(o):null,a=o?Ce(o):null,l=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,i;switch(n){case L:i={x:l,y:t.y-r.height};break;case F:i={x:l,y:t.y+t.height};break;case H:i={x:t.x+t.width,y:s};break;case W:i={x:t.x-r.width,y:s};break;default:i={x:t.x,y:t.y}}var c=n?bt(n):null;if(c!=null){var p=c==="y"?"height":"width";switch(a){case Te:i[c]=i[c]-(t[p]/2-r[p]/2);break;case We:i[c]=i[c]+(t[p]/2-r[p]/2);break}}return i}function _e(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,a=r.strategy,l=a===void 0?e.strategy:a,s=r.boundary,i=s===void 0?Ir:s,c=r.rootBoundary,p=c===void 0?Zt:c,v=r.elementContext,y=v===void 0?Se:v,u=r.altBoundary,P=u===void 0?!1:u,d=r.padding,m=d===void 0?0:d,x=nr(typeof m!="number"?m:ar(m,Ne)),R=y===Se?Fr:Se,b=e.rects.popper,f=e.elements[P?R:y],g=xo(me(f)?f:f.contextElement||pe(e.elements.popper),i,p,l),h=Ee(e.elements.reference),O=sr({reference:h,element:b,strategy:"absolute",placement:n}),A=vt(Object.assign({},b,O)),E=y===Se?A:h,T={top:g.top-E.top+x.top,bottom:E.bottom-g.bottom+x.bottom,left:g.left-E.left+x.left,right:E.right-g.right+x.right},D=e.modifiersData.offset;if(y===Se&&D){var k=D[n];Object.keys(T).forEach(function(j){var V=[H,F].indexOf(j)>=0?1:-1,U=[L,F].indexOf(j)>=0?"y":"x";T[j]+=k[U]*V})}return T}function Po(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,a=r.rootBoundary,l=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,c=i===void 0?er:i,p=Ce(o),v=p?s?Nt:Nt.filter(function(P){return Ce(P)===p}):Ne,y=v.filter(function(P){return c.indexOf(P)>=0});y.length===0&&(y=v);var u=y.reduce(function(P,d){return P[d]=_e(e,{placement:d,boundary:n,rootBoundary:a,padding:l})[ee(d)],P},{});return Object.keys(u).sort(function(P,d){return u[P]-u[d]})}function Oo(e){if(ee(e)===ht)return[];var t=tt(e);return[Ht(e),t,Ht(t)]}function To(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,a=n===void 0?!0:n,l=r.altAxis,s=l===void 0?!0:l,i=r.fallbackPlacements,c=r.padding,p=r.boundary,v=r.rootBoundary,y=r.altBoundary,u=r.flipVariations,P=u===void 0?!0:u,d=r.allowedAutoPlacements,m=t.options.placement,x=ee(m),R=x===m,b=i||(R||!P?[tt(m)]:Oo(m)),f=[m].concat(b).reduce(function(re,K){return re.concat(ee(K)===ht?Po(t,{placement:K,boundary:p,rootBoundary:v,padding:c,flipVariations:P,allowedAutoPlacements:d}):K)},[]),g=t.rects.reference,h=t.rects.popper,O=new Map,A=!0,E=f[0],T=0;T<f.length;T++){var D=f[T],k=ee(D),j=Ce(D)===Te,V=[L,F].indexOf(k)>=0,U=V?"width":"height",M=_e(t,{placement:D,boundary:p,rootBoundary:v,altBoundary:y,padding:c}),S=V?j?H:W:j?F:L;g[U]>h[U]&&(S=tt(S));var G=tt(S),q=[];if(a&&q.push(M[k]<=0),s&&q.push(M[S]<=0,M[G]<=0),q.every(function(re){return re})){E=D,A=!1;break}O.set(D,q)}if(A)for(var he=P?3:1,ge=function(K){var ae=f.find(function(ie){var B=O.get(ie);if(B)return B.slice(0,K).every(function(z){return z})});if(ae)return E=ae,"break"},le=he;le>0;le--){var ce=ge(le);if(ce==="break")break}t.placement!==E&&(t.modifiersData[o]._skip=!0,t.placement=E,t.reset=!0)}}const Ro={name:"flip",enabled:!0,phase:"main",fn:To,requiresIfExists:["offset"],data:{_skip:!1}};function Ut(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function qt(e){return[L,H,F,W].some(function(t){return e[t]>=0})}function Eo(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,a=t.modifiersData.preventOverflow,l=_e(t,{elementContext:"reference"}),s=_e(t,{altBoundary:!0}),i=Ut(l,o),c=Ut(s,n,a),p=qt(i),v=qt(c);t.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":v})}const Co={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Eo};function $o(e,t,r){var o=ee(e),n=[W,L].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,l=a[0],s=a[1];return l=l||0,s=(s||0)*n,[W,H].indexOf(o)>=0?{x:s,y:l}:{x:l,y:s}}function Ao(e){var t=e.state,r=e.options,o=e.name,n=r.offset,a=n===void 0?[0,0]:n,l=er.reduce(function(p,v){return p[v]=$o(v,t.rects,a),p},{}),s=l[t.placement],i=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=l}const Mo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ao};function Do(e){var t=e.state,r=e.name;t.modifiersData[r]=sr({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const jo={name:"popperOffsets",enabled:!0,phase:"read",fn:Do,data:{}};function So(e){return e==="x"?"y":"x"}function ko(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,a=n===void 0?!0:n,l=r.altAxis,s=l===void 0?!1:l,i=r.boundary,c=r.rootBoundary,p=r.altBoundary,v=r.padding,y=r.tether,u=y===void 0?!0:y,P=r.tetherOffset,d=P===void 0?0:P,m=_e(t,{boundary:i,rootBoundary:c,padding:v,altBoundary:p}),x=ee(t.placement),R=Ce(t.placement),b=!R,f=bt(x),g=So(f),h=t.modifiersData.popperOffsets,O=t.rects.reference,A=t.rects.popper,E=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,T=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,k={x:0,y:0};if(h){if(a){var j,V=f==="y"?L:W,U=f==="y"?F:H,M=f==="y"?"height":"width",S=h[f],G=S+m[V],q=S-m[U],he=u?-A[M]/2:0,ge=R===Te?O[M]:A[M],le=R===Te?-A[M]:-O[M],ce=t.elements.arrow,re=u&&ce?yt(ce):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:or(),ae=K[V],ie=K[U],B=Be(0,O[M],re[M]),z=b?O[M]/2-he-B-ae-T.mainAxis:ge-B-ae-T.mainAxis,ye=b?-O[M]/2+he+B+ie+T.mainAxis:le+B+ie+T.mainAxis,J=t.elements.arrow&&Ie(t.elements.arrow),it=J?f==="y"?J.clientTop||0:J.clientLeft||0:0,Fe=(j=D==null?void 0:D[f])!=null?j:0,He=S+z-Fe-it,Q=S+ye-Fe,be=Be(u?rt(G,He):G,S,u?ve(q,Q):q);h[f]=be,k[f]=be-S}if(s){var Ve,fe=f==="x"?L:W,Ue=f==="x"?F:H,X=h[g],we=g==="y"?"height":"width",ue=X+m[fe],xe=X-m[Ue],Pe=[L,W].indexOf(x)!==-1,Oe=(Ve=D==null?void 0:D[g])!=null?Ve:0,de=Pe?ue:X-O[we]-A[we]-Oe+T.altAxis,$e=Pe?X+O[we]+A[we]-Oe-T.altAxis:xe,qe=u&&Pe?oo(de,X,$e):Be(u?de:ue,X,u?$e:xe);h[g]=qe,k[g]=qe-X}t.modifiersData[o]=k}}const Bo={name:"preventOverflow",enabled:!0,phase:"main",fn:ko,requiresIfExists:["offset"]};function Lo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Wo(e){return e===N(e)||!I(e)?wt(e):Lo(e)}function _o(e){var t=e.getBoundingClientRect(),r=Re(t.width)/e.offsetWidth||1,o=Re(t.height)/e.offsetHeight||1;return r!==1||o!==1}function No(e,t,r){r===void 0&&(r=!1);var o=I(t),n=I(t)&&_o(t),a=pe(t),l=Ee(e,n,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(o||!o&&!r)&&((te(t)!=="body"||Pt(a))&&(s=Wo(t)),I(t)?(i=Ee(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):a&&(i.x=xt(a))),{x:l.left+s.scrollLeft-i.x,y:l.top+s.scrollTop-i.y,width:l.width,height:l.height}}function Io(e){var t=new Map,r=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function n(a){r.add(a.name);var l=[].concat(a.requires||[],a.requiresIfExists||[]);l.forEach(function(s){if(!r.has(s)){var i=t.get(s);i&&n(i)}}),o.push(a)}return e.forEach(function(a){r.has(a.name)||n(a)}),o}function Fo(e){var t=Io(e);return Jr.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function Ho(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Vo(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var zt={placement:"bottom",modifiers:[],strategy:"absolute"};function Xt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Uo(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,a=n===void 0?zt:n;return function(s,i,c){c===void 0&&(c=a);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},zt,a),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},v=[],y=!1,u={state:p,setOptions:function(x){var R=typeof x=="function"?x(p.options):x;d(),p.options=Object.assign({},a,p.options,R),p.scrollParents={reference:me(s)?Le(s):s.contextElement?Le(s.contextElement):[],popper:Le(i)};var b=Fo(Vo([].concat(o,p.options.modifiers)));return p.orderedModifiers=b.filter(function(f){return f.enabled}),P(),u.update()},forceUpdate:function(){if(!y){var x=p.elements,R=x.reference,b=x.popper;if(Xt(R,b)){p.rects={reference:No(R,Ie(b),p.options.strategy==="fixed"),popper:yt(b)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(T){return p.modifiersData[T.name]=Object.assign({},T.data)});for(var f=0;f<p.orderedModifiers.length;f++){if(p.reset===!0){p.reset=!1,f=-1;continue}var g=p.orderedModifiers[f],h=g.fn,O=g.options,A=O===void 0?{}:O,E=g.name;typeof h=="function"&&(p=h({state:p,options:A,name:E,instance:u})||p)}}}},update:Ho(function(){return new Promise(function(m){u.forceUpdate(),m(p)})}),destroy:function(){d(),y=!0}};if(!Xt(s,i))return u;u.setOptions(c).then(function(m){!y&&c.onFirstUpdate&&c.onFirstUpdate(m)});function P(){p.orderedModifiers.forEach(function(m){var x=m.name,R=m.options,b=R===void 0?{}:R,f=m.effect;if(typeof f=="function"){var g=f({state:p,name:x,instance:u,options:b}),h=function(){};v.push(g||h)}})}function d(){v.forEach(function(m){return m()}),v=[]}return u}}var qo=[vo,jo,fo,eo,Mo,Ro,Bo,so,Co],zo=Uo({defaultModifiers:qo});const pr="base";function Xo(e){return`${pr}--${e}`}function Yo(e,t){return`${pr}-${e}-${t}`}function lr(e,t){const r=Er[t];return r?Xo(r):Yo(e,t)}function Go(e,t){const r={};return t.forEach(o=>{r[o]=lr(e,o)}),r}const cr="Popper";function Ko(e){return lr(cr,e)}Go(cr,["root"]);const Jo=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Qo=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function Zo(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function mt(e){return typeof e=="function"?e():e}function en(e){return e.nodeType!==void 0}const tn=()=>Jt({root:["root"]},Nr(Ko)),rn={},on=$.forwardRef(function(t,r){var o;const{anchorEl:n,children:a,direction:l,disablePortal:s,modifiers:i,open:c,placement:p,popperOptions:v,popperRef:y,slotProps:u={},slots:P={},TransitionProps:d}=t,m=ot(t,Jo),x=$.useRef(null),R=ut(x,r),b=$.useRef(null),f=ut(b,y),g=$.useRef(f);Lt(()=>{g.current=f},[f]),$.useImperativeHandle(y,()=>b.current,[]);const h=Zo(p,l),[O,A]=$.useState(h),[E,T]=$.useState(mt(n));$.useEffect(()=>{b.current&&b.current.forceUpdate()}),$.useEffect(()=>{n&&T(mt(n))},[n]),Lt(()=>{if(!E||!c)return;const U=G=>{A(G.placement)};let M=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:G})=>{U(G)}}];i!=null&&(M=M.concat(i)),v&&v.modifiers!=null&&(M=M.concat(v.modifiers));const S=zo(E,x.current,C({placement:h},v,{modifiers:M}));return g.current(S),()=>{S.destroy(),g.current(null)}},[E,s,i,c,v,h]);const D={placement:O};d!==null&&(D.TransitionProps=d);const k=tn(),j=(o=P.root)!=null?o:"div",V=kr({elementType:j,externalSlotProps:u.root,externalForwardedProps:m,additionalProps:{role:"tooltip",ref:R},ownerState:t,className:k.root});return Z.jsx(j,C({},V,{children:typeof a=="function"?a(D):a}))}),nn=$.forwardRef(function(t,r){const{anchorEl:o,children:n,container:a,direction:l="ltr",disablePortal:s=!1,keepMounted:i=!1,modifiers:c,open:p,placement:v="bottom",popperOptions:y=rn,popperRef:u,style:P,transition:d=!1,slotProps:m={},slots:x={}}=t,R=ot(t,Qo),[b,f]=$.useState(!0),g=()=>{f(!1)},h=()=>{f(!0)};if(!i&&!p&&(!d||b))return null;let O;if(a)O=a;else if(o){const T=mt(o);O=T&&en(T)?Bt(T).body:Bt(null).body}const A=!p&&i&&(!d||b)?"none":void 0,E=d?{in:p,onEnter:g,onExited:h}:void 0;return Z.jsx(Sr,{disablePortal:s,container:O,children:Z.jsx(on,C({anchorEl:o,direction:l,disablePortal:s,modifiers:c,ref:r,open:d?!b:p,placement:v,popperOptions:y,popperRef:u,slotProps:m,slots:x},R,{style:C({position:"fixed",top:0,left:0,display:A},P),TransitionProps:E,children:n}))})});var Ot={};Object.defineProperty(Ot,"__esModule",{value:!0});var fr=Ot.default=void 0,an=pn($),sn=Ar;function ur(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(ur=function(o){return o?r:t})(e)}function pn(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=ur(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}function ln(e){return Object.keys(e).length===0}function cn(e=null){const t=an.useContext(sn.ThemeContext);return!t||ln(t)?e:t}fr=Ot.default=cn;const fn=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],un=nt(nn,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),dn=$.forwardRef(function(t,r){var o;const n=fr(),a=Qt({props:t,name:"MuiPopper"}),{anchorEl:l,component:s,components:i,componentsProps:c,container:p,disablePortal:v,keepMounted:y,modifiers:u,open:P,placement:d,popperOptions:m,popperRef:x,transition:R,slots:b,slotProps:f}=a,g=ot(a,fn),h=(o=b==null?void 0:b.root)!=null?o:i==null?void 0:i.Root,O=C({anchorEl:l,container:p,disablePortal:v,keepMounted:y,modifiers:u,open:P,placement:d,popperOptions:m,popperRef:x,transition:R},g);return Z.jsx(un,C({as:s,direction:n==null?void 0:n.direction,slots:{root:h},slotProps:f??c},O,{ref:r}))}),dr=dn;function vn(e){return $r("MuiTooltip",e)}const mn=Cr("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),se=mn,hn=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function gn(e){return Math.round(e*1e5)/1e5}const yn=e=>{const{classes:t,disableInteractive:r,arrow:o,touch:n,placement:a}=e,l={popper:["popper",!r&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",n&&"touch",`tooltipPlacement${Gt(a.split("-")[0])}`],arrow:["arrow"]};return Jt(l,vn,t)},bn=nt(dr,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})(({theme:e,ownerState:t,open:r})=>C({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${se.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${se.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${se.arrow}`]:C({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${se.arrow}`]:C({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),wn=nt("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t[`tooltipPlacement${Gt(r.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>C({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:Kt(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${gn(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${se.popper}[data-popper-placement*="left"] &`]:C({transformOrigin:"right center"},t.isRtl?C({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):C({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${se.popper}[data-popper-placement*="right"] &`]:C({transformOrigin:"left center"},t.isRtl?C({marginRight:"14px"},t.touch&&{marginRight:"24px"}):C({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${se.popper}[data-popper-placement*="top"] &`]:C({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${se.popper}[data-popper-placement*="bottom"] &`]:C({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),xn=nt("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:Kt(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Ze=!1;const Yt=new Lr;let ke={x:0,y:0};function et(e,t){return r=>{t&&t(r),e(r)}}const Pn=$.forwardRef(function(t,r){var o,n,a,l,s,i,c,p,v,y,u,P,d,m,x,R,b,f,g;const h=Qt({props:t,name:"MuiTooltip"}),{arrow:O=!1,children:A,components:E={},componentsProps:T={},describeChild:D=!1,disableFocusListener:k=!1,disableHoverListener:j=!1,disableInteractive:V=!1,disableTouchListener:U=!1,enterDelay:M=100,enterNextDelay:S=0,enterTouchDelay:G=700,followCursor:q=!1,id:he,leaveDelay:ge=0,leaveTouchDelay:le=1500,onClose:ce,onOpen:re,open:K,placement:ae="bottom",PopperComponent:ie,PopperProps:B={},slotProps:z={},slots:ye={},title:J,TransitionComponent:it=_t,TransitionProps:Fe}=h,He=ot(h,hn),Q=$.isValidElement(A)?A:Z.jsx("span",{children:A}),be=Mr(),Ve=be.direction==="rtl",[fe,Ue]=$.useState(),[X,we]=$.useState(null),ue=$.useRef(!1),xe=V||q,Pe=Je(),Oe=Je(),de=Je(),$e=Je(),[qe,Tt]=Dr({controlled:K,default:!1,name:"Tooltip",state:"open"});let oe=qe;const st=jr(he),Ae=$.useRef(),ze=Wt(()=>{Ae.current!==void 0&&(document.body.style.WebkitUserSelect=Ae.current,Ae.current=void 0),$e.clear()});$.useEffect(()=>ze,[ze]);const Rt=w=>{Yt.clear(),Ze=!0,Tt(!0),re&&!oe&&re(w)},Xe=Wt(w=>{Yt.start(800+ge,()=>{Ze=!1}),Tt(!1),ce&&oe&&ce(w),Pe.start(be.transitions.duration.shortest,()=>{ue.current=!1})}),Ye=w=>{ue.current&&w.type!=="touchstart"||(fe&&fe.removeAttribute("title"),Oe.clear(),de.clear(),M||Ze&&S?Oe.start(Ze?S:M,()=>{Rt(w)}):Rt(w))},pt=w=>{Oe.clear(),de.start(ge,()=>{Xe(w)})},{isFocusVisibleRef:Et,onBlur:vr,onFocus:mr,ref:hr}=Br(),[,Ct]=$.useState(!1),$t=w=>{vr(w),Et.current===!1&&(Ct(!1),pt(w))},At=w=>{fe||Ue(w.currentTarget),mr(w),Et.current===!0&&(Ct(!0),Ye(w))},Mt=w=>{ue.current=!0;const _=Q.props;_.onTouchStart&&_.onTouchStart(w)},gr=w=>{Mt(w),de.clear(),Pe.clear(),ze(),Ae.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",$e.start(G,()=>{document.body.style.WebkitUserSelect=Ae.current,Ye(w)})},yr=w=>{Q.props.onTouchEnd&&Q.props.onTouchEnd(w),ze(),de.start(le,()=>{Xe(w)})};$.useEffect(()=>{if(!oe)return;function w(_){(_.key==="Escape"||_.key==="Esc")&&Xe(_)}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[Xe,oe]);const br=ut(Q.ref,hr,Ue,r);!J&&J!==0&&(oe=!1);const lt=$.useRef(),wr=w=>{const _=Q.props;_.onMouseMove&&_.onMouseMove(w),ke={x:w.clientX,y:w.clientY},lt.current&&lt.current.update()},Me={},ct=typeof J=="string";D?(Me.title=!oe&&ct&&!j?J:null,Me["aria-describedby"]=oe?st:null):(Me["aria-label"]=ct?J:null,Me["aria-labelledby"]=oe&&!ct?st:null);const Y=C({},Me,He,Q.props,{className:Ge(He.className,Q.props.className),onTouchStart:Mt,ref:br},q?{onMouseMove:wr}:{}),De={};U||(Y.onTouchStart=gr,Y.onTouchEnd=yr),j||(Y.onMouseOver=et(Ye,Y.onMouseOver),Y.onMouseLeave=et(pt,Y.onMouseLeave),xe||(De.onMouseOver=Ye,De.onMouseLeave=pt)),k||(Y.onFocus=et(At,Y.onFocus),Y.onBlur=et($t,Y.onBlur),xe||(De.onFocus=At,De.onBlur=$t));const xr=$.useMemo(()=>{var w;let _=[{name:"arrow",enabled:!!X,options:{element:X,padding:4}}];return(w=B.popperOptions)!=null&&w.modifiers&&(_=_.concat(B.popperOptions.modifiers)),C({},B.popperOptions,{modifiers:_})},[X,B]),je=C({},h,{isRtl:Ve,arrow:O,disableInteractive:xe,placement:ae,PopperComponentProp:ie,touch:ue.current}),ft=yn(je),Dt=(o=(n=ye.popper)!=null?n:E.Popper)!=null?o:bn,jt=(a=(l=(s=ye.transition)!=null?s:E.Transition)!=null?l:it)!=null?a:_t,St=(i=(c=ye.tooltip)!=null?c:E.Tooltip)!=null?i:wn,kt=(p=(v=ye.arrow)!=null?v:E.Arrow)!=null?p:xn,Pr=Ke(Dt,C({},B,(y=z.popper)!=null?y:T.popper,{className:Ge(ft.popper,B==null?void 0:B.className,(u=(P=z.popper)!=null?P:T.popper)==null?void 0:u.className)}),je),Or=Ke(jt,C({},Fe,(d=z.transition)!=null?d:T.transition),je),Tr=Ke(St,C({},(m=z.tooltip)!=null?m:T.tooltip,{className:Ge(ft.tooltip,(x=(R=z.tooltip)!=null?R:T.tooltip)==null?void 0:x.className)}),je),Rr=Ke(kt,C({},(b=z.arrow)!=null?b:T.arrow,{className:Ge(ft.arrow,(f=(g=z.arrow)!=null?g:T.arrow)==null?void 0:f.className)}),je);return Z.jsxs($.Fragment,{children:[$.cloneElement(Q,Y),Z.jsx(Dt,C({as:ie??dr,placement:ae,anchorEl:q?{getBoundingClientRect:()=>({top:ke.y,left:ke.x,right:ke.x,bottom:ke.y,width:0,height:0})}:fe,popperRef:lt,open:fe?oe:!1,id:st,transition:!0},De,Pr,{popperOptions:xr,children:({TransitionProps:w})=>Z.jsx(jt,C({timeout:be.transitions.duration.shorter},w,Or,{children:Z.jsxs(St,C({},Tr,{children:[J,O?Z.jsx(kt,C({},Rr,{ref:we})):null]}))}))}))]})}),Nn=Pn;export{Nn as T};
