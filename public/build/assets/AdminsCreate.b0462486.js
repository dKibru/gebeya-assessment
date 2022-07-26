import{B as b}from"./BackLayout.b5890707.js";import{r as p,L as f,a as y,o as a,c as _,w as h,d as x,b as e,j as g,k as d,v as l,f as i,t as m,l as c}from"./app.5c5e4a4b.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";const v={name:"AdminCreate",setup(){const n=p({email:null,password:null,name:null});function o(){x.Inertia.post("/admin/admins",n)}return{form:n,submit:o}},components:{BackLayout:b,Link:f},props:{menu:Array,admins:Array,errors:Object}},k={class:"container p-6 mx-auto"},B=e("h1",{class:"mb-4 text-xl md:text-2xl font-semibold text-black"}," New Admin ",-1),C={class:"mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"},A=e("h2",{class:"mb-5 text-2xl font-semibold"},"Create",-1),L={class:"mb-4"},V=e("label",{class:"block mb-1"}," Name ",-1),N={key:0,class:"text-red-500"},T={class:"mb-4"},S=e("label",{class:"block mb-1"}," Email ",-1),U={key:0,class:"text-red-500"},j={class:"mb-4"},D=e("label",{class:"block mb-1"}," Password ",-1),E={key:0,class:"text-red-500"},M=e("button",{type:"submit",class:"px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700",href:"#"}," Save ",-1);function I(n,o,t,r,O,P){const u=y("BackLayout");return a(),_(u,{menu:t.menu},{default:h(()=>[e("section",k,[B,e("div",C,[e("form",{onSubmit:o[3]||(o[3]=g((...s)=>r.submit&&r.submit(...s),["prevent"]))},[A,e("div",L,[V,d(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>r.form.name=s),class:"appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",type:"text",placeholder:"Type here"},null,512),[[l,r.form.name]]),t.errors.name?(a(),i("div",N,m(t.errors.name),1)):c("",!0)]),e("div",T,[S,d(e("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>r.form.email=s),class:"appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",type:"email",placeholder:"Type here"},null,512),[[l,r.form.email]]),t.errors.email?(a(),i("div",U,m(t.errors.email),1)):c("",!0)]),e("div",j,[D,d(e("input",{"onUpdate:modelValue":o[2]||(o[2]=s=>r.form.password=s),class:"appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",type:"password",placeholder:"Type here"},null,512),[[l,r.form.password]]),t.errors.password?(a(),i("div",E,m(t.errors.password),1)):c("",!0)]),M],32)])])]),_:1},8,["menu"])}const G=w(v,[["render",I]]);export{G as default};