import React, { useState, useEffect } from 'react';
import { months } from '../../PropertyData';

const Availability = ({ setAvailableDateValue }) => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    if (selectedMonth && selectedYear) {
      setAvailableDateValue((previous) => ({
        ...previous,
        'available_date': [
          selectedMonth.key,
          selectedYear
        ],
      }));
    }
  }, [selectedMonth, selectedYear, setAvailableDateValue]);

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

  return (
    <div style={{ marginRight: '10px', display: 'flex', gap: '0.50rem' }}>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {selectedMonth ? selectedMonth.name : 'Month'}
        </button>
        <ul className="dropdown-menu">
          {months.map((month, index) => (
            <li key={index}>
              <a className="dropdown-item" onClick={() => setSelectedMonth(month)}>
                {month.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {selectedYear || 'Year'}
        </button>
        <ul className="dropdown-menu">
          {years.map((year, index) => (
            <li key={index}>
              <a className="dropdown-item" onClick={() => setSelectedYear(year)}>
                {year}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Availability;