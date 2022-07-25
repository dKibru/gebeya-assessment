import{B as i}from"./BackLayout.324fb206.js";import{L as p,r as a,o as s,c as h,w as n,b as t,a as r,e as _,t as d,d as x,F as m,f as u}from"./app.e78a1269.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";const f={name:"AdminClients",components:{BackLayout:i,Link:p},props:{menu:Array,clients:Array}},g={class:"container p-6 mx-auto"},b=t("h1",{class:"mb-4 text-xl md:text-2xl font-semibold text-black"},[u(" Clients "),t("button",{class:"text-left px-4 py-2 md:text-sm text-black mx-8 bg-yellow-400 border border-transparent rounded-md hover:bg-yellow-500"},[t("i",{class:"fa fa-plus-circle"})])],-1),w={class:"overflow-x-auto shadow-sm"},k={class:"w-full whitespace-no-wrap"},v=t("thead",null,[t("tr",{class:"text-xs font-semibold tracking-wide text-left uppercase bg-gray-200"},[t("th",{class:"px-3 py-3",width:"400"},"Client"),t("th",{class:"px-3 py-3"},"Amount"),t("th",{class:"px-3 py-3"},"Status"),t("th",{class:"px-3 py-3"},"Date"),t("th",{class:"px-3 py-3 text-right",width:"100"},"Manage")])],-1),B={class:"bg-white divide-y"},L={class:"text-gray-700 dark:text-gray-400"},C={class:"px-3 py-3"},A={class:"flex items-center leading-tight"},D=t("div",{class:"mr-3 hidden md:block flex-shrink-0"},null,-1),N={class:"font-semibold"},V=t("p",{class:"text-sm text-gray-500"}," UX Designer ",-1),$=t("td",{class:"px-3 py-3"}," $ 4000.00 ",-1),F=t("td",{class:"px-3 py-3"},[t("span",{class:"px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full"}," Approved ")],-1),S={class:"px-3 py-3"},j={class:"px-3 py-3 flex justify-end gap-1"},E=t("a",{class:"px-2 py-1 inline-block text-red-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-red-600",href:"#"},[t("i",{class:"fa fa-trash"})],-1),M=t("a",{class:"px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600",href:"#"},[t("i",{class:"fa fa-pen"})],-1),T=t("i",{class:"fa fa-user-cog"},null,-1);function U(X,q,o,z,G,H){const c=a("Link"),l=a("BackLayout");return s(),h(l,{menu:o.menu},{default:n(()=>[t("section",g,[b,t("div",w,[t("table",k,[v,t("tbody",B,[(s(!0),r(m,null,_(o.clients.data,e=>(s(),r("tr",L,[t("td",C,[t("div",A,[D,t("div",null,[t("p",N,d(e.name),1),V])])]),$,F,t("td",S,d(e.created_at),1),t("td",j,[E,M,x(c,{href:"/admin/loginas/"+e.id,method:"post",class:"px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"},{default:n(()=>[T]),_:2},1032,["href"])])]))),256))])])])])]),_:1},8,["menu"])}const O=y(f,[["render",U]]);export{O as default};