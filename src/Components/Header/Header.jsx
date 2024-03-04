import React, { useState } from 'react';
import './Header.css';

function Header({ setCity }) {
  const [cityValue, setCityValue] = useState('');

  const handleCitySubmit = (event) => {
    event.preventDefault();
    setCity(cityValue);
  };

  return (
    <div className='search-boxes'>
      <form className="city-form" onSubmit={handleCitySubmit}>
        <input
          type="text"
          value={cityValue}
          onChange={(event) => setCityValue(event.target.value)}
          placeholder="City"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Header;
