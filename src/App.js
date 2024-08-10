import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LayoutProvider } from './components/Context/LayoutContext';
import ProtectedRoute from './components/Authentication/Validation/ProtectedRoute';
import MainLayout from './components/Layout/MainLayout';
import Loading from './components/LoadingSpinner/Loading';

const Home = lazy(() => import('./components/Home/Home'));
const Register = lazy(() => import('./components/Authentication/Register/Register'));
const Login = lazy(() => import('./components/Authentication/Login/Login'));
const ForgetPassword = lazy(() => import('./components/Authentication/ForgetPassword/ForgetPassword'));
const DashBoard = lazy(() => import('./components/DashBoard/DashBoard'));
const PostProperty = lazy(() => import('./components/Property/PostProperty'));
const Profile = lazy(() => import('./components/DashBoard/UserDetails/Profile'));
const ProfileEdit = lazy(() => import('./components/DashBoard/UserDetails/ProfileEdit'));
const PropertyListing = lazy(() => import('./components/AllProperetyData/PropertyListing'));
const ProppertyListingViewPages = lazy(() => import('./components/DashBoard/Propertylist/ProppertyListingViewPages'));
const AllImageData = lazy(() => import('./components/DashBoard/GalleryPage/AllImageData'));
const UserReviewData = lazy(() => import('./components/DashBoard/UserDetails/UserReviewData'));
const MyProperty = lazy(() => import('./components/DashBoard/Propertylist/MyProperty'));
const PropertyDetails = lazy(() => import('./components/Home/ChildComponent/PropertyDetails/PropertyDetails'));
const AgentData = lazy(() => import('./components/DashBoard/AgentDetails/AgentData'));
const AgentDetails = lazy(() => import('./components/DashBoard/AgentDetails/AgentDetails'));
const ShowAllImages = lazy(() => import('./components/Home/ChildComponent/PropertyDetails/ShowAllImages'));
const EditPropertyDetails = lazy(() => import('./components/DashBoard/Propertylist/EditPropertyDetails'));
const Activities = lazy(() => import('./components/DashBoard/ProprertyCRM/Activities'));
const UserEnquiryDetails = lazy(() => import('./components/DashBoard/EnquiryDetails/UserEnquiryDetails'));
const MyProject = lazy(() => import('./components/DashBoard/ProjectList/MyProject'));
const MyProjectDetails = lazy(() => import('./components/DashBoard/ProjectList/MyProjectDetails'));
const PostProject = lazy(() => import('./components/Property/PostProperty'));
const EditProjectDetails = lazy(() => import('./components/DashBoard/ProjectList/EditProjectDetails'));
const AllProjectData = lazy(() => import('./components/ProjectListData/AllProjectData'));
const ProjectDetailsData = lazy(() => import('./components/ProjectListData/ProjectDetailsData'));
const Checkout =lazy(()=>import ('./components/PaymentGateway/Payment'))

const routes = [
  { path: "/", element: <Home />, layout: MainLayout },
  { path: "/register", element: <Register />, layout: MainLayout },
  { path: "/login", element: <Login />, layout: MainLayout },
  { path: "/forgetpassword", element: <ForgetPassword />, layout: MainLayout },
  { path: "/dashboard/:id", element: <DashBoard />, layout: MainLayout, protected: true },
  { path: "/dashboard", element: <DashBoard />, layout: MainLayout, protected: true },
  { path: "/postproperty", element: <PostProperty />, layout: MainLayout, protected: true },
  { path: "/profile", element: <Profile />, layout: MainLayout, protected: true },
  { path: "/profile-edit", element: <ProfileEdit />, layout: MainLayout, protected: true },
  { path: "/property-listing", element: <PropertyListing />, layout: MainLayout },
  { path: "/my-property/details/:property_id", element: <ProppertyListingViewPages />, layout: MainLayout, protected: true },
  { path: "/my-property-details/:property_id/gallery", element: <AllImageData />, layout: MainLayout, protected: false },
  { path: "/user-review", element: <UserReviewData />, layout: MainLayout, protected: true },
  { path: "/my-property", element: <MyProperty />, layout: MainLayout, protected: true },
  { path: "/property-details/:property_id", element: <PropertyDetails />, layout: MainLayout, protected: false },
  { path: "/agent-list", element: <AgentData />, layout: MainLayout, protected: false },
  { path: "/agent-details/:user_id", element: <AgentDetails />, layout: MainLayout, protected: false },
  { path: '/all-image', element: <ShowAllImages />, layout: MainLayout, protected: false },
  { path: '/my-property/edit/:property_id', element: <EditPropertyDetails />, layout: MainLayout, protected: false },
  { path: '/property-crm/activities', element: <Activities />, layout: MainLayout, protected: false },
  { path: '/user-enquiry', element: <UserEnquiryDetails />, layout: MainLayout, protected: false },
  { path: '/post-project', element: <PostProject />, layout: MainLayout, protected: false },
  { path: '/my-project', element: <MyProject />, layout: MainLayout, protected: false },
  { path: '/my-project/details/:project_id', element: <MyProjectDetails />, layout: MainLayout, protected: false },
  { path: '/my-project/edit/:project_id', element: <EditProjectDetails />, layout: MainLayout, protected: false },
  { path: '/all-project', element: <AllProjectData />, layout: MainLayout, protected: false },
  { path: '/all-project/details/:project_id', element: <ProjectDetailsData />, layout: MainLayout, protected: false },
  { path: '/checkout', element: <Checkout />, layout: MainLayout, protected: false },
];

const App = () => (
  <Router>
    <LayoutProvider>
      <Suspense fallback={<Loading/>}>
        <Routes>
          {routes.map(({ path, element, layout: LayoutComponent, protected: isProtected }) => (
            <Route
              key={path}
              path={path}
              element={
                <LayoutComponent>
                  {isProtected ? <ProtectedRoute>{element}</ProtectedRoute> : element}
                </LayoutComponent>
              }
            />
          ))}
        </Routes>
      </Suspense>
    </LayoutProvider>
  </Router>
);

export default App;
