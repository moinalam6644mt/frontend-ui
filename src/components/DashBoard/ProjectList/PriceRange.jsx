import React, { useState } from 'react';

const PriceRange = ({ nextQuestion ,setJsonData}) => {
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [BtnDisabled, setBtnDisabled] = useState(false);
  const [inputsDisabled, setInputsDisabled] = useState(false); 

  const handleSaveClick = () => {

    if(minAmount && maxAmount){
      setInputsDisabled(true); 
      setBtnDisabled(true)
      setJsonData((prevJsonData) => ({
        ...prevJsonData,
        min_price: minAmount,
        max_price: maxAmount,
      }));
    }else{
      alert('please enter the data')
    }
    
  };

  const handleNextClick = () => {
    setIsButtonDisabled(true);
    nextQuestion();
  };

  console.log(minAmount, maxAmount);

  return (
    <div>
      <input
        type="text"
        placeholder="Min Amount (e.g., 23.2Lac)"
        value={minAmount}
        onChange={(e) => setMinAmount(e.target.value)}
        disabled={inputsDisabled} // Disable the input field
      />
      <input
        type="text"
        placeholder=" Max Amount (e.g., 55.2Cr)"
        value={maxAmount}
        onChange={(e) => setMaxAmount(e.target.value)}
        disabled={inputsDisabled} // Disable the input field
      />
      <br />
      <button onClick={handleSaveClick} disabled={BtnDisabled}>Save</button>
      <button onClick={handleNextClick} disabled={isButtonDisabled}>
        Next
      </button>
    </div>
  );
};

export default PriceRange;
