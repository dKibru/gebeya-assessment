import{B as l}from"./BackLayout.e320fc58.js";import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{a as c,o as s,c as i,w as h,b as e,f as r,g as p,t as a,F as x,h as m}from"./app.1a8cb98a.js";const _={name:"AdminUsers",components:{BackLayout:l},props:{menu:Array,users:Array}},b={class:"container p-6 mx-auto"},u=e("h1",{class:"mb-4 text-xl md:text-2xl font-semibold text-black"},[m(" Users "),e("button",{class:"text-left px-4 py-2 md:text-sm text-black mx-8 bg-yellow-400 border border-transparent rounded-md hover:bg-yellow-500"},[e("i",{class:"fa fa-plus-circle"})])],-1),y={class:"overflow-x-auto shadow-sm"},f={class:"w-full whitespace-no-wrap"},g=e("thead",null,[e("tr",{class:"text-xs font-semibold tracking-wide text-left uppercase bg-gray-200"},[e("th",{class:"px-3 py-3",width:"400"},"Client"),e("th",{class:"px-3 py-3"},"Joined at"),e("th",{class:"px-3 py-3 text-right",width:"200"},"Manage")])],-1),w={class:"bg-white divide-y"},k={class:"text-gray-700 dark:text-gray-400"},v={class:"px-3 py-3"},B={class:"flex items-center leading-tight"},L=e("div",{class:"mr-3 hidden md:block flex-shrink-0"},null,-1),A={class:"font-semibold"},C={class:"text-sm text-gray-500"},U={class:"px-3 py-3"},F=e("td",{class:"px-3 py-3 flex justify-end gap-1"},[e("a",{class:"px-2 py-1 inline-block text-red-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-red-600",href:"#"},[e("i",{class:"fa fa-trash"})]),e("a",{class:"px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600",href:"#"},[e("i",{class:"fa fa-pen"})]),e("a",{class:"px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600",href:"#"},[e("i",{class:"fa fa-ellipsis-h"})])],-1);function N(V,$,o,j,D,E){const d=c("BackLayout");return s(),i(d,{menu:o.menu},{default:h(()=>[e("section",b,[u,e("div",y,[e("table",f,[g,e("tbody",w,[(s(!0),r(x,null,p(o.users.data,t=>(s(),r("tr",k,[e("td",v,[e("div",B,[L,e("div",null,[e("p",A,a(t.name),1),e("p",C,a(t.email),1)])])]),e("td",U,a(t.created_at),1),F]))),256))])])])])]),_:1},8,["menu"])}const T=n(_,[["render",N]]);export{T as default};