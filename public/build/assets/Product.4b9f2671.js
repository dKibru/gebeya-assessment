import{B as d}from"./BackLayout.90984c3e.js";import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{a as n,o as s,c as i,w as p,b as t,g as o,h,t as r,F as x,f as _}from"./app.fe1ca048.js";const m={name:"ClientProduct",components:{BackLayout:d},props:{menu:Array,products:Array}},u={class:"container p-6 mx-auto"},g=t("h1",{class:"mb-4 text-xl md:text-2xl font-semibold text-black"},[_(" Product "),t("button",{class:"text-left px-4 py-2 md:text-sm text-black mx-8 bg-yellow-400 border border-transparent rounded-md hover:bg-yellow-500"},[t("i",{class:"fa fa-plus-circle"})])],-1),y={class:"overflow-x-auto shadow-sm"},b={class:"w-full whitespace-no-wrap"},f=t("thead",null,[t("tr",{class:"text-xs font-semibold tracking-wide text-left uppercase bg-gray-200"},[t("th",{class:"px-3 py-3",width:"400"},"Client"),t("th",{class:"px-3 py-3"},"Amount"),t("th",{class:"px-3 py-3"},"Status"),t("th",{class:"px-3 py-3"},"Date"),t("th",{class:"px-3 py-3 text-right",width:"100"},"Manage")])],-1),w={class:"bg-white divide-y"},v={class:"text-gray-700 dark:text-gray-400"},k={class:"px-3 py-3"},B={class:"flex items-center leading-tight"},A={class:"mr-3 hidden md:block flex-shrink-0"},C=["src"],L={class:"font-semibold"},D=t("p",{class:"text-sm text-gray-500"}," UX Designer ",-1),P=t("td",{class:"px-3 py-3"}," $ 4000.00 ",-1),$=t("td",{class:"px-3 py-3"},[t("span",{class:"px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full"}," Approved ")],-1),j={class:"px-3 py-3"},F=t("td",{class:"px-3 py-3 flex justify-end gap-1"},[t("a",{class:"px-2 py-1 inline-block text-red-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-red-600",href:"#"},[t("i",{class:"fa fa-trash"})]),t("a",{class:"px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600",href:"#"},[t("i",{class:"fa fa-pen"})]),t("a",{class:"px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600",href:"#"},[t("i",{class:"fa fa-ellipsis-h"})])],-1);function N(S,V,a,E,M,T){const c=n("BackLayout");return s(),i(c,{menu:a.menu},{default:p(()=>[t("section",u,[g,t("div",y,[t("table",b,[f,t("tbody",w,[(s(!0),o(x,null,h(a.products.data,e=>(s(),o("tr",v,[t("td",k,[t("div",B,[t("div",A,[t("img",{width:"36",height:"36",class:"object-cover w-10 h-10 rounded-full",src:e.img,alt:""},null,8,C)]),t("div",null,[t("p",L,r(e.name),1),D])])]),P,$,t("td",j,r(e.created_at),1),F]))),256))])])])])]),_:1},8,["menu"])}const z=l(m,[["render",N]]);export{z as default};
