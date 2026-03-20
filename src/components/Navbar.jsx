import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import textLogo from '../assets/logos/ComdataTextLogoTransparent-BEcFGLeV.png'

const navLinks = [
  { name: 'Home', path: '/', section: null },
  { name: 'About Us', path: '/', section: 'about' },
  { name: 'Services', path: '/', section: 'services' },
  { name: 'Life@ComData', path: '/life', section: null },
  { name: 'Career', path: '/career', section: null },
  { name: 'Contact', path: '/contact', section: null },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (link) => {
    setMenuOpen(false)
    if (link.path !== location.pathname) {
      navigate(link.path)
      if (link.section) {
        setTimeout(() => {
          document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth' })
        }, 200)
      }
    } else if (link.section) {
      document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const isHome = location.pathname === '/'
  const bgClass = scrolled || !isHome
    ? 'bg-white shadow-md text-gray-800'
    : 'bg-transparent text-white'

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 font-[Inter,sans-serif] transition-all duration-300 ${bgClass}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center cursor-pointer"
        onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
      >
        <div className="w-[8rem] md:w-[12rem]">
          <img alt="ComData Logo" className="w-full object-contain" src={textLogo} />
        </div>
      </motion.div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm lg:text-base font-medium">
        {navLinks.map((link, i) => (
          <motion.li
            key={link.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="cursor-pointer transition-all duration-300 relative group hover:text-[#00aeef]"
            onClick={() => handleNavClick(link)}
          >
            {link.name}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-[#00aeef]" />
          </motion.li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden"
          >
            <ul className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="cursor-pointer text-gray-800 hover:text-blue-500 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all"
                  onClick={() => handleNavClick(link)}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
