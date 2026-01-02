import{r as N,j as q,c as me,a as ie,b as J}from"./index-BY360Yf7.js";import{B as pa,I as si,S as Uc,C as $c}from"./CopyIconButton-BbeowFxx.js";import{b as Lt,g as Ft,k as jc,_ as V,a as pt,c as Ot,d as ee,T as qc,l as Cl,m as Ci,i as Pi}from"./createTheme-DZNTmIOu.js";import{d as Pl,c as zc,i as Hs,G as Wc,a as ma,r as Si}from"./createSvgIcon-msvf7KEy.js";import{b as Ht,s as Z,c as Bt,j as Vn,o as es,g as Hc,u as ns,m as Kc,n as ii,d as Ne,h as hr,P as Sl,e as rs,a as Vl,p as Gc,k as Qc}from"./utils-CPSpa8QW.js";import{G as Xc,u as Yc}from"./index-D10fKUkU.js";import{a as Jc,g as Zc,M as th,D as eh}from"./Dialog-BOQFoou4.js";import"./Fade-6IBf8qEm.js";function nh(n){return Lt("MuiTypography",n)}Ft("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const rh=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],sh=n=>{const{align:t,gutterBottom:e,noWrap:r,paragraph:s,variant:o,classes:a}=n,u={root:["root",o,n.align!=="inherit"&&`align${ee(t)}`,e&&"gutterBottom",r&&"noWrap",s&&"paragraph"]};return Bt(u,nh,a)},ih=Z("span",{name:"MuiTypography",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,e.variant&&t[e.variant],e.align!=="inherit"&&t[`align${ee(e.align)}`],e.noWrap&&t.noWrap,e.gutterBottom&&t.gutterBottom,e.paragraph&&t.paragraph]}})(({theme:n,ownerState:t})=>V({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&n.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),ga={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},oh={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ah=n=>oh[n]||n,lh=N.forwardRef(function(t,e){const r=Ht({props:t,name:"MuiTypography"}),s=ah(r.color),o=jc(V({},r,{color:s})),{align:a="inherit",className:u,component:h,gutterBottom:d=!1,noWrap:p=!1,paragraph:E=!1,variant:w="body1",variantMapping:b=ga}=o,P=pt(o,rh),M=V({},o,{align:a,color:s,className:u,component:h,gutterBottom:d,noWrap:p,paragraph:E,variant:w,variantMapping:b}),C=h||(E?"p":b[w]||ga[w])||"span",O=sh(M);return q.jsx(ih,V({as:C,ref:e,ownerState:M,className:Ot(O.root,u)},P))}),uh=["onChange","maxRows","minRows","style","value"];function zr(n){return parseInt(n,10)||0}const ch={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function hh(n){for(const t in n)return!1;return!0}function _a(n){return hh(n)||n.outerHeightStyle===0&&!n.overflowing}const dh=N.forwardRef(function(t,e){const{onChange:r,maxRows:s,minRows:o=1,style:a,value:u}=t,h=pt(t,uh),{current:d}=N.useRef(u!=null),p=N.useRef(null),E=Vn(e,p),w=N.useRef(null),b=N.useRef(null),P=N.useCallback(()=>{const k=p.current,x=b.current;if(!k||!x)return;const B=es(k).getComputedStyle(k);if(B.width==="0px")return{outerHeightStyle:0,overflowing:!1};x.style.width=B.width,x.value=k.value||t.placeholder||"x",x.value.slice(-1)===`
`&&(x.value+=" ");const y=B.boxSizing,m=zr(B.paddingBottom)+zr(B.paddingTop),_=zr(B.borderBottomWidth)+zr(B.borderTopWidth),v=x.scrollHeight;x.value="x";const T=x.scrollHeight;let I=v;o&&(I=Math.max(Number(o)*T,I)),s&&(I=Math.min(Number(s)*T,I)),I=Math.max(I,T);const g=I+(y==="border-box"?m+_:0),X=Math.abs(I-v)<=1;return{outerHeightStyle:g,overflowing:X}},[s,o,t.placeholder]),M=Hc(()=>{const k=p.current,x=P();if(!k||!x||_a(x))return!1;const j=x.outerHeightStyle;return w.current!=null&&w.current!==j}),C=N.useCallback(()=>{const k=p.current,x=P();if(!k||!x||_a(x))return;const j=x.outerHeightStyle;w.current!==j&&(w.current=j,k.style.height=`${j}px`),k.style.overflow=x.overflowing?"hidden":""},[P]),O=N.useRef(-1);ns(()=>{const k=Pl(C),x=p==null?void 0:p.current;if(!x)return;const j=es(x);j.addEventListener("resize",k);let B;return typeof ResizeObserver<"u"&&(B=new ResizeObserver(()=>{M()&&(B.unobserve(x),cancelAnimationFrame(O.current),C(),O.current=requestAnimationFrame(()=>{B.observe(x)}))}),B.observe(x)),()=>{k.clear(),cancelAnimationFrame(O.current),j.removeEventListener("resize",k),B&&B.disconnect()}},[P,C,M]),ns(()=>{C()});const F=k=>{d||C(),r&&r(k)};return q.jsxs(N.Fragment,{children:[q.jsx("textarea",V({value:u,onChange:F,ref:E,rows:o,style:a},h)),q.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:b,tabIndex:-1,style:V({},ch.shadow,a,{paddingTop:0,paddingBottom:0})})]})});function xn({props:n,states:t,muiFormControl:e}){return t.reduce((r,s)=>(r[s]=n[s],e&&typeof n[s]>"u"&&(r[s]=e[s]),r),{})}const Vi=N.createContext(void 0);function Dn(){return N.useContext(Vi)}function fh(n){return q.jsx(Xc,V({},n,{defaultTheme:Kc,themeId:qc}))}function ya(n){return n!=null&&!(Array.isArray(n)&&n.length===0)}function ss(n,t=!1){return n&&(ya(n.value)&&n.value!==""||t&&ya(n.defaultValue)&&n.defaultValue!=="")}function ph(n){return n.startAdornment}function mh(n){return Lt("MuiInputBase",n)}const In=Ft("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),gh=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],gs=(n,t)=>{const{ownerState:e}=n;return[t.root,e.formControl&&t.formControl,e.startAdornment&&t.adornedStart,e.endAdornment&&t.adornedEnd,e.error&&t.error,e.size==="small"&&t.sizeSmall,e.multiline&&t.multiline,e.color&&t[`color${ee(e.color)}`],e.fullWidth&&t.fullWidth,e.hiddenLabel&&t.hiddenLabel]},_s=(n,t)=>{const{ownerState:e}=n;return[t.input,e.size==="small"&&t.inputSizeSmall,e.multiline&&t.inputMultiline,e.type==="search"&&t.inputTypeSearch,e.startAdornment&&t.inputAdornedStart,e.endAdornment&&t.inputAdornedEnd,e.hiddenLabel&&t.inputHiddenLabel]},_h=n=>{const{classes:t,color:e,disabled:r,error:s,endAdornment:o,focused:a,formControl:u,fullWidth:h,hiddenLabel:d,multiline:p,readOnly:E,size:w,startAdornment:b,type:P}=n,M={root:["root",`color${ee(e)}`,r&&"disabled",s&&"error",h&&"fullWidth",a&&"focused",u&&"formControl",w&&w!=="medium"&&`size${ee(w)}`,p&&"multiline",b&&"adornedStart",o&&"adornedEnd",d&&"hiddenLabel",E&&"readOnly"],input:["input",r&&"disabled",P==="search"&&"inputTypeSearch",p&&"inputMultiline",w==="small"&&"inputSizeSmall",d&&"inputHiddenLabel",b&&"inputAdornedStart",o&&"inputAdornedEnd",E&&"readOnly"]};return Bt(M,mh,t)},ys=Z("div",{name:"MuiInputBase",slot:"Root",overridesResolver:gs})(({theme:n,ownerState:t})=>V({},n.typography.body1,{color:(n.vars||n).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${In.disabled}`]:{color:(n.vars||n).palette.text.disabled,cursor:"default"}},t.multiline&&V({padding:"4px 0 5px"},t.size==="small"&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),vs=Z("input",{name:"MuiInputBase",slot:"Input",overridesResolver:_s})(({theme:n,ownerState:t})=>{const e=n.palette.mode==="light",r=V({color:"currentColor"},n.vars?{opacity:n.vars.opacity.inputPlaceholder}:{opacity:e?.42:.5},{transition:n.transitions.create("opacity",{duration:n.transitions.duration.shorter})}),s={opacity:"0 !important"},o=n.vars?{opacity:n.vars.opacity.inputPlaceholder}:{opacity:e?.42:.5};return V({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${In.formControl} &`]:{"&::-webkit-input-placeholder":s,"&::-moz-placeholder":s,"&:-ms-input-placeholder":s,"&::-ms-input-placeholder":s,"&:focus::-webkit-input-placeholder":o,"&:focus::-moz-placeholder":o,"&:focus:-ms-input-placeholder":o,"&:focus::-ms-input-placeholder":o},[`&.${In.disabled}`]:{opacity:1,WebkitTextFillColor:(n.vars||n).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},t.size==="small"&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},t.type==="search"&&{MozAppearance:"textfield"})}),yh=q.jsx(fh,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),xi=N.forwardRef(function(t,e){var r;const s=Ht({props:t,name:"MuiInputBase"}),{"aria-describedby":o,autoComplete:a,autoFocus:u,className:h,components:d={},componentsProps:p={},defaultValue:E,disabled:w,disableInjectingGlobalStyles:b,endAdornment:P,fullWidth:M=!1,id:C,inputComponent:O="input",inputProps:F={},inputRef:k,maxRows:x,minRows:j,multiline:B=!1,name:y,onBlur:m,onChange:_,onClick:v,onFocus:T,onKeyDown:I,onKeyUp:g,placeholder:X,readOnly:at,renderSuffix:Vt,rows:dt,slotProps:K={},slots:At={},startAdornment:Zt,type:ae="text",value:mt}=s,tt=pt(s,gh),vt=F.value!=null?F.value:mt,{current:kt}=N.useRef(vt!=null),Ut=N.useRef(),ne=N.useCallback(lt=>{},[]),le=Vn(Ut,k,F.ref,ne),[we,re]=N.useState(!1),it=Dn(),Et=xn({props:s,muiFormControl:it,states:["color","disabled","error","hiddenLabel","size","required","filled"]});Et.focused=it?it.focused:we,N.useEffect(()=>{!it&&w&&we&&(re(!1),m&&m())},[it,w,we,m]);const ot=it&&it.onFilled,gt=it&&it.onEmpty,ft=N.useCallback(lt=>{ss(lt)?ot&&ot():gt&&gt()},[ot,gt]);ns(()=>{kt&&ft({value:vt})},[vt,ft,kt]);const Ae=lt=>{if(Et.disabled){lt.stopPropagation();return}T&&T(lt),F.onFocus&&F.onFocus(lt),it&&it.onFocus?it.onFocus(lt):re(!0)},ue=lt=>{m&&m(lt),F.onBlur&&F.onBlur(lt),it&&it.onBlur?it.onBlur(lt):re(!1)},ce=(lt,...ye)=>{if(!kt){const Re=lt.target||Ut.current;if(Re==null)throw new Error(Cl(1));ft({value:Re.value})}F.onChange&&F.onChange(lt,...ye),_&&_(lt,...ye)};N.useEffect(()=>{ft(Ut.current)},[]);const he=lt=>{Ut.current&&lt.currentTarget===lt.target&&Ut.current.focus(),v&&v(lt)};let de=O,bt=F;B&&de==="input"&&(dt?bt=V({type:void 0,minRows:dt,maxRows:dt},bt):bt=V({type:void 0,maxRows:x,minRows:j},bt),de=dh);const be=lt=>{ft(lt.animationName==="mui-auto-fill-cancel"?Ut.current:{value:"x"})};N.useEffect(()=>{it&&it.setAdornedStart(!!Zt)},[it,Zt]);const Kt=V({},s,{color:Et.color||"primary",disabled:Et.disabled,endAdornment:P,error:Et.error,focused:Et.focused,formControl:it,fullWidth:M,hiddenLabel:Et.hiddenLabel,multiline:B,size:Et.size,startAdornment:Zt,type:ae}),Tt=_h(Kt),Ke=At.root||d.Root||ys,It=K.root||p.root||{},Rt=At.input||d.Input||vs;return bt=V({},bt,(r=K.input)!=null?r:p.input),q.jsxs(N.Fragment,{children:[!b&&yh,q.jsxs(Ke,V({},It,!ii(Ke)&&{ownerState:V({},Kt,It.ownerState)},{ref:e,onClick:he},tt,{className:Ot(Tt.root,It.className,h,at&&"MuiInputBase-readOnly"),children:[Zt,q.jsx(Vi.Provider,{value:null,children:q.jsx(Rt,V({ownerState:Kt,"aria-invalid":Et.error,"aria-describedby":o,autoComplete:a,autoFocus:u,defaultValue:E,disabled:Et.disabled,id:C,onAnimationStart:be,name:y,placeholder:X,readOnly:at,required:Et.required,rows:dt,value:vt,onKeyDown:I,onKeyUp:g,type:ae},bt,!ii(Rt)&&{as:de,ownerState:V({},Kt,bt.ownerState)},{ref:le,className:Ot(Tt.input,bt.className,at&&"MuiInputBase-readOnly"),onBlur:ue,onChange:ce,onFocus:Ae}))}),P,Vt?Vt(V({},Et,{startAdornment:Zt})):null]}))]})});function vh(n){return Lt("MuiInput",n)}const Jn=V({},In,Ft("MuiInput",["root","underline","input"]));function Eh(n){return Lt("MuiOutlinedInput",n)}const Be=V({},In,Ft("MuiOutlinedInput",["root","notchedOutline","input"]));function Th(n){return Lt("MuiFilledInput",n)}const Je=V({},In,Ft("MuiFilledInput",["root","underline","input"])),Ih=zc(q.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown");function wh(n){return Lt("MuiDialogActions",n)}Ft("MuiDialogActions",["root","spacing"]);const Ah=["className","disableSpacing"],bh=n=>{const{classes:t,disableSpacing:e}=n;return Bt({root:["root",!e&&"spacing"]},wh,t)},Rh=Z("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,!e.disableSpacing&&t.spacing]}})(({ownerState:n})=>V({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!n.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),Ch=N.forwardRef(function(t,e){const r=Ht({props:t,name:"MuiDialogActions"}),{className:s,disableSpacing:o=!1}=r,a=pt(r,Ah),u=V({},r,{disableSpacing:o}),h=bh(u);return q.jsx(Rh,V({className:Ot(h.root,s),ownerState:u,ref:e},a))});function Ph(n){return Lt("MuiDialogContent",n)}Ft("MuiDialogContent",["root","dividers"]);function Sh(n){return Lt("MuiDialogTitle",n)}const Vh=Ft("MuiDialogTitle",["root"]),xh=["className","dividers"],Dh=n=>{const{classes:t,dividers:e}=n;return Bt({root:["root",e&&"dividers"]},Ph,t)},Nh=Z("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,e.dividers&&t.dividers]}})(({theme:n,ownerState:t})=>V({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(n.vars||n).palette.divider}`,borderBottom:`1px solid ${(n.vars||n).palette.divider}`}:{[`.${Vh.root} + &`]:{paddingTop:0}})),kh=N.forwardRef(function(t,e){const r=Ht({props:t,name:"MuiDialogContent"}),{className:s,dividers:o=!1}=r,a=pt(r,xh),u=V({},r,{dividers:o}),h=Dh(u);return q.jsx(Nh,V({className:Ot(h.root,s),ownerState:u,ref:e},a))}),Mh=["className","id"],Oh=n=>{const{classes:t}=n;return Bt({root:["root"]},Sh,t)},Lh=Z(lh,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(n,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),Fh=N.forwardRef(function(t,e){const r=Ht({props:t,name:"MuiDialogTitle"}),{className:s,id:o}=r,a=pt(r,Mh),u=r,h=Oh(u),{titleId:d=o}=N.useContext(Jc);return q.jsx(Lh,V({component:"h2",className:Ot(h.root,s),ownerState:u,ref:e,variant:"h6",id:o??d},a))}),Bh=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],Uh=n=>{const{classes:t,disableUnderline:e}=n,s=Bt({root:["root",!e&&"underline"],input:["input"]},Th,t);return V({},t,s)},$h=Z(ys,{shouldForwardProp:n=>Ne(n)||n==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[...gs(n,t),!e.disableUnderline&&t.underline]}})(({theme:n,ownerState:t})=>{var e;const r=n.palette.mode==="light",s=r?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",o=r?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",a=r?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",u=r?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return V({position:"relative",backgroundColor:n.vars?n.vars.palette.FilledInput.bg:o,borderTopLeftRadius:(n.vars||n).shape.borderRadius,borderTopRightRadius:(n.vars||n).shape.borderRadius,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),"&:hover":{backgroundColor:n.vars?n.vars.palette.FilledInput.hoverBg:a,"@media (hover: none)":{backgroundColor:n.vars?n.vars.palette.FilledInput.bg:o}},[`&.${Je.focused}`]:{backgroundColor:n.vars?n.vars.palette.FilledInput.bg:o},[`&.${Je.disabled}`]:{backgroundColor:n.vars?n.vars.palette.FilledInput.disabledBg:u}},!t.disableUnderline&&{"&::after":{borderBottom:`2px solid ${(e=(n.vars||n).palette[t.color||"primary"])==null?void 0:e.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Je.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Je.error}`]:{"&::before, &::after":{borderBottomColor:(n.vars||n).palette.error.main}},"&::before":{borderBottom:`1px solid ${n.vars?`rgba(${n.vars.palette.common.onBackgroundChannel} / ${n.vars.opacity.inputUnderline})`:s}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:n.transitions.create("border-bottom-color",{duration:n.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Je.disabled}, .${Je.error}):before`]:{borderBottom:`1px solid ${(n.vars||n).palette.text.primary}`},[`&.${Je.disabled}:before`]:{borderBottomStyle:"dotted"}},t.startAdornment&&{paddingLeft:12},t.endAdornment&&{paddingRight:12},t.multiline&&V({padding:"25px 12px 8px"},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17},t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9}))}),jh=Z(vs,{name:"MuiFilledInput",slot:"Input",overridesResolver:_s})(({theme:n,ownerState:t})=>V({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!n.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:n.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:n.palette.mode==="light"?null:"#fff",caretColor:n.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},n.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[n.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0},t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9},t.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0})),Di=N.forwardRef(function(t,e){var r,s,o,a;const u=Ht({props:t,name:"MuiFilledInput"}),{components:h={},componentsProps:d,fullWidth:p=!1,inputComponent:E="input",multiline:w=!1,slotProps:b,slots:P={},type:M="text"}=u,C=pt(u,Bh),O=V({},u,{fullWidth:p,inputComponent:E,multiline:w,type:M}),F=Uh(u),k={root:{ownerState:O},input:{ownerState:O}},x=b??d?Ci(k,b??d):k,j=(r=(s=P.root)!=null?s:h.Root)!=null?r:$h,B=(o=(a=P.input)!=null?a:h.Input)!=null?o:jh;return q.jsx(xi,V({slots:{root:j,input:B},componentsProps:x,fullWidth:p,inputComponent:E,multiline:w,ref:e,type:M},C,{classes:F}))});Di.muiName="Input";function qh(n){return Lt("MuiFormControl",n)}Ft("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const zh=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],Wh=n=>{const{classes:t,margin:e,fullWidth:r}=n,s={root:["root",e!=="none"&&`margin${ee(e)}`,r&&"fullWidth"]};return Bt(s,qh,t)},Hh=Z("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:n},t)=>V({},t.root,t[`margin${ee(n.margin)}`],n.fullWidth&&t.fullWidth)})(({ownerState:n})=>V({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},n.margin==="normal"&&{marginTop:16,marginBottom:8},n.margin==="dense"&&{marginTop:8,marginBottom:4},n.fullWidth&&{width:"100%"})),Kh=N.forwardRef(function(t,e){const r=Ht({props:t,name:"MuiFormControl"}),{children:s,className:o,color:a="primary",component:u="div",disabled:h=!1,error:d=!1,focused:p,fullWidth:E=!1,hiddenLabel:w=!1,margin:b="none",required:P=!1,size:M="medium",variant:C="outlined"}=r,O=pt(r,zh),F=V({},r,{color:a,component:u,disabled:h,error:d,fullWidth:E,hiddenLabel:w,margin:b,required:P,size:M,variant:C}),k=Wh(F),[x,j]=N.useState(()=>{let g=!1;return s&&N.Children.forEach(s,X=>{if(!Hs(X,["Input","Select"]))return;const at=Hs(X,["Select"])?X.props.input:X;at&&ph(at.props)&&(g=!0)}),g}),[B,y]=N.useState(()=>{let g=!1;return s&&N.Children.forEach(s,X=>{Hs(X,["Input","Select"])&&(ss(X.props,!0)||ss(X.props.inputProps,!0))&&(g=!0)}),g}),[m,_]=N.useState(!1);h&&m&&_(!1);const v=p!==void 0&&!h?p:m;let T;const I=N.useMemo(()=>({adornedStart:x,setAdornedStart:j,color:a,disabled:h,error:d,filled:B,focused:v,fullWidth:E,hiddenLabel:w,size:M,onBlur:()=>{_(!1)},onEmpty:()=>{y(!1)},onFilled:()=>{y(!0)},onFocus:()=>{_(!0)},registerEffect:T,required:P,variant:C}),[x,a,h,d,B,v,E,w,T,P,M,C]);return q.jsx(Vi.Provider,{value:I,children:q.jsx(Hh,V({as:u,ownerState:F,className:Ot(k.root,o),ref:e},O,{children:s}))})});function Gh(n){return Lt("MuiFormHelperText",n)}const va=Ft("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var Ea;const Qh=["children","className","component","disabled","error","filled","focused","margin","required","variant"],Xh=n=>{const{classes:t,contained:e,size:r,disabled:s,error:o,filled:a,focused:u,required:h}=n,d={root:["root",s&&"disabled",o&&"error",r&&`size${ee(r)}`,e&&"contained",u&&"focused",a&&"filled",h&&"required"]};return Bt(d,Gh,t)},Yh=Z("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,e.size&&t[`size${ee(e.size)}`],e.contained&&t.contained,e.filled&&t.filled]}})(({theme:n,ownerState:t})=>V({color:(n.vars||n).palette.text.secondary},n.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${va.disabled}`]:{color:(n.vars||n).palette.text.disabled},[`&.${va.error}`]:{color:(n.vars||n).palette.error.main}},t.size==="small"&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14})),Jh=N.forwardRef(function(t,e){const r=Ht({props:t,name:"MuiFormHelperText"}),{children:s,className:o,component:a="p"}=r,u=pt(r,Qh),h=Dn(),d=xn({props:r,muiFormControl:h,states:["variant","size","disabled","error","filled","focused","required"]}),p=V({},r,{component:a,contained:d.variant==="filled"||d.variant==="outlined",variant:d.variant,size:d.size,disabled:d.disabled,error:d.error,filled:d.filled,focused:d.focused,required:d.required}),E=Xh(p);return q.jsx(Yh,V({as:a,ownerState:p,className:Ot(E.root,o),ref:e},u,{children:s===" "?Ea||(Ea=q.jsx("span",{className:"notranslate",children:"​"})):s}))});function Zh(n){return Lt("MuiFormLabel",n)}const or=Ft("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),td=["children","className","color","component","disabled","error","filled","focused","required"],ed=n=>{const{classes:t,color:e,focused:r,disabled:s,error:o,filled:a,required:u}=n,h={root:["root",`color${ee(e)}`,s&&"disabled",o&&"error",a&&"filled",r&&"focused",u&&"required"],asterisk:["asterisk",o&&"error"]};return Bt(h,Zh,t)},nd=Z("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:n},t)=>V({},t.root,n.color==="secondary"&&t.colorSecondary,n.filled&&t.filled)})(({theme:n,ownerState:t})=>V({color:(n.vars||n).palette.text.secondary},n.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${or.focused}`]:{color:(n.vars||n).palette[t.color].main},[`&.${or.disabled}`]:{color:(n.vars||n).palette.text.disabled},[`&.${or.error}`]:{color:(n.vars||n).palette.error.main}})),rd=Z("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(n,t)=>t.asterisk})(({theme:n})=>({[`&.${or.error}`]:{color:(n.vars||n).palette.error.main}})),sd=N.forwardRef(function(t,e){const r=Ht({props:t,name:"MuiFormLabel"}),{children:s,className:o,component:a="label"}=r,u=pt(r,td),h=Dn(),d=xn({props:r,muiFormControl:h,states:["color","required","focused","disabled","error","filled"]}),p=V({},r,{color:d.color||"primary",component:a,disabled:d.disabled,error:d.error,filled:d.filled,focused:d.focused,required:d.required}),E=ed(p);return q.jsxs(nd,V({as:a,ownerState:p,className:Ot(E.root,o),ref:e},u,{children:[s,d.required&&q.jsxs(rd,{ownerState:p,"aria-hidden":!0,className:E.asterisk,children:[" ","*"]})]}))}),id=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],od=n=>{const{classes:t,disableUnderline:e}=n,s=Bt({root:["root",!e&&"underline"],input:["input"]},vh,t);return V({},t,s)},ad=Z(ys,{shouldForwardProp:n=>Ne(n)||n==="classes",name:"MuiInput",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[...gs(n,t),!e.disableUnderline&&t.underline]}})(({theme:n,ownerState:t})=>{let r=n.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return n.vars&&(r=`rgba(${n.vars.palette.common.onBackgroundChannel} / ${n.vars.opacity.inputUnderline})`),V({position:"relative"},t.formControl&&{"label + &":{marginTop:16}},!t.disableUnderline&&{"&::after":{borderBottom:`2px solid ${(n.vars||n).palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Jn.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Jn.error}`]:{"&::before, &::after":{borderBottomColor:(n.vars||n).palette.error.main}},"&::before":{borderBottom:`1px solid ${r}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:n.transitions.create("border-bottom-color",{duration:n.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Jn.disabled}, .${Jn.error}):before`]:{borderBottom:`2px solid ${(n.vars||n).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${r}`}},[`&.${Jn.disabled}:before`]:{borderBottomStyle:"dotted"}})}),ld=Z(vs,{name:"MuiInput",slot:"Input",overridesResolver:_s})({}),Ni=N.forwardRef(function(t,e){var r,s,o,a;const u=Ht({props:t,name:"MuiInput"}),{disableUnderline:h,components:d={},componentsProps:p,fullWidth:E=!1,inputComponent:w="input",multiline:b=!1,slotProps:P,slots:M={},type:C="text"}=u,O=pt(u,id),F=od(u),x={root:{ownerState:{disableUnderline:h}}},j=P??p?Ci(P??p,x):x,B=(r=(s=M.root)!=null?s:d.Root)!=null?r:ad,y=(o=(a=M.input)!=null?a:d.Input)!=null?o:ld;return q.jsx(xi,V({slots:{root:B,input:y},slotProps:j,fullWidth:E,inputComponent:w,multiline:b,ref:e,type:C},O,{classes:F}))});Ni.muiName="Input";function ud(n){return Lt("MuiInputLabel",n)}Ft("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const cd=["disableAnimation","margin","shrink","variant","className"],hd=n=>{const{classes:t,formControl:e,size:r,shrink:s,disableAnimation:o,variant:a,required:u}=n,h={root:["root",e&&"formControl",!o&&"animated",s&&"shrink",r&&r!=="normal"&&`size${ee(r)}`,a],asterisk:[u&&"asterisk"]},d=Bt(h,ud,t);return V({},t,d)},dd=Z(sd,{shouldForwardProp:n=>Ne(n)||n==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[{[`& .${or.asterisk}`]:t.asterisk},t.root,e.formControl&&t.formControl,e.size==="small"&&t.sizeSmall,e.shrink&&t.shrink,!e.disableAnimation&&t.animated,e.focused&&t.focused,t[e.variant]]}})(({theme:n,ownerState:t})=>V({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},t.size==="small"&&{transform:"translate(0, 17px) scale(1)"},t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!t.disableAnimation&&{transition:n.transitions.create(["color","transform","max-width"],{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut})},t.variant==="filled"&&V({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},t.shrink&&V({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},t.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),t.variant==="outlined"&&V({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),fd=N.forwardRef(function(t,e){const r=Ht({name:"MuiInputLabel",props:t}),{disableAnimation:s=!1,shrink:o,className:a}=r,u=pt(r,cd),h=Dn();let d=o;typeof d>"u"&&h&&(d=h.filled||h.focused||h.adornedStart);const p=xn({props:r,muiFormControl:h,states:["size","variant","required","focused"]}),E=V({},r,{disableAnimation:s,formControl:h,shrink:d,size:p.size,variant:p.variant,required:p.required,focused:p.focused}),w=hd(E);return q.jsx(dd,V({"data-shrink":d,ownerState:E,ref:e,className:Ot(w.root,a)},u,{classes:w}))}),pd=N.createContext({});function md(n){return Lt("MuiList",n)}Ft("MuiList",["root","padding","dense","subheader"]);const gd=["children","className","component","dense","disablePadding","subheader"],_d=n=>{const{classes:t,disablePadding:e,dense:r,subheader:s}=n;return Bt({root:["root",!e&&"padding",r&&"dense",s&&"subheader"]},md,t)},yd=Z("ul",{name:"MuiList",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,!e.disablePadding&&t.padding,e.dense&&t.dense,e.subheader&&t.subheader]}})(({ownerState:n})=>V({listStyle:"none",margin:0,padding:0,position:"relative"},!n.disablePadding&&{paddingTop:8,paddingBottom:8},n.subheader&&{paddingTop:0})),vd=N.forwardRef(function(t,e){const r=Ht({props:t,name:"MuiList"}),{children:s,className:o,component:a="ul",dense:u=!1,disablePadding:h=!1,subheader:d}=r,p=pt(r,gd),E=N.useMemo(()=>({dense:u}),[u]),w=V({},r,{component:a,dense:u,disablePadding:h}),b=_d(w);return q.jsx(pd.Provider,{value:E,children:q.jsxs(yd,V({as:a,className:Ot(b.root,o),ref:e,ownerState:w},p,{children:[d,s]}))})}),Ed=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Ks(n,t,e){return n===t?n.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e?null:n.firstChild}function Ta(n,t,e){return n===t?e?n.firstChild:n.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e?null:n.lastChild}function xl(n,t){if(t===void 0)return!0;let e=n.innerText;return e===void 0&&(e=n.textContent),e=e.trim().toLowerCase(),e.length===0?!1:t.repeating?e[0]===t.keys[0]:e.indexOf(t.keys.join(""))===0}function Zn(n,t,e,r,s,o){let a=!1,u=s(n,t,t?e:!1);for(;u;){if(u===n.firstChild){if(a)return!1;a=!0}const h=r?!1:u.disabled||u.getAttribute("aria-disabled")==="true";if(!u.hasAttribute("tabindex")||!xl(u,o)||h)u=s(n,u,e);else return u.focus(),!0}return!1}const Td=N.forwardRef(function(t,e){const{actions:r,autoFocus:s=!1,autoFocusItem:o=!1,children:a,className:u,disabledItemsFocusable:h=!1,disableListWrap:d=!1,onKeyDown:p,variant:E="selectedMenu"}=t,w=pt(t,Ed),b=N.useRef(null),P=N.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});ns(()=>{s&&b.current.focus()},[s]),N.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(k,{direction:x})=>{const j=!b.current.style.width;if(k.clientHeight<b.current.clientHeight&&j){const B=`${Zc(hr(k))}px`;b.current.style[x==="rtl"?"paddingLeft":"paddingRight"]=B,b.current.style.width=`calc(100% + ${B})`}return b.current}}),[]);const M=k=>{const x=b.current,j=k.key,B=hr(x).activeElement;if(j==="ArrowDown")k.preventDefault(),Zn(x,B,d,h,Ks);else if(j==="ArrowUp")k.preventDefault(),Zn(x,B,d,h,Ta);else if(j==="Home")k.preventDefault(),Zn(x,null,d,h,Ks);else if(j==="End")k.preventDefault(),Zn(x,null,d,h,Ta);else if(j.length===1){const y=P.current,m=j.toLowerCase(),_=performance.now();y.keys.length>0&&(_-y.lastTime>500?(y.keys=[],y.repeating=!0,y.previousKeyMatched=!0):y.repeating&&m!==y.keys[0]&&(y.repeating=!1)),y.lastTime=_,y.keys.push(m);const v=B&&!y.repeating&&xl(B,y);y.previousKeyMatched&&(v||Zn(x,B,!1,h,Ks,y))?k.preventDefault():y.previousKeyMatched=!1}p&&p(k)},C=Vn(b,e);let O=-1;N.Children.forEach(a,(k,x)=>{if(!N.isValidElement(k)){O===x&&(O+=1,O>=a.length&&(O=-1));return}k.props.disabled||(E==="selectedMenu"&&k.props.selected||O===-1)&&(O=x),O===x&&(k.props.disabled||k.props.muiSkipListHighlight||k.type.muiSkipListHighlight)&&(O+=1,O>=a.length&&(O=-1))});const F=N.Children.map(a,(k,x)=>{if(x===O){const j={};return o&&(j.autoFocus=!0),k.props.tabIndex===void 0&&E==="selectedMenu"&&(j.tabIndex=0),N.cloneElement(k,j)}return k});return q.jsx(vd,V({role:"menu",ref:C,className:u,onKeyDown:M,tabIndex:s?0:-1},w,{children:F}))});function Id(n){return Lt("MuiPopover",n)}Ft("MuiPopover",["root","paper"]);const wd=["onEntering"],Ad=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],bd=["slotProps"];function Ia(n,t){let e=0;return typeof t=="number"?e=t:t==="center"?e=n.height/2:t==="bottom"&&(e=n.height),e}function wa(n,t){let e=0;return typeof t=="number"?e=t:t==="center"?e=n.width/2:t==="right"&&(e=n.width),e}function Aa(n){return[n.horizontal,n.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Gs(n){return typeof n=="function"?n():n}const Rd=n=>{const{classes:t}=n;return Bt({root:["root"],paper:["paper"]},Id,t)},Cd=Z(th,{name:"MuiPopover",slot:"Root",overridesResolver:(n,t)=>t.root})({}),Dl=Z(Sl,{name:"MuiPopover",slot:"Paper",overridesResolver:(n,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Pd=N.forwardRef(function(t,e){var r,s,o;const a=Ht({props:t,name:"MuiPopover"}),{action:u,anchorEl:h,anchorOrigin:d={vertical:"top",horizontal:"left"},anchorPosition:p,anchorReference:E="anchorEl",children:w,className:b,container:P,elevation:M=8,marginThreshold:C=16,open:O,PaperProps:F={},slots:k,slotProps:x,transformOrigin:j={vertical:"top",horizontal:"left"},TransitionComponent:B=Wc,transitionDuration:y="auto",TransitionProps:{onEntering:m}={},disableScrollLock:_=!1}=a,v=pt(a.TransitionProps,wd),T=pt(a,Ad),I=(r=x==null?void 0:x.paper)!=null?r:F,g=N.useRef(),X=Vn(g,I.ref),at=V({},a,{anchorOrigin:d,anchorReference:E,elevation:M,marginThreshold:C,externalPaperSlotProps:I,transformOrigin:j,TransitionComponent:B,transitionDuration:y,TransitionProps:v}),Vt=Rd(at),dt=N.useCallback(()=>{if(E==="anchorPosition")return p;const ot=Gs(h),ft=(ot&&ot.nodeType===1?ot:hr(g.current).body).getBoundingClientRect();return{top:ft.top+Ia(ft,d.vertical),left:ft.left+wa(ft,d.horizontal)}},[h,d.horizontal,d.vertical,p,E]),K=N.useCallback(ot=>({vertical:Ia(ot,j.vertical),horizontal:wa(ot,j.horizontal)}),[j.horizontal,j.vertical]),At=N.useCallback(ot=>{const gt={width:ot.offsetWidth,height:ot.offsetHeight},ft=K(gt);if(E==="none")return{top:null,left:null,transformOrigin:Aa(ft)};const Ae=dt();let ue=Ae.top-ft.vertical,ce=Ae.left-ft.horizontal;const he=ue+gt.height,de=ce+gt.width,bt=es(Gs(h)),be=bt.innerHeight-C,Kt=bt.innerWidth-C;if(C!==null&&ue<C){const Tt=ue-C;ue-=Tt,ft.vertical+=Tt}else if(C!==null&&he>be){const Tt=he-be;ue-=Tt,ft.vertical+=Tt}if(C!==null&&ce<C){const Tt=ce-C;ce-=Tt,ft.horizontal+=Tt}else if(de>Kt){const Tt=de-Kt;ce-=Tt,ft.horizontal+=Tt}return{top:`${Math.round(ue)}px`,left:`${Math.round(ce)}px`,transformOrigin:Aa(ft)}},[h,E,dt,K,C]),[Zt,ae]=N.useState(O),mt=N.useCallback(()=>{const ot=g.current;if(!ot)return;const gt=At(ot);gt.top!==null&&(ot.style.top=gt.top),gt.left!==null&&(ot.style.left=gt.left),ot.style.transformOrigin=gt.transformOrigin,ae(!0)},[At]);N.useEffect(()=>(_&&window.addEventListener("scroll",mt),()=>window.removeEventListener("scroll",mt)),[h,_,mt]);const tt=(ot,gt)=>{m&&m(ot,gt),mt()},vt=()=>{ae(!1)};N.useEffect(()=>{O&&mt()}),N.useImperativeHandle(u,()=>O?{updatePosition:()=>{mt()}}:null,[O,mt]),N.useEffect(()=>{if(!O)return;const ot=Pl(()=>{mt()}),gt=es(h);return gt.addEventListener("resize",ot),()=>{ot.clear(),gt.removeEventListener("resize",ot)}},[h,O,mt]);let kt=y;y==="auto"&&!B.muiSupportAuto&&(kt=void 0);const Ut=P||(h?hr(Gs(h)).body:void 0),ne=(s=k==null?void 0:k.root)!=null?s:Cd,le=(o=k==null?void 0:k.paper)!=null?o:Dl,we=rs({elementType:le,externalSlotProps:V({},I,{style:Zt?I.style:V({},I.style,{opacity:0})}),additionalProps:{elevation:M,ref:X},ownerState:at,className:Ot(Vt.paper,I==null?void 0:I.className)}),re=rs({elementType:ne,externalSlotProps:(x==null?void 0:x.root)||{},externalForwardedProps:T,additionalProps:{ref:e,slotProps:{backdrop:{invisible:!0}},container:Ut,open:O},ownerState:at,className:Ot(Vt.root,b)}),{slotProps:it}=re,Et=pt(re,bd);return q.jsx(ne,V({},Et,!ii(ne)&&{slotProps:it,disableScrollLock:_},{children:q.jsx(B,V({appear:!0,in:O,onEntering:tt,onExited:vt,timeout:kt},v,{children:q.jsx(le,V({},we,{children:w}))}))}))});function Sd(n){return Lt("MuiMenu",n)}Ft("MuiMenu",["root","paper","list"]);const Vd=["onEntering"],xd=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],Dd={vertical:"top",horizontal:"right"},Nd={vertical:"top",horizontal:"left"},kd=n=>{const{classes:t}=n;return Bt({root:["root"],paper:["paper"],list:["list"]},Sd,t)},Md=Z(Pd,{shouldForwardProp:n=>Ne(n)||n==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(n,t)=>t.root})({}),Od=Z(Dl,{name:"MuiMenu",slot:"Paper",overridesResolver:(n,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Ld=Z(Td,{name:"MuiMenu",slot:"List",overridesResolver:(n,t)=>t.list})({outline:0}),Fd=N.forwardRef(function(t,e){var r,s;const o=Ht({props:t,name:"MuiMenu"}),{autoFocus:a=!0,children:u,className:h,disableAutoFocusItem:d=!1,MenuListProps:p={},onClose:E,open:w,PaperProps:b={},PopoverClasses:P,transitionDuration:M="auto",TransitionProps:{onEntering:C}={},variant:O="selectedMenu",slots:F={},slotProps:k={}}=o,x=pt(o.TransitionProps,Vd),j=pt(o,xd),B=Yc(),y=V({},o,{autoFocus:a,disableAutoFocusItem:d,MenuListProps:p,onEntering:C,PaperProps:b,transitionDuration:M,TransitionProps:x,variant:O}),m=kd(y),_=a&&!d&&w,v=N.useRef(null),T=(K,At)=>{v.current&&v.current.adjustStyleForScrollbar(K,{direction:B?"rtl":"ltr"}),C&&C(K,At)},I=K=>{K.key==="Tab"&&(K.preventDefault(),E&&E(K,"tabKeyDown"))};let g=-1;N.Children.map(u,(K,At)=>{N.isValidElement(K)&&(K.props.disabled||(O==="selectedMenu"&&K.props.selected||g===-1)&&(g=At))});const X=(r=F.paper)!=null?r:Od,at=(s=k.paper)!=null?s:b,Vt=rs({elementType:F.root,externalSlotProps:k.root,ownerState:y,className:[m.root,h]}),dt=rs({elementType:X,externalSlotProps:at,ownerState:y,className:m.paper});return q.jsx(Md,V({onClose:E,anchorOrigin:{vertical:"bottom",horizontal:B?"right":"left"},transformOrigin:B?Dd:Nd,slots:{paper:X,root:F.root},slotProps:{root:Vt,paper:dt},open:w,ref:e,transitionDuration:M,TransitionProps:V({onEntering:T},x),ownerState:y},j,{classes:P,children:q.jsx(Ld,V({onKeyDown:I,actions:v,autoFocus:a&&(g===-1||d),autoFocusItem:_,variant:O},p,{className:Ot(m.list,p.className),children:u}))}))});function Bd(n){return Lt("MuiNativeSelect",n)}const ki=Ft("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),Ud=["className","disabled","error","IconComponent","inputRef","variant"],$d=n=>{const{classes:t,variant:e,disabled:r,multiple:s,open:o,error:a}=n,u={select:["select",e,r&&"disabled",s&&"multiple",a&&"error"],icon:["icon",`icon${ee(e)}`,o&&"iconOpen",r&&"disabled"]};return Bt(u,Bd,t)},Nl=({ownerState:n,theme:t})=>V({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":V({},t.vars?{backgroundColor:`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:t.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${ki.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(t.vars||t).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},n.variant==="filled"&&{"&&&":{paddingRight:32}},n.variant==="outlined"&&{borderRadius:(t.vars||t).shape.borderRadius,"&:focus":{borderRadius:(t.vars||t).shape.borderRadius},"&&&":{paddingRight:32}}),jd=Z("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:Ne,overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.select,t[e.variant],e.error&&t.error,{[`&.${ki.multiple}`]:t.multiple}]}})(Nl),kl=({ownerState:n,theme:t})=>V({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(t.vars||t).palette.action.active,[`&.${ki.disabled}`]:{color:(t.vars||t).palette.action.disabled}},n.open&&{transform:"rotate(180deg)"},n.variant==="filled"&&{right:7},n.variant==="outlined"&&{right:7}),qd=Z("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.icon,e.variant&&t[`icon${ee(e.variant)}`],e.open&&t.iconOpen]}})(kl),zd=N.forwardRef(function(t,e){const{className:r,disabled:s,error:o,IconComponent:a,inputRef:u,variant:h="standard"}=t,d=pt(t,Ud),p=V({},t,{disabled:s,variant:h,error:o}),E=$d(p);return q.jsxs(N.Fragment,{children:[q.jsx(jd,V({ownerState:p,className:Ot(E.select,r),disabled:s,ref:u||e},d)),t.multiple?null:q.jsx(qd,{as:a,ownerState:p,className:E.icon})]})});var ba;const Wd=["children","classes","className","label","notched"],Hd=Z("fieldset",{name:"MuiNotchedOutlined",shouldForwardProp:Ne})({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),Kd=Z("legend",{name:"MuiNotchedOutlined",shouldForwardProp:Ne})(({ownerState:n,theme:t})=>V({float:"unset",width:"auto",overflow:"hidden"},!n.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},n.withLabel&&V({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},n.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})})));function Gd(n){const{className:t,label:e,notched:r}=n,s=pt(n,Wd),o=e!=null&&e!=="",a=V({},n,{notched:r,withLabel:o});return q.jsx(Hd,V({"aria-hidden":!0,className:t,ownerState:a},s,{children:q.jsx(Kd,{ownerState:a,children:o?q.jsx("span",{children:e}):ba||(ba=q.jsx("span",{className:"notranslate",children:"​"}))})}))}const Qd=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],Xd=n=>{const{classes:t}=n,r=Bt({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},Eh,t);return V({},t,r)},Yd=Z(ys,{shouldForwardProp:n=>Ne(n)||n==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:gs})(({theme:n,ownerState:t})=>{const e=n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return V({position:"relative",borderRadius:(n.vars||n).shape.borderRadius,[`&:hover .${Be.notchedOutline}`]:{borderColor:(n.vars||n).palette.text.primary},"@media (hover: none)":{[`&:hover .${Be.notchedOutline}`]:{borderColor:n.vars?`rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)`:e}},[`&.${Be.focused} .${Be.notchedOutline}`]:{borderColor:(n.vars||n).palette[t.color].main,borderWidth:2},[`&.${Be.error} .${Be.notchedOutline}`]:{borderColor:(n.vars||n).palette.error.main},[`&.${Be.disabled} .${Be.notchedOutline}`]:{borderColor:(n.vars||n).palette.action.disabled}},t.startAdornment&&{paddingLeft:14},t.endAdornment&&{paddingRight:14},t.multiline&&V({padding:"16.5px 14px"},t.size==="small"&&{padding:"8.5px 14px"}))}),Jd=Z(Gd,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(n,t)=>t.notchedOutline})(({theme:n})=>{const t=n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:n.vars?`rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)`:t}}),Zd=Z(vs,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:_s})(({theme:n,ownerState:t})=>V({padding:"16.5px 14px"},!n.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:n.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:n.palette.mode==="light"?null:"#fff",caretColor:n.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},n.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[n.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{padding:"8.5px 14px"},t.multiline&&{padding:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0})),Mi=N.forwardRef(function(t,e){var r,s,o,a,u;const h=Ht({props:t,name:"MuiOutlinedInput"}),{components:d={},fullWidth:p=!1,inputComponent:E="input",label:w,multiline:b=!1,notched:P,slots:M={},type:C="text"}=h,O=pt(h,Qd),F=Xd(h),k=Dn(),x=xn({props:h,muiFormControl:k,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),j=V({},h,{color:x.color||"primary",disabled:x.disabled,error:x.error,focused:x.focused,formControl:k,fullWidth:p,hiddenLabel:x.hiddenLabel,multiline:b,size:x.size,type:C}),B=(r=(s=M.root)!=null?s:d.Root)!=null?r:Yd,y=(o=(a=M.input)!=null?a:d.Input)!=null?o:Zd;return q.jsx(xi,V({slots:{root:B,input:y},renderSuffix:m=>q.jsx(Jd,{ownerState:j,className:F.notchedOutline,label:w!=null&&w!==""&&x.required?u||(u=q.jsxs(N.Fragment,{children:[w," ","*"]})):w,notched:typeof P<"u"?P:!!(m.startAdornment||m.filled||m.focused)}),fullWidth:p,inputComponent:E,multiline:b,ref:e,type:C},O,{classes:V({},F,{notchedOutline:null})}))});Mi.muiName="Input";function tf(n){return Lt("MuiSelect",n)}const tr=Ft("MuiSelect",["root","select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]);var Ra;const ef=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","error","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],nf=Z("div",{name:"MuiSelect",slot:"Select",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[{[`&.${tr.select}`]:t.select},{[`&.${tr.select}`]:t[e.variant]},{[`&.${tr.error}`]:t.error},{[`&.${tr.multiple}`]:t.multiple}]}})(Nl,{[`&.${tr.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),rf=Z("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.icon,e.variant&&t[`icon${ee(e.variant)}`],e.open&&t.iconOpen]}})(kl),sf=Z("input",{shouldForwardProp:n=>Gc(n)&&n!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(n,t)=>t.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function Ca(n,t){return typeof t=="object"&&t!==null?n===t:String(n)===String(t)}function of(n){return n==null||typeof n=="string"&&!n.trim()}const af=n=>{const{classes:t,variant:e,disabled:r,multiple:s,open:o,error:a}=n,u={select:["select",e,r&&"disabled",s&&"multiple",a&&"error"],icon:["icon",`icon${ee(e)}`,o&&"iconOpen",r&&"disabled"],nativeInput:["nativeInput"]};return Bt(u,tf,t)},lf=N.forwardRef(function(t,e){var r;const{"aria-describedby":s,"aria-label":o,autoFocus:a,autoWidth:u,children:h,className:d,defaultOpen:p,defaultValue:E,disabled:w,displayEmpty:b,error:P=!1,IconComponent:M,inputRef:C,labelId:O,MenuProps:F={},multiple:k,name:x,onBlur:j,onChange:B,onClose:y,onFocus:m,onOpen:_,open:v,readOnly:T,renderValue:I,SelectDisplayProps:g={},tabIndex:X,value:at,variant:Vt="standard"}=t,dt=pt(t,ef),[K,At]=ma({controlled:at,default:E,name:"Select"}),[Zt,ae]=ma({controlled:v,default:p,name:"Select"}),mt=N.useRef(null),tt=N.useRef(null),[vt,kt]=N.useState(null),{current:Ut}=N.useRef(v!=null),[ne,le]=N.useState(),we=Vn(e,C),re=N.useCallback(W=>{tt.current=W,W&&kt(W)},[]),it=vt==null?void 0:vt.parentNode;N.useImperativeHandle(we,()=>({focus:()=>{tt.current.focus()},node:mt.current,value:K}),[K]),N.useEffect(()=>{p&&Zt&&vt&&!Ut&&(le(u?null:it.clientWidth),tt.current.focus())},[vt,u]),N.useEffect(()=>{a&&tt.current.focus()},[a]),N.useEffect(()=>{if(!O)return;const W=hr(tt.current).getElementById(O);if(W){const ct=()=>{getSelection().isCollapsed&&tt.current.focus()};return W.addEventListener("click",ct),()=>{W.removeEventListener("click",ct)}}},[O]);const Et=(W,ct)=>{W?_&&_(ct):y&&y(ct),Ut||(le(u?null:it.clientWidth),ae(W))},ot=W=>{W.button===0&&(W.preventDefault(),tt.current.focus(),Et(!0,W))},gt=W=>{Et(!1,W)},ft=N.Children.toArray(h),Ae=W=>{const ct=ft.find(Pt=>Pt.props.value===W.target.value);ct!==void 0&&(At(ct.props.value),B&&B(W,ct))},ue=W=>ct=>{let Pt;if(ct.currentTarget.hasAttribute("tabindex")){if(k){Pt=Array.isArray(K)?K.slice():[];const Me=K.indexOf(W.props.value);Me===-1?Pt.push(W.props.value):Pt.splice(Me,1)}else Pt=W.props.value;if(W.props.onClick&&W.props.onClick(ct),K!==Pt&&(At(Pt),B)){const Me=ct.nativeEvent||ct,Pr=new Me.constructor(Me.type,Me);Object.defineProperty(Pr,"target",{writable:!0,value:{value:Pt,name:x}}),B(Pr,W)}k||Et(!1,ct)}},ce=W=>{T||[" ","ArrowUp","ArrowDown","Enter"].indexOf(W.key)!==-1&&(W.preventDefault(),Et(!0,W))},he=vt!==null&&Zt,de=W=>{!he&&j&&(Object.defineProperty(W,"target",{writable:!0,value:{value:K,name:x}}),j(W))};delete dt["aria-invalid"];let bt,be;const Kt=[];let Tt=!1;(ss({value:K})||b)&&(I?bt=I(K):Tt=!0);const Ke=ft.map(W=>{if(!N.isValidElement(W))return null;let ct;if(k){if(!Array.isArray(K))throw new Error(Cl(2));ct=K.some(Pt=>Ca(Pt,W.props.value)),ct&&Tt&&Kt.push(W.props.children)}else ct=Ca(K,W.props.value),ct&&Tt&&(be=W.props.children);return N.cloneElement(W,{"aria-selected":ct?"true":"false",onClick:ue(W),onKeyUp:Pt=>{Pt.key===" "&&Pt.preventDefault(),W.props.onKeyUp&&W.props.onKeyUp(Pt)},role:"option",selected:ct,value:void 0,"data-value":W.props.value})});Tt&&(k?Kt.length===0?bt=null:bt=Kt.reduce((W,ct,Pt)=>(W.push(ct),Pt<Kt.length-1&&W.push(", "),W),[]):bt=be);let It=ne;!u&&Ut&&vt&&(It=it.clientWidth);let Rt;typeof X<"u"?Rt=X:Rt=w?null:0;const lt=g.id||(x?`mui-component-select-${x}`:void 0),ye=V({},t,{variant:Vt,value:K,open:he,error:P}),Re=af(ye),Bn=V({},F.PaperProps,(r=F.slotProps)==null?void 0:r.paper),ke=Vl();return q.jsxs(N.Fragment,{children:[q.jsx(nf,V({ref:re,tabIndex:Rt,role:"combobox","aria-controls":ke,"aria-disabled":w?"true":void 0,"aria-expanded":he?"true":"false","aria-haspopup":"listbox","aria-label":o,"aria-labelledby":[O,lt].filter(Boolean).join(" ")||void 0,"aria-describedby":s,onKeyDown:ce,onMouseDown:w||T?null:ot,onBlur:de,onFocus:m},g,{ownerState:ye,className:Ot(g.className,Re.select,d),id:lt,children:of(bt)?Ra||(Ra=q.jsx("span",{className:"notranslate",children:"​"})):bt})),q.jsx(sf,V({"aria-invalid":P,value:Array.isArray(K)?K.join(","):K,name:x,ref:mt,"aria-hidden":!0,onChange:Ae,tabIndex:-1,disabled:w,className:Re.nativeInput,autoFocus:a,ownerState:ye},dt)),q.jsx(rf,{as:M,className:Re.icon,ownerState:ye}),q.jsx(Fd,V({id:`menu-${x||""}`,anchorEl:it,open:he,onClose:gt,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},F,{MenuListProps:V({"aria-labelledby":O,role:"listbox","aria-multiselectable":k?"true":void 0,disableListWrap:!0,id:ke},F.MenuListProps),slotProps:V({},F.slotProps,{paper:V({},Bn,{style:V({minWidth:It},Bn!=null?Bn.style:null)})}),children:Ke}))]})}),uf=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],cf=["root"],hf=n=>{const{classes:t}=n;return t},Oi={name:"MuiSelect",overridesResolver:(n,t)=>t.root,shouldForwardProp:n=>Ne(n)&&n!=="variant",slot:"Root"},df=Z(Ni,Oi)(""),ff=Z(Mi,Oi)(""),pf=Z(Di,Oi)(""),Ml=N.forwardRef(function(t,e){const r=Ht({name:"MuiSelect",props:t}),{autoWidth:s=!1,children:o,classes:a={},className:u,defaultOpen:h=!1,displayEmpty:d=!1,IconComponent:p=Ih,id:E,input:w,inputProps:b,label:P,labelId:M,MenuProps:C,multiple:O=!1,native:F=!1,onClose:k,onOpen:x,open:j,renderValue:B,SelectDisplayProps:y,variant:m="outlined"}=r,_=pt(r,uf),v=F?zd:lf,T=Dn(),I=xn({props:r,muiFormControl:T,states:["variant","error"]}),g=I.variant||m,X=V({},r,{variant:g,classes:a}),at=hf(X),Vt=pt(at,cf),dt=w||{standard:q.jsx(df,{ownerState:X}),outlined:q.jsx(ff,{label:P,ownerState:X}),filled:q.jsx(pf,{ownerState:X})}[g],K=Vn(e,Qc(dt));return q.jsx(N.Fragment,{children:N.cloneElement(dt,V({inputComponent:v,inputProps:V({children:o,error:I.error,IconComponent:p,variant:g,type:void 0,multiple:O},F?{id:E}:{autoWidth:s,defaultOpen:h,displayEmpty:d,labelId:M,MenuProps:C,onClose:k,onOpen:x,open:j,renderValue:B,SelectDisplayProps:V({id:E},y)},b,{classes:b?Ci(Vt,b.classes):Vt},w?w.props.inputProps:{})},(O&&F||d)&&g==="outlined"?{notched:!0}:{},{ref:K,className:Ot(dt.props.className,u,at.root)},!w&&{variant:g},_))})});Ml.muiName="Select";function mf(n){return Lt("MuiTextField",n)}Ft("MuiTextField",["root"]);const gf=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],_f={standard:Ni,filled:Di,outlined:Mi},yf=n=>{const{classes:t}=n;return Bt({root:["root"]},mf,t)},vf=Z(Kh,{name:"MuiTextField",slot:"Root",overridesResolver:(n,t)=>t.root})({}),Wr=N.forwardRef(function(t,e){const r=Ht({props:t,name:"MuiTextField"}),{autoComplete:s,autoFocus:o=!1,children:a,className:u,color:h="primary",defaultValue:d,disabled:p=!1,error:E=!1,FormHelperTextProps:w,fullWidth:b=!1,helperText:P,id:M,InputLabelProps:C,inputProps:O,InputProps:F,inputRef:k,label:x,maxRows:j,minRows:B,multiline:y=!1,name:m,onBlur:_,onChange:v,onFocus:T,placeholder:I,required:g=!1,rows:X,select:at=!1,SelectProps:Vt,type:dt,value:K,variant:At="outlined"}=r,Zt=pt(r,gf),ae=V({},r,{autoFocus:o,color:h,disabled:p,error:E,fullWidth:b,multiline:y,required:g,select:at,variant:At}),mt=yf(ae),tt={};At==="outlined"&&(C&&typeof C.shrink<"u"&&(tt.notched=C.shrink),tt.label=x),at&&((!Vt||!Vt.native)&&(tt.id=void 0),tt["aria-describedby"]=void 0);const vt=Vl(M),kt=P&&vt?`${vt}-helper-text`:void 0,Ut=x&&vt?`${vt}-label`:void 0,ne=_f[At],le=q.jsx(ne,V({"aria-describedby":kt,autoComplete:s,autoFocus:o,defaultValue:d,fullWidth:b,multiline:y,name:m,rows:X,maxRows:j,minRows:B,type:dt,value:K,id:vt,inputRef:k,onBlur:_,onChange:v,onFocus:T,placeholder:I,inputProps:O},tt,F));return q.jsxs(vf,V({className:Ot(mt.root,u),disabled:p,error:E,fullWidth:b,ref:e,required:g,color:h,variant:At,ownerState:ae},Zt,{children:[x!=null&&x!==""&&q.jsx(fd,V({htmlFor:vt,id:Ut},C,{children:x})),at?q.jsx(Ml,V({"aria-describedby":kt,id:vt,labelId:Ut,value:K,input:le},Vt,{children:a})):le,P&&q.jsx(Jh,V({id:kt},w,{children:P}))]}))}),Se={wrapper:me`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 8px;
  `,title:me`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,infoWrapper:me`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,userInfoWrapper:me`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,paper:n=>me`
    background-color: ${n.palette.background.card};
    box-shadow: unset;
  `,wishesWrapper:me`
    font-family: "Nanum Myeongjo";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    .wishes-wrapper-header {
      font-size: 2rem;
      margin-bottom: 50px;
    }
    .character-wrapper {
      display: flex;
      gap: 3rem;
      margin-bottom: 3rem;
      .broom {
        .phone {
          color: #78c0e9;
        }
      }
      .bride {
        .phone {
          color: #f79e9e;
        }
      }
    }
    .wishes-wrapper-header2 {
      font-size: 1.5rem;
      margin-bottom: 50px;
    }
    .parents-wrapper {
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: 0.1fr 1fr 1fr;
      gap: 1rem 3rem;
      text-align: center;
      .broom {
        .phone,
        &.title {
          color: #78c0e9;
        }
      }
      .bride {
        .phone,
        &.title {
          color: #f79e9e;
        }
      }
    }
  `,address:me`
    font-family: "Nanum Myeongjo";
    border-radius: 50px;
    font-size: 13px;
  `,commentsWrapper:n=>me`
    .comments-header {
    }
    .comments-body {
      /* border-top: 2px solid ${n.palette.primary.main}; */
      /* border-bottom: 2px solid ${n.palette.primary.main}; */
      padding: 4px;
      margin-top: 1px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .comment {
      display: grid;
      padding: 8px;
      .comment-username {
        font-size: 1.05rem;
      }
      .comment-content {
        font-family: "Pretendard-Light";
      }
      .comment-ipAddress {
        color: pink;
        font-size: 0.8rem;
      }
      .comment-delete {
        float: right;
      }
      .comment-date {
        text-align: end;
        font-size: 0.8rem;
      }
    }
  `,deleteDialog:me`
    .MuiDialogActions-root {
      padding: 0 24px 8px 24px;
    }
  `,editComment:me`
    display: grid;
    padding: 5px;
    margin-bottom: 20px;
    gap: 5px;
    .edit-comment-header {
      grid-area: header / header / header / header;
    }
    .edit-comment-nickName {
      grid-area: nickname;
      .MuiInputBase-input {
        background-color: white;
      }
    }
    .edit-comment-password {
      grid-area: password;
      display: flex;
      justify-content: end;
      align-items: center;
      .MuiInputBase-input {
        background-color: white;
      }
    }
    .edit-comment-content {
      grid-area: content;
      height: 100%;
      &.MuiTextField-root {
        background-color: white;
      }
    }
    .edit-comment-actions {
      grid-area: actions;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media screen and (width <= 600px) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "header   header"
        "nickname password "
        "content  content"
        "actions actions";
    }
    @media screen and (600px < width) {
      grid-template-columns: 150px 1fr;
      grid-template-areas:
        "header   header  header"
        "nickname content content"
        "password content content"
        "emptyA   actions actions";
    }
  `,submitButton:me`
    margin-left: auto;
  `};var Pa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Ef=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ll={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,E=(o&3)<<4|u>>4;let w=(u&15)<<2|d>>6,b=d&63;h||(b=64,a||(w=64)),r.push(e[p],e[E],e[w],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ol(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ef(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const E=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||E==null)throw new Tf;const w=o<<2|u>>4;if(r.push(w),d!==64){const b=u<<4&240|d>>2;if(r.push(b),E!==64){const P=d<<6&192|E;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Tf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const If=function(n){const t=Ol(n);return Ll.encodeByteArray(t,!0)},is=function(n){return If(n).replace(/\./g,"")},wf=function(n){try{return Ll.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=()=>Af().__FIREBASE_DEFAULTS__,Rf=()=>{if(typeof process>"u"||typeof Pa>"u")return;const n=Pa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&wf(n[1]);return t&&JSON.parse(t)},Li=()=>{try{return bf()||Rf()||Cf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Pf=n=>{var t,e;return(e=(t=Li())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Sf=n=>{const t=Pf(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Fl=()=>{var n;return(n=Li())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[is(JSON.stringify(e)),is(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nf(){var n;const t=(n=Li())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kf(){return!Nf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mf(){try{return typeof indexedDB=="object"}catch{return!1}}function Of(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="FirebaseError";class Nn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Lf,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bl.prototype.create)}}class Bl{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Ff(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Nn(s,u,r)}}function Ff(n,t){return n.replace(Bf,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Bf=/\{\$([^}]+)}/g;function oi(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Sa(o)&&Sa(a)){if(!oi(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Sa(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(n){return n&&n._delegate?n._delegate:n}class dr{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Vf;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jf(t))try{this.getOrInitializeService({instanceIdentifier:Ze})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ze){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ze){return this.instances.has(t)}getOptions(t=Ze){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$f(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ze){return this.component?this.component.multipleInstances?t:Ze:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $f(n){return n===Ze?void 0:n}function jf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Uf(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(nt||(nt={}));const zf={debug:nt.DEBUG,verbose:nt.VERBOSE,info:nt.INFO,warn:nt.WARN,error:nt.ERROR,silent:nt.SILENT},Wf=nt.INFO,Hf={[nt.DEBUG]:"log",[nt.VERBOSE]:"log",[nt.INFO]:"info",[nt.WARN]:"warn",[nt.ERROR]:"error"},Kf=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Hf[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ul{constructor(t){this.name=t,this._logLevel=Wf,this._logHandler=Kf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in nt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,nt.DEBUG,...t),this._logHandler(this,nt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,nt.VERBOSE,...t),this._logHandler(this,nt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,nt.INFO,...t),this._logHandler(this,nt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,nt.WARN,...t),this._logHandler(this,nt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,nt.ERROR,...t),this._logHandler(this,nt.ERROR,...t)}}const Gf=(n,t)=>t.some(e=>n instanceof e);let Va,xa;function Qf(){return Va||(Va=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xf(){return xa||(xa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $l=new WeakMap,ai=new WeakMap,jl=new WeakMap,Qs=new WeakMap,Fi=new WeakMap;function Yf(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e($e(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&$l.set(e,n)}).catch(()=>{}),Fi.set(t,n),t}function Jf(n){if(ai.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ai.set(n,t)}let li={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ai.get(n);if(t==="objectStoreNames")return n.objectStoreNames||jl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return $e(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Zf(n){li=n(li)}function tp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Xs(this),t,...e);return jl.set(r,t.sort?t.sort():[t]),$e(r)}:Xf().includes(n)?function(...t){return n.apply(Xs(this),t),$e($l.get(this))}:function(...t){return $e(n.apply(Xs(this),t))}}function ep(n){return typeof n=="function"?tp(n):(n instanceof IDBTransaction&&Jf(n),Gf(n,Qf())?new Proxy(n,li):n)}function $e(n){if(n instanceof IDBRequest)return Yf(n);if(Qs.has(n))return Qs.get(n);const t=ep(n);return t!==n&&(Qs.set(n,t),Fi.set(t,n)),t}const Xs=n=>Fi.get(n);function np(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=$e(a);return r&&a.addEventListener("upgradeneeded",h=>{r($e(a.result),h.oldVersion,h.newVersion,$e(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const rp=["get","getKey","getAll","getAllKeys","count"],sp=["put","add","delete","clear"],Ys=new Map;function Da(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ys.get(t))return Ys.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=sp.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rp.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return Ys.set(t,o),o}Zf(n=>({...n,get:(t,e,r)=>Da(t,e)||n.get(t,e,r),has:(t,e)=>!!Da(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(op(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function op(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ui="@firebase/app",Na="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new Ul("@firebase/app"),ap="@firebase/app-compat",lp="@firebase/analytics-compat",up="@firebase/analytics",cp="@firebase/app-check-compat",hp="@firebase/app-check",dp="@firebase/auth",fp="@firebase/auth-compat",pp="@firebase/database",mp="@firebase/data-connect",gp="@firebase/database-compat",_p="@firebase/functions",yp="@firebase/functions-compat",vp="@firebase/installations",Ep="@firebase/installations-compat",Tp="@firebase/messaging",Ip="@firebase/messaging-compat",wp="@firebase/performance",Ap="@firebase/performance-compat",bp="@firebase/remote-config",Rp="@firebase/remote-config-compat",Cp="@firebase/storage",Pp="@firebase/storage-compat",Sp="@firebase/firestore",Vp="@firebase/vertexai-preview",xp="@firebase/firestore-compat",Dp="firebase",Np="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="[DEFAULT]",kp={[ui]:"fire-core",[ap]:"fire-core-compat",[up]:"fire-analytics",[lp]:"fire-analytics-compat",[hp]:"fire-app-check",[cp]:"fire-app-check-compat",[dp]:"fire-auth",[fp]:"fire-auth-compat",[pp]:"fire-rtdb",[mp]:"fire-data-connect",[gp]:"fire-rtdb-compat",[_p]:"fire-fn",[yp]:"fire-fn-compat",[vp]:"fire-iid",[Ep]:"fire-iid-compat",[Tp]:"fire-fcm",[Ip]:"fire-fcm-compat",[wp]:"fire-perf",[Ap]:"fire-perf-compat",[bp]:"fire-rc",[Rp]:"fire-rc-compat",[Cp]:"fire-gcs",[Pp]:"fire-gcs-compat",[Sp]:"fire-fst",[xp]:"fire-fst-compat",[Vp]:"fire-vertex","fire-js":"fire-js",[Dp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Map,Mp=new Map,hi=new Map;function ka(n,t){try{n.container.addComponent(t)}catch(e){Ve.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function as(n){const t=n.name;if(hi.has(t))return Ve.debug(`There were multiple attempts to register component ${t}.`),!1;hi.set(t,n);for(const e of os.values())ka(e,n);for(const e of Mp.values())ka(e,n);return!0}function Op(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},je=new Bl("app","Firebase",Lp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw je.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=Np;function ql(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ci,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw je.create("bad-app-name",{appName:String(s)});if(e||(e=Fl()),!e)throw je.create("no-options");const o=os.get(s);if(o){if(oi(e,o.options)&&oi(r,o.config))return o;throw je.create("duplicate-app",{appName:s})}const a=new qf(s);for(const h of hi.values())a.addComponent(h);const u=new Fp(e,r,a);return os.set(s,u),u}function Up(n=ci){const t=os.get(n);if(!t&&n===ci&&Fl())return ql();if(!t)throw je.create("no-app",{appName:n});return t}function vn(n,t,e){var r;let s=(r=kp[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ve.warn(u.join(" "));return}as(new dr(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="firebase-heartbeat-database",jp=1,fr="firebase-heartbeat-store";let Js=null;function zl(){return Js||(Js=np($p,jp,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(fr)}catch(e){console.warn(e)}}}}).catch(n=>{throw je.create("idb-open",{originalErrorMessage:n.message})})),Js}async function qp(n){try{const e=(await zl()).transaction(fr),r=await e.objectStore(fr).get(Wl(n));return await e.done,r}catch(t){if(t instanceof Nn)Ve.warn(t.message);else{const e=je.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ve.warn(e.message)}}}async function Ma(n,t){try{const r=(await zl()).transaction(fr,"readwrite");await r.objectStore(fr).put(t,Wl(n)),await r.done}catch(e){if(e instanceof Nn)Ve.warn(e.message);else{const r=je.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ve.warn(r.message)}}}function Wl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=1024,Wp=30*24*60*60*1e3;class Hp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Gp(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Oa();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Wp}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ve.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Oa(),{heartbeatsToSend:r,unsentEntries:s}=Kp(this._heartbeatsCache.heartbeats),o=is(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ve.warn(e),""}}}function Oa(){return new Date().toISOString().substring(0,10)}function Kp(n,t=zp){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),La(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),La(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Gp{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mf()?Of().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await qp(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ma(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ma(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function La(n){return is(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(n){as(new dr("platform-logger",t=>new ip(t),"PRIVATE")),as(new dr("heartbeat",t=>new Hp(t),"PRIVATE")),vn(ui,Na,n),vn(ui,Na,"esm2017"),vn("fire-js","")}Qp("");var Xp="firebase",Yp="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn(Xp,Yp,"app");var Fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var en,Hl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,m){function _(){}_.prototype=m.prototype,y.D=m.prototype,y.prototype=new _,y.prototype.constructor=y,y.C=function(v,T,I){for(var g=Array(arguments.length-2),X=2;X<arguments.length;X++)g[X-2]=arguments[X];return m.prototype[T].apply(v,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,m,_){_||(_=0);var v=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)v[T]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(T=0;16>T;++T)v[T]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=y.g[0],_=y.g[1],T=y.g[2];var I=y.g[3],g=m+(I^_&(T^I))+v[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=I+(T^m&(_^T))+v[1]+3905402710&4294967295,I=m+(g<<12&4294967295|g>>>20),g=T+(_^I&(m^_))+v[2]+606105819&4294967295,T=I+(g<<17&4294967295|g>>>15),g=_+(m^T&(I^m))+v[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(I^_&(T^I))+v[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(T^m&(_^T))+v[5]+1200080426&4294967295,I=m+(g<<12&4294967295|g>>>20),g=T+(_^I&(m^_))+v[6]+2821735955&4294967295,T=I+(g<<17&4294967295|g>>>15),g=_+(m^T&(I^m))+v[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(I^_&(T^I))+v[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(T^m&(_^T))+v[9]+2336552879&4294967295,I=m+(g<<12&4294967295|g>>>20),g=T+(_^I&(m^_))+v[10]+4294925233&4294967295,T=I+(g<<17&4294967295|g>>>15),g=_+(m^T&(I^m))+v[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(I^_&(T^I))+v[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(T^m&(_^T))+v[13]+4254626195&4294967295,I=m+(g<<12&4294967295|g>>>20),g=T+(_^I&(m^_))+v[14]+2792965006&4294967295,T=I+(g<<17&4294967295|g>>>15),g=_+(m^T&(I^m))+v[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(T^I&(_^T))+v[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^T&(m^_))+v[6]+3225465664&4294967295,I=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(I^m))+v[11]+643717713&4294967295,T=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(T^I))+v[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^I&(_^T))+v[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^T&(m^_))+v[10]+38016083&4294967295,I=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(I^m))+v[15]+3634488961&4294967295,T=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(T^I))+v[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^I&(_^T))+v[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^T&(m^_))+v[14]+3275163606&4294967295,I=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(I^m))+v[3]+4107603335&4294967295,T=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(T^I))+v[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^I&(_^T))+v[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^T&(m^_))+v[2]+4243563512&4294967295,I=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(I^m))+v[7]+1735328473&4294967295,T=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(T^I))+v[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(_^T^I)+v[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^T)+v[8]+2272392833&4294967295,I=m+(g<<11&4294967295|g>>>21),g=T+(I^m^_)+v[11]+1839030562&4294967295,T=I+(g<<16&4294967295|g>>>16),g=_+(T^I^m)+v[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^I)+v[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^T)+v[4]+1272893353&4294967295,I=m+(g<<11&4294967295|g>>>21),g=T+(I^m^_)+v[7]+4139469664&4294967295,T=I+(g<<16&4294967295|g>>>16),g=_+(T^I^m)+v[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^I)+v[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^T)+v[0]+3936430074&4294967295,I=m+(g<<11&4294967295|g>>>21),g=T+(I^m^_)+v[3]+3572445317&4294967295,T=I+(g<<16&4294967295|g>>>16),g=_+(T^I^m)+v[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^I)+v[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^T)+v[12]+3873151461&4294967295,I=m+(g<<11&4294967295|g>>>21),g=T+(I^m^_)+v[15]+530742520&4294967295,T=I+(g<<16&4294967295|g>>>16),g=_+(T^I^m)+v[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(T^(_|~I))+v[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~T))+v[7]+1126891415&4294967295,I=m+(g<<10&4294967295|g>>>22),g=T+(m^(I|~_))+v[14]+2878612391&4294967295,T=I+(g<<15&4294967295|g>>>17),g=_+(I^(T|~m))+v[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~I))+v[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~T))+v[3]+2399980690&4294967295,I=m+(g<<10&4294967295|g>>>22),g=T+(m^(I|~_))+v[10]+4293915773&4294967295,T=I+(g<<15&4294967295|g>>>17),g=_+(I^(T|~m))+v[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~I))+v[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~T))+v[15]+4264355552&4294967295,I=m+(g<<10&4294967295|g>>>22),g=T+(m^(I|~_))+v[6]+2734768916&4294967295,T=I+(g<<15&4294967295|g>>>17),g=_+(I^(T|~m))+v[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~I))+v[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~T))+v[11]+3174756917&4294967295,I=m+(g<<10&4294967295|g>>>22),g=T+(m^(I|~_))+v[2]+718787259&4294967295,T=I+(g<<15&4294967295|g>>>17),g=_+(I^(T|~m))+v[9]+3951481745&4294967295,y.g[0]=y.g[0]+m&4294967295,y.g[1]=y.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,y.g[2]=y.g[2]+T&4294967295,y.g[3]=y.g[3]+I&4294967295}r.prototype.u=function(y,m){m===void 0&&(m=y.length);for(var _=m-this.blockSize,v=this.B,T=this.h,I=0;I<m;){if(T==0)for(;I<=_;)s(this,y,I),I+=this.blockSize;if(typeof y=="string"){for(;I<m;)if(v[T++]=y.charCodeAt(I++),T==this.blockSize){s(this,v),T=0;break}}else for(;I<m;)if(v[T++]=y[I++],T==this.blockSize){s(this,v),T=0;break}}this.h=T,this.o+=m},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var m=1;m<y.length-8;++m)y[m]=0;var _=8*this.o;for(m=y.length-8;m<y.length;++m)y[m]=_&255,_/=256;for(this.u(y),y=Array(16),m=_=0;4>m;++m)for(var v=0;32>v;v+=8)y[_++]=this.g[m]>>>v&255;return y};function o(y,m){var _=u;return Object.prototype.hasOwnProperty.call(_,y)?_[y]:_[y]=m(y)}function a(y,m){this.h=m;for(var _=[],v=!0,T=y.length-1;0<=T;T--){var I=y[T]|0;v&&I==m||(_[T]=I,v=!1)}this.g=_}var u={};function h(y){return-128<=y&&128>y?o(y,function(m){return new a([m|0],0>m?-1:0)}):new a([y|0],0>y?-1:0)}function d(y){if(isNaN(y)||!isFinite(y))return E;if(0>y)return C(d(-y));for(var m=[],_=1,v=0;y>=_;v++)m[v]=y/_|0,_*=4294967296;return new a(m,0)}function p(y,m){if(y.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(y.charAt(0)=="-")return C(p(y.substring(1),m));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),v=E,T=0;T<y.length;T+=8){var I=Math.min(8,y.length-T),g=parseInt(y.substring(T,T+I),m);8>I?(I=d(Math.pow(m,I)),v=v.j(I).add(d(g))):(v=v.j(_),v=v.add(d(g)))}return v}var E=h(0),w=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(M(this))return-C(this).m();for(var y=0,m=1,_=0;_<this.g.length;_++){var v=this.i(_);y+=(0<=v?v:4294967296+v)*m,m*=4294967296}return y},n.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(P(this))return"0";if(M(this))return"-"+C(this).toString(y);for(var m=d(Math.pow(y,6)),_=this,v="";;){var T=x(_,m).g;_=O(_,T.j(m));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(y);if(_=T,P(_))return I+v;for(;6>I.length;)I="0"+I;v=I+v}},n.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function P(y){if(y.h!=0)return!1;for(var m=0;m<y.g.length;m++)if(y.g[m]!=0)return!1;return!0}function M(y){return y.h==-1}n.l=function(y){return y=O(this,y),M(y)?-1:P(y)?0:1};function C(y){for(var m=y.g.length,_=[],v=0;v<m;v++)_[v]=~y.g[v];return new a(_,~y.h).add(w)}n.abs=function(){return M(this)?C(this):this},n.add=function(y){for(var m=Math.max(this.g.length,y.g.length),_=[],v=0,T=0;T<=m;T++){var I=v+(this.i(T)&65535)+(y.i(T)&65535),g=(I>>>16)+(this.i(T)>>>16)+(y.i(T)>>>16);v=g>>>16,I&=65535,g&=65535,_[T]=g<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function O(y,m){return y.add(C(m))}n.j=function(y){if(P(this)||P(y))return E;if(M(this))return M(y)?C(this).j(C(y)):C(C(this).j(y));if(M(y))return C(this.j(C(y)));if(0>this.l(b)&&0>y.l(b))return d(this.m()*y.m());for(var m=this.g.length+y.g.length,_=[],v=0;v<2*m;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var T=0;T<y.g.length;T++){var I=this.i(v)>>>16,g=this.i(v)&65535,X=y.i(T)>>>16,at=y.i(T)&65535;_[2*v+2*T]+=g*at,F(_,2*v+2*T),_[2*v+2*T+1]+=I*at,F(_,2*v+2*T+1),_[2*v+2*T+1]+=g*X,F(_,2*v+2*T+1),_[2*v+2*T+2]+=I*X,F(_,2*v+2*T+2)}for(v=0;v<m;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=m;v<2*m;v++)_[v]=0;return new a(_,0)};function F(y,m){for(;(y[m]&65535)!=y[m];)y[m+1]+=y[m]>>>16,y[m]&=65535,m++}function k(y,m){this.g=y,this.h=m}function x(y,m){if(P(m))throw Error("division by zero");if(P(y))return new k(E,E);if(M(y))return m=x(C(y),m),new k(C(m.g),C(m.h));if(M(m))return m=x(y,C(m)),new k(C(m.g),m.h);if(30<y.g.length){if(M(y)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var _=w,v=m;0>=v.l(y);)_=j(_),v=j(v);var T=B(_,1),I=B(v,1);for(v=B(v,2),_=B(_,2);!P(v);){var g=I.add(v);0>=g.l(y)&&(T=T.add(_),I=g),v=B(v,1),_=B(_,1)}return m=O(y,T.j(m)),new k(T,m)}for(T=E;0<=y.l(m);){for(_=Math.max(1,Math.floor(y.m()/m.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),I=d(_),g=I.j(m);M(g)||0<g.l(y);)_-=v,I=d(_),g=I.j(m);P(I)&&(I=w),T=T.add(I),y=O(y,g)}return new k(T,y)}n.A=function(y){return x(this,y).h},n.and=function(y){for(var m=Math.max(this.g.length,y.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)&y.i(v);return new a(_,this.h&y.h)},n.or=function(y){for(var m=Math.max(this.g.length,y.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)|y.i(v);return new a(_,this.h|y.h)},n.xor=function(y){for(var m=Math.max(this.g.length,y.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)^y.i(v);return new a(_,this.h^y.h)};function j(y){for(var m=y.g.length+1,_=[],v=0;v<m;v++)_[v]=y.i(v)<<1|y.i(v-1)>>>31;return new a(_,y.h)}function B(y,m){var _=m>>5;m%=32;for(var v=y.g.length-_,T=[],I=0;I<v;I++)T[I]=0<m?y.i(I+_)>>>m|y.i(I+_+1)<<32-m:y.i(I+_);return new a(T,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Hl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,en=a}).apply(typeof Fa<"u"?Fa:typeof self<"u"?self:typeof window<"u"?window:{});var Hr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kl,nr,Gl,Xr,di,Ql,Xl,Yl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,c){return i==Array.prototype||i==Object.prototype||(i[l]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hr=="object"&&Hr];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var c=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in c))break t;c=c[A]}i=i[i.length-1],f=c[i],l=l(f),l!=f&&l!=null&&t(c,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var c=0,f=!1,A={next:function(){if(!f&&c<i.length){var R=c++;return{value:l(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function p(i,l,c){return i.call.apply(i.bind,arguments)}function E(i,l,c){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function w(i,l,c){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:E,w.apply(null,arguments)}function b(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function P(i,l){function c(){}c.prototype=l.prototype,i.aa=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(f,A,R){for(var L=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)L[ht-2]=arguments[ht];return l.prototype[A].apply(f,L)}}function M(i){const l=i.length;if(0<l){const c=Array(l);for(let f=0;f<l;f++)c[f]=i[f];return c}return[]}function C(i,l){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const A=i.length||0,R=f.length||0;i.length=A+R;for(let L=0;L<R;L++)i[A+L]=f[L]}else i.push(f)}}class O{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function F(i){return/^[\s\xa0]*$/.test(i)}function k(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function x(i){return x[" "](i),i}x[" "]=function(){};var j=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function B(i,l,c){for(const f in i)l.call(c,i[f],f,i)}function y(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function m(i){const l={};for(const c in i)l[c]=i[c];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(i,l){let c,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(c in f)i[c]=f[c];for(let R=0;R<_.length;R++)c=_[R],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function T(i){var l=1;i=i.split(":");const c=[];for(;0<l&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function I(i){u.setTimeout(()=>{throw i},0)}function g(){var i=At;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class X{constructor(){this.h=this.g=null}add(l,c){const f=at.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var at=new O(()=>new Vt,i=>i.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let dt,K=!1,At=new X,Zt=()=>{const i=u.Promise.resolve(void 0);dt=()=>{i.then(ae)}};var ae=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(c){I(c)}var l=at;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}K=!1};function mt(){this.s=this.s,this.C=this.C}mt.prototype.s=!1,mt.prototype.ma=function(){this.s||(this.s=!0,this.N())},mt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function tt(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var vt=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return i}();function kt(i,l){if(tt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(j){t:{try{x(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Ut[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&kt.aa.h.call(this)}}P(kt,tt);var Ut={2:"touch",3:"pen",4:"mouse"};kt.prototype.h=function(){kt.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var ne="closure_listenable_"+(1e6*Math.random()|0),le=0;function we(i,l,c,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=A,this.key=++le,this.da=this.fa=!1}function re(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function it(i){this.src=i,this.g={},this.h=0}it.prototype.add=function(i,l,c,f,A){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var L=ot(i,l,f,A);return-1<L?(l=i[L],c||(l.fa=!1)):(l=new we(l,this.src,R,!!f,A),l.fa=c,i.push(l)),l};function Et(i,l){var c=l.type;if(c in i.g){var f=i.g[c],A=Array.prototype.indexOf.call(f,l,void 0),R;(R=0<=A)&&Array.prototype.splice.call(f,A,1),R&&(re(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function ot(i,l,c,f){for(var A=0;A<i.length;++A){var R=i[A];if(!R.da&&R.listener==l&&R.capture==!!c&&R.ha==f)return A}return-1}var gt="closure_lm_"+(1e6*Math.random()|0),ft={};function Ae(i,l,c,f,A){if(Array.isArray(l)){for(var R=0;R<l.length;R++)Ae(i,l[R],c,f,A);return null}return c=Ke(c),i&&i[ne]?i.K(l,c,d(f)?!!f.capture:!1,A):ue(i,l,c,!1,f,A)}function ue(i,l,c,f,A,R){if(!l)throw Error("Invalid event type");var L=d(A)?!!A.capture:!!A,ht=Kt(i);if(ht||(i[gt]=ht=new it(i)),c=ht.add(l,c,f,L,R),c.proxy)return c;if(f=ce(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)vt||(A=L),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(bt(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function ce(){function i(c){return l.call(i.src,i.listener,c)}const l=be;return i}function he(i,l,c,f,A){if(Array.isArray(l))for(var R=0;R<l.length;R++)he(i,l[R],c,f,A);else f=d(f)?!!f.capture:!!f,c=Ke(c),i&&i[ne]?(i=i.i,l=String(l).toString(),l in i.g&&(R=i.g[l],c=ot(R,c,f,A),-1<c&&(re(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete i.g[l],i.h--)))):i&&(i=Kt(i))&&(l=i.g[l.toString()],i=-1,l&&(i=ot(l,c,f,A)),(c=-1<i?l[i]:null)&&de(c))}function de(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[ne])Et(l.i,i);else{var c=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(c,f,i.capture):l.detachEvent?l.detachEvent(bt(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=Kt(l))?(Et(c,i),c.h==0&&(c.src=null,l[gt]=null)):re(i)}}}function bt(i){return i in ft?ft[i]:ft[i]="on"+i}function be(i,l){if(i.da)i=!0;else{l=new kt(l,this);var c=i.listener,f=i.ha||i.src;i.fa&&de(i),i=c.call(f,l)}return i}function Kt(i){return i=i[gt],i instanceof it?i:null}var Tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ke(i){return typeof i=="function"?i:(i[Tt]||(i[Tt]=function(l){return i.handleEvent(l)}),i[Tt])}function It(){mt.call(this),this.i=new it(this),this.M=this,this.F=null}P(It,mt),It.prototype[ne]=!0,It.prototype.removeEventListener=function(i,l,c,f){he(this,i,l,c,f)};function Rt(i,l){var c,f=i.F;if(f)for(c=[];f;f=f.F)c.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new tt(l,i);else if(l instanceof tt)l.target=l.target||i;else{var A=l;l=new tt(f,i),v(l,A)}if(A=!0,c)for(var R=c.length-1;0<=R;R--){var L=l.g=c[R];A=lt(L,f,!0,l)&&A}if(L=l.g=i,A=lt(L,f,!0,l)&&A,A=lt(L,f,!1,l)&&A,c)for(R=0;R<c.length;R++)L=l.g=c[R],A=lt(L,f,!1,l)&&A}It.prototype.N=function(){if(It.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var c=i.g[l],f=0;f<c.length;f++)re(c[f]);delete i.g[l],i.h--}}this.F=null},It.prototype.K=function(i,l,c,f){return this.i.add(String(i),l,!1,c,f)},It.prototype.L=function(i,l,c,f){return this.i.add(String(i),l,!0,c,f)};function lt(i,l,c,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,R=0;R<l.length;++R){var L=l[R];if(L&&!L.da&&L.capture==c){var ht=L.listener,$t=L.ha||L.src;L.fa&&Et(i.i,L),A=ht.call($t,f)!==!1&&A}}return A&&!f.defaultPrevented}function ye(i,l,c){if(typeof i=="function")c&&(i=w(i,c));else if(i&&typeof i.handleEvent=="function")i=w(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(i,l||0)}function Re(i){i.g=ye(()=>{i.g=null,i.i&&(i.i=!1,Re(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Bn extends mt{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Re(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ke(i){mt.call(this),this.h=i,this.g={}}P(ke,mt);var W=[];function ct(i){B(i.g,function(l,c){this.g.hasOwnProperty(c)&&de(l)},i),i.g={}}ke.prototype.N=function(){ke.aa.N.call(this),ct(this)},ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pt=u.JSON.stringify,Me=u.JSON.parse,Pr=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function xs(){}xs.prototype.h=null;function wo(i){return i.h||(i.h=i.i())}function Ao(){}var Un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ds(){tt.call(this,"d")}P(Ds,tt);function Ns(){tt.call(this,"c")}P(Ns,tt);var Ge={},bo=null;function Sr(){return bo=bo||new It}Ge.La="serverreachability";function Ro(i){tt.call(this,Ge.La,i)}P(Ro,tt);function $n(i){const l=Sr();Rt(l,new Ro(l))}Ge.STAT_EVENT="statevent";function Co(i,l){tt.call(this,Ge.STAT_EVENT,i),this.stat=l}P(Co,tt);function te(i){const l=Sr();Rt(l,new Co(l,i))}Ge.Ma="timingevent";function Po(i,l){tt.call(this,Ge.Ma,i),this.size=l}P(Po,tt);function jn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},l)}function qn(){this.g=!0}qn.prototype.xa=function(){this.g=!1};function _c(i,l,c,f,A,R){i.info(function(){if(i.g)if(R)for(var L="",ht=R.split("&"),$t=0;$t<ht.length;$t++){var rt=ht[$t].split("=");if(1<rt.length){var Gt=rt[0];rt=rt[1];var Qt=Gt.split("_");L=2<=Qt.length&&Qt[1]=="type"?L+(Gt+"="+rt+"&"):L+(Gt+"=redacted&")}}else L=null;else L=R;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+c+`
`+L})}function yc(i,l,c,f,A,R,L){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+c+`
`+R+" "+L})}function hn(i,l,c,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Ec(i,c)+(f?" "+f:"")})}function vc(i,l){i.info(function(){return"TIMEOUT: "+l})}qn.prototype.info=function(){};function Ec(i,l){if(!i.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var f=c[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var L=1;L<A.length;L++)A[L]=""}}}}return Pt(c)}catch{return l}}var Vr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},So={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ks;function xr(){}P(xr,xs),xr.prototype.g=function(){return new XMLHttpRequest},xr.prototype.i=function(){return{}},ks=new xr;function Oe(i,l,c,f){this.j=i,this.i=l,this.l=c,this.R=f||1,this.U=new ke(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vo}function Vo(){this.i=null,this.g="",this.h=!1}var xo={},Ms={};function Os(i,l,c){i.L=1,i.v=Mr(Ce(l)),i.m=c,i.P=!0,Do(i,null)}function Do(i,l){i.F=Date.now(),Dr(i),i.A=Ce(i.v);var c=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Ho(c.i,"t",f),i.C=0,c=i.j.J,i.h=new Vo,i.g=ca(i.j,c?l:null,!i.m),0<i.O&&(i.M=new Bn(w(i.Y,i,i.g),i.O)),l=i.U,c=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(W[0]=A.toString()),A=W);for(var R=0;R<A.length;R++){var L=Ae(c,A[R],f||l.handleEvent,!1,l.h||l);if(!L)break;l.g[L.key]=L}l=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),$n(),_c(i.i,i.u,i.A,i.l,i.R,i.m)}Oe.prototype.ca=function(i){i=i.target;const l=this.M;l&&Pe(i)==3?l.j():this.Y(i)},Oe.prototype.Y=function(i){try{if(i==this.g)t:{const Qt=Pe(this.g);var l=this.g.Ba();const pn=this.g.Z();if(!(3>Qt)&&(Qt!=3||this.g&&(this.h.h||this.g.oa()||Zo(this.g)))){this.J||Qt!=4||l==7||(l==8||0>=pn?$n(3):$n(2)),Ls(this);var c=this.g.Z();this.X=c;e:if(No(this)){var f=Zo(this.g);i="";var A=f.length,R=Pe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qe(this),zn(this);var L="";break e}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(R&&l==A-1)});f.length=0,this.h.g+=i,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=c==200,yc(this.i,this.u,this.A,this.l,this.R,Qt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var ht,$t=this.g;if((ht=$t.g?$t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(ht)){var rt=ht;break e}}rt=null}if(c=rt)hn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fs(this,c);else{this.o=!1,this.s=3,te(12),Qe(this),zn(this);break t}}if(this.P){c=!0;let pe;for(;!this.J&&this.C<L.length;)if(pe=Tc(this,L),pe==Ms){Qt==4&&(this.s=4,te(14),c=!1),hn(this.i,this.l,null,"[Incomplete Response]");break}else if(pe==xo){this.s=4,te(15),hn(this.i,this.l,L,"[Invalid Chunk]"),c=!1;break}else hn(this.i,this.l,pe,null),Fs(this,pe);if(No(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qt!=4||L.length!=0||this.h.h||(this.s=1,te(16),c=!1),this.o=this.o&&c,!c)hn(this.i,this.l,L,"[Invalid Chunked Response]"),Qe(this),zn(this);else if(0<L.length&&!this.W){this.W=!0;var Gt=this.j;Gt.g==this&&Gt.ba&&!Gt.M&&(Gt.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),zs(Gt),Gt.M=!0,te(11))}}else hn(this.i,this.l,L,null),Fs(this,L);Qt==4&&Qe(this),this.o&&!this.J&&(Qt==4?oa(this.j,this):(this.o=!1,Dr(this)))}else Fc(this.g),c==400&&0<L.indexOf("Unknown SID")?(this.s=3,te(12)):(this.s=0,te(13)),Qe(this),zn(this)}}}catch{}finally{}};function No(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Tc(i,l){var c=i.C,f=l.indexOf(`
`,c);return f==-1?Ms:(c=Number(l.substring(c,f)),isNaN(c)?xo:(f+=1,f+c>l.length?Ms:(l=l.slice(f,f+c),i.C=f+c,l)))}Oe.prototype.cancel=function(){this.J=!0,Qe(this)};function Dr(i){i.S=Date.now()+i.I,ko(i,i.I)}function ko(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=jn(w(i.ba,i),l)}function Ls(i){i.B&&(u.clearTimeout(i.B),i.B=null)}Oe.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(vc(this.i,this.A),this.L!=2&&($n(),te(17)),Qe(this),this.s=2,zn(this)):ko(this,this.S-i)};function zn(i){i.j.G==0||i.J||oa(i.j,i)}function Qe(i){Ls(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,ct(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function Fs(i,l){try{var c=i.j;if(c.G!=0&&(c.g==i||Bs(c.h,i))){if(!i.K&&Bs(c.h,i)&&c.G==3){try{var f=c.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)$r(c),Br(c);else break t;qs(c),te(18)}}else c.za=A[1],0<c.za-c.T&&37500>A[2]&&c.F&&c.v==0&&!c.C&&(c.C=jn(w(c.Za,c),6e3));if(1>=Lo(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Ye(c,11)}else if((i.K||c.g==i)&&$r(c),!F(l))for(A=c.Da.g.parse(l),l=0;l<A.length;l++){let rt=A[l];if(c.T=rt[0],rt=rt[1],c.G==2)if(rt[0]=="c"){c.K=rt[1],c.ia=rt[2];const Gt=rt[3];Gt!=null&&(c.la=Gt,c.j.info("VER="+c.la));const Qt=rt[4];Qt!=null&&(c.Aa=Qt,c.j.info("SVER="+c.Aa));const pn=rt[5];pn!=null&&typeof pn=="number"&&0<pn&&(f=1.5*pn,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const pe=i.g;if(pe){const qr=pe.g?pe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qr){var R=f.h;R.g||qr.indexOf("spdy")==-1&&qr.indexOf("quic")==-1&&qr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Us(R,R.h),R.h=null))}if(f.D){const Ws=pe.g?pe.g.getResponseHeader("X-HTTP-Session-Id"):null;Ws&&(f.ya=Ws,_t(f.I,f.D,Ws))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var L=i;if(f.qa=ua(f,f.J?f.ia:null,f.W),L.K){Fo(f.h,L);var ht=L,$t=f.L;$t&&(ht.I=$t),ht.B&&(Ls(ht),Dr(ht)),f.g=L}else sa(f);0<c.i.length&&Ur(c)}else rt[0]!="stop"&&rt[0]!="close"||Ye(c,7);else c.G==3&&(rt[0]=="stop"||rt[0]=="close"?rt[0]=="stop"?Ye(c,7):js(c):rt[0]!="noop"&&c.l&&c.l.ta(rt),c.v=0)}}$n(4)}catch{}}var Ic=class{constructor(i,l){this.g=i,this.map=l}};function Mo(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Oo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Lo(i){return i.h?1:i.g?i.g.size:0}function Bs(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Us(i,l){i.g?i.g.add(l):i.h=l}function Fo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Mo.prototype.cancel=function(){if(this.i=Bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Bo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.D);return l}return M(i.i)}function wc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],c=i.length,f=0;f<c;f++)l.push(i[f]);return l}l=[],c=0;for(f in i)l[c++]=i[f];return l}function Ac(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var c=0;c<i;c++)l.push(c);return l}l=[],c=0;for(const f in i)l[c++]=f;return l}}}function Uo(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var c=Ac(i),f=wc(i),A=f.length,R=0;R<A;R++)l.call(void 0,f[R],c&&c[R],i)}var $o=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bc(i,l){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var f=i[c].indexOf("="),A=null;if(0<=f){var R=i[c].substring(0,f);A=i[c].substring(f+1)}else R=i[c];l(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Xe(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Xe){this.h=i.h,Nr(this,i.j),this.o=i.o,this.g=i.g,kr(this,i.s),this.l=i.l;var l=i.i,c=new Kn;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),jo(this,c),this.m=i.m}else i&&(l=String(i).match($o))?(this.h=!1,Nr(this,l[1]||"",!0),this.o=Wn(l[2]||""),this.g=Wn(l[3]||"",!0),kr(this,l[4]),this.l=Wn(l[5]||"",!0),jo(this,l[6]||"",!0),this.m=Wn(l[7]||"")):(this.h=!1,this.i=new Kn(null,this.h))}Xe.prototype.toString=function(){var i=[],l=this.j;l&&i.push(Hn(l,qo,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(Hn(l,qo,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(Hn(c,c.charAt(0)=="/"?Pc:Cc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",Hn(c,Vc)),i.join("")};function Ce(i){return new Xe(i)}function Nr(i,l,c){i.j=c?Wn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function kr(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function jo(i,l,c){l instanceof Kn?(i.i=l,xc(i.i,i.h)):(c||(l=Hn(l,Sc)),i.i=new Kn(l,i.h))}function _t(i,l,c){i.i.set(l,c)}function Mr(i){return _t(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Wn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Hn(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,Rc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Rc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var qo=/[#\/\?@]/g,Cc=/[#\?:]/g,Pc=/[#\?]/g,Sc=/[#\?@]/g,Vc=/#/g;function Kn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function Le(i){i.g||(i.g=new Map,i.h=0,i.i&&bc(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=Kn.prototype,n.add=function(i,l){Le(this),this.i=null,i=dn(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function zo(i,l){Le(i),l=dn(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Wo(i,l){return Le(i),l=dn(i,l),i.g.has(l)}n.forEach=function(i,l){Le(this),this.g.forEach(function(c,f){c.forEach(function(A){i.call(l,A,f,this)},this)},this)},n.na=function(){Le(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let f=0;f<l.length;f++){const A=i[f];for(let R=0;R<A.length;R++)c.push(l[f])}return c},n.V=function(i){Le(this);let l=[];if(typeof i=="string")Wo(this,i)&&(l=l.concat(this.g.get(dn(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)l=l.concat(i[c])}return l},n.set=function(i,l){return Le(this),this.i=null,i=dn(this,i),Wo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Ho(i,l,c){zo(i,l),0<c.length&&(i.i=null,i.g.set(dn(i,l),M(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var f=l[c];const R=encodeURIComponent(String(f)),L=this.V(f);for(f=0;f<L.length;f++){var A=R;L[f]!==""&&(A+="="+encodeURIComponent(String(L[f]))),i.push(A)}}return this.i=i.join("&")};function dn(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function xc(i,l){l&&!i.j&&(Le(i),i.i=null,i.g.forEach(function(c,f){var A=f.toLowerCase();f!=A&&(zo(this,f),Ho(this,A,c))},i)),i.j=l}function Dc(i,l){const c=new qn;if(u.Image){const f=new Image;f.onload=b(Fe,c,"TestLoadImage: loaded",!0,l,f),f.onerror=b(Fe,c,"TestLoadImage: error",!1,l,f),f.onabort=b(Fe,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=b(Fe,c,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function Nc(i,l){const c=new qn,f=new AbortController,A=setTimeout(()=>{f.abort(),Fe(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(A),R.ok?Fe(c,"TestPingServer: ok",!0,l):Fe(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Fe(c,"TestPingServer: error",!1,l)})}function Fe(i,l,c,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(c)}catch{}}function kc(){this.g=new Pr}function Mc(i,l,c){const f=c||"";try{Uo(i,function(A,R){let L=A;d(A)&&(L=Pt(A)),l.push(f+R+"="+encodeURIComponent(L))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function Or(i){this.l=i.Ub||null,this.j=i.eb||!1}P(Or,xs),Or.prototype.g=function(){return new Lr(this.l,this.j)},Or.prototype.i=function(i){return function(){return i}}({});function Lr(i,l){It.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Lr,It),n=Lr.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,Qn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Qn(this)),this.g&&(this.readyState=3,Qn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ko(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ko(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?Gn(this):Qn(this),this.readyState==3&&Ko(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Gn(this))},n.Qa=function(i){this.g&&(this.response=i,Gn(this))},n.ga=function(){this.g&&Gn(this)};function Gn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Qn(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function Qn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Lr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Go(i){let l="";return B(i,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function $s(i,l,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=Go(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):_t(i,l,c))}function Ct(i){It.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ct,It);var Oc=/^https?$/i,Lc=["POST","PUT"];n=Ct.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ks.g(),this.v=this.o?wo(this.o):wo(ks),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(R){Qo(this,R);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)c.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())c.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),A=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Lc,l,void 0))||f||A||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,L]of c)this.g.setRequestHeader(R,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jo(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){Qo(this,R)}};function Qo(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Xo(i),Fr(i)}function Xo(i){i.A||(i.A=!0,Rt(i,"complete"),Rt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Rt(this,"complete"),Rt(this,"abort"),Fr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fr(this,!0)),Ct.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Yo(this):this.bb())},n.bb=function(){Yo(this)};function Yo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Pe(i)!=4||i.Z()!=2)){if(i.u&&Pe(i)==4)ye(i.Ea,0,i);else if(Rt(i,"readystatechange"),Pe(i)==4){i.h=!1;try{const L=i.Z();t:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var c;if(!(c=l)){var f;if(f=L===0){var A=String(i.D).match($o)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!Oc.test(A?A.toLowerCase():"")}c=f}if(c)Rt(i,"complete"),Rt(i,"success");else{i.m=6;try{var R=2<Pe(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",Xo(i)}}finally{Fr(i)}}}}function Fr(i,l){if(i.g){Jo(i);const c=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Rt(i,"ready");try{c.onreadystatechange=f}catch{}}}function Jo(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Pe(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Pe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Me(l)}};function Zo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Fc(i){const l={};i=(i.g&&2<=Pe(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(F(i[f]))continue;var c=T(i[f]);const A=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=l[A]||[];l[A]=R,R.push(c)}y(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function ta(i){this.Aa=0,this.i=[],this.j=new qn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xn("baseRetryDelayMs",5e3,i),this.cb=Xn("retryDelaySeedMs",1e4,i),this.Wa=Xn("forwardChannelMaxRetries",2,i),this.wa=Xn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Mo(i&&i.concurrentRequestLimit),this.Da=new kc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ta.prototype,n.la=8,n.G=1,n.connect=function(i,l,c,f){te(0),this.W=i,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=ua(this,null,this.W),Ur(this)};function js(i){if(ea(i),i.G==3){var l=i.U++,c=Ce(i.I);if(_t(c,"SID",i.K),_t(c,"RID",l),_t(c,"TYPE","terminate"),Yn(i,c),l=new Oe(i,i.j,l),l.L=2,l.v=Mr(Ce(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=ca(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Dr(l)}la(i)}function Br(i){i.g&&(zs(i),i.g.cancel(),i.g=null)}function ea(i){Br(i),i.u&&(u.clearTimeout(i.u),i.u=null),$r(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function Ur(i){if(!Oo(i.h)&&!i.s){i.s=!0;var l=i.Ga;dt||Zt(),K||(dt(),K=!0),At.add(l,i),i.B=0}}function Bc(i,l){return Lo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=jn(w(i.Ga,i,l),aa(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new Oe(this,this.j,i);let R=this.o;if(this.S&&(R?(R=m(R),v(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)t:{for(var l=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=c;break t}if(l===4096||c===this.i.length-1){l=c+1;break t}}l=1e3}else l=1e3;l=ra(this,A,l),c=Ce(this.I),_t(c,"RID",i),_t(c,"CVER",22),this.D&&_t(c,"X-HTTP-Session-Id",this.D),Yn(this,c),R&&(this.O?l="headers="+encodeURIComponent(String(Go(R)))+"&"+l:this.m&&$s(c,this.m,R)),Us(this.h,A),this.Ua&&_t(c,"TYPE","init"),this.P?(_t(c,"$req",l),_t(c,"SID","null"),A.T=!0,Os(A,c,null)):Os(A,c,l),this.G=2}}else this.G==3&&(i?na(this,i):this.i.length==0||Oo(this.h)||na(this))};function na(i,l){var c;l?c=l.l:c=i.U++;const f=Ce(i.I);_t(f,"SID",i.K),_t(f,"RID",c),_t(f,"AID",i.T),Yn(i,f),i.m&&i.o&&$s(f,i.m,i.o),c=new Oe(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),l&&(i.i=l.D.concat(i.i)),l=ra(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Us(i.h,c),Os(c,f,l)}function Yn(i,l){i.H&&B(i.H,function(c,f){_t(l,f,c)}),i.l&&Uo({},function(c,f){_t(l,f,c)})}function ra(i,l,c){c=Math.min(i.i.length,c);var f=i.l?w(i.l.Na,i.l,i):null;t:{var A=i.i;let R=-1;for(;;){const L=["count="+c];R==-1?0<c?(R=A[0].g,L.push("ofs="+R)):R=0:L.push("ofs="+R);let ht=!0;for(let $t=0;$t<c;$t++){let rt=A[$t].g;const Gt=A[$t].map;if(rt-=R,0>rt)R=Math.max(0,A[$t].g-100),ht=!1;else try{Mc(Gt,L,"req"+rt+"_")}catch{f&&f(Gt)}}if(ht){f=L.join("&");break t}}}return i=i.i.splice(0,c),l.D=i,f}function sa(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;dt||Zt(),K||(dt(),K=!0),At.add(l,i),i.v=0}}function qs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=jn(w(i.Fa,i),aa(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,ia(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=jn(w(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,te(10),Br(this),ia(this))};function zs(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function ia(i){i.g=new Oe(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Ce(i.qa);_t(l,"RID","rpc"),_t(l,"SID",i.K),_t(l,"AID",i.T),_t(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&_t(l,"TO",i.ja),_t(l,"TYPE","xmlhttp"),Yn(i,l),i.m&&i.o&&$s(l,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=Mr(Ce(l)),c.m=null,c.P=!0,Do(c,i)}n.Za=function(){this.C!=null&&(this.C=null,Br(this),qs(this),te(19))};function $r(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function oa(i,l){var c=null;if(i.g==l){$r(i),zs(i),i.g=null;var f=2}else if(Bs(i.h,l))c=l.D,Fo(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;f=Sr(),Rt(f,new Po(f,c)),Ur(i)}else sa(i);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&Bc(i,l)||f==2&&qs(i)))switch(c&&0<c.length&&(l=i.h,l.i=l.i.concat(c)),A){case 1:Ye(i,5);break;case 4:Ye(i,10);break;case 3:Ye(i,6);break;default:Ye(i,2)}}}function aa(i,l){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*l}function Ye(i,l){if(i.j.info("Error code "+l),l==2){var c=w(i.fb,i),f=i.Xa;const A=!f;f=new Xe(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Nr(f,"https"),Mr(f),A?Dc(f.toString(),c):Nc(f.toString(),c)}else te(2);i.G=0,i.l&&i.l.sa(l),la(i),ea(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),te(2)):(this.j.info("Failed to ping google.com"),te(1))};function la(i){if(i.G=0,i.ka=[],i.l){const l=Bo(i.h);(l.length!=0||i.i.length!=0)&&(C(i.ka,l),C(i.ka,i.i),i.h.i.length=0,M(i.i),i.i.length=0),i.l.ra()}}function ua(i,l,c){var f=c instanceof Xe?Ce(c):new Xe(c);if(f.g!="")l&&(f.g=l+"."+f.g),kr(f,f.s);else{var A=u.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var R=new Xe(null);f&&Nr(R,f),l&&(R.g=l),A&&kr(R,A),c&&(R.l=c),f=R}return c=i.D,l=i.ya,c&&l&&_t(f,c,l),_t(f,"VER",i.la),Yn(i,f),f}function ca(i,l,c){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new Ct(new Or({eb:c})):new Ct(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ha(){}n=ha.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function jr(){}jr.prototype.g=function(i,l){return new se(i,l)};function se(i,l){It.call(this),this.g=new ta(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!F(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!F(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new fn(this)}P(se,It),se.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},se.prototype.close=function(){js(this.g)},se.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=Pt(i),i=c);l.i.push(new Ic(l.Ya++,i)),l.G==3&&Ur(l)},se.prototype.N=function(){this.g.l=null,delete this.j,js(this.g),delete this.g,se.aa.N.call(this)};function da(i){Ds.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const c in l){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}P(da,Ds);function fa(){Ns.call(this),this.status=1}P(fa,Ns);function fn(i){this.g=i}P(fn,ha),fn.prototype.ua=function(){Rt(this.g,"a")},fn.prototype.ta=function(i){Rt(this.g,new da(i))},fn.prototype.sa=function(i){Rt(this.g,new fa)},fn.prototype.ra=function(){Rt(this.g,"b")},jr.prototype.createWebChannel=jr.prototype.g,se.prototype.send=se.prototype.o,se.prototype.open=se.prototype.m,se.prototype.close=se.prototype.close,Yl=function(){return new jr},Xl=function(){return Sr()},Ql=Ge,di={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vr.NO_ERROR=0,Vr.TIMEOUT=8,Vr.HTTP_ERROR=6,Xr=Vr,So.COMPLETE="complete",Gl=So,Ao.EventType=Un,Un.OPEN="a",Un.CLOSE="b",Un.ERROR="c",Un.MESSAGE="d",It.prototype.listen=It.prototype.K,nr=Ao,Ct.prototype.listenOnce=Ct.prototype.L,Ct.prototype.getLastError=Ct.prototype.Ka,Ct.prototype.getLastErrorCode=Ct.prototype.Ba,Ct.prototype.getStatus=Ct.prototype.Z,Ct.prototype.getResponseJson=Ct.prototype.Oa,Ct.prototype.getResponseText=Ct.prototype.oa,Ct.prototype.send=Ct.prototype.ea,Ct.prototype.setWithCredentials=Ct.prototype.Ha,Kl=Ct}).apply(typeof Hr<"u"?Hr:typeof self<"u"?self:typeof window<"u"?window:{});const Ba="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Yt.UNAUTHENTICATED=new Yt(null),Yt.GOOGLE_CREDENTIALS=new Yt("google-credentials-uid"),Yt.FIRST_PARTY=new Yt("first-party-uid"),Yt.MOCK_USER=new Yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new Ul("@firebase/firestore");function er(){return sn.logLevel}function $(n,...t){if(sn.logLevel<=nt.DEBUG){const e=t.map(Bi);sn.debug(`Firestore (${kn}): ${n}`,...e)}}function xe(n,...t){if(sn.logLevel<=nt.ERROR){const e=t.map(Bi);sn.error(`Firestore (${kn}): ${n}`,...e)}}function wn(n,...t){if(sn.logLevel<=nt.WARN){const e=t.map(Bi);sn.warn(`Firestore (${kn}): ${n}`,...e)}}function Bi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(n="Unexpected state"){const t=`FIRESTORE (${kn}) INTERNAL ASSERTION FAILED: `+n;throw xe(t),new Error(t)}function ut(n,t){n||H()}function Q(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Nn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Jp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Yt.UNAUTHENTICATED))}shutdown(){}}class Zp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class tm{constructor(t){this.t=t,this.currentUser=Yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ut(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new nn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new nn,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new nn)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ut(typeof r.accessToken=="string"),new Jl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ut(t===null||typeof t=="string"),new Yt(t)}}class em{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nm{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new em(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rm{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sm{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){ut(this.o===void 0);const r=o=>{o.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ut(typeof e.token=="string"),this.R=e.token,new rm(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=im(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function st(n,t){return n<t?-1:n>t?1:0}function An(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new U(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new U(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new U(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new U(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Nt.fromMillis(Date.now())}static fromDate(t){return Nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Nt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?st(this.nanoseconds,t.nanoseconds):st(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.timestamp=t}static fromTimestamp(t){return new G(t)}static min(){return new G(new Nt(0,0))}static max(){return new G(new Nt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e,r){e===void 0?e=0:e>t.length&&H(),r===void 0?r=t.length-e:r>t.length-e&&H(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return pr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof pr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class yt extends pr{construct(t,e,r){return new yt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new U(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new yt(e)}static emptyPath(){return new yt([])}}const om=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qt extends pr{construct(t,e,r){return new qt(t,e,r)}static isValidIdentifier(t){return om.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new U(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new U(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new U(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new U(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new qt(e)}static emptyPath(){return new qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.path=t}static fromPath(t){return new z(yt.fromString(t))}static fromName(t){return new z(yt.fromString(t).popFirst(5))}static empty(){return new z(yt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&yt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return yt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new z(new yt(t.slice()))}}function am(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new Nt(e+1,0):new Nt(e,r));return new ze(s,z.empty(),t)}function lm(n){return new ze(n.readTime,n.key,-1)}class ze{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ze(G.min(),z.empty(),-1)}static max(){return new ze(G.max(),z.empty(),-1)}}function um(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=z.comparator(n.documentKey,t.documentKey),e!==0?e:st(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==cm)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new D((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof D?e:D.resolve(e)}catch(e){return D.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):D.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):D.reject(e)}static resolve(t){return new D((e,r)=>{e(t)})}static reject(t){return new D((e,r)=>{r(t)})}static waitFor(t){return new D((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=D.resolve(!1);for(const r of t)e=e.next(s=>s?D.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new D((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(p=>{a[d]=p,++u,u===o&&r(a)},p=>s(p))}})}static doWhile(t,e){return new D((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function dm(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function wr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ui.oe=-1;function Es(n){return n==null}function ls(n){return n===0&&1/n==-1/0}function fm(n){return typeof n=="number"&&Number.isInteger(n)&&!ls(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Mn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function tu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e){this.comparator=t,this.root=e||jt.EMPTY}insert(t,e){return new wt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(t){return new wt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,jt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Kr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Kr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Kr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Kr(this.root,t,this.comparator,!0)}}class Kr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class jt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??jt.RED,this.left=s??jt.EMPTY,this.right=o??jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new jt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return jt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const t=this.left.check();if(t!==this.right.check())throw H();return t+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,r,s,o){return this}insert(t,e,r){return new jt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this.comparator=t,this.data=new wt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $a(this.data.getIterator())}getIteratorFrom(t){return new $a(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof zt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new zt(this.comparator);return e.data=t,e}}class $a{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this.fields=t,t.sort(qt.comparator)}static empty(){return new ge([])}unionWith(t){let e=new zt(qt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new ge(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return An(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new eu("Invalid base64 string: "+o):o}}(t);return new Wt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new Wt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return st(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const pm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function We(n){if(ut(!!n),typeof n=="string"){let t=0;const e=pm.exec(n);if(ut(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:St(n.seconds),nanos:St(n.nanos)}}function St(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function on(n){return typeof n=="string"?Wt.fromBase64String(n):Wt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ji(n){const t=n.mapValue.fields.__previous_value__;return $i(t)?ji(t):t}function mr(n){const t=We(n.mapValue.fields.__local_write_time__.timestampValue);return new Nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(t,e,r,s,o,a,u,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}class gr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new gr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof gr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr={mapValue:{}};function an(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?$i(n)?4:_m(n)?9007199254740991:gm(n)?10:11:H()}function Ie(n,t){if(n===t)return!0;const e=an(n);if(e!==an(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return mr(n).isEqual(mr(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=We(s.timestampValue),u=We(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return on(s.bytesValue).isEqual(on(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return St(s.geoPointValue.latitude)===St(o.geoPointValue.latitude)&&St(s.geoPointValue.longitude)===St(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return St(s.integerValue)===St(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=St(s.doubleValue),u=St(o.doubleValue);return a===u?ls(a)===ls(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return An(n.arrayValue.values||[],t.arrayValue.values||[],Ie);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Ua(a)!==Ua(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Ie(a[h],u[h])))return!1;return!0}(n,t);default:return H()}}function _r(n,t){return(n.values||[]).find(e=>Ie(e,t))!==void 0}function bn(n,t){if(n===t)return 0;const e=an(n),r=an(t);if(e!==r)return st(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return st(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=St(o.integerValue||o.doubleValue),h=St(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return ja(n.timestampValue,t.timestampValue);case 4:return ja(mr(n),mr(t));case 5:return st(n.stringValue,t.stringValue);case 6:return function(o,a){const u=on(o),h=on(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const p=st(u[d],h[d]);if(p!==0)return p}return st(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=st(St(o.latitude),St(a.latitude));return u!==0?u:st(St(o.longitude),St(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return qa(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,d,p;const E=o.fields||{},w=a.fields||{},b=(u=E.value)===null||u===void 0?void 0:u.arrayValue,P=(h=w.value)===null||h===void 0?void 0:h.arrayValue,M=st(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((p=P==null?void 0:P.values)===null||p===void 0?void 0:p.length)||0);return M!==0?M:qa(b,P)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Gr.mapValue&&a===Gr.mapValue)return 0;if(o===Gr.mapValue)return 1;if(a===Gr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let E=0;E<h.length&&E<p.length;++E){const w=st(h[E],p[E]);if(w!==0)return w;const b=bn(u[h[E]],d[p[E]]);if(b!==0)return b}return st(h.length,p.length)}(n.mapValue,t.mapValue);default:throw H()}}function ja(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return st(n,t);const e=We(n),r=We(t),s=st(e.seconds,r.seconds);return s!==0?s:st(e.nanos,r.nanos)}function qa(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=bn(e[s],r[s]);if(o)return o}return st(e.length,r.length)}function Rn(n){return fi(n)}function fi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=We(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return on(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return z.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=fi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${fi(e.fields[a])}`;return s+"}"}(n.mapValue):H()}function za(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function pi(n){return!!n&&"integerValue"in n}function qi(n){return!!n&&"arrayValue"in n}function Wa(n){return!!n&&"nullValue"in n}function Ha(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Yr(n){return!!n&&"mapValue"in n}function gm(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function ar(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Mn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=ar(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ar(n.arrayValue.values[e]);return t}return Object.assign({},n)}function _m(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this.value=t}static empty(){return new fe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Yr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ar(e)}setAll(t){let e=qt.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=ar(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Yr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ie(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Yr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Mn(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new fe(ar(this.value))}}function nu(n){const t=[];return Mn(n.fields,(e,r)=>{const s=new qt([e]);if(Yr(r)){const o=nu(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new ge(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new Jt(t,0,G.min(),G.min(),G.min(),fe.empty(),0)}static newFoundDocument(t,e,r,s){return new Jt(t,1,e,G.min(),r,s,0)}static newNoDocument(t,e){return new Jt(t,2,e,G.min(),G.min(),fe.empty(),0)}static newUnknownDocument(t,e){return new Jt(t,3,e,G.min(),G.min(),fe.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=fe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Jt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,e){this.position=t,this.inclusive=e}}function Ka(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=z.comparator(z.fromName(a.referenceValue),e.key):r=bn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ga(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ie(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e="asc"){this.field=t,this.dir=e}}function ym(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{}class Dt extends ru{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Em(t,e,r):e==="array-contains"?new wm(t,r):e==="in"?new Am(t,r):e==="not-in"?new bm(t,r):e==="array-contains-any"?new Rm(t,r):new Dt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Tm(t,r):new Im(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(bn(e,this.value)):e!==null&&an(this.value)===an(e)&&this.matchesComparison(bn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _e extends ru{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new _e(t,e)}matches(t){return su(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function su(n){return n.op==="and"}function iu(n){return vm(n)&&su(n)}function vm(n){for(const t of n.filters)if(t instanceof _e)return!1;return!0}function mi(n){if(n instanceof Dt)return n.field.canonicalString()+n.op.toString()+Rn(n.value);if(iu(n))return n.filters.map(t=>mi(t)).join(",");{const t=n.filters.map(e=>mi(e)).join(",");return`${n.op}(${t})`}}function ou(n,t){return n instanceof Dt?function(r,s){return s instanceof Dt&&r.op===s.op&&r.field.isEqual(s.field)&&Ie(r.value,s.value)}(n,t):n instanceof _e?function(r,s){return s instanceof _e&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&ou(a,s.filters[u]),!0):!1}(n,t):void H()}function au(n){return n instanceof Dt?function(e){return`${e.field.canonicalString()} ${e.op} ${Rn(e.value)}`}(n):n instanceof _e?function(e){return e.op.toString()+" {"+e.getFilters().map(au).join(" ,")+"}"}(n):"Filter"}class Em extends Dt{constructor(t,e,r){super(t,e,r),this.key=z.fromName(r.referenceValue)}matches(t){const e=z.comparator(t.key,this.key);return this.matchesComparison(e)}}class Tm extends Dt{constructor(t,e){super(t,"in",e),this.keys=lu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Im extends Dt{constructor(t,e){super(t,"not-in",e),this.keys=lu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function lu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>z.fromName(r.referenceValue))}class wm extends Dt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return qi(e)&&_r(e.arrayValue,this.value)}}class Am extends Dt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&_r(this.value.arrayValue,e)}}class bm extends Dt{constructor(t,e){super(t,"not-in",e)}matches(t){if(_r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!_r(this.value.arrayValue,e)}}class Rm extends Dt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!qi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>_r(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function Qa(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Cm(n,t,e,r,s,o,a)}function zi(n){const t=Q(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>mi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Es(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Rn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Rn(r)).join(",")),t.ue=e}return t.ue}function Wi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ym(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ou(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ga(n.startAt,t.startAt)&&Ga(n.endAt,t.endAt)}function gi(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Pm(n,t,e,r,s,o,a,u){return new On(n,t,e,r,s,o,a,u)}function Hi(n){return new On(n)}function Xa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function uu(n){return n.collectionGroup!==null}function lr(n){const t=Q(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new zt(qt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new yr(o,r))}),e.has(qt.keyField().canonicalString())||t.ce.push(new yr(qt.keyField(),r))}return t.ce}function ve(n){const t=Q(n);return t.le||(t.le=Sm(t,lr(n))),t.le}function Sm(n,t){if(n.limitType==="F")return Qa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new yr(s.field,o)});const e=n.endAt?new us(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new us(n.startAt.position,n.startAt.inclusive):null;return Qa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function _i(n,t){const e=n.filters.concat([t]);return new On(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function yi(n,t,e){return new On(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ts(n,t){return Wi(ve(n),ve(t))&&n.limitType===t.limitType}function cu(n){return`${zi(ve(n))}|lt:${n.limitType}`}function gn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>au(s)).join(", ")}]`),Es(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Rn(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Rn(s)).join(",")),`Target(${r})`}(ve(n))}; limitType=${n.limitType})`}function Is(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):z.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of lr(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=Ka(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,lr(r),s)||r.endAt&&!function(a,u,h){const d=Ka(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,lr(r),s))}(n,t)}function Vm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function hu(n){return(t,e)=>{let r=!1;for(const s of lr(n)){const o=xm(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function xm(n,t,e){const r=n.field.isKeyField()?z.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?bn(h,d):H()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Mn(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return tu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=new wt(z.comparator);function De(){return Dm}const du=new wt(z.comparator);function rr(...n){let t=du;for(const e of n)t=t.insert(e.key,e);return t}function fu(n){let t=du;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function tn(){return ur()}function pu(){return ur()}function ur(){return new Ln(n=>n.toString(),(n,t)=>n.isEqual(t))}const Nm=new wt(z.comparator),km=new zt(z.comparator);function Y(...n){let t=km;for(const e of n)t=t.add(e);return t}const Mm=new zt(st);function Om(){return Mm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ls(t)?"-0":t}}function mu(n){return{integerValue:""+n}}function Lm(n,t){return fm(t)?mu(t):Ki(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this._=void 0}}function Fm(n,t,e){return n instanceof cs?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&$i(o)&&(o=ji(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof vr?_u(n,t):n instanceof Er?yu(n,t):function(s,o){const a=gu(s,o),u=Ya(a)+Ya(s.Pe);return pi(a)&&pi(s.Pe)?mu(u):Ki(s.serializer,u)}(n,t)}function Bm(n,t,e){return n instanceof vr?_u(n,t):n instanceof Er?yu(n,t):e}function gu(n,t){return n instanceof hs?function(r){return pi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class cs extends ws{}class vr extends ws{constructor(t){super(),this.elements=t}}function _u(n,t){const e=vu(t);for(const r of n.elements)e.some(s=>Ie(s,r))||e.push(r);return{arrayValue:{values:e}}}class Er extends ws{constructor(t){super(),this.elements=t}}function yu(n,t){let e=vu(t);for(const r of n.elements)e=e.filter(s=>!Ie(s,r));return{arrayValue:{values:e}}}class hs extends ws{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ya(n){return St(n.integerValue||n.doubleValue)}function vu(n){return qi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Um(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof vr&&s instanceof vr||r instanceof Er&&s instanceof Er?An(r.elements,s.elements,Ie):r instanceof hs&&s instanceof hs?Ie(r.Pe,s.Pe):r instanceof cs&&s instanceof cs}(n.transform,t.transform)}class $m{constructor(t,e){this.version=t,this.transformResults=e}}class Ee{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ee}static exists(t){return new Ee(void 0,t)}static updateTime(t){return new Ee(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Jr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class As{}function Eu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Gi(n.key,Ee.none()):new Ar(n.key,n.data,Ee.none());{const e=n.data,r=fe.empty();let s=new zt(qt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ln(n.key,r,new ge(s.toArray()),Ee.none())}}function jm(n,t,e){n instanceof Ar?function(s,o,a){const u=s.value.clone(),h=Za(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof ln?function(s,o,a){if(!Jr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Za(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Tu(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function cr(n,t,e,r){return n instanceof Ar?function(o,a,u,h){if(!Jr(o.precondition,a))return u;const d=o.value.clone(),p=tl(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof ln?function(o,a,u,h){if(!Jr(o.precondition,a))return u;const d=tl(o.fieldTransforms,h,a),p=a.data;return p.setAll(Tu(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,t,e,r):function(o,a,u){return Jr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function qm(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=gu(r.transform,s||null);o!=null&&(e===null&&(e=fe.empty()),e.set(r.field,o))}return e||null}function Ja(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&An(r,s,(o,a)=>Um(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ar extends As{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ln extends As{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Tu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Za(n,t,e){const r=new Map;ut(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,Bm(a,u,e[s]))}return r}function tl(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Fm(o,a,t))}return r}class Gi extends As{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zm extends As{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&jm(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=cr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=cr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=pu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Eu(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Y())}isEqual(t){return this.batchId===t.batchId&&An(this.mutations,t.mutations,(e,r)=>Ja(e,r))&&An(this.baseMutations,t.baseMutations,(e,r)=>Ja(e,r))}}class Qi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){ut(t.mutations.length===r.length);let s=function(){return Nm}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Qi(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt,et;function Gm(n){switch(n){default:return H();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Iu(n){if(n===void 0)return xe("GRPC error has no .code"),S.UNKNOWN;switch(n){case xt.OK:return S.OK;case xt.CANCELLED:return S.CANCELLED;case xt.UNKNOWN:return S.UNKNOWN;case xt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case xt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case xt.INTERNAL:return S.INTERNAL;case xt.UNAVAILABLE:return S.UNAVAILABLE;case xt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case xt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case xt.NOT_FOUND:return S.NOT_FOUND;case xt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case xt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case xt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case xt.ABORTED:return S.ABORTED;case xt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case xt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case xt.DATA_LOSS:return S.DATA_LOSS;default:return H()}}(et=xt||(xt={}))[et.OK=0]="OK",et[et.CANCELLED=1]="CANCELLED",et[et.UNKNOWN=2]="UNKNOWN",et[et.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",et[et.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",et[et.NOT_FOUND=5]="NOT_FOUND",et[et.ALREADY_EXISTS=6]="ALREADY_EXISTS",et[et.PERMISSION_DENIED=7]="PERMISSION_DENIED",et[et.UNAUTHENTICATED=16]="UNAUTHENTICATED",et[et.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",et[et.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",et[et.ABORTED=10]="ABORTED",et[et.OUT_OF_RANGE=11]="OUT_OF_RANGE",et[et.UNIMPLEMENTED=12]="UNIMPLEMENTED",et[et.INTERNAL=13]="INTERNAL",et[et.UNAVAILABLE=14]="UNAVAILABLE",et[et.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=new en([4294967295,4294967295],0);function el(n){const t=Qm().encode(n),e=new Hl;return e.update(t),new Uint8Array(e.digest())}function nl(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new en([e,r],0),new en([s,o],0)]}class Xi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new sr(`Invalid padding: ${e}`);if(r<0)throw new sr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new sr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new sr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=en.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(en.fromNumber(r)));return s.compare(Xm)===1&&(s=new en([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=el(t),[r,s]=nl(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Xi(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=el(t),[r,s]=nl(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class sr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,br.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new bs(G.min(),s,new wt(st),De(),Y())}}class br{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new br(r,e,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class wu{constructor(t,e){this.targetId=t,this.me=e}}class Au{constructor(t,e,r=Wt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class rl{constructor(){this.fe=0,this.ge=il(),this.pe=Wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=Y(),e=Y(),r=Y();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:H()}}),new br(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=il()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,ut(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ym{constructor(t){this.Le=t,this.Be=new Map,this.ke=De(),this.qe=sl(),this.Qe=new wt(st)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:H()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(gi(o))if(r===0){const a=new z(o.path);this.Ue(e,a,Jt.newNoDocument(a,G.min()))}else ut(r===1);else{const a=this.Ye(e);if(a!==r){const u=this.Ze(t),h=u?this.Xe(u,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=on(r).toUint8Array()}catch(h){if(h instanceof eu)return wn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Xi(a,s,o)}catch(h){return wn(h instanceof sr?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&gi(u.target)){const h=new z(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Jt.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=Y();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new bs(t,e,this.Qe,this.ke,r);return this.ke=De(),this.qe=sl(),this.Qe=new wt(st),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new rl,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new zt(st),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||$("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new rl),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function sl(){return new wt(z.comparator)}function il(){return new wt(z.comparator)}const Jm={asc:"ASCENDING",desc:"DESCENDING"},Zm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tg={and:"AND",or:"OR"};class eg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function vi(n,t){return n.useProto3Json||Es(t)?t:{value:t}}function ds(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ng(n,t){return ds(n,t.toTimestamp())}function Te(n){return ut(!!n),G.fromTimestamp(function(e){const r=We(e);return new Nt(r.seconds,r.nanos)}(n))}function Yi(n,t){return Ei(n,t).canonicalString()}function Ei(n,t){const e=function(s){return new yt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ru(n){const t=yt.fromString(n);return ut(xu(t)),t}function Ti(n,t){return Yi(n.databaseId,t.path)}function Zs(n,t){const e=Ru(t);if(e.get(1)!==n.databaseId.projectId)throw new U(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new U(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new z(Pu(e))}function Cu(n,t){return Yi(n.databaseId,t)}function rg(n){const t=Ru(n);return t.length===4?yt.emptyPath():Pu(t)}function Ii(n){return new yt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Pu(n){return ut(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ol(n,t,e){return{name:Ti(n,t),fields:e.value.mapValue.fields}}function sg(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:H()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(ut(p===void 0||typeof p=="string"),Wt.fromBase64String(p||"")):(ut(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Wt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const p=d.code===void 0?S.UNKNOWN:Iu(d.code);return new U(p,d.message||"")}(a);e=new Au(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Zs(n,r.document.name),o=Te(r.document.updateTime),a=r.document.createTime?Te(r.document.createTime):G.min(),u=new fe({mapValue:{fields:r.document.fields}}),h=Jt.newFoundDocument(s,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];e=new Zr(d,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Zs(n,r.document),o=r.readTime?Te(r.readTime):G.min(),a=Jt.newNoDocument(s,o),u=r.removedTargetIds||[];e=new Zr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Zs(n,r.document),o=r.removedTargetIds||[];e=new Zr([],o,s,null)}else{if(!("filter"in t))return H();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Km(s,o),u=r.targetId;e=new wu(u,a)}}return e}function ig(n,t){let e;if(t instanceof Ar)e={update:ol(n,t.key,t.value)};else if(t instanceof Gi)e={delete:Ti(n,t.key)};else if(t instanceof ln)e={update:ol(n,t.key,t.data),updateMask:pg(t.fieldMask)};else{if(!(t instanceof zm))return H();e={verify:Ti(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof cs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof vr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Er)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof hs)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw H()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:ng(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:H()}(n,t.precondition)),e}function og(n,t){return n&&n.length>0?(ut(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Te(s.updateTime):Te(o);return a.isEqual(G.min())&&(a=Te(o)),new $m(a,s.transformResults||[])}(e,t))):[]}function ag(n,t){return{documents:[Cu(n,t.path)]}}function lg(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Cu(n,s);const o=function(d){if(d.length!==0)return Vu(_e.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(w){return{field:_n(w.field),direction:hg(w.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=vi(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function ug(n){let t=rg(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){ut(r===1);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(E){const w=Su(E);return w instanceof _e&&iu(w)?w.getFilters():[w]}(e.where));let a=[];e.orderBy&&(a=function(E){return E.map(w=>function(P){return new yr(yn(P.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(e.orderBy));let u=null;e.limit&&(u=function(E){let w;return w=typeof E=="object"?E.value:E,Es(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(E){const w=!!E.before,b=E.values||[];return new us(b,w)}(e.startAt));let d=null;return e.endAt&&(d=function(E){const w=!E.before,b=E.values||[];return new us(b,w)}(e.endAt)),Pm(t,s,a,o,u,"F",h,d)}function cg(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Su(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=yn(e.unaryFilter.field);return Dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=yn(e.unaryFilter.field);return Dt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=yn(e.unaryFilter.field);return Dt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=yn(e.unaryFilter.field);return Dt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(n):n.fieldFilter!==void 0?function(e){return Dt.create(yn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return _e.create(e.compositeFilter.filters.map(r=>Su(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(n):H()}function hg(n){return Jm[n]}function dg(n){return Zm[n]}function fg(n){return tg[n]}function _n(n){return{fieldPath:n.canonicalString()}}function yn(n){return qt.fromServerFormat(n.fieldPath)}function Vu(n){return n instanceof Dt?function(e){if(e.op==="=="){if(Ha(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NAN"}};if(Wa(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ha(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NOT_NAN"}};if(Wa(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_n(e.field),op:dg(e.op),value:e.value}}}(n):n instanceof _e?function(e){const r=e.getFilters().map(s=>Vu(s));return r.length===1?r[0]:{compositeFilter:{op:fg(e.op),filters:r}}}(n):H()}function pg(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function xu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t,e,r,s,o=G.min(),a=G.min(),u=Wt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new Ue(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ue(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(t){this.ct=t}}function gg(n){const t=ug({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?yi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.un=new yg}addToCollectionParentIndex(t,e){return this.un.add(e),D.resolve()}getCollectionParents(t,e){return D.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return D.resolve()}deleteFieldIndex(t,e){return D.resolve()}deleteAllFieldIndexes(t){return D.resolve()}createTargetIndexes(t,e){return D.resolve()}getDocumentsMatchingTarget(t,e){return D.resolve(null)}getIndexType(t,e){return D.resolve(0)}getFieldIndexes(t,e){return D.resolve([])}getNextCollectionGroupToUpdate(t){return D.resolve(null)}getMinOffset(t,e){return D.resolve(ze.min())}getMinOffsetFromCollectionGroup(t,e){return D.resolve(ze.min())}updateCollectionGroup(t,e,r){return D.resolve()}updateIndexEntries(t,e){return D.resolve()}}class yg{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new zt(yt.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new zt(yt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Cn(0)}static kn(){return new Cn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.changes=new Ln(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Jt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?D.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&cr(r.mutation,s,ge.empty(),Nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Y()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Y()){const s=tn();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=rr();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=tn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Y()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=De();const a=ur(),u=function(){return ur()}();return e.forEach((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof ln)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),cr(p.mutation,d,p.mutation.getFieldMask(),Nt.now())):a.set(d.key,ge.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>{var E;return u.set(d,new Eg(p,(E=a.get(d))!==null&&E!==void 0?E:null))}),u))}recalculateAndSaveOverlays(t,e){const r=ur();let s=new wt((a,u)=>a-u),o=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let p=r.get(h)||ge.empty();p=u.applyToLocalView(d,p),r.set(h,p);const E=(s.get(u.batchId)||Y()).add(h);s=s.insert(u.batchId,E)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,p=h.value,E=pu();p.forEach(w=>{if(!o.has(w)){const b=Eu(e.get(w),r.get(w));b!==null&&E.set(w,b),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,E))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):uu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):D.resolve(tn());let u=-1,h=o;return a.next(d=>D.forEach(d,(p,E)=>(u<E.largestBatchId&&(u=E.largestBatchId),o.get(p)?D.resolve():this.remoteDocumentCache.getEntry(t,p).next(w=>{h=h.insert(p,w)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,Y())).next(p=>({batchId:u,changes:fu(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new z(e)).next(r=>{let s=rr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=rr();return this.indexManager.getCollectionParents(t,o).next(u=>D.forEach(u,h=>{const d=function(E,w){return new On(w,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(p=>{p.forEach((E,w)=>{a=a.insert(E,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Jt.newInvalidDocument(p)))});let u=rr();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&cr(p.mutation,d,ge.empty(),Nt.now()),Is(e,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return D.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Te(s.createTime)}}(e)),D.resolve()}getNamedQuery(t,e){return D.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:gg(s.bundledQuery),readTime:Te(s.readTime)}}(e)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.overlays=new wt(z.comparator),this.Ir=new Map}getOverlay(t,e){return D.resolve(this.overlays.get(e))}getOverlays(t,e){const r=tn();return D.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),D.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(t,e,r){const s=tn(),o=e.length+1,a=new z(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return D.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new wt((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=tn(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=tn(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=s)););return D.resolve(u)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Hm(e,r));let o=this.Ir.get(e);o===void 0&&(o=Y(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(){this.sessionToken=Wt.EMPTY_BYTE_STRING}getSessionToken(t){return D.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.Tr=new zt(Mt.Er),this.dr=new zt(Mt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new Mt(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new Mt(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new z(new yt([])),r=new Mt(e,t),s=new Mt(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new z(new yt([])),r=new Mt(e,t),s=new Mt(e,t+1);let o=Y();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new Mt(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Mt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return z.comparator(t.key,e.key)||st(t.wr,e.wr)}static Ar(t,e){return st(t.wr,e.wr)||z.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new zt(Mt.Er)}checkEmpty(t){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Wm(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.br=this.br.add(new Mt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return D.resolve(a)}lookupMutationBatch(t,e){return D.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return D.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Mt(e,0),s=new Mt(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const u=this.Dr(a.wr);o.push(u)}),D.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new zt(st);return e.forEach(s=>{const o=new Mt(s,0),a=new Mt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{r=r.add(u.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;z.isDocumentKey(o)||(o=o.child(""));const a=new Mt(new z(o),0);let u=new zt(st);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.wr)),!0)},a),D.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){ut(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(e.mutations,s=>{const o=new Mt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new Mt(e,0),s=this.br.firstAfterOrEqual(r);return D.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,D.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(t){this.Mr=t,this.docs=function(){return new wt(z.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return D.resolve(r?r.document.mutableCopy():Jt.newInvalidDocument(e))}getEntries(t,e){let r=De();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Jt.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=De();const a=e.path,u=new z(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||um(lm(p),r)<=0||(s.has(p.key)||Is(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return D.resolve(o)}getAllFromCollectionGroup(t,e,r,s){H()}Or(t,e){return D.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Cg(this)}getSize(t){return D.resolve(this.size)}}class Cg extends vg{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),D.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t){this.persistence=t,this.Nr=new Ln(e=>zi(e),Wi),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ji,this.targetCount=0,this.kr=Cn.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),D.resolve()}getLastRemoteSnapshotVersion(t){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return D.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),D.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Cn(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,D.resolve()}updateTargetData(t,e){return this.Kn(e),D.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,D.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),D.waitFor(o).next(()=>s)}getTargetCount(t){return D.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return D.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),D.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),D.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),D.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return D.resolve(r)}containsKey(t,e){return D.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Ui(0),this.Kr=!1,this.Kr=!0,this.$r=new Ag,this.referenceDelegate=t(this),this.Ur=new Pg(this),this.indexManager=new _g,this.remoteDocumentCache=function(s){return new Rg(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new mg(e),this.Gr=new Ig(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new wg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new bg(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){$("MemoryPersistence","Starting transaction:",t);const s=new Vg(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Vg extends hm{constructor(t){super(),this.currentSequenceNumber=t}}class Zi{constructor(t){this.persistence=t,this.Jr=new Ji,this.Yr=null}static Zr(t){return new Zi(t)}get Xr(){if(this.Yr)return this.Yr;throw H()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),D.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),D.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const s=z.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,G.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return D.or([()=>D.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=Y(),s=Y();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new to(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return kf()?8:dm(Df())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new xg;return this.Xi(t,e,a).next(u=>{if(o.result=u,this.zi)return this.es(t,e,a,u.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(er()<=nt.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",gn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(er()<=nt.DEBUG&&$("QueryEngine","Query:",gn(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(er()<=nt.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",gn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ve(e))):D.resolve())}Yi(t,e){if(Xa(e))return D.resolve(null);let r=ve(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=yi(e,null,"F"),r=ve(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=Y(...o);return this.Ji.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.ts(e,u);return this.ns(e,d,a,h.readTime)?this.Yi(t,yi(e,null,"F")):this.rs(t,d,e,h)}))})))}Zi(t,e,r,s){return Xa(e)||s.isEqual(G.min())?D.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?D.resolve(null):(er()<=nt.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gn(e)),this.rs(t,a,e,am(s,-1)).next(u=>u))})}ts(t,e){let r=new zt(hu(t));return e.forEach((s,o)=>{Is(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return er()<=nt.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",gn(e)),this.Ji.getDocumentsMatchingQuery(t,e,ze.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new wt(st),this._s=new Ln(o=>zi(o),Wi),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Tg(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function kg(n,t,e,r){return new Ng(n,t,e,r)}async function Du(n,t){const e=Q(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=Y();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Mg(n,t){const e=Q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,p){const E=d.batch,w=E.keys();let b=D.resolve();return w.forEach(P=>{b=b.next(()=>p.getEntry(h,P)).next(M=>{const C=d.docVersions.get(P);ut(C!==null),M.version.compareTo(C)<0&&(E.applyToRemoteDocument(M,d),M.isValidDocument()&&(M.setReadTime(d.commitVersion),p.addEntry(M)))})}),b.next(()=>u.mutationQueue.removeMutationBatch(h,E))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=Y();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Nu(n){const t=Q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Og(n,t){const e=Q(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const u=[];t.targetChanges.forEach((p,E)=>{const w=s.get(E);if(!w)return;u.push(e.Ur.removeMatchingKeys(o,p.removedDocuments,E).next(()=>e.Ur.addMatchingKeys(o,p.addedDocuments,E)));let b=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?b=b.withResumeToken(Wt.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):p.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(p.resumeToken,r)),s=s.insert(E,b),function(M,C,O){return M.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(w,b,p)&&u.push(e.Ur.updateTargetData(o,b))});let h=De(),d=Y();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(Lg(o,a,t.documentUpdates).next(p=>{h=p.Ps,d=p.Is})),!r.isEqual(G.min())){const p=e.Ur.getLastRemoteSnapshotVersion(o).next(E=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return D.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.os=s,o))}function Lg(n,t,e){let r=Y(),s=Y();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=De();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(G.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):$("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function Fg(n,t){const e=Q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Bg(n,t){const e=Q(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,D.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new Ue(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function wi(n,t,e){const r=Q(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!wr(a))throw a;$("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function al(n,t,e){const r=Q(n);let s=G.min(),o=Y();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const E=Q(h),w=E._s.get(p);return w!==void 0?D.resolve(E.os.get(w)):E.Ur.getTargetData(d,p)}(r,a,ve(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:G.min(),e?o:Y())).next(u=>(Ug(r,Vm(t),u),{documents:u,Ts:o})))}function Ug(n,t,e){let r=n.us.get(t)||G.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class ll{constructor(){this.activeTargetIds=Om()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $g{constructor(){this.so=new ll,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new ll,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qr=null;function ti(){return Qr===null?Qr=function(){return 268435456+Math.round(2147483648*Math.random())}():Qr++,"0x"+Qr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="WebChannelConnection";class Wg extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const u=ti(),h=this.xo(e,r.toUriEncodedString());$("RestConnection",`Sending RPC '${e}' ${u}:`,h,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,h,d,s).then(p=>($("RestConnection",`Received RPC '${e}' ${u}: `,p),p),p=>{throw wn("RestConnection",`RPC '${e}' ${u} failed with error: `,p,"url: ",h,"request:",s),p})}Lo(e,r,s,o,a,u){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+kn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=qg[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=ti();return new Promise((a,u)=>{const h=new Kl;h.setWithCredentials(!0),h.listenOnce(Gl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Xr.NO_ERROR:const p=h.getResponseJson();$(Xt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case Xr.TIMEOUT:$(Xt,`RPC '${t}' ${o} timed out`),u(new U(S.DEADLINE_EXCEEDED,"Request time out"));break;case Xr.HTTP_ERROR:const E=h.getStatus();if($(Xt,`RPC '${t}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const b=w==null?void 0:w.error;if(b&&b.status&&b.message){const P=function(C){const O=C.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(O)>=0?O:S.UNKNOWN}(b.status);u(new U(P,b.message))}else u(new U(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new U(S.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{$(Xt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);$(Xt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Bo(t,e,r){const s=ti(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Yl(),u=Xl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");$(Xt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const E=a.createWebChannel(p,h);let w=!1,b=!1;const P=new zg({Io:C=>{b?$(Xt,`Not sending because RPC '${t}' stream ${s} is closed:`,C):(w||($(Xt,`Opening RPC '${t}' stream ${s} transport.`),E.open(),w=!0),$(Xt,`RPC '${t}' stream ${s} sending:`,C),E.send(C))},To:()=>E.close()}),M=(C,O,F)=>{C.listen(O,k=>{try{F(k)}catch(x){setTimeout(()=>{throw x},0)}})};return M(E,nr.EventType.OPEN,()=>{b||($(Xt,`RPC '${t}' stream ${s} transport opened.`),P.yo())}),M(E,nr.EventType.CLOSE,()=>{b||(b=!0,$(Xt,`RPC '${t}' stream ${s} transport closed`),P.So())}),M(E,nr.EventType.ERROR,C=>{b||(b=!0,wn(Xt,`RPC '${t}' stream ${s} transport errored:`,C),P.So(new U(S.UNAVAILABLE,"The operation could not be completed")))}),M(E,nr.EventType.MESSAGE,C=>{var O;if(!b){const F=C.data[0];ut(!!F);const k=F,x=k.error||((O=k[0])===null||O===void 0?void 0:O.error);if(x){$(Xt,`RPC '${t}' stream ${s} received error:`,x);const j=x.status;let B=function(_){const v=xt[_];if(v!==void 0)return Iu(v)}(j),y=x.message;B===void 0&&(B=S.INTERNAL,y="Unknown error status: "+j+" with message "+x.message),b=!0,P.So(new U(B,y)),E.close()}else $(Xt,`RPC '${t}' stream ${s} received:`,F),P.bo(F)}}),M(u,Ql.STAT_EVENT,C=>{C.stat===di.PROXY?$(Xt,`RPC '${t}' stream ${s} detected buffering proxy`):C.stat===di.NOPROXY&&$(Xt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function ei(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n){return new eg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t,e,r,s,o,a,u,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ku(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(xe(e.toString()),xe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new U(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return $("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Hg extends Mu{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=sg(this.serializer,t),r=function(o){if(!("targetChange"in o))return G.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?G.min():a.readTime?Te(a.readTime):G.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Ii(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=gi(h)?{documents:ag(o,h)}:{query:lg(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=bu(o,a.resumeToken);const d=vi(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(G.min())>0){u.readTime=ds(o,a.snapshotVersion.toTimestamp());const d=vi(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=cg(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Ii(this.serializer),e.removeTarget=t,this.a_(e)}}class Kg extends Mu{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return ut(!!t.streamToken),this.lastStreamToken=t.streamToken,ut(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){ut(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=og(t.writeResults,t.commitTime),r=Te(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Ii(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>ig(this.serializer,r))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new U(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Ei(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(S.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(t,Ei(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new U(S.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Qg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(xe(e),this.D_=!1):$("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{un(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=Q(h);d.L_.add(4),await Rr(d),d.q_.set("Unknown"),d.L_.delete(4),await Cs(d)}(this))})}),this.q_=new Qg(r,s)}}async function Cs(n){if(un(n))for(const t of n.B_)await t(!0)}async function Rr(n){for(const t of n.B_)await t(!1)}function Ou(n,t){const e=Q(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),so(e)?ro(e):Fn(e).r_()&&no(e,t))}function eo(n,t){const e=Q(n),r=Fn(e);e.N_.delete(t),r.r_()&&Lu(e,t),e.N_.size===0&&(r.r_()?r.o_():un(e)&&e.q_.set("Unknown"))}function no(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(G.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Fn(n).A_(t)}function Lu(n,t){n.Q_.xe(t),Fn(n).R_(t)}function ro(n){n.Q_=new Ym({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Fn(n).start(),n.q_.v_()}function so(n){return un(n)&&!Fn(n).n_()&&n.N_.size>0}function un(n){return Q(n).L_.size===0}function Fu(n){n.Q_=void 0}async function Yg(n){n.q_.set("Online")}async function Jg(n){n.N_.forEach((t,e)=>{no(n,t)})}async function Zg(n,t){Fu(n),so(n)?(n.q_.M_(t),ro(n)):n.q_.set("Unknown")}async function t_(n,t,e){if(n.q_.set("Online"),t instanceof Au&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.N_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.N_.delete(u),s.Q_.removeTarget(u))}(n,t)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await fs(n,r)}else if(t instanceof Zr?n.Q_.Ke(t):t instanceof wu?n.Q_.He(t):n.Q_.We(t),!e.isEqual(G.min()))try{const r=await Nu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.Q_.rt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.N_.get(d);p&&o.N_.set(d,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const p=o.N_.get(h);if(!p)return;o.N_.set(h,p.withResumeToken(Wt.EMPTY_BYTE_STRING,p.snapshotVersion)),Lu(o,h);const E=new Ue(p.target,h,d,p.sequenceNumber);no(o,E)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await fs(n,r)}}async function fs(n,t,e){if(!wr(t))throw t;n.L_.add(1),await Rr(n),n.q_.set("Offline"),e||(e=()=>Nu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Cs(n)})}function Bu(n,t){return t().catch(e=>fs(n,e,t))}async function Ps(n){const t=Q(n),e=He(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;e_(t);)try{const s=await Fg(t.localStore,r);if(s===null){t.O_.length===0&&e.o_();break}r=s.batchId,n_(t,s)}catch(s){await fs(t,s)}Uu(t)&&$u(t)}function e_(n){return un(n)&&n.O_.length<10}function n_(n,t){n.O_.push(t);const e=He(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Uu(n){return un(n)&&!He(n).n_()&&n.O_.length>0}function $u(n){He(n).start()}async function r_(n){He(n).p_()}async function s_(n){const t=He(n);for(const e of n.O_)t.m_(e.mutations)}async function i_(n,t,e){const r=n.O_.shift(),s=Qi.from(r,t,e);await Bu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ps(n)}async function o_(n,t){t&&He(n).V_&&await async function(r,s){if(function(a){return Gm(a)&&a!==S.ABORTED}(s.code)){const o=r.O_.shift();He(r).s_(),await Bu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Ps(r)}}(n,t),Uu(n)&&$u(n)}async function cl(n,t){const e=Q(n);e.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=un(e);e.L_.add(3),await Rr(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Cs(e)}async function a_(n,t){const e=Q(n);t?(e.L_.delete(2),await Cs(e)):t||(e.L_.add(2),await Rr(e),e.q_.set("Unknown"))}function Fn(n){return n.K_||(n.K_=function(e,r,s){const o=Q(e);return o.w_(),new Hg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Yg.bind(null,n),Ro:Jg.bind(null,n),mo:Zg.bind(null,n),d_:t_.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),so(n)?ro(n):n.q_.set("Unknown")):(await n.K_.stop(),Fu(n))})),n.K_}function He(n){return n.U_||(n.U_=function(e,r,s){const o=Q(e);return o.w_(),new Kg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:r_.bind(null,n),mo:o_.bind(null,n),f_:s_.bind(null,n),g_:i_.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Ps(n)):(await n.U_.stop(),n.O_.length>0&&($("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new io(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oo(n,t){if(xe("AsyncQueue",`${t}: ${n}`),wr(n))return new U(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t){this.comparator=t?(e,r)=>t(e,r)||z.comparator(e.key,r.key):(e,r)=>z.comparator(e.key,r.key),this.keyedMap=rr(),this.sortedSet=new wt(this.comparator)}static emptySet(t){return new En(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof En)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new En;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.W_=new wt(z.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):H():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Pn{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Pn(t,e,En.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ts(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class u_{constructor(){this.queries=dl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=Q(e),o=s.queries;s.queries=dl(),o.forEach((a,u)=>{for(const h of u.j_)h.onError(r)})})(this,new U(S.ABORTED,"Firestore shutting down"))}}function dl(){return new Ln(n=>cu(n),Ts)}async function c_(n,t){const e=Q(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new l_,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=oo(a,`Initialization of query '${gn(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&ao(e)}async function h_(n,t){const e=Q(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function d_(n,t){const e=Q(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.j_)u.X_(s)&&(r=!0);a.z_=s}}r&&ao(e)}function f_(n,t,e){const r=Q(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function ao(n){n.Y_.forEach(t=>{t.next()})}var Ai,fl;(fl=Ai||(Ai={})).ea="default",fl.Cache="cache";class p_{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Pn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Pn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Ai.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t){this.key=t}}class qu{constructor(t){this.key=t}}class m_{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Y(),this.mutatedKeys=Y(),this.Aa=hu(t),this.Ra=new En(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new hl,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,E)=>{const w=s.get(p),b=Is(this.query,E)?E:null,P=!!w&&this.mutatedKeys.has(w.key),M=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let C=!1;w&&b?w.data.isEqual(b.data)?P!==M&&(r.track({type:3,doc:b}),C=!0):this.ga(w,b)||(r.track({type:2,doc:b}),C=!0,(h&&this.Aa(b,h)>0||d&&this.Aa(b,d)<0)&&(u=!0)):!w&&b?(r.track({type:0,doc:b}),C=!0):w&&!b&&(r.track({type:1,doc:w}),C=!0,(h||d)&&(u=!0)),C&&(b?(a=a.add(b),o=M?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:u,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((p,E)=>function(b,P){const M=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return M(b)-M(P)}(p.type,E.type)||this.Aa(p.doc,E.doc)),this.pa(r),s=s!=null&&s;const u=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Pn(this.query,t.Ra,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new hl,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=Y(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new qu(r))}),this.da.forEach(r=>{t.has(r)||e.push(new ju(r))}),e}ba(t){this.Ta=t.Ts,this.da=Y();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Pn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class g_{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class __{constructor(t){this.key=t,this.va=!1}}class y_{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Ln(u=>cu(u),Ts),this.Ma=new Map,this.xa=new Set,this.Oa=new wt(z.comparator),this.Na=new Map,this.La=new Ji,this.Ba={},this.ka=new Map,this.qa=Cn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function v_(n,t,e=!0){const r=Qu(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await zu(r,t,e,!0),s}async function E_(n,t){const e=Qu(n);await zu(e,t,!0,!1)}async function zu(n,t,e,r){const s=await Bg(n.localStore,ve(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await T_(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Ou(n.remoteStore,s),u}async function T_(n,t,e,r,s){n.Ka=(E,w,b)=>async function(M,C,O,F){let k=C.view.ma(O);k.ns&&(k=await al(M.localStore,C.query,!1).then(({documents:y})=>C.view.ma(y,k)));const x=F&&F.targetChanges.get(C.targetId),j=F&&F.targetMismatches.get(C.targetId)!=null,B=C.view.applyChanges(k,M.isPrimaryClient,x,j);return ml(M,C.targetId,B.wa),B.snapshot}(n,E,w,b);const o=await al(n.localStore,t,!0),a=new m_(t,o.Ts),u=a.ma(o.documents),h=br.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);ml(n,e,d.wa);const p=new g_(t,e,a);return n.Fa.set(t,p),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function I_(n,t,e){const r=Q(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!Ts(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&eo(r.remoteStore,s.targetId),bi(r,s.targetId)}).catch(Ir)):(bi(r,s.targetId),await wi(r.localStore,s.targetId,!0))}async function w_(n,t){const e=Q(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),eo(e.remoteStore,r.targetId))}async function A_(n,t,e){const r=x_(n);try{const s=await function(a,u){const h=Q(a),d=Nt.now(),p=u.reduce((b,P)=>b.add(P.key),Y());let E,w;return h.persistence.runTransaction("Locally write mutations","readwrite",b=>{let P=De(),M=Y();return h.cs.getEntries(b,p).next(C=>{P=C,P.forEach((O,F)=>{F.isValidDocument()||(M=M.add(O))})}).next(()=>h.localDocuments.getOverlayedDocuments(b,P)).next(C=>{E=C;const O=[];for(const F of u){const k=qm(F,E.get(F.key).overlayedDocument);k!=null&&O.push(new ln(F.key,k,nu(k.value.mapValue),Ee.exists(!0)))}return h.mutationQueue.addMutationBatch(b,d,O,u)}).next(C=>{w=C;const O=C.applyToLocalDocumentSet(E,M);return h.documentOverlayCache.saveOverlays(b,C.batchId,O)})}).then(()=>({batchId:w.batchId,changes:fu(E)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new wt(st)),d=d.insert(u,h),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,e),await Cr(r,s.changes),await Ps(r.remoteStore)}catch(s){const o=oo(s,"Failed to persist write");e.reject(o)}}async function Wu(n,t){const e=Q(n);try{const r=await Og(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(ut(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?ut(a.va):s.removedDocuments.size>0&&(ut(a.va),a.va=!1))}),await Cr(e,r,t)}catch(r){await Ir(r)}}function pl(n,t,e){const r=Q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const u=a.view.Z_(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=Q(a);h.onlineState=u;let d=!1;h.queries.forEach((p,E)=>{for(const w of E.j_)w.Z_(u)&&(d=!0)}),d&&ao(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function b_(n,t,e){const r=Q(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new wt(z.comparator);a=a.insert(o,Jt.newNoDocument(o,G.min()));const u=Y().add(o),h=new bs(G.min(),new Map,new wt(st),a,u);await Wu(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),lo(r)}else await wi(r.localStore,t,!1).then(()=>bi(r,t,e)).catch(Ir)}async function R_(n,t){const e=Q(n),r=t.batch.batchId;try{const s=await Mg(e.localStore,t);Ku(e,r,null),Hu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Cr(e,s)}catch(s){await Ir(s)}}async function C_(n,t,e){const r=Q(n);try{const s=await function(a,u){const h=Q(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,u).next(E=>(ut(E!==null),p=E.keys(),h.mutationQueue.removeMutationBatch(d,E))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,t);Ku(r,t,e),Hu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Cr(r,s)}catch(s){await Ir(s)}}function Hu(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Ku(n,t,e){const r=Q(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function bi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||Gu(n,r)})}function Gu(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(eo(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),lo(n))}function ml(n,t,e){for(const r of e)r instanceof ju?(n.La.addReference(r.key,t),P_(n,r)):r instanceof qu?($("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||Gu(n,r.key)):H()}function P_(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||($("SyncEngine","New document in limbo: "+e),n.xa.add(r),lo(n))}function lo(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new z(yt.fromString(t)),r=n.qa.next();n.Na.set(r,new __(e)),n.Oa=n.Oa.insert(e,r),Ou(n.remoteStore,new Ue(ve(Hi(e.path)),r,"TargetPurposeLimboResolution",Ui.oe))}}async function Cr(n,t,e){const r=Q(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((u,h)=>{a.push(r.Ka(h,t,e).then(d=>{var p;if((d||e)&&r.isPrimaryClient){const E=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(d){s.push(d);const E=to.Wi(h.targetId,d);o.push(E)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(h,d){const p=Q(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>D.forEach(d,w=>D.forEach(w.$i,b=>p.persistence.referenceDelegate.addReference(E,w.targetId,b)).next(()=>D.forEach(w.Ui,b=>p.persistence.referenceDelegate.removeReference(E,w.targetId,b)))))}catch(E){if(!wr(E))throw E;$("LocalStore","Failed to update sequence numbers: "+E)}for(const E of d){const w=E.targetId;if(!E.fromCache){const b=p.os.get(w),P=b.snapshotVersion,M=b.withLastLimboFreeSnapshotVersion(P);p.os=p.os.insert(w,M)}}}(r.localStore,o))}async function S_(n,t){const e=Q(n);if(!e.currentUser.isEqual(t)){$("SyncEngine","User change. New user:",t.toKey());const r=await Du(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(u=>{u.forEach(h=>{h.reject(new U(S.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Cr(e,r.hs)}}function V_(n,t){const e=Q(n),r=e.Na.get(t);if(r&&r.va)return Y().add(r.key);{let s=Y();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const u=e.Fa.get(a);s=s.unionWith(u.view.Va)}return s}}function Qu(n){const t=Q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=V_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=b_.bind(null,t),t.Ca.d_=d_.bind(null,t.eventManager),t.Ca.$a=f_.bind(null,t.eventManager),t}function x_(n){const t=Q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=R_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=C_.bind(null,t),t}class ps{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Rs(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return kg(this.persistence,new Dg,t.initialUser,this.serializer)}Ga(t){return new Sg(Zi.Zr,this.serializer)}Wa(t){return new $g}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ps.provider={build:()=>new ps};class Ri{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=S_.bind(null,this.syncEngine),await a_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new u_}()}createDatastore(t){const e=Rs(t.databaseInfo.databaseId),r=function(o){return new Wg(o)}(t.databaseInfo);return function(o,a,u,h){return new Gg(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new Xg(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>pl(this.syncEngine,e,0),function(){return ul.D()?new ul:new jg}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,p){const E=new y_(s,o,a,u,h,d);return p&&(E.Qa=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=Q(s);$("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Rr(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ri.provider={build:()=>new Ri};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):xe("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Yt.UNAUTHENTICATED,this.clientId=Zl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{$("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>($("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=oo(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ni(n,t){n.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Du(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function gl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await k_(n);$("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>cl(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>cl(t.remoteStore,s)),n._onlineComponents=t}async function k_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await ni(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;wn("Error using user provided cache. Falling back to memory cache: "+e),await ni(n,new ps)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await ni(n,new ps);return n._offlineComponents}async function Xu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await gl(n,n._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await gl(n,new Ri))),n._onlineComponents}function M_(n){return Xu(n).then(t=>t.syncEngine)}async function _l(n){const t=await Xu(n),e=t.eventManager;return e.onListen=v_.bind(null,t.syncEngine),e.onUnlisten=I_.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=E_.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=w_.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(n,t,e){if(!e)throw new U(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function O_(n,t,e,r){if(t===!0&&r===!0)throw new U(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function vl(n){if(!z.isDocumentKey(n))throw new U(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function El(n){if(z.isDocumentKey(n))throw new U(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ss(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":H()}function Tn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new U(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ss(n);throw new U(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new U(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new U(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}O_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new U(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new U(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new U(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Vs{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new U(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tl(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Jp;switch(r.type){case"firstParty":return new nm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=yl.get(e);r&&($("ComponentProvider","Removing Datastore"),yl.delete(e),r.terminate())}(this),Promise.resolve()}}function L_(n,t,e,r={}){var s;const o=(n=Tn(n,Vs))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=Yt.MOCK_USER;else{u=xf(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new U(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Yt(d)}n._authCredentials=new Zp(new Jl(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new cn(this.firestore,t,this._query)}}class oe{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new oe(this.firestore,t,this._key)}}class qe extends cn{constructor(t,e,r){super(t,e,Hi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new oe(this.firestore,null,new z(t))}withConverter(t){return new qe(this.firestore,t,this._path)}}function Il(n,t,...e){if(n=rn(n),Ju("collection","path",t),n instanceof Vs){const r=yt.fromString(t,...e);return El(r),new qe(n,null,r)}{if(!(n instanceof oe||n instanceof qe))throw new U(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(yt.fromString(t,...e));return El(r),new qe(n.firestore,null,r)}}function Zu(n,t,...e){if(n=rn(n),arguments.length===1&&(t=Zl.newId()),Ju("doc","path",t),n instanceof Vs){const r=yt.fromString(t,...e);return vl(r),new oe(n,null,new z(r))}{if(!(n instanceof oe||n instanceof qe))throw new U(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(yt.fromString(t,...e));return vl(r),new oe(n.firestore,n instanceof qe?n.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ku(this,"async_queue_retry"),this.Vu=()=>{const r=ei();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=ei();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=ei();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new nn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!wr(t))throw t;$("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw xe("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=io.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&H()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Al(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Tr extends Vs{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new wl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new wl(t),this._firestoreClient=void 0,await t}}}function F_(n,t){const e=typeof n=="object"?n:Up(),r=typeof n=="string"?n:"(default)",s=Op(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Sf("firestore");o&&L_(s,...o)}return s}function tc(n){if(n._terminated)throw new U(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||B_(n),n._firestoreClient}function B_(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,d,p){return new mm(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Yu(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new N_(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Sn(Wt.fromBase64String(t))}catch(e){throw new U(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Sn(Wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new U(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new U(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new U(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return st(this._lat,t._lat)||st(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=/^__.*__$/;class $_{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ln(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ar(t,this.data,e,this.fieldTransforms)}}function nc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class fo{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new fo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return ms(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(nc(this.Cu)&&U_.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class j_{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Rs(t)}Qu(t,e,r,s=!1){return new fo({Cu:t,methodName:e,qu:r,path:qt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rc(n){const t=n._freezeSettings(),e=Rs(n._databaseId);return new j_(n._databaseId,!!t.ignoreUndefinedProperties,e)}function q_(n,t,e,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);oc("Data must be an object, but it was:",a,r);const u=sc(r,a);let h,d;if(o.merge)h=new ge(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const E of o.mergeFields){const w=W_(t,E,e);if(!a.contains(w))throw new U(S.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);K_(p,w)||p.push(w)}h=new ge(p),d=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,d=a.fieldTransforms;return new $_(new fe(u),h,d)}function z_(n,t,e,r=!1){return po(e,n.Qu(r?4:3,t))}function po(n,t){if(ic(n=rn(n)))return oc("Unsupported field value:",t,n),sc(n,t);if(n instanceof ec)return function(r,s){if(!nc(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=po(u,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=rn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Lm(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Nt.fromDate(r);return{timestampValue:ds(s.serializer,o)}}if(r instanceof Nt){const o=new Nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ds(s.serializer,o)}}if(r instanceof co)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Sn)return{bytesValue:bu(s.serializer,r._byteString)};if(r instanceof oe){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Yi(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ho)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.Bu("VectorValues must only contain numeric values.");return Ki(u.serializer,h)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ss(r)}`)}(n,t)}function sc(n,t){const e={};return tu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Mn(n,(r,s)=>{const o=po(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function ic(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Nt||n instanceof co||n instanceof Sn||n instanceof oe||n instanceof ec||n instanceof ho)}function oc(n,t,e){if(!ic(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Ss(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function W_(n,t,e){if((t=rn(t))instanceof uo)return t._internalPath;if(typeof t=="string")return ac(n,t);throw ms("Field path arguments must be of type string or ",n,!1,void 0,e)}const H_=new RegExp("[~\\*/\\[\\]]");function ac(n,t,e){if(t.search(H_)>=0)throw ms(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new uo(...t.split("."))._internalPath}catch{throw ms(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ms(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new U(S.INVALID_ARGUMENT,u+n+h)}function K_(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new G_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(mo("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class G_ extends lc{data(){return super.data()}}function mo(n,t){return typeof t=="string"?ac(n,t):t instanceof uo?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class go{}class uc extends go{}function X_(n,t,...e){let r=[];t instanceof go&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof yo).length,u=o.filter(h=>h instanceof _o).length;if(a>1||a>0&&u>0)throw new U(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class _o extends uc{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new _o(t,e,r)}_apply(t){const e=this._parse(t);return cc(t._query,e),new cn(t.firestore,t.converter,_i(t._query,e))}_parse(t){const e=rc(t.firestore);return function(o,a,u,h,d,p,E){let w;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new U(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Rl(E,p);const b=[];for(const P of E)b.push(bl(h,o,P));w={arrayValue:{values:b}}}else w=bl(h,o,E)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Rl(E,p),w=z_(u,a,E,p==="in"||p==="not-in");return Dt.create(d,p,w)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class yo extends go{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new yo(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:_e.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)cc(a,h),a=_i(a,h)}(t._query,e),new cn(t.firestore,t.converter,_i(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vo extends uc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new vo(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new U(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new U(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new yr(o,a)}(t._query,this._field,this._direction);return new cn(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new On(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Y_(n,t="asc"){const e=t,r=mo("orderBy",n);return vo._create(r,e)}function bl(n,t,e){if(typeof(e=rn(e))=="string"){if(e==="")throw new U(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uu(t)&&e.indexOf("/")!==-1)throw new U(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(yt.fromString(e));if(!z.isDocumentKey(r))throw new U(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return za(n,new z(r))}if(e instanceof oe)return za(n,e._key);throw new U(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ss(e)}.`)}function Rl(n,t){if(!Array.isArray(n)||n.length===0)throw new U(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function cc(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new U(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new U(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class J_{convertValue(t,e="none"){switch(an(t)){case 0:return null;case 1:return t.booleanValue;case 2:return St(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(on(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw H()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Mn(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>St(a.doubleValue));return new ho(o)}convertGeoPoint(t){return new co(St(t.latitude),St(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ji(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(mr(t));default:return null}}convertTimestamp(t){const e=We(t);return new Nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=yt.fromString(t);ut(xu(r));const s=new gr(r.get(1),r.get(3)),o=new z(r.popFirst(5));return s.isEqual(e)||xe(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hc extends lc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ts(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(mo("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class ts extends hc{data(t={}){return super.data(t)}}class ty{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new ir(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new ts(this._firestore,this._userDataWriter,r.key,r,new ir(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new U(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new ts(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ir(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new ts(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ir(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:ey(u.type),doc:h,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ey(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class dc extends J_{constructor(t){super(),this.firestore=t}convertBytes(t){return new Sn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new oe(this.firestore,null,e)}}function ny(n){return fc(Tn(n.firestore,Tr),[new Gi(n._key,Ee.none())])}function ry(n,t){const e=Tn(n.firestore,Tr),r=Zu(n),s=Z_(n.converter,t);return fc(e,[q_(rc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ee.exists(!1))]).then(()=>r)}function sy(n,...t){var e,r,s;n=rn(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Al(t[a])||(o=t[a],a++);const u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Al(t[a])){const E=t[a];t[a]=(e=E.next)===null||e===void 0?void 0:e.bind(E),t[a+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),t[a+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let h,d,p;if(n instanceof oe)d=Tn(n.firestore,Tr),p=Hi(n._key.path),h={next:E=>{t[a]&&t[a](iy(d,n,E))},error:t[a+1],complete:t[a+2]};else{const E=Tn(n,cn);d=Tn(E.firestore,Tr),p=E._query;const w=new dc(d);h={next:b=>{t[a]&&t[a](new ty(d,w,E,b))},error:t[a+1],complete:t[a+2]},Q_(n._query)}return function(w,b,P,M){const C=new D_(M),O=new p_(b,C,P);return w.asyncQueue.enqueueAndForget(async()=>c_(await _l(w),O)),()=>{C.Za(),w.asyncQueue.enqueueAndForget(async()=>h_(await _l(w),O))}}(tc(d),p,u,h)}function fc(n,t){return function(r,s){const o=new nn;return r.asyncQueue.enqueueAndForget(async()=>A_(await M_(r),s,o)),o.promise}(tc(n),t)}function iy(n,t,e){const r=e.docs.get(t._key),s=new dc(n);return new hc(n,s,t._key,r,new ir(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){kn=s})(Bp),as(new dr("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Tr(new tm(r.getProvider("auth-internal")),new sm(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new U(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gr(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),vn(Ba,"4.7.3",t),vn(Ba,"4.7.3","esm2017")})();const oy={apiKey:"AIzaSyCA0izdqP7303cYmdsYHgHGTQrI8q0qKvs",authDomain:"seongyeol-seora-wedding-card.firebaseapp.com",projectId:"seongyeol-seora-wedding-card",storageBucket:"seongyeol-seora-wedding-card.appspot.com",messagingSenderId:"158398620563",appId:"1:158398620563:web:ce0cee214f98bdd198fe66",measurementId:"G-4WSG1RLK58"},ay=ql(oy),ri=F_(ay);var Eo={},ly=Pi;Object.defineProperty(Eo,"__esModule",{value:!0});var pc=Eo.default=void 0,uy=ly(Si()),cy=q;pc=Eo.default=(0,uy.default)((0,cy.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");var To={},hy=Pi;Object.defineProperty(To,"__esModule",{value:!0});var mc=To.default=void 0,dy=hy(Si()),fy=q;mc=To.default=(0,dy.default)((0,fy.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"}),"Phone");var Io={},py=Pi;Object.defineProperty(Io,"__esModule",{value:!0});var gc=Io.default=void 0,my=py(Si()),gy=q;gc=Io.default=(0,my.default)((0,gy.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email");const mn=({className:n,title:t,pNum:e,address:r})=>ie("div",{className:n,css:Se.userInfoWrapper,children:[J("span",{children:t}),ie("div",{children:[J(si,{className:"phone",LinkComponent:"a",href:`tel:${e}`,children:J(mc,{})}),J(si,{className:"sms",LinkComponent:"a",href:`sms:${e}`,children:J(gc,{})})]}),J($c,{css:Se.address,text:r,address:!0})]}),Py=()=>{const[n,t]=N.useState([]),[e,r]=N.useState(""),[s,o]=N.useState(""),[a,u]=N.useState(""),[h,d]=N.useState(""),[p,E]=N.useState(),[w,b]=N.useState(""),[P,M]=N.useState(),[C,O]=N.useState(!1),[F,k]=N.useState(""),x=async y=>{y.preventDefault(),!(!s||!e)&&(await ry(Il(ri,"comments"),{username:e,content:s,password:a,createdAt:new Date,ipAddress:h}),o(""),r(""),u(""))},j=async y=>{y.preventDefault(),p&&(w===P||w==="성열"?(await ny(Zu(ri,"comments",p)),k("축사가 삭제되었습니다.")):k("비밀번호가 틀렸습니다."),O(!0),E(void 0),b(""))},B=(y,m)=>{m!=="clickaway"&&O(!1)};return N.useEffect(()=>{const y=X_(Il(ri,"comments"),Y_("createdAt","desc")),m=sy(y,_=>{const v=_.docs.map(T=>({id:T.id,...T.data()}));t(v)});return fetch("https://geolocation-db.com/json/").then(_=>_.json()).then(_=>{d(_.IPv4)}).catch(_=>console.log(_)),()=>m()},[]),ie("div",{className:"pages wishes",css:Se.wrapper,children:[ie("div",{css:Se.wishesWrapper,children:[J("span",{className:"wishes-wrapper-header",children:"마음 전하실 곳"}),ie("div",{className:"character-wrapper",children:[J(mn,{className:"broom",title:"신랑에게 연락하기",pNum:"010-3527-2726",address:"745015-52-212191 농협"}),J(mn,{className:"bride",title:"신부에게 연락하기",pNum:"010-5717-9605",address:"100017864980 토스뱅크"})]}),J("span",{className:"wishes-wrapper-header2",children:"혼주에게 연락하기"}),ie("div",{className:"parents-wrapper",children:[J("span",{className:"broom title",children:"신랑측 혼주"}),J(mn,{className:"broom",title:"아버지 황홍석",pNum:"010-5034-2726",address:"780-01-022817 농협"}),J(mn,{className:"broom",title:"어머니 윤영희",pNum:"010-6242-2726",address:"745010-52-104095 농협"}),J("span",{className:"bride title",children:" 신부측 혼주"}),J(mn,{className:"bride",title:"아버지 이칠성",pNum:"010-5414-9605",address:"504-21-0711-139 국민"}),J(mn,{className:"bride",title:"어머니 탁은정",pNum:"010-4142-9605",address:"533-12-125477 농협"})]})]}),ie("div",{css:Se.commentsWrapper,children:[ie("form",{onSubmit:x,css:Se.editComment,children:[J("div",{className:"edit-comment-header",children:J("span",{children:"축사를 남겨주세요!"})}),J(Wr,{className:"edit-comment-nickName",hiddenLabel:!0,type:"text",variant:"outlined",size:"small",fullWidth:!0,value:e,onChange:y=>r(y.target.value),placeholder:"이름",inputProps:{maxLength:10,autocomplete:"off"}}),J(Wr,{className:"edit-comment-password",hiddenLabel:!0,type:"password",variant:"outlined",size:"small",fullWidth:!0,value:a,onChange:y=>u(y.target.value),placeholder:"비밀번호",inputProps:{maxLength:15,autocomplete:"off"}}),J(Wr,{className:"edit-comment-content",variant:"outlined",hiddenLabel:!0,multiline:!0,maxRows:3,rows:3,value:s,onChange:y=>o(y.target.value),placeholder:"축하 메세지",inputProps:{maxLength:300,autocomplete:"off"}}),J("div",{className:"edit-comment-actions",children:J(pa,{css:Se.submitButton,type:"submit",variant:"contained",color:"secondary",fullWidth:!0,disableElevation:!0,children:"축하메세지 남기기"})})]}),ie("span",{className:"comments-header",children:["전체 축사",J("span",{children:` ${n.length}`}),"개"]}),J("div",{className:"comments-body",children:n.map(y=>{var v;const m=T=>{if(T===void 0)return"undefiend";const I=String(T.getFullYear()).padStart(2,"0"),g=String(T.getMonth()+1).padStart(2,"0"),X=String(T.getDate()).padStart(2,"0"),at=String(T.getHours()).padStart(2,"0"),Vt=String(T.getMinutes()).padStart(2,"0"),dt=String(T.getSeconds()).padStart(2,"0");return`${I}.${g}.${X} ${at}:${Vt}:${dt}`},_=()=>{E(y.id),M(y.password)};return ie(Sl,{className:"comment",elevation:1,css:Se.paper,children:[ie("span",{className:"comment-username",children:[`${y.username}`,J(si,{className:"comment-delete",size:"small",onClick:_,children:J(pc,{fontSize:"inherit"})})]}),J("span",{className:"comment-content",children:y.content}),J("span",{className:"comment-date",children:m((v=y.createdAt)==null?void 0:v.toDate())})]},y.id)})})]}),ie(eh,{open:!!p,css:Se.deleteDialog,children:[J(Fh,{children:"축사 삭제"}),ie("form",{onSubmit:j,children:[J(kh,{children:J(Wr,{autoFocus:!0,value:w,onChange:y=>b(y.target.value),size:"small",placeholder:"비밀번호",inputProps:{maxLength:15,autocomplete:"off"}})}),J(Ch,{children:J(pa,{type:"submit",children:"확인"})})]})]}),J(Uc,{anchorOrigin:{horizontal:"center",vertical:"bottom"},open:C,autoHideDuration:500,onClose:B,message:F})]})};export{Py as default};
