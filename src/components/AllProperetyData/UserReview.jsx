import React, { useState } from 'react';
import AuthUser from '../Authentication/Validation/AuthUser';

const UserReview = ({setUserReview}) => {
  const [formData, setFormData] = useState({
    Neighborhood_rate: '',
    Roads_rate: '',
    Safety_rate: '',
    Cleanliness_rate: '',
    Transportation_rate: '',
    Parking_rate: '',
    Connectivity_rate: '',
    Traffic_rate: '',
    Market_rate: '',
    Schools_rate: '',
    Restaurants_rate: '',
    Hospitals_rate: '',
    user_relation: '',
    review_title: '',
    review_description: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors,] = useState({});
 const {callApi} = AuthUser();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name + value)
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await callApi({
        api: '/your-api-endpoint',
        method: 'POST',
        data: formData,
      });
  
      if (result.success) {
        console.log('Form submitted successfully:', result);
        setFormData({
          Neighborhood_rate: '',
          Roads_rate: '',
          Safety_rate: '',
          Cleanliness_rate: '',
          Transportation_rate: '', 
          Parking_rate: '',
          Connectivity_rate: '',
          Traffic_rate: '',
          Market_rate: '',
          Schools_rate: '',
          Restaurants_rate: '',
          Hospitals_rate: '',
          user_relation: '',
          review_title: '',
          review_description: '',
        });
  
        console.log(formData); // This will still log the previous state because formData state update is asynchronous
      } else {
        console.error('Form submission failed:', result.message || 'Unknown error');
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="detail-full-pop open-state" id="writeReviewPopupSection" style={{ display: 'block'}}>
      <div className="pop-header clearfix open-state">
        <div className="pop-header__back" onClick={() => {setUserReview(false)}}></div>
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
              {['Neighborhood', 'Roads', 'Safety', 'Cleanliness'].map((item) => (
                <div className="rating__box__row" key={item}>
                  <div className="rating__box__label ellipsis">{item.charAt(0).toUpperCase() + item.slice(1)}</div>
                  <div className="rating__box__star-group">
                    {[5, 4, 3, 2, 1].map((val) => (
                      <React.Fragment key={val}>
                        <input type="radio" id={`${item}_rate${val}`} name={`${item}_rate`} value={val} onChange={handleInputChange} />
                        <label className="rating__star" htmlFor={`${item}_rate${val}`}></label>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="rating__box">
              <div className="rating__text-num">
                <div className="rating__text ellipsis">COMMUNICATION</div>
              </div>
              {['Transportation', 'Parking', 'Connectivity', 'Traffic'].map((item) => (
                <div className="rating__box__row" key={item}>
                  <div className="rating__box__label ellipsis">{item.charAt(0).toUpperCase() + item.slice(1)}</div>
                  <div className="rating__box__star-group">
                    {[5, 4, 3, 2, 1].map((val) => (
                      <React.Fragment key={val}>
                        <input type="radio" id={`${item}_rate${val}`} name={`${item}_rate`} value={val} onChange={handleInputChange} />
                        <label className="rating__star" htmlFor={`${item}_rate${val}`}></label>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="rating__box">
              <div className="rating__text-num">
                <div className="rating__text ellipsis">PLACE OF INTEREST</div>
              </div>
              {['Market', 'Schools', 'Restaurants', 'Hospitals'].map((item) => (
                <div className="rating__box__row" key={item}>
                  <div className="rating__box__label ellipsis">{item.charAt(0).toUpperCase() + item.slice(1)}</div>
                  <div className="rating__box__star-group">
                    {[5, 4, 3, 2, 1].map((val) => (
                      <React.Fragment key={val}>
                        <input type="radio" id={`${item}_rate${val}`} name={`${item}_rate`} value={val} onChange={handleInputChange} />
                        <label className="rating__star" htmlFor={`${item}_rate${val}`}></label>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="form-row">
            <select className="review-select" id="user_relation" name="user_relation" onChange={handleInputChange}>
              <option value="">Select relation</option>
              <option value="1">I own a property here</option>
              <option value="2">I currently/used to live here</option>
              <option value="3">I am a local agent</option>
              <option value="4">I visited the project</option>
              <option value="5">Other</option>
            </select>
            {errors.user_relation && <span className="review-error">{errors.user_relation}</span>}
          </div>
          <div className="review-subheading">Add a Title</div>
          <div className="form-row">
            <input className="review-input" name="review_title" placeholder="Add subject line to your review" id="review_title" type="text" value={formData.review_title} onChange={handleInputChange} />
            {errors.review_title && <span className="review-error">{errors.review_title}</span>}
          </div>
          <div className="review-subheading">Write Review</div>
          <div className="form-row">
            <textarea className="review-textarea" name="review_description" placeholder="Tell us what you like & dislike about this project" id="review_description" value={formData.review_description} onChange={handleInputChange}></textarea>
            {errors.review_description && <span className="review-error">{errors.review_description}</span>}
          </div>
          <div className="form-row">
            <button type="submit" className="review-btn" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserReview;
