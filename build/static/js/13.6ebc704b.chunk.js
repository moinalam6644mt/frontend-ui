"use strict";(self.webpackChunkfrontend_ui=self.webpackChunkfrontend_ui||[]).push([[13],{7013:(e,s,a)=>{a.r(s),a.d(s,{default:()=>d});var l=a(5043),i=a(3216),c=a(5475),t=a(1659),n=a(1640),r=a(579);const d=()=>{const{use_id:e}=(0,i.g)(),{setAgent:s}=(0,l.useContext)(n.A),{callApi:a}=(0,t.A)(),[d,m]=(0,l.useState)([]),[o,h]=(0,l.useState)(),[x,j]=(0,l.useState)(1),[N,b]=(0,l.useState)();(0,l.useEffect)((()=>{p()}),[x]),console.log(e);const p=async()=>{try{const e=await a({api:`/get_all_agent/?page=${x}`,method:"GET"});e&&"true"===e.success&&(s(e.data),m(e.data),h(e.path),j(e.page),b(e.totalPage))}catch(e){console.error("Error fetching agent data:",e)}};return(0,r.jsxs)(l.Fragment,{children:[(0,r.jsx)("div",{className:"clearfix"}),(0,r.jsx)("div",{className:"short-banner",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"filterHeader d-lg-none",children:[(0,r.jsx)("h4",{children:"Filters"}),(0,r.jsx)("a",{className:"float-end",title:"Filter",children:(0,r.jsx)("i",{className:"icon-feather-filter f20"})})]}),(0,r.jsxs)("div",{className:"filter",children:[(0,r.jsx)("div",{className:"card-header filterHeader d-lg-none mb-4",children:(0,r.jsxs)("div",{className:"row d-flex",children:[(0,r.jsx)("div",{className:"col text-left",children:(0,r.jsx)("h4",{children:"Filters"})}),(0,r.jsx)("div",{className:"col",children:(0,r.jsx)("a",{className:"close_filter",title:"Filter",children:(0,r.jsx)("i",{className:"icon-feather-x f20"})})})]})}),(0,r.jsx)("div",{className:"card-header filterHeader mb-4 filter-clear-area-wrap",hidden:"",style:{display:"none"},children:(0,r.jsx)("div",{className:"row d-flex mt-2 filter-clear-area"})}),(0,r.jsx)("div",{className:"acc-panel",children:(0,r.jsx)("form",{"data-filter":"n",children:(0,r.jsxs)("div",{className:"row -mb-3",children:[(0,r.jsx)("div",{className:"col-lg-3 col-sm-6 col-12",children:(0,r.jsx)("div",{className:"form-field",children:(0,r.jsx)("div",{className:"btn-group bootstrap-select hide-tick1 fit-width",children:(0,r.jsxs)("button",{type:"button",className:"btn dropdown-toggle bs-placeholder btn-default","data-toggle":"dropdown",role:"button","data-id":"city",title:"Select City",children:[(0,r.jsx)("span",{className:"filter-option pull-left",children:"Select City"}),"\xa0",(0,r.jsx)("span",{className:"bs-caret",children:(0,r.jsx)("span",{className:"caret"})})]})})})}),(0,r.jsx)("div",{className:"col-lg-9 col-sm-6 col-12",children:(0,r.jsxs)("div",{className:"form-field with-icon-start",children:[(0,r.jsx)("i",{className:"icon-feather-map-pin"}),(0,r.jsx)("input",{type:"text",name:"address",id:"address",className:"form-control address-box",placeholder:"Address",autoComplete:"off"})]})})]})})})]})]})}),(0,r.jsx)("section",{className:"section",children:(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("aside",{className:"col-xl-9 col-lg-9 col-12",children:[(0,r.jsxs)("div",{className:"d-sm-flex justify-content-between align-items-center mb-2",children:[(0,r.jsxs)("h4",{className:"mb-3 mb-sm-0",children:[(0,r.jsx)("span",{className:"text-primary-filter",style:{display:"none"}}),"Agent List (",d.length,")"]}),(0,r.jsxs)("div",{className:"sort-by",children:[(0,r.jsx)("a",{className:"btn btn-list me-2 active",children:(0,r.jsx)("i",{className:"icon-feather-list"})}),(0,r.jsx)("a",{className:"btn btn-grid",children:(0,r.jsx)("i",{className:"icon-feather-grid"})})]})]}),(0,r.jsx)("div",{className:"list-display",children:d.map(((e,s)=>(0,r.jsx)("div",{className:"card card-agent",children:(0,r.jsxs)("div",{className:"row g-0",children:[(0,r.jsx)("div",{className:"col-sm-auto col-4",children:(0,r.jsx)("div",{className:"card-image",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:`${o}/${e.logo}`,alt:"",className:"img-fluid"})})})}),(0,r.jsx)("div",{className:"col-sm col-8",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsxs)("div",{className:"card-title",children:[(0,r.jsxs)("h4",{children:[(0,r.jsx)("a",{children:e.member_name}),(0,r.jsx)("i",{className:"icon-img-check ms-1"})]}),(0,r.jsx)("span",{className:"badge badge-outline-secondary",children:"Properties"})]}),(0,r.jsxs)("p",{className:"mb-2",children:[(0,r.jsx)("i",{className:"icon-feather-phone"})," ",e.phone_number," \xa0"]}),(0,r.jsxs)("p",{className:"mb-2",children:[(0,r.jsx)("i",{className:"icon-feather-mail"})," ",e.member_email]}),(0,r.jsxs)("div",{className:"d-flex card-group-btn",children:[(0,r.jsxs)("a",{href:`tel:${e.phone}`,className:"btn btn-sm btn-outline-site me-2",children:[(0,r.jsx)("i",{className:"icon-feather-phone"})," Call"]}),(0,r.jsxs)("a",{className:"btn btn-sm btn-outline-site me-2",children:[(0,r.jsx)("i",{className:"icon-feather-mail"})," Message"]}),(0,r.jsxs)("a",{className:"btn btn-sm btn-outline-site me-2",children:[(0,r.jsx)("i",{className:"icon-brand-whatsapp"})," WhatsApp"]}),(0,r.jsxs)("div",{className:"social-share-wrap",children:[(0,r.jsxs)("a",{className:"btn btn-sm btn-outline-site me-2",children:[(0,r.jsx)("i",{className:"icon-feather-share-2"})," Share"]}),(0,r.jsxs)("div",{className:"share-items",children:[(0,r.jsx)("a",{className:"btn-floating btn btn-tw",target:"_parent",href:"javascript:;",title:"Share on Facebook",children:(0,r.jsx)("i",{className:"icon-brand-facebook-f"})}),(0,r.jsx)("a",{className:"btn-floating btn btn-tw",type:"button",role:"button",title:"Share on Linkedin",children:(0,r.jsx)("i",{className:"icon-brand-linkedin-in"})}),(0,r.jsx)("a",{className:"btn-floating btn btn-tw",type:"button",role:"button",title:"Share on Whatsapp",children:(0,r.jsx)("i",{className:"icon-brand-whatsapp"})})]})]}),(0,r.jsx)(c.N_,{to:`/agent-details/${e.member_id}`,className:"btn btn-primary ms-auto",children:"View Profile"})]})]})})]})},s)))}),(0,r.jsx)("nav",{"aria-label":"Page navigation",children:(0,r.jsxs)("ul",{className:"pagination justify-content-center",children:[(0,r.jsx)("li",{className:"page-item "+(1===x?"disabled":""),children:(0,r.jsx)("a",{className:"page-link",onClick:()=>{x>1&&j((e=>e-1))},disabled:1===x,children:"Prev"})}),[...Array(N)].map(((e,s)=>(0,r.jsx)("li",{className:"page-item "+(x===s+1?"active":""),children:(0,r.jsx)("a",{className:"page-link",onClick:()=>j(s+1),children:s+1})},s))),(0,r.jsx)("li",{className:"page-item "+(x===N?"disabled":""),children:(0,r.jsx)("a",{className:"page-link",onClick:()=>{j((e=>e+1))},children:"Next"})})]})})]}),(0,r.jsxs)("aside",{className:"col-xl-3 col-lg-3 col-12",children:[(0,r.jsx)("div",{className:"text-center mb-4",children:(0,r.jsx)("img",{src:"http://localhost/realestate-live/public/images/ads/real-estate-poster.jpg",alt:"ads",className:"img-fluid"})}),(0,r.jsx)("div",{className:"text-center mb-4",children:(0,r.jsx)("img",{src:"http://localhost/realestate-live/public/images/ads/houseSaleFlyerGREEN.jpg",alt:"ads",className:"img-fluid"})})]})]})})})]})}}}]);
//# sourceMappingURL=13.6ebc704b.chunk.js.map