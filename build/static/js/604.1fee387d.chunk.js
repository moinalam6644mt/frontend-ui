"use strict";(self.webpackChunkfrontend_ui=self.webpackChunkfrontend_ui||[]).push([[604],{4827:(e,s,a)=>{a.d(s,{A:()=>r});var l=a(5043),i=a(1659),n=a(3216),c=a(579);const r=()=>{const{property_id:e}=(0,n.g)(),{callApi:s}=(0,i.A)(),[a,r]=(0,l.useState)(!1),[t,d]=(0,l.useState)({name:"",email:"",mobile:"",message:""}),o=e=>{const{name:s,value:a}=e.target;d((e=>({...e,[s]:a})))};return(0,c.jsx)(l.Fragment,{children:(0,c.jsx)("div",{className:"",children:(0,c.jsxs)("form",{className:"",onSubmit:async a=>{r(!0),a.preventDefault();try{const a=await s({api:`/seller_enquiry/${e}`,method:"POST",data:t});a?console.log("Form submitted successfully:",a):console.error("Form submission failed:",a.message||"Unknown error"),d({name:"",email:"",mobile:"",message:""})}catch(l){console.error("An error occurred while submitting the form:",l)}finally{r(!1)}},children:[(0,c.jsx)("input",{type:"hidden",name:"property_owner_id",value:"42"}),(0,c.jsxs)("div",{className:"floating-label-group",children:[(0,c.jsx)("input",{type:"name",name:"name",value:t.name,className:"form-control",placeholder:" ",required:!0,onChange:o}),(0,c.jsxs)("label",{className:"floating-label",children:["Name ",(0,c.jsx)("span",{className:"req",children:"*"})]})]}),(0,c.jsxs)("div",{className:"floating-label-group",children:[(0,c.jsx)("input",{type:"email",name:"email",value:t.email,className:"form-control",placeholder:" ",required:!0,onChange:o}),(0,c.jsxs)("label",{className:"floating-label",children:["Email ",(0,c.jsx)("span",{className:"req",children:"*"})]})]}),(0,c.jsxs)("div",{className:"floating-label-group",children:[(0,c.jsx)("input",{type:"number",name:"mobile",value:t.mobile,className:"form-control",placeholder:" ",required:!0,onChange:o}),(0,c.jsx)("label",{className:"floating-label",children:"Mobile"})]}),(0,c.jsxs)("div",{className:"floating-label-group",children:[(0,c.jsx)("textarea",{rows:"3",name:"message",value:t.message,className:"form-control",placeholder:" ",required:!0,onChange:o}),(0,c.jsxs)("label",{className:"floating-label",children:["Message ",(0,c.jsx)("span",{className:"req",children:"*"})]})]}),(0,c.jsx)("div",{className:"d-grid",children:(0,c.jsx)("button",{type:"submit",className:"btn btn-site",disabled:a,children:a?"Sending...":"Send"})})]})})})}},1253:(e,s,a)=>{a.d(s,{A:()=>d});var l=a(5043),i=a(3216),n=a(1659),c=a(6496),r=a(4827),t=a(579);const d=e=>{var s;let{projectdetails:a,setVisible:d}=e;const{project_id:o}=(0,i.g)(),[m,h]=(0,l.useState)(!1),{callApi:j,projectImg:x}=(0,n.A)(),[v,p]=(0,l.useState)([]),[u,N]=(0,l.useState)(0),[b,g]=(0,l.useState)("exterior");(0,l.useEffect)((()=>{f()}),[o]);const f=async()=>{try{const e=await j({api:`/project_view_image/${o}`,method:"GET"});console.log(e.data),e&&p(e.data)}catch(e){console.error("Error fetching property data:",e)}};return(0,t.jsxs)(l.Fragment,{children:[(0,t.jsx)("div",{className:"detail-full-pop open-state",id:"writeReviewPopupSection",style:{display:"block",width:"100%",backgroundColor:"black"},children:(0,t.jsx)("div",{className:"pop-header clearfix open-state",style:{width:"100%"},children:(0,t.jsx)("div",{className:"tabSlider",children:(0,t.jsxs)("div",{className:"slider-container",children:[(0,t.jsxs)("div",{className:"slider-top-bar",style:{display:"flex",listStyle:"none",justifyContent:"space-between"},children:[(0,t.jsxs)("div",{className:"topTitle",children:[(0,t.jsx)("span",{className:"closeTab",children:(0,t.jsx)("a",{})}),(0,t.jsxs)("div",{onClick:()=>d(!1),children:[(0,t.jsx)("i",{className:"icon-feather-close ",style:{color:"black",fontWeight:800,cursor:"pointer"},children:"Back"}),"\xa0\xa0\xa0 ",(0,t.jsx)("span",{children:"Project Image view"})]})]}),(0,t.jsx)("div",{className:"btnsGroup",children:(0,t.jsx)("a",{onClick:()=>h(!0),className:"btn btnBW clientAgent clientAgent2",children:"Contact Builder"})})]}),(0,t.jsxs)("div",{className:"navList",children:[(0,t.jsx)("ul",{className:"nav-tabs",style:{display:"flex",listStyle:"none",justifyContent:"space-between",cursor:"pointer"},children:null===a||void 0===a||null===(s=a.projectViewImages)||void 0===s?void 0:s.map(((e,s)=>(0,t.jsxs)("li",{style:{marginRight:"-10px"},className:"nav-link "+(e.key_name==b?"active":""),"data-start":"1","data-cat-key":"Bedroom",onClick:()=>(e=>{const s=v.filter((s=>s.key_name===e));if(console.log(s),g(e),s){const e=v.findIndex((e=>e.key_name===s[0].key_name));N(e)}})(e.key_name),children:[e.key_name,"(",e.images.length,")"]},s)))}),(0,t.jsxs)("div",{className:"bottomIndicator",id:"bottomIndicator",children:[u+1,"/",(0,t.jsx)("span",{children:v.length})]})]}),(0,t.jsx)("div",{id:"myGallery",children:(0,t.jsxs)("div",{className:"photoGallery",style:{display:"flex",justifyContent:"space-between"},children:[(0,t.jsx)("a",{className:"left-arrow",onClick:()=>{N((e=>e-1)),g(v[u-1].key_name)},children:0===u?(0,t.jsx)("button",{className:"arrow leftArrow ",disabled:!0,children:"Left"}):(0,t.jsx)("button",{className:"arrow leftArrow",children:"Left"})}),(0,t.jsx)("div",{className:"imageContainer",style:{marginLeft:"0px"},children:(0,t.jsx)("div",{className:"sliderImages",style:{display:"flex"},children:v.map(((e,s)=>s===u?(0,t.jsx)("img",{className:"img-2 active",src:`${x}${e.image}`,category:"",width:800,height:600,type:"image",alt:"Slider Image"},s):null))})}),(0,t.jsx)("a",{className:"left-arrow",onClick:()=>{N((e=>e+1)),g(v[u+1].key_name)},children:u+1===v.length?(0,t.jsx)("button",{className:"arrow leftArrow ",disabled:!0,children:"Right"}):(0,t.jsx)("button",{className:"arrow leftArrow",children:"Right"})})]})}),(0,t.jsxs)("div",{className:"bottomIndicator",id:"bottomIndicator",style:{textAlign:"center"},children:[u+1,"/",(0,t.jsx)("span",{children:v.length})]})]})})})}),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(c.A,{show:m,onHide:()=>h(!1),children:[(0,t.jsx)(c.A.Header,{closeButton:!0,children:(0,t.jsx)(c.A.Title,{children:"Contact Owner"})}),(0,t.jsx)(c.A.Body,{children:(0,t.jsx)(r.A,{})})]})})]})}},2604:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var l=a(5043),i=a(3216),n=a(5475),c=a(1659),r=a(4827),t=a(1253),d=a(579);const o=e=>{var s;let{setShowFloorPlanImage:a,projectdetails:i,selectedBhk:n}=e;const[c,r]=(0,l.useState)(""),[t,o]=(0,l.useState)(""),[m,h]=(0,l.useState)(""),[j,x]=(0,l.useState)(""),[v,p]=(0,l.useState)(""),[u,N]=(0,l.useState)("");(0,l.useEffect)((()=>{if(null!==i&&void 0!==i&&i.bhk_types&&n>=0){(0,l.useEffect)((()=>{if(null!==i&&void 0!==i&&i.bhk_types){const e=null===i||void 0===i?void 0:i.bhk_types.find((e=>(null===e||void 0===e?void 0:e.bhk_type)===n));e?r(e.bhk_type):console.log("No matching BHK type found for:",n)}}),[n,i]);const e=i.bhk_types;if(console.log(e),n<e.length){const s=e[n].bhk_type;r(s),o(e[n].unit),h(e[n].min_sqft),x(e[n].max_sqft),p(e[n].min_amt_per_sqft),N(e[n].max_amt_per_sqft)}}}),[n,i]);return(0,d.jsxs)("div",{className:"detail-full-pop open-state",id:"writeReviewPopupSection",style:{display:"block"},children:[(0,d.jsxs)("div",{className:"pop-header clearfix open-state",children:[(0,d.jsx)("div",{className:"pop-header__back",onClick:()=>{a(!1)}}),(0,d.jsx)("div",{className:"pop-header__title ellipsis",children:"Units & Floor plans"})]}),(0,d.jsx)("div",{className:"rating-review-popup",children:(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"review-subheading",children:[(0,d.jsx)("select",{value:c,onChange:e=>{const s=e.target.value;console.log("User selected BHK type:",s),r(s)},children:null===i||void 0===i||null===(s=i.bhk_types)||void 0===s?void 0:s.map(((e,s)=>(0,d.jsx)("option",{value:e.bhk_type,children:e.bhk_type},s)))}),c&&(0,d.jsxs)("div",{className:"price-info",children:[(0,d.jsxs)("h5",{children:["Unit: ",t]}),(0,d.jsxs)("h5",{children:["Super Area- ",`${m} sqft - ${j} sqft`]}),(0,d.jsxs)("p",{children:["Sale - ",`${v} - ${u}`]})]})]})})})]})};var m=a(1640);const h=()=>{var e,s,a,h,j;const{callApi:x,projectImg:v}=(0,c.A)(),{project_id:p}=(0,i.g)(),[u,N]=(0,l.useState)([]),[b,g]=(0,l.useState)(!1),[f,y]=(0,l.useState)(""),[_,w]=(0,l.useState)(!1),[k,S]=(0,l.useState)(""),{setTotalImage:A,totalImage:I}=(0,l.useContext)(m.A);(0,l.useEffect)((()=>{C()}),[]);const P=()=>{g(!b)},C=async()=>{try{const e=await x({api:`/get_unique_project/${p}`,method:"GET"});e&&(N(e.data),y(e))}catch(e){console.error("Error fetching project data:",e)}},$=e=>{if(!e)return"";const s=new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"short"}),[a,l]=s.split(" ");return`${a}, ${l}`},T=null===u||void 0===u?void 0:u.project_size,q=(T/43560).toFixed(3);(0,l.useEffect)((()=>{(()=>{var e,s=[];null===u||void 0===u||null===(e=u.projectViewImages)||void 0===e||e.map((e=>{e.images.forEach((e=>{s=s.concat(e)}))})),A(s)})()}),[u]);const F=e=>{S(e),w(!0)};return(0,d.jsx)("div",{children:(0,d.jsx)("section",{className:"section",children:(0,d.jsxs)("div",{className:"container-fluid",children:[(0,d.jsxs)("div",{className:"row main-row",children:[(null===I||void 0===I?void 0:I.length)>0&&(0,d.jsxs)("aside",{className:"col-xl-7 col-lg-7 col-12",children:[(0,d.jsxs)("div",{className:"row gx-3",children:[(0,d.jsx)("div",{className:"col-12 mb-3",children:(0,d.jsx)("img",{className:"rounded w-100",src:`${v}${I[0]}`,alt:"First Property Image"})}),I.length<=4?I.slice(1,I.length).map(((e,s)=>(0,d.jsx)("div",{className:"col-sm-3",onClick:P,style:{cursor:"pointer"},children:(0,d.jsx)("a",{href:"#",className:"gallery-item",children:(0,d.jsx)("img",{className:"rounded w-100",src:`${v}${I[1]}`,alt:`Gallery Image ${s+2}`})})},s))):I.slice(1,4).map(((e,s)=>(0,d.jsx)("div",{className:"col-sm-3",onClick:P,style:{cursor:"pointer"},children:(0,d.jsx)("a",{href:"#",className:"gallery-item",children:(0,d.jsx)("img",{className:"rounded w-100",src:`${v}${I[2]}`,alt:`Gallery Image ${s+2}`})})},s))),I.length>4&&(0,d.jsx)("div",{className:"col-sm-3",onClick:P,style:{cursor:"pointer"},children:(0,d.jsxs)("a",{href:"#",className:"gallery-item",children:[(0,d.jsx)("img",{className:"rounded w-100",src:`${v}${I[4]}`,alt:"Gallery Image 5"}),(0,d.jsxs)("div",{className:"view-more-image",children:["+ ",I.length-5]})]})})]}),b&&(0,d.jsx)(t.A,{projectdetails:u,setVisible:g})]}),(0,d.jsx)("aside",{className:"col-lg-4 col-12",children:(0,d.jsx)("div",{id:"nav-project-location",children:(0,d.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99512.80400724961!2d54.49250820162658!3d24.340538033250233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e476b238494e5%3A0xfd3db0486d6d68d6!2sMohamed%20Bin%20Zayed%20City%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1650384953003!5m2!1sen!2sin",width:"100%",height:"635",style:{border:0},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Project Location"})})})]}),(0,d.jsx)("div",{className:"propertyViewModalWrapper",style:{display:"none"},children:(0,d.jsx)("div",{className:"propertyViewModal",children:(0,d.jsxs)("div",{className:"imageTilesContainer",style:{display:"block"},children:[(0,d.jsx)("div",{className:"topBarMain",style:{display:"initial"},children:(0,d.jsxs)("div",{className:"slider-top-bar",children:[(0,d.jsxs)("div",{className:"topTitle",children:[(0,d.jsx)("span",{className:"leftArrow"}),(0,d.jsx)("span",{children:null===u||void 0===u?void 0:u.city_name})]}),(0,d.jsx)("div",{className:"btnsGroup",children:(0,d.jsx)("li",{className:"shareIcon"})})]})}),(0,d.jsx)("div",{className:"clearfix"}),(0,d.jsxs)("div",{className:"imgTiles",children:[(0,d.jsx)("div",{className:"imageTilesLeft",style:{display:"initial"},children:(0,d.jsx)("ul",{className:"masonryGrid"})}),(0,d.jsx)("div",{className:"imgTiles__contact mb-inline-contact",children:(0,d.jsx)("div",{className:"contact-form__content",style:{minHeight:"457px"},children:(0,d.jsx)("div",{className:"contact-form show",id:"contact-form",children:(0,d.jsx)("div",{className:"contact-form__flex",children:(0,d.jsxs)("div",{className:"contact-form__content",children:[(0,d.jsx)("div",{className:"contact-form__close"}),(0,d.jsx)("div",{className:"contact-form__inner contact-form__inner--392",id:"contact-default",children:(0,d.jsxs)("div",{className:"contact-form__slide contact-form__slide--default",id:"contact-slide-default",children:[(0,d.jsx)("div",{className:"contact-form__heading",children:"Fill this one-time contact form"}),(0,d.jsx)("div",{className:"contact-form__text mb-3",children:"Get Builders details over email"}),(0,d.jsx)("form",{children:(0,d.jsx)("button",{type:"submit",className:"btn btn-primary contact-form__btn",children:"Get Contact Details"})})]})})]})})})})})]}),(0,d.jsx)("div",{className:"tabSlider",style:{display:"none"},children:(0,d.jsxs)("div",{className:"slider-container",children:[(0,d.jsxs)("div",{className:"slider-top-bar",children:[(0,d.jsxs)("div",{className:"topTitle",children:[(0,d.jsx)("span",{className:"closeTab",children:(0,d.jsx)("a",{})}),(0,d.jsx)("span",{children:"demoproject1"})]}),(0,d.jsxs)("div",{className:"btnsGroup",children:[(0,d.jsx)("li",{className:"shareIcon"}),(0,d.jsx)("li",{children:(0,d.jsx)("button",{className:"btn btnBW clientAgent clientAgent2",children:"Contact Builder"})})]})]}),(0,d.jsx)("div",{className:"navList",children:(0,d.jsxs)("ul",{children:[(0,d.jsx)("div",{className:"naviScroll"}),(0,d.jsx)("div",{className:"sliderImgCount",children:(0,d.jsxs)("li",{className:"marginRightNone",children:["1 / ",(0,d.jsx)("span",{children:"0"})]})})]})}),(0,d.jsx)("div",{id:"hideLoader",children:(0,d.jsx)("img",{src:"http://localhost/realestate-live/public/images/loading-bars.gif",alt:"loading"})}),(0,d.jsx)("div",{id:"myGallery",children:(0,d.jsxs)("div",{className:"photoGallery",children:[(0,d.jsx)("a",{style:{display:"none"},children:(0,d.jsx)("div",{className:"arrow leftArrow"})}),(0,d.jsx)("a",{style:{display:"none"},children:(0,d.jsx)("div",{className:"arrow rightArrow"})})]})}),(0,d.jsxs)("div",{className:"bottomIndicator",id:"bottomIndicator",children:["Project Photo 1/",(0,d.jsx)("span",{children:"98"})]})]})})]})})}),(0,d.jsx)("section",{className:"proj-detail sticky-top",children:(0,d.jsx)("div",{className:"container-fluid",children:(0,d.jsxs)("ul",{className:"nav navigation__scroll",children:[(0,d.jsx)("li",{className:"nav-item navigation__item",children:(0,d.jsx)("a",{className:"nav-link active",href:"#nav-overview",children:"Overview"})}),(0,d.jsx)("li",{className:"nav-item navigation__item",children:(0,d.jsx)("a",{className:"nav-link",href:"#propertiesInPrj",children:"Properties"})}),(0,d.jsx)("li",{className:"nav-item navigation__item",children:(0,d.jsx)("a",{className:"nav-link",href:"#nav-about-project",children:"About Project"})}),(0,d.jsx)("li",{className:"nav-item navigation__item",children:(0,d.jsx)("a",{className:"nav-link",href:"#nav-amenities",children:"Amenities"})}),(0,d.jsx)("li",{className:"nav-item navigation__item",children:(0,d.jsx)("a",{className:"nav-link",href:"#nav-project-unit-floors",children:"Floor Plan & Units"})}),(0,d.jsx)("li",{className:"nav-item navigation__item",children:(0,d.jsx)("a",{className:"nav-link",href:"#nav-about-locality",children:"About Locality"})}),(0,d.jsx)("li",{className:"nav-item navigation__item",children:(0,d.jsx)("a",{className:"nav-link",href:"#pricTrendli",children:"Price Trends"})}),(0,d.jsx)("li",{className:"nav-item navigation__item",children:(0,d.jsx)("a",{className:"nav-link",href:"#nav-project-details",children:"Project Details"})}),(0,d.jsx)("li",{className:"nav-item navigation__item",children:(0,d.jsx)("a",{className:"nav-link",href:"#nav-about-builder",children:"About Developer"})}),(0,d.jsx)("li",{className:"nav-item navigation__item",children:(0,d.jsx)("a",{className:"nav-link",href:"#nav-project-video",children:"Project Video"})}),(0,d.jsx)("li",{className:"nav-item navigation__item",children:(0,d.jsx)("a",{className:"nav-link",href:"#nav-project-location",children:"Project Location"})})]})})}),(0,d.jsx)("section",{className:"section projdt",children:(0,d.jsx)("div",{className:"container-fluid",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("aside",{className:"col-xl-8 col-lg-8 col-12",children:[(0,d.jsxs)("ol",{className:"breadcrumb",children:[(0,d.jsx)("li",{className:"breadcrumb-item",children:(0,d.jsx)(n.N_,{to:"/",children:"Home"})}),(0,d.jsx)("li",{className:"breadcrumb-item",children:(0,d.jsxs)("a",{children:["Project in ",null===u||void 0===u?void 0:u.city_name]})}),(0,d.jsx)("li",{className:"breadcrumb-item",children:(0,d.jsxs)("a",{children:["Project in ",null===u||void 0===u?void 0:u.locality]})}),(0,d.jsx)("li",{className:"breadcrumb-item",children:(0,d.jsx)("a",{children:null===u||void 0===u?void 0:u.city_name})})]}),(0,d.jsxs)("div",{className:"card mb-4",id:"nav-overview",children:[(0,d.jsx)("div",{className:"card-header",children:(0,d.jsx)("h4",{children:"Overview"})}),(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsxs)("div",{className:"position-relative mb-3",children:[(0,d.jsx)("h4",{children:(null===u||void 0===u?void 0:u.project_name)||"Not available"}),(0,d.jsxs)("p",{children:["By ",(null===u||void 0===u?void 0:u.developer_name)||"Not available"]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("i",{className:"icon-feather-map-pin text-site"}),null===u||void 0===u?void 0:u.locality," ,",null===u||void 0===u?void 0:u.city_name]})]}),(0,d.jsx)("ul",{className:"list list-2 mb-4",children:(0,d.jsxs)("li",{children:["Possession by"," ",$(null===u||void 0===u?void 0:u.launched_date)]})}),(0,d.jsx)("h5",{children:`INR ${null===u||void 0===u?void 0:u.min_price} - INR ${null===u||void 0===u?void 0:u.max_price}`}),(0,d.jsxs)("span",{className:"mb-3",children:[null===u||void 0===u||null===(e=u.bhk_types)||void 0===e?void 0:e.map((e=>null===e||void 0===e?void 0:e.bhk_type.charAt(0))).join(", ")," ","BHK Flats"]})]})]}),(0,d.jsxs)("div",{className:"card mb-4",id:"nav-about-project",children:[(0,d.jsx)("div",{className:"card-header",children:(0,d.jsxs)("h4",{children:["About ",(null===u||void 0===u?void 0:u.project_name)||"demo project"]})}),(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Project size"}),(0,d.jsx)("h3",{children:T?`${q} Acer`:"Size not available"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"launched date"}),(0,d.jsx)("h3",{children:$(null===u||void 0===u?void 0:u.launched_date)})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Total Units"}),(0,d.jsx)("h3",{children:null===u||void 0===u?void 0:u.unit})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Total Towers"}),(0,d.jsx)("h3",{children:null===u||void 0===u?void 0:u.tower})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"BHK"}),(0,d.jsx)("h3",{children:null===u||void 0===u||null===(s=u.bhk_types)||void 0===s?void 0:s.map((e=>null===e||void 0===e?void 0:e.bhk_type.charAt(0))).join(", ")})]})]})]}),(0,d.jsxs)("div",{className:"card mb-4",id:"nav-amenities",children:[(0,d.jsx)("div",{className:"card-header",children:(0,d.jsxs)("h4",{children:["Amenities in"," ",u.project_name||"Demo project"]})}),(0,d.jsx)("div",{className:"card-body p-2",children:(0,d.jsx)("ul",{className:"list-property-details",children:null===u||void 0===u||null===(a=u.amenityResult)||void 0===a?void 0:a.map(((e,s)=>(0,d.jsxs)("li",{children:[(0,d.jsx)("i",{className:"icon-img-project"}),(0,d.jsx)("span",{children:e.amenity_name})]},s)))})})]}),(0,d.jsxs)("div",{className:"card mb-4",id:"nav-about-locality",children:[(0,d.jsx)("div",{className:"card-header",children:(0,d.jsxs)("h4",{children:["About ",u.locality," Location"]})}),(0,d.jsx)("div",{className:"card-body",children:(0,d.jsx)("p",{children:"Locality introduction and neighbourhood New Town is a planned area situated on the north-eastern periphery of Kolkata. It falls under North 24 Parganas district and is a part of New Town Kol... Read More Things to keep in mind Planned locality comprising a mix of residential, commercial, IT and institutional areas Employment centre in Kolkata having several well-known IT MNCs Developed network of roads providing sound connectivity and upcoming Yellow Metro Line to improve connectivity Subdued residential demand and slow pace of development"})})]}),(0,d.jsxs)("div",{className:"card mb-4",id:"pricTrendDiv",children:[(0,d.jsx)("div",{className:"card-header",children:(0,d.jsxs)("h4",{className:"text-uppercase mt-3",children:["Landmarks Near"," ",u.project_name||"demo project"]})}),(0,d.jsx)("div",{className:"card-body",children:(0,d.jsx)("ul",{className:"list-info list-col-lg-2 list-property-feature mb-4",children:null===u||void 0===u||null===(h=u.landmarks)||void 0===h?void 0:h.map(((e,s)=>{const{landmark_name:a,details:l}=e;return(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:a.charAt(0).toUpperCase()+a.slice(1)}),l.map(((e,s)=>(0,d.jsx)("div",{children:"object"===typeof e?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("p",{children:`${e.landmark_value} (${e.distance})`})}):(0,d.jsx)("p",{children:e})},s)))]},s)}))})})]}),(0,d.jsxs)("div",{className:"card mb-4",id:"propertiesInPrj",children:[(0,d.jsx)("div",{className:"card-header",children:(0,d.jsx)("h4",{children:"Properties Listed"})}),(0,d.jsx)("div",{className:"card-body",children:(0,d.jsx)("ul",{className:"list mb-0",children:"No Property Found!"})})]}),(0,d.jsxs)("div",{className:"card mb-4",id:"nav-project-details",children:[(0,d.jsx)("div",{className:"card-header",children:(0,d.jsx)("h4",{children:"Project Plans"})}),(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsxs)("h5",{children:["Specifications of"," ",(null===u||void 0===u?void 0:u.project_name)||" Shyam Project"]}),(0,d.jsx)("p",{children:null===u||void 0===u?void 0:u.project_description}),(0,d.jsx)("h5",{children:null===u||void 0===u?void 0:u.address}),(0,d.jsx)("ul",{className:"list list-2 mb-4",children:(0,d.jsx)("li",{children:"demo"})})]})]}),(0,d.jsxs)("div",{className:"card mb-4",id:"nav-project-unit-floors",children:[(0,d.jsx)("div",{className:"card-header",children:(0,d.jsxs)("h4",{children:[null===u||void 0===u?void 0:u.developer_name," Floor Plans and Units"]})}),(0,d.jsx)("div",{style:{display:"flex"},children:null===u||void 0===u||null===(j=u.bhk_types)||void 0===j?void 0:j.map(((e,s)=>(0,d.jsx)("div",{children:(0,d.jsxs)("div",{style:{display:"flex"},children:[(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsxs)("p",{children:[null===e||void 0===e?void 0:e.bhk_type," Flat"]}),(0,d.jsx)("p",{children:`${null===e||void 0===e?void 0:e.min_sqft} Sq-ft - ${null===e||void 0===e?void 0:e.max_sqft} Sq-ft`}),(0,d.jsx)("p",{children:"Sale "+(e.min_amt_per_sqft&&e.max_amt_per_sqft?`${e.min_amt_per_sqft} - ${e.max_amt_per_sqft}`:"not available")})]}),(0,d.jsxs)("div",{children:[u.floorPlanImage.map(((e,a)=>{const{images:l}=e;if(l.length>0){const e=l[0].image,i=`${f.url}/${e}`;return(0,d.jsx)("div",{children:(0,d.jsx)("img",{style:{height:"50px",width:"50px"},src:i,alt:`Floor Plan Image ${a}`,onClick:()=>{F(s)}})},a)}return null})),_?(0,d.jsx)(o,{showFloorImage:F,setShowFloorPlanImage:w,projectdetails:u,selectedBhk:k}):null]})]})},s)))})]}),(0,d.jsxs)("div",{className:"card mb-4",id:"nav-about-builder",children:[(0,d.jsx)("div",{className:"card-header",children:(0,d.jsx)("h4",{children:"About Developer"})}),(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:"http://localhost/realestate-live/public/upload/user/thumb/1694765301_30ae46861b0920ba16bb.jpg",width:"120",alt:"company logo"})}),(0,d.jsx)("h5",{children:null===u||void 0===u?void 0:u.developer_name}),(0,d.jsxs)("p",{children:[" ",(0,d.jsxs)("b",{children:[" ",(null===u||void 0===u?void 0:u.year)||"5"]})," Years of Experience"]})]})]})]}),(0,d.jsx)("aside",{className:"col-xl-4 col-lg-4 col-12",children:(0,d.jsxs)("div",{className:"sticky-top mb-4",children:[(0,d.jsxs)("div",{className:"sort-by mb-2",children:[(0,d.jsxs)("div",{className:"social-share-wrap me-2",children:[(0,d.jsx)("a",{className:"btn btn-sm btn-outline-site w-auto",children:(0,d.jsx)("i",{className:"icon-feather-share-2"})}),(0,d.jsxs)("div",{className:"share-items",children:[(0,d.jsx)("a",{className:"btn-floating btn btn-tw",title:"Share on Facebook",children:(0,d.jsx)("i",{className:"icon-brand-facebook-f"})}),(0,d.jsx)("a",{className:"btn-floating btn btn-tw",target:"_blank",rel:"noopener",title:"Share on Twitter",children:(0,d.jsx)("i",{className:"icon-brand-twitter"})}),(0,d.jsx)("a",{className:"btn-floating btn btn-tw",target:"_blank",rel:"noopener",title:"Share on Linkedin",children:(0,d.jsx)("i",{className:"icon-brand-linkedin-in"})}),(0,d.jsx)("a",{className:"btn-floating btn btn-tw",target:"_blank",rel:"noopener",title:"Share on Whatsapp",children:(0,d.jsx)("i",{className:"icon-brand-whatsapp"})})]})]}),(0,d.jsx)("a",{className:"btn",onClick:()=>window.print(),title:"Print",children:(0,d.jsx)("i",{className:"icon-feather-printer"})})]}),(0,d.jsxs)("div",{className:"card mb-4",children:[(0,d.jsx)("div",{className:"card-header",children:(0,d.jsx)("h4",{children:"Looking for property in Location here"})}),(0,d.jsx)("div",{className:"card-body",children:(0,d.jsx)(r.A,{})})]})]})})]})})})]})})})}}}]);
//# sourceMappingURL=604.1fee387d.chunk.js.map