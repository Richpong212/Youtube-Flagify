import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Favorite from '../components/Favorite'
import Country from '../pages/Country'
import Error from '../pages/Error'
import HomePage from '../pages/HomePage'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

const Index = () => {
  return (
    <BrowserRouter>
    <nav>
       <Navbar />
    </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:id" element={<Country />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default Index
