import React from 'react'
import './ConcertsCard.css'
import { IoTicket } from "react-icons/io5";


export const ConcertsCard = ({ data }) => {
  
  if (data.length === 0) {
    return (
      <div className="scrollable-widget">
        <p>No concerts found</p>
      </div>
    )
  }

  const sortedData = [...data].sort((a, b) => Date.parse(a.dates.start.localDate) - Date.parse(b.dates.start.localDate));

  return (
    <div className="scrollable-widget">
      {sortedData.map((event, index) => (
        <div key={index}>
          <h4 className="event-name">{event.name}</h4>
          <div className='date-and-button'>
            <p className="event-date">{event.dates.start.localDate}</p>
            <a href={event.url} rel="noreferrer" target="_blank" className="tickets-button">
              <IoTicket className='ticket-logo'/>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
