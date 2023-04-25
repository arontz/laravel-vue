import{o as s,e as c,a,r as p,i as m,v as w,b as o,u as t,w as f,F as n,G as C,j as l,f as v,n as $,s as V}from"./app-418b299f.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as T}from"./AuthenticationCardLogo-f3f8ae47.js";import{_ as g,a as h}from"./TextInput-811298b1.js";import{_ as x}from"./InputLabel-495e31b9.js";import{_ as U}from"./PrimaryButton-89ac2cf7.js";const j={},B={class:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},F={class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"};function N(d,r){return s(),c("div",B,[a("div",null,[p(d.$slots,"logo")]),a("div",F,[p(d.$slots,"default")])])}const S=I(j,[["render",N]]),P={class:"mb-4 text-sm text-gray-600"},R=["onSubmit"],z={key:0},A={key:1},E={class:"flex items-center justify-end mt-4"},G=["onClick"],O={__name:"TwoFactorChallenge",setup(d){const r=m(!1),e=w({code:"",recovery_code:""}),_=m(null),y=m(null),b=async()=>{r.value^=!0,await V(),r.value?(_.value.focus(),e.code=""):(y.value.focus(),e.recovery_code="")},k=()=>{e.post(route("two-factor.login"))};return(L,i)=>(s(),c(n,null,[o(t(C),{title:"Two-factor Confirmation"}),o(S,null,{logo:f(()=>[o(T)]),default:f(()=>[a("div",P,[r.value?(s(),c(n,{key:1},[l(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(s(),c(n,{key:0},[l(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))]),a("form",{onSubmit:v(k,["prevent"])},[r.value?(s(),c("div",A,[o(x,{for:"recovery_code",value:"Recovery Code"}),o(g,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:_,modelValue:t(e).recovery_code,"onUpdate:modelValue":i[1]||(i[1]=u=>t(e).recovery_code=u),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"]),o(h,{class:"mt-2",message:t(e).errors.recovery_code},null,8,["message"])])):(s(),c("div",z,[o(x,{for:"code",value:"Code"}),o(g,{id:"code",ref_key:"codeInput",ref:y,modelValue:t(e).code,"onUpdate:modelValue":i[0]||(i[0]=u=>t(e).code=u),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"]),o(h,{class:"mt-2",message:t(e).errors.code},null,8,["message"])])),a("div",E,[a("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:v(b,["prevent"])},[r.value?(s(),c(n,{key:1},[l(" Use an authentication code ")],64)):(s(),c(n,{key:0},[l(" Use a recovery code ")],64))],8,G),o(U,{class:$(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:f(()=>[l(" Log in ")]),_:1},8,["class","disabled"])])],40,R)]),_:1})],64))}};export{O as default};