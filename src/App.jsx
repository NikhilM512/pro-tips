import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Registration from './pages/Registration';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
      </Routes>
    </>
  )
}

export default App
