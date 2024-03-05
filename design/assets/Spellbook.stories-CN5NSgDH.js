import{j as i}from"./useTheme-AMHikNwr.js";import{P as E}from"./react-redux-C0ztQLYa.js";import{c as j}from"./Instruction-BChgthlC.js";import{r as e}from"./index-C-wxagUl.js";import{b as P,c as M,h as b,d as N}from"./index-83WVdsuF.js";import"./iframe-C6jAGuY7.js";import{u as T,a as A}from"./index-e5L3goGc.js";import"./DetailsView-D1SoIXt0.js";import{T as V}from"./TweakDetailsView-DNE5_Fm1.js";import{S as O}from"./ShoppingCartDetail-DPlm5RQ9.js";import{S as q}from"./Instruction-CjCSRTjC.js";import"./extends-Bih7WiFi.js";import"./_commonjsHelpers-DnngPxDC.js";import"./index-CRdi82cl.js";import"./client-cq-BSE-S.js";import"./index-D_MYsFOR.js";import"./constants-DnSO8wwA.js";import"./CopyableInput-D-eNkMao.js";import"./createSvgIcon-BvxpG1At.js";import"./createSvgIcon-doiNn1VB.js";import"./generateUtilityClasses-BkXz_rP6.js";import"./useThemeProps-DN7sIikO.js";import"./styled-Cea7lQfD.js";import"./ownerWindow-BekXJnat.js";import"./useControlled-pFiEE0Ib.js";import"./useForkRef-DHyczKbH.js";import"./useEnhancedEffect-DicSz42a.js";import"./useEventCallback-CVO70Gln.js";import"./useIsFocusVisible-rM4MwBSL.js";import"./OutlinedInput-tDNia01P.js";import"./InputBase-DmCtuGzU.js";import"./isHostComponent-BISCXPu1.js";import"./GlobalStyles-DBIS83lM.js";import"./useTranslation-Dkj9UuF-.js";import"./context-CdFf3LDh.js";import"./i18nInstance-DtMpzgZE.js";import"./Typography-C2KmF5Dd.js";import"./Tooltip-CLqxHFmT.js";import"./useTheme-C8Z8IRiV.js";import"./Portal-BvedyDEB.js";import"./useSlotProps-5DfGAFMd.js";import"./Grow-xRpIP6ws.js";import"./utils-BEtwtKnX.js";import"./inheritsLoose-D9gYxgQu.js";import"./TransitionGroupContext-CSjgsBwq.js";import"./IconButton-1MkcJn0e.js";import"./ButtonBase-DRswLrFq.js";import"./assertThisInitialized-JNA2pt04.js";import"./Paper-BwAYxPvw.js";import"./DialogView-Xpt4wlQl.js";import"./MaterialButton-BIDaHiM0.js";import"./Backdrop-c1eof2Dq.js";import"./Modal-Bn0DxBsS.js";import"./Stack--VKe57hX.js";import"./styled-C8BlTHvG.js";import"./Link-BgQQveXc.js";import"../sb-preview/runtime.js";import"./Box-BTFd3YFl.js";import"./DynamicTypedInput-DSMEF-Kv.js";import"./List-uRYJW8Nf.js";import"./Divider-B9IcfsAI.js";import"./EmptyState-f8e3YPqZ.js";import"./ListView-DL-Svc_v.js";import"./DeleteForever-Bghs0Iik.js";import"./Loading-Cq4OzF6A.js";import"./CircularProgress-CYLV6hHd.js";import"./TruncatedTypography-CeaNsljM.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="e692d24a-a9bb-4d6b-b49b-49036e904294",o._sentryDebugIdIdentifier="sentry-dbid-e692d24a-a9bb-4d6b-b49b-49036e904294")}catch{}})();const u=()=>{const[o,s]=e.useState(!1),[t,k]=e.useState(),[y,w]=e.useState(),{tweaks:a}=T(r=>r.spellbook),[n,{data:m,error:c,reset:v}]=P(),l=A(),_=r=>k(r),x=r=>l(N(r)),D=()=>s(!0),I=e.useCallback((r,d)=>{if(t&&d){const f={...t};f.values[t.parameters.indexOf(r)]=d,l(M(f))}},[l,t]),C=()=>s(!1);return e.useEffect(()=>{o&&a.length>0&&n(a).catch(b)},[n,a,o]),e.useEffect(()=>{m&&w(m)},[m]),e.useEffect(()=>{c&&b(c)},[c]),i.jsx(O,{items:a,detailsView:i.jsx(V,{description:t==null?void 0:t.description,infoUrl:t==null?void 0:t.infoUrl,parameters:(t==null?void 0:t.parameters)??[],types:(t==null?void 0:t.types)??[],values:(t==null?void 0:t.values)??[],onChange:I}),instruction:i.jsx(q,{open:o,transactionId:y,onClose:C}),instructionShown:o,onSelect:_,onDelete:x,onNext:D,checkout:n,reset:v})};try{u.displayName="Spellbook",u.__docgenInfo={description:"A spellbook contains a list of selected tweaks.",displayName:"Spellbook",props:{}}}catch{}const Zt={component:u,title:"Components/Data Presentations/Spellbook",tags:["autodocs"],argTypes:{}},B=j({spellbook:{tweaks:[{id:"1",name:"magic.1",description:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",author:"BrewMyMac",parameters:["Disable"],types:["boolean"],values:[!0]},{id:"2",name:"magic.2",description:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",author:"BrewMyMac",parameters:["Name","Width","Height"],types:["string","number","number"],values:["Magic",1920,1024]}]}}),p={args:{},decorators:[o=>i.jsx(E,{store:B,children:i.jsx(o,{})})]};var g,h,S;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {},
  decorators: [StoryComponent => <Provider store={store}>
                <StoryComponent />
            </Provider>]
}`,...(S=(h=p.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const $t=["Default"];export{p as Default,$t as __namedExportsOrder,Zt as default};
