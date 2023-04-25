import{o as s,e as r,a as e,i as C,d as x,J as y,x as B,u as d,n as g,g as i,t as p,f as w,b as n,G as L,w as o,l as F,j as a,c as v,F as b,k as $,r as j,O as M}from"./app-418b299f.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as z,a as _,b as T,c as h}from"./ResponsiveNavLink-ffe09187.js";const A={},N={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},D=e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),O=e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),V=[D,O];function I(k,l){return s(),r("svg",N,V)}const E=P(A,[["render",I]]),G={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},H={class:"flex items-center justify-between flex-wrap"},J={class:"w-0 flex-1 flex items-center min-w-0"},q={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},K=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Q=[K],R={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},U=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),W=[U],X={class:"ml-3 font-medium text-sm text-white truncate"},Y={class:"shrink-0 sm:ml-3"},Z=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),ee=[Z],te={__name:"Banner",setup(k){const l=C(!0),u=x(()=>{var t;return((t=y().props.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),m=x(()=>{var t;return((t=y().props.jetstream.flash)==null?void 0:t.banner)||""});return B(m,async()=>{l.value=!0}),(t,f)=>(s(),r("div",null,[l.value&&d(m)?(s(),r("div",{key:0,class:g({"bg-indigo-500":d(u)=="success","bg-red-700":d(u)=="danger"})},[e("div",G,[e("div",H,[e("div",J,[e("span",{class:g(["flex p-2 rounded-lg",{"bg-indigo-600":d(u)=="success","bg-red-600":d(u)=="danger"}])},[d(u)=="success"?(s(),r("svg",q,Q)):i("",!0),d(u)=="danger"?(s(),r("svg",R,W)):i("",!0)],2),e("p",X,p(d(m)),1)]),e("div",Y,[e("button",{type:"button",class:g(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":d(u)=="success","hover:bg-red-600 focus:bg-red-600":d(u)=="danger"}]),"aria-label":"Dismiss",onClick:f[0]||(f[0]=w(c=>l.value=!1,["prevent"]))},ee,2)])])])],2)):i("",!0)]))}},se={class:"min-h-screen bg-gray-100"},oe={class:"bg-white border-b border-gray-100"},re={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ne={class:"flex justify-between h-16"},ae={class:"flex"},ie={class:"shrink-0 flex items-center"},le={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},de={class:"hidden sm:flex sm:items-center sm:ml-6"},ue={class:"ml-3 relative"},ce={class:"inline-flex rounded-md"},he={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},pe=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),me={class:"w-60"},_e=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),ge=e("div",{class:"border-t border-gray-200"},null,-1),fe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),ve=["onSubmit"],we={class:"flex items-center"},be={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},ke=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),xe=[ke],ye={class:"ml-3 relative"},$e={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},je=["src","alt"],Me={key:1,class:"inline-flex rounded-md"},Te={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},Ce=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),Se=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Be=e("div",{class:"border-t border-gray-200"},null,-1),Le=["onSubmit"],Fe={class:"-mr-2 flex items-center sm:hidden"},Pe={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},ze={class:"pt-2 pb-3 space-y-1"},Ae={class:"pt-4 pb-1 border-t border-gray-200"},Ne={class:"flex items-center px-4"},De={key:0,class:"shrink-0 mr-3"},Oe=["src","alt"],Ve={class:"font-medium text-base text-gray-800"},Ie={class:"font-medium text-sm text-gray-500"},Ee={class:"mt-3 space-y-1"},Ge=["onSubmit"],He=e("div",{class:"border-t border-gray-200"},null,-1),Je=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),qe=e("div",{class:"border-t border-gray-200"},null,-1),Ke=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Qe=["onSubmit"],Re={class:"flex items-center"},Ue={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},We=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Xe=[We],Ye={key:0,class:"bg-white shadow"},Ze={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ot={__name:"AppLayout",props:{title:String},setup(k){const l=C(!1),u=t=>{M.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},m=()=>{M.post(route("logout"))};return(t,f)=>(s(),r("div",null,[n(d(L),{title:k.title},null,8,["title"]),n(te),e("div",se,[e("nav",oe,[e("div",re,[e("div",ne,[e("div",ae,[e("div",ie,[n(d(F),{href:t.route("dashboard")},{default:o(()=>[n(E,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",le,[n(z,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[a(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",de,[e("div",ue,[t.$page.props.jetstream.hasTeamFeatures?(s(),v(T,{key:0,align:"right",width:"60"},{trigger:o(()=>[e("span",ce,[e("button",he,[a(p(t.$page.props.auth.user.current_team.name)+" ",1),pe])])]),content:o(()=>[e("div",me,[t.$page.props.jetstream.hasTeamFeatures?(s(),r(b,{key:0},[_e,n(_,{href:t.route("teams.show",t.$page.props.auth.user.current_team)},{default:o(()=>[a(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(s(),v(_,{key:0,href:t.route("teams.create")},{default:o(()=>[a(" Create New Team ")]),_:1},8,["href"])):i("",!0),ge,fe,(s(!0),r(b,null,$(t.$page.props.auth.user.all_teams,c=>(s(),r("form",{key:c.id,onSubmit:w(S=>u(c),["prevent"])},[n(_,{as:"button"},{default:o(()=>[e("div",we,[c.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",be,xe)):i("",!0),e("div",null,p(c.name),1)])]),_:2},1024)],40,ve))),128))],64)):i("",!0)])]),_:1})):i("",!0)]),e("div",ye,[n(T,{align:"right",width:"48"},{trigger:o(()=>[t.$page.props.jetstream.managesProfilePhotos?(s(),r("button",$e,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,je)])):(s(),r("span",Me,[e("button",Te,[a(p(t.$page.props.auth.user.name)+" ",1),Ce])]))]),content:o(()=>[Se,n(_,{href:t.route("profile.show")},{default:o(()=>[a(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(s(),v(_,{key:0,href:t.route("api-tokens.index")},{default:o(()=>[a(" API Tokens ")]),_:1},8,["href"])):i("",!0),Be,e("form",{onSubmit:w(m,["prevent"])},[n(_,{as:"button"},{default:o(()=>[a(" Log Out ")]),_:1})],40,Le)]),_:1})])]),e("div",Fe,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",onClick:f[0]||(f[0]=c=>l.value=!l.value)},[(s(),r("svg",Pe,[e("path",{class:g({hidden:l.value,"inline-flex":!l.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:g({hidden:!l.value,"inline-flex":l.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:g([{block:l.value,hidden:!l.value},"sm:hidden"])},[e("div",ze,[n(h,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[a(" Dashboard ")]),_:1},8,["href","active"])]),e("div",Ae,[e("div",Ne,[t.$page.props.jetstream.managesProfilePhotos?(s(),r("div",De,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Oe)])):i("",!0),e("div",null,[e("div",Ve,p(t.$page.props.auth.user.name),1),e("div",Ie,p(t.$page.props.auth.user.email),1)])]),e("div",Ee,[n(h,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:o(()=>[a(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(s(),v(h,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:o(()=>[a(" API Tokens ")]),_:1},8,["href","active"])):i("",!0),e("form",{method:"POST",onSubmit:w(m,["prevent"])},[n(h,{as:"button"},{default:o(()=>[a(" Log Out ")]),_:1})],40,Ge),t.$page.props.jetstream.hasTeamFeatures?(s(),r(b,{key:1},[He,Je,n(h,{href:t.route("teams.show",t.$page.props.auth.user.current_team),active:t.route().current("teams.show")},{default:o(()=>[a(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(s(),v(h,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:o(()=>[a(" Create New Team ")]),_:1},8,["href","active"])):i("",!0),qe,Ke,(s(!0),r(b,null,$(t.$page.props.auth.user.all_teams,c=>(s(),r("form",{key:c.id,onSubmit:w(S=>u(c),["prevent"])},[n(h,{as:"button"},{default:o(()=>[e("div",Re,[c.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",Ue,Xe)):i("",!0),e("div",null,p(c.name),1)])]),_:2},1024)],40,Qe))),128))],64)):i("",!0)])])],2)]),t.$slots.header?(s(),r("header",Ye,[e("div",Ze,[j(t.$slots,"header")])])):i("",!0),e("main",null,[j(t.$slots,"default")])])]))}};export{ot as _};