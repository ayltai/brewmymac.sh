import{d as D}from"./index-BWTWe0Km.js";(function(){try{var t=typeof window<"u"?window:typeof R<"u"?R:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="f2bfe488-d955-4d5e-a5c8-c453dec9d3db",t._sentryDebugIdIdentifier="sentry-dbid-f2bfe488-d955-4d5e-a5c8-c453dec9d3db")}catch{}})();let a;const N=new Uint8Array(16);function b(){if(!a&&(a=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!a))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(N)}const E=[];for(let t=0;t<256;++t)E.push((t+256).toString(16).slice(1));function V(t,e=0){return E[t[e+0]]+E[t[e+1]]+E[t[e+2]]+E[t[e+3]]+"-"+E[t[e+4]]+E[t[e+5]]+"-"+E[t[e+6]]+E[t[e+7]]+"-"+E[t[e+8]]+E[t[e+9]]+"-"+E[t[e+10]]+E[t[e+11]]+E[t[e+12]]+E[t[e+13]]+E[t[e+14]]+E[t[e+15]]}const f=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),g={randomUUID:f};function A(t,e,n){if(g.randomUUID&&!e&&!t)return g.randomUUID();t=t||{};const r=t.random||(t.rng||b)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let o=0;o<16;++o)e[n+o]=r[o];return e}return V(r)}var P=class extends Error{constructor(){super(...arguments),this.data={},this.documentation=!1,this.fromStorybook=!0}get fullErrorCode(){let t=String(this.code).padStart(4,"0");return`SB_${this.category}_${t}`}get name(){let t=this.constructor.name;return`${this.fullErrorCode} (${t})`}get message(){let t;return this.documentation===!0?t=`https://storybook.js.org/error/${this.fullErrorCode}`:typeof this.documentation=="string"?t=this.documentation:Array.isArray(this.documentation)&&(t=`
${this.documentation.map(e=>`	- ${e}`).join(`
`)}`),`${this.template()}${t!=null?`

More info: ${t}
`:""}`}},S=(t=>(t.PREVIEW_CLIENT_LOGGER="PREVIEW_CLIENT-LOGGER",t.PREVIEW_CHANNELS="PREVIEW_CHANNELS",t.PREVIEW_CORE_EVENTS="PREVIEW_CORE-EVENTS",t.PREVIEW_INSTRUMENTER="PREVIEW_INSTRUMENTER",t.PREVIEW_API="PREVIEW_API",t.PREVIEW_REACT_DOM_SHIM="PREVIEW_REACT-DOM-SHIM",t.PREVIEW_ROUTER="PREVIEW_ROUTER",t.PREVIEW_THEMING="PREVIEW_THEMING",t.RENDERER_HTML="RENDERER_HTML",t.RENDERER_PREACT="RENDERER_PREACT",t.RENDERER_REACT="RENDERER_REACT",t.RENDERER_SERVER="RENDERER_SERVER",t.RENDERER_SVELTE="RENDERER_SVELTE",t.RENDERER_VUE="RENDERER_VUE",t.RENDERER_VUE3="RENDERER_VUE3",t.RENDERER_WEB_COMPONENTS="RENDERER_WEB-COMPONENTS",t))(S||{}),W=class extends P{constructor(t){super(),this.data=t,this.category="PREVIEW_API",this.code=2,this.documentation="https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function"}template(){return D`
      We detected that you use an implicit action arg during ${this.data.phase} of your story.  
      ${this.data.deprecated?`
This is deprecated and won't work in Storybook 8 anymore.
`:""}
      Please provide an explicit spy to your args like this:
        import { fn } from '@storybook/test';
        ... 
        args: {
         ${this.data.name}: fn()
        }
    `}};const{addons:w}=__STORYBOOK_MODULE_PREVIEW_API__,{global:R}=__STORYBOOK_MODULE_GLOBAL__;var U="storybook/actions",M=`${U}/action-event`,x={depth:10,clearOnStoryChange:!0,limit:50},h=(t,e)=>{let n=Object.getPrototypeOf(t);return!n||e(n)?n:h(n,e)},j=t=>!!(typeof t=="object"&&t&&h(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),k=t=>{if(j(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let n=Object.getOwnPropertyDescriptor(e,"view"),r=n==null?void 0:n.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...n,value:Object.create(r.constructor.prototype)}),e}return t},$=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?A():Date.now().toString(36)+Math.random().toString(36).substring(2);function l(t,e={}){let n={...x,...e},r=function(...o){var u,_;if(e.implicit){let m=(u="__STORYBOOK_PREVIEW__"in R?R.__STORYBOOK_PREVIEW__:void 0)==null?void 0:u.storyRenders.find(d=>d.phase==="playing"||d.phase==="rendering");if(m){let d=!((_=window==null?void 0:window.FEATURES)!=null&&_.disallowImplicitActionsInRenderV8),y=new W({phase:m.phase,name:t,deprecated:d});if(d)console.warn(y);else throw y}}let i=w.getChannel(),s=$(),c=5,p=o.map(k),O=o.length>1?p:p[0],T={id:s,count:0,data:{name:t,args:O},options:{...n,maxDepth:c+(n.depth||3),allowFunction:n.allowFunction||!1}};i.emit(M,T)};return r.isAction=!0,r}var I=(t,e)=>typeof e[t]>"u"&&!(t in e),L=t=>{let{initialArgs:e,argTypes:n,id:r,parameters:{actions:o}}=t;if(!o||o.disable||!o.argTypesRegex||!n)return{};let i=new RegExp(o.argTypesRegex);return Object.entries(n).filter(([s])=>!!i.test(s)).reduce((s,[c,p])=>(I(c,e)&&(s[c]=l(c,{implicit:!0,id:r})),s),{})},v=t=>{let{initialArgs:e,argTypes:n,parameters:{actions:r}}=t;return r!=null&&r.disable||!n?{}:Object.entries(n).filter(([o,i])=>!!i.action).reduce((o,[i,s])=>(I(i,e)&&(o[i]=l(typeof s.action=="string"?s.action:i)),o),{})},F=[v,L],B=t=>{let{args:e,parameters:{actions:n}}=t;n!=null&&n.disable||Object.entries(e).filter(([,r])=>typeof r=="function"&&"_isMockFunction"in r&&r._isMockFunction).forEach(([r,o])=>{let i=o.getMockImplementation();if((i==null?void 0:i._actionAttached)!==!0&&(i==null?void 0:i.isAction)!==!0){let s=(...c)=>(l(r)(...c),i==null?void 0:i(...c));s._actionAttached=!0,o.mockImplementation(s)}})},G=[B];export{F as argsEnhancers,G as loaders};