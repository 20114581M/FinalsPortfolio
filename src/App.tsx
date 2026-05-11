
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
          <Route path='/FinalsPortfolio' element={<Home/>} />
          <Route path='/FinalsPortfolio/Contact' element={<Contact/>} />
          <Route path='/FinalsPortfolio/About' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
