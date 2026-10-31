import { useState } from 'react'
import './App.css'
import Title from './title'
import ShowSearchForm from './ShowSearchForm'
import ShowList from './ShowList'

function App() {
  const [title, setTitle] = useState('');

  const handleTitle = (data) => {
    setTitle(data);
    handleSubmit(data);
    fetchShows(data);
  };


  return (
    <>
      <Title />
      <ShowSearchForm handleSubmit={handleTitle} />
      <ShowList/>
    </>
  );
}

export default App
