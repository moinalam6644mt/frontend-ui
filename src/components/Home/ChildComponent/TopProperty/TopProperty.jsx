import React from 'react'

const TopProperty = () => {
  return (
    <div>
      <section className="section pb-0">
  <div className="container">
    <div className="section-headline text-center">
      <h3>Top Property</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    </div>
    <div className="row">
            <article className="col-lg-4 col-sm-6 col-12">
        <div className="card card-ads">
          <div className="card-image">
            <div id="carousellist0" className="carousel slide ads-carousel" data-bs-ride="false">
                          <div className="carousel-inner">
                                <div className="carousel-item active">
                  <a ><img src="http://localhost/realestate-live/public/upload/properties/thumb420/1669811694_15dd272926e4adf661ae.jpg" alt="property image" className="card-img-top"/></a>
                </div>
                              </div>

            </div>
            <span className="ads-type rent">for Rent</span> 
                        <span className="ads-fav" data-act="favourite2" ><i className="icon-line-awesome-heart-o"></i></span>
                        <span className="total-ad-pic"><img src="http://localhost/realestate-live/public/images/camera.svg" alt="Camera Icon"/>1</span>
            <div className="ads-price">
              <h4>AED179856</h4>
            </div>
          </div>
          <div className="card-body">
            <h4><a >Commercial Showroom For Sale</a></h4>
            <p className="mb-1"><i className="icon-feather-map-pin"></i> Khalifa Bin Zayed Street - Al Ain - Abu Dhabi - United Arab Emirates</p>
            <ul className="list-info">
              <li><i className="icon-img-flat"></i> </li>
              <li><i className="icon-img-room" title="Rooms:"></i> <span>2</span></li>
              <li><i className="icon-img-bed" title="Bedrooms:"></i> <span>1</span></li>
              <li>
                <i className="icon-img-ratio"></i>
                <span>1890</span>               </li>
              <li><i className="icon-img-tub" title="Bathrooms:"></i> <span>1</span></li>
            </ul>
          </div>
          <div className="card-footer">
            <div className="user-details">
              <div className="user-avatar"> <img src="http://localhost/realestate-live/public/images/user.jpg" alt="property image" height="32" width="32" className="rounded-circle"/> </div>
              <div className="user-name"><span>Allen Brett</span></div>
            </div>
            <span className="ad-post-date ms-3"><i className="icon-feather-calendar"></i> 30 Nov, 2022</span> </div>
        </div>
      </article>
          </div>
    <div className="text-center"><a href="#" className="btn btn-site">View More</a></div>
  </div>
</section>
    </div>
  )
}

export default TopProperty
