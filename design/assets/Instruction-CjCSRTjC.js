import{j as t}from"./useTheme-AMHikNwr.js";import{u as c}from"./index-e5L3goGc.js";import{I as p}from"./Instruction-BChgthlC.js";import"./iframe-C6jAGuY7.js";import{u as m}from"./useTranslation-Dkj9UuF-.js";import{B as i}from"./Box-BTFd3YFl.js";import{T as a}from"./Typography-C2KmF5Dd.js";import{L as f}from"./Link-BgQQveXc.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[r]="9c0bc734-7901-4b44-ac7a-48270f87b555",n._sentryDebugIdIdentifier="sentry-dbid-9c0bc734-7901-4b44-ac7a-48270f87b555")}catch{}})();const d=n=>{const{transactionId:r,...s}=n,{tweaks:l}=c(e=>e.spellbook),{themeMode:u}=c(e=>e.preference),{t:o}=m();return t.jsx(p,{transactionId:r,title:o("tweaks.checkout.copy"),...s,children:l.some(e=>e.sipInvolved)&&t.jsxs(t.Fragment,{children:[t.jsxs(i,{paddingBottom:2,children:[t.jsx(a,{children:o("tweaks.checkout.instructions.1")}),t.jsx(i,{sx:{borderRadius:"1rem",backgroundColor:u==="light"?"#ffccbc":"#d84315"},padding:2,children:l.filter(e=>e.sipInvolved).map(e=>t.jsx(a,{children:`• ${e.name}`},e.id))})]}),t.jsxs(i,{paddingBottom:2,children:[t.jsx(a,{children:o("tweaks.checkout.instructions.2")}),t.jsx(f,{href:"https://developer.apple.com/documentation/security/disabling_and_enabling_system_integrity_protection",target:"_blank",rel:"noreferrer",children:"https://developer.apple.com/documentation/security/disabling_and_enabling_system_integrity_protection"})]})]})})};try{d.displayName="SpellbookInstruction",d.__docgenInfo={description:"An instruction dialog that informs users about how to apply the selected tweaks.",displayName:"SpellbookInstruction",props:{transactionId:{defaultValue:null,description:"",name:"transactionId",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"info"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}export{d as S};
