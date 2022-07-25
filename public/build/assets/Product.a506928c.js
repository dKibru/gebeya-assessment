import{B as d}from"./BackLayout.90984c3e.js";import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{a as l,o as e,c as i,w as h,b as t,g as a,h as p,t as r,F as _}from"./app.fe1ca048.js";const x={name:"AdminProduct",components:{BackLayout:d},props:{menu:Array,products:Array}},m={class:"container p-6 mx-auto"},u=t("h1",{class:"mb-4 text-xl md:text-2xl font-semibold text-black"}," Products ",-1),g={class:"overflow-x-auto shadow-sm"},y={class:"w-full whitespace-no-wrap"},f=t("thead",null,[t("tr",{class:"text-xs font-semibold tracking-wide text-left uppercase bg-gray-200"},[t("th",{class:"px-3 py-3",width:"400"},"Client"),t("th",{class:"px-3 py-3"},"Amount"),t("th",{class:"px-3 py-3"},"Status"),t("th",{class:"px-3 py-3"},"Date"),t("th",{class:"px-3 py-3 text-right",width:"100"},"Manage")])],-1),b={class:"bg-white divide-y"},w={class:"text-gray-700 dark:text-gray-400"},v={class:"px-3 py-3"},k={class:"flex items-center leading-tight"},B={class:"mr-3 hidden md:block flex-shrink-0"},A=["src"],L={class:"font-semibold"},C=t("p",{class:"text-sm text-gray-500"}," UX Designer ",-1),D=t("td",{class:"px-3 py-3"}," $ 4000.00 ",-1),P=t("td",{class:"px-3 py-3"},[t("span",{class:"px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full"}," Approved ")],-1),$={class:"px-3 py-3"},j=t("td",{class:"px-3 py-3 flex justify-end gap-1"},[t("a",{class:"px-2 py-1 inline-block text-red-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-red-600",href:"#"},[t("i",{class:"fa fa-trash"})]),t("a",{class:"px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600",href:"#"},[t("i",{class:"fa fa-pen"})]),t("a",{class:"px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600",href:"#"},[t("i",{class:"fa fa-ellipsis-h"})])],-1);function F(S,E,o,M,N,U){const c=l("BackLayout");return e(),i(c,{menu:o.menu},{default:h(()=>[t("section",m,[u,t("div",g,[t("table",y,[f,t("tbody",b,[(e(!0),a(_,null,p(o.products.data,s=>(e(),a("tr",w,[t("td",v,[t("div",k,[t("div",B,[t("img",{width:"36",height:"36",class:"object-cover w-10 h-10 rounded-full",src:s.img,alt:""},null,8,A)]),t("div",null,[t("p",L,r(s.name),1),C])])]),D,P,t("td",$,r(s.created_at),1),j]))),256))])])])])]),_:1},8,["menu"])}const z=n(x,[["render",F]]);export{z as default};
