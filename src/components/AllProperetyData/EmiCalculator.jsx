import React, { useState } from 'react';

const MortgageCalculator = () => {
  const [emiData, setEmiData] = useState({
    total_amount: '',
    down_payment: '',
    interest: '',
    term_year: '',
    pay_term: 'monthly',
  });

  const [emiResult, setEmiResult] = useState(null);

  const handleEmiChange = (e) => {
    const { name, value } = e.target;
    setEmiData({
      ...emiData,
      [name]: value,
    });
  };

  const submitEmiData = (e) => {
    e.preventDefault();
    const { total_amount, down_payment, interest, term_year, pay_term } = emiData;

    const principal = total_amount - down_payment;
    const monthlyInterest = interest / 100 / 12;
    const numberOfPayments = term_year * 12;

    const emi =
      (principal * monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) /
      (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

    setEmiResult(emi.toFixed(2));
  };

  const handleCalculateAgain = () => {
    setEmiResult(null);
    setEmiData({
      total_amount: '',
      down_payment: '',
      interest: '',
      term_year: '',
      pay_term: 'monthly',
    });
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <h4>Mortgage Calculator</h4>
      </div>
      <div className="card-body">
        {emiResult === null ? (
          <form id="mortgage_calculator" onSubmit={submitEmiData}>
            <div className="input-group floating-label-group mt-0">
              <span className="input-group-text currency-txt" style={{ padding: '0.375rem 0.335rem' }}></span>
              <input
                type="number"
                step="0.1"
                name="total_amount"
                className="form-control"
                placeholder=" "
                required
                value={emiData.total_amount}
                onChange={handleEmiChange}
              />
              <label className="floating-label">Total Amount</label>
            </div>
            <div className="input-group floating-label-group mb-3">
              <span className="input-group-text" style={{ padding: '0.375rem 0.335rem' }}></span>
              <input
                type="number"
                step="0.1"
                name="down_payment"
                className="form-control"
                placeholder=" "
                required
                value={emiData.down_payment}
                onChange={handleEmiChange}
              />
              <label className="floating-label">Down Payment</label>
            </div>
            <div className="input-group floating-label-group mb-3">
              <span className="input-group-text">
                <i className="icon-feather-percent"></i>
              </span>
              <input
                type="number"
                step="0.01"
                name="interest"
                className="form-control"
                placeholder=" "
                required
                value={emiData.interest}
                onChange={handleEmiChange}
              />
              <label className="floating-label">Interest Rate</label>
            </div>
            <div className="input-group floating-label-group mb-3">
              <span className="input-group-text">
                <i className="icon-feather-calendar"></i>
              </span>
              <input
                type="number"
                step="0.5"
                name="term_year"
                className="form-control"
                placeholder=" "
                required
                value={emiData.term_year}
                onChange={handleEmiChange}
              />
              <label className="floating-label">Loan Term (Years)</label>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="icon-feather-clock"></i>
              </span>
              <select
                className="form-control"
                name="pay_term"
                id="pay_term"
                required
                value={emiData.pay_term}
                onChange={handleEmiChange}
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-site">
                Calculate EMI
              </button>
            </div>
          </form>
        ) : (
          <div className="mortgage-calculator-emi text-center">
            <strong>EMI: ${emiResult}</strong>
            <div className="d-grid mt-3">
              <button
                type="button"
                className="btn btn-site mortgage-calculator-again"
                onClick={handleCalculateAgain}
              >
                Calculate EMI Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;
