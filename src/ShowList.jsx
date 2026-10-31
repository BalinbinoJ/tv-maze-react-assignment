import { useEffect, useState } from 'react';
import './style.css';

function ShowList() {
  const [shows, setShows] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchShows = async (title) => {
      const url = `https://api.tvmaze.com/search/shows?q=${title}`;

      const response = await fetch(url);
      if (!response.ok) {
        console.error('Failed to fetch shows');
        return;
      }
      const data = await response.json();
      setShows(data);
    };

    fetchShows();
  }, []);

  useEffect(() => {
    const fetchShowsCharacters = async (id) => {
      const url = `https://api.tvmaze.com/shows/${id}/cast`;

      const response = await fetch(url);
      if (!response.ok) {
        console.error('Failed to fetch show characters');
        return;
      }
      const data = await response.json();
      setCast(data);
    };

    fetchShowsCharacters();
  }, []);

  return (
    <div>
      <h2>Show List</h2>
      {shows.map((show) => (
        <article key={show.show.id} className="show-card">
          <h3>Title: {show.show.name}</h3>
          <h3>Premiered: {show.show.premiered}</h3>
          <h3>Last Updated: {show.show.updated}</h3>
          <h3>Summary: {show.show.summary}</h3>
          <h3>Genres: {show.show.genres?.join(', ')}</h3>
          <h3>Average Rating: {show.show.rating?.average}</h3>
          <a href={show.show.url}>TV Maze page: {show.show.name}</a>

          {cast.map((cast) => (
          <h3 key={cast.person.id}>
            Cast: {cast.person.name}
          </h3>
        ))}
        </article>
      ))}
    </div>

  );
}

export default ShowList;