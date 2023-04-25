import{v as c,c as f,w as d,o as w,b as e,u as o,G as _,a as t,j as V,n as g,f as b}from"./app-418b299f.js";import{_ as v}from"./GuestLayout-f085488c.js";import{_ as l,a as i}from"./TextInput-811298b1.js";import{_ as m}from"./InputLabel-495e31b9.js";import{_ as k}from"./PrimaryButton-89ac2cf7.js";import"./ApplicationLogo-e9b1015d.js";import"./_plugin-vue_export-helper-c27b6911.js";const x=["onSubmit"],y={class:"mt-4"},P={class:"mt-4"},$={class:"flex items-center justify-end mt-4"},j={__name:"ResetPassword",props:{email:String,token:String},setup(p){const n=p,s=c({token:n.token,email:n.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.store"),{onFinish:()=>s.reset("password","password_confirmation")})};return(S,a)=>(w(),f(v,null,{default:d(()=>[e(o(_),{title:"Reset Password"}),t("form",{onSubmit:b(u,["prevent"])},[t("div",null,[e(m,{for:"email",value:"Email"}),e(l,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>o(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),t("div",y,[e(m,{for:"password",value:"Password"}),e(l,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>o(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),t("div",P,[e(m,{for:"password_confirmation",value:"Confirm Password"}),e(l,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>o(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),t("div",$,[e(k,{class:g({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:d(()=>[V(" Reset Password ")]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{j as default};
