import{W as g,r as l,j as o,F as C,a as e,b as x}from"./app-ae6dc9df.js";import"./AuthNavigation-bc769da0.js";import"./TextInput-3cdf01fe.js";import{B as i}from"./Box-4b033169.js";import{g as b,b as y}from"./styled-b627da4d.js";import{C as v}from"./Container-be20f32f.js";import{S as d,C as P,a as _}from"./Stack-84c66384.js";import{L as T}from"./Link-f9dbbb88.js";import{T as j,B as W}from"./Button-7259bb28.js";import{C as E}from"./CardContent-c756119f.js";import{T as n,G as m}from"./TextField-f735f57a.js";function N({token:p,email:u}){const{data:a,setData:s,post:c,processing:f,errors:r,reset:h}=g({token:p,email:u,password:"",password_confirmation:""});l.useState(!1),l.useEffect(()=>()=>{h("password","password_confirmation")},[]);const w=t=>{t.preventDefault(),c(route("password.store"))};return o(C,{children:[e(x,{title:"Reset Password"}),e(i,{id:"hero",sx:{alignItems:"center",backgroundColor:b[200],position:"relative",justifyContent:"center",height:"100vh",pt:8},children:e(v,{maxWidth:"sm",children:e(i,{sx:{lineHeight:0},children:o(d,{spacing:3,direction:"column",justifyContent:"center",children:[e(T,{href:route("welcome"),underline:"none",color:"text.primary",children:o(j,{sx:{fontSize:{xs:40,md:58},fontWeight:"bold",lineHeight:1.3,"& b":{color:y[700]}},variant:"h2",children:["E",e("b",{children:"fishy"})]})}),o(P,{sx:{borderRadius:3},children:[e(_,{title:"Forgot Password"}),e(E,{children:e(i,{component:"form",onSubmit:w,children:o(d,{spacing:2,children:[e(n,{id:"outlined-email",type:"email",name:"email",value:a.email,autoComplete:"username",focused:!0,onChange:t=>s("email",t.target.value),error:!!r.email,label:"E-mail",fullWidth:!0,helperText:r.email&&r.email}),e(n,{id:"outlined-password-input",type:"password",name:"password",value:a.password,autoComplete:"New Password",onChange:t=>s("password",t.target.value),error:!!r.password,label:"Password",fullWidth:!0,helperText:r.password&&r.password}),e(n,{id:"outlined-password-input",type:"password",name:"password_confirmation",value:a.password_confirmation,autoComplete:"Password Confirmation",onChange:t=>s("password_confirmation",t.target.value),error:!!r.password_confirmation,label:"Password Confirmation",fullWidth:!0,helperText:r.password_confirmation&&r.password_confirmation}),e(m,{container:!0,justifyContent:"flex-end",alignItems:"center",children:e(m,{item:!0,children:e(W,{type:"submit",variant:"contained",disabled:f,children:"Email Password Reset Link"})})})]})})})]})]})})})})]})}export{N as default};