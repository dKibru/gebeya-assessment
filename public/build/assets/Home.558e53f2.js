import{y as _,L as u,r,o as s,c as h,w as l,a,b as e,t as n,l as i,e as f,d as g,F as x}from"./app.e78a1269.js";import{_ as y}from"./index.23c11084.js";import{F as b}from"./FrontLayout.139f530b.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";_(0);const k={components:{Link:u,FrontLayout:b},directives:{clickOutSide:y},props:{products:Array,client:Object,menu:Array},data:()=>({showModal:!1}),methods:{goBack:function(){console.log("hey")},closeModal:function(){this.showModal=!1},addToMyCart:function(c){this.showModal=!0,console.log(c.name,this.showModal)}}},v={key:0,class:"py-5 sm:py-7 bg-blue-100"},w={class:"container max-w-screen-xl mx-auto px-4"},L={class:"text-3xl font-semibold mb-2"},F={class:"py-10"},M={class:"container max-w-screen-xl mx-auto px-4"},B=e("h2",{class:"text-3xl font-bold mb-8"},"New products",-1),C={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},N={class:"mb-4"},V=["src"],A={class:"pt-3"},O={class:"font-semibold"},S=["href"],j={key:0,class:"text-sm text-gray-400"};function D(c,E,o,H,P,T){const d=r("Link"),m=r("FrontLayout");return s(),h(m,{menu:o.menu},{default:l(()=>[o.client?(s(),a("section",v,[e("div",w,[e("h2",L,n(o.client.name)+" store",1)])])):i("",!0),e("section",F,[e("div",M,[B,e("div",C,[(s(!0),a(x,null,f(o.products.data,t=>(s(),a("div",null,[e("article",N,[g(d,{href:t.url,class:"rounded bg-gray-100 border border-gray-200 block relative p-1 hover:border-blue-300"},{default:l(()=>[e("img",{src:t.img,class:"mx-auto mix-blend-multiply w-auto",height:"240",alt:"Product title here"},null,8,V)]),_:2},1032,["href"]),e("div",A,[e("p",O,"$"+n(t.price/100),1),e("h6",null,[e("a",{href:t.url,class:"text-gray-600 hover:text-blue-500"},n(t.name),9,S)]),t.category?(s(),a("small",j,n(t.category.name),1)):i("",!0)])])]))),256))])])])]),_:1},8,["menu"])}const I=p(k,[["render",D]]);export{I as default};