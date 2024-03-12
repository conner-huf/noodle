import React, { useState } from 'react'
import './ConcertsCard.css'
import { IoTicket } from "react-icons/io5";


export const ConcertsCard = ({ data, selectedConcert, setSelectedConcert }) => {
  const [sortOption, setSortOption] = useState('date');

  if (data.length === 0) {
    return (
      <div className="scrollable-widget">
        <p className="no-concerts-found">No concerts found</p>
      </div>
    )
  }

  const sortedData = [...data].sort((a, b) => {
    if (a === selectedConcert) return -1;
    if (b === selectedConcert) return 1;
    if (sortOption === 'date') return Date.parse(a.date) - Date.parse(b.date);
    if (sortOption === 'alphabetical') return a.name.localeCompare(b.name);
  });

  return (
    <div className='concert-card-filter-and-display'>
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
  )
}
