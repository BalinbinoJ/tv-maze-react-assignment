// ShowSearchForm.jsx
import { useState, useEffect } from 'react';
function ShowSearchForm() {
    const [title, setTitle] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        /*
        useEffect(() => {
    const fetchShows = async () => {
      const url = `https://api.tvmaze.com/search/shows?q=${title}`;
      const response = await fetch(url);
      if (!response.ok) {
        console.error('Failed to fetch shows');
        return;
      }
      const data = await response.json();
      setTitle(data);
    };

    fetchShows();
  }, []);
  */
    };
    

    return (
        <div className='form'>
        <h2> What Show Are You Looking For?</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default ShowSearchForm;


