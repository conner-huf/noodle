import React, { useState } from 'react'
import './ConcertsWidget.css'
import { ThreeDots } from 'react-loader-spinner';

import { IoTicket } from "react-icons/io5";

function ConcertsWidget({ data, selectedConcert, setSelectedConcert, isLoading }) {

  const [sortOption, setSortOption] = useState('date');

  if (isLoading) {
    return (
      <div className='widget-container'>
        <div className='inner-widget'>
          <ThreeDots
            visible={true}
            height="50"
            width="50"
            color="#3d3d3d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className='widget-container'>
        <div className='inner-widget'>
        <p>No Concerts Found</p>
        </div>
    </div>
    )
  }

  const sortedData = [...data].sort((a, b) => {
    if (sortOption === 'date') return Date.parse(a.date) - Date.parse(b.date);
    return a.name.localeCompare(b.name);
  });

  return (
    <div className='widget-container'>
      <div className='inner-widget'>
        <select className="filter-dropdown" value={sortOption} onChange={e => setSortOption(e.target.value)}>
          <option value="date">Sort by date</option>
          <option value="alphabetical">Sort alphabetically</option>
        </select>
        <div className="scrollable-widget">
          {sortedData.map((event, index) => (
            <div
            className={`concert-event ${event === selectedConcert ? 'selected' : ''}`}
            key={index}
            onClick={() => setSelectedConcert(event)}
            >
              <h4 className="event-name">{event.name}</h4>
              <div className='date-and-button'>
                <p className="event-date">{event.date}</p>
                <a href={event.url} rel="noreferrer" target="_blank" className="tickets-button">
                  <IoTicket className='ticket-logo'/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConcertsWidget
