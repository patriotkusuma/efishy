import{r as m,h as p}from"./app-ae6dc9df.js";import{p as h,o as S,f as w}from"./Button-7259bb28.js";function Q(t,o,e,s,u){const[r,i]=m.useState(()=>u&&e?e(t).matches:s?s(t).matches:o);return w(()=>{let a=!0;if(!e)return;const n=e(t),f=()=>{a&&i(n.matches)};return f(),n.addListener(f),()=>{a=!1,n.removeListener(f)}},[t,e]),r}const d=p["useSyncExternalStore"];function L(t,o,e,s,u){const r=m.useCallback(()=>o,[o]),i=m.useMemo(()=>{if(u&&e)return()=>e(t).matches;if(s!==null){const{matches:c}=s(t);return()=>c}return r},[r,t,s,u,e]),[a,n]=m.useMemo(()=>{if(e===null)return[r,()=>()=>{}];const c=e(t);return[()=>c.matches,l=>(c.addListener(l),()=>{c.removeListener(l)})]},[r,e,t]);return d(n,a,i)}function b(t,o={}){const e=h(),s=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:u=!1,matchMedia:r=s?window.matchMedia:null,ssrMatchMedia:i=null,noSsr:a=!1}=S({name:"MuiUseMediaQuery",props:o,theme:e});let n=typeof t=="function"?t(e):t;return n=n.replace(/^@media( ?)/m,""),(d!==void 0?L:Q)(n,u,r,i,a)}export{b as u};
