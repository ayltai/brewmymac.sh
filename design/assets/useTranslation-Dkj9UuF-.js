import{r as g}from"./index-C-wxagUl.js";import{I as $,R as A}from"./context-CdFf3LDh.js";import{g as F,a as M}from"./i18nInstance-DtMpzgZE.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="c757eefa-a3ef-406a-86a9-725f8a92ca0c",n._sentryDebugIdIdentifier="sentry-dbid-c757eefa-a3ef-406a-86a9-725f8a92ca0c")}catch{}})();function P(){if(console&&console.warn){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const S={};function I(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];typeof e[0]=="string"&&S[e[0]]||(typeof e[0]=="string"&&(S[e[0]]=new Date),P(...e))}const E=(n,e)=>()=>{if(n.isInitialized)e();else{const t=()=>{setTimeout(()=>{n.off("initialized",t)},0),e()};n.on("initialized",t)}};function R(n,e,t){n.loadNamespaces(e,E(n,t))}function v(n,e,t,s){typeof t=="string"&&(t=[t]),t.forEach(i=>{n.options.ns.indexOf(i)<0&&n.options.ns.push(i)}),n.loadLanguages(e,E(n,s))}function j(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=e.languages[0],i=e.options?e.options.fallbackLng:!1,a=e.languages[e.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const f=(w,m)=>{const r=e.services.backendConnector.state[`${w}|${m}`];return r===-1||r===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!f(e.isLanguageChangingTo,n)?!1:!!(e.hasResourceBundle(s,n)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||f(s,n)&&(!i||f(a,n)))}function B(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(I("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(n,{lng:t.lng,precheck:(i,a)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!a(i.isLanguageChangingTo,n))return!1}}):j(n,e,t)}const J=(n,e)=>{const t=g.useRef();return g.useEffect(()=>{t.current=e?t.current:n},[n,e]),t.current};function z(n,e,t,s){return n.getFixedT(e,t,s)}function O(n,e,t,s){return g.useCallback(z(n,e,t,s),[n,e,t,s])}function H(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:t}=e,{i18n:s,defaultNS:i}=g.useContext($)||{},a=t||s||M();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new A),!a){I("You will need to pass in an i18next instance by using initReactI18next");const o=(d,u)=>typeof u=="string"?u:u&&typeof u=="object"&&typeof u.defaultValue=="string"?u.defaultValue:Array.isArray(d)?d[d.length-1]:d,c=[o,{},!1];return c.t=o,c.i18n={},c.ready=!1,c}a.options.react&&a.options.react.wait!==void 0&&I("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const f={...F(),...a.options.react,...e},{useSuspense:w,keyPrefix:m}=f;let r=n||i||a.options&&a.options.defaultNS;r=typeof r=="string"?[r]:r||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(r);const p=(a.isInitialized||a.initializedStoreOnce)&&r.every(o=>B(o,a,f)),k=O(a,e.lng||null,f.nsMode==="fallback"?r:r[0],m),C=()=>k,N=()=>z(a,e.lng||null,f.nsMode==="fallback"?r:r[0],m),[x,b]=g.useState(C);let y=r.join();e.lng&&(y=`${e.lng}${y}`);const L=J(y),l=g.useRef(!0);g.useEffect(()=>{const{bindI18n:o,bindI18nStore:c}=f;l.current=!0,!p&&!w&&(e.lng?v(a,e.lng,r,()=>{l.current&&b(N)}):R(a,r,()=>{l.current&&b(N)})),p&&L&&L!==y&&l.current&&b(N);function d(){l.current&&b(N)}return o&&a&&a.on(o,d),c&&a&&a.store.on(c,d),()=>{l.current=!1,o&&a&&o.split(" ").forEach(u=>a.off(u,d)),c&&a&&c.split(" ").forEach(u=>a.store.off(u,d))}},[a,y]);const T=g.useRef(!0);g.useEffect(()=>{l.current&&!T.current&&b(C),T.current=!1},[a,m]);const h=[x,a,p];if(h.t=x,h.i18n=a,h.ready=p,p||!p&&!w)return h;throw new Promise(o=>{e.lng?v(a,e.lng,r,()=>o()):R(a,r,()=>o())})}export{H as u};
