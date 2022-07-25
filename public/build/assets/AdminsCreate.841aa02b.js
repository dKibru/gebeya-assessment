import{B as _}from"./BackLayout.90984c3e.js";import{L as y,a,o as r,c as f,w as n,b as e,j as g,k as l,v as d,g as i,t as m,l as c,e as x,f as p}from"./app.fe1ca048.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";const k={name:"AdminCreate",components:{BackLayout:_,Link:y},props:{menu:Array,admins:Array}},v={class:"container p-6 mx-auto"},B=e("h1",{class:"mb-4 text-xl md:text-2xl font-semibold text-black"}," New Admin ",-1),L={style:{"max-width":"360px"},class:"mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"},V=e("h2",{class:"mb-5 text-2xl font-semibold"},"Sign in",-1),A={class:"mb-4"},C=e("label",{class:"block mb-1"}," Email ",-1),N={key:0,class:"text-red-500"},S={class:"mb-4"},T=e("label",{class:"block mb-1"}," Password ",-1),D={key:0,class:"text-red-500"},$=e("label",{class:"flex items-center w-max mb-5"},[e("input",{checked:"",name:"",type:"checkbox",class:"h-4 w-4"}),e("span",{class:"ml-2 inline-block text-gray-500"}," Remember me ")],-1),E=e("button",{type:"submit",class:"px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700",href:"#"}," Sign in ",-1),M=e("div",{class:"text-center border-b my-5",style:{"line-height":"0.1rem"}},[e("span",{class:"px-3 bg-white text-gray-400"},"or")],-1),U={class:"text-center mt-5"},j=p(" Don\u2019t have an account? "),P=p("Sign up");function R(o,s,b,q,z,F){const u=a("Link"),h=a("BackLayout");return r(),f(h,{menu:b.menu},{default:n(()=>[e("section",v,[B,e("div",L,[e("form",{onSubmit:s[2]||(s[2]=g((...t)=>o.submit&&o.submit(...t),["prevent"]))},[V,e("div",A,[C,l(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>o.form.email=t),class:"appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",type:"text",placeholder:"Type here"},null,512),[[d,o.form.email]]),o.errors.email?(r(),i("div",N,m(o.errors.email),1)):c("",!0)]),e("div",S,[T,l(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>o.form.password=t),class:"appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",type:"password",placeholder:"Type here"},null,512),[[d,o.form.password]]),o.errors.password?(r(),i("div",D,m(o.errors.password),1)):c("",!0)]),$,E,M,e("p",U,[j,x(u,{class:"text-blue-500",href:"/register"},{default:n(()=>[P]),_:1})])],32)])])]),_:1},8,["menu"])}const J=w(k,[["render",R]]);export{J as default};