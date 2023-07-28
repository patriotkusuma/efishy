import{c as y,d as B,s as M,e as x,a,_ as N}from"./styled-b627da4d.js";import{r as h,a as P}from"./app-ae6dc9df.js";import{a as U,g as _,T as j,u as z,d as W,e as H,c as w,b as E}from"./Button-7259bb28.js";function I(o){return _("MuiLink",o)}const O=U("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),S=O,g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},q=o=>g[o]||o,G=({theme:o,ownerState:e})=>{const n=q(e.color),r=y(o,`palette.${n}`,!1)||e.color,s=y(o,`palette.${n}Channel`);return"vars"in o&&s?`rgba(${s} / 0.4)`:B(r,.4)},J=G,K=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Q=o=>{const{classes:e,component:n,focusVisible:r,underline:s}=o,t={root:["root",`underline${x(s)}`,n==="button"&&"button",r&&"focusVisible"]};return E(t,I,e)},X=M(j,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[`underline${x(n.underline)}`],n.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>a({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&a({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:J({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${S.focusVisible}`]:{outline:"auto"}})),Y=h.forwardRef(function(e,n){const r=z({props:e,name:"MuiLink"}),{className:s,color:t="primary",component:c="a",onBlur:u,onFocus:d,TypographyClasses:C,underline:k="always",variant:p="inherit",sx:l}=r,L=N(r,K),{isFocusVisibleRef:f,onBlur:V,onFocus:v,ref:F}=W(),[D,m]=h.useState(!1),R=H(n,F),T=i=>{V(i),f.current===!1&&m(!1),u&&u(i)},$=i=>{v(i),f.current===!0&&m(!0),d&&d(i)},b=a({},r,{color:t,component:c,focusVisible:D,underline:k,variant:p}),A=Q(b);return P(X,a({color:t,className:w(A.root,s),classes:C,component:c,onBlur:T,onFocus:$,ref:R,ownerState:b,variant:p,sx:[...Object.keys(g).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},L))}),ne=Y;export{ne as L};