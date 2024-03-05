import{d as M}from"./index-BWTWe0Km.js";(function(){try{var r=typeof $<"u"?$:typeof m<"u"?m:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="5fc44c1d-361d-41f9-88cb-78b0272e511a",r._sentryDebugIdIdentifier="sentry-dbid-5fc44c1d-361d-41f9-88cb-78b0272e511a")}catch{}})();const{useMemo:y,useEffect:k}=__STORYBOOK_MODULE_PREVIEW_API__,{global:m}=__STORYBOOK_MODULE_GLOBAL__,{logger:B}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var u="backgrounds",{document:s,window:$}=m,S=()=>$.matchMedia("(prefers-reduced-motion: reduce)").matches,x=(r,e=[],a)=>{if(r==="transparent")return"transparent";if(e.find(t=>t.value===r))return r;let n=e.find(t=>t.name===a);if(n)return n.value;if(a){let t=e.map(o=>o.name).join(", ");B.warn(M`
        Backgrounds Addon: could not find the default color "${a}".
        These are the available colors for your story based on your configuration:
        ${t}.
      `)}return"transparent"},E=r=>{(Array.isArray(r)?r:[r]).forEach(O)},O=r=>{var a;let e=s.getElementById(r);e&&((a=e.parentElement)==null||a.removeChild(e))},w=(r,e)=>{let a=s.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{let n=s.createElement("style");n.setAttribute("id",r),n.innerHTML=e,s.head.appendChild(n)}},I=(r,e,a)=>{var t;let n=s.getElementById(r);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{let o=s.createElement("style");o.setAttribute("id",r),o.innerHTML=e;let i=`addon-backgrounds-grid${a?`-docs-${a}`:""}`,d=s.getElementById(i);d?(t=d.parentElement)==null||t.insertBefore(o,d):s.head.appendChild(o)}},A=(r,e)=>{var c;let{globals:a,parameters:n}=e,t=(c=a[u])==null?void 0:c.value,o=n[u],i=y(()=>o.disable?"transparent":x(t,o.values,o.default),[o,t]),d=y(()=>i&&i!=="transparent",[i]),g=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",p=y(()=>`
      ${g} {
        background: ${i} !important;
        ${S()?"":"transition: background-color 0.3s;"}
      }
    `,[i,g]);return k(()=>{let l=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!d){E(l);return}I(l,p,e.viewMode==="docs"?e.id:null)},[d,p,e]),r()},L=(r,e)=>{var _;let{globals:a,parameters:n}=e,t=n[u].grid,o=((_=a[u])==null?void 0:_.grid)===!0&&t.disable!==!0,{cellAmount:i,cellSize:d,opacity:g}=t,p=e.viewMode==="docs",c=n.layout===void 0||n.layout==="padded"?16:0,l=t.offsetX??(p?20:c),f=t.offsetY??(p?20:c),v=y(()=>{let b=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",h=[`${d*i}px ${d*i}px`,`${d*i}px ${d*i}px`,`${d}px ${d}px`,`${d}px ${d}px`].join(", ");return`
      ${b} {
        background-size: ${h} !important;
        background-position: ${l}px ${f}px, ${l}px ${f}px, ${l}px ${f}px, ${l}px ${f}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${g/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g/2}) 1px, transparent 1px) !important;
      }
    `},[d]);return k(()=>{let b=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!o){E(b);return}w(b,v)},[o,v,e]),r()},C=[L,A],D={[u]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},R={[u]:null};export{C as decorators,R as globals,D as parameters};
