// ShowSearchForm.jsx
import { useState } from 'react';
function ShowSearchForm() {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form from actually submitting
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


