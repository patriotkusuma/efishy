import{j as a,a as e}from"./app-ae6dc9df.js";import{h as B,D as f,T as H,a as _,b as l,c as t,d as M,f as W}from"./DatePicker-a8dcfccd.js";import{P as r}from"./Container-be20f32f.js";import{b as Y}from"./index.esm-04eca18b.js";import{h as L}from"./moment-fbc5633a.js";import{y as P,I as b}from"./index.esm-e5efdc73.js";import{C as O,a as R,S as c}from"./Stack-84c66384.js";import{C as G}from"./CardContent-c756119f.js";import{G as d,F as z,I as N,O as q}from"./TextField-f735f57a.js";import{I as E,L as C,A as y,D}from"./DemoContainer-5c8171cb.js";import{H as J}from"./Hidden-a2631a2e.js";import{T as o}from"./Button-7259bb28.js";import{g as h,b as m,r as K,f as Q}from"./styled-b627da4d.js";import{B as U}from"./Box-4b033169.js";const X=T=>{const{count:v=0,items:p=[],onPageChange:w,onRowsPerPageChange:x,page:u,rowsPerPage:s,searchPh:I,dateFrom:g,onSearchPh:S,onDateFromSearch:k,dateTo:A,onDateToSearch:j}=T;return a(O,{children:[e(R,{title:"Data Ph"}),e(G,{children:a(c,{spacing:2,children:[a(d,{container:!0,spacing:2,direction:{xs:"column",md:"row"},alignItems:"stretch",justifyContent:"center",children:[e(d,{item:!0,xs:12,md:6,children:a(z,{fullWidth:!0,sx:{m:1},variant:"outlined",children:[e(N,{htmlFor:"outlined-adorment-search",children:"Cari"}),e(q,{id:"outlined-adorment-search",type:"text",value:I,onChange:S,startAdornment:e(E,{position:"start",children:e(B,{})})})]})}),e(d,{item:!0,xs:12,md:6,children:a(c,{direction:{xs:"column",md:"row"},spacing:.5,justifyContent:"space-between",children:[e(C,{dateAdapter:y,children:e(D,{components:["DatePicker"],children:e(f,{componentsProps:{actionBar:{actions:["cancel","clear","accept"]}},value:g,onAccept:k,label:"Dari tanggal"})})}),e(J,{only:"xs",children:e(o,{variant:"h2",color:h[500],children:"-"})}),e(C,{dateAdapter:y,children:e(D,{components:["DatePicker"],children:e(f,{value:A,componentsProps:{actionBar:{actions:["cancel","clear","accept"]}},onAccept:j,label:"Sampai tanggal",minDate:g})})})]})})]}),e(U,{children:a(H,{children:[e(_,{children:a(l,{children:[e(t,{children:"No"}),e(t,{children:"Ph"}),e(t,{children:"Waktu"})]})}),e(M,{children:p.length==0?e(l,{style:{backgroundColor:h[200]},children:e(t,{colSpan:3,align:"center",children:a(c,{direction:"row",alignItems:"center",justifyContent:"center",spacing:2,children:[e(o,{color:P[900],variant:"h5",component:"h6",children:e(b,{})}),e(o,{color:h[900],variant:"h6",component:"h6",children:"Data Tidak Ditemukan"}),e(o,{color:P[900],variant:"h5",component:"h6",children:e(b,{})})]})})}):p.map((n,F)=>{var i=m[500];return n.status_ph>8&&(i=m[500]),n.status_ph<6&&(i=K[500]),n.status_ph>6&&n.status_ph<8&&(i=Q[500]),a(l,{hover:!0,children:[e(t,{children:(u-1)*s+F+s+1}),e(t,{children:a(c,{direction:"row",alignItems:"center",children:[e(o,{variant:"h5",color:m,children:e(Y,{color:i})}),a(o,{variant:"h6",children:[e("b",{children:n.status_ph+" "}),"Ph"]})]})}),e(t,{children:L(n.created_at).format("HH:mm:ss, DD MMMM YYYY")})]},n.id)})})]})}),e(W,{component:"div",count:v,onPageChange:w,onRowsPerPageChange:x,page:u,rowsPerPage:s,rowsPerPageOptions:[5,10,25]})]})})]})};X.prototype={count:r.number,items:r.array,onPageChange:r.func,onRowsPerPageChange:r.func,page:r.number,rowsPerPage:r.number,searchPh:r.string,dateFrom:r.any,onSearchPh:r.func,onDateFromSearch:r.func,dateTo:r.any,onDateToSearch:r.func};export{X as T};
