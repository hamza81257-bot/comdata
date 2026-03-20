import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const aboutLinks = [
  { label: 'About Company', to: '/#about' },
  { label: 'Services', to: '/#services' },
  { label: 'Career', to: '/career' },
  { label: 'Home', to: '/' },
]

const servicesCol1 = [
  'Secure Hardware Infrastructure',
  'Cloud & On-Premise Deployment',
  'Web & Mobile App Development',
  'Custom Integration',
  'DevOps, CI/CD, Containerization',
  'Microservices & API Management',
  'IT Assets Management',
  'WiFi & Network Solutions',
]

const servicesCol2 = [
  'Data Lakes & Warehouses',
  'Visualization (Power BI, Tableau)',
  'Advanced Analytics & Forecasting',
  'AI/ML & Generative AI Solutions',
  'Digital Transformation Roadmap',
  'Process Optimization & Automation',
  'Governance & Compliance',
  'Business Intelligence & Change Management',
]

export default function Footer() {
  const navigate = useNavigate()

  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white border-t border-gray-200 py-12 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center md:text-left">About</h3>
            <ul className="space-y-3">
              {aboutLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.to}
                    onClick={(e) => {
                      e.preventDefault()
                      if (link.to.startsWith('/#')) {
                        navigate('/')
                        setTimeout(() => {
                          document.getElementById(link.to.slice(2))?.scrollIntoView({ behavior: 'smooth' })
                        }, 200)
                      } else {
                        navigate(link.to)
                        window.scrollTo({ top: 0 })
                      }
                    }}
                    className="text-gray-600 hover:text-[#00aeef] transition-colors duration-200 block text-center md:text-left w-full"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <ul className="space-y-3 text-center md:text-right w-full">
              {servicesCol1.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                >
                  <span className="text-gray-600 hover:text-[#00aeef] transition-colors duration-200 cursor-pointer block">
                    {s}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <ul className="space-y-3 text-center md:text-right w-full">
              {servicesCol2.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                >
                  <span className="text-gray-600 hover:text-[#00aeef] transition-colors duration-200 cursor-pointer block">
                    {s}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t-2 border-gray-400 mt-12 pt-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3 relative">
                Mumbai
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#00aeef]" />
              </h4>
              <p className="text-gray-600 leading-relaxed">
                4th Floor, Naik Brothers apartment, Near Laxmi book<br />
                Depot, Lohar Ali Road, Thane (W).
              </p>
            </div>
            <div className="lg:text-right">
              <h4 className="text-lg font-semibold text-gray-900 mb-3 relative lg:inline-block">
                Dubai, New Zealand
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-green-500" />
              </h4>
              <p className="text-gray-600">Expanding Soon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
