import{j as t}from"./useTheme-AMHikNwr.js";import{r as m}from"./index-C-wxagUl.js";import{T as u}from"./ToggleButton-DRNMtV4H.js";import"./iframe-C6jAGuY7.js";import{c as g}from"./createSvgIcon-doiNn1VB.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="aee6e133-4a4c-4ddd-ae85-80440552db3e",e._sentryDebugIdIdentifier="sentry-dbid-aee6e133-4a4c-4ddd-ae85-80440552db3e")}catch{}})();const r=g(t.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),x=g(t.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever"),f={component:u,title:"Components/Actions/Toggle",argTypes:{icon:{description:"The icon to show when the button is in the unselected state"},selectedIcon:{description:"The icon to show when the button is in the selected state"},deselectIcon:{description:"The icon to show when the button is in the selected state and is hovered"},text:{description:"The text to show when the button is in the unselected state"},selectedText:{description:"The text to show when the button is in the selected state"},deselectText:{description:"The text to show when the button is in the selected state and is hovered"},onChange:{description:"Function to call when the selected state is changed"}}},s={args:{icon:t.jsx(r,{}),selectedIcon:t.jsx(r,{}),deselectIcon:t.jsx(x,{}),text:"Select",selectedText:"Selected",deselectText:"Remove"},render:e=>{const[n,c]=m.useState(!1);return t.jsx(u,{...e,selected:n,onChange:c})}},o={args:{...s.args,selected:!0}};var d,a,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    icon: <Check />,
    selectedIcon: <Check />,
    deselectIcon: <DeleteForever />,
    text: 'Select',
    selectedText: 'Selected',
    deselectText: 'Remove'
  },
  render: props => {
    const [selected, setSelected] = useState(false);
    return <ToggleButton {...props} selected={selected} onChange={setSelected} />;
  }
}`,...(l=(a=s.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var i,h,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selected: true
  }
}`,...(p=(h=o.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const b=["Default","Selected"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Selected:o,__namedExportsOrder:b,default:f},Symbol.toStringTag,{value:"Module"}));export{v as C};