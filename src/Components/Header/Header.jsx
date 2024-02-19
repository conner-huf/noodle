import React, { useState } from 'react';
import './Header.css';

function Header({ setArtistName }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setArtistName(inputValue);
  };

  return (
    <div className='search-boxes'>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Header;
