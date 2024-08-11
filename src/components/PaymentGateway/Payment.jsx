// import React, { useState } from "react";
// import { loadStripe } from '';

// const stripePromise = loadStripe('your_stripe_publishable_key');

// const Checkout = () => {
//   const handleCheckout = async () => {
//     const response = await fetch('/create-checkout-session', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         items: [
//           { name: 'Product 1', price: 5000, quantity: 1 },
//           { name: 'Product 2', price: 3000, quantity: 2 },
//         ],
//       }),
//     });

//     const session = await response.json();
//     const stripe = await stripePromise;
//     stripe.redirectToCheckout({ sessionId: session.url });
//   };

//   return (
//     <div>
//       <label className="p-4" style={{ marginLeft: "30%" }}>
//         Buyers are unable to notice your Property
//       </label>
//       <br />
//       <span style={{ marginLeft: "15%" }}>
//         Speak to all buyers directly & Pay No Brokerage Increase Property's
//         Visibility by up to 5X
//       </span>

//       <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
//         <div className="col">
//           <div className="card h-100">
//             <div className="card-body">
//               <h5 className="card-title">FREE</h5>
//               <p className="bg-success w-50 text-light">Currently Active</p>
//               <button className="btn btn-danger" onClick={handleCheckout}>BUY NOW</button>
//               <p>Up to 2</p>
//               <p>18% Buyers</p>
//             </div>
//             <div className="card-footer">
//               <small className="text-body-secondary">Limited</small>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="card h-100">
//             <div className="card-body">
//               <h5 className="card-title">GOLD</h5>
//               <p className="bg-success w-50 text-light">3000</p>
//               <button className="btn btn-danger" onClick={handleCheckout}>BUY NOW</button>
//               <p>Up to 8</p>
//               <p>90% Buyers</p>
//             </div>
//             <div className="card-footer">
//               <small className="text-body-secondary">90 Days</small>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="card h-100">
//             <div className="card-body">
//               <h5 className="card-title">DIAMOND</h5>
//               <p className="bg-success w-50 text-light">4000</p>
//               <button className="btn btn-danger" onClick={handleCheckout}>BUY NOW</button>
//               <p>Up to 10</p>
//               <p>92% Buyers</p>
//             </div>
//             <div className="card-footer">
//               <small className="text-body-secondary">120 Days</small>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="card h-100">
//             <div className="card-body">
//               <h5 className="card-title">TITANIUM</h5>
//               <p className="bg-success w-50 text-light">5000</p>
//               <button className="btn btn-danger">BUY NOW</button>
//               <p>Up to 50</p>
//               <p>98% Buyers</p>
//             </div>
//             <div className="card-footer">
//               <small className="text-body-secondary">180 Days</small>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
