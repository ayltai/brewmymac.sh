function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-CeunGrg9.js","./index-BvEm2UGZ.js","./index-C-wxagUl.js","./_commonjsHelpers-DnngPxDC.js","./iframe-C6jAGuY7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as m}from"./iframe-C6jAGuY7.js";import{R as r,r as d}from"./index-C-wxagUl.js";import{r as p,u}from"./react-18-DFHEH0eG.js";import{d as l,A as f,H as h,e as E}from"./index-BHZ7dQJv.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-DnngPxDC.js";import"./client-cq-BSE-S.js";import"./index-CRdi82cl.js";import"./extends-Bih7WiFi.js";import"./assertThisInitialized-JNA2pt04.js";import"./inheritsLoose-D9gYxgQu.js";import"./index-BSc9wpIy.js";import"./index-BWTWe0Km.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c9919791-0ac4-4f9f-94cb-3d049c0550c7",e._sentryDebugIdIdentifier="sentry-dbid-c9919791-0ac4-4f9f-94cb-3d049c0550c7")}catch{}})();var y={code:l,a:f,...h},_=class extends d.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:r.createElement(r.Fragment,null,t)}},H=class{constructor(){this.render=async(e,t,o)=>{let n={...y,...t==null?void 0:t.components},s=E;return new Promise((i,c)=>{m(()=>import("./index-CeunGrg9.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(({MDXProvider:a})=>p(r.createElement(_,{showException:c,key:Math.random()},r.createElement(a,{components:n},r.createElement(s,{context:e,docsParameter:t}))),o)).then(()=>i())})},this.unmount=e=>{u(e)}}};export{H as DocsRenderer,y as defaultComponents};