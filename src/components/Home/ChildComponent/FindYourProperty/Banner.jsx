import React from 'react';

const Banner = () => {
  return (
    <section className="banner front-page" style={{backgroundImage: "url('http://localhost/realestate-live/public/images/banner-01.jpg')"}}>
      <div className="banner-layer">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-10 col-lg-10 col-12">
              <div className="headline">
                <h1>FIND YOUR PROPERTY</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  );
};

export default Banner;
