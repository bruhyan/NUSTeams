(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[10],{616:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(617);function l(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},617:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},618:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(616);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,l=!1,r=void 0;try{for(var c,m=e[Symbol.iterator]();!(n=(c=m.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(o){l=!0,r=o}finally{try{n||null==m.return||m.return()}finally{if(l)throw r}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},620:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(617);var l=a(616);function r(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},687:function(e,t,a){"use strict";a.r(t);var n=a(620),l=a(618),r=a(1),c=a.n(r),m=a(614),o=a(615);t.default=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),a=(t[0],t[1],Object(r.useState)([!1,!1])),i=Object(l.a)(a,2),s=(i[0],i[1],Object(r.useState)(1)),E=Object(l.a)(s,2),u=E[0],d=E[1],p=Object(r.useState)(!1),h=Object(l.a)(p,2),b=(h[0],h[1],Object(r.useState)(!1)),g=Object(l.a)(b,2),f=g[0],v=g[1],x=Object(r.useState)(!1),j=Object(l.a)(x,2),w=(j[0],j[1],Object(r.useState)(!1)),k=Object(l.a)(w,2),y=k[0],S=k[1],O=Object(r.useState)([]),N=Object(l.a)(O,2),C=N[0],P=N[1],I=Object(r.useState)("top-right"),K=Object(l.a)(I,2),M=K[0],T=(K[1],Object(r.useState)(!0)),z=Object(l.a)(T,2),Y=z[0],F=(z[1],Object(r.useState)(5e3)),A=Object(l.a)(F,2),B=A[0],D=(A[1],Object(r.useState)(!0)),R=Object(l.a)(D,2),J=R[0],q=(R[1],Object(r.useState)(!0)),L=Object(l.a)(q,2),G=L[0],U=(L[1],Object(r.useState)(!0)),H=Object(l.a)(U,2),_=H[0],Q=(H[1],Object(r.useState)(!0)),W=Object(l.a)(Q,2),V=W[0],Z=(W[1],Object(r.useState)(!0)),$=Object(l.a)(Z,2),X=$[0],ee=($[1],Object(r.useState)(!0)),te=Object(l.a)(ee,2),ae=te[0],ne=(te[1],Object(r.useState)(!0)),le=Object(l.a)(ne,2),re=le[0],ce=(le[1],Object(r.useState)(!0)),me=Object(l.a)(ce,2),oe=me[0],ie=(me[1],function(){P([].concat(Object(n.a)(C),[{position:M,autohide:Y&&B,closeButton:re,fade:oe,java:J,javaScript:G,communication:_,leadership:V,hiphop:X,piano:ae}]))}),se=C.reduce((function(e,t){return e[t.position]=e[t.position]||[],e[t.position].push(t),e}),{}),Ee=Object(r.useState)(""),ue=Object(l.a)(Ee,2),de=ue[0],pe=ue[1];return c.a.createElement(c.a.Fragment,null,Object.keys(se).map((function(e){return c.a.createElement(m.rb,{position:e,key:"toaster"+e},se[e].map((function(e,t){return c.a.createElement(m.ob,{key:"toast"+t,show:!0,autohide:e.autohide,fade:e.fade},c.a.createElement(m.qb,{closeButton:e.closeButton,style:{backgroundColor:"green",color:"white"}},"System Notification"),c.a.createElement(m.pb,null,de))})))})),c.a.createElement(m.Y,null,c.a.createElement(m.l,null,c.a.createElement(m.g,null,c.a.createElement(m.k,null,c.a.createElement("h4",null,"About Me")),c.a.createElement(m.h,null,c.a.createElement(m.Y,null,c.a.createElement(m.l,{xs:"12",sm:"6",lg:"3"},c.a.createElement("div",{class:"profile-main"},c.a.createElement("div",{class:"profile-header"},c.a.createElement("div",{class:"user-detail"},c.a.createElement("div",{class:"user-image"},c.a.createElement("img",{src:"avatars/3.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}))))),c.a.createElement("div",{className:"clearfix"},c.a.createElement("div",{style:{display:"flex",flexDirecton:"row",justifyContent:"center"}},c.a.createElement(m.f,{color:"info",onClick:function(){return v(!f)}},"Invite")))),c.a.createElement(m.l,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},c.a.createElement(m.w,{action:"",method:"post",className:"form-horizontal"},c.a.createElement(m.x,{row:!0},c.a.createElement(m.l,{md:"4"},c.a.createElement(m.K,null,c.a.createElement("strong",null,"Name"))),c.a.createElement(m.l,{xs:"12",md:"7"},c.a.createElement("p",{className:"form-control-static"},"Regina Miles"))),c.a.createElement(m.x,{row:!0},c.a.createElement(m.l,{md:"4"},c.a.createElement(m.K,null,c.a.createElement("strong",null,"Major & Year"))),c.a.createElement(m.l,{xs:"12",md:"7"},c.a.createElement("p",{className:"form-control-static"},"Computer Science, Year 4"))),c.a.createElement(m.x,{row:!0},c.a.createElement(m.l,{md:"4"},c.a.createElement(m.K,null,c.a.createElement("strong",null,"Bio"))),c.a.createElement(m.l,{xs:"12",md:"7"},c.a.createElement("p",{className:"form-control-static"},"Hello, I am a Year 4 student who is interested in product design, PM me for collab!"))),c.a.createElement(m.x,{row:!0},c.a.createElement(m.l,{md:"4"},c.a.createElement(m.K,null,c.a.createElement("strong",null,"Contact"))),c.a.createElement(m.l,{xs:"12",md:"7"},c.a.createElement(m.f,{className:"btn-facebook btn-brand mr-1 mb-1"},c.a.createElement(o.a,{name:"cib-facebook"})),c.a.createElement(m.f,{className:"btn-linkedin btn-brand mr-1 mb-1"},c.a.createElement(o.a,{name:"cib-linkedin"})),c.a.createElement(m.f,{className:"btn-github btn-brand mr-1 mb-1"},c.a.createElement(o.a,{name:"cib-github"})),c.a.createElement(m.f,{className:"btn-linkedin btn-brand mr-1 mb-1"},c.a.createElement(o.a,{name:"cil-envelope-closed"})),c.a.createElement(m.f,{className:"btn-github btn-brand mr-1 mb-1"},c.a.createElement(o.a,{name:"cil-phone"})))),c.a.createElement(m.x,{row:!0},c.a.createElement(m.l,{md:"4"},c.a.createElement(m.K,null,c.a.createElement("strong",null,"Rating"))),c.a.createElement(m.l,{xs:"12",md:"7"},c.a.createElement(o.a,{name:"cil-star",style:{color:"#F3CD03"}})," ",c.a.createElement("span",{style:{color:"#F3CD03"}},"4.0 / 5.0"))),c.a.createElement(m.x,{row:!0},c.a.createElement(m.l,{md:"4"},c.a.createElement(m.K,null,c.a.createElement("strong",null,"Achievements"))),c.a.createElement(m.l,{xs:"12",md:"7"},c.a.createElement(m.b,{color:"success",className:"float-middle"},"Well-Loved"),"\xa0",c.a.createElement(m.b,{color:"info",className:"float-middle"},"Intermediate"))))))))),c.a.createElement(m.O,{show:f,onClose:function(){return v(!f)},color:"primary",size:"lg"},c.a.createElement(m.R,{closeButton:!0},c.a.createElement(m.S,null,"Invite User To Project")),c.a.createElement(m.P,null,c.a.createElement(m.w,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},c.a.createElement(m.x,{row:!0},c.a.createElement(m.l,{md:"3"},c.a.createElement(m.K,{htmlFor:"text-input"},"Name:")),c.a.createElement(m.l,{xs:"12",md:"9"},c.a.createElement(m.K,{htmlFor:"text-input"},"Regina Miles"))),c.a.createElement(m.x,{row:!0},c.a.createElement(m.l,{md:"3"},c.a.createElement(m.K,{htmlFor:"select"},"Major:")),c.a.createElement(m.l,{xs:"12",md:"9"},c.a.createElement(m.K,{htmlFor:"text-input"},"Information Systems"))),c.a.createElement(m.x,{row:!0},c.a.createElement(m.l,{md:"3"},c.a.createElement(m.K,{htmlFor:"select"},"Year:")),c.a.createElement(m.l,{xs:"12",md:"9"},c.a.createElement(m.K,{htmlFor:"text-input"},"4"))),c.a.createElement(m.x,{row:!0},c.a.createElement(m.l,{md:"3"},c.a.createElement(m.K,{htmlFor:"textarea-input"},"To Project:")),c.a.createElement(m.l,{xs:"12",md:"9"},c.a.createElement(m.Z,{custom:!0,name:"select",id:"select"},c.a.createElement("option",{value:"0"},"CS3240 Design Project"),c.a.createElement("option",{value:"1"},"CS4212 Compiler Design"),c.a.createElement("option",{value:"2"},"NM3222 Interactive Storytelling"),c.a.createElement("option",{value:"3"},"PF3504 Energy Management Project")))),c.a.createElement(m.x,{row:!0},c.a.createElement(m.l,{md:"3"},c.a.createElement(m.K,{htmlFor:"textarea-input"},"Invitation Message:")),c.a.createElement(m.l,{xs:"12",md:"9"},c.a.createElement(m.nb,{name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Yo. Join us plzzzzzzzzzzzzzz."}))))),c.a.createElement(m.Q,null,c.a.createElement(m.f,{color:"secondary",onClick:function(){return v(!f)}},"Cancel"),c.a.createElement(m.f,{color:"primary",onClick:function(){console.log("sending invitation"),v(!f),pe("User Invited. Please wait for a response."),ie()}},"Send")," ")),c.a.createElement(m.l,{xs:"12",xl:"6"},c.a.createElement(m.g,null,c.a.createElement(m.k,null,c.a.createElement("h4",null,"Skills")),c.a.createElement(m.h,null,c.a.createElement("div",{id:"accordion"},c.a.createElement(m.g,{className:"mb-0"},c.a.createElement(m.k,{id:"headingOne"},c.a.createElement(m.f,{block:!0,className:"text-left m-0 p-0",onClick:function(){return d(0===u?null:0)}},c.a.createElement("span",{className:"title"},"Tools & Technologies"))),c.a.createElement(m.m,{show:0===u},c.a.createElement(m.h,null,c.a.createElement(m.Y,null,c.a.createElement(m.l,null,c.a.createElement(m.ub,{text:"Endorsed By Ruichun and 10 others",header:"Java",color:"info",iconPadding:!1},c.a.createElement(o.a,{width:24,name:"cil-check"}))),c.a.createElement(m.l,null,c.a.createElement(m.ub,{text:"Endorsed By Shengjing and 10 others",header:"JavaScript",color:"info",iconPadding:!1},c.a.createElement(o.a,{width:24,name:"cil-check"}))))))),c.a.createElement(m.g,{className:"mb-0"},c.a.createElement(m.k,{id:"headingThree"},c.a.createElement(m.f,{block:!0,className:"text-left m-0 p-0",onClick:function(){return d(1===u?null:1)}},c.a.createElement("span",{className:"title"},"Soft Skills"))),c.a.createElement(m.m,{show:1===u},c.a.createElement(m.h,null,c.a.createElement(m.Y,null,c.a.createElement(m.l,null,c.a.createElement(m.ub,{text:"Endorsed By Bryan and 10 others",header:"Communication",color:"info",iconPadding:!1},c.a.createElement(o.a,{width:24,name:"cil-check"}))),c.a.createElement(m.l,null,c.a.createElement(m.ub,{text:"Endorsed By Jingzhan and 10 others",header:"Leadership",color:"info",iconPadding:!1},c.a.createElement(o.a,{width:24,name:"cil-check"}))))))),c.a.createElement(m.g,{className:"mb-0"},c.a.createElement(m.k,{id:"headingThree"},c.a.createElement(m.f,{block:!0,className:"text-left m-0 p-0",onClick:function(){return d(3===u?null:3)}},c.a.createElement("span",{className:"title"},"Other Skills"))),c.a.createElement(m.m,{show:3===u},c.a.createElement(m.h,null,c.a.createElement(m.Y,null,c.a.createElement(m.l,null,c.a.createElement(m.ub,{header:"Hip-hop",color:"info",iconPadding:!1},c.a.createElement(o.a,{width:24,name:"cil-check"}))),c.a.createElement(m.l,null,c.a.createElement(m.ub,{header:"Piano",color:"info",iconPadding:!1},c.a.createElement(o.a,{width:24,name:"cil-check"})))))))))))),c.a.createElement(m.Y,null,c.a.createElement(m.l,null,c.a.createElement(m.g,null,c.a.createElement(m.k,null,c.a.createElement("h4",null,"Projects Involved")),c.a.createElement(m.h,null,c.a.createElement(m.M,null,c.a.createElement(m.N,{action:!0},c.a.createElement(m.Y,null,c.a.createElement(m.l,{xs:"12",xl:"6"},c.a.createElement("div",{class:"experience-main"},c.a.createElement("div",{class:"experience-detail"},c.a.createElement("div",{class:"experience-data"},c.a.createElement("div",{class:"experience-image"},c.a.createElement("img",{src:"https://www.t2techgroup.com/wp-content/uploads/2017/06/New-Project-Management-Icon.png"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 NUSTeams")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Project focuses on design and critique"))))),c.a.createElement(m.l,{xs:"12",sm:"6",lg:"3"},c.a.createElement("div",null,c.a.createElement("strong",null,"Module Project")),c.a.createElement("div",null,"CS3240 Interaction Design")),c.a.createElement(m.l,{xs:"12",sm:"6",lg:"3"},c.a.createElement("div",null,c.a.createElement("strong",null,"2020-2021 Semester 1")),c.a.createElement("div",{className:"float-right"},c.a.createElement(m.b,{color:"success",className:"float-middle"},"COMPLETED"))))),c.a.createElement(m.N,{action:!0},c.a.createElement(m.Y,null,c.a.createElement(m.l,{xs:"12",xl:"6"},c.a.createElement("div",{class:"experience-main"},c.a.createElement("div",{class:"experience-detail"},c.a.createElement("div",{class:"experience-data"},c.a.createElement("div",{class:"experience-image"},c.a.createElement("img",{src:"https://www.t2techgroup.com/wp-content/uploads/2017/06/New-Project-Management-Icon.png"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 IS4103 Team 2")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Project focuses on full stack development"))))),c.a.createElement(m.l,{xs:"12",sm:"6",lg:"3"},c.a.createElement("div",null,c.a.createElement("strong",null,"Module Project")),c.a.createElement("div",null,"IS4103 Capstone Project")),c.a.createElement(m.l,{xs:"12",sm:"6",lg:"3"},c.a.createElement("div",null,c.a.createElement("strong",null,"2020-2021 Semester 1")),c.a.createElement("div",{className:"float-right"},c.a.createElement(m.b,{color:"success",className:"float-middle"},"COMPLETED"))))),c.a.createElement(m.N,{action:!0},c.a.createElement(m.Y,null,c.a.createElement(m.l,{xs:"12",xl:"6"},c.a.createElement("div",{class:"experience-main"},c.a.createElement("div",{class:"experience-detail"},c.a.createElement("div",{class:"experience-data"},c.a.createElement("div",{class:"experience-image"},c.a.createElement("img",{src:"https://www.t2techgroup.com/wp-content/uploads/2017/06/New-Project-Management-Icon.png"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 IS3106 Team 2")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Project focuses on front end development"))))),c.a.createElement(m.l,{xs:"12",sm:"6",lg:"3"},c.a.createElement("div",null,c.a.createElement("strong",null,"Module Project")),c.a.createElement("div",null,"IS3106 Enterprise Systems Interface Design and Development")),c.a.createElement(m.l,{xs:"12",sm:"6",lg:"3"},c.a.createElement("div",null,c.a.createElement("strong",null,"2020-2021 Semester 1")),c.a.createElement("div",{className:"float-right"},c.a.createElement(m.b,{color:"success",className:"float-middle"},"COMPLETED")))))))))),c.a.createElement(m.Y,null,c.a.createElement(m.l,null,c.a.createElement(m.g,null,c.a.createElement(m.k,null,c.a.createElement("h4",null,"Education")),c.a.createElement(m.h,null,c.a.createElement(m.M,null,c.a.createElement(m.N,{action:!0},c.a.createElement("div",{class:"education-main"},c.a.createElement("div",{class:"education-detail"},c.a.createElement("div",{class:"education-data"},c.a.createElement("div",{class:"education-image"},c.a.createElement("img",{src:"https://cdn.worldvectorlogo.com/logos/nus.svg"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0National University of Singapore")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Bachelor of Computing, Information Systems"),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 2017-2021"))))),c.a.createElement(m.N,{action:!0},c.a.createElement("div",{class:"education-main"},c.a.createElement("div",{class:"education-detail"},c.a.createElement("div",{class:"education-data"},c.a.createElement("div",{class:"education-image"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Georgia_Tech_seal.svg/1200px-Georgia_Tech_seal.svg.png"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 Georgia Institute of Technology")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Student Exchange"),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 2018-2019"))))),c.a.createElement(m.N,{action:!0},c.a.createElement("div",{class:"education-main"},c.a.createElement("div",{class:"education-detail"},c.a.createElement("div",{class:"education-data"},c.a.createElement("div",{class:"education-image"},c.a.createElement("img",{src:"https://rafflesmun.files.wordpress.com/2017/01/copy-of-icon.png"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 Raffles Institude")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Singapore-Cambridge GCSE A-level"),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 2015-2017")))))))))),c.a.createElement(m.Y,null,c.a.createElement(m.l,null,c.a.createElement(m.g,null,c.a.createElement(m.k,null,c.a.createElement("h4",null,"Teammates Feedback")),c.a.createElement(m.h,null,c.a.createElement(m.M,null,c.a.createElement(m.N,{action:!0},c.a.createElement(m.Y,null,c.a.createElement(m.l,{xs:"12",xl:"6"},c.a.createElement("div",{class:"experience-main"},c.a.createElement("div",{class:"experience-detail"},c.a.createElement("div",{class:"experience-data"},c.a.createElement("div",{class:"experience-image"},c.a.createElement("img",{src:"https://textgod.com/wp-content/uploads/2019/06/louis-roze-trui-pink.jpg"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 Tom Cruise")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Posted 3 days ago"))))),c.a.createElement(m.l,{xs:"12",xl:"6"},c.a.createElement("div",null,"Stephen is a hardworker who values teamwork. Highly recommended!")))),c.a.createElement(m.N,{action:!0},c.a.createElement(m.Y,null,c.a.createElement(m.l,{xs:"12",xl:"6"},c.a.createElement("div",{class:"experience-main"},c.a.createElement("div",{class:"experience-detail"},c.a.createElement("div",{class:"experience-data"},c.a.createElement("div",{class:"experience-image"},c.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLpo2kLh0mOYWWqzKaVwIp-FhQkOAkIIDqdg&usqp=CAU"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 Matt Damon")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Posted on 3/29/2020"))))),c.a.createElement(m.l,{xs:"12",xl:"6"},c.a.createElement("div",null,"Good programmer")))),c.a.createElement(m.N,{action:!0},c.a.createElement(m.Y,null,c.a.createElement(m.l,{xs:"12",xl:"6"},c.a.createElement("div",{class:"experience-main"},c.a.createElement("div",{class:"experience-detail"},c.a.createElement("div",{class:"experience-data"},c.a.createElement("div",{class:"experience-image"},c.a.createElement("img",{src:"https://selectedsoundsblog.files.wordpress.com/2015/09/george1.jpg"})),c.a.createElement("h5",null,c.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 Sam Smith")),c.a.createElement("div",null,"\xa0 \xa0 \xa0 \xa0 Posted on 3/29/2020"))))),c.a.createElement(m.l,{xs:"12",xl:"6"},c.a.createElement("div",null,"Pleasant teammate who you can consult with anything."))))),c.a.createElement(m.O,{show:y,onClose:S},c.a.createElement(m.R,{closeButton:!0},c.a.createElement(m.S,null,"Report an issue")),c.a.createElement(m.P,null,c.a.createElement(m.w,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},c.a.createElement(m.x,{row:!0},c.a.createElement(m.l,{md:"3"},c.a.createElement(m.K,null,"Name")),c.a.createElement(m.l,{xs:"12",md:"9"},c.a.createElement("p",{className:"form-control-static"},"Tom Cruise"))),c.a.createElement(m.x,{row:!0},c.a.createElement(m.l,{md:"3"},c.a.createElement(m.K,null,"Content")),c.a.createElement(m.l,{xs:"12",md:"9"},c.a.createElement("p",{className:"form-control-static"},"Stephen is a hardworker who values teamwork. Highly recommended!"))),c.a.createElement(m.x,{row:!0},c.a.createElement(m.l,{md:"3"},c.a.createElement(m.K,null,"Reason(s)")),c.a.createElement(m.l,{md:"9"},c.a.createElement(m.x,{variant:"checkbox"},c.a.createElement(m.J,{className:"form-check-input",id:"radio1",name:"radios",value:"option1"}),c.a.createElement(m.K,{variant:"checkbox",htmlFor:"radio1"},"False Information")),c.a.createElement(m.x,{variant:"checkbox"},c.a.createElement(m.J,{className:"form-check-input",id:"radio2",name:"radios",value:"option2"}),c.a.createElement(m.K,{variant:"checkbox",htmlFor:"radio2"},"Illegal Information")),c.a.createElement(m.x,{variant:"checkbox"},c.a.createElement(m.J,{className:"form-check-input",id:"radio3",name:"radios",value:"option3"}),c.a.createElement(m.K,{variant:"checkbox",htmlFor:"radio3"},"Personal Attack")),c.a.createElement(m.x,{variant:"checkbox"},c.a.createElement(m.J,{className:"form-check-input",id:"radio4",name:"radios",value:"option3"}),c.a.createElement(m.K,{variant:"checkbox",htmlFor:"radio3"},"Others")))),c.a.createElement(m.x,{row:!0},c.a.createElement(m.l,{md:"3"},c.a.createElement(m.K,{htmlFor:"textarea-input"},"Textarea")),c.a.createElement(m.l,{xs:"12",md:"9"},c.a.createElement(m.nb,{name:"textarea-input",id:"textarea-input",rows:"9",placeholder:"Report description..."}))))),c.a.createElement(m.Q,null,c.a.createElement(m.f,{color:"primary",onClick:ie},"Report")," ",c.a.createElement(m.f,{color:"secondary",onClick:function(){return S(!1)}},"Cancel")),Object.keys(se).map((function(e){return c.a.createElement(m.rb,{position:"top-center",key:"toaster"+e},se[e].map((function(e,t){return c.a.createElement(m.ob,{key:"toast"+t,show:!0,autohide:e.autohide,fade:e.fade},c.a.createElement(m.qb,{closeButton:e.closeButton},"Confirmation"),c.a.createElement(m.pb,null,"Your report has been received and will be reviewed by our support staff soon"))})))}))))))))}}}]);
//# sourceMappingURL=10.56ba1171.chunk.js.map