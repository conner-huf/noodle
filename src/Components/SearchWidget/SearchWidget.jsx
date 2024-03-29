import React, { useState } from 'react'
import './SearchWidget.css'
import { faEllipsisV } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchWidget({ setCity, setLeftSectionActive, leftSectionActive }) {
  const [cityValue, setCityValue] = useState('');

  const handleCitySubmit = (event) => {
    event.preventDefault();
    setCity(cityValue);
  };

  const toggleSidebar = () => {
    setLeftSectionActive(!leftSectionActive);
  };

  return (
    <div className='widget-container'>
        <div className='inner-search-widget'>
          <div className='inner-widget-left'>
            <FontAwesomeIcon className='sidebarButton' onClick={toggleSidebar} icon={faEllipsisV} />
          </div>
          <div className='inner-widget-center'>
            <form className='city-search-form' onSubmit={handleCitySubmit}>
              <input
                type='text'
                value={cityValue}
                onChange={(e) => setCityValue(e.target.value)}
                placeholder='Enter city name'
              />
              <button type='submit'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
          <div className='inner-widget-right'></div>
        </div>
    </div>
  )
}

export default SearchWidget