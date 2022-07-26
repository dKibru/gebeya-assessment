import{B as p}from"./BackLayout.2e2ce96e.js";import{L as m,a as l,o,c as x,w as a,b as t,f as d,g as u,t as s,e as c,F as g}from"./app.c3f89b10.js";import{_ as f}from"./_plugin-vue_export-helper.cdc0426e.js";const y={name:"AdminClients",components:{BackLayout:p,Link:m},props:{menu:Array,clients:Array},methods:{deleteUser:function(n){window.confirm("Are you sure?")&&this.$inertia.post("/admin/client/"+n+"/delete",{},{onSuccess:()=>{this.$notify({title:"Client deleted",text:"All data related to the client are removed from our server"})}})}}},b={class:"container p-6 mx-auto"},k=t("h1",{class:"mb-4 text-xl md:text-2xl font-semibold text-black"}," Clients ",-1),v={class:"overflow-x-auto shadow-sm"},w={class:"w-full whitespace-no-wrap"},C=t("thead",null,[t("tr",{class:"text-xs font-semibold tracking-wide text-left uppercase bg-gray-200"},[t("th",{class:"px-3 py-3",width:"200"},"Client"),t("th",{class:"px-3 py-3"},"Store Listing"),t("th",{class:"px-3 py-3"},"Store Status"),t("th",{class:"px-3 py-3"},"Joined at"),t("th",{class:"px-3 py-3 text-right",width:"200"},"Manage")])],-1),L={class:"bg-white divide-y"},B={class:"text-gray-700 dark:text-gray-400"},A={class:"px-3 py-3"},S={class:"flex items-center leading-tight"},$=t("div",{class:"mr-3 hidden md:block flex-shrink-0"},null,-1),F={class:"font-semibold"},N={class:"text-sm text-gray-500"},U={class:"px-3 py-3"},V={class:"text-sm text-gray-500"},j={class:"text-sm text-gray-500"},D=t("td",{class:"px-3 py-3"},[t("span",{class:"px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full"}," Active ")],-1),E={class:"px-3 py-3"},J={class:"px-3 py-3 flex justify-end gap-1"},M=["onClick"],P=t("i",{class:"fa fa-trash"},null,-1),q=[P],z=t("i",{class:"fa fa-eye"},null,-1),G=t("i",{class:"fa fa-user-cog"},null,-1);function H(n,I,r,K,O,h){const i=l("Link"),_=l("BackLayout");return o(),x(_,{menu:r.menu},{default:a(()=>[t("section",b,[k,t("div",v,[t("table",w,[C,t("tbody",L,[(o(!0),d(g,null,u(r.clients.data,e=>(o(),d("tr",B,[t("td",A,[t("div",S,[$,t("div",null,[t("p",F,s(e.name),1),t("p",N,s(e.email),1)])])]),t("td",U,[t("p",V,s(e.products.length)+" Products ",1),t("p",j,s(e.categories.length)+" Categories ",1)]),D,t("td",E,s(e.fdates.created_at),1),t("td",J,[t("div",{onClick:Q=>h.deleteUser(e.id),title:"deactivate store",class:"cursor-pointer px-2 py-1 inline-block text-red-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-red-600"},q,8,M),c(i,{target:"_blank",href:e.url,title:"view front store",class:"px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"},{default:a(()=>[z]),_:2},1032,["href"]),c(i,{href:"/admin/loginas/"+e.id,title:"log in as "+e.name,method:"post",class:"px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"},{default:a(()=>[G]),_:2},1032,["href","title"])])]))),256))])])])])]),_:1},8,["menu"])}const X=f(y,[["render",H]]);export{X as default};
