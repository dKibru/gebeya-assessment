import{F as v}from"./FrontLayout.01ae2cf1.js";import{p as k,r as w,u as C,L as j,a as y,o as l,c as T,w as h,b as e,g as a,t as n,e as p,l as c,k as i,v as u,m as V,x as g,F as L,h as F,f as m,q as O}from"./app.fe1ca048.js";import{_ as U}from"./index.23c11084.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";const S={name:"Checkout",setup(d){const s=k(()=>O().props.value.auth.cart),o=w({data:s});return{form:C({first_name:"",last_name:"",phone:"",email:"",shipping:"",address:"",term:!1}),cart:o}},components:{FrontLayout:v,Link:j},directives:{clickOutSide:U},data:()=>({showModal:!1,qtty:1}),props:{product:Object,client:Object,menu:Array,breadcrumb:Array,errors:Object},computed:{totalPrice:function(){const d=this.cart.data;let s=0;return d.forEach(o=>{s+=o.price*o.qtty}),s}},methods:{checkout:function(){this.form.transform(function(d){return{...d}}).post("/checkout",{preserveScroll:!0,onSuccess:()=>{}})}}},A={class:"py-10 bg-gray-50"},P={class:"container max-w-screen-xl mx-auto px-4"},q={key:0},M={class:"bg-gray-100 h-screen"},N={class:"bg-white p-6 md:mx-auto"},D=e("svg",{viewBox:"0 0 24 24",class:"text-green-600 w-16 h-16 mx-auto my-6"},[e("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})],-1),E={class:"text-center"},I=e("h3",{class:"md:text-2xl text-base text-gray-900 font-semibold text-center"},"Payment Done!",-1),G={class:"text-gray-600 my-2"},H=e("p",null," Have a great day! ",-1),Z={class:"py-10 text-center"},K=m(" GO BACK "),R={key:1,class:"flex flex-col md:flex-row gap-4 lg:gap-8"},X={class:"md:w-2/3"},z={key:0,class:"border border-gray-200 bg-white shadow-sm rounded p-4 lg:p-6 mb-5"},J={class:"flex flex-col lg:flex-row lg:justify-between lg:items-center"},Q=e("div",{class:"mb-4 lg:mb-0"},[e("h3",{class:"text-xl font-semibold"},"Have an account?"),e("p",{class:"text-gray-600"},"By creating account you will get more benefits")],-1),W={class:""},Y=m(" Sign in "),$=m(" Create account "),ee={class:"border border-gray-200 bg-white shadow-sm rounded p-4 lg:p-6 mb-5"},se={key:0,class:"text-xl font-semibold mb-5"},te={key:1,class:"text-xl font-semibold mb-5"},oe={class:"grid grid-cols-2 gap-x-3"},re={class:"mb-4"},le=e("label",{class:"block mb-1"}," First name *",-1),ae={key:0,class:"text-red-500"},ne={key:1,class:"text-red-500"},de={class:"mb-4"},ie=e("label",{class:"block mb-1"}," Last name ",-1),ce={key:0,class:"text-red-500"},me={key:1,class:"text-red-500"},he={class:"grid lg:grid-cols-2 gap-x-3"},ue={class:"mb-4"},be=e("label",{class:"block mb-1"}," Phone ",-1),_e={key:0,class:"text-red-500"},pe={key:1,class:"text-red-500"},ge={class:"flex w-full"},ye=e("input",{disabled:"",class:"appearance-none w-24 border border-gray-200 bg-gray-100 rounded-tl-md rounded-bl-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400",type:"text",placeholder:"Code",value:"+251"},null,-1),fe={class:"mb-4"},xe=e("label",{class:"block mb-1"}," Email *",-1),ve={key:0,class:"text-red-500"},ke={key:1,class:"text-red-500"},we={class:"flex items-center w-max my-4"},Ce=e("span",{class:"ml-2 inline-block text-gray-500"}," I agree with Terms and Conditions ",-1),je={key:2,class:"text-red-500 block"},Te=e("hr",{class:"my-4"},null,-1),Ve=e("h2",{class:"text-xl font-semibold mb-5"},"Shipping information *",-1),Le={key:3,class:"text-red-500"},Fe={class:"grid sm:grid-cols-3 gap-3 mb-6"},Oe={class:"flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer"},Ue=e("p",{class:"ml-2"},[e("span",null,"Express delivery"),e("small",{class:"block text-sm text-gray-400"},"3-4 days via Fedex")],-1),Be={class:"flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer"},Se=e("p",{class:"ml-2"},[e("span",null,"Post office"),e("small",{class:"block text-sm text-gray-400"},"20-30 days via post")],-1),Ae={class:"flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer"},Pe=e("p",{class:"ml-2"},[e("span",null,"Self pick-up"),e("small",{class:"block text-sm text-gray-400"},"Nearest location")],-1),qe={class:"grid md:grid-cols-3 gap-x-3"},Me={class:"mb-4 md:col-span-2"},Ne=e("label",{class:"block mb-1"}," Address* ",-1),De={key:0,class:"text-red-500"},Ee={class:"flex justify-end space-x-2"},Ie=m(" Back "),Ge={class:"md:w-1/3"},He={class:"text-gray-600",style:{"max-width":"350px"}},Ze=e("h2",{class:"text-lg font-semibold mb-3"},"Summary",-1),Ke={class:"flex justify-between mb-1"},Re=e("span",null,"Total price:",-1),Xe=e("li",{class:"flex justify-between mb-1"},[e("span",null,"Discount:"),e("span",{class:"text-green-500"},"- $0.00")],-1),ze=e("li",{class:"flex justify-between mb-1"},[e("span",null,"TAX:"),e("span",null,"$0.00")],-1),Je={class:"border-t flex justify-between mt-3 pt-3"},Qe=e("span",null,"Total price:",-1),We={class:"text-gray-900 font-bold"},Ye=e("hr",{class:"my-4"},null,-1),$e=e("h2",{class:"text-lg font-semibold mb-3"},"Items in cart",-1),es={class:"flex items-center mb-4 leading-5"},ss={class:"block relative w-20 h-20 rounded p-1 border border-gray-200"},ts=["src"],os={class:"absolute -top-2 -right-2 w-6 h-6 text-sm text-center flex items-center justify-center text-white bg-gray-400 rounded-full"},rs={class:"ml-3"},ls=e("br",null,null,-1),as={class:"mt-1 text-gray-400"};function ns(d,s,o,r,ds,b){const _=y("Link"),f=y("FrontLayout");return l(),T(f,null,{default:h(()=>[e("section",A,[e("div",P,[d.$page.props.flash.checkout?(l(),a("div",q,[e("div",M,[e("div",N,[D,e("div",E,[I,e("p",G,n(d.$page.props.flash.checkout),1),H,e("div",Z,[p(_,{href:"/",class:"px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"},{default:h(()=>[K]),_:1})])])])])])):(l(),a("div",R,[e("main",X,[d.$page.props.auth.user?c("",!0):(l(),a("article",z,[e("div",J,[Q,e("div",W,[p(_,{class:"px-4 py-2 inline-block text-blue-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600",href:"/login"},{default:h(()=>[Y]),_:1}),p(_,{class:"px-4 py-2 inline-block text-white bg-blue-600 shadow-sm border border-transparent rounded-md hover:bg-blue-700",href:"/register"},{default:h(()=>[$]),_:1})])])])),e("article",ee,[d.$page.props.auth.user?(l(),a("h2",se,"Checkout")):(l(),a("h2",te,"Guest Checkout")),e("div",oe,[e("div",re,[le,o.errors.first_name?(l(),a("div",ae,n(o.errors.first_name),1)):Object.keys(o.errors).length?(l(),a("div",ne,"\xA0")):c("",!0),i(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>r.form.first_name=t),class:"appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",type:"text",placeholder:"Type here"},null,512),[[u,r.form.first_name]])]),e("div",de,[ie,o.errors.last_name?(l(),a("div",ce,n(o.errors.last_name),1)):Object.keys(o.errors).length?(l(),a("div",me,"\xA0")):c("",!0),i(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>r.form.last_name=t),class:"appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",type:"text",placeholder:"Type here"},null,512),[[u,r.form.last_name]])])]),e("div",he,[e("div",ue,[be,o.errors.phone?(l(),a("div",_e,n(o.errors.phone),1)):Object.keys(o.errors).length?(l(),a("div",pe,"\xA0")):c("",!0),e("div",ge,[ye,i(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>r.form.phone=t),class:"appearance-none flex-1 border border-gray-200 bg-gray-100 rounded-tr-md rounded-br-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400",type:"text",placeholder:"Type phone"},null,512),[[u,r.form.phone]])])]),e("div",fe,[xe,o.errors.email?(l(),a("div",ve,n(o.errors.email),1)):Object.keys(o.errors).length?(l(),a("div",ke,"\xA0")):c("",!0),i(e("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>r.form.email=t),class:"appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",type:"email",placeholder:"Type here"},null,512),[[u,r.form.email]])])]),e("label",we,[i(e("input",{"onUpdate:modelValue":s[4]||(s[4]=t=>r.form.term=t),type:"checkbox",class:"h-4 w-4"},null,512),[[V,r.form.term]]),Ce]),o.errors.term?(l(),a("div",je,n(o.errors.term),1)):c("",!0),Te,Ve,o.errors.shipping?(l(),a("div",Le,n(o.errors.shipping),1)):c("",!0),e("div",Fe,[e("label",Oe,[e("span",null,[i(e("input",{"onUpdate:modelValue":s[5]||(s[5]=t=>r.form.shipping=t),value:"express",type:"radio",class:"h-4 w-4 mt-1"},null,512),[[g,r.form.shipping]])]),Ue]),e("label",Be,[e("span",null,[i(e("input",{"onUpdate:modelValue":s[6]||(s[6]=t=>r.form.shipping=t),value:"post",type:"radio",class:"h-4 w-4 mt-1"},null,512),[[g,r.form.shipping]])]),Se]),e("label",Ae,[e("span",null,[i(e("input",{"onUpdate:modelValue":s[7]||(s[7]=t=>r.form.shipping=t),value:"self",type:"radio",class:"h-4 w-4 mt-1"},null,512),[[g,r.form.shipping]])]),Pe])]),e("div",qe,[e("div",Me,[Ne,o.errors.address?(l(),a("div",De,n(o.errors.address),1)):c("",!0),i(e("input",{"onUpdate:modelValue":s[8]||(s[8]=t=>r.form.address=t),class:"appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",type:"text",placeholder:"Type here"},null,512),[[u,r.form.address]])])]),e("div",Ee,[p(_,{class:"px-5 py-2 inline-block text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600",href:"/cart"},{default:h(()=>[Ie]),_:1}),e("span",{onClick:s[9]||(s[9]=(...t)=>b.checkout&&b.checkout(...t)),class:"cursor-pointer px-5 py-2 inline-block text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"}," Checkout ")])])]),e("aside",Ge,[e("article",He,[Ze,e("ul",null,[e("li",Ke,[Re,e("span",null,"$"+n(b.totalPrice/100),1)]),Xe,ze,e("li",Je,[Qe,e("span",We,"$"+n(b.totalPrice/100),1)])]),Ye,$e,(l(!0),a(L,null,F(r.cart.data,(t,x)=>(l(),a("figure",es,[e("div",null,[e("div",ss,[e("img",{width:"70",height:"70",src:t.img,alt:"Title"},null,8,ts),e("span",os,n(x+1),1)])]),e("figcaption",rs,[e("p",null,[m(n(t.name)+" ",1),ls,m(" "+n(t.qtty)+" Items ",1)]),e("p",as," Total: $"+n(t.qtty*t.price/100),1)])]))),256))])])]))])])]),_:1})}const us=B(S,[["render",ns]]);export{us as default};
