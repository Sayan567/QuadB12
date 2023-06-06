import React from 'react';

const ShowDetails = ({ show, onBookTicket }) => {
  const handleBookTicket = () => {
    onBookTicket(show.name);
  };

  return (
    <div>
      <h1>{show.name}</h1>
      <img src={show.image?.medium} alt={show.name} />
      <p>{show.summary}</p>
      <button onClick={handleBookTicket}>Book Ticket</button>
    </div>
  );
};

export default ShowDetails;
