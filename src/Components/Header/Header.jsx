import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header({ setCity, setSidebarActive, sidebarActive }) {
  const [cityValue, setCityValue] = useState('');

  const handleCitySubmit = (event) => {
    event.preventDefault();
    setCity(cityValue);
  };

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <header className="header-container">
      <button className="sidebar-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </button>
      <div className='search-boxes'>
        <form className="city-form" onSubmit={handleCitySubmit}>
          <input
            type="text"
            value={cityValue}
            onChange={(event) => setCityValue(event.target.value)}
            placeholder="City"
          />
          <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
