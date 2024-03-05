import{j as o}from"./useTheme-AMHikNwr.js";import{M as i}from"./MaterialButton-BIDaHiM0.js";import"./iframe-C6jAGuY7.js";import{C as p}from"./CardView-BztTlBRw.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[r]="174f6e28-b335-4c16-8d07-a2d14dcd703a",n._sentryDebugIdIdentifier="sentry-dbid-174f6e28-b335-4c16-8d07-a2d14dcd703a")}catch{}})();const h={component:p,title:"Components/Data Presentations/Card",argTypes:{title:{description:"Title of the card"},subtitle:{description:"Subtitle of the card"},description:{description:"Description of the card"},onClick:{description:"Function to call when the button is clicked"},children:{description:"One or more buttons"}}},e={args:{title:"Headline",subtitle:"Subheader",description:"Explain more about the topic shown in the headline and subheader through supporting text."}},t={args:{...e.args,children:[o.jsx(i,{variant:"outlined",children:"Action 1"},"1"),o.jsx(i,{variant:"contained",children:"Action 2"},"2")]}};var a,s,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Headline',
    subtitle: 'Subheader',
    description: 'Explain more about the topic shown in the headline and subheader through supporting text.'
  }
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var c,l,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: [<MaterialButton key='1' variant='outlined'>
                Action 1
            </MaterialButton>, <MaterialButton key='2' variant='contained'>
                Action 2
            </MaterialButton>]
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const m=["Default","WithButtons"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:e,WithButtons:t,__namedExportsOrder:m,default:h},Symbol.toStringTag,{value:"Module"}));export{_ as C};
