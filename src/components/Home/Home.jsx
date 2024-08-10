import React from 'react'
import Banner from './ChildComponent/FindYourProperty/Banner';
import BannerForm from './ChildComponent/FindYourProperty/BannerForm'
import Section2 from './ChildComponent/KnowYourProperty/Section2'
import RecentProperty from './ChildComponent/RecentProperty/Section3'
import TopProperty from './ChildComponent/TopProperty/TopProperty'
import FeaturedProject from './ChildComponent/FeaturedProject/FeaturedProject';
import Sell from './ChildComponent/SellSection/Sell';
import PostRequirement from './ChildComponent/PostYourProperty/PostRequirement';
import Testimonial from './ChildComponent/Testimonial/Testtimonial';
import Advice from './ChildComponent/Advice/Advice';


const Home = () => {
  
  return (
    <div>
      <Banner/>
      <BannerForm/>
      <Section2/>
      <RecentProperty/>
      <TopProperty/>
      <FeaturedProject/>
      <Sell/>
      <PostRequirement/>
      <Testimonial/>
      <Advice/>
    </div>
  )
}

export default Home
