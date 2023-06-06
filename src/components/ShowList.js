import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowList = ({ onSelectShow }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.log('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div>
      <h1>TV Shows</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.show.id}>
            <h3>{show.show.name}</h3>
            <img src={show.show.image?.medium} alt={show.show.name} />
            <p>{show.show.summary}</p>
            <button onClick={() => onSelectShow(show.show)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
