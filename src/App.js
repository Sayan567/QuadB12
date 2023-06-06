import React, { useState } from 'react';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import TicketBookingForm from './components/TicketBookingForm';

const App = () => {
  const [selectedShow, setSelectedShow] = useState(null);
  const [bookingData, setBookingData] = useState(null);

  const handleSelectShow = (show) => {
    setSelectedShow(show);
  };

  const handleBookTicket = (movieName) => {
    setSelectedShow(null);
    setBookingData({ movieName });
  };

  const handleFormSubmit = (formData) => {
    // Perform necessary actions with the form data, such as storing it in local/session storage
    console.log('Form Data:', formData);
    setBookingData(null);
  };

  return (
    <div>
      {selectedShow && !bookingData && (
        <ShowDetails show={selectedShow} onBookTicket={handleBookTicket} />
      )}

      {bookingData && (
        <TicketBookingForm movieName={bookingData.movieName} onFormSubmit={handleFormSubmit} />
      )}

      {!selectedShow && !bookingData && <ShowList onSelectShow={handleSelectShow} />}
    </div>
  );
};

export default App;
