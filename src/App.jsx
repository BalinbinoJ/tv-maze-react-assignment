import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Title from './title'
import ShowSearchForm from './ShowSearchForm'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Title/>
    <ShowSearchForm/>
    </>
  )
}

export default App
