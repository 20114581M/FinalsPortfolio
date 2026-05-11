
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Navigations from './Navigations'
function App() {


  return (
    <>
      <BrowserRouter>
      <Navigations/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/About' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
