import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function CTA() {
  const navigate = useNavigate()

  return (
    <section
      id="work-with-us"
      className="relative min-h-[400px] flex items-center justify-center px-4 py-16 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgb(30, 60, 145) 0%, rgb(58, 128, 245) 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-10"
        >
          <svg width="200" height="200" viewBox="0 0 200 200" className="text-white">
            <defs>
              <pattern id="hexPattern1" patternUnits="userSpaceOnUse" width="40" height="35">
                <polygon points="20,5 35,15 35,25 20,35 5,25 5,15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#hexPattern1)" />
          </svg>
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 opacity-10"
        >
          <svg width="200" height="200" viewBox="0 0 200 200" className="text-white">
            <rect width="200" height="200" fill="url(#hexPattern1)" />
          </svg>
        </motion.div>
        <motion.div
          animate={{ y: [-2, 2, -2], scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-10 left-1/4 w-4 h-4 bg-white rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [2, -2, 2], scale: [1, 0.97, 1] }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute bottom-10 right-1/4 w-6 h-6 bg-white rounded-full opacity-15"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
        >
          <span className="inline-block">Scale Your Business With</span>
          <br />
          <span className="inline-block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">US</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Learn how our proven solutions can help you achieve consistent quality and higher yields.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => navigate('/contact')}
            className="bg-white text-[#00aeef] font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10">Work with us</span>
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-10" />
    </section>
  )
}
