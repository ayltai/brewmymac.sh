import{i as w,j as e}from"./useTheme-AMHikNwr.js";import"./iframe-C6jAGuY7.js";import{r as q}from"./createSvgIcon-BvxpG1At.js";import{d as S}from"./DeleteForever-Bghs0Iik.js";import{r as y}from"./index-C-wxagUl.js";import{T}from"./ToggleButton-DRNMtV4H.js";import{D as k}from"./DialogView-Xpt4wlQl.js";import{M as D}from"./MaterialButton-BIDaHiM0.js";import{C as R}from"./CardView-BztTlBRw.js";import{u as M}from"./useTheme-C8Z8IRiV.js";import{u as A}from"./useTranslation-Dkj9UuF-.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="b2b1bab4-c691-4e45-95f6-d32283855705",t._sentryDebugIdIdentifier="sentry-dbid-b2b1bab4-c691-4e45-95f6-d32283855705")}catch{}})();var d={},E=w;Object.defineProperty(d,"__esModule",{value:!0});var s=d.default=void 0,N=E(q()),B=e;s=d.default=(0,N.default)((0,B.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");const O=t=>r=>{const{style:h,selected:l=!1,color:a,dialogAction:x,actionIcon:c,actionText:u,children:p,onChange:m,...C}=r,[_,f]=y.useState(!1),n=M(),{t:i}=A(),I=y.useMemo(()=>a==="primary"?n.palette.primary.main:a==="secondary"?n.palette.secondary.main:n.palette.divider,[a,n]),b=()=>f(!0),j=V=>m&&m(V),v=()=>f(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{style:{...h,border:`1px solid ${l?I:"transparent"}`,backgroundColor:l?n.palette.action.selected:n.palette.background.paper},onClick:b,...C,children:[(c||u)&&e.jsx(D,{color:a,startIcon:c,onClick:b,children:u}),e.jsx(T,{selected:l,color:a,icon:e.jsx(s,{}),text:i("action.select"),selectedIcon:e.jsx(s,{}),selectedText:i("action.deselect"),deselectIcon:e.jsx(S,{}),deselectText:i("action.remove"),onChange:j})]}),p&&e.jsx(k,{open:_,color:a,title:r.title,action:x,onClose:v,children:p})]})},g=O(R);try{g.displayName="SelectableCardView",g.__docgenInfo={description:"A selectable card displays a title, subtitle, description, and optionally one or more buttons.",displayName:"SelectableCardView",props:{subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},actionText:{defaultValue:null,description:"",name:"actionText",required:!1,type:{name:"string"}},actionIcon:{defaultValue:null,description:"",name:"actionIcon",required:!1,type:{name:"ReactNode"}},dialogAction:{defaultValue:null,description:"",name:"dialogAction",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((selected: boolean) => void)"}}}}}catch{}export{g as S};
