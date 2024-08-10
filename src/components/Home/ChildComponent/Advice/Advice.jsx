import React from 'react'

const Advice = () => {
  return (
    <div>
      <section className="section pb-0">
  <div className="container">
    <div className="section-headline text-center">
      <h3>Advice &amp;Tools</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    </div>
    <div className="row row-10 -mb-3">
      <article className="col-xl-3 col-sm-6 col-12">
        <div className="card card-info">
          <div className="card-body">
            <img src="http://localhost/realestate-live/public/images/icons/property-value.png" alt="Icons" height="128" width="172"/>
            <h4>Property Valuation</h4>
            <p>Know the right value for your Property before you Buy or Sell.</p>
            <a href="http://localhost/realestate-live/home/propertyvaluation" className="btn btn-outline-site">Know More</a>
          </div>
        </div>
      </article>
      <article className="col-xl-3 col-sm-6 col-12">
        <div className="card card-info">
          <div className="card-body">
            <img src="http://localhost/realestate-live/public/images/icons/legal.png" alt="Icons" height="128" width="170"/>
            <h4>Legal Title Check</h4>
            <p>Get property checked for no legal claim/bank attachment</p>
            <a href="#" className="btn btn-outline-site">Know More</a>
          </div>
        </div>
      </article>
      <article className="col-xl-3 col-sm-6 col-12">
        <div className="card card-info">
          <div className="card-body">
            <img src="http://localhost/realestate-live/public/images/icons/trends.png" alt="Icons" height="128" width="167"/>
            <h4>Rates &amp;Trends</h4>
            <p>Know all about Property Rates &amp; Trends in your city</p>
            <a href="#" className="btn btn-outline-site">Know More</a>
          </div>
        </div>
      </article>
      <article className="col-xl-3 col-sm-6 col-12">
        <div className="card card-info">
          <div className="card-body">
            <img src="http://localhost/realestate-live/public/images/icons/emi-calculator.png" alt="Icons" height="128" width="169"/>
            <h4>EMI Calculator</h4>
            <p>Know how much you will have to pay every month on your loan</p>
            <a href="#" className="btn btn-outline-site">Know More</a>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

{/* other section */}

<section className="section text-center">
  <div className="container">
    <div className="row">
      <article className="col-md-3 col-sm-3 col-6">
        <div className="facts"> <img src="http://localhost/realestate-live/public/images/icons/sale.png" alt=""/>
          <h2>26,000</h2>
          <h4>FOR SALE</h4>
        </div>
      </article>
      <article className="col-md-3 col-sm-3 col-6">
        <div className="facts"> <img src="http://localhost/realestate-live/public/images/icons/rent-2.png" alt=""/>
          <h2>51,000</h2>
          <h4>FOR SALE</h4>
        </div>
      </article>
      <article className="col-md-3 col-sm-3 col-6">
        <div className="facts"> <img src="http://localhost/realestate-live/public/images/icons/land.png" alt=""/>
          <h2>11,000</h2>
          <h4>LAND/PLOTS</h4>
        </div>
      </article>
      <article className="col-md-3 col-sm-3 col-6">
        <div className="facts"> <img src="http://localhost/realestate-live/public/images/icons/commercial.png" alt=""/>
          <h2>5,200</h2>
          <h4>COMMERCIAL</h4>
        </div>
      </article>
    </div>
  </div>
</section>
    </div>
  )
}

export default Advice
