import React from 'react';

const Testimonial = () => {
  return (
    <div>
      <section className="section feedback" dir="ltr">
        <div className="container">
          <div className="section-headline text-center">
            <h3>TESTIMONIALS CLIENT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div className="testimonial-style-5 st-software testimonial-slider-2 poss--relative" style={{ overflow: 'hidden', position: 'relative' }}>
            {/* Start Testimonial Nav */}
            <div className="testimonial-nav slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div className="slick-track" style={{ opacity: 1, width: '260px', transform: 'translate3d(65px, 0px, 0px)' }}>
                  <div className="slick-slide slick-current slick-center" data-slick-index="0" aria-hidden="true" style={{ width: '130px' }}>
                    <div>
                      <div className="testimonial-img" style={{ width: '100%', display: 'inline-block' }}>
                        <img src="http://localhost/realestate-live/user_uploads/testimonials/1687339352_c75351e94fafb0e2d4c9.png" alt="testimonial image" />
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: '130px' }}>
                    <div>
                      <div className="testimonial-img" style={{ width: '100%', display: 'inline-block' }}>
                        <img src="http://localhost/realestate-live/user_uploads/testimonials/1692598941_59d4ca9c26c0c7ce0344.jpg" alt="testimonial image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Testimonial Nav */}
            
            {/* Start Testimonial For */}
            <div className="testimonial-for slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div className="slick-track" style={{ opacity: 1, width: '1816px' }}>
                  <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{ width: '908px', position: 'relative', left: '0px', top: '0px', zIndex: '999', opacity: 1 }}>
                    <div>
                      <div className="testimonial-desc" style={{ width: '100%', display: 'inline-block' }}>
                        <div className="client">
                          <h4>Tim Cook</h4>
                          <h5>Builder1</h5>
                          <ul className="rating">
                            <li><i className="icon-line-awesome-star"></i></li>
                            <li><i className="icon-line-awesome-star-half-o"></i></li>
                            <li><i className="icon-line-awesome-star-o"></i></li>
                            <li><i className="icon-line-awesome-star-o"></i></li>
                            <li><i className="icon-line-awesome-star-o"></i></li>
                          </ul>
                        </div>
                        <p>dfd ffd dfgdf dfgfd</p>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: '908px', position: 'relative', left: '-908px', top: '0px', zIndex: '998', opacity: 0 }}>
                    <div>
                      <div className="testimonial-desc" style={{ width: '100%', display: 'inline-block' }}>
                        <div className="client">
                          <h4>Alex Hales</h4>
                          <h5>Web developer</h5>
                          <ul className="rating">
                            <li><i className="icon-line-awesome-star"></i></li>
                            <li><i className="icon-line-awesome-star"></i></li>
                            <li><i className="icon-line-awesome-star"></i></li>
                            <li><i className="icon-line-awesome-star-half-o"></i></li>
                            <li><i className="icon-line-awesome-star-o"></i></li>
                          </ul>
                        </div>
                        <p>Need to translate an email from a supplier in Arabic or a website for your vacation abroad? Lingvanex introduces programs and applications that instantly translate from English into Arabic!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Testimonial For */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
