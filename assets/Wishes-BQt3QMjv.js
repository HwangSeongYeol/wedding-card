import{j as P,G as xh,r as _,e as Dh,c as ne,a as Qt,b as j}from"./index-DrtZs3BX.js";import{B as da,I as yi,S as Vh,C as Nh}from"./CopyIconButton-qAcP80CF.js";import{d as Ml,c as kh,e as Js,G as Mh,a as fa,r as Xi,i as Yi}from"./createSvgIcon-CK1rWeNG.js";import{j as Oh,a as nt,_ as m,b as bt,g as Ct,c as Gt,k as Lh,d as At,T as Fh,l as Ol,m as Ji}from"./createTheme-DJt36Tt4.js";import{a as xn,e as Zr,b as ts,s as q,u as Ft,c as St,k as Bh,l as vi,r as Ae,o as ir,P as Ll,d as es,f as $h,m as Uh,h as Fl}from"./utils-e4sgBSk2.js";import"./react-is.production.min-DUDD-a5e.js";import{a as jh,g as qh,M as zh,D as Wh}from"./Dialog-lBKM6ao_.js";import"./Fade-DT_XpI1C.js";function Hh(e){return e==null||Object.keys(e).length===0}function Kh(e){const{styles:t,defaultTheme:n={}}=e,r=typeof t=="function"?s=>t(Hh(s)?n:s):t;return P.jsx(xh,{styles:r})}function Gh({styles:e,themeId:t,defaultTheme:n={}}){const r=Oh(n),s=typeof e=="function"?e(t&&r[t]||r):e;return P.jsx(Kh,{styles:s})}const Qh=["onChange","maxRows","minRows","style","value"];function Br(e){return parseInt(e,10)||0}const Xh={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function pa(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Yh=_.forwardRef(function(t,n){const{onChange:r,maxRows:s,minRows:i=1,style:o,value:a}=t,l=nt(t,Qh),{current:c}=_.useRef(a!=null),u=_.useRef(null),h=xn(n,u),d=_.useRef(null),f=_.useRef(0),[E,w]=_.useState({outerHeightStyle:0}),y=_.useCallback(()=>{const v=u.current,x=Zr(v).getComputedStyle(v);if(x.width==="0px")return{outerHeightStyle:0};const T=d.current;T.style.width=x.width,T.value=v.value||t.placeholder||"x",T.value.slice(-1)===`
`&&(T.value+=" ");const F=x.boxSizing,B=Br(x.paddingBottom)+Br(x.paddingTop),z=Br(x.borderBottomWidth)+Br(x.borderTopWidth),W=T.scrollHeight;T.value="x";const X=T.scrollHeight;let $=W;i&&($=Math.max(Number(i)*X,$)),s&&($=Math.min(Number(s)*X,$)),$=Math.max($,X);const G=$+(F==="border-box"?B+z:0),tt=Math.abs($-W)<=1;return{outerHeightStyle:G,overflow:tt}},[s,i,t.placeholder]),I=(v,V)=>{const{outerHeightStyle:x,overflow:T}=V;return f.current<20&&(x>0&&Math.abs((v.outerHeightStyle||0)-x)>1||v.overflow!==T)?(f.current+=1,{overflow:T,outerHeightStyle:x}):v},S=_.useCallback(()=>{const v=y();pa(v)||w(V=>I(V,v))},[y]);ts(()=>{const v=()=>{const W=y();pa(W)||Dh.flushSync(()=>{w(X=>I(X,W))})},V=()=>{f.current=0,v()};let x;const T=Ml(V),F=u.current,B=Zr(F);B.addEventListener("resize",T);let z;return typeof ResizeObserver<"u"&&(z=new ResizeObserver(V),z.observe(F)),()=>{T.clear(),cancelAnimationFrame(x),B.removeEventListener("resize",T),z&&z.disconnect()}},[y]),ts(()=>{S()}),_.useEffect(()=>{f.current=0},[a]);const b=v=>{f.current=0,c||S(),r&&r(v)};return P.jsxs(_.Fragment,{children:[P.jsx("textarea",m({value:a,onChange:b,ref:h,rows:i,style:m({height:E.outerHeightStyle,overflow:E.overflow?"hidden":void 0},o)},l)),P.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:d,tabIndex:-1,style:m({},Xh.shadow,o,{paddingTop:0,paddingBottom:0})})]})});function Jh(e){return bt("MuiTypography",e)}Ct("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Zh=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],td=e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:s,variant:i,classes:o}=e,a={root:["root",i,e.align!=="inherit"&&`align${Gt(t)}`,n&&"gutterBottom",r&&"noWrap",s&&"paragraph"]};return St(a,Jh,o)},ed=q("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${Gt(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>m({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),ma={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},nd={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},rd=e=>nd[e]||e,sd=_.forwardRef(function(t,n){const r=Ft({props:t,name:"MuiTypography"}),s=rd(r.color),i=Lh(m({},r,{color:s})),{align:o="inherit",className:a,component:l,gutterBottom:c=!1,noWrap:u=!1,paragraph:h=!1,variant:d="body1",variantMapping:f=ma}=i,E=nt(i,Zh),w=m({},i,{align:o,color:s,className:a,component:l,gutterBottom:c,noWrap:u,paragraph:h,variant:d,variantMapping:f}),y=l||(h?"p":f[d]||ma[d])||"span",I=td(w);return P.jsx(ed,m({as:y,ref:n,ownerState:w,className:At(I.root,a)},E))}),id=sd;function Dn({props:e,states:t,muiFormControl:n}){return t.reduce((r,s)=>(r[s]=e[s],n&&typeof e[s]>"u"&&(r[s]=n[s]),r),{})}const od=_.createContext(void 0),Zi=od;function Vn(){return _.useContext(Zi)}function ad(e){return P.jsx(Gh,m({},e,{defaultTheme:Bh,themeId:Fh}))}function ga(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function ns(e,t=!1){return e&&(ga(e.value)&&e.value!==""||t&&ga(e.defaultValue)&&e.defaultValue!=="")}function ld(e){return e.startAdornment}function cd(e){return bt("MuiInputBase",e)}const ud=Ct("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),Tn=ud,hd=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],Es=(e,t)=>{const{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,n.size==="small"&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${Gt(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},Ts=(e,t)=>{const{ownerState:n}=e;return[t.input,n.size==="small"&&t.inputSizeSmall,n.multiline&&t.inputMultiline,n.type==="search"&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},dd=e=>{const{classes:t,color:n,disabled:r,error:s,endAdornment:i,focused:o,formControl:a,fullWidth:l,hiddenLabel:c,multiline:u,readOnly:h,size:d,startAdornment:f,type:E}=e,w={root:["root",`color${Gt(n)}`,r&&"disabled",s&&"error",l&&"fullWidth",o&&"focused",a&&"formControl",d&&d!=="medium"&&`size${Gt(d)}`,u&&"multiline",f&&"adornedStart",i&&"adornedEnd",c&&"hiddenLabel",h&&"readOnly"],input:["input",r&&"disabled",E==="search"&&"inputTypeSearch",u&&"inputMultiline",d==="small"&&"inputSizeSmall",c&&"inputHiddenLabel",f&&"inputAdornedStart",i&&"inputAdornedEnd",h&&"readOnly"]};return St(w,cd,t)},Is=q("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Es})(({theme:e,ownerState:t})=>m({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${Tn.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&m({padding:"4px 0 5px"},t.size==="small"&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),ws=q("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Ts})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light",r=m({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),s={opacity:"0 !important"},i=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return m({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${Tn.formControl} &`]:{"&::-webkit-input-placeholder":s,"&::-moz-placeholder":s,"&:-ms-input-placeholder":s,"&::-ms-input-placeholder":s,"&:focus::-webkit-input-placeholder":i,"&:focus::-moz-placeholder":i,"&:focus:-ms-input-placeholder":i,"&:focus::-ms-input-placeholder":i},[`&.${Tn.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},t.size==="small"&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},t.type==="search"&&{MozAppearance:"textfield"})}),fd=P.jsx(ad,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),pd=_.forwardRef(function(t,n){var r;const s=Ft({props:t,name:"MuiInputBase"}),{"aria-describedby":i,autoComplete:o,autoFocus:a,className:l,components:c={},componentsProps:u={},defaultValue:h,disabled:d,disableInjectingGlobalStyles:f,endAdornment:E,fullWidth:w=!1,id:y,inputComponent:I="input",inputProps:S={},inputRef:b,maxRows:v,minRows:V,multiline:x=!1,name:T,onBlur:F,onChange:B,onClick:z,onFocus:W,onKeyDown:X,onKeyUp:$,placeholder:G,readOnly:tt,renderSuffix:Tt,rows:It,slotProps:Y={},slots:at={},startAdornment:xt,type:oe="text",value:Bt}=s,Dt=nt(s,hd),dt=S.value!=null?S.value:Bt,{current:Jt}=_.useRef(dt!=null),Ht=_.useRef(),ye=_.useCallback(lt=>{},[]),ae=xn(Ht,b,S.ref,ye),[Fe,Re]=_.useState(!1),et=Vn(),_t=Dn({props:s,muiFormControl:et,states:["color","disabled","error","hiddenLabel","size","required","filled"]});_t.focused=et?et.focused:Fe,_.useEffect(()=>{!et&&d&&Fe&&(Re(!1),F&&F())},[et,d,Fe,F]);const Z=et&&et.onFilled,ft=et&&et.onEmpty,ut=_.useCallback(lt=>{ns(lt)?Z&&Z():ft&&ft()},[Z,ft]);ts(()=>{Jt&&ut({value:dt})},[dt,ut,Jt]);const sn=lt=>{if(_t.disabled){lt.stopPropagation();return}W&&W(lt),S.onFocus&&S.onFocus(lt),et&&et.onFocus?et.onFocus(lt):Re(!0)},le=lt=>{F&&F(lt),S.onBlur&&S.onBlur(lt),et&&et.onBlur?et.onBlur(lt):Re(!1)},ce=(lt,...$e)=>{if(!Jt){const ln=lt.target||Ht.current;if(ln==null)throw new Error(Ol(1));ut({value:ln.value})}S.onChange&&S.onChange(lt,...$e),B&&B(lt,...$e)};_.useEffect(()=>{ut(Ht.current)},[]);const ve=lt=>{Ht.current&&lt.currentTarget===lt.target&&Ht.current.focus(),z&&z(lt)};let be=I,yt=S;x&&be==="input"&&(It?yt=m({type:void 0,minRows:It,maxRows:It},yt):yt=m({type:void 0,maxRows:v,minRows:V},yt),be=Yh);const Be=lt=>{ut(lt.animationName==="mui-auto-fill-cancel"?Ht.current:{value:"x"})};_.useEffect(()=>{et&&et.setAdornedStart(!!xt)},[et,xt]);const Zt=m({},s,{color:_t.color||"primary",disabled:_t.disabled,endAdornment:E,error:_t.error,focused:_t.focused,formControl:et,fullWidth:w,hiddenLabel:_t.hiddenLabel,multiline:x,size:_t.size,startAdornment:xt,type:oe}),vt=dd(Zt),Fr=at.root||c.Root||Is,on=Y.root||u.root||{},an=at.input||c.Input||ws;return yt=m({},yt,(r=Y.input)!=null?r:u.input),P.jsxs(_.Fragment,{children:[!f&&fd,P.jsxs(Fr,m({},on,!vi(Fr)&&{ownerState:m({},Zt,on.ownerState)},{ref:n,onClick:ve},Dt,{className:At(vt.root,on.className,l,tt&&"MuiInputBase-readOnly"),children:[xt,P.jsx(Zi.Provider,{value:null,children:P.jsx(an,m({ownerState:Zt,"aria-invalid":_t.error,"aria-describedby":i,autoComplete:o,autoFocus:a,defaultValue:h,disabled:_t.disabled,id:y,onAnimationStart:Be,name:T,placeholder:G,readOnly:tt,required:_t.required,rows:It,value:dt,onKeyDown:X,onKeyUp:$,type:oe},yt,!vi(an)&&{as:be,ownerState:m({},Zt,yt.ownerState)},{ref:ae,className:At(vt.input,yt.className,tt&&"MuiInputBase-readOnly"),onBlur:le,onChange:ce,onFocus:sn}))}),E,Tt?Tt(m({},_t,{startAdornment:xt})):null]}))]})}),to=pd;function md(e){return bt("MuiInput",e)}const gd=m({},Tn,Ct("MuiInput",["root","underline","input"])),Un=gd;function _d(e){return bt("MuiOutlinedInput",e)}const yd=m({},Tn,Ct("MuiOutlinedInput",["root","notchedOutline","input"])),Ce=yd;function vd(e){return bt("MuiFilledInput",e)}const Ed=m({},Tn,Ct("MuiFilledInput",["root","underline","input"])),Ue=Ed,Td=kh(P.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown");function Id(e){return bt("MuiDialogActions",e)}Ct("MuiDialogActions",["root","spacing"]);const wd=["className","disableSpacing"],Ad=e=>{const{classes:t,disableSpacing:n}=e;return St({root:["root",!n&&"spacing"]},Id,t)},Rd=q("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})(({ownerState:e})=>m({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),bd=_.forwardRef(function(t,n){const r=Ft({props:t,name:"MuiDialogActions"}),{className:s,disableSpacing:i=!1}=r,o=nt(r,wd),a=m({},r,{disableSpacing:i}),l=Ad(a);return P.jsx(Rd,m({className:At(l.root,s),ownerState:a,ref:n},o))}),Cd=bd;function Sd(e){return bt("MuiDialogContent",e)}Ct("MuiDialogContent",["root","dividers"]);function Pd(e){return bt("MuiDialogTitle",e)}const xd=Ct("MuiDialogTitle",["root"]),Dd=xd,Vd=["className","dividers"],Nd=e=>{const{classes:t,dividers:n}=e;return St({root:["root",n&&"dividers"]},Sd,t)},kd=q("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dividers&&t.dividers]}})(({theme:e,ownerState:t})=>m({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${Dd.root} + &`]:{paddingTop:0}})),Md=_.forwardRef(function(t,n){const r=Ft({props:t,name:"MuiDialogContent"}),{className:s,dividers:i=!1}=r,o=nt(r,Vd),a=m({},r,{dividers:i}),l=Nd(a);return P.jsx(kd,m({className:At(l.root,s),ownerState:a,ref:n},o))}),Od=Md,Ld=["className","id"],Fd=e=>{const{classes:t}=e;return St({root:["root"]},Pd,t)},Bd=q(id,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),$d=_.forwardRef(function(t,n){const r=Ft({props:t,name:"MuiDialogTitle"}),{className:s,id:i}=r,o=nt(r,Ld),a=r,l=Fd(a),{titleId:c=i}=_.useContext(jh);return P.jsx(Bd,m({component:"h2",className:At(l.root,s),ownerState:a,ref:n,variant:"h6",id:i??c},o))}),Ud=$d,jd=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],qd=e=>{const{classes:t,disableUnderline:n}=e,s=St({root:["root",!n&&"underline"],input:["input"]},vd,t);return m({},t,s)},zd=q(Is,{shouldForwardProp:e=>Ae(e)||e==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...Es(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{var n;const r=e.palette.mode==="light",s=r?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",i=r?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",o=r?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",a=r?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return m({position:"relative",backgroundColor:e.vars?e.vars.palette.FilledInput.bg:i,borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),"&:hover":{backgroundColor:e.vars?e.vars.palette.FilledInput.hoverBg:o,"@media (hover: none)":{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:i}},[`&.${Ue.focused}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:i},[`&.${Ue.disabled}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.disabledBg:a}},!t.disableUnderline&&{"&::after":{borderBottom:`2px solid ${(n=(e.vars||e).palette[t.color||"primary"])==null?void 0:n.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Ue.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Ue.error}`]:{"&::before, &::after":{borderBottomColor:(e.vars||e).palette.error.main}},"&::before":{borderBottom:`1px solid ${e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`:s}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Ue.disabled}, .${Ue.error}):before`]:{borderBottom:`1px solid ${(e.vars||e).palette.text.primary}`},[`&.${Ue.disabled}:before`]:{borderBottomStyle:"dotted"}},t.startAdornment&&{paddingLeft:12},t.endAdornment&&{paddingRight:12},t.multiline&&m({padding:"25px 12px 8px"},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17},t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9}))}),Wd=q(ws,{name:"MuiFilledInput",slot:"Input",overridesResolver:Ts})(({theme:e,ownerState:t})=>m({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0},t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9},t.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0})),Bl=_.forwardRef(function(t,n){var r,s,i,o;const a=Ft({props:t,name:"MuiFilledInput"}),{components:l={},componentsProps:c,fullWidth:u=!1,inputComponent:h="input",multiline:d=!1,slotProps:f,slots:E={},type:w="text"}=a,y=nt(a,jd),I=m({},a,{fullWidth:u,inputComponent:h,multiline:d,type:w}),S=qd(a),b={root:{ownerState:I},input:{ownerState:I}},v=f??c?Ji(b,f??c):b,V=(r=(s=E.root)!=null?s:l.Root)!=null?r:zd,x=(i=(o=E.input)!=null?o:l.Input)!=null?i:Wd;return P.jsx(to,m({slots:{root:V,input:x},componentsProps:v,fullWidth:u,inputComponent:h,multiline:d,ref:n,type:w},y,{classes:S}))});Bl.muiName="Input";const $l=Bl;function Hd(e){return bt("MuiFormControl",e)}Ct("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const Kd=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],Gd=e=>{const{classes:t,margin:n,fullWidth:r}=e,s={root:["root",n!=="none"&&`margin${Gt(n)}`,r&&"fullWidth"]};return St(s,Hd,t)},Qd=q("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>m({},t.root,t[`margin${Gt(e.margin)}`],e.fullWidth&&t.fullWidth)})(({ownerState:e})=>m({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),Xd=_.forwardRef(function(t,n){const r=Ft({props:t,name:"MuiFormControl"}),{children:s,className:i,color:o="primary",component:a="div",disabled:l=!1,error:c=!1,focused:u,fullWidth:h=!1,hiddenLabel:d=!1,margin:f="none",required:E=!1,size:w="medium",variant:y="outlined"}=r,I=nt(r,Kd),S=m({},r,{color:o,component:a,disabled:l,error:c,fullWidth:h,hiddenLabel:d,margin:f,required:E,size:w,variant:y}),b=Gd(S),[v,V]=_.useState(()=>{let $=!1;return s&&_.Children.forEach(s,G=>{if(!Js(G,["Input","Select"]))return;const tt=Js(G,["Select"])?G.props.input:G;tt&&ld(tt.props)&&($=!0)}),$}),[x,T]=_.useState(()=>{let $=!1;return s&&_.Children.forEach(s,G=>{Js(G,["Input","Select"])&&(ns(G.props,!0)||ns(G.props.inputProps,!0))&&($=!0)}),$}),[F,B]=_.useState(!1);l&&F&&B(!1);const z=u!==void 0&&!l?u:F;let W;const X=_.useMemo(()=>({adornedStart:v,setAdornedStart:V,color:o,disabled:l,error:c,filled:x,focused:z,fullWidth:h,hiddenLabel:d,size:w,onBlur:()=>{B(!1)},onEmpty:()=>{T(!1)},onFilled:()=>{T(!0)},onFocus:()=>{B(!0)},registerEffect:W,required:E,variant:y}),[v,o,l,c,x,z,h,d,W,E,w,y]);return P.jsx(Zi.Provider,{value:X,children:P.jsx(Qd,m({as:a,ownerState:S,className:At(b.root,i),ref:n},I,{children:s}))})}),Yd=Xd;function Jd(e){return bt("MuiFormHelperText",e)}const Zd=Ct("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),_a=Zd;var ya;const tf=["children","className","component","disabled","error","filled","focused","margin","required","variant"],ef=e=>{const{classes:t,contained:n,size:r,disabled:s,error:i,filled:o,focused:a,required:l}=e,c={root:["root",s&&"disabled",i&&"error",r&&`size${Gt(r)}`,n&&"contained",a&&"focused",o&&"filled",l&&"required"]};return St(c,Jd,t)},nf=q("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.size&&t[`size${Gt(n.size)}`],n.contained&&t.contained,n.filled&&t.filled]}})(({theme:e,ownerState:t})=>m({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${_a.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${_a.error}`]:{color:(e.vars||e).palette.error.main}},t.size==="small"&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14})),rf=_.forwardRef(function(t,n){const r=Ft({props:t,name:"MuiFormHelperText"}),{children:s,className:i,component:o="p"}=r,a=nt(r,tf),l=Vn(),c=Dn({props:r,muiFormControl:l,states:["variant","size","disabled","error","filled","focused","required"]}),u=m({},r,{component:o,contained:c.variant==="filled"||c.variant==="outlined",variant:c.variant,size:c.size,disabled:c.disabled,error:c.error,filled:c.filled,focused:c.focused,required:c.required}),h=ef(u);return P.jsx(nf,m({as:o,ownerState:u,className:At(h.root,i),ref:n},a,{children:s===" "?ya||(ya=P.jsx("span",{className:"notranslate",children:"​"})):s}))}),sf=rf;function of(e){return bt("MuiFormLabel",e)}const af=Ct("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),Jn=af,lf=["children","className","color","component","disabled","error","filled","focused","required"],cf=e=>{const{classes:t,color:n,focused:r,disabled:s,error:i,filled:o,required:a}=e,l={root:["root",`color${Gt(n)}`,s&&"disabled",i&&"error",o&&"filled",r&&"focused",a&&"required"],asterisk:["asterisk",i&&"error"]};return St(l,of,t)},uf=q("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},t)=>m({},t.root,e.color==="secondary"&&t.colorSecondary,e.filled&&t.filled)})(({theme:e,ownerState:t})=>m({color:(e.vars||e).palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${Jn.focused}`]:{color:(e.vars||e).palette[t.color].main},[`&.${Jn.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${Jn.error}`]:{color:(e.vars||e).palette.error.main}})),hf=q("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${Jn.error}`]:{color:(e.vars||e).palette.error.main}})),df=_.forwardRef(function(t,n){const r=Ft({props:t,name:"MuiFormLabel"}),{children:s,className:i,component:o="label"}=r,a=nt(r,lf),l=Vn(),c=Dn({props:r,muiFormControl:l,states:["color","required","focused","disabled","error","filled"]}),u=m({},r,{color:c.color||"primary",component:o,disabled:c.disabled,error:c.error,filled:c.filled,focused:c.focused,required:c.required}),h=cf(u);return P.jsxs(uf,m({as:o,ownerState:u,className:At(h.root,i),ref:n},a,{children:[s,c.required&&P.jsxs(hf,{ownerState:u,"aria-hidden":!0,className:h.asterisk,children:[" ","*"]})]}))}),ff=df,pf=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],mf=e=>{const{classes:t,disableUnderline:n}=e,s=St({root:["root",!n&&"underline"],input:["input"]},md,t);return m({},t,s)},gf=q(Is,{shouldForwardProp:e=>Ae(e)||e==="classes",name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...Es(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{let r=e.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return e.vars&&(r=`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),m({position:"relative"},t.formControl&&{"label + &":{marginTop:16}},!t.disableUnderline&&{"&::after":{borderBottom:`2px solid ${(e.vars||e).palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Un.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Un.error}`]:{"&::before, &::after":{borderBottomColor:(e.vars||e).palette.error.main}},"&::before":{borderBottom:`1px solid ${r}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Un.disabled}, .${Un.error}):before`]:{borderBottom:`2px solid ${(e.vars||e).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${r}`}},[`&.${Un.disabled}:before`]:{borderBottomStyle:"dotted"}})}),_f=q(ws,{name:"MuiInput",slot:"Input",overridesResolver:Ts})({}),Ul=_.forwardRef(function(t,n){var r,s,i,o;const a=Ft({props:t,name:"MuiInput"}),{disableUnderline:l,components:c={},componentsProps:u,fullWidth:h=!1,inputComponent:d="input",multiline:f=!1,slotProps:E,slots:w={},type:y="text"}=a,I=nt(a,pf),S=mf(a),v={root:{ownerState:{disableUnderline:l}}},V=E??u?Ji(E??u,v):v,x=(r=(s=w.root)!=null?s:c.Root)!=null?r:gf,T=(i=(o=w.input)!=null?o:c.Input)!=null?i:_f;return P.jsx(to,m({slots:{root:x,input:T},slotProps:V,fullWidth:h,inputComponent:d,multiline:f,ref:n,type:y},I,{classes:S}))});Ul.muiName="Input";const jl=Ul;function yf(e){return bt("MuiInputLabel",e)}Ct("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const vf=["disableAnimation","margin","shrink","variant","className"],Ef=e=>{const{classes:t,formControl:n,size:r,shrink:s,disableAnimation:i,variant:o,required:a}=e,l={root:["root",n&&"formControl",!i&&"animated",s&&"shrink",r&&r!=="normal"&&`size${Gt(r)}`,o],asterisk:[a&&"asterisk"]},c=St(l,yf,t);return m({},t,c)},Tf=q(ff,{shouldForwardProp:e=>Ae(e)||e==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${Jn.asterisk}`]:t.asterisk},t.root,n.formControl&&t.formControl,n.size==="small"&&t.sizeSmall,n.shrink&&t.shrink,!n.disableAnimation&&t.animated,n.focused&&t.focused,t[n.variant]]}})(({theme:e,ownerState:t})=>m({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},t.size==="small"&&{transform:"translate(0, 17px) scale(1)"},t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!t.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},t.variant==="filled"&&m({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},t.shrink&&m({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},t.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),t.variant==="outlined"&&m({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),If=_.forwardRef(function(t,n){const r=Ft({name:"MuiInputLabel",props:t}),{disableAnimation:s=!1,shrink:i,className:o}=r,a=nt(r,vf),l=Vn();let c=i;typeof c>"u"&&l&&(c=l.filled||l.focused||l.adornedStart);const u=Dn({props:r,muiFormControl:l,states:["size","variant","required","focused"]}),h=m({},r,{disableAnimation:s,formControl:l,shrink:c,size:u.size,variant:u.variant,required:u.required,focused:u.focused}),d=Ef(h);return P.jsx(Tf,m({"data-shrink":c,ownerState:h,ref:n,className:At(d.root,o)},a,{classes:d}))}),wf=If,Af=_.createContext({}),Rf=Af;function bf(e){return bt("MuiList",e)}Ct("MuiList",["root","padding","dense","subheader"]);const Cf=["children","className","component","dense","disablePadding","subheader"],Sf=e=>{const{classes:t,disablePadding:n,dense:r,subheader:s}=e;return St({root:["root",!n&&"padding",r&&"dense",s&&"subheader"]},bf,t)},Pf=q("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>m({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),xf=_.forwardRef(function(t,n){const r=Ft({props:t,name:"MuiList"}),{children:s,className:i,component:o="ul",dense:a=!1,disablePadding:l=!1,subheader:c}=r,u=nt(r,Cf),h=_.useMemo(()=>({dense:a}),[a]),d=m({},r,{component:o,dense:a,disablePadding:l}),f=Sf(d);return P.jsx(Rf.Provider,{value:h,children:P.jsxs(Pf,m({as:o,className:At(f.root,i),ref:n,ownerState:d},u,{children:[c,s]}))})}),Df=xf,Vf=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Zs(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function va(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function ql(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function jn(e,t,n,r,s,i){let o=!1,a=s(e,t,t?n:!1);for(;a;){if(a===e.firstChild){if(o)return!1;o=!0}const l=r?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!ql(a,i)||l)a=s(e,a,n);else return a.focus(),!0}return!1}const Nf=_.forwardRef(function(t,n){const{actions:r,autoFocus:s=!1,autoFocusItem:i=!1,children:o,className:a,disabledItemsFocusable:l=!1,disableListWrap:c=!1,onKeyDown:u,variant:h="selectedMenu"}=t,d=nt(t,Vf),f=_.useRef(null),E=_.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});ts(()=>{s&&f.current.focus()},[s]),_.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(b,v)=>{const V=!f.current.style.width;if(b.clientHeight<f.current.clientHeight&&V){const x=`${qh(ir(b))}px`;f.current.style[v.direction==="rtl"?"paddingLeft":"paddingRight"]=x,f.current.style.width=`calc(100% + ${x})`}return f.current}}),[]);const w=b=>{const v=f.current,V=b.key,x=ir(v).activeElement;if(V==="ArrowDown")b.preventDefault(),jn(v,x,c,l,Zs);else if(V==="ArrowUp")b.preventDefault(),jn(v,x,c,l,va);else if(V==="Home")b.preventDefault(),jn(v,null,c,l,Zs);else if(V==="End")b.preventDefault(),jn(v,null,c,l,va);else if(V.length===1){const T=E.current,F=V.toLowerCase(),B=performance.now();T.keys.length>0&&(B-T.lastTime>500?(T.keys=[],T.repeating=!0,T.previousKeyMatched=!0):T.repeating&&F!==T.keys[0]&&(T.repeating=!1)),T.lastTime=B,T.keys.push(F);const z=x&&!T.repeating&&ql(x,T);T.previousKeyMatched&&(z||jn(v,x,!1,l,Zs,T))?b.preventDefault():T.previousKeyMatched=!1}u&&u(b)},y=xn(f,n);let I=-1;_.Children.forEach(o,(b,v)=>{if(!_.isValidElement(b)){I===v&&(I+=1,I>=o.length&&(I=-1));return}b.props.disabled||(h==="selectedMenu"&&b.props.selected||I===-1)&&(I=v),I===v&&(b.props.disabled||b.props.muiSkipListHighlight||b.type.muiSkipListHighlight)&&(I+=1,I>=o.length&&(I=-1))});const S=_.Children.map(o,(b,v)=>{if(v===I){const V={};return i&&(V.autoFocus=!0),b.props.tabIndex===void 0&&h==="selectedMenu"&&(V.tabIndex=0),_.cloneElement(b,V)}return b});return P.jsx(Df,m({role:"menu",ref:y,className:a,onKeyDown:w,tabIndex:s?0:-1},d,{children:S}))}),kf=Nf;function Mf(e){return bt("MuiPopover",e)}Ct("MuiPopover",["root","paper"]);const Of=["onEntering"],Lf=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Ff=["slotProps"];function Ea(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Ta(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Ia(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function ti(e){return typeof e=="function"?e():e}const Bf=e=>{const{classes:t}=e;return St({root:["root"],paper:["paper"]},Mf,t)},$f=q(zh,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),zl=q(Ll,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Uf=_.forwardRef(function(t,n){var r,s,i;const o=Ft({props:t,name:"MuiPopover"}),{action:a,anchorEl:l,anchorOrigin:c={vertical:"top",horizontal:"left"},anchorPosition:u,anchorReference:h="anchorEl",children:d,className:f,container:E,elevation:w=8,marginThreshold:y=16,open:I,PaperProps:S={},slots:b,slotProps:v,transformOrigin:V={vertical:"top",horizontal:"left"},TransitionComponent:x=Mh,transitionDuration:T="auto",TransitionProps:{onEntering:F}={},disableScrollLock:B=!1}=o,z=nt(o.TransitionProps,Of),W=nt(o,Lf),X=(r=v==null?void 0:v.paper)!=null?r:S,$=_.useRef(),G=xn($,X.ref),tt=m({},o,{anchorOrigin:c,anchorReference:h,elevation:w,marginThreshold:y,externalPaperSlotProps:X,transformOrigin:V,TransitionComponent:x,transitionDuration:T,TransitionProps:z}),Tt=Bf(tt),It=_.useCallback(()=>{if(h==="anchorPosition")return u;const Z=ti(l),ut=(Z&&Z.nodeType===1?Z:ir($.current).body).getBoundingClientRect();return{top:ut.top+Ea(ut,c.vertical),left:ut.left+Ta(ut,c.horizontal)}},[l,c.horizontal,c.vertical,u,h]),Y=_.useCallback(Z=>({vertical:Ea(Z,V.vertical),horizontal:Ta(Z,V.horizontal)}),[V.horizontal,V.vertical]),at=_.useCallback(Z=>{const ft={width:Z.offsetWidth,height:Z.offsetHeight},ut=Y(ft);if(h==="none")return{top:null,left:null,transformOrigin:Ia(ut)};const sn=It();let le=sn.top-ut.vertical,ce=sn.left-ut.horizontal;const ve=le+ft.height,be=ce+ft.width,yt=Zr(ti(l)),Be=yt.innerHeight-y,Zt=yt.innerWidth-y;if(y!==null&&le<y){const vt=le-y;le-=vt,ut.vertical+=vt}else if(y!==null&&ve>Be){const vt=ve-Be;le-=vt,ut.vertical+=vt}if(y!==null&&ce<y){const vt=ce-y;ce-=vt,ut.horizontal+=vt}else if(be>Zt){const vt=be-Zt;ce-=vt,ut.horizontal+=vt}return{top:`${Math.round(le)}px`,left:`${Math.round(ce)}px`,transformOrigin:Ia(ut)}},[l,h,It,Y,y]),[xt,oe]=_.useState(I),Bt=_.useCallback(()=>{const Z=$.current;if(!Z)return;const ft=at(Z);ft.top!==null&&(Z.style.top=ft.top),ft.left!==null&&(Z.style.left=ft.left),Z.style.transformOrigin=ft.transformOrigin,oe(!0)},[at]);_.useEffect(()=>(B&&window.addEventListener("scroll",Bt),()=>window.removeEventListener("scroll",Bt)),[l,B,Bt]);const Dt=(Z,ft)=>{F&&F(Z,ft),Bt()},dt=()=>{oe(!1)};_.useEffect(()=>{I&&Bt()}),_.useImperativeHandle(a,()=>I?{updatePosition:()=>{Bt()}}:null,[I,Bt]),_.useEffect(()=>{if(!I)return;const Z=Ml(()=>{Bt()}),ft=Zr(l);return ft.addEventListener("resize",Z),()=>{Z.clear(),ft.removeEventListener("resize",Z)}},[l,I,Bt]);let Jt=T;T==="auto"&&!x.muiSupportAuto&&(Jt=void 0);const Ht=E||(l?ir(ti(l)).body:void 0),ye=(s=b==null?void 0:b.root)!=null?s:$f,ae=(i=b==null?void 0:b.paper)!=null?i:zl,Fe=es({elementType:ae,externalSlotProps:m({},X,{style:xt?X.style:m({},X.style,{opacity:0})}),additionalProps:{elevation:w,ref:G},ownerState:tt,className:At(Tt.paper,X==null?void 0:X.className)}),Re=es({elementType:ye,externalSlotProps:(v==null?void 0:v.root)||{},externalForwardedProps:W,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:Ht,open:I},ownerState:tt,className:At(Tt.root,f)}),{slotProps:et}=Re,_t=nt(Re,Ff);return P.jsx(ye,m({},_t,!vi(ye)&&{slotProps:et,disableScrollLock:B},{children:P.jsx(x,m({appear:!0,in:I,onEntering:Dt,onExited:dt,timeout:Jt},z,{children:P.jsx(ae,m({},Fe,{children:d}))}))}))}),jf=Uf;function qf(e){return bt("MuiMenu",e)}Ct("MuiMenu",["root","paper","list"]);const zf=["onEntering"],Wf=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],Hf={vertical:"top",horizontal:"right"},Kf={vertical:"top",horizontal:"left"},Gf=e=>{const{classes:t}=e;return St({root:["root"],paper:["paper"],list:["list"]},qf,t)},Qf=q(jf,{shouldForwardProp:e=>Ae(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Xf=q(zl,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Yf=q(kf,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),Jf=_.forwardRef(function(t,n){var r,s;const i=Ft({props:t,name:"MuiMenu"}),{autoFocus:o=!0,children:a,className:l,disableAutoFocusItem:c=!1,MenuListProps:u={},onClose:h,open:d,PaperProps:f={},PopoverClasses:E,transitionDuration:w="auto",TransitionProps:{onEntering:y}={},variant:I="selectedMenu",slots:S={},slotProps:b={}}=i,v=nt(i.TransitionProps,zf),V=nt(i,Wf),x=$h(),T=x.direction==="rtl",F=m({},i,{autoFocus:o,disableAutoFocusItem:c,MenuListProps:u,onEntering:y,PaperProps:f,transitionDuration:w,TransitionProps:v,variant:I}),B=Gf(F),z=o&&!c&&d,W=_.useRef(null),X=(at,xt)=>{W.current&&W.current.adjustStyleForScrollbar(at,x),y&&y(at,xt)},$=at=>{at.key==="Tab"&&(at.preventDefault(),h&&h(at,"tabKeyDown"))};let G=-1;_.Children.map(a,(at,xt)=>{_.isValidElement(at)&&(at.props.disabled||(I==="selectedMenu"&&at.props.selected||G===-1)&&(G=xt))});const tt=(r=S.paper)!=null?r:Xf,Tt=(s=b.paper)!=null?s:f,It=es({elementType:S.root,externalSlotProps:b.root,ownerState:F,className:[B.root,l]}),Y=es({elementType:tt,externalSlotProps:Tt,ownerState:F,className:B.paper});return P.jsx(Qf,m({onClose:h,anchorOrigin:{vertical:"bottom",horizontal:T?"right":"left"},transformOrigin:T?Hf:Kf,slots:{paper:tt,root:S.root},slotProps:{root:It,paper:Y},open:d,ref:n,transitionDuration:w,TransitionProps:m({onEntering:X},v),ownerState:F},V,{classes:E,children:P.jsx(Yf,m({onKeyDown:$,actions:W,autoFocus:o&&(G===-1||c),autoFocusItem:z,variant:I},u,{className:At(B.list,u.className),children:a}))}))}),Zf=Jf;function tp(e){return bt("MuiNativeSelect",e)}const ep=Ct("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),eo=ep,np=["className","disabled","error","IconComponent","inputRef","variant"],rp=e=>{const{classes:t,variant:n,disabled:r,multiple:s,open:i,error:o}=e,a={select:["select",n,r&&"disabled",s&&"multiple",o&&"error"],icon:["icon",`icon${Gt(n)}`,i&&"iconOpen",r&&"disabled"]};return St(a,tp,t)},Wl=({ownerState:e,theme:t})=>m({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":m({},t.vars?{backgroundColor:`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:t.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${eo.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(t.vars||t).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},e.variant==="filled"&&{"&&&":{paddingRight:32}},e.variant==="outlined"&&{borderRadius:(t.vars||t).shape.borderRadius,"&:focus":{borderRadius:(t.vars||t).shape.borderRadius},"&&&":{paddingRight:32}}),sp=q("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:Ae,overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.select,t[n.variant],n.error&&t.error,{[`&.${eo.multiple}`]:t.multiple}]}})(Wl),Hl=({ownerState:e,theme:t})=>m({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(t.vars||t).palette.action.active,[`&.${eo.disabled}`]:{color:(t.vars||t).palette.action.disabled}},e.open&&{transform:"rotate(180deg)"},e.variant==="filled"&&{right:7},e.variant==="outlined"&&{right:7}),ip=q("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${Gt(n.variant)}`],n.open&&t.iconOpen]}})(Hl),op=_.forwardRef(function(t,n){const{className:r,disabled:s,error:i,IconComponent:o,inputRef:a,variant:l="standard"}=t,c=nt(t,np),u=m({},t,{disabled:s,variant:l,error:i}),h=rp(u);return P.jsxs(_.Fragment,{children:[P.jsx(sp,m({ownerState:u,className:At(h.select,r),disabled:s,ref:a||n},c)),t.multiple?null:P.jsx(ip,{as:o,ownerState:u,className:h.icon})]})}),ap=op;var wa;const lp=["children","classes","className","label","notched"],cp=q("fieldset",{shouldForwardProp:Ae})({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),up=q("legend",{shouldForwardProp:Ae})(({ownerState:e,theme:t})=>m({float:"unset",width:"auto",overflow:"hidden"},!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},e.withLabel&&m({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})})));function hp(e){const{className:t,label:n,notched:r}=e,s=nt(e,lp),i=n!=null&&n!=="",o=m({},e,{notched:r,withLabel:i});return P.jsx(cp,m({"aria-hidden":!0,className:t,ownerState:o},s,{children:P.jsx(up,{ownerState:o,children:i?P.jsx("span",{children:n}):wa||(wa=P.jsx("span",{className:"notranslate",children:"​"}))})}))}const dp=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],fp=e=>{const{classes:t}=e,r=St({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},_d,t);return m({},t,r)},pp=q(Is,{shouldForwardProp:e=>Ae(e)||e==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:Es})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return m({position:"relative",borderRadius:(e.vars||e).shape.borderRadius,[`&:hover .${Ce.notchedOutline}`]:{borderColor:(e.vars||e).palette.text.primary},"@media (hover: none)":{[`&:hover .${Ce.notchedOutline}`]:{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:n}},[`&.${Ce.focused} .${Ce.notchedOutline}`]:{borderColor:(e.vars||e).palette[t.color].main,borderWidth:2},[`&.${Ce.error} .${Ce.notchedOutline}`]:{borderColor:(e.vars||e).palette.error.main},[`&.${Ce.disabled} .${Ce.notchedOutline}`]:{borderColor:(e.vars||e).palette.action.disabled}},t.startAdornment&&{paddingLeft:14},t.endAdornment&&{paddingRight:14},t.multiline&&m({padding:"16.5px 14px"},t.size==="small"&&{padding:"8.5px 14px"}))}),mp=q(hp,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})(({theme:e})=>{const t=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:t}}),gp=q(ws,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:Ts})(({theme:e,ownerState:t})=>m({padding:"16.5px 14px"},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{padding:"8.5px 14px"},t.multiline&&{padding:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0})),Kl=_.forwardRef(function(t,n){var r,s,i,o,a;const l=Ft({props:t,name:"MuiOutlinedInput"}),{components:c={},fullWidth:u=!1,inputComponent:h="input",label:d,multiline:f=!1,notched:E,slots:w={},type:y="text"}=l,I=nt(l,dp),S=fp(l),b=Vn(),v=Dn({props:l,muiFormControl:b,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),V=m({},l,{color:v.color||"primary",disabled:v.disabled,error:v.error,focused:v.focused,formControl:b,fullWidth:u,hiddenLabel:v.hiddenLabel,multiline:f,size:v.size,type:y}),x=(r=(s=w.root)!=null?s:c.Root)!=null?r:pp,T=(i=(o=w.input)!=null?o:c.Input)!=null?i:gp;return P.jsx(to,m({slots:{root:x,input:T},renderSuffix:F=>P.jsx(mp,{ownerState:V,className:S.notchedOutline,label:d!=null&&d!==""&&v.required?a||(a=P.jsxs(_.Fragment,{children:[d," ","*"]})):d,notched:typeof E<"u"?E:!!(F.startAdornment||F.filled||F.focused)}),fullWidth:u,inputComponent:h,multiline:f,ref:n,type:y},I,{classes:m({},S,{notchedOutline:null})}))});Kl.muiName="Input";const Gl=Kl;function _p(e){return bt("MuiSelect",e)}const qn=Ct("MuiSelect",["root","select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]);var Aa;const yp=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","error","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],vp=q("div",{name:"MuiSelect",slot:"Select",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`&.${qn.select}`]:t.select},{[`&.${qn.select}`]:t[n.variant]},{[`&.${qn.error}`]:t.error},{[`&.${qn.multiple}`]:t.multiple}]}})(Wl,{[`&.${qn.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),Ep=q("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${Gt(n.variant)}`],n.open&&t.iconOpen]}})(Hl),Tp=q("input",{shouldForwardProp:e=>Uh(e)&&e!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(e,t)=>t.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function Ra(e,t){return typeof t=="object"&&t!==null?e===t:String(e)===String(t)}function Ip(e){return e==null||typeof e=="string"&&!e.trim()}const wp=e=>{const{classes:t,variant:n,disabled:r,multiple:s,open:i,error:o}=e,a={select:["select",n,r&&"disabled",s&&"multiple",o&&"error"],icon:["icon",`icon${Gt(n)}`,i&&"iconOpen",r&&"disabled"],nativeInput:["nativeInput"]};return St(a,_p,t)},Ap=_.forwardRef(function(t,n){var r;const{"aria-describedby":s,"aria-label":i,autoFocus:o,autoWidth:a,children:l,className:c,defaultOpen:u,defaultValue:h,disabled:d,displayEmpty:f,error:E=!1,IconComponent:w,inputRef:y,labelId:I,MenuProps:S={},multiple:b,name:v,onBlur:V,onChange:x,onClose:T,onFocus:F,onOpen:B,open:z,readOnly:W,renderValue:X,SelectDisplayProps:$={},tabIndex:G,value:tt,variant:Tt="standard"}=t,It=nt(t,yp),[Y,at]=fa({controlled:tt,default:h,name:"Select"}),[xt,oe]=fa({controlled:z,default:u,name:"Select"}),Bt=_.useRef(null),Dt=_.useRef(null),[dt,Jt]=_.useState(null),{current:Ht}=_.useRef(z!=null),[ye,ae]=_.useState(),Fe=xn(n,y),Re=_.useCallback(N=>{Dt.current=N,N&&Jt(N)},[]),et=dt==null?void 0:dt.parentNode;_.useImperativeHandle(Fe,()=>({focus:()=>{Dt.current.focus()},node:Bt.current,value:Y}),[Y]),_.useEffect(()=>{u&&xt&&dt&&!Ht&&(ae(a?null:et.clientWidth),Dt.current.focus())},[dt,a]),_.useEffect(()=>{o&&Dt.current.focus()},[o]),_.useEffect(()=>{if(!I)return;const N=ir(Dt.current).getElementById(I);if(N){const st=()=>{getSelection().isCollapsed&&Dt.current.focus()};return N.addEventListener("click",st),()=>{N.removeEventListener("click",st)}}},[I]);const _t=(N,st)=>{N?B&&B(st):T&&T(st),Ht||(ae(a?null:et.clientWidth),oe(N))},Z=N=>{N.button===0&&(N.preventDefault(),Dt.current.focus(),_t(!0,N))},ft=N=>{_t(!1,N)},ut=_.Children.toArray(l),sn=N=>{const st=ut.find(Vt=>Vt.props.value===N.target.value);st!==void 0&&(at(st.props.value),x&&x(N,st))},le=N=>st=>{let Vt;if(st.currentTarget.hasAttribute("tabindex")){if(b){Vt=Array.isArray(Y)?Y.slice():[];const cn=Y.indexOf(N.props.value);cn===-1?Vt.push(N.props.value):Vt.splice(cn,1)}else Vt=N.props.value;if(N.props.onClick&&N.props.onClick(st),Y!==Vt&&(at(Vt),x)){const cn=st.nativeEvent||st,ha=new cn.constructor(cn.type,cn);Object.defineProperty(ha,"target",{writable:!0,value:{value:Vt,name:v}}),x(ha,N)}b||_t(!1,st)}},ce=N=>{W||[" ","ArrowUp","ArrowDown","Enter"].indexOf(N.key)!==-1&&(N.preventDefault(),_t(!0,N))},ve=dt!==null&&xt,be=N=>{!ve&&V&&(Object.defineProperty(N,"target",{writable:!0,value:{value:Y,name:v}}),V(N))};delete It["aria-invalid"];let yt,Be;const Zt=[];let vt=!1;(ns({value:Y})||f)&&(X?yt=X(Y):vt=!0);const Fr=ut.map(N=>{if(!_.isValidElement(N))return null;let st;if(b){if(!Array.isArray(Y))throw new Error(Ol(2));st=Y.some(Vt=>Ra(Vt,N.props.value)),st&&vt&&Zt.push(N.props.children)}else st=Ra(Y,N.props.value),st&&vt&&(Be=N.props.children);return _.cloneElement(N,{"aria-selected":st?"true":"false",onClick:le(N),onKeyUp:Vt=>{Vt.key===" "&&Vt.preventDefault(),N.props.onKeyUp&&N.props.onKeyUp(Vt)},role:"option",selected:st,value:void 0,"data-value":N.props.value})});vt&&(b?Zt.length===0?yt=null:yt=Zt.reduce((N,st,Vt)=>(N.push(st),Vt<Zt.length-1&&N.push(", "),N),[]):yt=Be);let on=ye;!a&&Ht&&dt&&(on=et.clientWidth);let an;typeof G<"u"?an=G:an=d?null:0;const lt=$.id||(v?`mui-component-select-${v}`:void 0),$e=m({},t,{variant:Tt,value:Y,open:ve,error:E}),ln=wp($e),Ys=m({},S.PaperProps,(r=S.slotProps)==null?void 0:r.paper),ua=Fl();return P.jsxs(_.Fragment,{children:[P.jsx(vp,m({ref:Re,tabIndex:an,role:"combobox","aria-controls":ua,"aria-disabled":d?"true":void 0,"aria-expanded":ve?"true":"false","aria-haspopup":"listbox","aria-label":i,"aria-labelledby":[I,lt].filter(Boolean).join(" ")||void 0,"aria-describedby":s,onKeyDown:ce,onMouseDown:d||W?null:Z,onBlur:be,onFocus:F},$,{ownerState:$e,className:At($.className,ln.select,c),id:lt,children:Ip(yt)?Aa||(Aa=P.jsx("span",{className:"notranslate",children:"​"})):yt})),P.jsx(Tp,m({"aria-invalid":E,value:Array.isArray(Y)?Y.join(","):Y,name:v,ref:Bt,"aria-hidden":!0,onChange:sn,tabIndex:-1,disabled:d,className:ln.nativeInput,autoFocus:o,ownerState:$e},It)),P.jsx(Ep,{as:w,className:ln.icon,ownerState:$e}),P.jsx(Zf,m({id:`menu-${v||""}`,anchorEl:et,open:ve,onClose:ft,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},S,{MenuListProps:m({"aria-labelledby":I,role:"listbox","aria-multiselectable":b?"true":void 0,disableListWrap:!0,id:ua},S.MenuListProps),slotProps:m({},S.slotProps,{paper:m({},Ys,{style:m({minWidth:on},Ys!=null?Ys.style:null)})}),children:Fr}))]})}),Rp=Ap,bp=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],Cp=["root"],Sp=e=>{const{classes:t}=e;return t},no={name:"MuiSelect",overridesResolver:(e,t)=>t.root,shouldForwardProp:e=>Ae(e)&&e!=="variant",slot:"Root"},Pp=q(jl,no)(""),xp=q(Gl,no)(""),Dp=q($l,no)(""),Ql=_.forwardRef(function(t,n){const r=Ft({name:"MuiSelect",props:t}),{autoWidth:s=!1,children:i,classes:o={},className:a,defaultOpen:l=!1,displayEmpty:c=!1,IconComponent:u=Td,id:h,input:d,inputProps:f,label:E,labelId:w,MenuProps:y,multiple:I=!1,native:S=!1,onClose:b,onOpen:v,open:V,renderValue:x,SelectDisplayProps:T,variant:F="outlined"}=r,B=nt(r,bp),z=S?ap:Rp,W=Vn(),X=Dn({props:r,muiFormControl:W,states:["variant","error"]}),$=X.variant||F,G=m({},r,{variant:$,classes:o}),tt=Sp(G),Tt=nt(tt,Cp),It=d||{standard:P.jsx(Pp,{ownerState:G}),outlined:P.jsx(xp,{label:E,ownerState:G}),filled:P.jsx(Dp,{ownerState:G})}[$],Y=xn(n,It.ref);return P.jsx(_.Fragment,{children:_.cloneElement(It,m({inputComponent:z,inputProps:m({children:i,error:X.error,IconComponent:u,variant:$,type:void 0,multiple:I},S?{id:h}:{autoWidth:s,defaultOpen:l,displayEmpty:c,labelId:w,MenuProps:y,onClose:b,onOpen:v,open:V,renderValue:x,SelectDisplayProps:m({id:h},T)},f,{classes:f?Ji(Tt,f.classes):Tt},d?d.props.inputProps:{})},(I&&S||c)&&$==="outlined"?{notched:!0}:{},{ref:Y,className:At(It.props.className,a,tt.root)},!d&&{variant:$},B))})});Ql.muiName="Select";const Vp=Ql;function Np(e){return bt("MuiTextField",e)}Ct("MuiTextField",["root"]);const kp=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],Mp={standard:jl,filled:$l,outlined:Gl},Op=e=>{const{classes:t}=e;return St({root:["root"]},Np,t)},Lp=q(Yd,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Fp=_.forwardRef(function(t,n){const r=Ft({props:t,name:"MuiTextField"}),{autoComplete:s,autoFocus:i=!1,children:o,className:a,color:l="primary",defaultValue:c,disabled:u=!1,error:h=!1,FormHelperTextProps:d,fullWidth:f=!1,helperText:E,id:w,InputLabelProps:y,inputProps:I,InputProps:S,inputRef:b,label:v,maxRows:V,minRows:x,multiline:T=!1,name:F,onBlur:B,onChange:z,onFocus:W,placeholder:X,required:$=!1,rows:G,select:tt=!1,SelectProps:Tt,type:It,value:Y,variant:at="outlined"}=r,xt=nt(r,kp),oe=m({},r,{autoFocus:i,color:l,disabled:u,error:h,fullWidth:f,multiline:T,required:$,select:tt,variant:at}),Bt=Op(oe),Dt={};at==="outlined"&&(y&&typeof y.shrink<"u"&&(Dt.notched=y.shrink),Dt.label=v),tt&&((!Tt||!Tt.native)&&(Dt.id=void 0),Dt["aria-describedby"]=void 0);const dt=Fl(w),Jt=E&&dt?`${dt}-helper-text`:void 0,Ht=v&&dt?`${dt}-label`:void 0,ye=Mp[at],ae=P.jsx(ye,m({"aria-describedby":Jt,autoComplete:s,autoFocus:i,defaultValue:c,fullWidth:f,multiline:T,name:F,rows:G,maxRows:V,minRows:x,type:It,value:Y,id:dt,inputRef:b,onBlur:B,onChange:z,onFocus:W,placeholder:X,inputProps:I},Dt,S));return P.jsxs(Lp,m({className:At(Bt.root,a),disabled:u,error:h,fullWidth:f,ref:n,required:$,color:l,variant:at,ownerState:oe},xt,{children:[v!=null&&v!==""&&P.jsx(wf,m({htmlFor:dt,id:Ht},y,{children:v})),tt?P.jsx(Vp,m({"aria-describedby":Jt,id:dt,labelId:Ht,value:Y,input:ae},Tt,{children:o})):ae,E&&P.jsx(sf,m({id:Jt},d,{children:E}))]}))}),$r=Fp,Ee={wrapper:ne`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 8px;
  `,title:ne`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,infoWrapper:ne`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,userInfoWrapper:ne`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,paper:e=>ne`
    background-color: ${e.palette.background.card};
    box-shadow: unset;
  `,wishesWrapper:ne`
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
  `,address:ne`
    font-family: "Nanum Myeongjo";
    border-radius: 50px;
    font-size: 13px;
  `,commentsWrapper:e=>ne`
    .comments-header {
    }
    .comments-body {
      /* border-top: 2px solid ${e.palette.primary.main}; */
      /* border-bottom: 2px solid ${e.palette.primary.main}; */
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
  `,deleteDialog:ne`
    .MuiDialogActions-root {
      padding: 0 24px 8px 24px;
    }
  `,editComment:ne`
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
  `,submitButton:ne`
    margin-left: auto;
  `};var ba={};/**
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
 */const Xl=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Bp=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Yl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,c=l?e[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Xl(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Bp(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new $p;const d=i<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const E=c<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class $p extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Up=function(e){const t=Xl(e);return Yl.encodeByteArray(t,!0)},rs=function(e){return Up(e).replace(/\./g,"")},jp=function(e){try{return Yl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function qp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zp=()=>qp().__FIREBASE_DEFAULTS__,Wp=()=>{if(typeof process>"u"||typeof ba>"u")return;const e=ba.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Hp=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&jp(e[1]);return t&&JSON.parse(t)},ro=()=>{try{return zp()||Wp()||Hp()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Kp=e=>{var t,n;return(n=(t=ro())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Gp=e=>{const t=Kp(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Jl=()=>{var e;return(e=ro())===null||e===void 0?void 0:e.config};/**
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
 */class Qp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Xp(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[rs(JSON.stringify(n)),rs(JSON.stringify(o)),""].join(".")}/**
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
 */function ss(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yp(){var e;const t=(e=ro())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jp(){return!Yp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zl(){try{return typeof indexedDB=="object"}catch{return!1}}function Zp(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const tm="FirebaseError";class Nn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=tm,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tc.prototype.create)}}class tc{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?em(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Nn(s,a,r)}}function em(e,t){return e.replace(nm,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const nm=/\{\$([^}]+)}/g;function Ei(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Ca(i)&&Ca(o)){if(!Ei(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ca(e){return e!==null&&typeof e=="object"}/**
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
 */function Qe(e){return e&&e._delegate?e._delegate:e}class or{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const je="[DEFAULT]";/**
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
 */class rm{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Qp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(im(t))try{this.getOrInitializeService({instanceIdentifier:je})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=je){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=je){return this.instances.has(t)}getOptions(t=je){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sm(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=je){return this.component?this.component.multipleInstances?t:je:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sm(e){return e===je?void 0:e}function im(e){return e.instantiationMode==="EAGER"}/**
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
 */class om{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new rm(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(K||(K={}));const am={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},lm=K.INFO,cm={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},um=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=cm[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ec{constructor(t){this.name=t,this._logLevel=lm,this._logHandler=um,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?am[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const hm=(e,t)=>t.some(n=>e instanceof n);let Sa,Pa;function dm(){return Sa||(Sa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fm(){return Pa||(Pa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nc=new WeakMap,Ti=new WeakMap,rc=new WeakMap,ei=new WeakMap,so=new WeakMap;function pm(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Pe(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&nc.set(n,e)}).catch(()=>{}),so.set(t,e),t}function mm(e){if(Ti.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ti.set(e,t)}let Ii={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ti.get(e);if(t==="objectStoreNames")return e.objectStoreNames||rc.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pe(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function gm(e){Ii=e(Ii)}function _m(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ni(this),t,...n);return rc.set(r,t.sort?t.sort():[t]),Pe(r)}:fm().includes(e)?function(...t){return e.apply(ni(this),t),Pe(nc.get(this))}:function(...t){return Pe(e.apply(ni(this),t))}}function ym(e){return typeof e=="function"?_m(e):(e instanceof IDBTransaction&&mm(e),hm(e,dm())?new Proxy(e,Ii):e)}function Pe(e){if(e instanceof IDBRequest)return pm(e);if(ei.has(e))return ei.get(e);const t=ym(e);return t!==e&&(ei.set(e,t),so.set(t,e)),t}const ni=e=>so.get(e);function vm(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Pe(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Pe(o.result),l.oldVersion,l.newVersion,Pe(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Em=["get","getKey","getAll","getAllKeys","count"],Tm=["put","add","delete","clear"],ri=new Map;function xa(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ri.get(t))return ri.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Tm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Em.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return ri.set(t,i),i}gm(e=>({...e,get:(t,n,r)=>xa(t,n)||e.get(t,n,r),has:(t,n)=>!!xa(t,n)||e.has(t,n)}));/**
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
 */class Im{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wm(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const wi="@firebase/app",Da="0.9.27";/**
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
 */const Xe=new ec("@firebase/app"),Am="@firebase/app-compat",Rm="@firebase/analytics-compat",bm="@firebase/analytics",Cm="@firebase/app-check-compat",Sm="@firebase/app-check",Pm="@firebase/auth",xm="@firebase/auth-compat",Dm="@firebase/database",Vm="@firebase/database-compat",Nm="@firebase/functions",km="@firebase/functions-compat",Mm="@firebase/installations",Om="@firebase/installations-compat",Lm="@firebase/messaging",Fm="@firebase/messaging-compat",Bm="@firebase/performance",$m="@firebase/performance-compat",Um="@firebase/remote-config",jm="@firebase/remote-config-compat",qm="@firebase/storage",zm="@firebase/storage-compat",Wm="@firebase/firestore",Hm="@firebase/firestore-compat",Km="firebase",Gm="10.8.0";/**
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
 */const Ai="[DEFAULT]",Qm={[wi]:"fire-core",[Am]:"fire-core-compat",[bm]:"fire-analytics",[Rm]:"fire-analytics-compat",[Sm]:"fire-app-check",[Cm]:"fire-app-check-compat",[Pm]:"fire-auth",[xm]:"fire-auth-compat",[Dm]:"fire-rtdb",[Vm]:"fire-rtdb-compat",[Nm]:"fire-fn",[km]:"fire-fn-compat",[Mm]:"fire-iid",[Om]:"fire-iid-compat",[Lm]:"fire-fcm",[Fm]:"fire-fcm-compat",[Bm]:"fire-perf",[$m]:"fire-perf-compat",[Um]:"fire-rc",[jm]:"fire-rc-compat",[qm]:"fire-gcs",[zm]:"fire-gcs-compat",[Wm]:"fire-fst",[Hm]:"fire-fst-compat","fire-js":"fire-js",[Km]:"fire-js-all"};/**
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
 */const is=new Map,Ri=new Map;function Xm(e,t){try{e.container.addComponent(t)}catch(n){Xe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function os(e){const t=e.name;if(Ri.has(t))return Xe.debug(`There were multiple attempts to register component ${t}.`),!1;Ri.set(t,e);for(const n of is.values())Xm(n,e);return!0}function Ym(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Jm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xe=new tc("app","Firebase",Jm);/**
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
 */class Zm{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xe.create("app-deleted",{appName:this._name})}}/**
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
 */const tg=Gm;function sc(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ai,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw xe.create("bad-app-name",{appName:String(s)});if(n||(n=Jl()),!n)throw xe.create("no-options");const i=is.get(s);if(i){if(Ei(n,i.options)&&Ei(r,i.config))return i;throw xe.create("duplicate-app",{appName:s})}const o=new om(s);for(const l of Ri.values())o.addComponent(l);const a=new Zm(n,r,o);return is.set(s,a),a}function eg(e=Ai){const t=is.get(e);if(!t&&e===Ai&&Jl())return sc();if(!t)throw xe.create("no-app",{appName:e});return t}function gn(e,t,n){var r;let s=(r=Qm[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Xe.warn(a.join(" "));return}os(new or(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const ng="firebase-heartbeat-database",rg=1,ar="firebase-heartbeat-store";let si=null;function ic(){return si||(si=vm(ng,rg,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ar)}catch(n){console.warn(n)}}}}).catch(e=>{throw xe.create("idb-open",{originalErrorMessage:e.message})})),si}async function sg(e){try{const n=(await ic()).transaction(ar),r=await n.objectStore(ar).get(oc(e));return await n.done,r}catch(t){if(t instanceof Nn)Xe.warn(t.message);else{const n=xe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Xe.warn(n.message)}}}async function Va(e,t){try{const r=(await ic()).transaction(ar,"readwrite");await r.objectStore(ar).put(t,oc(e)),await r.done}catch(n){if(n instanceof Nn)Xe.warn(n.message);else{const r=xe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xe.warn(r.message)}}}function oc(e){return`${e.name}!${e.options.appId}`}/**
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
 */const ig=1024,og=30*24*60*60*1e3;class ag{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Na();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=og}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Na(),{heartbeatsToSend:r,unsentEntries:s}=lg(this._heartbeatsCache.heartbeats),i=rs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Na(){return new Date().toISOString().substring(0,10)}function lg(e,t=ig){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ka(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ka(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zl()?Zp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Va(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Va(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ka(e){return rs(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function ug(e){os(new or("platform-logger",t=>new Im(t),"PRIVATE")),os(new or("heartbeat",t=>new ag(t),"PRIVATE")),gn(wi,Da,e),gn(wi,Da,"esm2017"),gn("fire-js","")}ug("");var hg="firebase",dg="10.8.0";/**
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
 */gn(hg,dg,"app");var fg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,io=io||{},M=fg||self;function As(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ar(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function pg(e){return Object.prototype.hasOwnProperty.call(e,ii)&&e[ii]||(e[ii]=++mg)}var ii="closure_uid_"+(1e9*Math.random()>>>0),mg=0;function gg(e,t,n){return e.call.apply(e.bind,arguments)}function _g(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function qt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qt=gg:qt=_g,qt.apply(null,arguments)}function Ur(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Pt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Oe(){this.s=this.s,this.o=this.o}var yg=0;Oe.prototype.s=!1;Oe.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),yg!=0)&&pg(this)};Oe.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ac=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function oo(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ma(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(As(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function zt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}zt.prototype.h=function(){this.defaultPrevented=!0};var vg=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};M.addEventListener("test",n,t),M.removeEventListener("test",n,t)}catch{}return e}();function lr(e){return/^[\s\xa0]*$/.test(e)}function Rs(){var e=M.navigator;return e&&(e=e.userAgent)?e:""}function ue(e){return Rs().indexOf(e)!=-1}function ao(e){return ao[" "](e),e}ao[" "]=function(){};function Eg(e,t){var n=d_;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Tg=ue("Opera"),In=ue("Trident")||ue("MSIE"),lc=ue("Edge"),bi=lc||In,cc=ue("Gecko")&&!(Rs().toLowerCase().indexOf("webkit")!=-1&&!ue("Edge"))&&!(ue("Trident")||ue("MSIE"))&&!ue("Edge"),Ig=Rs().toLowerCase().indexOf("webkit")!=-1&&!ue("Edge");function uc(){var e=M.document;return e?e.documentMode:void 0}var Ci;t:{var oi="",ai=function(){var e=Rs();if(cc)return/rv:([^\);]+)(\)|;)/.exec(e);if(lc)return/Edge\/([\d\.]+)/.exec(e);if(In)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Ig)return/WebKit\/(\S+)/.exec(e);if(Tg)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ai&&(oi=ai?ai[1]:""),In){var li=uc();if(li!=null&&li>parseFloat(oi)){Ci=String(li);break t}}Ci=oi}var Si;if(M.document&&In){var Oa=uc();Si=Oa||parseInt(Ci,10)||void 0}else Si=void 0;var wg=Si;function cr(e,t){if(zt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(cc){t:{try{ao(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Ag[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&cr.$.h.call(this)}}Pt(cr,zt);var Ag={2:"touch",3:"pen",4:"mouse"};cr.prototype.h=function(){cr.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Rr="closure_listenable_"+(1e6*Math.random()|0),Rg=0;function bg(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++Rg,this.fa=this.ia=!1}function bs(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function lo(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Cg(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function hc(e){const t={};for(const n in e)t[n]=e[n];return t}const La="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dc(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<La.length;i++)n=La[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Cs(e){this.src=e,this.g={},this.h=0}Cs.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=xi(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new bg(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Pi(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=ac(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(bs(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function xi(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var co="closure_lm_"+(1e6*Math.random()|0),ci={};function fc(e,t,n,r,s){if(r&&r.once)return mc(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)fc(e,t[i],n,r,s);return null}return n=fo(n),e&&e[Rr]?e.O(t,n,Ar(r)?!!r.capture:!!r,s):pc(e,t,n,!1,r,s)}function pc(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Ar(s)?!!s.capture:!!s,a=ho(e);if(a||(e[co]=a=new Cs(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=Sg(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)vg||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(_c(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Sg(){function e(n){return t.call(e.src,e.listener,n)}const t=Pg;return e}function mc(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)mc(e,t[i],n,r,s);return null}return n=fo(n),e&&e[Rr]?e.P(t,n,Ar(r)?!!r.capture:!!r,s):pc(e,t,n,!0,r,s)}function gc(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)gc(e,t[i],n,r,s);else r=Ar(r)?!!r.capture:!!r,n=fo(n),e&&e[Rr]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=xi(i,n,r,s),-1<n&&(bs(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=ho(e))&&(t=e.g[t.toString()],e=-1,t&&(e=xi(t,n,r,s)),(n=-1<e?t[e]:null)&&uo(n))}function uo(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Rr])Pi(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(_c(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ho(t))?(Pi(n,e),n.h==0&&(n.src=null,t[co]=null)):bs(e)}}}function _c(e){return e in ci?ci[e]:ci[e]="on"+e}function Pg(e,t){if(e.fa)e=!0;else{t=new cr(t,this);var n=e.listener,r=e.la||e.src;e.ia&&uo(e),e=n.call(r,t)}return e}function ho(e){return e=e[co],e instanceof Cs?e:null}var ui="__closure_events_fn_"+(1e9*Math.random()>>>0);function fo(e){return typeof e=="function"?e:(e[ui]||(e[ui]=function(t){return e.handleEvent(t)}),e[ui])}function Rt(){Oe.call(this),this.i=new Cs(this),this.S=this,this.J=null}Pt(Rt,Oe);Rt.prototype[Rr]=!0;Rt.prototype.removeEventListener=function(e,t,n,r){gc(this,e,t,n,r)};function Ot(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new zt(t,e);else if(t instanceof zt)t.target=t.target||e;else{var s=t;t=new zt(r,e),dc(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=jr(o,r,!0,t)&&s}if(o=t.g=e,s=jr(o,r,!0,t)&&s,s=jr(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=jr(o,r,!1,t)&&s}Rt.prototype.N=function(){if(Rt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)bs(n[r]);delete e.g[t],e.h--}}this.J=null};Rt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Rt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function jr(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Pi(e.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var po=M.JSON.stringify;class xg{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Dg(){var e=mo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Vg{constructor(){this.h=this.g=null}add(t,n){const r=yc.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var yc=new xg(()=>new Ng,e=>e.reset());class Ng{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function kg(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Mg(e){M.setTimeout(()=>{throw e},0)}let ur,hr=!1,mo=new Vg,vc=()=>{const e=M.Promise.resolve(void 0);ur=()=>{e.then(Og)}};var Og=()=>{for(var e;e=Dg();){try{e.h.call(e.g)}catch(n){Mg(n)}var t=yc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}hr=!1};function Ss(e,t){Rt.call(this),this.h=e||1,this.g=t||M,this.j=qt(this.qb,this),this.l=Date.now()}Pt(Ss,Rt);R=Ss.prototype;R.ga=!1;R.T=null;R.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ot(this,"tick"),this.ga&&(go(this),this.start()))}};R.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function go(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}R.N=function(){Ss.$.N.call(this),go(this),delete this.g};function _o(e,t,n){if(typeof e=="function")n&&(e=qt(e,n));else if(e&&typeof e.handleEvent=="function")e=qt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:M.setTimeout(e,t||0)}function Ec(e){e.g=_o(()=>{e.g=null,e.i&&(e.i=!1,Ec(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Lg extends Oe{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ec(this)}N(){super.N(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dr(e){Oe.call(this),this.h=e,this.g={}}Pt(dr,Oe);var Fa=[];function Tc(e,t,n,r){Array.isArray(n)||(n&&(Fa[0]=n.toString()),n=Fa);for(var s=0;s<n.length;s++){var i=fc(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Ic(e){lo(e.g,function(t,n){this.g.hasOwnProperty(n)&&uo(t)},e),e.g={}}dr.prototype.N=function(){dr.$.N.call(this),Ic(this)};dr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ps(){this.g=!0}Ps.prototype.Ea=function(){this.g=!1};function Fg(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function Bg(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function mn(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Ug(e,n)+(r?" "+r:"")})}function $g(e,t){e.info(function(){return"TIMEOUT: "+t})}Ps.prototype.info=function(){};function Ug(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return po(n)}catch{return t}}var tn={},Ba=null;function xs(){return Ba=Ba||new Rt}tn.Ta="serverreachability";function wc(e){zt.call(this,tn.Ta,e)}Pt(wc,zt);function fr(e){const t=xs();Ot(t,new wc(t))}tn.STAT_EVENT="statevent";function Ac(e,t){zt.call(this,tn.STAT_EVENT,e),this.stat=t}Pt(Ac,zt);function Kt(e){const t=xs();Ot(t,new Ac(t,e))}tn.Ua="timingevent";function Rc(e,t){zt.call(this,tn.Ua,e),this.size=t}Pt(Rc,zt);function br(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){e()},t)}var Ds={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},bc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function yo(){}yo.prototype.h=null;function $a(e){return e.h||(e.h=e.i())}function Cc(){}var Cr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function vo(){zt.call(this,"d")}Pt(vo,zt);function Eo(){zt.call(this,"c")}Pt(Eo,zt);var Di;function Vs(){}Pt(Vs,yo);Vs.prototype.g=function(){return new XMLHttpRequest};Vs.prototype.i=function(){return{}};Di=new Vs;function Sr(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new dr(this),this.P=jg,e=bi?125:void 0,this.V=new Ss(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Sc}function Sc(){this.i=null,this.g="",this.h=!1}var jg=45e3,Pc={},Vi={};R=Sr.prototype;R.setTimeout=function(e){this.P=e};function Ni(e,t,n){e.L=1,e.A=ks(Ie(t)),e.u=n,e.S=!0,xc(e,null)}function xc(e,t){e.G=Date.now(),Pr(e),e.B=Ie(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Fc(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Sc,e.g=iu(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Lg(qt(e.Pa,e,e.g),e.O)),Tc(e.U,e.g,"readystatechange",e.nb),t=e.I?hc(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),fr(),Fg(e.j,e.v,e.B,e.m,e.W,e.u)}R.nb=function(e){e=e.target;const t=this.M;t&&he(e)==3?t.l():this.Pa(e)};R.Pa=function(e){try{if(e==this.g)t:{const u=he(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||bi||this.g&&(this.h.h||this.g.ja()||za(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?fr(3):fr(2)),Ns(this);var n=this.g.da();this.ca=n;e:if(Dc(this)){var r=za(this.g);e="";var s=r.length,i=he(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ze(this),Zn(this);var o="";break e}this.h.i=new M.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Bg(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!lr(a)){var c=a;break e}}c=null}if(n=c)mn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ki(this,n);else{this.i=!1,this.s=3,Kt(12),ze(this),Zn(this);break t}}this.S?(Vc(this,u,o),bi&&this.i&&u==3&&(Tc(this.U,this.V,"tick",this.mb),this.V.start())):(mn(this.j,this.m,o,null),ki(this,o)),u==4&&ze(this),this.i&&!this.J&&(u==4?eu(this.l,this):(this.i=!1,Pr(this)))}else c_(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Kt(12)):(this.s=0,Kt(13)),ze(this),Zn(this)}}}catch{}finally{}};function Dc(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Vc(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=qg(e,n),s==Vi){t==4&&(e.s=4,Kt(14),r=!1),mn(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Pc){e.s=4,Kt(15),mn(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else mn(e.j,e.m,s,null),ki(e,s);Dc(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,Kt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),bo(t),t.M=!0,Kt(11))):(mn(e.j,e.m,n,"[Invalid Chunked Response]"),ze(e),Zn(e))}R.mb=function(){if(this.g){var e=he(this.g),t=this.g.ja();this.o<t.length&&(Ns(this),Vc(this,e,t),this.i&&e!=4&&Pr(this))}};function qg(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Vi:(n=Number(t.substring(n,r)),isNaN(n)?Pc:(r+=1,r+n>t.length?Vi:(t=t.slice(r,r+n),e.o=r+n,t)))}R.cancel=function(){this.J=!0,ze(this)};function Pr(e){e.Y=Date.now()+e.P,Nc(e,e.P)}function Nc(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=br(qt(e.lb,e),t)}function Ns(e){e.C&&(M.clearTimeout(e.C),e.C=null)}R.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?($g(this.j,this.B),this.L!=2&&(fr(),Kt(17)),ze(this),this.s=2,Zn(this)):Nc(this,this.Y-e)};function Zn(e){e.l.H==0||e.J||eu(e.l,e)}function ze(e){Ns(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,go(e.V),Ic(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ki(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Mi(n.i,e))){if(!e.K&&Mi(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)cs(n),Fs(n);else break t;Ro(n),Kt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=br(qt(n.ib,n),6e3));if(1>=Uc(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else We(n,11)}else if((e.K||n.g==e)&&cs(n),!lr(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const E=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=r.i;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(To(i,i.h),i.h=null))}if(r.F){const w=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,it(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=su(r,r.J?r.pa:null,r.Y),o.K){jc(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Ns(a),Pr(a)),r.g=o}else Zc(r);0<n.j.length&&Bs(n)}else c[0]!="stop"&&c[0]!="close"||We(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?We(n,7):Ao(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}fr(4)}catch{}}function zg(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(As(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Wg(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(As(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function kc(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(As(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Wg(e),r=zg(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var Mc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hg(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ge(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ge){this.h=e.h,as(this,e.j),this.s=e.s,this.g=e.g,ls(this,e.m),this.l=e.l;var t=e.i,n=new pr;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ua(this,n),this.o=e.o}else e&&(t=String(e).match(Mc))?(this.h=!1,as(this,t[1]||"",!0),this.s=Kn(t[2]||""),this.g=Kn(t[3]||"",!0),ls(this,t[4]),this.l=Kn(t[5]||"",!0),Ua(this,t[6]||"",!0),this.o=Kn(t[7]||"")):(this.h=!1,this.i=new pr(null,this.h))}Ge.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Gn(t,ja,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Gn(t,ja,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Gn(n,n.charAt(0)=="/"?Qg:Gg,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Gn(n,Yg)),e.join("")};function Ie(e){return new Ge(e)}function as(e,t,n){e.j=n?Kn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ls(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ua(e,t,n){t instanceof pr?(e.i=t,Jg(e.i,e.h)):(n||(t=Gn(t,Xg)),e.i=new pr(t,e.h))}function it(e,t,n){e.i.set(t,n)}function ks(e){return it(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Kn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Gn(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Kg),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Kg(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ja=/[#\/\?@]/g,Gg=/[#\?:]/g,Qg=/[#\?]/g,Xg=/[#\?@]/g,Yg=/#/g;function pr(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Le(e){e.g||(e.g=new Map,e.h=0,e.i&&Hg(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}R=pr.prototype;R.add=function(e,t){Le(this),this.i=null,e=kn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Oc(e,t){Le(e),t=kn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Lc(e,t){return Le(e),t=kn(e,t),e.g.has(t)}R.forEach=function(e,t){Le(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};R.ta=function(){Le(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};R.Z=function(e){Le(this);let t=[];if(typeof e=="string")Lc(this,e)&&(t=t.concat(this.g.get(kn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};R.set=function(e,t){return Le(this),this.i=null,e=kn(this,e),Lc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};R.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Fc(e,t,n){Oc(e,t),0<n.length&&(e.i=null,e.g.set(kn(e,t),oo(n)),e.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function kn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Jg(e,t){t&&!e.j&&(Le(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Oc(this,r),Fc(this,s,n))},e)),e.j=t}var Zg=class{constructor(e,t){this.g=e,this.map=t}};function Bc(e){this.l=e||t_,M.PerformanceNavigationTiming?(e=M.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(M.g&&M.g.Ka&&M.g.Ka()&&M.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var t_=10;function $c(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Uc(e){return e.h?1:e.g?e.g.size:0}function Mi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function To(e,t){e.g?e.g.add(t):e.h=t}function jc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Bc.prototype.cancel=function(){if(this.i=qc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function qc(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return oo(e.i)}var e_=class{stringify(e){return M.JSON.stringify(e,void 0)}parse(e){return M.JSON.parse(e,void 0)}};function n_(){this.g=new e_}function r_(e,t,n){const r=n||"";try{kc(e,function(s,i){let o=s;Ar(s)&&(o=po(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function s_(e,t){const n=new Ps;if(M.Image){const r=new Image;r.onload=Ur(qr,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ur(qr,n,r,"TestLoadImage: error",!1,t),r.onabort=Ur(qr,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ur(qr,n,r,"TestLoadImage: timeout",!1,t),M.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function qr(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Ms(e){this.l=e.ec||null,this.j=e.ob||!1}Pt(Ms,yo);Ms.prototype.g=function(){return new Os(this.l,this.j)};Ms.prototype.i=function(e){return function(){return e}}({});function Os(e,t){Rt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Io,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pt(Os,Rt);var Io=0;R=Os.prototype;R.open=function(e,t){if(this.readyState!=Io)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,mr(this)};R.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||M).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=Io};R.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,mr(this)),this.g&&(this.readyState=3,mr(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof M.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zc(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function zc(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}R.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?xr(this):mr(this),this.readyState==3&&zc(this)}};R.Za=function(e){this.g&&(this.response=this.responseText=e,xr(this))};R.Ya=function(e){this.g&&(this.response=e,xr(this))};R.ka=function(){this.g&&xr(this)};function xr(e){e.readyState=4,e.l=null,e.j=null,e.A=null,mr(e)}R.setRequestHeader=function(e,t){this.v.append(e,t)};R.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function mr(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Os.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var i_=M.JSON.parse;function ht(e){Rt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Wc,this.L=this.M=!1}Pt(ht,Rt);var Wc="",o_=/^https?$/i,a_=["POST","PUT"];R=ht.prototype;R.Oa=function(e){this.M=e};R.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Di.g(),this.C=this.u?$a(this.u):$a(Di),this.g.onreadystatechange=qt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){qa(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=M.FormData&&e instanceof M.FormData,!(0<=ac(a_,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Gc(this),0<this.B&&((this.L=l_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qt(this.ua,this)):this.A=_o(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){qa(this,i)}};function l_(e){return In&&typeof e.timeout=="number"&&e.ontimeout!==void 0}R.ua=function(){typeof io<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ot(this,"timeout"),this.abort(8))};function qa(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Hc(e),Ls(e)}function Hc(e){e.F||(e.F=!0,Ot(e,"complete"),Ot(e,"error"))}R.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ot(this,"complete"),Ot(this,"abort"),Ls(this))};R.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ls(this,!0)),ht.$.N.call(this)};R.La=function(){this.s||(this.G||this.v||this.l?Kc(this):this.kb())};R.kb=function(){Kc(this)};function Kc(e){if(e.h&&typeof io<"u"&&(!e.C[1]||he(e)!=4||e.da()!=2)){if(e.v&&he(e)==4)_o(e.La,0,e);else if(Ot(e,"readystatechange"),he(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(Mc)[1]||null;!s&&M.self&&M.self.location&&(s=M.self.location.protocol.slice(0,-1)),r=!o_.test(s?s.toLowerCase():"")}n=r}if(n)Ot(e,"complete"),Ot(e,"success");else{e.m=6;try{var i=2<he(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Hc(e)}}finally{Ls(e)}}}}function Ls(e,t){if(e.g){Gc(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ot(e,"ready");try{n.onreadystatechange=r}catch{}}}function Gc(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(M.clearTimeout(e.A),e.A=null)}R.isActive=function(){return!!this.g};function he(e){return e.g?e.g.readyState:0}R.da=function(){try{return 2<he(this)?this.g.status:-1}catch{return-1}};R.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),i_(t)}};function za(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Wc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function c_(e){const t={};e=(e.g&&2<=he(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(lr(e[r]))continue;var n=kg(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}Cg(t,function(r){return r.join(", ")})}R.Ia=function(){return this.m};R.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Qc(e){let t="";return lo(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function wo(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Qc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):it(e,t,n))}function zn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Xc(e){this.Ga=0,this.j=[],this.l=new Ps,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zn("baseRetryDelayMs",5e3,e),this.hb=zn("retryDelaySeedMs",1e4,e),this.eb=zn("forwardChannelMaxRetries",2,e),this.xa=zn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Bc(e&&e.concurrentRequestLimit),this.Ja=new n_,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}R=Xc.prototype;R.ra=8;R.H=1;function Ao(e){if(Yc(e),e.H==3){var t=e.W++,n=Ie(e.I);if(it(n,"SID",e.K),it(n,"RID",t),it(n,"TYPE","terminate"),Dr(e,n),t=new Sr(e,e.l,t),t.L=2,t.A=ks(Ie(n)),n=!1,M.navigator&&M.navigator.sendBeacon)try{n=M.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&M.Image&&(new Image().src=t.A,n=!0),n||(t.g=iu(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Pr(t)}ru(e)}function Fs(e){e.g&&(bo(e),e.g.cancel(),e.g=null)}function Yc(e){Fs(e),e.u&&(M.clearTimeout(e.u),e.u=null),cs(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&M.clearTimeout(e.m),e.m=null)}function Bs(e){if(!$c(e.i)&&!e.m){e.m=!0;var t=e.Na;ur||vc(),hr||(ur(),hr=!0),mo.add(t,e),e.C=0}}function u_(e,t){return Uc(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=br(qt(e.Na,e,t),nu(e,e.C)),e.C++,!0)}R.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Sr(this,this.l,e);let i=this.s;if(this.U&&(i?(i=hc(i),dc(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Jc(this,s,t),n=Ie(this.I),it(n,"RID",e),it(n,"CVER",22),this.F&&it(n,"X-HTTP-Session-Id",this.F),Dr(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Qc(i)))+"&"+t:this.o&&wo(n,this.o,i)),To(this.i,s),this.bb&&it(n,"TYPE","init"),this.P?(it(n,"$req",t),it(n,"SID","null"),s.aa=!0,Ni(s,n,null)):Ni(s,n,t),this.H=2}}else this.H==3&&(e?Wa(this,e):this.j.length==0||$c(this.i)||Wa(this))};function Wa(e,t){var n;t?n=t.m:n=e.W++;const r=Ie(e.I);it(r,"SID",e.K),it(r,"RID",n),it(r,"AID",e.V),Dr(e,r),e.o&&e.s&&wo(r,e.o,e.s),n=new Sr(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Jc(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),To(e.i,n),Ni(n,r,t)}function Dr(e,t){e.na&&lo(e.na,function(n,r){it(t,r,n)}),e.h&&kc({},function(n,r){it(t,r,n)})}function Jc(e,t,n){n=Math.min(e.j.length,n);var r=e.h?qt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{r_(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Zc(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;ur||vc(),hr||(ur(),hr=!0),mo.add(t,e),e.A=0}}function Ro(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=br(qt(e.Ma,e),nu(e,e.A)),e.A++,!0)}R.Ma=function(){if(this.u=null,tu(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=br(qt(this.jb,this),e)}};R.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Kt(10),Fs(this),tu(this))};function bo(e){e.B!=null&&(M.clearTimeout(e.B),e.B=null)}function tu(e){e.g=new Sr(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ie(e.wa);it(t,"RID","rpc"),it(t,"SID",e.K),it(t,"AID",e.V),it(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&it(t,"TO",e.qa),it(t,"TYPE","xmlhttp"),Dr(e,t),e.o&&e.s&&wo(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=ks(Ie(t)),n.u=null,n.S=!0,xc(n,e)}R.ib=function(){this.v!=null&&(this.v=null,Fs(this),Ro(this),Kt(19))};function cs(e){e.v!=null&&(M.clearTimeout(e.v),e.v=null)}function eu(e,t){var n=null;if(e.g==t){cs(e),bo(e),e.g=null;var r=2}else if(Mi(e.i,t))n=t.F,jc(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=xs(),Ot(r,new Rc(r,n)),Bs(e)}else Zc(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&u_(e,t)||r==2&&Ro(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:We(e,5);break;case 4:We(e,10);break;case 3:We(e,6);break;default:We(e,2)}}}function nu(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function We(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=qt(e.pb,e);n||(n=new Ge("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||as(n,"https"),ks(n)),s_(n.toString(),r)}else Kt(2);e.H=0,e.h&&e.h.za(t),ru(e),Yc(e)}R.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Kt(2)):(this.l.info("Failed to ping google.com"),Kt(1))};function ru(e){if(e.H=0,e.ma=[],e.h){const t=qc(e.i);(t.length!=0||e.j.length!=0)&&(Ma(e.ma,t),Ma(e.ma,e.j),e.i.i.length=0,oo(e.j),e.j.length=0),e.h.ya()}}function su(e,t,n){var r=n instanceof Ge?Ie(n):new Ge(n);if(r.g!="")t&&(r.g=t+"."+r.g),ls(r,r.m);else{var s=M.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Ge(null);r&&as(i,r),t&&(i.g=t),s&&ls(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&it(r,n,t),it(r,"VER",e.ra),Dr(e,r),r}function iu(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new ht(new Ms({ob:n})):new ht(e.va),t.Oa(e.J),t}R.isActive=function(){return!!this.h&&this.h.isActive(this)};function ou(){}R=ou.prototype;R.Ba=function(){};R.Aa=function(){};R.za=function(){};R.ya=function(){};R.isActive=function(){return!0};R.Va=function(){};function us(){if(In&&!(10<=Number(wg)))throw Error("Environmental error: no available transport.")}us.prototype.g=function(e,t){return new Yt(e,t)};function Yt(e,t){Rt.call(this),this.g=new Xc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!lr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!lr(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Mn(this)}Pt(Yt,Rt);Yt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Kt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=su(e,null,e.Y),Bs(e)};Yt.prototype.close=function(){Ao(this.g)};Yt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=po(e),e=n);t.j.push(new Zg(t.fb++,e)),t.H==3&&Bs(t)};Yt.prototype.N=function(){this.g.h=null,delete this.j,Ao(this.g),delete this.g,Yt.$.N.call(this)};function au(e){vo.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Pt(au,vo);function lu(){Eo.call(this),this.status=1}Pt(lu,Eo);function Mn(e){this.g=e}Pt(Mn,ou);Mn.prototype.Ba=function(){Ot(this.g,"a")};Mn.prototype.Aa=function(e){Ot(this.g,new au(e))};Mn.prototype.za=function(e){Ot(this.g,new lu)};Mn.prototype.ya=function(){Ot(this.g,"b")};function h_(){this.blockSize=-1}function se(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Pt(se,h_);se.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function hi(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}se.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)hi(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){hi(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){hi(this,r),s=0;break}}this.h=s,this.i+=t};se.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function J(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var d_={};function Co(e){return-128<=e&&128>e?Eg(e,function(t){return new J([t|0],0>t?-1:0)}):new J([e|0],0>e?-1:0)}function de(e){if(isNaN(e)||!isFinite(e))return _n;if(0>e)return kt(de(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Oi;return new J(t,0)}function cu(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return kt(cu(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=de(Math.pow(t,8)),r=_n,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=de(Math.pow(t,i)),r=r.R(i).add(de(o))):(r=r.R(n),r=r.add(de(o)))}return r}var Oi=4294967296,_n=Co(0),Li=Co(1),Ha=Co(16777216);R=J.prototype;R.ea=function(){if(te(this))return-kt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Oi+r)*t,t*=Oi}return e};R.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Te(this))return"0";if(te(this))return"-"+kt(this).toString(e);for(var t=de(Math.pow(e,6)),n=this,r="";;){var s=ds(n,t).g;n=hs(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Te(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};R.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Te(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function te(e){return e.h==-1}R.X=function(e){return e=hs(this,e),te(e)?-1:Te(e)?0:1};function kt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new J(n,~e.h).add(Li)}R.abs=function(){return te(this)?kt(this):this};R.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new J(n,n[n.length-1]&-2147483648?-1:0)};function hs(e,t){return e.add(kt(t))}R.R=function(e){if(Te(this)||Te(e))return _n;if(te(this))return te(e)?kt(this).R(kt(e)):kt(kt(this).R(e));if(te(e))return kt(this.R(kt(e)));if(0>this.X(Ha)&&0>e.X(Ha))return de(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,l=e.D(s)&65535;n[2*r+2*s]+=o*l,zr(n,2*r+2*s),n[2*r+2*s+1]+=i*l,zr(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,zr(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,zr(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new J(n,0)};function zr(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Wn(e,t){this.g=e,this.h=t}function ds(e,t){if(Te(t))throw Error("division by zero");if(Te(e))return new Wn(_n,_n);if(te(e))return t=ds(kt(e),t),new Wn(kt(t.g),kt(t.h));if(te(t))return t=ds(e,kt(t)),new Wn(kt(t.g),t.h);if(30<e.g.length){if(te(e)||te(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Li,r=t;0>=r.X(e);)n=Ka(n),r=Ka(r);var s=un(n,1),i=un(r,1);for(r=un(r,2),n=un(n,2);!Te(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=un(r,1),n=un(n,1)}return t=hs(e,s.R(t)),new Wn(s,t)}for(s=_n;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=de(n),o=i.R(t);te(o)||0<o.X(e);)n-=r,i=de(n),o=i.R(t);Te(i)&&(i=Li),s=s.add(i),e=hs(e,o)}return new Wn(s,e)}R.gb=function(e){return ds(this,e).h};R.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new J(n,this.h&e.h)};R.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new J(n,this.h|e.h)};R.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new J(n,this.h^e.h)};function Ka(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new J(n,e.h)}function un(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new J(s,e.h)}us.prototype.createWebChannel=us.prototype.g;Yt.prototype.send=Yt.prototype.u;Yt.prototype.open=Yt.prototype.m;Yt.prototype.close=Yt.prototype.close;Ds.NO_ERROR=0;Ds.TIMEOUT=8;Ds.HTTP_ERROR=6;bc.COMPLETE="complete";Cc.EventType=Cr;Cr.OPEN="a";Cr.CLOSE="b";Cr.ERROR="c";Cr.MESSAGE="d";Rt.prototype.listen=Rt.prototype.O;ht.prototype.listenOnce=ht.prototype.P;ht.prototype.getLastError=ht.prototype.Sa;ht.prototype.getLastErrorCode=ht.prototype.Ia;ht.prototype.getStatus=ht.prototype.da;ht.prototype.getResponseJson=ht.prototype.Wa;ht.prototype.getResponseText=ht.prototype.ja;ht.prototype.send=ht.prototype.ha;ht.prototype.setWithCredentials=ht.prototype.Oa;se.prototype.digest=se.prototype.l;se.prototype.reset=se.prototype.reset;se.prototype.update=se.prototype.j;J.prototype.add=J.prototype.add;J.prototype.multiply=J.prototype.R;J.prototype.modulo=J.prototype.gb;J.prototype.compare=J.prototype.X;J.prototype.toNumber=J.prototype.ea;J.prototype.toString=J.prototype.toString;J.prototype.getBits=J.prototype.D;J.fromNumber=de;J.fromString=cu;var f_=function(){return new us},p_=function(){return xs()},di=Ds,m_=bc,g_=tn,Ga={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Wr=Cc,__=ht,y_=se,yn=J;const Qa="@firebase/firestore";/**
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
 */class Ut{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
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
 */let On="10.8.0";/**
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
 */const Ye=new ec("@firebase/firestore");function Hn(){return Ye.logLevel}function A(e,...t){if(Ye.logLevel<=K.DEBUG){const n=t.map(So);Ye.debug(`Firestore (${On}): ${e}`,...n)}}function ge(e,...t){if(Ye.logLevel<=K.ERROR){const n=t.map(So);Ye.error(`Firestore (${On}): ${e}`,...n)}}function wn(e,...t){if(Ye.logLevel<=K.WARN){const n=t.map(So);Ye.warn(`Firestore (${On}): ${e}`,...n)}}function So(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function k(e="Unexpected state"){const t=`FIRESTORE (${On}) INTERNAL ASSERTION FAILED: `+e;throw ge(t),new Error(t)}function rt(e,t){e||k()}function L(e,t){return e}/**
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Nn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class De{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class uu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class v_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ut.UNAUTHENTICATED))}shutdown(){}}class E_{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class T_{constructor(t){this.t=t,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new De;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new De,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new De)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(rt(typeof r.accessToken=="string"),new uu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return rt(t===null||typeof t=="string"),new Ut(t)}}class I_{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class w_{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new I_(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class A_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R_{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(rt(typeof n.token=="string"),this.R=n.token,new A_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function b_(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class hu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=b_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function Q(e,t){return e<t?-1:e>t?1:0}function An(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */class Et{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new C(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new C(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new C(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Et.fromMillis(Date.now())}static fromDate(t){return Et.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Q(this.nanoseconds,t.nanoseconds):Q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class O{constructor(t){this.timestamp=t}static fromTimestamp(t){return new O(t)}static min(){return new O(new Et(0,0))}static max(){return new O(new Et(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class gr{constructor(t,n,r){n===void 0?n=0:n>t.length&&k(),r===void 0?r=t.length-n:r>t.length-n&&k(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return gr.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof gr?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class ot extends gr{construct(t,n,r){return new ot(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new C(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ot(n)}static emptyPath(){return new ot([])}}const C_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends gr{construct(t,n,r){return new Mt(t,n,r)}static isValidIdentifier(t){return C_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Mt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new C(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new C(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new C(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new C(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Mt(n)}static emptyPath(){return new Mt([])}}/**
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
 */class D{constructor(t){this.path=t}static fromPath(t){return new D(ot.fromString(t))}static fromName(t){return new D(ot.fromString(t).popFirst(5))}static empty(){return new D(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ot.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ot.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new D(new ot(t.slice()))}}function S_(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=O.fromTimestamp(r===1e9?new Et(n+1,0):new Et(n,r));return new Ne(s,D.empty(),t)}function P_(e){return new Ne(e.readTime,e.key,-1)}class Ne{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Ne(O.min(),D.empty(),-1)}static max(){return new Ne(O.max(),D.empty(),-1)}}function x_(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=D.comparator(e.documentKey,t.documentKey),n!==0?n:Q(e.largestBatchId,t.largestBatchId))}/**
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
 */const D_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class V_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Vr(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==D_)throw e;A("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&k(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,r)=>{n(t)})}static reject(t){return new g((n,r)=>{r(t)})}static waitFor(t){return new g((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(t){let n=g.resolve(!1);for(const r of t)n=n.next(s=>s?g.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new g((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,n){return new g((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class Po{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new De,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new tr(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=xo(r.target.error);this.V.reject(new tr(t,s))}}static open(t,n,r,s){try{return new Po(n,t.transaction(s,r))}catch(i){throw new tr(n,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(A("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new k_(n)}}class He{constructor(t,n,r){this.name=t,this.version=n,this.p=r,He.S(ss())===12.2&&ge("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return A("SimpleDb","Removing database:",t),qe(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Zl())return!1;if(He.C())return!0;const t=ss(),n=He.S(t),r=0<n&&n<10,s=He.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(A("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new tr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new C(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new tr(t,o))},s.onupgradeneeded=i=>{A("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{A("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=Po.open(this.db,t,i?"readonly":"readwrite",r),l=s(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),g.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(A("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class N_{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return qe(this.k.delete())}}class tr extends C{constructor(t,n){super(p.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Nr(e){return e.name==="IndexedDbTransactionError"}class k_{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(A("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(A("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),qe(r)}add(t){return A("SimpleDb","ADD",this.store.name,t,t),qe(this.store.add(t))}get(t){return qe(this.store.get(t)).next(n=>(n===void 0&&(n=null),A("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return A("SimpleDb","DELETE",this.store.name,t),qe(this.store.delete(t))}count(){return A("SimpleDb","COUNT",this.store.name),qe(this.store.count())}W(t,n){const r=this.options(t,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new g((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,l)=>{o.push(l)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new g((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,n){A("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const s=this.cursor(r);return this.G(s,n)}Z(t){const n=this.cursor({});return new g((r,s)=>{n.onerror=i=>{const o=xo(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new g((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new N_(a),c=n(a.primaryKey,a.value,l);if(c instanceof g){const u=c.catch(h=>(l.done(),g.reject(h)));r.push(u)}l.isDone?s():l.$===null?a.continue():a.continue(l.$)}}).next(()=>g.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function qe(e){return new g((t,n)=>{e.onsuccess=r=>{const s=r.target.result;t(s)},e.onerror=r=>{const s=xo(r.target.error);n(s)}})}let Xa=!1;function xo(e){const t=He.S(ss());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Xa||(Xa=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
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
 */class Do{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Do._e=-1;function $s(e){return e==null}function fs(e){return e===0&&1/e==-1/0}function M_(e){return typeof e=="number"&&Number.isInteger(e)&&!fs(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ya(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ln(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function du(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class ct{constructor(t,n){this.comparator=t,this.root=n||Nt.EMPTY}insert(t,n){return new ct(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(t){return new ct(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Hr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Hr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Hr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Hr(this.root,t,this.comparator,!0)}}class Hr{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Nt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Nt.RED,this.left=s??Nt.EMPTY,this.right=i??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Nt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw k();const t=this.left.check();if(t!==this.right.check())throw k();return t+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw k()}get value(){throw k()}get color(){throw k()}get left(){throw k()}get right(){throw k()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Nt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Lt{constructor(t){this.comparator=t,this.data=new ct(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ja(this.data.getIterator())}getIteratorFrom(t){return new Ja(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Lt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Lt(this.comparator);return n.data=t,n}}class Ja{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class re{constructor(t){this.fields=t,t.sort(Mt.comparator)}static empty(){return new re([])}unionWith(t){let n=new Lt(Mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new re(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return An(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class fu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Wt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fu("Invalid base64 string: "+i):i}}(t);return new Wt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Wt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const O_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ke(e){if(rt(!!e),typeof e=="string"){let t=0;const n=O_.exec(e);if(rt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:mt(e.seconds),nanos:mt(e.nanos)}}function mt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Je(e){return typeof e=="string"?Wt.fromBase64String(e):Wt.fromUint8Array(e)}/**
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
 */function Vo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function No(e){const t=e.mapValue.fields.__previous_value__;return Vo(t)?No(t):t}function _r(e){const t=ke(e.mapValue.fields.__local_write_time__.timestampValue);return new Et(t.seconds,t.nanos)}/**
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
 */class L_{constructor(t,n,r,s,i,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class yr{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new yr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof yr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Kr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ze(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Vo(e)?4:F_(e)?9007199254740991:10:k()}function _e(e,t){if(e===t)return!0;const n=Ze(e);if(n!==Ze(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return _r(e).isEqual(_r(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ke(s.timestampValue),a=ke(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Je(s.bytesValue).isEqual(Je(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return mt(s.geoPointValue.latitude)===mt(i.geoPointValue.latitude)&&mt(s.geoPointValue.longitude)===mt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return mt(s.integerValue)===mt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=mt(s.doubleValue),a=mt(i.doubleValue);return o===a?fs(o)===fs(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return An(e.arrayValue.values||[],t.arrayValue.values||[],_e);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Ya(o)!==Ya(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!_e(o[l],a[l])))return!1;return!0}(e,t);default:return k()}}function vr(e,t){return(e.values||[]).find(n=>_e(n,t))!==void 0}function Rn(e,t){if(e===t)return 0;const n=Ze(e),r=Ze(t);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=mt(i.integerValue||i.doubleValue),l=mt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return Za(e.timestampValue,t.timestampValue);case 4:return Za(_r(e),_r(t));case 5:return Q(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Je(i),l=Je(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Q(a[c],l[c]);if(u!==0)return u}return Q(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=Q(mt(i.latitude),mt(o.latitude));return a!==0?a:Q(mt(i.longitude),mt(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Rn(a[c],l[c]);if(u)return u}return Q(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Kr.mapValue&&o===Kr.mapValue)return 0;if(i===Kr.mapValue)return 1;if(o===Kr.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=Q(l[h],u[h]);if(d!==0)return d;const f=Rn(a[l[h]],c[u[h]]);if(f!==0)return f}return Q(l.length,u.length)}(e.mapValue,t.mapValue);default:throw k()}}function Za(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Q(e,t);const n=ke(e),r=ke(t),s=Q(n.seconds,r.seconds);return s!==0?s:Q(n.nanos,r.nanos)}function bn(e){return Fi(e)}function Fi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=ke(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Je(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return D.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fi(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fi(n.fields[o])}`;return s+"}"}(e.mapValue):k()}function tl(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Bi(e){return!!e&&"integerValue"in e}function ko(e){return!!e&&"arrayValue"in e}function el(e){return!!e&&"nullValue"in e}function nl(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Qr(e){return!!e&&"mapValue"in e}function er(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ln(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=er(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=er(e.arrayValue.values[n]);return t}return Object.assign({},e)}function F_(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ee{constructor(t){this.value=t}static empty(){return new ee({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Qr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=er(n)}setAll(t){let n=Mt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=er(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Qr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return _e(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Qr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Ln(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new ee(er(this.value))}}function pu(e){const t=[];return Ln(e.fields,(n,r)=>{const s=new Mt([n]);if(Qr(r)){const i=pu(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new re(t)}/**
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
 */class jt{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new jt(t,0,O.min(),O.min(),O.min(),ee.empty(),0)}static newFoundDocument(t,n,r,s){return new jt(t,1,n,O.min(),r,s,0)}static newNoDocument(t,n){return new jt(t,2,n,O.min(),O.min(),ee.empty(),0)}static newUnknownDocument(t,n){return new jt(t,3,n,O.min(),O.min(),ee.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ee.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof jt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ps{constructor(t,n){this.position=t,this.inclusive=n}}function rl(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=D.comparator(D.fromName(o.referenceValue),n.key):r=Rn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function sl(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!_e(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Er{constructor(t,n="asc"){this.field=t,this.dir=n}}function B_(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class mu{}class gt extends mu{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new U_(t,n,r):n==="array-contains"?new z_(t,r):n==="in"?new W_(t,r):n==="not-in"?new H_(t,r):n==="array-contains-any"?new K_(t,r):new gt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new j_(t,r):new q_(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rn(n,this.value)):n!==null&&Ze(this.value)===Ze(n)&&this.matchesComparison(Rn(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return k()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ie extends mu{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new ie(t,n)}matches(t){return gu(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function gu(e){return e.op==="and"}function _u(e){return $_(e)&&gu(e)}function $_(e){for(const t of e.filters)if(t instanceof ie)return!1;return!0}function $i(e){if(e instanceof gt)return e.field.canonicalString()+e.op.toString()+bn(e.value);if(_u(e))return e.filters.map(t=>$i(t)).join(",");{const t=e.filters.map(n=>$i(n)).join(",");return`${e.op}(${t})`}}function yu(e,t){return e instanceof gt?function(r,s){return s instanceof gt&&r.op===s.op&&r.field.isEqual(s.field)&&_e(r.value,s.value)}(e,t):e instanceof ie?function(r,s){return s instanceof ie&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&yu(o,s.filters[a]),!0):!1}(e,t):void k()}function vu(e){return e instanceof gt?function(n){return`${n.field.canonicalString()} ${n.op} ${bn(n.value)}`}(e):e instanceof ie?function(n){return n.op.toString()+" {"+n.getFilters().map(vu).join(" ,")+"}"}(e):"Filter"}class U_ extends gt{constructor(t,n,r){super(t,n,r),this.key=D.fromName(r.referenceValue)}matches(t){const n=D.comparator(t.key,this.key);return this.matchesComparison(n)}}class j_ extends gt{constructor(t,n){super(t,"in",n),this.keys=Eu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class q_ extends gt{constructor(t,n){super(t,"not-in",n),this.keys=Eu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Eu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>D.fromName(r.referenceValue))}class z_ extends gt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ko(n)&&vr(n.arrayValue,this.value)}}class W_ extends gt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&vr(this.value.arrayValue,n)}}class H_ extends gt{constructor(t,n){super(t,"not-in",n)}matches(t){if(vr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!vr(this.value.arrayValue,n)}}class K_ extends gt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ko(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vr(this.value.arrayValue,r))}}/**
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
 */class G_{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function il(e,t=null,n=[],r=[],s=null,i=null,o=null){return new G_(e,t,n,r,s,i,o)}function Mo(e){const t=L(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>$i(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),$s(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>bn(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>bn(r)).join(",")),t.ce=n}return t.ce}function Oo(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!B_(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!yu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!sl(e.startAt,t.startAt)&&sl(e.endAt,t.endAt)}function Ui(e){return D.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Fn{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Q_(e,t,n,r,s,i,o,a){return new Fn(e,t,n,r,s,i,o,a)}function Lo(e){return new Fn(e)}function ol(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Tu(e){return e.collectionGroup!==null}function nr(e){const t=L(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Lt(Mt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new Er(i,r))}),n.has(Mt.keyField().canonicalString())||t.le.push(new Er(Mt.keyField(),r))}return t.le}function fe(e){const t=L(e);return t.he||(t.he=X_(t,nr(e))),t.he}function X_(e,t){if(e.limitType==="F")return il(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Er(s.field,i)});const n=e.endAt?new ps(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ps(e.startAt.position,e.startAt.inclusive):null;return il(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function ji(e,t){const n=e.filters.concat([t]);return new Fn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function qi(e,t,n){return new Fn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Us(e,t){return Oo(fe(e),fe(t))&&e.limitType===t.limitType}function Iu(e){return`${Mo(fe(e))}|lt:${e.limitType}`}function dn(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>vu(s)).join(", ")}]`),$s(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>bn(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>bn(s)).join(",")),`Target(${r})`}(fe(e))}; limitType=${e.limitType})`}function js(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):D.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of nr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=rl(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,nr(r),s)||r.endAt&&!function(o,a,l){const c=rl(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,nr(r),s))}(e,t)}function Y_(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function wu(e){return(t,n)=>{let r=!1;for(const s of nr(e)){const i=J_(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function J_(e,t,n){const r=e.field.isKeyField()?D.comparator(t.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?Rn(l,c):k()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return k()}}/**
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
 */class Bn{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ln(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return du(this.inner)}size(){return this.innerSize}}/**
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
 */const Z_=new ct(D.comparator);function we(){return Z_}const Au=new ct(D.comparator);function Qn(...e){let t=Au;for(const n of e)t=t.insert(n.key,n);return t}function Ru(e){let t=Au;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ke(){return rr()}function bu(){return rr()}function rr(){return new Bn(e=>e.toString(),(e,t)=>e.isEqual(t))}const ty=new ct(D.comparator),ey=new Lt(D.comparator);function U(...e){let t=ey;for(const n of e)t=t.add(n);return t}const ny=new Lt(Q);function ry(){return ny}/**
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
 */function Cu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fs(t)?"-0":t}}function Su(e){return{integerValue:""+e}}function sy(e,t){return M_(t)?Su(t):Cu(e,t)}/**
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
 */class qs{constructor(){this._=void 0}}function iy(e,t,n){return e instanceof ms?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Vo(i)&&(i=No(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Tr?xu(e,t):e instanceof Ir?Du(e,t):function(s,i){const o=Pu(s,i),a=al(o)+al(s.Ie);return Bi(o)&&Bi(s.Ie)?Su(a):Cu(s.serializer,a)}(e,t)}function oy(e,t,n){return e instanceof Tr?xu(e,t):e instanceof Ir?Du(e,t):n}function Pu(e,t){return e instanceof gs?function(r){return Bi(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class ms extends qs{}class Tr extends qs{constructor(t){super(),this.elements=t}}function xu(e,t){const n=Vu(t);for(const r of e.elements)n.some(s=>_e(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ir extends qs{constructor(t){super(),this.elements=t}}function Du(e,t){let n=Vu(t);for(const r of e.elements)n=n.filter(s=>!_e(s,r));return{arrayValue:{values:n}}}class gs extends qs{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function al(e){return mt(e.integerValue||e.doubleValue)}function Vu(e){return ko(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function ay(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Tr&&s instanceof Tr||r instanceof Ir&&s instanceof Ir?An(r.elements,s.elements,_e):r instanceof gs&&s instanceof gs?_e(r.Ie,s.Ie):r instanceof ms&&s instanceof ms}(e.transform,t.transform)}class ly{constructor(t,n){this.version=t,this.transformResults=n}}class pe{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new pe}static exists(t){return new pe(void 0,t)}static updateTime(t){return new pe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Xr(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class zs{}function Nu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Fo(e.key,pe.none()):new kr(e.key,e.data,pe.none());{const n=e.data,r=ee.empty();let s=new Lt(Mt.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new en(e.key,r,new re(s.toArray()),pe.none())}}function cy(e,t,n){e instanceof kr?function(s,i,o){const a=s.value.clone(),l=cl(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof en?function(s,i,o){if(!Xr(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=cl(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(ku(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function sr(e,t,n,r){return e instanceof kr?function(i,o,a,l){if(!Xr(i.precondition,o))return a;const c=i.value.clone(),u=ul(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof en?function(i,o,a,l){if(!Xr(i.precondition,o))return a;const c=ul(i.fieldTransforms,l,o),u=o.data;return u.setAll(ku(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return Xr(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function uy(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Pu(r.transform,s||null);i!=null&&(n===null&&(n=ee.empty()),n.set(r.field,i))}return n||null}function ll(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&An(r,s,(i,o)=>ay(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class kr extends zs{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class en extends zs{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ku(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function cl(e,t,n){const r=new Map;rt(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,oy(o,a,n[s]))}return r}function ul(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,iy(i,o,t))}return r}class Fo extends zs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hy extends zs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dy{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&cy(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=sr(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=sr(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=bu();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Nu(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(O.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),U())}isEqual(t){return this.batchId===t.batchId&&An(this.mutations,t.mutations,(n,r)=>ll(n,r))&&An(this.baseMutations,t.baseMutations,(n,r)=>ll(n,r))}}class Bo{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){rt(t.mutations.length===r.length);let s=function(){return ty}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Bo(t,n,r,s)}}/**
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
 */class fy{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class py{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var pt,H;function my(e){switch(e){default:return k();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Mu(e){if(e===void 0)return ge("GRPC error has no .code"),p.UNKNOWN;switch(e){case pt.OK:return p.OK;case pt.CANCELLED:return p.CANCELLED;case pt.UNKNOWN:return p.UNKNOWN;case pt.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case pt.INTERNAL:return p.INTERNAL;case pt.UNAVAILABLE:return p.UNAVAILABLE;case pt.UNAUTHENTICATED:return p.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case pt.NOT_FOUND:return p.NOT_FOUND;case pt.ALREADY_EXISTS:return p.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return p.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case pt.ABORTED:return p.ABORTED;case pt.OUT_OF_RANGE:return p.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return p.UNIMPLEMENTED;case pt.DATA_LOSS:return p.DATA_LOSS;default:return k()}}(H=pt||(pt={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gy(){return new TextEncoder}/**
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
 */const _y=new yn([4294967295,4294967295],0);function hl(e){const t=gy().encode(e),n=new y_;return n.update(t),new Uint8Array(n.digest())}function dl(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new yn([n,r],0),new yn([s,i],0)]}class $o{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xn(`Invalid padding: ${n}`);if(r<0)throw new Xn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Xn(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Xn(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=yn.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(yn.fromNumber(r)));return s.compare(_y)===1&&(s=new yn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=hl(t),[r,s]=dl(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new $o(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=hl(t),[r,s]=dl(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Xn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ws{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Mr.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Ws(O.min(),s,new ct(Q),we(),U())}}class Mr{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Mr(r,n,U(),U(),U())}}/**
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
 */class Yr{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class Ou{constructor(t,n){this.targetId=t,this.fe=n}}class Lu{constructor(t,n,r=Wt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class fl{constructor(){this.ge=0,this.pe=ml(),this.ye=Wt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=U(),n=U(),r=U();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:k()}}),new Mr(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=ml()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,rt(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class yy{constructor(t){this.Le=t,this.ke=new Map,this.qe=we(),this.Qe=pl(),this.Ke=new ct(Q)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:k()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Ui(i))if(r===0){const o=new D(i.path);this.We(n,o,jt.newNoDocument(o,O.min()))}else rt(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Je(r).toUint8Array()}catch(l){if(l instanceof fu)return wn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new $o(o,s,i)}catch(l){return wn(l instanceof Xn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Ui(a.target)){const l=new D(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,jt.newNoDocument(l,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=U();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new Ws(t,n,this.Ke,this.qe,r);return this.qe=we(),this.Qe=pl(),this.Ke=new ct(Q),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new fl,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new Lt(Q),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||A("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new fl),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function pl(){return new ct(D.comparator)}function ml(){return new ct(D.comparator)}const vy={asc:"ASCENDING",desc:"DESCENDING"},Ey={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ty={and:"AND",or:"OR"};class Iy{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function zi(e,t){return e.useProto3Json||$s(t)?t:{value:t}}function _s(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Fu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function wy(e,t){return _s(e,t.toTimestamp())}function me(e){return rt(!!e),O.fromTimestamp(function(n){const r=ke(n);return new Et(r.seconds,r.nanos)}(e))}function Uo(e,t){return Wi(e,t).canonicalString()}function Wi(e,t){const n=function(s){return new ot(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Bu(e){const t=ot.fromString(e);return rt(zu(t)),t}function Hi(e,t){return Uo(e.databaseId,t.path)}function fi(e,t){const n=Bu(t);if(n.get(1)!==e.databaseId.projectId)throw new C(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new C(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new D(Uu(n))}function $u(e,t){return Uo(e.databaseId,t)}function Ay(e){const t=Bu(e);return t.length===4?ot.emptyPath():Uu(t)}function Ki(e){return new ot(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Uu(e){return rt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function gl(e,t,n){return{name:Hi(e,t),fields:n.value.mapValue.fields}}function Ry(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:k()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(rt(u===void 0||typeof u=="string"),Wt.fromBase64String(u||"")):(rt(u===void 0||u instanceof Uint8Array),Wt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?p.UNKNOWN:Mu(c.code);return new C(u,c.message||"")}(o);n=new Lu(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=fi(e,r.document.name),i=me(r.document.updateTime),o=r.document.createTime?me(r.document.createTime):O.min(),a=new ee({mapValue:{fields:r.document.fields}}),l=jt.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Yr(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=fi(e,r.document),i=r.readTime?me(r.readTime):O.min(),o=jt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Yr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=fi(e,r.document),i=r.removedTargetIds||[];n=new Yr([],i,s,null)}else{if(!("filter"in t))return k();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new py(s,i),a=r.targetId;n=new Ou(a,o)}}return n}function by(e,t){let n;if(t instanceof kr)n={update:gl(e,t.key,t.value)};else if(t instanceof Fo)n={delete:Hi(e,t.key)};else if(t instanceof en)n={update:gl(e,t.key,t.data),updateMask:My(t.fieldMask)};else{if(!(t instanceof hy))return k();n={verify:Hi(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ms)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Tr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ir)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof gs)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw k()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:k()}(e,t.precondition)),n}function Cy(e,t){return e&&e.length>0?(rt(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?me(s.updateTime):me(i);return o.isEqual(O.min())&&(o=me(i)),new ly(o,s.transformResults||[])}(n,t))):[]}function Sy(e,t){return{documents:[$u(e,t.path)]}}function Py(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$u(e,s);const i=function(c){if(c.length!==0)return qu(ie.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:fn(d.field),direction:Vy(d.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=zi(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ut:n,parent:s}}function xy(e){let t=Ay(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){rt(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=ju(h);return d instanceof ie&&_u(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(E){return new Er(pn(E.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,$s(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new ps(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new ps(f,d)}(n.endAt)),Q_(t,s,o,i,a,"F",l,c)}function Dy(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return k()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function ju(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=pn(n.unaryFilter.field);return gt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=pn(n.unaryFilter.field);return gt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=pn(n.unaryFilter.field);return gt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=pn(n.unaryFilter.field);return gt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return k()}}(e):e.fieldFilter!==void 0?function(n){return gt.create(pn(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return k()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return ie.create(n.compositeFilter.filters.map(r=>ju(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return k()}}(n.compositeFilter.op))}(e):k()}function Vy(e){return vy[e]}function Ny(e){return Ey[e]}function ky(e){return Ty[e]}function fn(e){return{fieldPath:e.canonicalString()}}function pn(e){return Mt.fromServerFormat(e.fieldPath)}function qu(e){return e instanceof gt?function(n){if(n.op==="=="){if(nl(n.value))return{unaryFilter:{field:fn(n.field),op:"IS_NAN"}};if(el(n.value))return{unaryFilter:{field:fn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(nl(n.value))return{unaryFilter:{field:fn(n.field),op:"IS_NOT_NAN"}};if(el(n.value))return{unaryFilter:{field:fn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fn(n.field),op:Ny(n.op),value:n.value}}}(e):e instanceof ie?function(n){const r=n.getFilters().map(s=>qu(s));return r.length===1?r[0]:{compositeFilter:{op:ky(n.op),filters:r}}}(e):k()}function My(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function zu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Se{constructor(t,n,r,s,i=O.min(),o=O.min(),a=Wt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Se(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Se(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Oy{constructor(t){this.ct=t}}function Ly(e){const t=xy({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?qi(t,t.limit,"L"):t}/**
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
 */class Fy{constructor(){this._n=new By}addToCollectionParentIndex(t,n){return this._n.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}deleteAllFieldIndexes(t){return g.resolve()}createTargetIndexes(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(Ne.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(Ne.min())}updateCollectionGroup(t,n,r){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class By{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Lt(ot.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Lt(ot.comparator)).toArray()}}/**
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
 */class Cn{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Cn(0)}static Bn(){return new Cn(-1)}}/**
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
 */class $y{constructor(){this.changes=new Bn(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,jt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?g.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Uy{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class jy{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&sr(r.mutation,s,re.empty(),Et.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,U()).next(()=>r))}getLocalViewOfDocuments(t,n,r=U()){const s=Ke();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Qn();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ke();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,U()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=we();const o=rr(),a=function(){return rr()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof en)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),sr(u.mutation,c,u.mutation.getFieldMask(),Et.now())):o.set(c.key,re.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new Uy(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=rr();let s=new ct((o,a)=>o-a),i=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||re.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||U()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=bu();u.forEach(d=>{if(!i.has(d)){const f=Nu(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return D.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Tu(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):g.resolve(Ke());let a=-1,l=i;return o.next(c=>g.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?g.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,l,c,U())).next(u=>({batchId:a,changes:Ru(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new D(n)).next(r=>{let s=Qn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=Qn();return this.indexManager.getCollectionParents(t,i).next(a=>g.forEach(a,l=>{const c=function(h,d){return new Fn(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,jt.newInvalidDocument(u)))});let a=Qn();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&sr(u.mutation,c,re.empty(),Et.now()),js(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class qy{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return g.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:me(s.createTime)}}(n)),g.resolve()}getNamedQuery(t,n){return g.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:Ly(s.bundledQuery),readTime:me(s.readTime)}}(n)),g.resolve()}}/**
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
 */class zy{constructor(){this.overlays=new ct(D.comparator),this.hr=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ke();return g.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),g.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),g.resolve()}getOverlaysForCollection(t,n,r){const s=Ke(),i=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return g.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new ct((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Ke(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ke(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return g.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fy(n,r));let i=this.hr.get(n);i===void 0&&(i=U(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class jo{constructor(){this.Pr=new Lt(wt.Ir),this.Tr=new Lt(wt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new wt(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new wt(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new D(new ot([])),r=new wt(n,t),s=new wt(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new D(new ot([])),r=new wt(n,t),s=new wt(n,t+1);let i=U();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new wt(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class wt{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return D.comparator(t.key,n.key)||Q(t.pr,n.pr)}static Er(t,n){return Q(t.pr,n.pr)||D.comparator(t.key,n.key)}}/**
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
 */class Wy{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Lt(wt.Ir)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dy(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new wt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new wt(n,0),s=new wt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Lt(Q);return n.forEach(s=>{const i=new wt(s,0),o=new wt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),g.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;D.isDocumentKey(i)||(i=i.child(""));const o=new wt(new D(i),0);let a=new Lt(Q);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.pr)),!0)},o),g.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){rt(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return g.forEach(n.mutations,s=>{const i=new wt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new wt(n,0),s=this.wr.firstAfterOrEqual(r);return g.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Hy{constructor(t){this.vr=t,this.docs=function(){return new ct(D.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return g.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(t,n){let r=we();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():jt.newInvalidDocument(s))}),g.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=we();const o=n.path,a=new D(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||x_(P_(u),r)<=0||(s.has(u.key)||js(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(t,n,r,s){k()}Fr(t,n){return g.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Ky(this)}getSize(t){return g.resolve(this.size)}}class Ky extends $y{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),g.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
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
 */class Gy{constructor(t){this.persistence=t,this.Mr=new Bn(n=>Mo(n),Oo),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.Or=0,this.Nr=new jo,this.targetCount=0,this.Br=Cn.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),g.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new Cn(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.qn(n),g.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),g.waitFor(i).next(()=>s)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return g.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),g.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),g.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return g.resolve(r)}containsKey(t,n){return g.resolve(this.Nr.containsKey(n))}}/**
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
 */class Qy{constructor(t,n){this.Lr={},this.overlays={},this.kr=new Do(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Gy(this),this.indexManager=new Fy,this.remoteDocumentCache=function(s){return new Hy(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Oy(n),this.$r=new qy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new zy,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new Wy(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){A("MemoryPersistence","Starting transaction:",t);const s=new Xy(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return g.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class Xy extends V_{constructor(t){super(),this.currentSequenceNumber=t}}class qo{constructor(t){this.persistence=t,this.zr=new jo,this.jr=null}static Hr(t){return new qo(t)}get Jr(){if(this.jr)return this.jr;throw k()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),g.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),g.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Jr,r=>{const s=D.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,O.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return g.or([()=>g.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
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
 */class zo{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=U(),s=U();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new zo(t,n.fromCache,r,s)}}/**
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
 */class Yy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Jy{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Jp()?8:He.v(ss())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Yy;return this.Ji(t,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?(Hn()<=K.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",dn(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),g.resolve()):(Hn()<=K.DEBUG&&A("QueryEngine","Query:",dn(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Hn()<=K.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",dn(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,fe(n))):g.resolve())}ji(t,n){if(ol(n))return g.resolve(null);let r=fe(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=qi(n,null,"F"),r=fe(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=U(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(t,qi(n,null,"F")):this.es(t,c,n,l)}))})))}Hi(t,n,r,s){return ol(n)||s.isEqual(O.min())?g.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?g.resolve(null):(Hn()<=K.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),dn(n)),this.es(t,o,n,S_(s,-1)).next(a=>a))})}Zi(t,n){let r=new Lt(wu(t));return n.forEach((s,i)=>{js(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return Hn()<=K.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",dn(n)),this.zi.getDocumentsMatchingQuery(t,n,Ne.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Zy{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new ct(Q),this.rs=new Bn(i=>Mo(i),Oo),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new jy(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function tv(e,t,n,r){return new Zy(e,t,n,r)}async function Wu(e,t){const n=L(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=U();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function ev(e,t){const n=L(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=g.resolve();return d.forEach(E=>{f=f.next(()=>u.getEntry(l,E)).next(w=>{const y=c.docVersions.get(E);rt(y!==null),w.version.compareTo(y)<0&&(h.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),u.addEntry(w)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=U();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Hu(e){const t=L(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function nv(e,t){const n=L(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];t.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(Wt.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(w,y,I){return w.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,f,u)&&a.push(n.Qr.updateTargetData(i,f))});let l=we(),c=U();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(rv(i,o,t.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual(O.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ns=s,i))}function rv(e,t,n){let r=U(),s=U();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=we();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(O.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:s}})}function sv(e,t){const n=L(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function iv(e,t){const n=L(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,g.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Se(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function Gi(e,t,n){const r=L(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Nr(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function _l(e,t,n){const r=L(e);let s=O.min(),i=U();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=L(l),d=h.rs.get(u);return d!==void 0?g.resolve(h.ns.get(d)):h.Qr.getTargetData(c,u)}(r,o,fe(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?s:O.min(),n?i:U())).next(a=>(ov(r,Y_(t),a),{documents:a,hs:i})))}function ov(e,t,n){let r=e.ss.get(t)||O.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class yl{constructor(){this.activeTargetIds=ry()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class av{constructor(){this.no=new yl,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new yl,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class lv{io(t){}shutdown(){}}/**
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
 */class vl{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gr=null;function pi(){return Gr===null?Gr=function(){return 268435456+Math.round(2147483648*Math.random())}():Gr++,"0x"+Gr.toString(16)}/**
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
 */const cv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class uv{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const $t="WebChannelConnection";class hv extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=pi(),l=this.bo(n,r.toUriEncodedString());A("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,o),this.Co(n,l,c,s).then(u=>(A("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw wn("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+On}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=cv[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,s){const i=pi();return new Promise((o,a)=>{const l=new __;l.setWithCredentials(!0),l.listenOnce(m_.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case di.NO_ERROR:const u=l.getResponseJson();A($t,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case di.TIMEOUT:A($t,`RPC '${t}' ${i} timed out`),a(new C(p.DEADLINE_EXCEEDED,"Request time out"));break;case di.HTTP_ERROR:const h=l.getStatus();if(A($t,`RPC '${t}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const E=function(y){const I=y.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(I)>=0?I:p.UNKNOWN}(f.status);a(new C(E,f.message))}else a(new C(p.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new C(p.UNAVAILABLE,"Connection failed."));break;default:k()}}finally{A($t,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);A($t,`RPC '${t}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Fo(t,n,r){const s=pi(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=f_(),a=p_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");A($t,`Creating RPC '${t}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const E=new uv({lo:y=>{f?A($t,`Not sending because RPC '${t}' stream ${s} is closed:`,y):(d||(A($t,`Opening RPC '${t}' stream ${s} transport.`),h.open(),d=!0),A($t,`RPC '${t}' stream ${s} sending:`,y),h.send(y))},ho:()=>h.close()}),w=(y,I,S)=>{y.listen(I,b=>{try{S(b)}catch(v){setTimeout(()=>{throw v},0)}})};return w(h,Wr.EventType.OPEN,()=>{f||A($t,`RPC '${t}' stream ${s} transport opened.`)}),w(h,Wr.EventType.CLOSE,()=>{f||(f=!0,A($t,`RPC '${t}' stream ${s} transport closed`),E.Vo())}),w(h,Wr.EventType.ERROR,y=>{f||(f=!0,wn($t,`RPC '${t}' stream ${s} transport errored:`,y),E.Vo(new C(p.UNAVAILABLE,"The operation could not be completed")))}),w(h,Wr.EventType.MESSAGE,y=>{var I;if(!f){const S=y.data[0];rt(!!S);const b=S,v=b.error||((I=b[0])===null||I===void 0?void 0:I.error);if(v){A($t,`RPC '${t}' stream ${s} received error:`,v);const V=v.status;let x=function(B){const z=pt[B];if(z!==void 0)return Mu(z)}(V),T=v.message;x===void 0&&(x=p.INTERNAL,T="Unknown error status: "+V+" with message "+v.message),f=!0,E.Vo(new C(x,T)),h.close()}else A($t,`RPC '${t}' stream ${s} received:`,S),E.mo(S)}}),w(a,g_.STAT_EVENT,y=>{y.stat===Ga.PROXY?A($t,`RPC '${t}' stream ${s} detected buffering proxy`):y.stat===Ga.NOPROXY&&A($t,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.Ro()},0),E}}function mi(){return typeof document<"u"?document:null}/**
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
 */function Hs(e){return new Iy(e,!0)}/**
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
 */class Ku{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&A("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class Gu{constructor(t,n,r,s,i,o,a,l){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Ku(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(ge(n.toString()),ge("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{t(()=>{const s=new C(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return A("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dv extends Gu{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=Ry(this.serializer,t),r=function(i){if(!("targetChange"in i))return O.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?O.min():o.readTime?me(o.readTime):O.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=Ki(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Ui(l)?{documents:Sy(i,l)}:{query:Py(i,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Fu(i,o.resumeToken);const c=zi(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(O.min())>0){a.readTime=_s(i,o.snapshotVersion.toTimestamp());const c=zi(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=Dy(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=Ki(this.serializer),n.removeTarget=t,this.t_(n)}}class fv extends Gu{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if(rt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=Cy(t.writeResults,t.commitTime),r=me(t.commitTime);return this.listener.T_(r,n)}return rt(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=Ki(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>by(this.serializer,r))};this.t_(n)}}/**
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
 */class pv extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new C(p.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,Wi(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(p.UNKNOWN,i.toString())})}vo(t,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Wi(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new C(p.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class mv{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(ge(n),this.g_=!1):A("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class gv{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{nn(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=L(l);c.v_.add(4),await Or(c),c.x_.set("Unknown"),c.v_.delete(4),await Ks(c)}(this))})}),this.x_=new mv(r,s)}}async function Ks(e){if(nn(e))for(const t of e.F_)await t(!0)}async function Or(e){for(const t of e.F_)await t(!1)}function Qu(e,t){const n=L(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),Ko(n)?Ho(n):$n(n).Jo()&&Wo(n,t))}function Xu(e,t){const n=L(e),r=$n(n);n.C_.delete(t),r.Jo()&&Yu(n,t),n.C_.size===0&&(r.Jo()?r.Xo():nn(n)&&n.x_.set("Unknown"))}function Wo(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}$n(e).c_(t)}function Yu(e,t){e.O_.Oe(t),$n(e).l_(t)}function Ho(e){e.O_=new yy({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),$n(e).start(),e.x_.p_()}function Ko(e){return nn(e)&&!$n(e).Ho()&&e.C_.size>0}function nn(e){return L(e).v_.size===0}function Ju(e){e.O_=void 0}async function _v(e){e.C_.forEach((t,n)=>{Wo(e,t)})}async function yv(e,t){Ju(e),Ko(e)?(e.x_.S_(t),Ho(e)):e.x_.set("Unknown")}async function vv(e,t,n){if(e.x_.set("Online"),t instanceof Lu&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(e,t)}catch(r){A("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ys(e,r)}else if(t instanceof Yr?e.O_.$e(t):t instanceof Ou?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(O.min()))try{const r=await Hu(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.C_.get(c);u&&i.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.C_.get(l);if(!u)return;i.C_.set(l,u.withResumeToken(Wt.EMPTY_BYTE_STRING,u.snapshotVersion)),Yu(i,l);const h=new Se(u.target,l,c,u.sequenceNumber);Wo(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){A("RemoteStore","Failed to raise snapshot:",r),await ys(e,r)}}async function ys(e,t,n){if(!Nr(t))throw t;e.v_.add(1),await Or(e),e.x_.set("Offline"),n||(n=()=>Hu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Ks(e)})}function Zu(e,t){return t().catch(n=>ys(e,n,t))}async function Gs(e){const t=L(e),n=Me(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;Ev(t);)try{const s=await sv(t.localStore,r);if(s===null){t.D_.length===0&&n.Xo();break}r=s.batchId,Tv(t,s)}catch(s){await ys(t,s)}th(t)&&eh(t)}function Ev(e){return nn(e)&&e.D_.length<10}function Tv(e,t){e.D_.push(t);const n=Me(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function th(e){return nn(e)&&!Me(e).Ho()&&e.D_.length>0}function eh(e){Me(e).start()}async function Iv(e){Me(e).d_()}async function wv(e){const t=Me(e);for(const n of e.D_)t.I_(n.mutations)}async function Av(e,t,n){const r=e.D_.shift(),s=Bo.from(r,t,n);await Zu(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Gs(e)}async function Rv(e,t){t&&Me(e).P_&&await async function(r,s){if(function(o){return my(o)&&o!==p.ABORTED}(s.code)){const i=r.D_.shift();Me(r).Zo(),await Zu(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Gs(r)}}(e,t),th(e)&&eh(e)}async function El(e,t){const n=L(e);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const r=nn(n);n.v_.add(3),await Or(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Ks(n)}async function bv(e,t){const n=L(e);t?(n.v_.delete(2),await Ks(n)):t||(n.v_.add(2),await Or(n),n.x_.set("Unknown"))}function $n(e){return e.N_||(e.N_=function(n,r,s){const i=L(n);return i.R_(),new dv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:_v.bind(null,e),To:yv.bind(null,e),u_:vv.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),Ko(e)?Ho(e):e.x_.set("Unknown")):(await e.N_.stop(),Ju(e))})),e.N_}function Me(e){return e.B_||(e.B_=function(n,r,s){const i=L(n);return i.R_(),new fv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:Iv.bind(null,e),To:Rv.bind(null,e),E_:wv.bind(null,e),T_:Av.bind(null,e)}),e.F_.push(async t=>{t?(e.B_.Zo(),await Gs(e)):(await e.B_.stop(),e.D_.length>0&&(A("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.B_}/**
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
 */class Go{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new De,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Go(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qo(e,t){if(ge("AsyncQueue",`${t}: ${e}`),Nr(e))return new C(p.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class vn{constructor(t){this.comparator=t?(n,r)=>t(n,r)||D.comparator(n.key,r.key):(n,r)=>D.comparator(n.key,r.key),this.keyedMap=Qn(),this.sortedSet=new ct(this.comparator)}static emptySet(t){return new vn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof vn)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new vn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Tl{constructor(){this.L_=new ct(D.comparator)}track(t){const n=t.doc.key,r=this.L_.get(n);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(n,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(n):t.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):k():this.L_=this.L_.insert(n,t)}k_(){const t=[];return this.L_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Sn{constructor(t,n,r,s,i,o,a,l,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Sn(t,n,vn.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Us(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Cv{constructor(){this.q_=void 0,this.Q_=[]}}class Sv{constructor(){this.queries=new Bn(t=>Iu(t),Us),this.onlineState="Unknown",this.K_=new Set}}async function Pv(e,t){const n=L(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Cv),s)try{i.q_=await n.onListen(r)}catch(o){const a=Qo(o,`Initialization of query '${dn(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.Q_.push(t),t.U_(n.onlineState),i.q_&&t.W_(i.q_)&&Xo(n)}async function xv(e,t){const n=L(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Dv(e,t){const n=L(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&Xo(n)}function Vv(e,t,n){const r=L(e),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(t)}function Xo(e){e.K_.forEach(t=>{t.next()})}class Nv{constructor(t,n,r){this.query=t,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Sn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.z_?this.H_(t)&&(this.G_.next(t),n=!0):this.J_(t,this.onlineState)&&(this.Y_(t),n=!0),this.j_=t,n}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),n=!0),n}J_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(t){t=Sn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
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
 */class nh{constructor(t){this.key=t}}class rh{constructor(t){this.key=t}}class kv{constructor(t,n){this.query=t,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=U(),this.mutatedKeys=U(),this.ua=wu(t),this.ca=new vn(this.ua)}get la(){return this.oa}ha(t,n){const r=n?n.Pa:new Tl,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const d=s.get(u),f=js(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),w=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?E!==w&&(r.track({type:3,doc:f}),y=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),y=!0,(l&&this.ua(f,l)>0||c&&this.ua(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(f?(o=o.add(f),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((u,h)=>function(f,E){const w=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return k()}};return w(f)-w(E)}(u.type,h.type)||this.ua(u.doc,h.doc)),this.Ta(r),s=s!=null&&s;const a=n&&!s?this.Ea():[],l=this.aa.size===0&&this.current&&!s?1:0,c=l!==this._a;return this._a=l,o.length!==0||c?{snapshot:new Sn(this.query,t.ca,i,o,t.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Tl,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=U(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return t.forEach(r=>{this.aa.has(r)||n.push(new rh(r))}),this.aa.forEach(r=>{t.has(r)||n.push(new nh(r))}),n}Ra(t){this.oa=t.hs,this.aa=U();const n=this.ha(t.documents);return this.applyChanges(n,!0)}Va(){return Sn.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class Mv{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Ov{constructor(t){this.key=t,this.ma=!1}}class Lv{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Bn(a=>Iu(a),Us),this.pa=new Map,this.ya=new Set,this.wa=new ct(D.comparator),this.Sa=new Map,this.ba=new jo,this.Da={},this.Ca=new Map,this.va=Cn.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function Fv(e,t){const n=Gv(e);let r,s;const i=n.ga.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await iv(n.localStore,fe(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Bv(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Qu(n.remoteStore,o)}return s}async function Bv(e,t,n,r,s){e.Ma=(h,d,f)=>async function(w,y,I,S){let b=y.view.ha(I);b.Xi&&(b=await _l(w.localStore,y.query,!1).then(({documents:T})=>y.view.ha(T,b)));const v=S&&S.targetChanges.get(y.targetId),V=S&&S.targetMismatches.get(y.targetId)!=null,x=y.view.applyChanges(b,w.isPrimaryClient,v,V);return wl(w,y.targetId,x.da),x.snapshot}(e,h,d,f);const i=await _l(e.localStore,t,!0),o=new kv(t,i.hs),a=o.ha(i.documents),l=Mr.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),c=o.applyChanges(a,e.isPrimaryClient,l);wl(e,n,c.da);const u=new Mv(t,n,o);return e.ga.set(t,u),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),c.snapshot}async function $v(e,t){const n=L(e),r=n.ga.get(t),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Us(i,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Gi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Xu(n.remoteStore,r.targetId),Qi(n,r.targetId)}).catch(Vr)):(Qi(n,r.targetId),await Gi(n.localStore,r.targetId,!0))}async function Uv(e,t,n){const r=Qv(e);try{const s=await function(o,a){const l=L(o),c=Et.now(),u=a.reduce((f,E)=>f.add(E.key),U());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let E=we(),w=U();return l.os.getEntries(f,u).next(y=>{E=y,E.forEach((I,S)=>{S.isValidDocument()||(w=w.add(I))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,E)).next(y=>{h=y;const I=[];for(const S of a){const b=uy(S,h.get(S.key).overlayedDocument);b!=null&&I.push(new en(S.key,b,pu(b.value.mapValue),pe.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,I,a)}).next(y=>{d=y;const I=y.applyToLocalDocumentSet(h,w);return l.documentOverlayCache.saveOverlays(f,y.batchId,I)})}).then(()=>({batchId:d.batchId,changes:Ru(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Da[o.currentUser.toKey()];c||(c=new ct(Q)),c=c.insert(a,l),o.Da[o.currentUser.toKey()]=c}(r,s.batchId,n),await Lr(r,s.changes),await Gs(r.remoteStore)}catch(s){const i=Qo(s,"Failed to persist write");n.reject(i)}}async function sh(e,t){const n=L(e);try{const r=await nv(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(rt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?rt(o.ma):s.removedDocuments.size>0&&(rt(o.ma),o.ma=!1))}),await Lr(n,r,t)}catch(r){await Vr(r)}}function Il(e,t,n){const r=L(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=L(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.Q_)d.U_(a)&&(c=!0)}),c&&Xo(l)}(r.eventManager,t),s.length&&r.fa.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function jv(e,t,n){const r=L(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Sa.get(t),i=s&&s.key;if(i){let o=new ct(D.comparator);o=o.insert(i,jt.newNoDocument(i,O.min()));const a=U().add(i),l=new Ws(O.min(),new Map,new ct(Q),o,a);await sh(r,l),r.wa=r.wa.remove(i),r.Sa.delete(t),Yo(r)}else await Gi(r.localStore,t,!1).then(()=>Qi(r,t,n)).catch(Vr)}async function qv(e,t){const n=L(e),r=t.batch.batchId;try{const s=await ev(n.localStore,t);oh(n,r,null),ih(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Lr(n,s)}catch(s){await Vr(s)}}async function zv(e,t,n){const r=L(e);try{const s=await function(o,a){const l=L(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(rt(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,t);oh(r,t,n),ih(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Lr(r,s)}catch(s){await Vr(s)}}function ih(e,t){(e.Ca.get(t)||[]).forEach(n=>{n.resolve()}),e.Ca.delete(t)}function oh(e,t,n){const r=L(e);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Da[r.currentUser.toKey()]=s}}function Qi(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(r=>{e.ba.containsKey(r)||ah(e,r)})}function ah(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);n!==null&&(Xu(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),Yo(e))}function wl(e,t,n){for(const r of n)r instanceof nh?(e.ba.addReference(r.key,t),Wv(e,r)):r instanceof rh?(A("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||ah(e,r.key)):k()}function Wv(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(A("SyncEngine","New document in limbo: "+n),e.ya.add(r),Yo(e))}function Yo(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new D(ot.fromString(t)),r=e.va.next();e.Sa.set(r,new Ov(n)),e.wa=e.wa.insert(n,r),Qu(e.remoteStore,new Se(fe(Lo(n.path)),r,"TargetPurposeLimboResolution",Do._e))}}async function Lr(e,t,n){const r=L(e),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=zo.Ki(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.fa.u_(s),await async function(l,c){const u=L(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(c,d=>g.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Nr(h))throw h;A("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ns.get(d),E=f.snapshotVersion,w=f.withLastLimboFreeSnapshotVersion(E);u.ns=u.ns.insert(d,w)}}}(r.localStore,i))}async function Hv(e,t){const n=L(e);if(!n.currentUser.isEqual(t)){A("SyncEngine","User change. New user:",t.toKey());const r=await Wu(n.localStore,t);n.currentUser=t,function(i,o){i.Ca.forEach(a=>{a.forEach(l=>{l.reject(new C(p.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Lr(n,r.us)}}function Kv(e,t){const n=L(e),r=n.Sa.get(t);if(r&&r.ma)return U().add(r.key);{let s=U();const i=n.pa.get(t);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function Gv(e){const t=L(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=sh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kv.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=jv.bind(null,t),t.fa.u_=Dv.bind(null,t.eventManager),t.fa.xa=Vv.bind(null,t.eventManager),t}function Qv(e){const t=L(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=qv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=zv.bind(null,t),t}class Al{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Hs(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return tv(this.persistence,new Jy,t.initialUser,this.serializer)}createPersistence(t){return new Qy(qo.Hr,this.serializer)}createSharedClientState(t){return new av}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Xv{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Il(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hv.bind(null,this.syncEngine),await bv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Sv}()}createDatastore(t){const n=Hs(t.databaseInfo.databaseId),r=function(i){return new hv(i)}(t.databaseInfo);return function(i,o,a,l){return new pv(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new gv(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Il(this.syncEngine,n,0),function(){return vl.D()?new vl:new lv}())}createSyncEngine(t,n){return function(s,i,o,a,l,c,u){const h=new Lv(s,i,o,a,l,c);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=L(r);A("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Or(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class Yv{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):ge("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class Jv{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ut.UNAUTHENTICATED,this.clientId=hu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{A("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(A("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new De;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Qo(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function gi(e,t){e.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Wu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Rl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await tE(e);A("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>El(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>El(t.remoteStore,s)),e._onlineComponents=t}function Zv(e){return e.name==="FirebaseError"?e.code===p.FAILED_PRECONDITION||e.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function tE(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){A("FirestoreClient","Using user provided OfflineComponentProvider");try{await gi(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Zv(n))throw n;wn("Error using user provided cache. Falling back to memory cache: "+n),await gi(e,new Al)}}else A("FirestoreClient","Using default OfflineComponentProvider"),await gi(e,new Al);return e._offlineComponents}async function lh(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(A("FirestoreClient","Using user provided OnlineComponentProvider"),await Rl(e,e._uninitializedComponentsProvider._online)):(A("FirestoreClient","Using default OnlineComponentProvider"),await Rl(e,new Xv))),e._onlineComponents}function eE(e){return lh(e).then(t=>t.syncEngine)}async function bl(e){const t=await lh(e),n=t.eventManager;return n.onListen=Fv.bind(null,t.syncEngine),n.onUnlisten=$v.bind(null,t.syncEngine),n}/**
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
 */function ch(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Cl=new Map;/**
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
 */function uh(e,t,n){if(!n)throw new C(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function nE(e,t,n,r){if(t===!0&&r===!0)throw new C(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Sl(e){if(!D.isDocumentKey(e))throw new C(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Pl(e){if(D.isDocumentKey(e))throw new C(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Qs(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":k()}function En(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new C(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qs(e);throw new C(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class xl{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new C(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new C(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}nE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ch((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new C(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new C(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new C(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Xs{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new C(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xl(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new v_;switch(r.type){case"firstParty":return new w_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new C(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Cl.get(n);r&&(A("ComponentProvider","Removing Datastore"),Cl.delete(n),r.terminate())}(this),Promise.resolve()}}function rE(e,t,n,r={}){var s;const i=(e=En(e,Xs))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ut.MOCK_USER;else{a=Xp(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new C(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ut(c)}e._authCredentials=new E_(new uu(a,l))}}/**
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
 */class rn{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new rn(this.firestore,t,this._query)}}class Xt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ve(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Xt(this.firestore,t,this._key)}}class Ve extends rn{constructor(t,n,r){super(t,n,Lo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Xt(this.firestore,null,new D(t))}withConverter(t){return new Ve(this.firestore,t,this._path)}}function Dl(e,t,...n){if(e=Qe(e),uh("collection","path",t),e instanceof Xs){const r=ot.fromString(t,...n);return Pl(r),new Ve(e,null,r)}{if(!(e instanceof Xt||e instanceof Ve))throw new C(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ot.fromString(t,...n));return Pl(r),new Ve(e.firestore,null,r)}}function hh(e,t,...n){if(e=Qe(e),arguments.length===1&&(t=hu.newId()),uh("doc","path",t),e instanceof Xs){const r=ot.fromString(t,...n);return Sl(r),new Xt(e,null,new D(r))}{if(!(e instanceof Xt||e instanceof Ve))throw new C(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ot.fromString(t,...n));return Sl(r),new Xt(e.firestore,e instanceof Ve?e.converter:null,new D(r))}}/**
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
 */class sE{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new Ku(this,"async_queue_retry"),this._u=()=>{const n=mi();n&&A("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=mi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=mi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new De;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!Nr(t))throw t;A("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ge("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const s=Go.createAndSchedule(this,t,n,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&k()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}function Vl(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class wr extends Xs{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new sE}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fh(this),this._firestoreClient.terminate()}}function iE(e,t){const n=typeof e=="object"?e:eg(),r=typeof e=="string"?e:t||"(default)",s=Ym(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Gp("firestore");i&&rE(s,...i)}return s}function dh(e){return e._firestoreClient||fh(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function fh(e){var t,n,r;const s=e._freezeSettings(),i=function(a,l,c,u){return new L_(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,ch(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Jv(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Pn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pn(Wt.fromBase64String(t))}catch(n){throw new C(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Pn(Wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Jo{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new C(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ph{constructor(t){this._methodName=t}}/**
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
 */class Zo{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new C(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new C(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Q(this._lat,t._lat)||Q(this._long,t._long)}}/**
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
 */const oE=/^__.*__$/;class aE{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new en(t,this.data,this.fieldMask,n,this.fieldTransforms):new kr(t,this.data,n,this.fieldTransforms)}}function mh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw k()}}class ta{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new ta(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Au({path:r,Vu:!1});return s.mu(t),s}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return vs(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(mh(this.du)&&oE.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class lE{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Hs(t)}Su(t,n,r,s=!1){return new ta({du:t,methodName:n,wu:r,path:Mt.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gh(e){const t=e._freezeSettings(),n=Hs(e._databaseId);return new lE(e._databaseId,!!t.ignoreUndefinedProperties,n)}function cE(e,t,n,r,s,i={}){const o=e.Su(i.merge||i.mergeFields?2:0,t,n,s);vh("Data must be an object, but it was:",o,r);const a=_h(r,o);let l,c;if(i.merge)l=new re(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=hE(t,h,n);if(!o.contains(d))throw new C(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);fE(u,d)||u.push(d)}l=new re(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new aE(new ee(a),l,c)}function uE(e,t,n,r=!1){return ea(n,e.Su(r?4:3,t))}function ea(e,t){if(yh(e=Qe(e)))return vh("Unsupported field value:",t,e),_h(e,t);if(e instanceof ph)return function(r,s){if(!mh(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=ea(a,s.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=Qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Et.fromDate(r);return{timestampValue:_s(s.serializer,i)}}if(r instanceof Et){const i=new Et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_s(s.serializer,i)}}if(r instanceof Zo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pn)return{bytesValue:Fu(s.serializer,r._byteString)};if(r instanceof Xt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Uo(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${Qs(r)}`)}(e,t)}function _h(e,t){const n={};return du(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ln(e,(r,s)=>{const i=ea(s,t.Ru(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function yh(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Et||e instanceof Zo||e instanceof Pn||e instanceof Xt||e instanceof ph)}function vh(e,t,n){if(!yh(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Qs(n);throw r==="an object"?t.pu(e+" a custom object"):t.pu(e+" "+r)}}function hE(e,t,n){if((t=Qe(t))instanceof Jo)return t._internalPath;if(typeof t=="string")return Eh(e,t);throw vs("Field path arguments must be of type string or ",e,!1,void 0,n)}const dE=new RegExp("[~\\*/\\[\\]]");function Eh(e,t,n){if(t.search(dE)>=0)throw vs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Jo(...t.split("."))._internalPath}catch{throw vs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function vs(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new C(p.INVALID_ARGUMENT,a+e+l)}function fE(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class Th{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new pE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(na("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pE extends Th{data(){return super.data()}}function na(e,t){return typeof t=="string"?Eh(e,t):t instanceof Jo?t._internalPath:t._delegate._internalPath}/**
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
 */function mE(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new C(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ra{}class Ih extends ra{}function gE(e,t,...n){let r=[];t instanceof ra&&r.push(t),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof ia).length,a=i.filter(l=>l instanceof sa).length;if(o>1||o>0&&a>0)throw new C(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class sa extends Ih{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new sa(t,n,r)}_apply(t){const n=this._parse(t);return wh(t._query,n),new rn(t.firestore,t.converter,ji(t._query,n))}_parse(t){const n=gh(t.firestore);return function(i,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new C(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){kl(h,u);const f=[];for(const E of h)f.push(Nl(l,i,E));d={arrayValue:{values:f}}}else d=Nl(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||kl(h,u),d=uE(a,o,h,u==="in"||u==="not-in");return gt.create(c,u,d)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class ia extends ra{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new ia(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ie.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)wh(o,l),o=ji(o,l)}(t._query,n),new rn(t.firestore,t.converter,ji(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class oa extends Ih{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new oa(t,n)}_apply(t){const n=function(s,i,o){if(s.startAt!==null)throw new C(p.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new C(p.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Er(i,o)}(t._query,this._field,this._direction);return new rn(t.firestore,t.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Fn(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function _E(e,t="asc"){const n=t,r=na("orderBy",e);return oa._create(r,n)}function Nl(e,t,n){if(typeof(n=Qe(n))=="string"){if(n==="")throw new C(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tu(t)&&n.indexOf("/")!==-1)throw new C(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ot.fromString(n));if(!D.isDocumentKey(r))throw new C(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return tl(e,new D(r))}if(n instanceof Xt)return tl(e,n._key);throw new C(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qs(n)}.`)}function kl(e,t){if(!Array.isArray(e)||e.length===0)throw new C(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function wh(e,t){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new C(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new C(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class yE{convertValue(t,n="none"){switch(Ze(t)){case 0:return null;case 1:return t.booleanValue;case 2:return mt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Je(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw k()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Ln(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new Zo(mt(t.latitude),mt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=No(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_r(t));default:return null}}convertTimestamp(t){const n=ke(t);return new Et(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=ot.fromString(t);rt(zu(r));const s=new yr(r.get(1),r.get(3)),i=new D(r.popFirst(5));return s.isEqual(n)||ge(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function vE(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class Yn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ah extends Th{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Jr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(na("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Jr extends Ah{data(t={}){return super.data(t)}}class EE{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Yn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Jr(this._firestore,this._userDataWriter,r.key,r,new Yn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Jr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Yn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Jr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Yn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:TE(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function TE(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return k()}}class Rh extends yE{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Xt(this.firestore,null,n)}}function IE(e){return bh(En(e.firestore,wr),[new Fo(e._key,pe.none())])}function wE(e,t){const n=En(e.firestore,wr),r=hh(e),s=vE(e.converter,t);return bh(n,[cE(gh(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,pe.exists(!1))]).then(()=>r)}function AE(e,...t){var n,r,s;e=Qe(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Vl(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Vl(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(e instanceof Xt)c=En(e.firestore,wr),u=Lo(e._key.path),l={next:h=>{t[o]&&t[o](RE(c,e,h))},error:t[o+1],complete:t[o+2]};else{const h=En(e,rn);c=En(h.firestore,wr),u=h._query;const d=new Rh(c);l={next:f=>{t[o]&&t[o](new EE(c,d,h,f))},error:t[o+1],complete:t[o+2]},mE(e._query)}return function(d,f,E,w){const y=new Yv(w),I=new Nv(f,y,E);return d.asyncQueue.enqueueAndForget(async()=>Pv(await bl(d),I)),()=>{y.La(),d.asyncQueue.enqueueAndForget(async()=>xv(await bl(d),I))}}(dh(c),u,a,l)}function bh(e,t){return function(r,s){const i=new De;return r.asyncQueue.enqueueAndForget(async()=>Uv(await eE(r),s,i)),i.promise}(dh(e),t)}function RE(e,t,n){const r=n.docs.get(t._key),s=new Rh(e);return new Ah(e,s,t._key,r,new Yn(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){On=s})(tg),os(new or("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new wr(new T_(r.getProvider("auth-internal")),new R_(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new C(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yr(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),gn(Qa,"4.4.2",t),gn(Qa,"4.4.2","esm2017")})();const bE={apiKey:"AIzaSyCA0izdqP7303cYmdsYHgHGTQrI8q0qKvs",authDomain:"seongyeol-seora-wedding-card.firebaseapp.com",projectId:"seongyeol-seora-wedding-card",storageBucket:"seongyeol-seora-wedding-card.appspot.com",messagingSenderId:"158398620563",appId:"1:158398620563:web:ce0cee214f98bdd198fe66",measurementId:"G-4WSG1RLK58"},CE=sc(bE),_i=iE(CE);var aa={},SE=Yi;Object.defineProperty(aa,"__esModule",{value:!0});var Ch=aa.default=void 0,PE=SE(Xi()),xE=P;Ch=aa.default=(0,PE.default)((0,xE.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");var la={},DE=Yi;Object.defineProperty(la,"__esModule",{value:!0});var Sh=la.default=void 0,VE=DE(Xi()),NE=P;Sh=la.default=(0,VE.default)((0,NE.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"}),"Phone");var ca={},kE=Yi;Object.defineProperty(ca,"__esModule",{value:!0});var Ph=ca.default=void 0,ME=kE(Xi()),OE=P;Ph=ca.default=(0,ME.default)((0,OE.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email");const hn=({className:e,title:t,pNum:n,address:r})=>Qt("div",{className:e,css:Ee.userInfoWrapper,children:[j("span",{children:t}),Qt("div",{children:[j(yi,{className:"phone",LinkComponent:"a",href:`tel:${n}`,children:j(Sh,{})}),j(yi,{className:"sms",LinkComponent:"a",href:`sms:${n}`,children:j(Ph,{})})]}),j(Nh,{css:Ee.address,text:r,address:!0})]}),GE=()=>{const[e,t]=_.useState([]),[n,r]=_.useState(""),[s,i]=_.useState(""),[o,a]=_.useState(""),[l,c]=_.useState(""),[u,h]=_.useState(),[d,f]=_.useState(""),[E,w]=_.useState(),[y,I]=_.useState(!1),[S,b]=_.useState(""),v=async T=>{T.preventDefault(),!(!s||!n)&&(await wE(Dl(_i,"comments"),{username:n,content:s,password:o,createdAt:new Date,ipAddress:l}),i(""),r(""),a(""))},V=async T=>{T.preventDefault(),u&&(d===E||d==="성열"?(await IE(hh(_i,"comments",u)),b("축사가 삭제되었습니다.")):b("비밀번호가 틀렸습니다."),I(!0),h(void 0),f(""))},x=(T,F)=>{F!=="clickaway"&&I(!1)};return _.useEffect(()=>{const T=gE(Dl(_i,"comments"),_E("createdAt","desc")),F=AE(T,B=>{const z=B.docs.map(W=>({id:W.id,...W.data()}));t(z)});return fetch("https://geolocation-db.com/json/").then(B=>B.json()).then(B=>{c(B.IPv4)}).catch(B=>console.log(B)),()=>F()},[]),Qt("div",{className:"pages wishes",css:Ee.wrapper,children:[Qt("div",{css:Ee.wishesWrapper,children:[j("span",{className:"wishes-wrapper-header",children:"마음 전하실 곳"}),Qt("div",{className:"character-wrapper",children:[j(hn,{className:"broom",title:"신랑에게 연락하기",pNum:"010-3527-2726",address:"745015-52-212191 농협"}),j(hn,{className:"bride",title:"신부에게 연락하기",pNum:"010-5717-9605",address:"100017864980 토스뱅크"})]}),j("span",{className:"wishes-wrapper-header2",children:"혼주에게 연락하기"}),Qt("div",{className:"parents-wrapper",children:[j("span",{className:"broom title",children:"신랑측 혼주"}),j(hn,{className:"broom",title:"아버지 황홍석",pNum:"010-5034-2726",address:"780-01-022817 농협"}),j(hn,{className:"broom",title:"어머니 윤영희",pNum:"010-6242-2726",address:"745010-52-104095 농협"}),j("span",{className:"bride title",children:" 신부측 혼주"}),j(hn,{className:"bride",title:"아버지 이칠성",pNum:"010-5414-9605",address:"504-21-0711-139 국민"}),j(hn,{className:"bride",title:"어머니 탁은정",pNum:"010-4142-9605",address:"533-12-125477 농협"})]})]}),Qt("div",{css:Ee.commentsWrapper,children:[Qt("form",{onSubmit:v,css:Ee.editComment,children:[j("div",{className:"edit-comment-header",children:j("span",{children:"축사를 남겨주세요!"})}),j($r,{className:"edit-comment-nickName",hiddenLabel:!0,type:"text",variant:"outlined",size:"small",fullWidth:!0,value:n,onChange:T=>r(T.target.value),placeholder:"이름",inputProps:{maxLength:10,autocomplete:"off"}}),j($r,{className:"edit-comment-password",hiddenLabel:!0,type:"password",variant:"outlined",size:"small",fullWidth:!0,value:o,onChange:T=>a(T.target.value),placeholder:"비밀번호",inputProps:{maxLength:15,autocomplete:"off"}}),j($r,{className:"edit-comment-content",variant:"outlined",hiddenLabel:!0,multiline:!0,maxRows:3,rows:3,value:s,onChange:T=>i(T.target.value),placeholder:"축하 메세지",inputProps:{maxLength:300,autocomplete:"off"}}),j("div",{className:"edit-comment-actions",children:j(da,{css:Ee.submitButton,type:"submit",variant:"contained",color:"secondary",fullWidth:!0,disableElevation:!0,children:"축하메세지 남기기"})})]}),Qt("span",{className:"comments-header",children:["전체 축사",j("span",{children:` ${e.length}`}),"개"]}),j("div",{className:"comments-body",children:e.map(T=>{var z;const F=W=>{if(W===void 0)return"undefiend";const X=String(W.getMonth()+1).padStart(2,"0"),$=String(W.getDate()).padStart(2,"0"),G=String(W.getHours()).padStart(2,"0"),tt=String(W.getMinutes()).padStart(2,"0"),Tt=String(W.getSeconds()).padStart(2,"0");return`${X}.${$} ${G}:${tt}:${Tt}`},B=()=>{h(T.id),w(T.password)};return Qt(Ll,{className:"comment",elevation:1,css:Ee.paper,children:[Qt("span",{className:"comment-username",children:[`${T.username}`,j(yi,{className:"comment-delete",size:"small",onClick:B,children:j(Ch,{fontSize:"inherit"})})]}),j("span",{className:"comment-content",children:T.content}),j("span",{className:"comment-date",children:F((z=T.createdAt)==null?void 0:z.toDate())})]},T.id)})})]}),Qt(Wh,{open:!!u,css:Ee.deleteDialog,children:[j(Ud,{children:"축사 삭제"}),Qt("form",{onSubmit:V,children:[j(Od,{children:j($r,{autoFocus:!0,value:d,onChange:T=>f(T.target.value),size:"small",placeholder:"비밀번호",inputProps:{maxLength:15,autocomplete:"off"}})}),j(Cd,{children:j(da,{type:"submit",children:"확인"})})]})]}),j(Vh,{anchorOrigin:{horizontal:"center",vertical:"bottom"},open:y,autoHideDuration:500,onClose:x,message:S})]})};export{GE as default};
