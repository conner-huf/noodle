import React, { useState, useEffect } from 'react'
import './WidgetSections.css'
import SearchWidget from '../SearchWidget/SearchWidget';
import ConcertsWidget from '../ConcertsWidget/ConcertsWidget';
import MapWidget from '../MapWidget/MapWidget';

export const WidgetSections = () => {

  const BASE_URL = 'https://noodle-backend-221e49e8efe6.herokuapp.com';

  const [city, setCity] = useState(null);
  const [concertData, setConcertData] = useState([]);
  const [selectedConcert, setSelectedConcert] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [leftSectionActive, setLeftSectionActive] = useState(false);

  useEffect(() => {
    setConcertData([]);
    // retrieve data from backend when city changes
    if (city) {
      setIsLoading(true);
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
        setIsLoading(false);
        });
    }
  }, [city]);

  return (
    <div className='app'>
        <section className={`left-section ${leftSectionActive ? 'active' : ''}`}>
          <ConcertsWidget data={concertData} selectedConcert={selectedConcert} setSelectedConcert={setSelectedConcert} isLoading={isLoading} />
        </section>
        <section className='right-section'>
            <div className='right-section-top'>
              <SearchWidget setCity={setCity} leftSectionActive={leftSectionActive} setLeftSectionActive={setLeftSectionActive} />
            </div>
            <div className='right-section-bottom'>
              <MapWidget concertData={concertData} setSelectedConcert={setSelectedConcert} selectedConcert={selectedConcert} />
            </div>
        </section>
    </div>
  )
}
