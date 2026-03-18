import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import LifeAtComData from './pages/LifeAtComData'
import Career from './pages/Career'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <ScrollToTop />
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className={`transition-opacity duration-500 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/life" element={<LifeAtComData />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
