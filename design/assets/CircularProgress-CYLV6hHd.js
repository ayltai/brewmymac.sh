import{n as S,c,o as $,_ as R,j as h}from"./useTheme-AMHikNwr.js";import{_ as a}from"./extends-Bih7WiFi.js";import{r as j}from"./index-C-wxagUl.js";import{g as N,a as E,c as U}from"./generateUtilityClasses-BkXz_rP6.js";import{u as z}from"./useThemeProps-DN7sIikO.js";import{s as y,c as F}from"./styled-Cea7lQfD.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="06364355-acce-4c0b-b2d0-584902a8e2b7",r._sentryDebugIdIdentifier="sentry-dbid-06364355-acce-4c0b-b2d0-584902a8e2b7")}catch{}})();function K(r){return N("MuiCircularProgress",r)}E("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const W=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,C,P,_,D;const t=44,B=S(C||(C=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),G=S(P||(P=l`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),L=r=>{const{classes:e,variant:s,color:o,disableShrink:d}=r,u={root:["root",s,`color${c(o)}`],svg:["svg"],circle:["circle",`circle${c(s)}`,d&&"circleDisableShrink"]};return F(u,K,e)},T=y("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${c(s.color)}`]]}})(({ownerState:r,theme:e})=>a({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&$(_||(_=l`
      animation: ${0} 1.4s linear infinite;
    `),B)),V=y("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),Z=y("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${c(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>a({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&$(D||(D=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),G)),q=j.forwardRef(function(e,s){const o=z({props:e,name:"MuiCircularProgress"}),{className:d,color:u="primary",disableShrink:w=!1,size:m=40,style:I,thickness:i=3.6,value:f=0,variant:v="indeterminate"}=o,M=R(o,W),n=a({},o,{color:u,disableShrink:w,size:m,thickness:i,value:f,variant:v}),p=L(n),g={},k={},b={};if(v==="determinate"){const x=2*Math.PI*((t-i)/2);g.strokeDasharray=x.toFixed(3),b["aria-valuenow"]=Math.round(f),g.strokeDashoffset=`${((100-f)/100*x).toFixed(3)}px`,k.transform="rotate(-90deg)"}return h.jsx(T,a({className:U(p.root,d),style:a({width:m,height:m},k,I),ownerState:n,ref:s,role:"progressbar"},b,M,{children:h.jsx(V,{className:p.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:h.jsx(Z,{className:p.circle,style:g,ownerState:n,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))}),Y=q;export{Y as C};
