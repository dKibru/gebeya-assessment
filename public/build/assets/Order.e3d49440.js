import{B as c}from"./BackLayout.eb4d6861.js";import{L as h,a as r,o as a,c as _,w as n,b as t,f as d,g as p,e as x,t as s,F as m}from"./app.2c965d0b.js";import{_ as f}from"./_plugin-vue_export-helper.cdc0426e.js";const u={name:"ClientOrder",components:{BackLayout:c,Link:h},props:{menu:Array,orders:Array}},y={class:"container p-6 mx-auto"},g=t("h1",{class:"mb-4 text-xl md:text-2xl font-semibold text-black"}," Orders ",-1),b={class:"overflow-x-auto shadow-sm"},k={class:"w-full whitespace-no-wrap"},w=t("thead",null,[t("tr",{class:"text-xs font-semibold tracking-wide text-left uppercase bg-gray-200"},[t("th",{class:"px-3 py-3"},"#"),t("th",{class:"px-3 py-3",width:"400"},"User"),t("th",{class:"px-3 py-3"},"Amount"),t("th",{class:"px-3 py-3"},"Status"),t("th",{class:"px-3 py-3 text-right",width:"100"},"Manage")])],-1),v={class:"bg-white divide-y"},B={class:"text-gray-700 dark:text-gray-400"},L={class:"px-3 py-3"},A=t("div",{class:"mr-3 hidden md:block flex-shrink-0"},null,-1),C={class:"font-semibold"},O={class:"text-sm text-gray-500"},$={class:"px-3 py-3"},F={class:"flex items-center leading-tight"},N=t("div",{class:"mr-3 hidden md:block flex-shrink-0"},null,-1),S={class:"font-semibold"},V={class:"text-sm text-gray-500"},j={class:"px-3 py-3"},D={class:"px-3 py-3"},E={class:"px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full"},M=t("td",{class:"px-3 py-3 flex justify-end gap-1"},[t("a",{class:"px-2 py-1 inline-block text-red-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-red-600",href:"#"},[t("i",{class:"fa fa-trash"})]),t("a",{class:"px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600",href:"#"},[t("i",{class:"fa fa-pen"})]),t("a",{class:"px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600",href:"#"},[t("i",{class:"fa fa-ellipsis-h"})])],-1);function U(q,z,o,G,H,I){const l=r("Link"),i=r("BackLayout");return a(),_(i,{menu:o.menu},{default:n(()=>[t("section",y,[g,t("div",b,[t("table",k,[w,t("tbody",v,[(a(!0),d(m,null,p(o.orders.data,e=>(a(),d("tr",B,[t("td",L,[x(l,{href:"/client/orders/"+e.id,class:"cursor-pointer flex items-center leading-tight"},{default:n(()=>[A,t("div",null,[t("p",C,"#"+s(e.id),1),t("p",O,s(e.created_at),1)])]),_:2},1032,["href"])]),t("td",$,[t("div",F,[N,t("div",null,[t("p",S,s(e.first_name)+" "+s(e.last_name),1),t("p",V,s(e.email)+" | "+s(e.phone),1)])])]),t("td",j," $ "+s(e.total_price/100),1),t("td",D,[t("span",E,s(e.status),1)]),M]))),256))])])])])]),_:1},8,["menu"])}const Q=f(u,[["render",U]]);export{Q as default};
