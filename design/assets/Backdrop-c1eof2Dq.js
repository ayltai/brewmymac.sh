import{_ as j,j as R}from"./useTheme-AMHikNwr.js";import{_ as r}from"./extends-Bih7WiFi.js";import{r as k}from"./index-C-wxagUl.js";import{g as N,a as U,c as W}from"./generateUtilityClasses-BkXz_rP6.js";import{s as z,c as H}from"./styled-Cea7lQfD.js";import{u as q}from"./useThemeProps-DN7sIikO.js";import{u as A}from"./useTheme-C8Z8IRiV.js";import{T as G,r as J,g as B}from"./utils-BEtwtKnX.js";import{u as K}from"./useForkRef-DHyczKbH.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="4e0f0440-3f7d-4be6-acef-8d7e4782fa27",n._sentryDebugIdIdentifier="sentry-dbid-4e0f0440-3f7d-4be6-acef-8d7e4782fa27")}catch{}})();const O=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Q={entering:{opacity:1},entered:{opacity:1}},V=k.forwardRef(function(o,i){const e=A(),y={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:l,appear:p=!0,children:u,easing:x,in:f,onEnter:h,onEntered:w,onEntering:C,onExit:b,onExited:T,onExiting:_,style:m,timeout:E=y,TransitionComponent:P=G}=o,v=j(o,O),a=k.useRef(null),c=K(a,u.ref,i),d=t=>s=>{if(t){const g=a.current;s===void 0?t(g):t(g,s)}},S=d(C),D=d((t,s)=>{J(t);const g=B({style:m,timeout:E,easing:x},{mode:"enter"});t.style.webkitTransition=e.transitions.create("opacity",g),t.style.transition=e.transitions.create("opacity",g),h&&h(t,s)}),F=d(w),I=d(_),L=d(t=>{const s=B({style:m,timeout:E,easing:x},{mode:"exit"});t.style.webkitTransition=e.transitions.create("opacity",s),t.style.transition=e.transitions.create("opacity",s),b&&b(t)}),$=d(T),M=t=>{l&&l(a.current,t)};return R.jsx(P,r({appear:p,in:f,nodeRef:a,onEnter:D,onEntered:F,onEntering:S,onExit:L,onExited:$,onExiting:I,addEndListener:M,timeout:E},v,{children:(t,s)=>k.cloneElement(u,r({style:r({opacity:0,visibility:t==="exited"&&!f?"hidden":void 0},Q[t],m,u.props.style),ref:c},s))}))}),X=V;function Y(n){return N("MuiBackdrop",n)}U("MuiBackdrop",["root","invisible"]);const Z=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],tt=n=>{const{classes:o,invisible:i}=n;return H({root:["root",i&&"invisible"]},Y,o)},nt=z("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:i}=n;return[o.root,i.invisible&&o.invisible]}})(({ownerState:n})=>r({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})),ot=k.forwardRef(function(o,i){var e,y,l;const p=q({props:o,name:"MuiBackdrop"}),{children:u,className:x,component:f="div",components:h={},componentsProps:w={},invisible:C=!1,open:b,slotProps:T={},slots:_={},TransitionComponent:m=X,transitionDuration:E}=p,P=j(p,Z),v=r({},p,{component:f,invisible:C}),a=tt(v),c=(e=T.root)!=null?e:w.root;return R.jsx(m,r({in:b,timeout:E},P,{children:R.jsx(nt,r({"aria-hidden":!0},c,{as:(y=(l=_.root)!=null?l:h.Root)!=null?y:f,className:W(a.root,x,c==null?void 0:c.className),ownerState:r({},v,c==null?void 0:c.ownerState),classes:a,ref:i,children:u}))}))}),ut=ot;export{ut as B,X as F};
