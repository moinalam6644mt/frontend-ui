import React, { useState ,useEffect} from 'react';
import { maxValue } from '../Property/PropertyData';
import { minValue } from '../Property/PropertyData';

const MinMaxRange = ({ handleMinMaxOption,handleButtonClick ,setMinData,setMaxData}) => {
    const [minval, setMinval] = useState('');
    const [maxval, setMaxval] = useState('');

    useEffect(()=>{
        setMinData(minval)
        setMaxData(maxval)
    },[minval,maxval])

    const handleMinClick = (e) => {
        const min_val = e.target.getAttribute('value');
        setMinval(min_val);
        handleButtonClick(createSyntheticEvent(minval));
    };

    const handleMaxClick = (e) => {
        const max_val = e.target.getAttribute('value');
        setMaxval(max_val);
        handleButtonClick(createSyntheticEvent(maxval))
    };

    const createSyntheticEvent = (value) => ({
        preventDefault: () => {},
        target: { value }
    });

    return (
        <div style={{ marginRight: '10px', display: 'flex', gap: '0.50rem' }}>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    name='super_area_min'
                    onClick={handleMinMaxOption}
                >
                    {minval ? minval : "Min"}
                </button> 
                <span>to</span>
                <ul className="dropdown-menu">
                    {minValue.map((min, index) => (
                        <li key={index}>
                            <a className="dropdown-item" value={min.name} onClick={handleMinClick}>
                                {min.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    name='super_area_max'
                    onClick={handleMinMaxOption}
                >
                   {maxval ? maxval : "Max"}
                </button>
                <ul className="dropdown-menu">
                    {maxValue.map((max, index) => (
                        <li key={index}>
                            <a className="dropdown-item" value={max.name} onClick={handleMaxClick}>
                                {max.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MinMaxRange;
