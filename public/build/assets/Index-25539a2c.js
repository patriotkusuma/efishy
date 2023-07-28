import{j as a,a as e,q as O,r as c,W as q,g as G,b as L}from"./app-ae6dc9df.js";import{S as z}from"./SearchRiwayatPakan-f9c8fa09.js";import{h as C}from"./moment-fbc5633a.js";import{_ as N}from"./react-apexcharts.min-359bcf8e.js";import{P as s,C as X}from"./Container-be20f32f.js";import{C as f,a as S,S as d}from"./Stack-84c66384.js";import{C as x}from"./CardContent-c756119f.js";import{i as H,T as u,S as k}from"./Button-7259bb28.js";import{a as _}from"./index.esm-14818d8a.js";import{A as Y}from"./index.esm-e5efdc73.js";import{G as V}from"./DemoContainer-5c8171cb.js";import{T as W}from"./TableRiwayatPakan-e53fdf1a.js";import{A as Z}from"./AuthenticatedLayout-dc541615.js";import{G as y}from"./TextField-f735f57a.js";import{f as J}from"./styled-b627da4d.js";import"./DatePicker-a8dcfccd.js";import"./IconButton-78b9cee9.js";import"./useMediaQuery-5c17f929.js";import"./Hidden-a2631a2e.js";import"./TableContainer-8af6b93b.js";import"./transition-c030e732.js";const Q=r=>(H(),{chart:{height:350,type:"line",stacked:!1},dataLabels:{enabled:!1},stroke:{width:[1,1,4]},title:{text:"Data Pakan Per bulan Tahun "+C().format("YYYY"),align:"left",offsetX:110},xaxis:{categories:r},yaxis:[{axisTicks:{show:!0},axisBorder:{show:!0,color:"#008FFB"},labels:{style:{colors:"#008FFB"}},title:{text:"Pakan Keluar (dalam gram)",style:{color:"#008FFB"}},tooltip:{enabled:!0}},{seriesName:"Income",opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#00E396"},labels:{style:{colors:"#00E396"}},title:{text:"Operating Cashflow",style:{color:"#00E396"}}}],tooltip:{fixed:{enabled:!0,position:"topLeft",offsetY:30,offsetX:60},intersect:!0},legend:{horizontalAlign:"left",offsetX:40}}),D=r=>{const{chartSeries:i,sx:n,dateChart:l}=r,h=Q(l);return a(f,{sx:{borderRadius:"10px"},children:[e(S,{title:"Pakan Keluar per Bulan"}),e(x,{children:e(N,{height:300,options:h,series:i,type:"bar",width:"100%"})})]})};D.prototype={chartSeries:s.array.isRequired,sx:s.object,dateChart:s.any};function U(r){return V({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M8.428 1.67c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006c4.244 0 7.184-3.854 7.184-6.998 0-2.29-2.175-3.293-4.244-3.293zm11.328 0c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006C21.061 11.96 24 8.107 24 4.963c0-2.29-2.18-3.293-4.244-3.293zM14.172 14.52l2.435 1.834c-2.17 2.07-6.124 3.525-9.353 3.17A8.913 8.913 0 01.23 14.541H0a9.598 9.598 0 008.828 7.758c3.814.24 7.323-.905 9.947-3.13l-.004.007 1.08 2.988 1.555-7.623-7.234-.02Z"}}]})(r)}const T=r=>{const{color:i,sx:n,value:l}=r;return e(f,{sx:n,children:a(x,{children:[a(d,{alignItems:"flex-start",direction:"row",justifyContent:"space-between",spacing:3,children:[a(d,{spacing:1,children:[a(u,{color:"text.secondary",variant:"overline",children:["Dana Keluar bulan ",a("strong",{children:[" ",C().format("MMMM YYYY")]})]}),e(u,{variant:"h4",children:"Rp "+l.toLocaleString("id")})]}),e(Y,{sx:{backgroundColor:i,height:56,width:56},children:e(k,{children:e(_,{})})})]}),e(d,{alignItems:"center",direction:"row",spacing:2,sx:{mt:2},children:e(u,{color:"text.secondary",variant:"caption",children:"Total Keluar"})})]})})};T.protoType={color:s.string,sx:s.object,value:s.string.isRequired};const M=r=>{const{color:i,sx:n,value:l}=r;return e(f,{sx:n,children:a(x,{children:[a(d,{alignItems:"flex-start",direction:"row",justifyContent:"space-between",spacing:3,children:[a(d,{spacing:1,children:[a(u,{color:"text.secondary",variant:"overline",children:["Pakan Keluar bulan ",a("strong",{children:[" ",C().format("MMMM YYYY")]})]}),e(u,{variant:"h4",children:l+" gram"})]}),e(Y,{sx:{backgroundColor:i,height:56,width:56},children:e(k,{children:e(U,{})})})]}),e(d,{alignItems:"center",direction:"row",spacing:2,sx:{mt:2},children:e(u,{color:"text.secondary",variant:"caption",children:"Total Keluar"})})]})})};M.protoType={color:s.string,sx:s.object,value:s.string.isRequired};const we=()=>{const{auth:r,jumlahKeluar:i,chartPakan:n,reportPakan:l}=O().props,[h,v]=c.useState(0),[w,R]=c.useState(5),[p,F]=c.useState(null),[m,K]=c.useState(null),[g,j]=c.useState(null);q();const[B,$]=c.useState(()=>{if(n){var t=[];return n.map(o=>{t.push(o.months)}),t}}),[b,ee]=c.useState(()=>{if(n){var t=[];return n.map(o=>{t.push(o.keluar)}),t}});c.useEffect(()=>{if(p!=null||m!=null||g!=null){v(0);let t=h+1;P(null,t)}},[p,m,g]);const P=(t=null,o=null)=>{G.get(route("report.index"),{page:o||h,rowsPerPage:t||w,searchData:p||"",dateFrom:m?m.format("YYYY-MM-DD"):"",dateTo:g?g.format("YYYY-MM-DD"):""},{preserveScroll:!0,preserveState:!0,replace:!0,only:["reportPakan"]})},I=(t,o)=>{v(o);let E=o+1;P(null,E)},A=t=>{R(+t.target.value),v(0);let o=h+1;P(t.target.value,o)};return a(Z,{user:r.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Report"}),children:[e(L,{title:"Report"}),e(X,{className:"py-12",children:a(d,{spacing:2,children:[a(y,{container:!0,spacing:2,children:[e(y,{item:!0,xs:12,md:4,children:a(d,{spacing:2,children:[e(M,{color:"green",sx:{borderRadius:"10px"},value:i?i.toLocaleString("id"):0}),e(T,{color:J[500],sx:{borderRadius:"10px"},value:"1000000"})]})}),e(y,{item:!0,xs:12,md:8,children:e(D,{dateChart:B,chartSeries:[{name:"Pakan Bulanan",data:b},{name:"Dana Bulanan",data:b}]})})]}),a(f,{sx:{borderRadius:"10px"},children:[e(S,{title:"Report"}),a(x,{children:[e(z,{searchData:p,dateFrom:m,dateTo:g,onSearchData:({target:t})=>F(t.value),onDateFrom:t=>K(t),onDateTo:t=>j(t)}),e(W,{count:l.total,items:l.data,onPageChange:I,onRowsPerPageChange:A,page:h,rowsPerPage:w})]})]})]})})]})};export{we as default};