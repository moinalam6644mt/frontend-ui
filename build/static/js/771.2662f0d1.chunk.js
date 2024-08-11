"use strict";(self.webpackChunkfrontend_ui=self.webpackChunkfrontend_ui||[]).push([[771],{4827:(e,s,a)=>{a.d(s,{A:()=>r});var i=a(5043),l=a(1659),n=a(3216),c=a(579);const r=()=>{const{property_id:e}=(0,n.g)(),{callApi:s}=(0,l.A)(),[a,r]=(0,i.useState)(!1),[t,d]=(0,i.useState)({name:"",email:"",mobile:"",message:""}),o=e=>{const{name:s,value:a}=e.target;d((e=>({...e,[s]:a})))};return(0,c.jsx)(i.Fragment,{children:(0,c.jsx)("div",{className:"",children:(0,c.jsxs)("form",{className:"",onSubmit:async a=>{r(!0),a.preventDefault();try{const a=await s({api:`/seller_enquiry/${e}`,method:"POST",data:t});a?console.log("Form submitted successfully:",a):console.error("Form submission failed:",a.message||"Unknown error"),d({name:"",email:"",mobile:"",message:""})}catch(i){console.error("An error occurred while submitting the form:",i)}finally{r(!1)}},children:[(0,c.jsx)("input",{type:"hidden",name:"property_owner_id",value:"42"}),(0,c.jsxs)("div",{className:"floating-label-group",children:[(0,c.jsx)("input",{type:"name",name:"name",value:t.name,className:"form-control",placeholder:" ",required:!0,onChange:o}),(0,c.jsxs)("label",{className:"floating-label",children:["Name ",(0,c.jsx)("span",{className:"req",children:"*"})]})]}),(0,c.jsxs)("div",{className:"floating-label-group",children:[(0,c.jsx)("input",{type:"email",name:"email",value:t.email,className:"form-control",placeholder:" ",required:!0,onChange:o}),(0,c.jsxs)("label",{className:"floating-label",children:["Email ",(0,c.jsx)("span",{className:"req",children:"*"})]})]}),(0,c.jsxs)("div",{className:"floating-label-group",children:[(0,c.jsx)("input",{type:"number",name:"mobile",value:t.mobile,className:"form-control",placeholder:" ",required:!0,onChange:o}),(0,c.jsx)("label",{className:"floating-label",children:"Mobile"})]}),(0,c.jsxs)("div",{className:"floating-label-group",children:[(0,c.jsx)("textarea",{rows:"3",name:"message",value:t.message,className:"form-control",placeholder:" ",required:!0,onChange:o}),(0,c.jsxs)("label",{className:"floating-label",children:["Message ",(0,c.jsx)("span",{className:"req",children:"*"})]})]}),(0,c.jsx)("div",{className:"d-grid",children:(0,c.jsx)("button",{type:"submit",className:"btn btn-site",disabled:a,children:a?"Sending...":"Send"})})]})})})}},2771:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var i=a(5043),l=a(3216),n=a(5475),c=a(1659),r=a(910),t=a(4827),d=a(1253),o=a(1640),m=a(579);const h=()=>{var e;const{callApi:s,projectImg:a}=(0,c.A)(),{project_id:h}=(0,l.g)(),[j,x]=(0,i.useState)([]),[v,p]=(0,i.useState)(!1),{setTotalImage:N,totalImage:u}=(0,i.useContext)(o.A);(0,i.useEffect)((()=>{g()}),[]);const b=()=>{p(!v)},g=async()=>{try{const e=await s({api:`/get_unique_project/${h}`,method:"GET"});e&&"success"===e.status&&(x(e.data),f())}catch(e){console.error("Error fetching project data:",e)}},f=()=>{var e,s=[];null===j||void 0===j||null===(e=j.projectViewImages)||void 0===e||e.map((e=>{e.images.forEach((e=>{s=s.concat(e)}))})),N(s)};return(0,i.useEffect)((()=>{f()}),[j]),(0,m.jsx)("div",{children:(0,m.jsx)("section",{className:"section",children:(0,m.jsxs)("div",{className:"container-fluid",children:[(0,m.jsxs)("div",{className:"row main-row",children:[(null===u||void 0===u?void 0:u.length)>0&&(0,m.jsxs)("aside",{className:"col-xl-7 col-lg-7 col-12",children:[(0,m.jsxs)("div",{className:"row gx-3",children:[(0,m.jsx)("div",{className:"col-12 mb-3",children:(0,m.jsx)("img",{className:"rounded w-100",src:`${a}${u[0]}`,alt:"First Property Image"})}),u.length<=4?u.slice(1,u.length).map(((e,s)=>(0,m.jsx)("div",{className:"col-sm-3",onClick:b,style:{cursor:"pointer"},children:(0,m.jsx)("a",{href:"#",className:"gallery-item",children:(0,m.jsx)("img",{className:"rounded w-100",src:`${a}${u[1]}`,alt:`Gallery Image ${s+2}`})})},s))):u.slice(1,4).map(((e,s)=>(0,m.jsx)("div",{className:"col-sm-3",onClick:b,style:{cursor:"pointer"},children:(0,m.jsx)("a",{href:"#",className:"gallery-item",children:(0,m.jsx)("img",{className:"rounded w-100",src:`${a}${u[2]}`,alt:`Gallery Image ${s+2}`})})},s))),u.length>4&&(0,m.jsx)("div",{className:"col-sm-3",onClick:b,style:{cursor:"pointer"},children:(0,m.jsxs)("a",{href:"#",className:"gallery-item",children:[(0,m.jsx)("img",{className:"rounded w-100",src:`${a}${u[4]}`,alt:"Gallery Image 5"}),(0,m.jsxs)("div",{className:"view-more-image",children:["+ ",u.length-5]})]})})]}),v&&(0,m.jsx)(d.A,{projectdetails:j,setVisible:p})]}),(0,m.jsx)("aside",{className:"col-lg-4 col-12",children:(0,m.jsx)("div",{id:"nav-project-location",children:(0,m.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99512.80400724961!2d54.49250820162658!3d24.340538033250233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e476b238494e5%3A0xfd3db0486d6d68d6!2sMohamed%20Bin%20Zayed%20City%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1650384953003!5m2!1sen!2sin",width:"100%",height:"635",style:{border:0},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Project Location"})})})]}),(0,m.jsx)("div",{className:"propertyViewModalWrapper",style:{display:"none"},children:(0,m.jsx)("div",{className:"propertyViewModal",children:(0,m.jsxs)("div",{className:"imageTilesContainer",style:{display:"block"},children:[(0,m.jsx)("div",{className:"topBarMain",style:{display:"initial"},children:(0,m.jsxs)("div",{className:"slider-top-bar",children:[(0,m.jsxs)("div",{className:"topTitle",children:[(0,m.jsx)("span",{className:"leftArrow"}),(0,m.jsx)("span",{children:null===j||void 0===j?void 0:j.city_name})]}),(0,m.jsx)("div",{className:"btnsGroup",children:(0,m.jsx)("li",{className:"shareIcon"})})]})}),(0,m.jsx)("div",{className:"clearfix"}),(0,m.jsxs)("div",{className:"imgTiles",children:[(0,m.jsx)("div",{className:"imageTilesLeft",style:{display:"initial"},children:(0,m.jsx)("ul",{className:"masonryGrid"})}),(0,m.jsx)("div",{className:"imgTiles__contact mb-inline-contact",children:(0,m.jsx)("div",{className:"contact-form__content",style:{minHeight:"457px"},children:(0,m.jsx)("div",{className:"contact-form show",id:"contact-form",children:(0,m.jsx)("div",{className:"contact-form__flex",children:(0,m.jsxs)("div",{className:"contact-form__content",children:[(0,m.jsx)("div",{className:"contact-form__close"}),(0,m.jsx)("div",{className:"contact-form__inner contact-form__inner--392",id:"contact-default",children:(0,m.jsxs)("div",{className:"contact-form__slide contact-form__slide--default",id:"contact-slide-default",children:[(0,m.jsx)("div",{className:"contact-form__heading",children:"Fill this one-time contact form"}),(0,m.jsx)("div",{className:"contact-form__text mb-3",children:"Get Builders details over email"}),(0,m.jsx)("form",{children:(0,m.jsx)("button",{type:"submit",className:"btn btn-primary contact-form__btn",children:"Get Contact Details"})})]})})]})})})})})]}),(0,m.jsx)("div",{className:"tabSlider",style:{display:"none"},children:(0,m.jsxs)("div",{className:"slider-container",children:[(0,m.jsxs)("div",{className:"slider-top-bar",children:[(0,m.jsxs)("div",{className:"topTitle",children:[(0,m.jsx)("span",{className:"closeTab",children:(0,m.jsx)("a",{})}),(0,m.jsx)("span",{children:"demoproject1"})]}),(0,m.jsxs)("div",{className:"btnsGroup",children:[(0,m.jsx)("li",{className:"shareIcon"}),(0,m.jsx)("li",{children:(0,m.jsx)("button",{className:"btn btnBW clientAgent clientAgent2",children:"Contact Builder"})})]})]}),(0,m.jsx)("div",{className:"navList",children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("div",{className:"naviScroll"}),(0,m.jsx)("div",{className:"sliderImgCount",children:(0,m.jsxs)("li",{className:"marginRightNone",children:["1 / ",(0,m.jsx)("span",{children:"0"})]})})]})}),(0,m.jsx)("div",{id:"hideLoader",children:(0,m.jsx)("img",{src:"http://localhost/realestate-live/public/images/loading-bars.gif",alt:"loading"})}),(0,m.jsx)("div",{id:"myGallery",children:(0,m.jsxs)("div",{className:"photoGallery",children:[(0,m.jsx)("a",{style:{display:"none"},children:(0,m.jsx)("div",{className:"arrow leftArrow"})}),(0,m.jsx)("a",{style:{display:"none"},children:(0,m.jsx)("div",{className:"arrow rightArrow"})})]})}),(0,m.jsxs)("div",{className:"bottomIndicator",id:"bottomIndicator",children:["Project Photo 1/",(0,m.jsx)("span",{children:"98"})]})]})})]})})}),(0,m.jsx)("section",{className:"proj-detail sticky-top",children:(0,m.jsx)("div",{className:"container-fluid",children:(0,m.jsxs)("ul",{className:"nav navigation__scroll",children:[(0,m.jsx)("li",{className:"nav-item navigation__item",children:(0,m.jsx)("a",{className:"nav-link active",href:"#nav-overview",children:"Overview"})}),(0,m.jsx)("li",{className:"nav-item navigation__item",children:(0,m.jsx)("a",{className:"nav-link",href:"#propertiesInPrj",children:"Properties"})}),(0,m.jsx)("li",{className:"nav-item navigation__item",children:(0,m.jsx)("a",{className:"nav-link",href:"#nav-about-project",children:"About Project"})}),(0,m.jsx)("li",{className:"nav-item navigation__item",children:(0,m.jsx)("a",{className:"nav-link",href:"#nav-amenities",children:"Amenities"})}),(0,m.jsx)("li",{className:"nav-item navigation__item",children:(0,m.jsx)("a",{className:"nav-link",href:"#nav-project-unit-floors",children:"Floor Plan & Units"})}),(0,m.jsx)("li",{className:"nav-item navigation__item",children:(0,m.jsx)("a",{className:"nav-link",href:"#nav-about-locality",children:"About Locality"})}),(0,m.jsx)("li",{className:"nav-item navigation__item",children:(0,m.jsx)("a",{className:"nav-link",href:"#pricTrendli",children:"Price Trends"})}),(0,m.jsx)("li",{className:"nav-item navigation__item",children:(0,m.jsx)("a",{className:"nav-link",href:"#nav-project-details",children:"Project Details"})}),(0,m.jsx)("li",{className:"nav-item navigation__item",children:(0,m.jsx)("a",{className:"nav-link",href:"#nav-about-builder",children:"About Developer"})}),(0,m.jsx)("li",{className:"nav-item navigation__item",children:(0,m.jsx)("a",{className:"nav-link",href:"#nav-project-video",children:"Project Video"})}),(0,m.jsx)("li",{className:"nav-item navigation__item",children:(0,m.jsx)("a",{className:"nav-link",href:"#nav-project-location",children:"Project Location"})})]})})}),(0,m.jsx)("section",{className:"section projdt",children:(0,m.jsx)("div",{className:"container-fluid",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("aside",{className:"col-xl-8 col-lg-8 col-12",children:[(0,m.jsxs)("ol",{className:"breadcrumb",children:[(0,m.jsx)("li",{className:"breadcrumb-item",children:(0,m.jsx)(n.N_,{to:"/",children:"Home"})}),(0,m.jsx)("li",{className:"breadcrumb-item",children:(0,m.jsxs)("a",{children:["Project in ",null===j||void 0===j?void 0:j.city_name]})}),(0,m.jsx)("li",{className:"breadcrumb-item",children:(0,m.jsxs)("a",{children:["Project in ",null===j||void 0===j?void 0:j.locality]})}),(0,m.jsx)("li",{className:"breadcrumb-item",children:(0,m.jsx)("a",{children:null===j||void 0===j?void 0:j.city_name})})]}),(0,m.jsxs)("div",{className:"card mb-4",id:"nav-overview",children:[(0,m.jsx)("div",{className:"card-header",children:(0,m.jsx)("h4",{children:"demoproject1"})}),(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsxs)("div",{className:"position-relative mb-3",children:[(0,m.jsxs)("p",{className:"mb-1",children:[(0,m.jsx)("i",{className:"icon-feather-map-pin text-site"}),null===j||void 0===j?void 0:j.address]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("i",{className:"icon-feather-map-pin text-site"}),null===j||void 0===j?void 0:j.address," ,",null===j||void 0===j?void 0:j.city_name]})]}),(0,m.jsxs)("ul",{className:"list list-2 mb-4",children:[(0,m.jsx)("li",{children:(0,r.A)(null===j||void 0===j?void 0:j.launched_date)}),(0,m.jsx)("li",{children:(0,r.A)(null===j||void 0===j?void 0:j.launched_date)})]}),(0,m.jsxs)("h5",{children:["INR ",null===j||void 0===j?void 0:j.min_price," - INR ",null===j||void 0===j?void 0:j.max_price]}),(0,m.jsx)("h5",{className:"mb-3",children:"1,2,3 BHK Flats"})]})]}),(0,m.jsxs)("div",{className:"card mb-4",id:"nav-about-project",children:[(0,m.jsx)("div",{className:"card-header",children:(0,m.jsx)("h4",{children:"About demoproject1"})}),(0,m.jsx)("div",{className:"card-body p-2",children:(0,m.jsxs)("ul",{className:"list-property-details",children:[(0,m.jsxs)("li",{children:[(0,m.jsx)("i",{className:"icon-img-project"}),(0,m.jsx)("span",{children:"Project Available:"}),(0,m.jsx)("span",{children:(null===j||void 0===j?void 0:j.unit)||"5"})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("i",{className:"icon-img-calendar"}),(0,m.jsx)("span",{children:"Launch Date:"}),(0,m.jsx)("span",{children:(0,r.A)(null===j||void 0===j?void 0:j.launched_date)})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("i",{className:"icon-img-home"}),(0,m.jsx)("span",{children:"Available In:"}),(0,m.jsx)("span",{children:(0,r.A)(null===j||void 0===j?void 0:j.launched_date)})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("i",{className:"icon-img-location"}),(0,m.jsx)("span",{children:"Pincode:"}),(0,m.jsx)("span",{children:"123456"})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("i",{className:"icon-img-ratio"}),(0,m.jsx)("span",{children:"Project Size:"}),(0,m.jsxs)("span",{children:[(null===j||void 0===j?void 0:j.unit)||"500"," sq ft"]})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("i",{className:"icon-img-flat"}),(0,m.jsx)("span",{children:"Total Units:"}),(0,m.jsx)("span",{children:(null===j||void 0===j?void 0:j.unit)||"5"})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("i",{className:"icon-img-flat"}),(0,m.jsx)("span",{children:"Total Towers:"}),(0,m.jsx)("span",{children:(null===j||void 0===j?void 0:j.tower)||"5"})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("i",{className:"icon-img-calendar"}),(0,m.jsx)("span",{children:"Posted On:"}),(0,m.jsx)("span",{children:"Aug 25, 2023"})]})]})})]}),(0,m.jsxs)("div",{className:"card mb-4",id:"nav-about-project",children:[(0,m.jsx)("div",{className:"card-header",children:(0,m.jsx)("h4",{children:"Available amenities"})}),(0,m.jsx)("div",{className:"card-body p-2",children:(0,m.jsx)("ul",{className:"list-property-details",children:null===j||void 0===j||null===(e=j.amenityResult)||void 0===e?void 0:e.map(((e,s)=>(0,m.jsxs)("li",{children:[(0,m.jsx)("i",{className:"icon-img-project"}),(0,m.jsx)("span",{children:e.amenity_name})]},s)))})})]}),(0,m.jsxs)("div",{className:"card mb-4",id:"nav-about-locality",children:[(0,m.jsx)("div",{className:"card-header",children:(0,m.jsx)("h4",{children:"About Locality"})}),(0,m.jsx)("div",{className:"card-body",children:(0,m.jsxs)("p",{children:[null===j||void 0===j?void 0:j.area," ,",null===j||void 0===j?void 0:j.locality," ,",null===j||void 0===j?void 0:j.city_name]})})]}),(0,m.jsx)("h4",{className:"text-uppercase mt-3",children:"Location Advantages"}),(0,m.jsxs)("ul",{className:"list-info list-col-lg-2 list-property-feature mb-4",children:[(0,m.jsx)("li",{children:(0,m.jsx)("div",{children:(0,m.jsxs)("span",{children:[(0,m.jsx)("i",{className:"icon-feather-map-pin"})," Metro: Demo Metro - 1 kms"]})})}),(0,m.jsx)("li",{children:(0,m.jsx)("div",{children:(0,m.jsxs)("span",{children:[(0,m.jsx)("i",{className:"icon-feather-map-pin"})," Metro: Demo Metro - 1 kms"]})})}),(0,m.jsx)("li",{children:(0,m.jsx)("div",{children:(0,m.jsxs)("span",{children:[(0,m.jsx)("i",{className:"icon-feather-map-pin"})," Metro: Demo Metro - 1 kms"]})})}),(0,m.jsx)("li",{children:(0,m.jsx)("div",{children:(0,m.jsxs)("span",{children:[(0,m.jsx)("i",{className:"icon-feather-map-pin"})," Metro: Demo Metro - 1 kms"]})})})]}),(0,m.jsxs)("div",{className:"card mb-4",id:"pricTrendDiv",children:[(0,m.jsx)("div",{className:"card-header",children:(0,m.jsx)("h4",{children:"Properties Listed"})}),(0,m.jsx)("div",{className:"card-body",children:(0,m.jsx)("ul",{className:"list mb-0",children:"No Property Found!"})})]}),(0,m.jsxs)("div",{className:"card mb-4",id:"nav-project-details",children:[(0,m.jsx)("div",{className:"card-header",children:(0,m.jsx)("h4",{children:"Project Details"})}),(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsxs)("h5",{children:["Specifications of ",(null===j||void 0===j?void 0:j.project_name)||" Shyam Project"]}),(0,m.jsx)("p",{children:null===j||void 0===j?void 0:j.project_description}),(0,m.jsx)("h5",{children:null===j||void 0===j?void 0:j.address}),(0,m.jsx)("ul",{className:"list list-2 mb-4",children:(0,m.jsx)("li",{children:"demo"})})]})]}),(0,m.jsxs)("div",{className:"card mb-4",id:"nav-about-builder",children:[(0,m.jsx)("div",{className:"card-header",children:(0,m.jsx)("h4",{children:"About Developer"})}),(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:"http://localhost/realestate-live/public/upload/user/thumb/1694765301_30ae46861b0920ba16bb.jpg",width:"120",alt:"company logo"})}),(0,m.jsx)("h5",{children:null===j||void 0===j?void 0:j.developer_name}),(0,m.jsxs)("p",{children:[" ",(0,m.jsxs)("b",{children:[" ",(null===j||void 0===j?void 0:j.year)||"5"]})," Years of Experience"]})]})]})]}),(0,m.jsx)("aside",{className:"col-xl-4 col-lg-4 col-12",children:(0,m.jsxs)("div",{className:"sticky-top mb-4",children:[(0,m.jsxs)("div",{className:"sort-by mb-2",children:[(0,m.jsxs)("div",{className:"social-share-wrap me-2",children:[(0,m.jsx)("a",{className:"btn btn-sm btn-outline-site w-auto",children:(0,m.jsx)("i",{className:"icon-feather-share-2"})}),(0,m.jsxs)("div",{className:"share-items",children:[(0,m.jsx)("a",{className:"btn-floating btn btn-tw",title:"Share on Facebook",children:(0,m.jsx)("i",{className:"icon-brand-facebook-f"})}),(0,m.jsx)("a",{className:"btn-floating btn btn-tw",target:"_blank",rel:"noopener",title:"Share on Twitter",children:(0,m.jsx)("i",{className:"icon-brand-twitter"})}),(0,m.jsx)("a",{className:"btn-floating btn btn-tw",target:"_blank",rel:"noopener",title:"Share on Linkedin",children:(0,m.jsx)("i",{className:"icon-brand-linkedin-in"})}),(0,m.jsx)("a",{className:"btn-floating btn btn-tw",target:"_blank",rel:"noopener",title:"Share on Whatsapp",children:(0,m.jsx)("i",{className:"icon-brand-whatsapp"})})]})]}),(0,m.jsx)("a",{className:"btn",onClick:()=>window.print(),title:"Print",children:(0,m.jsx)("i",{className:"icon-feather-printer"})})]}),(0,m.jsxs)("div",{className:"card mb-4",children:[(0,m.jsx)("div",{className:"card-header",children:(0,m.jsx)("h4",{children:"Looking for property in Location here"})}),(0,m.jsx)("div",{className:"card-body",children:(0,m.jsx)(t.A,{})})]})]})})]})})})]})})})}},1253:(e,s,a)=>{a.d(s,{A:()=>d});var i=a(5043),l=a(3216),n=a(1659),c=a(6496),r=a(4827),t=a(579);const d=e=>{var s;let{projectdetails:a,setVisible:d}=e;const{project_id:o}=(0,l.g)(),[m,h]=(0,i.useState)(!1),{callApi:j,projectImg:x}=(0,n.A)(),[v,p]=(0,i.useState)([]),[N,u]=(0,i.useState)(0),[b,g]=(0,i.useState)("exterior");(0,i.useEffect)((()=>{f()}),[o]);const f=async()=>{try{const e=await j({api:`/project_view_image/${o}`,method:"GET"});console.log(e.data),e&&p(e.data)}catch(e){console.error("Error fetching property data:",e)}};return(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)("div",{className:"detail-full-pop open-state",id:"writeReviewPopupSection",style:{display:"block",width:"100%",backgroundColor:"black"},children:(0,t.jsx)("div",{className:"pop-header clearfix open-state",style:{width:"100%"},children:(0,t.jsx)("div",{className:"tabSlider",children:(0,t.jsxs)("div",{className:"slider-container",children:[(0,t.jsxs)("div",{className:"slider-top-bar",style:{display:"flex",listStyle:"none",justifyContent:"space-between"},children:[(0,t.jsxs)("div",{className:"topTitle",children:[(0,t.jsx)("span",{className:"closeTab",children:(0,t.jsx)("a",{})}),(0,t.jsxs)("div",{onClick:()=>d(!1),children:[(0,t.jsx)("i",{className:"icon-feather-close ",style:{color:"black",fontWeight:800,cursor:"pointer"},children:"Back"}),"\xa0\xa0\xa0 ",(0,t.jsx)("span",{children:"Project Image view"})]})]}),(0,t.jsx)("div",{className:"btnsGroup",children:(0,t.jsx)("a",{onClick:()=>h(!0),className:"btn btnBW clientAgent clientAgent2",children:"Contact Builder"})})]}),(0,t.jsxs)("div",{className:"navList",children:[(0,t.jsx)("ul",{className:"nav-tabs",style:{display:"flex",listStyle:"none",justifyContent:"space-between",cursor:"pointer"},children:null===a||void 0===a||null===(s=a.projectViewImages)||void 0===s?void 0:s.map(((e,s)=>(0,t.jsxs)("li",{style:{marginRight:"-10px"},className:"nav-link "+(e.key_name==b?"active":""),"data-start":"1","data-cat-key":"Bedroom",onClick:()=>(e=>{const s=v.filter((s=>s.key_name===e));if(console.log(s),g(e),s){const e=v.findIndex((e=>e.key_name===s[0].key_name));u(e)}})(e.key_name),children:[e.key_name,"(",e.images.length,")"]},s)))}),(0,t.jsxs)("div",{className:"bottomIndicator",id:"bottomIndicator",children:[N+1,"/",(0,t.jsx)("span",{children:v.length})]})]}),(0,t.jsx)("div",{id:"myGallery",children:(0,t.jsxs)("div",{className:"photoGallery",style:{display:"flex",justifyContent:"space-between"},children:[(0,t.jsx)("a",{className:"left-arrow",onClick:()=>{u((e=>e-1)),g(v[N-1].key_name)},children:0===N?(0,t.jsx)("button",{className:"arrow leftArrow ",disabled:!0,children:"Left"}):(0,t.jsx)("button",{className:"arrow leftArrow",children:"Left"})}),(0,t.jsx)("div",{className:"imageContainer",style:{marginLeft:"0px"},children:(0,t.jsx)("div",{className:"sliderImages",style:{display:"flex"},children:v.map(((e,s)=>s===N?(0,t.jsx)("img",{className:"img-2 active",src:`${x}${e.image}`,category:"",width:800,height:600,type:"image",alt:"Slider Image"},s):null))})}),(0,t.jsx)("a",{className:"left-arrow",onClick:()=>{u((e=>e+1)),g(v[N+1].key_name)},children:N+1===v.length?(0,t.jsx)("button",{className:"arrow leftArrow ",disabled:!0,children:"Right"}):(0,t.jsx)("button",{className:"arrow leftArrow",children:"Right"})})]})}),(0,t.jsxs)("div",{className:"bottomIndicator",id:"bottomIndicator",style:{textAlign:"center"},children:[N+1,"/",(0,t.jsx)("span",{children:v.length})]})]})})})}),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(c.A,{show:m,onHide:()=>h(!1),children:[(0,t.jsx)(c.A.Header,{closeButton:!0,children:(0,t.jsx)(c.A.Title,{children:"Contact Owner"})}),(0,t.jsx)(c.A.Body,{children:(0,t.jsx)(r.A,{})})]})})]})}},910:(e,s,a)=>{a.d(s,{A:()=>i});const i=e=>{const s=new Date(e),a=s.getFullYear(),i=s.getMonth();return`${String(s.getDate()).padStart(2,"0")} ${["January","February","March","April","May","June","July","August","September","October","November","December"][i]},${a}`}}}]);
//# sourceMappingURL=771.2662f0d1.chunk.js.map