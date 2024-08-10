import React, { useState } from 'react';

const UserReviewData = () => {
  const [neighborhoodRate, setNeighborhoodRate] = useState('');
  const [roadsRate, setRoadsRate] = useState('');
  const [safetyRate, setSafetyRate] = useState('');
  const [cleanlinessRate, setCleanlinessRate] = useState('');
  const [publicTransportRate, setPublicTransportRate] = useState('');
  const [parkingRate, setParkingRate] = useState('');
  const [connectivityRate, setConnectivityRate] = useState('');
  const [trafficRate, setTrafficRate] = useState('');
  const [marketRate, setMarketRate] = useState('');
  const [schoolsRate, setSchoolsRate] = useState('');
  const [restaurantsRate, setRestaurantsRate] = useState('');
  const [hospitalRate, setHospitalRate] = useState('');
  const [userRelation, setUserRelation] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewDescription, setReviewDescription] = useState('');
  const [errors, setErrors] = useState({});

  const handleRatingChange = (e, setter) => {
    setter(e.target.value);
  };

  const validateForm = () => {
    let formErrors = {};
    if (!userRelation) formErrors.userRelationError = 'Please select your relation to the property.';
    if (!reviewTitle) formErrors.reviewTitleError = 'Please add a title.';
    if (!reviewDescription) formErrors.reviewDescriptionError = 'Please write a review.';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data to the server or handle it as required
      console.log({
        neighborhoodRate,
        roadsRate,
        safetyRate,
        cleanlinessRate,
        publicTransportRate,
        parkingRate,
        connectivityRate,
        trafficRate,
        marketRate,
        schoolsRate,
        restaurantsRate,
        hospitalRate,
        userRelation,
        reviewTitle,
        reviewDescription,
      });
    }
  };

  return (
    <div className="detail-full-pop open-state" id="writeReviewPopupSection" style={{ display: 'block', width:'100%'}}>
      <div className="pop-header clearfix open-state" style={{width:'100%'}}>
        <div className="pop-header__back" onClick={() => { /* Add your hide function here */ }}></div>
        <div className="pop-header__title ellipsis">Write your review</div>
      </div>
      <div className="rating-review-popup">
        <form id="review_form_write" onSubmit={handleSubmit}>
          <div className="review-subheading">Add Rating</div>
          <div className="rating__wrap">
            <div className="rating__box">
              <div className="rating__text-num">
                <div className="rating__text ellipsis">ENVIRONMENT</div>
              </div>
              <div className="rating__box__row">
                <div className="rating__box__label ellipsis">Neighborhood</div>
                <div className="rating__box__star-group">
                  {[5, 4, 3, 2, 1].map((value) => (
                    <React.Fragment key={value}>
                      <input type="radio" id={`neighborhood_rate${value}`} name="neighborhood_rate" value={value} onChange={(e) => handleRatingChange(e, setNeighborhoodRate)} />
                      <label className="rating__star" htmlFor={`neighborhood_rate${value}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="rating__box__row">
                <div className="rating__box__label ellipsis">Roads</div>
                <div className="rating__box__star-group">
                  {[5, 4, 3, 2, 1].map((value) => (
                    <React.Fragment key={value}>
                      <input type="radio" id={`roads_rate${value}`} name="roads_rate" value={value} onChange={(e) => handleRatingChange(e, setRoadsRate)} />
                      <label className="rating__star" htmlFor={`roads_rate${value}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="rating__box__row">
                <div className="rating__box__label ellipsis">Safety</div>
                <div className="rating__box__star-group">
                  {[5, 4, 3, 2, 1].map((value) => (
                    <React.Fragment key={value}>
                      <input type="radio" id={`safety_rate${value}`} name="safety_rate" value={value} onChange={(e) => handleRatingChange(e, setSafetyRate)} />
                      <label className="rating__star" htmlFor={`safety_rate${value}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="rating__box__row">
                <div className="rating__box__label ellipsis">Cleanliness</div>
                <div className="rating__box__star-group">
                  {[5, 4, 3, 2, 1].map((value) => (
                    <React.Fragment key={value}>
                      <input type="radio" id={`cleanliness_rate${value}`} name="cleanliness_rate" value={value} onChange={(e) => handleRatingChange(e, setCleanlinessRate)} />
                      <label className="rating__star" htmlFor={`cleanliness_rate${value}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="rating__box">
              <div className="rating__text-num">
                <div className="rating__text ellipsis">COMMUNICATION</div>
              </div>
              <div className="rating__box__row">
                <div className="rating__box__label ellipsis">Public Transport</div>
                <div className="rating__box__star-group">
                  {[5, 4, 3, 2, 1].map((value) => (
                    <React.Fragment key={value}>
                      <input type="radio" id={`public_transport${value}`} name="public_transport" value={value} onChange={(e) => handleRatingChange(e, setPublicTransportRate)} />
                      <label className="rating__star" htmlFor={`public_transport${value}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="rating__box__row">
                <div className="rating__box__label ellipsis">Parking Facility</div>
                <div className="rating__box__star-group">
                  {[5, 4, 3, 2, 1].map((value) => (
                    <React.Fragment key={value}>
                      <input type="radio" id={`parking${value}`} name="parking_rate" value={value} onChange={(e) => handleRatingChange(e, setParkingRate)} />
                      <label className="rating__star" htmlFor={`parking${value}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="rating__box__row">
                <div className="rating__box__label ellipsis">Connectivity</div>
                <div className="rating__box__star-group">
                  {[5, 4, 3, 2, 1].map((value) => (
                    <React.Fragment key={value}>
                      <input type="radio" id={`connectivity_rate${value}`} name="connectivity_rate" value={value} onChange={(e) => handleRatingChange(e, setConnectivityRate)} />
                      <label className="rating__star" htmlFor={`connectivity_rate${value}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="rating__box__row">
                <div className="rating__box__label ellipsis">Traffic</div>
                <div className="rating__box__star-group">
                  {[5, 4, 3, 2, 1].map((value) => (
                    <React.Fragment key={value}>
                      <input type="radio" id={`traffic_rate${value}`} name="traffic_rate" value={value} onChange={(e) => handleRatingChange(e, setTrafficRate)} />
                      <label className="rating__star" htmlFor={`traffic_rate${value}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="rating__box">
              <div className="rating__text-num">
                <div className="rating__text ellipsis">PLACES OF INTEREST</div>
              </div>
              <div className="rating__box__row">
                <div className="rating__box__label ellipsis">Market</div>
                <div className="rating__box__star-group">
                  {[5, 4, 3, 2, 1].map((value) => (
                    <React.Fragment key={value}>
                      <input type="radio" id={`market_rate${value}`} name="market_rate" value={value} onChange={(e) => handleRatingChange(e, setMarketRate)} />
                      <label className="rating__star" htmlFor={`market_rate${value}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="rating__box__row">
                <div className="rating__box__label ellipsis">Schools</div>
                <div className="rating__box__star-group">
                  {[5, 4, 3, 2, 1].map((value) => (
                    <React.Fragment key={value}>
                      <input type="radio" id={`schools_rate${value}`} name="schools_rate" value={value} onChange={(e) => handleRatingChange(e, setSchoolsRate)} />
                      <label className="rating__star" htmlFor={`schools_rate${value}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="rating__box__row">
                <div className="rating__box__label ellipsis">Restaurants</div>
                <div className="rating__box__star-group">
                  {[5, 4, 3, 2, 1].map((value) => (
                    <React.Fragment key={value}>
                      <input type="radio" id={`restaurants_rate${value}`} name="restaurants_rate" value={value} onChange={(e) => handleRatingChange(e, setRestaurantsRate)} />
                      <label className="rating__star" htmlFor={`restaurants_rate${value}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="rating__box__row">
                <div className="rating__box__label ellipsis">Hospital</div>
                <div className="rating__box__star-group">
                  {[5, 4, 3, 2, 1].map((value) => (
                    <React.Fragment key={value}>
                      <input type="radio" id={`hospital_rate${value}`} name="hospital_rate" value={value} onChange={(e) => handleRatingChange(e, setHospitalRate)} />
                      <label className="rating__star" htmlFor={`hospital_rate${value}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="review-subheading">Tell us more about your review</div>
          <div className="form__radio-group">
            <input type="radio" id="user_relation_owner" name="user_relation" value="Owner" onChange={(e) => setUserRelation(e.target.value)} />
            <label className="form__radio-label" htmlFor="user_relation_owner">Owner</label>
            <input type="radio" id="user_relation_tenant" name="user_relation" value="Tenant" onChange={(e) => setUserRelation(e.target.value)} />
            <label className="form__radio-label" htmlFor="user_relation_tenant">Tenant</label>
          </div>
          {errors.userRelationError && <div className="error">{errors.userRelationError}</div>}
          <div className="form__text-input">
            <input type="text" id="review_title" name="review_title" placeholder="Review Title" value={reviewTitle} onChange={(e) => setReviewTitle(e.target.value)} />
          </div>
          {errors.reviewTitleError && <div className="error">{errors.reviewTitleError}</div>}
          <div className="form__textarea-input">
            <textarea id="review_description" name="review_description" placeholder="Write your review" value={reviewDescription} onChange={(e) => setReviewDescription(e.target.value)}></textarea>
          </div>
          {errors.reviewDescriptionError && <div className="error">{errors.reviewDescriptionError}</div>}
          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default UserReviewData;
