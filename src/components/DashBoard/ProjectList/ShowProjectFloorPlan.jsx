
import React, { useState,useEffect } from 'react';

const ShowProjectFloorPlan = ({ setShowFloorPlanImage, projectdetails, selectedBhk }) => {
    const [selectedBhkType, setSelectedBhkType] = useState('');
    const [bhkUnit, setBhkUnit] = useState('')
    const [minSqft, setMinSqft] = useState('')
    const [maxSqft, setMaxSqft] = useState('')
    const [minPrice,setMinPrice]=useState('');
    const [maxPrice,setMaxPrice]=useState('')

    // Update selectedBhkType when selectedBhk or projectdetails change
    useEffect(() => {
        if (projectdetails?.bhk_types && selectedBhk >= 0) {

  useEffect(() => {
    if (projectdetails?.bhk_types) {
      const matchingBhkType = projectdetails?.bhk_types.find(bhkType => bhkType?.bhk_type === selectedBhk);
      if (matchingBhkType) {
        setSelectedBhkType(matchingBhkType.bhk_type);
      } else {
        console.log('No matching BHK type found for:', selectedBhk); 
      }
    }
  }, [selectedBhk, projectdetails]);


            const bhkTypes = projectdetails.bhk_types;
            console.log(bhkTypes)
            if (selectedBhk < bhkTypes.length) {
                const matchedBhkType = bhkTypes[selectedBhk].bhk_type;
                setSelectedBhkType(matchedBhkType);

                setBhkUnit(bhkTypes[selectedBhk].unit)
                setMinSqft(bhkTypes[selectedBhk].min_sqft)
                setMaxSqft(bhkTypes[selectedBhk].max_sqft)
                setMinPrice(bhkTypes[selectedBhk].min_amt_per_sqft)
                setMaxPrice(bhkTypes[selectedBhk].max_amt_per_sqft)
            }
        }
    }, [selectedBhk, projectdetails]);

    const selectBhkType = (e) => {
        const bhkType = e.target.value;
        console.log('User selected BHK type:', bhkType); // Debug log
        setSelectedBhkType(bhkType);


    };

    return (
        <div className="detail-full-pop open-state" id="writeReviewPopupSection" style={{ display: 'block' }}>
            <div className="pop-header clearfix open-state">
                <div className="pop-header__back" onClick={() => { setShowFloorPlanImage(false); }}></div>
                <div className="pop-header__title ellipsis">Units & Floor plans</div>
            </div>
            <div className="rating-review-popup">
                <div>
                    <div className="review-subheading">
                        <select value={selectedBhkType} onChange={selectBhkType}>
                            {projectdetails?.bhk_types?.map((bhkType, index) => (
                                <option key={index} value={bhkType.bhk_type}>
                                    {bhkType.bhk_type}
                                </option>
                            ))}
                        </select>

                        {selectedBhkType && (
                            <div className="price-info">
                                <h5>Unit: {bhkUnit}</h5>
                                <h5>Super Area- {`${minSqft} sqft - ${maxSqft} sqft`}</h5>
                                <p>
                                    Sale - { `${minPrice} - ${maxPrice}` }
                                </p>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowProjectFloorPlan;
