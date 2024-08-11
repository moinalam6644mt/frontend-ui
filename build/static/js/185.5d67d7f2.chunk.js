"use strict";(self.webpackChunkfrontend_ui=self.webpackChunkfrontend_ui||[]).push([[185],{3555:(e,s,a)=>{a.d(s,{A:()=>l});var t=a(5043),i=a(6496),r=a(1659),n=a(579);const l=e=>{let{setCheckedAmenities:s,handleShow:a,AddAmenitiesData:l,setpropertyId:c}=e;const{callApi:o}=(0,r.A)(),[d,m]=(0,t.useState)(a),[h,p]=(0,t.useState)([]);(0,t.useEffect)((()=>{const e=h.filter((e=>e.checked)).map((e=>({name:e.name,amenityId:e.amenity_id})));s(e)}),[h,s]),(0,t.useEffect)((()=>{u()}),[d]);const u=async()=>{try{const e=await o({api:"/aminity_name",method:"GET"});e&&p(e.data)}catch(e){console.error("Error fetching amenities:",e)}},x=()=>{c(""),m(!1)};return(0,n.jsx)("div",{className:"col-lg-12 col-sm-6",children:(0,n.jsxs)(i.A,{show:d,onHide:x,children:[(0,n.jsx)(i.A.Header,{closeButton:!0,children:(0,n.jsx)(i.A.Title,{children:"Add Amenities"})}),(0,n.jsxs)(i.A.Body,{children:[(0,n.jsx)("ul",{style:{listStyleType:"none"},children:h.map(((e,s)=>(0,n.jsxs)("li",{style:{fontSize:"20px",marginRight:"10px",color:e.checked?"pink":"black"},children:[(0,n.jsx)("input",{type:"checkbox",checked:e.checked,onChange:()=>(e=>{const s=[...h];s[e].checked=!s[e].checked,p(s)})(s,e.amenity_id),style:{marginRight:"20px"}}),e.name]},s)))}),(0,n.jsx)("button",{onClick:()=>{c(""),x(),l()},className:"bg-info",children:"Save"})]})]})})}},3185:(e,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(5043),i=a(6566),r=a(1659),n=a(3768),l=a(917),c=(a(4727),a(1640)),o=a(5475),d=a(579);const m=e=>{let{val:s,imagepath:a,confirmDelete:i,newAmenitiesData:r}=e;const{totalImage:n}=(0,t.useContext)(c.A);return(0,d.jsx)("div",{className:"card card-ads",children:(0,d.jsxs)("div",{className:"row g-0",children:[(0,d.jsx)("article",{className:"col-md-3 col-sm-3",children:(0,d.jsxs)("div",{className:"card-image",children:[(0,d.jsx)("div",{id:`carousellist${s.property_id}`,className:"carousel slide ads-carousel","data-bs-ride":"false",children:(0,d.jsx)("div",{className:"carousel-inner",children:n.filter((e=>e.property_id===s.property_id)).map(((e,s)=>(0,d.jsx)("div",{className:"carousel-item "+(0===s?"active":""),children:(0,d.jsx)("img",{src:a+e.image,alt:`property image ${s}`,className:"card-img-top"})},s)))})}),(0,d.jsx)("span",{className:"ads-type sale",children:s.property_for}),(0,d.jsxs)("span",{className:"total-ad-pic",children:[(0,d.jsx)("img",{src:"http://localhost/realestate-live/public/images/camera.svg",alt:"Camera Icon"}),"1"]}),(0,d.jsxs)("div",{className:"ads-price",children:[(0,d.jsxs)("h4",{children:["\u20ac",s.expected_amt]}),(0,d.jsxs)("p",{children:["$",s.booking_amt,"/sq ft"]})]})]})}),(0,d.jsx)("article",{className:"col-md col-sm-9 position-relative",children:(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsxs)("ol",{className:"breadcrumb",children:[(0,d.jsx)("li",{className:"breadcrumb-item",children:(0,d.jsx)("a",{href:"#",style:{color:"red"},children:s.property_type})}),(0,d.jsx)("li",{className:"breadcrumb-item",children:(0,d.jsx)("a",{href:"#",children:s.property_type_for})})]}),(0,d.jsx)("h4",{children:(0,d.jsx)(o.N_,{to:`/my-property/details/${s.property_id}`,children:s.property_type})}),(0,d.jsxs)("p",{className:"mb-1",children:[(0,d.jsx)("i",{className:"icon-feather-map-pin"}),s.address]}),(0,d.jsxs)("ul",{className:"list-info mb-2",children:[(0,d.jsxs)("li",{children:[(0,d.jsx)("i",{className:"icon-img-bed",title:"Bedrooms:"}),(0,d.jsx)("span",{children:s.bedroom})]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("i",{className:"icon-img-ratio"}),(0,d.jsx)("span",{children:s.carpet_area})," sq ft"]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("i",{className:"icon-img-tub",title:"Bathrooms:"}),(0,d.jsx)("span",{children:s.bathroom})]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("i",{className:"icon-img-garage",title:"Rooms:"}),(0,d.jsx)("span",{children:s.balcony})]})]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("i",{className:"icon-feather-calendar"})," ",(e=>{const s=new Date(e),a=s.getFullYear(),t=s.getMonth();return`${String(s.getDate()).padStart(2,"0")} ${["January","February","March","April","May","June","July","August","September","October","November","December"][t]}, ${a}`})(s.created_at)]})]})}),(0,d.jsx)("article",{className:"col-md-auto col-sm-12",children:(0,d.jsx)("div",{className:"contact-box",children:(0,d.jsxs)("div",{className:"d-grid",children:[(0,d.jsxs)("button",{className:"btn btn-warning btn-sm mb-2",onClick:()=>r(s.property_id),children:[(0,d.jsx)("i",{className:"icon-feather-amenities"})," Add Amenity"]}),(0,d.jsxs)(o.N_,{to:`/my-property/edit/${s.property_id}`,className:"btn btn-primary btn-sm mb-2",children:[(0,d.jsx)("i",{className:"icon-feather-edit"})," Edit"]}),(0,d.jsxs)("button",{className:"btn btn-danger btn-sm mb-2",onClick:()=>i(s.property_id),children:[(0,d.jsx)("i",{className:"icon-feather-trash"})," Delete"]}),(0,d.jsxs)(o.N_,{to:`/view_enquiry/${s.property_id}`,className:"btn btn-success btn-sm",children:[(0,d.jsx)("i",{className:"icon-feather-eye"})," View Enquiry"]})]})})})]})})},h=e=>{let{val:s,imagepath:a,confirmDelete:i,newAmenitiesData:r,setpropertyId:n}=e;const{totalImage:l}=(0,t.useContext)(c.A);return(0,d.jsx)("div",{children:(0,d.jsx)("div",{class:"card card-ads",children:(0,d.jsxs)("div",{class:"row g-0",children:[(0,d.jsx)("article",{className:"col-md-3 col-sm-3",children:(0,d.jsxs)("div",{className:"card-image",children:[(0,d.jsx)("div",{id:`carousellist${s.property_id}`,className:"carousel slide ads-carousel","data-bs-ride":"false",children:(0,d.jsx)("div",{className:"carousel-inner",children:l.filter((e=>e.property_id===s.property_id)).map(((e,s)=>(0,d.jsx)("div",{className:"carousel-item "+(0===s?"active":""),children:(0,d.jsx)("img",{src:a+e.image,alt:`property image ${s}`,className:"card-img-top"})},s)))})}),(0,d.jsx)("span",{className:"ads-type sale",style:{backgroundColor:"green"},children:s.property_for}),(0,d.jsxs)("span",{className:"total-ad-pic",children:[(0,d.jsx)("img",{src:"http://localhost/realestate-live/public/images/camera.svg",alt:"Camera Icon"}),"1"]}),(0,d.jsxs)("div",{className:"ads-price",children:[(0,d.jsxs)("h4",{children:["\u20ac",s.carpet_area]}),(0,d.jsxs)("p",{children:["\u20ac",s.super_area,"/sq ft"]})]})]})}),(0,d.jsx)("article",{class:"col-md col-sm-9 position-relative",children:(0,d.jsxs)("div",{class:"card-body",children:[(0,d.jsxs)("ol",{class:"breadcrumb",children:[(0,d.jsx)("li",{class:"breadcrumb-item",children:(0,d.jsx)("a",{href:"javascript:;",style:{color:"red"},children:s.property_type})}),(0,d.jsx)("li",{class:"breadcrumb-item",children:(0,d.jsx)("a",{href:"javascript:;",children:s.property_type_for})})]}),(0,d.jsx)("h4",{children:(0,d.jsx)(o.N_,{to:`/my-property/details/${s.property_id}`,children:(0,d.jsx)("a",{children:s.property_type})})}),(0,d.jsxs)("p",{class:"mb-1",children:[(0,d.jsx)("i",{class:"icon-feather-map-pin"})," ",s.land_zone," ,",s.locality," ,",s.city_name]}),(0,d.jsxs)("ul",{class:"list-info mb-2",children:[(0,d.jsxs)("li",{children:[(0,d.jsx)("i",{class:"icon-img-bed",title:"Bedrooms:"}),(0,d.jsx)("span",{children:s.businesses})]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("i",{class:"icon-img-ratio"}),(0,d.jsx)("span",{children:s.super_area})," sq ft"]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("i",{class:"icon-img-tub",title:"Washroom:"}),(0,d.jsx)("span",{children:s.washroom_no})]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("i",{class:"icon-img-garage",title:"Rooms:"}),(0,d.jsx)("span",{children:s.cabin_room})]})]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("i",{class:"icon-feather-calendar"}),(e=>{const s=new Date(e),a=s.getFullYear(),t=s.getMonth();return`${String(s.getDate()).padStart(2,"0")} ${["January","February","March","April","May","June","July","August","September","October","November","December"][t]},${a}`})(s.created_at)]})]})}),(0,d.jsx)("article",{className:"col-md-auto col-sm-12",children:(0,d.jsx)("div",{className:"contact-box",children:(0,d.jsxs)("div",{className:"d-grid",children:[(0,d.jsxs)("button",{className:"btn btn-warning btn-sm mb-2",onClick:()=>r(s.property_id),children:[(0,d.jsx)("i",{className:"icon-feather-amenities"})," Add Amenity"]}),(0,d.jsxs)(o.N_,{to:`/my-property/edit/${s.property_id}`,className:"btn btn-primary btn-sm mb-2",children:[(0,d.jsx)("i",{className:"icon-feather-edit"})," Edit"]}),(0,d.jsxs)("button",{className:"btn btn-danger btn-sm mb-2",onClick:()=>i(s.property_id),children:[(0,d.jsx)("i",{className:"icon-feather-trash"})," Delete"]}),(0,d.jsxs)(o.N_,{to:`/view_enquiry/${s.property_id}`,className:"btn btn-success btn-sm",children:[(0,d.jsx)("i",{className:"icon-feather-eye"})," View Enquiry"]})]})})},s.property_id)]})})})};var p=a(3555);const u=()=>{const{callApi:e}=(0,r.A)(),[s,a]=(0,t.useState)([]),{setTotalImage:o}=(0,t.useContext)(c.A),[u,x]=(0,t.useState)(""),[j,f]=(0,t.useState)("published"),[y,b]=(0,t.useState)(1),[g,N]=(0,t.useState)(),[v,_]=(0,t.useState)(null),[w,k]=(0,t.useState)(),[C,E]=(0,t.useState)(!1);(0,t.useEffect)((()=>{A(y)}),[y,j]),(0,t.useEffect)((()=>{s.length>0&&O()}),[s]);const A=async()=>{try{const s=await e({api:"/property_list_user?page="+y,method:"POST"});s?(a(s.data),x(s.url),N(s.totalRecords)):console.log("Unable to get response")}catch(s){console.error("Error fetching properties:",s)}},S=t=>{(0,l.ZX)({title:"Confirm Deletion",message:"Are you sure you want to delete this data?",buttons:[{label:"Delete",onClick:()=>(async t=>{try{const i=await e({api:"/delete_chat_history",method:"DELETE"});i&&!0===i.success?(n.Ay.success("Data deleted successfully"),A(),a(s.filter((e=>e.property_id!==t)))):(console.error(i.message),n.Ay.error(i.message))}catch(i){console.error("Error deleting data:",i),n.Ay.error("Error occurred while deleting data")}})(t)},{label:"Cancel"}]})},O=()=>{let e=[];s.forEach((s=>{const a=s.gallery.flatMap((e=>e.images.map((e=>({...e,property_id:s.property_id})))));e.push(...a)})),o(e)},I=e=>{f(e),b(1)},D=e=>{k(e),E(!0)};return console.log(w),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"short-banner",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("h1",{children:"Property Listing"})})}),(0,d.jsxs)("section",{className:"section",children:[(0,d.jsx)("div",{className:"container-fluid",children:(0,d.jsxs)("div",{className:"row main-row",children:[(0,d.jsx)(i.A,{}),(0,d.jsxs)("aside",{className:"col-xl col-lg col-12",children:[(0,d.jsxs)("div",{className:"d-sm-flex justify-content-between align-items-center mb-2",children:[(0,d.jsx)("h4",{className:"mb-3 mb-sm-0",children:"My Property Listing"}),(0,d.jsx)("div",{className:"sort-by",children:(0,d.jsxs)("select",{className:"selectpicker select-sm pull-right ms-2",id:"sort_by","data-width":"fit","data-sort":"n",title:"Sort By",children:[(0,d.jsx)("option",{selected:"selected",disabled:"disabled",children:"Sort By"}),(0,d.jsx)("option",{value:"recent",children:"Recent"}),(0,d.jsx)("option",{value:"price_low",children:"Price - Low to High"}),(0,d.jsx)("option",{value:"price_high",children:"Price - High to Low"}),(0,d.jsx)("option",{value:"relavance",children:"Relevance"})]})})]}),(0,d.jsxs)("ul",{className:"nav nav-tabs mb-3",id:"myTab",role:"tablist",children:[(0,d.jsx)("li",{className:"nav-item",role:"presentation",children:(0,d.jsxs)("button",{className:"nav-link "+("published"===j?"active":""),id:"publish-tab",onClick:()=>I("published"),children:["Published"," ",(0,d.jsx)("span",{className:"count bg-primary",children:g})]})}),(0,d.jsx)("li",{className:"nav-item",role:"presentation",children:(0,d.jsxs)("button",{className:"nav-link "+("pending"===j?"active":""),id:"pending-tab",onClick:()=>I("pending"),children:["Pending ",(0,d.jsx)("span",{className:"count bg-warning",children:"0"})]})}),(0,d.jsx)("li",{className:"nav-item",role:"presentation",children:(0,d.jsxs)("button",{className:"nav-link "+("expired"===j?"active":""),id:"expired-tab",onClick:()=>I("expired"),children:["Expired ",(0,d.jsx)("span",{className:"count bg-danger",children:"0"})]})}),(0,d.jsx)("li",{className:"nav-item",role:"presentation",children:(0,d.jsxs)("button",{className:"nav-link "+("draft"===j?"active":""),id:"draft-tab",onClick:()=>I("draft"),children:["Draft ",(0,d.jsx)("span",{className:"count bg-success",children:"0"})]})})]}),(0,d.jsxs)("div",{className:"tab-content list-display my-assets",id:"myTabContent",children:[(0,d.jsx)("div",{className:"tab-pane fade show active",id:"publish-tab-pane",children:s.map((e=>(0,d.jsx)("div",{children:"Flats"===e.property_type_for?(0,d.jsx)(m,{val:e,imagepath:u,newAmenitiesData:D,confirmDelete:S,setpropertyId:k}):(0,d.jsx)(h,{val:e,imagepath:u,confirmDelete:S,setpropertyId:k,newAmenitiesData:D})},e.property_id)))}),(0,d.jsx)("div",{className:"tab-pane fade",id:"pending-tab-pane"}),(0,d.jsx)("div",{className:"tab-pane fade",id:"expired-tab-pane"}),(0,d.jsx)("div",{className:"tab-pane fade",id:"draft-tab-pane"})]}),(0,d.jsx)("nav",{"aria-label":"Page navigation",children:(0,d.jsxs)("ul",{className:"pagination justify-content-center",children:[(0,d.jsx)("li",{className:"page-item",children:(0,d.jsx)("a",{className:"page-link",onClick:()=>{y>1&&b(y-1)},disabled:1===y,children:"Prev"})}),[1,2,3].map((e=>(0,d.jsx)("li",{className:"page-item",children:(0,d.jsx)("a",{className:"page-link",onClick:()=>b(e),children:e})},e))),(0,d.jsx)("li",{className:"page-item",children:(0,d.jsx)("a",{className:"page-link",onClick:()=>{b(y+1)},children:"Next"})})]})})]})]})}),w&&(0,d.jsx)(p.A,{setCheckedAmenities:_,handleShow:C,AddAmenitiesData:async()=>{alert("hello");try{const s=await e({api:"/add_amenities",method:"POST",data:{property_id:w,Checked_value:v}});console.log(s)}catch(s){console.error("Error adding amenities data:",s)}},setpropertyId:k})]})]})}},6566:(e,s,a)=>{a.d(s,{A:()=>c});var t=a(5043),i=a(1659),r=a(5475),n=a(4420),l=a(579);const c=()=>{const{callApi:e}=(0,i.A)(),[s,a]=(0,t.useState)(null),[c,o]=(0,t.useState)(null),[d,m]=(0,t.useState)(null);(0,t.useEffect)((()=>{const e=localStorage.getItem("user");if(e){const s=(0,n.s)(e);m(s.data),p(s.data.user_id)}}),[]),(0,t.useEffect)((()=>{s&&h()}),[s]);const h=async()=>{try{const a=await e({api:`/logo_upload/${d.user_id}`,method:"UPLOAD",data:{image:s}});o(a.data.url)}catch(a){console.error("Error in uploading image:",a)}},p=async s=>{try{const a=await e({api:`/get_logo/${s}`,method:"GET"}),t=a.path+a.result.logo;o(t)}catch(a){console.error("Error in fetching profile photo:",a)}};return(0,l.jsx)("aside",{className:"col-xl-auto col-lg-auto col-4",children:(0,l.jsxs)("div",{className:"user-sidebar",children:[(0,l.jsxs)("div",{className:"user-profile text-center",children:[(0,l.jsxs)("div",{className:"avatar mb-3",children:[(0,l.jsx)("input",{type:"file",id:"fileInput",accept:"image/*",style:{display:"none"},onChange:e=>{const s=e.target.files[0];a(s)}}),(0,l.jsx)("img",{src:c,alt:"profile-photo",style:{height:"128px",width:"128px"}}),(0,l.jsx)("label",{className:"material-icons-outlined",style:{cursor:"pointer"},htmlFor:"fileInput",children:"add_a_photo"})]}),(0,l.jsxs)("div",{className:"user-profile-details",children:[(0,l.jsx)("h5",{className:"mb-0",children:(u=null===d||void 0===d?void 0:d.name,u?u.charAt(0).toUpperCase()+u.slice(1).toLowerCase():u)}),(0,l.jsx)("p",{className:"mb-0",children:(0,l.jsx)("i",{children:"A"===(null===d||void 0===d?void 0:d.type)?"Agent":"B"===(null===d||void 0===d?void 0:d.type)?"Builder":"O"===(null===d||void 0===d?void 0:d.type)?"Owner":"C"===(null===d||void 0===d?void 0:d.type)?"Company":""})}),(0,l.jsxs)("p",{children:[(0,l.jsx)("i",{className:"icon-feather-map-pin text-site"})," Abu Dhabi, UAE"]}),(0,l.jsx)("div",{className:"d-grid mb-3",children:(0,l.jsx)(r.N_,{to:"/profile",className:"btn btn-sm btn-primary",children:"View Profile"})})]})]}),(0,l.jsx)("div",{className:"toggleDiv",children:(0,l.jsx)("a",{id:"toggleZ",children:(0,l.jsx)("i",{className:"icon-material-outline-arrow-back"})})}),(0,l.jsxs)("ul",{className:"user-nav",children:[(0,l.jsx)("li",{children:(0,l.jsxs)(r.N_,{to:"/",className:"d-lg-none",children:[(0,l.jsx)("i",{className:"material-icons-outlined text-green",children:"local_mall"})," ","Buy"]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(r.N_,{to:"/",className:"d-lg-none",children:[(0,l.jsx)("i",{className:"material-icons-outlined text-indigo",children:"sell"})," Sell"]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(r.N_,{to:"/",className:"d-lg-none",children:[(0,l.jsx)("i",{className:"material-icons-outlined text-yellow",children:"real_estate_agent"})," ","Rent"]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(r.N_,{to:"/dashboard",className:"active",children:[(0,l.jsx)("i",{className:"material-icons-outlined text-teal",children:"dashboard"})," ",(0,l.jsx)("span",{children:"Dashboard"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(r.N_,{to:"/profile",children:[" ",(0,l.jsx)("i",{className:"material-icons-outlined text-pink",children:"account_circle"})," ",(0,l.jsx)("span",{children:"My Profile"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(r.N_,{to:"/profile-edit",children:[(0,l.jsx)("i",{className:"material-icons-outlined text-pink",children:"account_circle"})," ",(0,l.jsx)("span",{children:"My Account"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(r.N_,{to:"/",children:[(0,l.jsx)("i",{className:"material-icons-outlined text-blue",children:"comment"})," ",(0,l.jsx)("span",{children:"My Reviews"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(r.N_,{to:"/",children:[(0,l.jsx)("i",{className:"material-icons-outlined text-purple",children:"mail"})," ",(0,l.jsx)("span",{children:"Message"})]})}),(0,l.jsxs)("li",{className:"dropdown",children:[(0,l.jsxs)("a",{className:"nav-toggle-1","data-bs-toggle":"dropdown",children:[(0,l.jsx)("i",{className:"icon-material-outline-business text-success"})," ",(0,l.jsx)("span",{children:"Property CRM"})," ",(0,l.jsx)("i",{className:"icon-line-awesome-angle-down ms-auto"})]}),(0,l.jsxs)("ul",{className:"nav-hide-menu",id:"hide-menu-1",children:[(0,l.jsx)("li",{children:(0,l.jsxs)(r.N_,{to:"/",children:[(0,l.jsx)("i",{className:"icon-line-awesome-arrow-right"}),"Activities"]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(r.N_,{to:"/",children:[(0,l.jsx)("i",{className:"icon-line-awesome-arrow-right"}),"Deals"]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(r.N_,{to:"/",children:[(0,l.jsx)("i",{className:"icon-line-awesome-arrow-right"}),"Leads"]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(r.N_,{to:"/",children:[(0,l.jsx)("i",{className:"icon-line-awesome-arrow-right"}),"Enquiries"]})})]})]}),(0,l.jsx)("li",{className:"dropdown",children:(0,l.jsxs)(r.N_,{to:"/",children:[(0,l.jsx)("i",{className:"material-icons-outlined text-cyan",children:"maps_home_work"})," ",(0,l.jsx)("span",{children:"Packages"})," "]})}),(0,l.jsx)("li",{className:"dropdown",children:(0,l.jsxs)(r.N_,{to:"/my-property",children:[(0,l.jsx)("i",{className:"material-icons-outlined text-cyan",children:"maps_home_work"})," ",(0,l.jsx)("span",{children:"My Properties"})," "]})}),(0,l.jsx)("li",{className:"dropdown",children:(0,l.jsxs)(r.N_,{to:"/my-project",children:[(0,l.jsx)("i",{className:"material-icons-outlined text-cyan",children:"maps_home_work"})," ",(0,l.jsx)("span",{children:"My Projects"})," "]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(r.N_,{to:"/",children:[(0,l.jsx)("i",{className:"material-icons-outlined text-danger",children:"favorite_border"})," ",(0,l.jsx)("span",{children:"My Favourites"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(r.N_,{to:"/user-enquiry/",children:[(0,l.jsx)("i",{className:"icon-material-outline-info text-primary"})," ",(0,l.jsx)("span",{children:"Enquiry"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(r.N_,{to:"/",children:[(0,l.jsx)("i",{className:"icon-feather-flag text-danger"})," ",(0,l.jsx)("span",{children:"User Reports"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(r.N_,{to:"/",children:[(0,l.jsx)("i",{className:"material-icons-outlined text-success",children:"lock"})," ",(0,l.jsx)("span",{children:"Change Password"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)(r.N_,{to:"/",children:[(0,l.jsx)("i",{className:"material-icons-outlined text-danger",children:"logout"})," ",(0,l.jsx)("span",{children:"Logout"})]})})]})]})});var u}},917:(e,s,a)=>{var t,i,r=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},n=function(){function e(e,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(s,a,t){return a&&e(s.prototype,a),t&&e(s,t),s}}();s.ZX=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",s=document.createElementNS(e,"feGaussianBlur");s.setAttribute("stdDeviation","0.3");var a=document.createElementNS(e,"filter");a.setAttribute("id","gaussian-blur"),a.appendChild(s);var t=document.createElementNS(e,"svg");t.setAttribute("id","react-confirm-alert-firm-svg"),t.setAttribute("class","react-confirm-alert-svg"),t.appendChild(a),document.body.appendChild(t)}(),function(e){var s=document.getElementById(e.targetId||x);e.targetId&&!s&&console.error("React Confirm Alert:","Can not get element id (#"+e.targetId+")");s||(document.body.children[0].classList.add("react-confirm-alert-blur"),(s=document.createElement("div")).id=x,document.body.appendChild(s)),(u=(0,d.createRoot)(s)).render(c.default.createElement(p,e))}(e)};var l=a(5043),c=m(l),o=m(a(5173)),d=a(4391);function m(e){return e&&e.__esModule?e:{default:e}}function h(e,s){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!==typeof s&&"function"!==typeof s?e:s}var p=(i=t=function(e){function s(){var e,a,t;!function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,s);for(var i=arguments.length,r=Array(i),n=0;n<i;n++)r[n]=arguments[n];return a=t=h(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(r))),t.handleClickButton=function(e){e.onClick&&e.onClick(),t.close()},t.handleClickOverlay=function(e){var s=t.props,a=s.closeOnClickOutside,i=s.onClickOutside,r=e.target===t.overlay;a&&r&&(i(),t.close()),e.stopPropagation()},t.close=function(){var e=t.props.afterClose;document.body.classList.remove("react-confirm-alert-body-element"),function(e){var s=document.getElementById(e.targetId||x);s&&u.unmount(s)}(t.props),function(e){var s=document.getElementById("react-confirm-alert-firm-svg");s&&s.parentNode.removeChild(s);document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}(e)},t.keyboard=function(e){var s=t.props,a=s.closeOnEscape,i=s.onKeypressEscape,r=s.onkeyPress,n=s.keyCodeForClose,l=e.keyCode,c=27===l;n.includes(l)&&t.close(),a&&c&&(i(e),t.close()),r&&r()},t.componentDidMount=function(){document.addEventListener("keydown",t.keyboard,!1)},t.componentWillUnmount=function(){document.removeEventListener("keydown",t.keyboard,!1),t.props.willUnmount()},t.renderCustomUI=function(){var e=t.props,s=e.title,a=e.message,i=e.buttons;return(0,e.customUI)({title:s,message:a,buttons:i,onClose:t.close})},h(t,a)}return function(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(e,s):e.__proto__=s)}(s,e),n(s,[{key:"render",value:function(){var e=this,s=this.props,a=s.title,t=s.message,i=s.buttons,n=s.childrenElement,l=s.customUI,o=s.overlayClassName;return c.default.createElement("div",{className:"react-confirm-alert-overlay "+o,ref:function(s){return e.overlay=s},onClick:this.handleClickOverlay},c.default.createElement("div",{className:"react-confirm-alert"},l?this.renderCustomUI():c.default.createElement("div",{className:"react-confirm-alert-body"},a&&c.default.createElement("h1",null,a),t,n(),c.default.createElement("div",{className:"react-confirm-alert-button-group"},i.map((function(s,a){return c.default.createElement("button",r({key:a,className:s.className},s,{onClick:function(a){return e.handleClickButton(s)}}),s.label)}))))))}}]),s}(l.Component),t.propTypes={title:o.default.string,message:o.default.string,buttons:o.default.array.isRequired,childrenElement:o.default.func,customUI:o.default.func,closeOnClickOutside:o.default.bool,closeOnEscape:o.default.bool,keyCodeForClose:o.default.arrayOf(o.default.number),willUnmount:o.default.func,afterClose:o.default.func,onClickOutside:o.default.func,onKeypressEscape:o.default.func,onkeyPress:o.default.func,overlayClassName:o.default.string},t.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,keyCodeForClose:[],willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},i);var u=null,x="react-confirm-alert"},4727:()=>{},4420:(e,s,a)=>{a.d(s,{s:()=>r});class t extends Error{}function i(e){let s=e.replace(/-/g,"+").replace(/_/g,"/");switch(s.length%4){case 0:break;case 2:s+="==";break;case 3:s+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function(e){return decodeURIComponent(atob(e).replace(/(.)/g,((e,s)=>{let a=s.charCodeAt(0).toString(16).toUpperCase();return a.length<2&&(a="0"+a),"%"+a})))}(s)}catch(a){return atob(s)}}function r(e,s){if("string"!==typeof e)throw new t("Invalid token specified: must be a string");s||(s={});const a=!0===s.header?0:1,r=e.split(".")[a];if("string"!==typeof r)throw new t(`Invalid token specified: missing part #${a+1}`);let n;try{n=i(r)}catch(l){throw new t(`Invalid token specified: invalid base64 for part #${a+1} (${l.message})`)}try{return JSON.parse(n)}catch(l){throw new t(`Invalid token specified: invalid json for part #${a+1} (${l.message})`)}}t.prototype.name="InvalidTokenError"}}]);
//# sourceMappingURL=185.5d67d7f2.chunk.js.map