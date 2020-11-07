(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[14],{690:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(19),l=t(614),m=[{path:"/dashboard",name:"Dashboard",component:c.a.lazy((function(){return t.e(7).then(t.bind(null,680))}))},{path:"/profile",name:"UserProfile",component:c.a.lazy((function(){return t.e(9).then(t.bind(null,692))}))},{path:"/users",exact:!0,name:"Users",component:c.a.lazy((function(){return t.e(12).then(t.bind(null,681))}))},{path:"/users/:id",exact:!0,name:"User Details",component:c.a.lazy((function(){return t.e(11).then(t.bind(null,682))}))},{path:"/project/:id",exact:!0,name:"Project Details",component:c.a.lazy((function(){return Promise.all([t.e(4),t.e(20)]).then(t.bind(null,683))}))},{path:"/my_project/:id",exact:!0,name:"My Project Details",component:c.a.lazy((function(){return Promise.all([t.e(5),t.e(19)]).then(t.bind(null,684))}))},{path:"/view-all-projects",exact:!0,name:"View All Projects",component:c.a.lazy((function(){return t.e(13).then(t.bind(null,685))}))},{path:"/view-users",exact:!0,name:"View Users",component:c.a.lazy((function(){return t.e(22).then(t.bind(null,686))}))},{path:"/user-portfolio",name:"User Portfolio",component:c.a.lazy((function(){return t.e(10).then(t.bind(null,687))}))},{path:"/view-my-projects",name:"View My Projects",component:c.a.lazy((function(){return t.e(21).then(t.bind(null,688))}))}],s=c.a.createElement("div",{className:"pt-3 text-center"},c.a.createElement("div",{className:"sk-spinner sk-spinner-pulse"})),o=c.a.memo((function(){return c.a.createElement("main",{className:"c-main"},c.a.createElement(l.n,{fluid:!0},c.a.createElement(n.Suspense,{fallback:s},c.a.createElement(r.d,null,m.map((function(e,a){return e.component&&c.a.createElement(r.b,{key:a,path:e.path,exact:e.exact,name:e.name,render:function(a){return c.a.createElement(l.u,null,c.a.createElement(e.component,a))}})})),c.a.createElement(r.a,{from:"/",to:"/dashboard"})))))})),i=c.a.memo((function(){return c.a.createElement(l.v,{fixed:!1},c.a.createElement("div",null,c.a.createElement("span",{className:"ml-1"},"\xa9 2020 NUSTeams.")))})),u=t(158),d=t(615),p=function(){var e=Object(u.b)(),a=Object(u.c)((function(e){return e.sidebarShow}));return c.a.createElement(l.y,{withSubheader:!0},c.a.createElement(l.sb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var t=!![!1,"responsive"].includes(a)||"responsive";e({type:"set",sidebarShow:t})}}),c.a.createElement(l.sb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var t=![!0,"responsive"].includes(a)&&"responsive";e({type:"set",sidebarShow:t})}}),c.a.createElement(l.z,{className:"mx-auto d-lg-none",to:"/"},c.a.createElement(d.a,{name:"logo",height:"48",alt:"Logo"})),c.a.createElement(l.A,{className:"d-md-down-none mr-auto"}),c.a.createElement(l.A,{className:"px-3"},c.a.createElement(b,null)),c.a.createElement(l.ib,{className:"px-3 justify-content-between"},c.a.createElement(l.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:m})))},b=function(){var e=Object(r.g)();return c.a.createElement(l.q,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down"},c.a.createElement(l.t,{className:"c-header-nav-link",caret:!1},c.a.createElement("div",{className:"c-avatar"},c.a.createElement(l.B,{src:"https://ii.yuki.la/c/da/3e777cb605409054fab6f88c5cf2ff79c6e42c1d8c3697278129051bcd51adac.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}))),c.a.createElement(l.s,{className:"pt-0",placement:"bottom-end"},c.a.createElement(l.r,{header:!0,tag:"div",color:"light",className:"text-center"},c.a.createElement("strong",null,"Account")),c.a.createElement(l.r,{onClick:function(){e.push("/profile")}},c.a.createElement(d.a,{name:"cil-user",className:"mfe-2"}),"Profile"),c.a.createElement(l.r,null,c.a.createElement(d.a,{name:"cil-settings",className:"mfe-2"}),"Settings"),c.a.createElement(l.r,{divider:!0}),c.a.createElement(l.r,null,c.a.createElement(d.a,{name:"cil-lock-locked",className:"mfe-2"}),"Log Out")))},E=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:c.a.createElement(d.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"My Projects",to:"/view-my-projects",icon:c.a.createElement(d.a,{name:"cil-bookmark",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Search Projects",to:"/view-all-projects",icon:c.a.createElement(d.a,{name:"cil-lightbulb",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Search Users",to:"/view-users",icon:c.a.createElement(d.a,{name:"cil-user",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Settings",to:"",icon:c.a.createElement(d.a,{name:"cil-settings",customClasses:"c-sidebar-nav-icon"})}],h=c.a.memo((function(){var e=Object(u.b)(),a=Object(u.c)((function(e){return e.sidebarShow}));return c.a.createElement(l.ab,{show:a,onShowChange:function(a){return e({type:"set",sidebarShow:a})}},c.a.createElement(l.bb,{className:"d-md-down-none",to:"/"},c.a.createElement("img",{src:"avatars/logo.png"})),c.a.createElement(l.db,null,c.a.createElement(l.o,{items:E,components:{CSidebarNavDivider:l.eb,CSidebarNavDropdown:l.fb,CSidebarNavItem:l.gb,CSidebarNavTitle:l.hb}})),c.a.createElement(l.cb,{className:"c-d-md-down-none"}))}));a.default=function(){return c.a.createElement("div",{className:"c-app c-default-layout"},c.a.createElement(h,null),c.a.createElement("div",{className:"c-wrapper"},c.a.createElement(p,null),c.a.createElement("div",{className:"c-body"},c.a.createElement(o,null)),c.a.createElement(i,null)))}}}]);
//# sourceMappingURL=14.2b372382.chunk.js.map