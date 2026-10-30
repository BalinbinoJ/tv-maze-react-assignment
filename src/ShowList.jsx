import { useEffect, useState } from 'react';

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const url = `https://api.tvmaze.com/search/shows?q=girls`;

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

  return (
    <div>
      <h2>Show List</h2>
      {shows.map((show) => (
        <article key={show.show.id} className="show-card">
          <h3>{show.show.name}</h3>
          <h3>{show.show.premiered}</h3>
          <h3>{show.show.summary}</h3>

        </article>
      ))}

    </div>
  );
}

export default ShowList;