import{c as s,_ as ir,j as d,i as sr}from"./useTheme-AMHikNwr.js";import"./iframe-C6jAGuY7.js";import{r as lr}from"./createSvgIcon-BvxpG1At.js";import{u as O}from"./index-e5L3goGc.js";import{u as cr}from"./useTranslation-Dkj9UuF-.js";import{I as pr}from"./IconButton-1MkcJn0e.js";import{_ as y}from"./extends-Bih7WiFi.js";import{r as _}from"./index-C-wxagUl.js";import{a as gr,g as dr,c as U}from"./generateUtilityClasses-BkXz_rP6.js";import{u as ur}from"./useThemeProps-DN7sIikO.js";import{s as F,c as fr}from"./styled-Cea7lQfD.js";import{u as W}from"./useSlotProps-5DfGAFMd.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="ac2f24d4-733d-4e57-8be3-6d3e41ac3adf",o._sentryDebugIdIdentifier="sentry-dbid-ac2f24d4-733d-4e57-8be3-6d3e41ac3adf")}catch{}})();const H=o=>{const t=_.useRef({});return _.useEffect(()=>{t.current=o}),t.current};function vr(o){const{badgeContent:t,invisible:r=!1,max:n=99,showZero:e=!1}=o,l=H({badgeContent:t,max:n});let i=r;r===!1&&t===0&&!e&&(i=!0);const{badgeContent:a,max:p=n}=i?l:o,g=a&&Number(a)>p?`${p}+`:a;return{badgeContent:a,invisible:i,max:p,displayValue:g}}function mr(o){return ur}function hr(o){return dr("MuiBadge",o)}const br=gr("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),c=br,Or=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],x=10,P=4,yr=mr(),xr=o=>{const{color:t,anchorOrigin:r,invisible:n,overlap:e,variant:l,classes:i={}}=o,a={root:["root"],badge:["badge",l,n&&"invisible",`anchorOrigin${s(r.vertical)}${s(r.horizontal)}`,`anchorOrigin${s(r.vertical)}${s(r.horizontal)}${s(e)}`,`overlap${s(e)}`,t!=="default"&&`color${s(t)}`]};return fr(a,hr,i)},Pr=F("span",{name:"MuiBadge",slot:"Root",overridesResolver:(o,t)=>t.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),_r=F("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(o,t)=>{const{ownerState:r}=o;return[t.badge,t[r.variant],t[`anchorOrigin${s(r.anchorOrigin.vertical)}${s(r.anchorOrigin.horizontal)}${s(r.overlap)}`],r.color!=="default"&&t[`color${s(r.color)}`],r.invisible&&t.invisible]}})(({theme:o})=>{var t;return{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:x*2,lineHeight:1,padding:"0 6px",height:x*2,borderRadius:x,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),variants:[...Object.keys(((t=o.vars)!=null?t:o).palette).filter(r=>{var n,e;return((n=o.vars)!=null?n:o).palette[r].main&&((e=o.vars)!=null?e:o).palette[r].contrastText}).map(r=>({props:{color:r},style:{backgroundColor:(o.vars||o).palette[r].main,color:(o.vars||o).palette[r].contrastText}})),{props:{variant:"dot"},style:{borderRadius:P,height:P*2,minWidth:P*2,padding:0}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${c.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular",style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${c.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${c.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular",style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${c.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${c.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular",style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${c.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${c.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular",style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${c.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}}]}}),Cr=_.forwardRef(function(t,r){var n,e,l,i,a,p;const g=yr({props:t,name:"MuiBadge"}),{anchorOrigin:$={vertical:"top",horizontal:"right"},className:q,component:Z,components:R={},componentsProps:B={},children:w,overlap:z="rectangular",color:I="default",invisible:G=!1,max:J=99,badgeContent:T,slots:u,slotProps:f,showZero:S=!1,variant:v="standard"}=g,K=ir(g,Or),{badgeContent:j,invisible:Q,max:X,displayValue:Y}=vr({max:J,invisible:G,badgeContent:T,showZero:S}),rr=H({anchorOrigin:$,color:I,overlap:z,variant:v,badgeContent:T}),D=Q||j==null&&v!=="dot",{color:or=I,overlap:tr=z,anchorOrigin:ar=$,variant:N=v}=D?rr:g,k=N!=="dot"?Y:void 0,m=y({},g,{badgeContent:j,invisible:D,max:X,displayValue:k,showZero:S,anchorOrigin:ar,color:or,overlap:tr,variant:N}),M=xr(m),A=(n=(e=u==null?void 0:u.root)!=null?e:R.Root)!=null?n:Pr,L=(l=(i=u==null?void 0:u.badge)!=null?i:R.Badge)!=null?l:_r,h=(a=f==null?void 0:f.root)!=null?a:B.root,b=(p=f==null?void 0:f.badge)!=null?p:B.badge,nr=W({elementType:A,externalSlotProps:h,externalForwardedProps:K,additionalProps:{ref:r,as:Z},ownerState:m,className:U(h==null?void 0:h.className,M.root,q)}),er=W({elementType:L,externalSlotProps:b,ownerState:m,className:U(M.badge,b==null?void 0:b.className)});return d.jsxs(A,y({},nr,{children:[w,d.jsx(L,y({},er,{children:k}))]}))}),$r=Cr;var C={},Rr=sr;Object.defineProperty(C,"__esModule",{value:!0});var V=C.default=void 0,Br=Rr(lr()),zr=d;V=C.default=(0,Br.default)((0,zr.jsx)("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"}),"ShoppingCart");const E=({onClick:o,...t})=>{const{product:r}=O(a=>a.preference),{ingredients:n}=O(a=>a.recipe),{tweaks:e}=O(a=>a.spellbook),{t:l}=cr(),i=(r==="packages"?n:e).length;return d.jsx(pr,{"aria-label":l("action.view_cart"),onClick:o,...t,children:d.jsx($r,{badgeContent:i>0?String(i):void 0,color:r==="packages"?"primary":"secondary",children:d.jsx(V,{})})})};try{E.displayName="ShoppingCart",E.__docgenInfo={description:"An icon button displays the number of items selected.",displayName:"ShoppingCart",props:{}}}catch{}export{E as S};