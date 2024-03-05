import{j as t}from"./useTheme-AMHikNwr.js";import{r as y}from"./index-C-wxagUl.js";import{S as u}from"./SelectableCardView-CcoL21XX.js";import"./iframe-C6jAGuY7.js";import{S as x}from"./Stack--VKe57hX.js";import{B as s}from"./Box-BTFd3YFl.js";import{T as n}from"./Typography-C2KmF5Dd.js";import{L as b}from"./Link-BgQQveXc.js";import{c as S}from"./createSvgIcon-doiNn1VB.js";import"./extends-Bih7WiFi.js";import"./_commonjsHelpers-DnngPxDC.js";import"./createSvgIcon-BvxpG1At.js";import"./generateUtilityClasses-BkXz_rP6.js";import"./ownerWindow-BekXJnat.js";import"./useControlled-pFiEE0Ib.js";import"./useForkRef-DHyczKbH.js";import"./useEnhancedEffect-DicSz42a.js";import"./useEventCallback-CVO70Gln.js";import"./useIsFocusVisible-rM4MwBSL.js";import"./DeleteForever-Bghs0Iik.js";import"./ToggleButton-DRNMtV4H.js";import"./MaterialButton-BIDaHiM0.js";import"./styled-Cea7lQfD.js";import"./useThemeProps-DN7sIikO.js";import"./ButtonBase-DRswLrFq.js";import"./assertThisInitialized-JNA2pt04.js";import"./inheritsLoose-D9gYxgQu.js";import"./TransitionGroupContext-CSjgsBwq.js";import"./DialogView-Xpt4wlQl.js";import"./useTranslation-Dkj9UuF-.js";import"./context-CdFf3LDh.js";import"./i18nInstance-DtMpzgZE.js";import"./useTheme-C8Z8IRiV.js";import"./Backdrop-c1eof2Dq.js";import"./utils-BEtwtKnX.js";import"./index-CRdi82cl.js";import"./Modal-Bn0DxBsS.js";import"./useSlotProps-5DfGAFMd.js";import"./isHostComponent-BISCXPu1.js";import"./Portal-BvedyDEB.js";import"./Paper-BwAYxPvw.js";import"./IconButton-1MkcJn0e.js";import"./CardView-BztTlBRw.js";import"./TruncatedTypography-CeaNsljM.js";import"./Tooltip-CLqxHFmT.js";import"./Grow-xRpIP6ws.js";import"../sb-preview/runtime.js";import"./styled-C8BlTHvG.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="fba25503-a992-4e5c-8448-4f38eaa2330a",e._sentryDebugIdIdentifier="sentry-dbid-fba25503-a992-4e5c-8448-4f38eaa2330a")}catch{}})();const T=S(t.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings"),ut={component:u,title:"Components/Data Presentations/Selectable Card",tags:["autodocs"],argTypes:{selected:{description:"Whether the card is selected."},color:{description:"Color of the card. Defaults to `inherit`."},dialogAction:{description:"The primary action to show in the action area."},actionText:{description:"Text to show in the action area."},actionIcon:{description:"Icon to show in the action area."},children:{description:"The detailed content of the component"},onChange:{description:"Function to call when the card selection state is changed."}}},c="Explain more about the topic shown in the headline and subheader through supporting text.",p="https://nodejs.org",o={args:{description:c,color:"primary",title:"Headline",subtitle:"Subheader",children:t.jsxs(x,{spacing:2,children:[t.jsxs(s,{children:[t.jsx(n,{variant:"h5",fontWeight:"bold",children:"Description"}),t.jsx(n,{children:c})]}),t.jsxs(s,{children:[t.jsx(n,{variant:"h5",fontWeight:"bold",children:"Website"}),t.jsx(b,{href:p,target:"_blank",children:t.jsx(n,{children:p})})]})]})},render:e=>{const[r,a]=y.useState(!1);return t.jsx(u,{...e,selected:r,onChange:a})}},i={args:{...o.args,actionText:"Configure",actionIcon:t.jsx(T,{})}};var l,d,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    description,
    color: 'primary',
    title: 'Headline',
    subtitle: 'Subheader',
    children: <Stack spacing={2}>
                <Box>
                    <Typography variant='h5' fontWeight='bold'>
                        Description
                    </Typography>
                    <Typography>
                        {description}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h5' fontWeight='bold'>
                        Website
                    </Typography>
                    <Link href={infoUrl} target='_blank'>
                        <Typography>
                            {infoUrl}
                        </Typography>
                    </Link>
                </Box>
            </Stack>
  },
  render: props => {
    const [selected, setSelected] = useState(false);
    return <SelectableCardView {...props} selected={selected} onChange={setSelected} />;
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,g,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionText: 'Configure',
    actionIcon: <Settings />
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const yt=["Default","WithAction"];export{o as Default,i as WithAction,yt as __namedExportsOrder,ut as default};
