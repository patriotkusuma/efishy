import{j as r,a}from"./app-ae6dc9df.js";import{h as f,D as o}from"./DatePicker-a8dcfccd.js";import{P as e}from"./Container-be20f32f.js";import{G as n,F as y,I as g,O as x}from"./TextField-f735f57a.js";import{I as P,L as i,A as c,D as s}from"./DemoContainer-5c8171cb.js";import{S}from"./Stack-84c66384.js";import{H as T}from"./Hidden-a2631a2e.js";import{T as A}from"./Button-7259bb28.js";import{g as C}from"./styled-b627da4d.js";const l=m=>{const{searchData:d,dateFrom:t,dateTo:p,onSearchData:h,onDateFrom:u,onDateTo:D}=m;return r(n,{container:!0,spacing:2,direction:{xs:"column",md:"row"},alignItems:"stretch",justifyContent:"center",children:[a(n,{item:!0,xs:12,md:6,children:r(y,{fullWidth:!0,sx:{m:1},variant:"outlined",children:[a(g,{htmlFor:"outlined-adorment-search",children:"Cari"}),a(x,{id:"outlined-adorment-search",type:"text",label:"Cari",value:d,onChange:h,startAdornment:a(P,{position:"start",children:a(f,{})})})]})}),a(n,{item:!0,xs:12,md:6,children:r(S,{direction:{xs:"column",md:"row"},spacing:.5,justifyContent:"space-between",children:[a(i,{dateAdapter:c,children:a(s,{components:["DatePicker"],children:a(o,{slotProps:{actionBar:{actions:["cancel","clear","accept"]}},clearable:!0,clearText:"Clear",value:t,onAccept:u,label:"Dari tanggal"})})}),a(T,{only:["xs","sm"],children:a(A,{variant:"h2",color:C[500],children:"-"})}),a(i,{dateAdapter:c,children:a(s,{components:["DatePicker"],children:a(o,{value:p,clearable:!0,onAccept:D,label:"Sampai tanggal",minDate:t||""})})})]})})]})};l.propTypes={searchData:e.string,dateFrom:e.any,dateTo:e.any,onSearchData:e.func,onDateFrom:e.func,onDateTo:e.func};const G=l;export{G as S};