import { useState, } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import { Projects } from './Components/Project';
import { Contact } from './Components/ContactForm';
import { Footer } from './Components/Footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App"></div>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
