import{n as h,o as i,_ as B,a as N,j as p,T as C}from"./styled-b627da4d.js";import{r as T,a as _}from"./app-ae6dc9df.js";import{m as P,n as g,c as j,C as E}from"./Button-7259bb28.js";const I=["className","component"];function M(n={}){const{themeId:s,defaultTheme:m,defaultClassName:t="MuiBox-root",generateClassName:a}=n,c=h("div",{shouldForwardProp:e=>e!=="theme"&&e!=="sx"&&e!=="as"})(i);return T.forwardRef(function(x,d){const o=P(m),r=g(x),{className:l,component:u="div"}=r,f=B(r,I);return _(c,N({as:u,ref:d,className:j(l,a?a(t):t),theme:s&&o[s]||o},f))})}const S=p(),v=M({themeId:C,defaultTheme:S,defaultClassName:"MuiBox-root",generateClassName:E.generate}),b=v;export{b as B};