import React, { useEffect, useState } from 'react';
import './Main.css';

import {ConcertsCard} from '../ConcertsCard/ConcertsCard';
import LeafletMap from '../LeafletMap/LeafletMap';

function Main({ city, sidebarActive }) {
  const [concertData, setConcertData] = useState([]);
  const [selectedConcert, setSelectedConcert] = useState(null);

  // -------------------------------------- //

  const BASE_URL = 'https://noodle-backend-221e49e8efe6.herokuapp.com';

  // -------------------------------------- //
  // The above line is for production, the below line is for local development.
  // -------------------------------------- //

  // const BASE_URL = 'http://localhost:5000'

  // -------------------------------------- //

  useEffect(() => {
    setConcertData([]);
    // retrieve data from backend when city changes
    if (city) {
      fetch(`${BASE_URL}/concert_data_city/${city}`)
        .then(response => response.json())
        .then(data => {
          const formattedData = data.map(concert => {

            const name = concert._embedded?.attractions?.[0]?.name || '';
            const genre = concert.classifications?.[0]?.genre?.name || '';
            const venue = concert._embedded?.venues?.[0]?.name || '';
            const location = concert._embedded?.venues?.[0]?.location || '';
            const date = concert.dates?.start?.localDate || '';
            const url = concert._embedded?.attractions?.[0]?.url || '';

            return {
              // include only the properties you care about
              name,
              genre,
              venue,
              location,
              date,
              url
            };
          });
        console.log(formattedData);
        setConcertData(formattedData);
        });
    }
  }, [city]);

  return (
    <div className='main-content-container'>
      <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
        { concertData && <ConcertsCard data={concertData} selectedConcert={selectedConcert} setSelectedConcert={setSelectedConcert}/> }
      </div>
      <div className='main-display'>
        <LeafletMap concertData={concertData} setSelectedConcert={setSelectedConcert} selectedConcert={selectedConcert} />
      </div>
    </div>
  );
}

export default Main;